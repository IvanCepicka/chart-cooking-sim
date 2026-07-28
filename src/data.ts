import type { Ingredient, Spice } from './types'

import potatoIcon from './assets/icons/potato.svg'
import saltIcon from './assets/icons/salt.svg'
import waterIcon from './assets/icons/water.svg'
import basilIcon from './assets/icons/basil.svg'
import driedBasilIcon from './assets/icons/driedbasil.svg'
import lemonIcon from './assets/icons/lemon.svg'
import troutIcon from './assets/icons/trout.svg'
import salmonIcon from './assets/icons/salmon.svg'
import blackPepperIcon from './assets/icons/blackpepper.svg'

export const ingredients: Ingredient[] = [
  {
    type: 'solid',
    id: 'potato',
    name: 'Potato',
    cost: 1,
    icon: potatoIcon,
    unlocks: 1,
  },
  {
    type: 'liquid',
    id: 'water',
    name: 'Water',
    cost: 0,
    icon: waterIcon,
    unlocks: 1,
  },
  {
    type: 'solid',
    id: 'basil',
    name: 'Basil Leaf',
    cost: 0.3,
    icon: basilIcon,
    unlocks: 2,
  },
  {
    type: 'solid',
    id: 'lemon',
    name: 'Lemon',
    cost: 1.5,
    icon: lemonIcon,
    unlocks: 2,
  },
  {
    type: 'solid',
    id: 'trout',
    name: 'Trout',
    cost: 8,
    icon: troutIcon,
    unlocks: 2,
  },
  {
    type: 'solid',
    id: 'salmon',
    name: 'Salmon',
    cost: 12,
    icon: salmonIcon,
    unlocks: 3,
  },
]

export const spices: Spice[] = [
  {
    id: 'salt',
    name: 'Salt',
    cost: 0.05,
    icon: saltIcon,
    unlocks: 1,
  },
  {
    id: 'driedbasil',
    name: 'Dried Basil',
    cost: 0.2,
    icon: driedBasilIcon,
    unlocks: 2,
  },
  {
    id: 'blackpepper',
    name: 'Black Pepper',
    cost: 0.1,
    icon: blackPepperIcon,
    unlocks: 3,
  },
]

ingredients.sort((a, b) => a.id.localeCompare(b.id))
spices.sort((a, b) => a.id.localeCompare(b.id))
