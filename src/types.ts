import type { Edge, Node } from '@vue-flow/core'

export interface Spice {
  id: string
  name: string
  cost: number
  icon?: string
  unlocks: number
}

export interface SolidIngredientCut {
  id: string
  name: string
  count: number
}

export interface Ingredient {
  type: 'solid' | 'liquid'
  id: string
  name: string
  cost: number
  icon?: string
  unlocks: number
}

export interface RecipeCalculated {
  cost: number
  sell: number
  time: number
}

export interface Recipe {
  id: string
  name: string
  nodes: Node[]
  edges: Edge[]
}
