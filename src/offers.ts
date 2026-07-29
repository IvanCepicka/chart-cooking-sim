import type { Offers } from './types'

export const offers: Offers = [
  [
    {
      ingredient: 'carrot',
      cost: 25,
      unlocks: 1,
      spice: false,
    },
    {
      ingredient: 'garlic',
      cost: 150,
      unlocks: 4,
      spice: false,
    },
    {
      ingredient: 'garlicpowder',
      cost: 100,
      unlocks: 4,
      spice: true,
    },
  ],
  [
    {
      ingredient: 'bellpepper',
      cost: 100,
      unlocks: 3,
      spice: false,
    },
    {
      ingredient: 'chilipowder',
      cost: 200,
      unlocks: 6,
      spice: true,
    },
    {
      ingredient: 'chilipepper',
      cost: 400,
      unlocks: 6,
      spice: false,
    },
  ],
]
