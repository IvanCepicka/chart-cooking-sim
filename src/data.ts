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
import onionIcon from './assets/icons/onion.svg'
import vegetableBrothIcon from './assets/icons/vegetablebroth.svg'
import chickenIcon from './assets/icons/chicken.svg'
import chickenBrothIcon from './assets/icons/chickenbroth.svg'
import tomatoIcon from './assets/icons/tomato.svg'
import lettuceIcon from './assets/icons/lettuce.svg'
import carrotIcon from './assets/icons/carrot.svg'
import garlicIcon from './assets/icons/garlic.svg'
import garlicPowderIcon from './assets/icons/garlicpowder.svg'
import bellPepperIcon from './assets/icons/bellpepper.svg'
import chiliPepperIcon from './assets/icons/chilipepper.svg'
import chiliPowderIcon from './assets/icons/chilipowder.svg'

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
  {
    type: 'solid',
    id: 'onion',
    name: 'Onion',
    cost: 1,
    icon: onionIcon,
    unlocks: 4,
  },
  {
    type: 'liquid',
    id: 'vegetablebroth',
    name: 'Vegetable Broth',
    cost: 0.004,
    icon: vegetableBrothIcon,
    unlocks: 4,
  },
  {
    type: 'solid',
    id: 'chicken',
    name: 'Chicken',
    cost: 5.5,
    icon: chickenIcon,
    unlocks: 5,
  },
  {
    type: 'liquid',
    id: 'chickenbroth',
    name: 'Chicken Broth',
    cost: 0.006,
    icon: chickenBrothIcon,
    unlocks: 5,
  },
  {
    type: 'solid',
    id: 'tomato',
    name: 'Tomato',
    cost: 1.2,
    icon: tomatoIcon,
    unlocks: 6,
  },
  {
    type: 'solid',
    id: 'lettuce',
    name: 'Lettuce',
    cost: 2,
    icon: lettuceIcon,
    unlocks: 6,
  },
  {
    type: 'solid',
    id: 'carrot',
    name: 'Carrot',
    cost: 1,
    icon: carrotIcon,
    unlocks: 'store',
  },
  {
    type: 'solid',
    id: 'bellpepper',
    name: 'Bell Pepper',
    cost: 1.2,
    icon: bellPepperIcon,
    unlocks: 'store',
  },
  {
    type: 'solid',
    id: 'chilipepper',
    name: 'Chili Pepper',
    cost: 1.3,
    icon: chiliPepperIcon,
    unlocks: 'store',
  },
  {
    type: 'solid',
    id: 'garlic',
    name: 'Garlic',
    cost: 1.2,
    icon: garlicIcon,
    unlocks: 'store',
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
  {
    id: 'garlicpowder',
    name: 'Garlic Powder',
    cost: 0.2,
    icon: garlicPowderIcon,
    unlocks: 'store',
  },
  {
    id: 'chilipowder',
    name: 'Chili Powder',
    cost: 0.2,
    icon: chiliPowderIcon,
    unlocks: 'store',
  },
]

ingredients.sort((a, b) => a.id.localeCompare(b.id))
spices.sort((a, b) => a.id.localeCompare(b.id))
