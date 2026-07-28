import { ingredients, spices } from './data'
import type { Recipe, RecipeCalculated } from './types'

interface FoodState {
  solidCost: number
  liquidCost: number

  solidSell: number
  liquidSell: number

  solidAmount: number
  liquidAmount: number
}

function emptyState(): FoodState {
  return {
    solidCost: 0,
    liquidCost: 0,
    solidSell: 0,
    liquidSell: 0,
    solidAmount: 0,
    liquidAmount: 0,
  }
}

function addStates(a: FoodState, b: FoodState): FoodState {
  return {
    solidCost: a.solidCost + b.solidCost,
    liquidCost: a.liquidCost + b.liquidCost,

    solidSell: a.solidSell + b.solidSell,
    liquidSell: a.liquidSell + b.liquidSell,

    solidAmount: a.solidAmount + b.solidAmount,
    liquidAmount: a.liquidAmount + b.liquidAmount,
  }
}

export function calculateRecipe(recipe: Recipe): RecipeCalculated {
  let cost = 0
  let sell = 0
  let time = 0

  const nodeMap = new Map(recipe.nodes.map((node) => [node.id, node]))

  function calculateNode(id: string): FoodState {
    const node = nodeMap.get(id)

    if (!node) {
      return {
        solidCost: 0,
        liquidCost: 0,
        solidSell: 0,
        liquidSell: 0,
        solidAmount: 0,
        liquidAmount: 0,
      }
    }

    if (node.type === 'raw') {
      const ingredient = ingredients.find((i) => i.id === node.data.id)

      const cost = (ingredient?.cost ?? 0) * node.data.count

      return {
        solidCost: ingredient?.type === 'solid' ? cost : 0,
        liquidCost: ingredient?.type === 'liquid' ? cost : 0,

        solidSell: ingredient?.type === 'solid' ? cost * 1.5 : 0,
        liquidSell: ingredient?.type === 'liquid' ? cost * 1.5 : 0,

        solidAmount: ingredient?.type === 'solid' ? node.data.count : 0,

        liquidAmount: ingredient?.type === 'liquid' ? node.data.count : 0,
      }
    }

    if (node.type === 'spice') {
      const spice = spices.find((s) => s.id === node.data.id)
      const input = getInputs(id).reduce(
        (sum, n) => addStates(sum, calculateNode(n)),
        emptyState(),
      )

      const cost = (spice?.cost ?? 0) * node.data.amount

      return {
        solidCost: input.solidCost + cost,
        solidSell: input.solidSell + cost * 1.5,
        liquidCost: input.liquidCost + cost,
        liquidSell: input.liquidSell + cost * 1.5,
        solidAmount: input.solidAmount,
        liquidAmount: input.liquidAmount,
      }
    }

    if (node.type === 'trash') {
      const input = getInputs(id).reduce(
        (sum, n) => addStates(sum, calculateNode(n)),
        emptyState(),
      )

      const keep = 1 - node.data.amount / 100

      return {
        solidCost: input.solidCost * keep,
        solidSell: input.solidSell * keep,
        liquidCost: input.liquidCost,
        liquidSell: input.liquidSell,
        solidAmount: input.solidAmount * keep,
        liquidAmount: input.liquidAmount,
      }
    }

    if (node.type === 'cut') {
      const input = getInputs(id).reduce(
        (sum, n) => addStates(sum, calculateNode(n)),
        emptyState(),
      )

      time += (node.data.pieces - 1) * input.solidAmount

      return {
        solidCost: input.solidCost,
        solidSell: input.solidSell * (1 + 0.005 * (node.data.pieces - 1)),
        liquidCost: input.liquidCost,
        liquidSell: input.liquidSell,
        solidAmount: input.solidAmount,
        liquidAmount: input.liquidAmount,
      }
    }

    if (node.type === 'blend') {
      const input = getInputs(id).reduce(
        (sum, n) => addStates(sum, calculateNode(n)),
        emptyState(),
      )

      time += 10

      return {
        solidCost: input.solidCost,
        solidSell: input.solidSell * 1.025,
        liquidCost: input.liquidCost,
        liquidSell: input.liquidSell * 1.025,
        solidAmount: input.solidAmount,
        liquidAmount: input.liquidAmount,
      }
    }

    if (['boil', 'bake', 'fry', 'deepfry', 'grill'].includes(node.type!)) {
      const input = getInputs(id).reduce(
        (sum, n) => addStates(sum, calculateNode(n)),
        emptyState(),
      )

      time += node.data.duration

      return {
        solidCost: input.solidCost,
        solidSell: input.solidSell * (1 + 0.005 * node.data.duration),
        liquidCost: input.liquidCost,
        liquidSell: input.liquidSell * (1 + 0.005 * node.data.duration),
        solidAmount: input.solidAmount,
        liquidAmount: input.liquidAmount,
      }
    }

    if (node.type === 'strain') {
      const input = getInputs(id).reduce(
        (sum, n) => addStates(sum, calculateNode(n)),
        emptyState(),
      )

      return {
        solidCost: input.solidCost,
        liquidCost: 0,

        solidSell: input.solidSell,
        liquidSell: 0,

        solidAmount: input.solidAmount,
        liquidAmount: 0,
      }
    }

    if (node.type === 'serve') {
      return getInputs(id).reduce(
        (sum, n) => addStates(sum, calculateNode(n)),
        emptyState(),
      )
    }

    return emptyState()
  }

  function getInputs(id: string) {
    return recipe.edges
      .filter((edge) => edge.target === id)
      .map((edge) => edge.source)
  }

  const serves = recipe.nodes.filter((node) => node.type === 'serve')

  for (const serve of serves) {
    const state = calculateNode(serve.id)

    cost += state.solidCost + state.liquidCost
    sell += state.solidSell + state.liquidSell
  }

  return {
    cost,
    sell,
    time,
  }
}
