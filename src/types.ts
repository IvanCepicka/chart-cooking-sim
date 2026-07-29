import type { Edge, Node } from '@vue-flow/core'

export interface Spice {
  id: string
  name: string
  cost: number
  icon?: string
  unlocks: number | 'store'
}

export interface Ingredient {
  type: 'solid' | 'liquid'
  id: string
  name: string
  cost: number
  icon?: string
  unlocks: number | 'store'
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

export interface Offer {
  ingredient: string
  cost: number
  unlocks: number
  spice: boolean
}

export type Offers = Offer[][]
