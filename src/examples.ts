import type { Recipe } from './types'

export type ExampleRecipe = Recipe & {
  unlocks: number
}

export const exampleRecipes: ExampleRecipe[] = [
  {
    id: '0360961a-8a33-4a23-a7e9-f755e8a8f67f',
    name: 'Potato Fries',
    unlocks: 1,
    nodes: [
      {
        id: '461c775c-2a49-44f8-be1e-bc5564e2d997',
        type: 'serve',
        position: { x: -78.34971869493404, y: 238.1831448325995 },
        data: {},
      },
      {
        id: '3092ff96-60e0-4aae-a626-fe08c121d8c4',
        type: 'raw',
        position: { x: 89.21035099834256, y: -731.0358942049147 },
        data: { id: 'potato', count: 2 },
      },
      {
        id: 'f8a0e9ed-7364-4198-b969-0809ec815f91',
        type: 'cut',
        position: { x: 32.58757855986883, y: -451.315033539016 },
        data: { pieces: 16 },
      },
      {
        id: '0d32295d-82f5-4b84-9a8e-159ce6b996cd',
        type: 'deepfry',
        position: { x: -34.2725927343015, y: -212.13749376853917 },
        data: { duration: 40 },
      },
      {
        id: '25d4fa10-52b8-44de-9451-82c5d6a5784d',
        type: 'spice',
        position: { x: 49.98826668210489, y: 7.879253408027452 },
        data: { id: 'salt', amount: 4 },
      },
    ],
    edges: [
      {
        id: '6867c91f-3a9a-483f-a68f-564c157b47f9',
        source: '3092ff96-60e0-4aae-a626-fe08c121d8c4',
        target: 'f8a0e9ed-7364-4198-b969-0809ec815f91',
      },
      {
        id: 'ec1a97b3-e499-4f24-a116-4e4e376cad84',
        source: 'f8a0e9ed-7364-4198-b969-0809ec815f91',
        target: '0d32295d-82f5-4b84-9a8e-159ce6b996cd',
      },
      {
        id: '7a848413-f0ac-4d8e-8ef6-8c33f8e7efc1',
        source: '0d32295d-82f5-4b84-9a8e-159ce6b996cd',
        target: '25d4fa10-52b8-44de-9451-82c5d6a5784d',
      },
      {
        id: '00969eba-218f-42c4-b581-6aa18729da55',
        source: '25d4fa10-52b8-44de-9451-82c5d6a5784d',
        target: '461c775c-2a49-44f8-be1e-bc5564e2d997',
      },
    ],
  },
  {
    id: '9657d01e-1d0a-4ef6-9c49-c604e2b63cdf',
    name: 'Trout Fillets',
    unlocks: 2,
    nodes: [
      {
        id: '88c369ad-71df-40f2-a837-cb8ce7483304',
        type: 'serve',
        position: { x: -187.21898376677802, y: 650.6985690949923 },
        data: {},
      },
      {
        id: '958f9246-5a7f-4af0-9730-06478b6fa78c',
        type: 'raw',
        position: { x: 161.9180876478337, y: -979.8417285259285 },
        data: { id: 'trout', count: 1 },
      },
      {
        id: 'e247edea-365f-4c93-be19-83401133366e',
        type: 'cut',
        position: { x: 70.09335817275192, y: -680.3460282739708 },
        data: { pieces: 2 },
      },
      {
        id: 'ffeca31c-10ea-4ebc-9de6-fc4f1d0583d2',
        type: 'trash',
        position: { x: 157.53181992631386, y: -447.8090940129317 },
        data: { amount: 25 },
      },
      {
        id: 'c38e8800-fbf5-4803-a7cc-050b89aafb11',
        type: 'spice',
        position: { x: 77.05954287900676, y: -212.2826465171533 },
        data: { id: 'driedbasil', amount: 2 },
      },
      {
        id: '63167b26-7c3c-4d08-8833-ce58f2109673',
        type: 'spice',
        position: { x: 61.80928933972956, y: 23.001544717898902 },
        data: { id: 'salt', amount: 2 },
      },
      {
        id: '6672ff0b-1c89-4be4-b780-1d6e284203cf',
        type: 'bake',
        position: { x: 165.24447516575844, y: 272.90545869918793 },
        data: { duration: 90, temperature: 160 },
      },
      {
        id: '226de777-2a6b-475a-bfeb-d5df99f88a07',
        type: 'raw',
        position: { x: -314.4569384371267, y: -302.236723266822 },
        data: { id: 'lemon', count: 1 },
      },
      {
        id: '04680f16-27fd-4dc6-995a-0f206142e886',
        type: 'cut',
        position: { x: -385.7286584867091, y: 25.737118697123833 },
        data: { pieces: 4 },
      },
      {
        id: 'f05cd7c1-9a57-45f9-b25a-2a6403b7ef24',
        type: 'trash',
        position: { x: -297.1265552533906, y: 249.95447403473213 },
        data: { amount: 75 },
      },
      {
        id: 'c51b961a-75b2-46d7-8015-9e002a629127',
        type: 'raw',
        position: { x: -721.8979145929777, y: 380.1665465446378 },
        data: { id: 'basil', count: 2 },
      },
    ],
    edges: [
      {
        id: 'dbbc2411-880d-4284-bd3b-678fe9d084d7',
        source: '958f9246-5a7f-4af0-9730-06478b6fa78c',
        target: 'e247edea-365f-4c93-be19-83401133366e',
      },
      {
        id: 'c40df539-7303-4983-9c48-374aceac8b7c',
        source: 'e247edea-365f-4c93-be19-83401133366e',
        target: 'ffeca31c-10ea-4ebc-9de6-fc4f1d0583d2',
      },
      {
        id: '1cbbda3e-a5c7-4d84-8aac-f41d6af20fab',
        source: 'ffeca31c-10ea-4ebc-9de6-fc4f1d0583d2',
        target: 'c38e8800-fbf5-4803-a7cc-050b89aafb11',
      },
      {
        id: '68f56f18-b329-4941-a7fe-65673b97fa48',
        source: 'c38e8800-fbf5-4803-a7cc-050b89aafb11',
        target: '63167b26-7c3c-4d08-8833-ce58f2109673',
      },
      {
        id: '9a271da6-b262-4361-91f3-5e3f1756ae2c',
        source: '63167b26-7c3c-4d08-8833-ce58f2109673',
        target: '6672ff0b-1c89-4be4-b780-1d6e284203cf',
      },
      {
        id: '5b808960-4eec-4589-b522-12b84fcb53af',
        source: '6672ff0b-1c89-4be4-b780-1d6e284203cf',
        target: '88c369ad-71df-40f2-a837-cb8ce7483304',
      },
      {
        id: 'f1399967-c9d3-4306-baa0-2defed9c9601',
        source: '226de777-2a6b-475a-bfeb-d5df99f88a07',
        target: '04680f16-27fd-4dc6-995a-0f206142e886',
      },
      {
        id: '86f0696f-b582-4e36-ac56-bfcf98738f0f',
        source: '04680f16-27fd-4dc6-995a-0f206142e886',
        target: 'f05cd7c1-9a57-45f9-b25a-2a6403b7ef24',
      },
      {
        id: '0af05327-1e68-4746-8b76-2f4606b0d6f3',
        source: 'f05cd7c1-9a57-45f9-b25a-2a6403b7ef24',
        target: '88c369ad-71df-40f2-a837-cb8ce7483304',
      },
      {
        id: '299337d5-2dd4-4ae3-94fc-451a5c713a52',
        source: 'c51b961a-75b2-46d7-8015-9e002a629127',
        target: '88c369ad-71df-40f2-a837-cb8ce7483304',
      },
    ],
  },
  {
    id: 'b27187f2-4bae-4de2-be84-e0af3b490062',
    name: 'Salmon Fillets',
    unlocks: 3,
    nodes: [
      {
        id: 'd257e610-6db9-446a-8c37-65322f94b940',
        type: 'serve',
        position: { x: -344.4043147938566, y: 650.0959608785032 },
        data: {},
      },
      {
        id: 'c04db41c-173b-401c-8db2-7ceb1a757b42',
        type: 'raw',
        position: { x: -9.722433647409986, y: -837.3345822376583 },
        data: { id: 'salmon', count: 1 },
      },
      {
        id: 'fbb058f4-275b-44a1-ac37-28c3785e1b0b',
        type: 'cut',
        position: { x: 39.65149710772559, y: -587.6498490999732 },
        data: { pieces: 2 },
      },
      {
        id: 'a71c0f88-bd15-4877-a576-5d807c85da21',
        type: 'trash',
        position: { x: 81.68337526774596, y: -327.35936151894344 },
        data: { amount: 25 },
      },
      {
        id: 'de02f99e-fe72-4a38-adea-f752a4e13655',
        type: 'spice',
        position: { x: 55.89187369088626, y: -90.14975393587457 },
        data: { id: 'salt', amount: 2 },
      },
      {
        id: '8c30c217-7cbe-469e-aaaf-6fe71e8bb317',
        type: 'spice',
        position: { x: -22.47116628841998, y: 137.86017682007426 },
        data: { id: 'blackpepper', amount: 2 },
      },
      {
        id: 'f56485ae-07d2-4d8c-90c3-460369fed3e4',
        type: 'bake',
        position: { x: -92.43670492961043, y: 376.28186093924717 },
        data: { duration: 90, temperature: 160 },
      },
      {
        id: 'ff9bc018-5c2b-4e08-9ba4-d3388dfa8614',
        type: 'raw',
        position: { x: -376.2015520254701, y: -421.52234015974364 },
        data: { id: 'potato', count: 2 },
      },
      {
        id: '8ef7b5f5-d226-4b54-9bab-38717beea1ef',
        type: 'raw',
        position: { x: -824.834938032813, y: -328.32619420792685 },
        data: { id: 'water', count: 500 },
      },
      {
        id: '8b0f4356-2b05-477a-8200-2758d550ac88',
        type: 'boil',
        position: { x: -477.1351589195107, y: 308.91598612682645 },
        data: { duration: 60 },
      },
      {
        id: '3726b861-4d43-49c5-b880-dff6e4a31d60',
        type: 'spice',
        position: { x: -562.025143199623, y: -39.22460421863832 },
        data: { id: 'salt', amount: 2 },
      },
    ],
    edges: [
      {
        id: 'fbe7ffdf-9048-423b-9da3-ec3b109c5cac',
        source: 'c04db41c-173b-401c-8db2-7ceb1a757b42',
        target: 'fbb058f4-275b-44a1-ac37-28c3785e1b0b',
      },
      {
        id: '589844a1-0ed6-4666-bcd8-ebf18f4c9699',
        source: 'fbb058f4-275b-44a1-ac37-28c3785e1b0b',
        target: 'a71c0f88-bd15-4877-a576-5d807c85da21',
      },
      {
        id: '356fb86a-2bed-421d-9370-eef51c233b00',
        source: 'a71c0f88-bd15-4877-a576-5d807c85da21',
        target: 'de02f99e-fe72-4a38-adea-f752a4e13655',
      },
      {
        id: 'ab33fb4c-381c-468a-96c4-56bdef63b1bf',
        source: 'de02f99e-fe72-4a38-adea-f752a4e13655',
        target: '8c30c217-7cbe-469e-aaaf-6fe71e8bb317',
      },
      {
        id: 'f510c9c9-cf07-40f3-aeea-a0a32aba3a17',
        source: '8c30c217-7cbe-469e-aaaf-6fe71e8bb317',
        target: 'f56485ae-07d2-4d8c-90c3-460369fed3e4',
      },
      {
        id: '4e33908e-3564-41dd-8ca9-1fe4f71d1c14',
        source: 'f56485ae-07d2-4d8c-90c3-460369fed3e4',
        target: 'd257e610-6db9-446a-8c37-65322f94b940',
      },
      {
        id: '0f1e752f-a663-4dbe-87a4-605b2eec6e7e',
        source: '8ef7b5f5-d226-4b54-9bab-38717beea1ef',
        target: '3726b861-4d43-49c5-b880-dff6e4a31d60',
      },
      {
        id: '6c5cb806-f897-4750-bec9-90a60daf8e22',
        source: 'ff9bc018-5c2b-4e08-9ba4-d3388dfa8614',
        target: '3726b861-4d43-49c5-b880-dff6e4a31d60',
      },
      {
        id: 'e55e371d-f08f-4edb-8c50-c08380531ee6',
        source: '3726b861-4d43-49c5-b880-dff6e4a31d60',
        target: '8b0f4356-2b05-477a-8200-2758d550ac88',
      },
      {
        id: 'cb231007-1021-4122-907c-6c76ff58ad74',
        source: '8b0f4356-2b05-477a-8200-2758d550ac88',
        target: 'd257e610-6db9-446a-8c37-65322f94b940',
      },
    ],
  },
]

exampleRecipes.sort((a, b) => a.name.localeCompare(b.name))
