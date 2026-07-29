import type { Recipe } from './types'

export interface LevelUnlockRequirement {
  type: 'level'
  level: number
}

export interface OfferUnlockRequirement {
  type: 'offer'
  path: number
  tier: number
}

export type UnlockRequirementObject =
  OfferUnlockRequirement | LevelUnlockRequirement

export type UnlockRequirement =
  UnlockRequirementObject[] | UnlockRequirementObject | number

export type ExampleRecipe = Recipe & {
  unlocks: UnlockRequirement
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
        position: { x: -434.7460968325156, y: -663.0185874888064 },
        data: { id: 'potato', count: 2 },
      },
      {
        id: '8ef7b5f5-d226-4b54-9bab-38717beea1ef',
        type: 'raw',
        position: { x: -840.3320234229133, y: -584.8890523329203 },
        data: { id: 'water', count: 500 },
      },
      {
        id: '8b0f4356-2b05-477a-8200-2758d550ac88',
        type: 'boil',
        position: { x: -477.1351589195107, y: 40.29983936508842 },
        data: { duration: 60 },
      },
      {
        id: '3726b861-4d43-49c5-b880-dff6e4a31d60',
        type: 'spice',
        position: { x: -586.1317204731124, y: -314.7283444870876 },
        data: { id: 'salt', amount: 2 },
      },
      {
        id: 'c5063923-db81-4e46-b190-3147b68b3b08',
        type: 'strain',
        position: { x: -555.1766732021429, y: 360.4066886024987 },
        data: {},
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
        id: '42e43e74-627f-48fc-9a4b-a4e9e5bc6a4f',
        source: '8b0f4356-2b05-477a-8200-2758d550ac88',
        target: 'c5063923-db81-4e46-b190-3147b68b3b08',
      },
      {
        id: 'b9ae1595-d773-4f95-9542-c8211c1d0b14',
        source: 'c5063923-db81-4e46-b190-3147b68b3b08',
        target: 'd257e610-6db9-446a-8c37-65322f94b940',
      },
    ],
  },
  {
    id: 'af197601-7166-411f-a5d8-39e353293a92',
    name: 'Potato Soup',
    unlocks: 4,
    nodes: [
      {
        id: 'ebfedd11-4b70-423c-82fd-4647ca3ae06d',
        type: 'serve',
        position: { x: -76.52604861502468, y: -179.8117021917638 },
        data: {},
      },
      {
        id: '83b03f4f-e476-499e-9e02-ca613ff10f03',
        type: 'raw',
        position: { x: -111.3826185872242, y: -1205.3974890410004 },
        data: { id: 'potato', count: 2 },
      },
      {
        id: 'a03bd064-20e5-4012-a89b-37550286c57f',
        type: 'cut',
        position: { x: -32.13761902953382, y: -947.3483078761088 },
        data: { pieces: 15 },
      },
      {
        id: 'ab7c5e57-0467-4bc5-833b-af4ee9ca46d9',
        type: 'raw',
        position: { x: -558.5099555294332, y: -1211.9262984504858 },
        data: { id: 'onion', count: 1 },
      },
      {
        id: 'd815854b-1de0-48d7-aada-aa0aece46459',
        type: 'cut',
        position: { x: -490.74784047043045, y: -963.2580920435809 },
        data: { pieces: 15 },
      },
      {
        id: 'c5a2f6ec-fe1d-415c-ac55-eb8d6a001abb',
        type: 'trash',
        position: { x: -414.3384624572307, y: -736.5201575452993 },
        data: { amount: 75 },
      },
      {
        id: '259a9a07-05b3-4630-9272-27bb0cd98ab3',
        type: 'boil',
        position: { x: -162.31029237811174, y: -456.28144101984213 },
        data: { duration: 90 },
      },
      {
        id: '21728410-dc3a-44c6-9e64-68ecc3452f58',
        type: 'raw',
        position: { x: 356.27178414875334, y: -822.5296566943961 },
        data: { id: 'vegetablebroth', count: 500 },
      },
    ],
    edges: [
      {
        id: '5d2c228a-62c2-42bd-a76c-4daa24ab2ba8',
        source: '83b03f4f-e476-499e-9e02-ca613ff10f03',
        target: 'a03bd064-20e5-4012-a89b-37550286c57f',
      },
      {
        id: '160f0a32-81d3-41cb-a770-8807ad1fd2c6',
        source: 'ab7c5e57-0467-4bc5-833b-af4ee9ca46d9',
        target: 'd815854b-1de0-48d7-aada-aa0aece46459',
      },
      {
        id: 'c4187a93-b2fe-4883-bebb-8288de379e78',
        source: 'd815854b-1de0-48d7-aada-aa0aece46459',
        target: 'c5a2f6ec-fe1d-415c-ac55-eb8d6a001abb',
      },
      {
        id: '308d402a-0681-4d7e-8cc8-1810fcd11175',
        source: 'a03bd064-20e5-4012-a89b-37550286c57f',
        target: '259a9a07-05b3-4630-9272-27bb0cd98ab3',
      },
      {
        id: '704d35a2-6e84-42e1-9906-a843a27618bc',
        source: 'c5a2f6ec-fe1d-415c-ac55-eb8d6a001abb',
        target: '259a9a07-05b3-4630-9272-27bb0cd98ab3',
      },
      {
        id: '2b5908a7-6ebc-4437-8cd9-7d3fe0b104c3',
        source: '21728410-dc3a-44c6-9e64-68ecc3452f58',
        target: '259a9a07-05b3-4630-9272-27bb0cd98ab3',
      },
      {
        id: 'ae9b2906-d04a-4d5f-abf8-661c62c0fee2',
        source: '259a9a07-05b3-4630-9272-27bb0cd98ab3',
        target: 'ebfedd11-4b70-423c-82fd-4647ca3ae06d',
      },
    ],
  },
  {
    id: '258e3db6-f68b-44ce-a542-098a8acfdf3f',
    name: 'Chicken Legs',
    nodes: [
      {
        id: 'c37c2e15-7ddf-48f8-b765-38e12ec3ebd2',
        type: 'serve',
        position: { x: -73.64873557323807, y: 775.0743052643955 },
        data: {},
      },
      {
        id: 'cbfe12c8-d53b-46d9-962d-544961cc3ad4',
        type: 'raw',
        position: { x: -443.2625635257018, y: -487.0766445050998 },
        data: { id: 'chicken', count: 1 },
      },
      {
        id: '8ce94a3d-4c7d-4661-a23b-9a0d07bc94dc',
        type: 'trash',
        position: { x: 126.13687594344879, y: -303.87474212106326 },
        data: { amount: 50 },
      },
      {
        id: '4875281f-c960-4370-b005-e4e404174e3d',
        type: 'cut',
        position: { x: 58.81177569811928, y: -527.6428085003488 },
        data: { pieces: 2 },
      },
      {
        id: '3e662ed0-d679-438f-902f-219b9d568b06',
        type: 'spice',
        position: { x: 27.088367621815053, y: -64.3336371261667 },
        data: { id: 'salt', amount: 2 },
      },
      {
        id: 'b81e2228-a0ac-472e-9e5e-0aac3f914115',
        type: 'spice',
        position: { x: 93.51460835715534, y: 176.49010214320973 },
        data: { id: 'blackpepper', amount: 2 },
      },
      {
        id: '335ef191-fce4-4d5d-b9f9-8768fc988bbf',
        type: 'bake',
        position: { x: 36.48439932371224, y: 427.43023147798976 },
        data: { duration: 90, temperature: 180 },
      },
      {
        id: 'e8a41463-6ecf-49c7-95e3-7db6b875c751',
        type: 'raw',
        position: { x: -400.5442558426571, y: -48.38757558842095 },
        data: { id: 'potato', count: 2 },
      },
      {
        id: '7e6147db-3bad-4436-8ddd-b0c69ad7947f',
        type: 'raw',
        position: { x: -902.2707256554547, y: 94.94153608400259 },
        data: { id: 'water', count: 500 },
      },
      {
        id: 'b5f13399-cc60-428d-be7b-bfff34e741b1',
        type: 'spice',
        position: { x: -477.628626906838, y: 221.154616998564 },
        data: { id: 'salt', amount: 2 },
      },
      {
        id: '34e44a1e-ff49-4bb2-a396-669b1c903f58',
        type: 'bake',
        position: { x: -702.8329474741255, y: 493.94416761360895 },
        data: { duration: 60, temperature: 180 },
      },
      {
        id: 'f9dc1687-a574-4b05-adcb-2167574bfacd',
        type: 'raw',
        position: { x: 485.181850813727, y: 141.628747109776 },
        data: { id: 'lemon', count: 1 },
      },
      {
        id: '2e8069aa-e206-4575-a283-d8f71a1b0964',
        type: 'cut',
        position: { x: 554.9774331129883, y: 366.81615115465354 },
        data: { pieces: 4 },
      },
      {
        id: '056181f4-4117-4862-9349-8f5f8e8f963f',
        type: 'trash',
        position: { x: 444.1017769658116, y: 574.2687368004273 },
        data: { amount: 75 },
      },
    ],
    edges: [
      {
        id: '589d035b-ec6a-41e5-af0f-357edd270edc',
        source: 'cbfe12c8-d53b-46d9-962d-544961cc3ad4',
        target: '4875281f-c960-4370-b005-e4e404174e3d',
      },
      {
        id: 'b21b5d64-77ef-4ccd-b0b1-8b5465f66ba6',
        source: '4875281f-c960-4370-b005-e4e404174e3d',
        target: '8ce94a3d-4c7d-4661-a23b-9a0d07bc94dc',
      },
      {
        id: '2596b40e-e4f8-46aa-aea3-fd52cdd07dd5',
        source: '8ce94a3d-4c7d-4661-a23b-9a0d07bc94dc',
        target: '3e662ed0-d679-438f-902f-219b9d568b06',
      },
      {
        id: '56ec949c-700a-48e5-893c-cf00adfef129',
        source: '3e662ed0-d679-438f-902f-219b9d568b06',
        target: 'b81e2228-a0ac-472e-9e5e-0aac3f914115',
      },
      {
        id: '5db06f65-6976-4d1d-927a-a5629197096b',
        source: 'b81e2228-a0ac-472e-9e5e-0aac3f914115',
        target: '335ef191-fce4-4d5d-b9f9-8768fc988bbf',
      },
      {
        id: 'a4e286c4-fe89-4f06-a482-1c1808102429',
        source: '335ef191-fce4-4d5d-b9f9-8768fc988bbf',
        target: 'c37c2e15-7ddf-48f8-b765-38e12ec3ebd2',
      },
      {
        id: '40c02437-782b-4b21-8f6e-c264908e3537',
        source: 'e8a41463-6ecf-49c7-95e3-7db6b875c751',
        target: 'b5f13399-cc60-428d-be7b-bfff34e741b1',
      },
      {
        id: '480c152e-126b-4290-b928-03a7673b8c27',
        source: 'b5f13399-cc60-428d-be7b-bfff34e741b1',
        target: '34e44a1e-ff49-4bb2-a396-669b1c903f58',
      },
      {
        id: 'e6bfe77f-498d-436e-af0e-a6c368c0a1fd',
        source: '7e6147db-3bad-4436-8ddd-b0c69ad7947f',
        target: '34e44a1e-ff49-4bb2-a396-669b1c903f58',
      },
      {
        id: 'bf76f648-29c2-41e2-8792-9c4642b4baf9',
        source: '34e44a1e-ff49-4bb2-a396-669b1c903f58',
        target: 'c37c2e15-7ddf-48f8-b765-38e12ec3ebd2',
      },
      {
        id: '7fbf5f0d-5379-4b58-8a2b-afd1d0775e3c',
        source: '056181f4-4117-4862-9349-8f5f8e8f963f',
        target: 'c37c2e15-7ddf-48f8-b765-38e12ec3ebd2',
      },
      {
        id: 'a9189d37-a162-4652-9f80-cfea4eed901c',
        source: '2e8069aa-e206-4575-a283-d8f71a1b0964',
        target: '056181f4-4117-4862-9349-8f5f8e8f963f',
      },
      {
        id: '796a02e5-cf88-4b9b-84d0-faf2feafe82d',
        source: 'f9dc1687-a574-4b05-adcb-2167574bfacd',
        target: '2e8069aa-e206-4575-a283-d8f71a1b0964',
      },
    ],
    unlocks: 5,
  },
  {
    id: 'bbcd9e41-05fa-48c3-85cd-bdd162c2b83f',
    name: 'Chicken Soup',
    nodes: [
      {
        id: 'be103963-2c67-4b1b-ac52-28e694f816d5',
        type: 'serve',
        position: { x: 332.58847543387975, y: 513.9024479060336 },
        data: {},
      },
      {
        id: 'a3f6d87f-b4ca-4d94-a33d-2844b4dcfd3a',
        type: 'raw',
        position: { x: -108.16206496302257, y: -656.942436908909 },
        data: { id: 'chicken', count: 1 },
      },
      {
        id: '1d3e9563-e17b-4133-8f41-54e366f003e2',
        type: 'cut',
        position: { x: -246.41413784853904, y: -388.85691064457677 },
        data: { pieces: 16 },
      },
      {
        id: 'ecf5819a-1d30-4475-acb6-a5bcbce4fcfc',
        type: 'trash',
        position: { x: -169.6069405899947, y: -175.1674943079634 },
        data: { amount: 50 },
      },
      {
        id: 'e658100b-ee73-4a59-97bf-0e9ab6049598',
        type: 'raw',
        position: { x: 429.7826234499788, y: -655.8280704606211 },
        data: { id: 'onion', count: 1 },
      },
      {
        id: 'e43dfc2f-7d37-46f4-8e04-1cf406063614',
        type: 'cut',
        position: { x: 317.26926906002626, y: -335.24684811097455 },
        data: { pieces: 10 },
      },
      {
        id: '53d73ca3-f334-495a-a3f1-066da8e6c43a',
        type: 'trash',
        position: { x: 230.88503789496804, y: -109.81686515152967 },
        data: { amount: 50 },
      },
      {
        id: '8d348301-4bdb-40a8-ae7d-777809fd20d3',
        type: 'raw',
        position: { x: -613.1679853219492, y: -69.984633978168 },
        data: { id: 'chickenbroth', count: 500 },
      },
      {
        id: 'd41b477a-1153-4e0a-91cd-296e0395650d',
        type: 'spice',
        position: { x: -75.86955907712269, y: 176.3923882105729 },
        data: { id: 'salt', amount: 2 },
      },
      {
        id: 'f8c46626-ebda-43d5-9beb-331800268ae8',
        type: 'boil',
        position: { x: 433.2596117457351, y: 283.75337201252444 },
        data: { duration: 90 },
      },
    ],
    edges: [
      {
        id: '91c3d99e-3efd-4a69-8f34-822add43ca37',
        source: 'a3f6d87f-b4ca-4d94-a33d-2844b4dcfd3a',
        target: '1d3e9563-e17b-4133-8f41-54e366f003e2',
      },
      {
        id: 'a5ab2701-98ae-4176-a265-7b8130875ddb',
        source: '1d3e9563-e17b-4133-8f41-54e366f003e2',
        target: 'ecf5819a-1d30-4475-acb6-a5bcbce4fcfc',
      },
      {
        id: '8d07366a-a414-4561-81ab-c7c739f28223',
        source: 'e658100b-ee73-4a59-97bf-0e9ab6049598',
        target: 'e43dfc2f-7d37-46f4-8e04-1cf406063614',
      },
      {
        id: '291e644d-d9a7-4a09-b108-87eafc0451a7',
        source: 'e43dfc2f-7d37-46f4-8e04-1cf406063614',
        target: '53d73ca3-f334-495a-a3f1-066da8e6c43a',
      },
      {
        id: '03405c00-302e-48b2-8eb8-9e13a2566f12',
        source: '8d348301-4bdb-40a8-ae7d-777809fd20d3',
        target: 'd41b477a-1153-4e0a-91cd-296e0395650d',
      },
      {
        id: '6c337efc-4b41-4959-8ee3-8544e4034c37',
        source: 'ecf5819a-1d30-4475-acb6-a5bcbce4fcfc',
        target: 'd41b477a-1153-4e0a-91cd-296e0395650d',
      },
      {
        id: '5d8cbbe8-a2fd-4428-bd65-5f8cc13185d5',
        source: '53d73ca3-f334-495a-a3f1-066da8e6c43a',
        target: 'd41b477a-1153-4e0a-91cd-296e0395650d',
      },
      {
        id: '7e64e940-038e-4557-a2a4-5b1094b0fa66',
        source: 'd41b477a-1153-4e0a-91cd-296e0395650d',
        target: 'f8c46626-ebda-43d5-9beb-331800268ae8',
      },
      {
        id: '15317151-54cf-472d-aeb9-b2eb86f2aacd',
        source: 'f8c46626-ebda-43d5-9beb-331800268ae8',
        target: 'be103963-2c67-4b1b-ac52-28e694f816d5',
      },
    ],
    unlocks: 5,
  },
  {
    id: '5aed90ed-8c00-4f27-9b5f-18505b2ab079',
    name: 'Tomato Soup',
    nodes: [
      {
        id: '5c04ce38-8e63-4eca-a438-42ff437055ba',
        type: 'serve',
        position: { x: 222.12489059143718, y: 399.4804233892515 },
        data: {},
      },
      {
        id: 'b500c7c9-bc1c-49e5-b3cd-eea44fe5dc60',
        type: 'raw',
        position: { x: 210.89604249941755, y: -717.3938077108783 },
        data: { id: 'vegetablebroth', count: 500 },
      },
      {
        id: '37174f7f-5fc5-4486-9d50-741f1d9b15e5',
        type: 'raw',
        position: { x: -209.46114024498104, y: -878.6098134478808 },
        data: { id: 'tomato', count: 3 },
      },
      {
        id: 'f1dc5874-0e14-42f6-992e-c3d933273417',
        type: 'raw',
        position: { x: -590.69833126222, y: -1059.7002644079794 },
        data: { id: 'onion', count: 1 },
      },
      {
        id: 'd41eb3c3-3591-41ee-ae9d-45de45b08785',
        type: 'trash',
        position: { x: -705.3979001966082, y: -789.6367314865366 },
        data: { amount: 50 },
      },
      {
        id: 'f8536c92-fa77-48f3-b1b7-eab5c54a9353',
        type: 'spice',
        position: { x: -361.2182971015096, y: -444.23688013839546 },
        data: { id: 'salt', amount: 2 },
      },
      {
        id: 'e2482c34-12a7-4185-985e-d7519d102fa2',
        type: 'spice',
        position: { x: -202.99312231109803, y: -173.59627908629648 },
        data: { id: 'blackpepper', amount: 2 },
      },
      {
        id: '331ec400-a543-4fae-99fc-ee83a6637039',
        type: 'boil',
        position: { x: 255.04736767437237, y: -61.384147107814485 },
        data: { duration: 90 },
      },
      {
        id: 'cad47157-a6d5-4800-8cad-f8c304f3abdc',
        type: 'blend',
        position: { x: 308.94896778521826, y: 164.12839180443694 },
        data: {},
      },
    ],
    edges: [
      {
        id: '9927e0fc-7f32-4ec5-877a-5b9cc2e3d9eb',
        source: 'f1dc5874-0e14-42f6-992e-c3d933273417',
        target: 'd41eb3c3-3591-41ee-ae9d-45de45b08785',
      },
      {
        id: '7ff4c733-d038-44ba-91d4-fb7d32e289d2',
        source: 'd41eb3c3-3591-41ee-ae9d-45de45b08785',
        target: 'f8536c92-fa77-48f3-b1b7-eab5c54a9353',
      },
      {
        id: '2b6d9ddf-0aed-4f33-885c-e6f527ee7dbc',
        source: '37174f7f-5fc5-4486-9d50-741f1d9b15e5',
        target: 'f8536c92-fa77-48f3-b1b7-eab5c54a9353',
      },
      {
        id: '9a10bd5f-fa45-4767-9127-ffc3213fea97',
        source: 'b500c7c9-bc1c-49e5-b3cd-eea44fe5dc60',
        target: 'f8536c92-fa77-48f3-b1b7-eab5c54a9353',
      },
      {
        id: 'af66bee6-b045-4c83-b416-05abfcfdc537',
        source: 'f8536c92-fa77-48f3-b1b7-eab5c54a9353',
        target: 'e2482c34-12a7-4185-985e-d7519d102fa2',
      },
      {
        id: 'a09bdbe1-b503-43e9-b532-12d21d0f3e50',
        source: 'e2482c34-12a7-4185-985e-d7519d102fa2',
        target: '331ec400-a543-4fae-99fc-ee83a6637039',
      },
      {
        id: '0b54a80a-faa9-4ed3-9ecf-d0d1c07107d0',
        source: '331ec400-a543-4fae-99fc-ee83a6637039',
        target: 'cad47157-a6d5-4800-8cad-f8c304f3abdc',
      },
      {
        id: 'a987afb8-a2b0-4e78-ab94-3026a6cc20d9',
        source: 'cad47157-a6d5-4800-8cad-f8c304f3abdc',
        target: '5c04ce38-8e63-4eca-a438-42ff437055ba',
      },
    ],
    unlocks: 6,
  },
  {
    id: '345f1503-1c24-454c-bbb2-bb957497a0f5',
    name: 'Salmon Salad',
    nodes: [
      {
        id: '21257370-c39b-470a-907f-a6dd1fa5aaf3',
        type: 'serve',
        position: { x: 788.8177898212705, y: 792.8913300172151 },
        data: {},
      },
      {
        id: '7ed01e21-7ffe-44e1-83eb-7499575d6189',
        type: 'raw',
        position: { x: -320.167847767323, y: -836.7292461268509 },
        data: { id: 'salmon', count: 1 },
      },
      {
        id: '4ebbf682-602d-4af2-b645-a6b3bbe202a3',
        type: 'cut',
        position: { x: -164.6304721092598, y: -570.0690049380046 },
        data: { pieces: 20 },
      },
      {
        id: '5dbe9769-7a24-412a-91a8-9240477b1b0b',
        type: 'trash',
        position: { x: -69.57189282813118, y: -331.3563046357241 },
        data: { amount: 50 },
      },
      {
        id: '6b945f55-e5db-4b27-9f39-80231d5bdfb5',
        type: 'raw',
        position: { x: 350.01204308468823, y: -459.7022812910673 },
        data: { id: 'basil', count: 3 },
      },
      {
        id: '18129444-67c9-4503-95be-4637e7f42dfa',
        type: 'cut',
        position: { x: 389.1751894233127, y: -145.86480299597997 },
        data: { pieces: 4 },
      },
      {
        id: '8e061197-d892-4dd7-b8f5-84998f0d8901',
        type: 'raw',
        position: { x: -495.1766032711525, y: -184.23930043516896 },
        data: { id: 'tomato', count: 1 },
      },
      {
        id: '82a95069-2af7-4709-b93f-524588ca0f6a',
        type: 'cut',
        position: { x: -446.221924376046, y: 55.39366274513863 },
        data: { pieces: 10 },
      },
      {
        id: '65bf4084-b8d8-4612-91ba-59808db3c57a',
        type: 'raw',
        position: { x: 795.7722874272121, y: -384.065656112846 },
        data: { id: 'lettuce', count: 1 },
      },
      {
        id: '3cfda766-802d-492a-bdf3-74bdbc7be829',
        type: 'cut',
        position: { x: 899.0528481565335, y: -115.57455831214004 },
        data: { pieces: 20 },
      },
      {
        id: '96be9742-865c-42e5-b0af-fa4387339ca8',
        type: 'trash',
        position: { x: 701.4887185840271, y: 142.15866989245646 },
        data: { amount: 50 },
      },
      {
        id: '995fc98f-572a-4bb3-b104-119d2873028e',
        type: 'spice',
        position: { x: 216.1949376386358, y: 422.54826940520996 },
        data: { id: 'blackpepper', amount: 2 },
      },
      {
        id: '3310efb7-5ade-47be-9a5c-1cd8181bbf84',
        type: 'spice',
        position: { x: 683.0585932925663, y: 534.9503645158082 },
        data: { id: 'driedbasil', amount: 2 },
      },
      {
        id: 'e7ff0956-ffa8-4087-9e8e-28a3c77356c6',
        type: 'bake',
        position: { x: -13.324241305529881, y: -83.04598297252592 },
        data: { duration: 90, temperature: 160 },
      },
    ],
    edges: [
      {
        id: '60d880f3-079d-4b4f-a718-49b331e70320',
        source: '7ed01e21-7ffe-44e1-83eb-7499575d6189',
        target: '4ebbf682-602d-4af2-b645-a6b3bbe202a3',
      },
      {
        id: 'e436e428-4c0a-4f9e-b9e3-6d278bb58d17',
        source: '4ebbf682-602d-4af2-b645-a6b3bbe202a3',
        target: '5dbe9769-7a24-412a-91a8-9240477b1b0b',
      },
      {
        id: 'a4570ecf-6597-482d-a4b0-98014167e41e',
        source: '6b945f55-e5db-4b27-9f39-80231d5bdfb5',
        target: '18129444-67c9-4503-95be-4637e7f42dfa',
      },
      {
        id: '88bfbc6f-800f-429d-84d5-4566718c3b42',
        source: '8e061197-d892-4dd7-b8f5-84998f0d8901',
        target: '82a95069-2af7-4709-b93f-524588ca0f6a',
      },
      {
        id: '1a922b65-e2ad-4278-b810-e1b3f229dae9',
        source: '65bf4084-b8d8-4612-91ba-59808db3c57a',
        target: '3cfda766-802d-492a-bdf3-74bdbc7be829',
      },
      {
        id: '566fdb0d-ec9c-440c-916e-f334bc33ce47',
        source: '3cfda766-802d-492a-bdf3-74bdbc7be829',
        target: '96be9742-865c-42e5-b0af-fa4387339ca8',
      },
      {
        id: '5508dc2c-d483-491a-91de-a63980ac8d26',
        source: '82a95069-2af7-4709-b93f-524588ca0f6a',
        target: '995fc98f-572a-4bb3-b104-119d2873028e',
      },
      {
        id: '82708478-6c2f-42c2-a3b5-fd4018db9c8e',
        source: '96be9742-865c-42e5-b0af-fa4387339ca8',
        target: '995fc98f-572a-4bb3-b104-119d2873028e',
      },
      {
        id: 'cfdd2b12-698f-4e9a-a2a5-bf1135f2dc49',
        source: '18129444-67c9-4503-95be-4637e7f42dfa',
        target: '995fc98f-572a-4bb3-b104-119d2873028e',
      },
      {
        id: '396da892-83b4-477d-8ff9-7e739a897750',
        source: '995fc98f-572a-4bb3-b104-119d2873028e',
        target: '3310efb7-5ade-47be-9a5c-1cd8181bbf84',
      },
      {
        id: '10878728-b71a-4ab1-bd71-988e1fc66fb6',
        source: '3310efb7-5ade-47be-9a5c-1cd8181bbf84',
        target: '21257370-c39b-470a-907f-a6dd1fa5aaf3',
      },
      {
        id: '1a8325f1-2828-49c3-9447-cb5d90788eca',
        source: '5dbe9769-7a24-412a-91a8-9240477b1b0b',
        target: 'e7ff0956-ffa8-4087-9e8e-28a3c77356c6',
      },
      {
        id: 'c58a4800-15df-46ab-aba6-07cf01676563',
        source: 'e7ff0956-ffa8-4087-9e8e-28a3c77356c6',
        target: '995fc98f-572a-4bb3-b104-119d2873028e',
      },
    ],
    unlocks: 6,
  },
  {
    id: '85738a5c-14f4-4089-8fa2-a2c5f0b92a4b',
    name: 'Garlic Trout',
    nodes: [
      {
        id: '02c7ed0d-b81a-490d-8e2d-b9045cce0475',
        type: 'serve',
        position: { x: 358.12619864539755, y: 80.53788868085864 },
        data: {},
      },
      {
        id: 'af83ecd1-169e-4507-8ae6-dac968d5dc3a',
        type: 'raw',
        position: { x: 160.86213347689477, y: -829.3358743440895 },
        data: { id: 'trout', count: 1 },
      },
      {
        id: '78d155a8-8303-442c-ae4a-204d733a1ad9',
        type: 'bake',
        position: { x: 119.58965211805042, y: -232.46698524189645 },
        data: { duration: 100, temperature: 160 },
      },
      {
        id: '41abb5dc-79e6-4ebc-b459-a3659f346cb8',
        type: 'spice',
        position: { x: 245.43661992725475, y: -578.3799164670606 },
        data: { id: 'garlicpowder', amount: 3 },
      },
      {
        id: '5df8fe15-232b-425b-a424-5bd1e8374c21',
        type: 'spice',
        position: { x: -162.6343299018916, y: -479.7642499440861 },
        data: { id: 'blackpepper', amount: 2 },
      },
      {
        id: '437513e1-97bc-4d73-823b-51f0229ed4c0',
        type: 'raw',
        position: { x: 682.9036735157133, y: -747.4218594652535 },
        data: { id: 'lemon', count: 1 },
      },
      {
        id: 'f0db9b1d-a89f-4213-9712-268b05ce2e50',
        type: 'cut',
        position: { x: 626.5474612515575, y: -512.3610171926448 },
        data: { pieces: 4 },
      },
      {
        id: 'c53c43b3-8773-4e90-af83-5c62b243d20e',
        type: 'trash',
        position: { x: 494.78298621981185, y: -283.97848219189643 },
        data: { amount: 75 },
      },
      {
        id: '111b3de6-d750-4906-8713-0565eb7f01b3',
        type: 'raw',
        position: { x: 1082.2819893148478, y: -659.5195423626593 },
        data: { id: 'garlic', count: 1 },
      },
      {
        id: 'd4a1ce1b-ae43-4149-89c5-baf7311e1ad3',
        type: 'cut',
        position: { x: 1035.4401674468584, y: -396.5326189365798 },
        data: { pieces: 20 },
      },
      {
        id: '2077d83c-09ad-475a-9d4d-ac1169644d2d',
        type: 'trash',
        position: { x: 923.827945916496, y: -156.45385337870255 },
        data: { amount: 50 },
      },
    ],
    edges: [
      {
        id: '42d8d099-97e8-44fd-abfb-ef2879be48ce',
        source: 'af83ecd1-169e-4507-8ae6-dac968d5dc3a',
        target: '41abb5dc-79e6-4ebc-b459-a3659f346cb8',
      },
      {
        id: 'aa56a80d-e391-495e-9c08-dffc638b986c',
        source: '41abb5dc-79e6-4ebc-b459-a3659f346cb8',
        target: '5df8fe15-232b-425b-a424-5bd1e8374c21',
      },
      {
        id: '667e3bd3-4b1b-41ef-99f1-41d38e5947b1',
        source: '5df8fe15-232b-425b-a424-5bd1e8374c21',
        target: '78d155a8-8303-442c-ae4a-204d733a1ad9',
      },
      {
        id: '1bc0625a-2a58-42d1-a009-cac623293662',
        source: '78d155a8-8303-442c-ae4a-204d733a1ad9',
        target: '02c7ed0d-b81a-490d-8e2d-b9045cce0475',
      },
      {
        id: '0b727862-f5cc-4b5a-bd12-d6f57c14cfee',
        source: '437513e1-97bc-4d73-823b-51f0229ed4c0',
        target: 'f0db9b1d-a89f-4213-9712-268b05ce2e50',
      },
      {
        id: 'c941e755-dafb-41d9-ae46-9b46971025ad',
        source: 'f0db9b1d-a89f-4213-9712-268b05ce2e50',
        target: 'c53c43b3-8773-4e90-af83-5c62b243d20e',
      },
      {
        id: 'ac460975-5463-46ac-a125-d116f77ec713',
        source: 'c53c43b3-8773-4e90-af83-5c62b243d20e',
        target: '02c7ed0d-b81a-490d-8e2d-b9045cce0475',
      },
      {
        id: '05e09474-7434-4362-9af0-3f68de87062a',
        source: '2077d83c-09ad-475a-9d4d-ac1169644d2d',
        target: '02c7ed0d-b81a-490d-8e2d-b9045cce0475',
      },
      {
        id: '3699f1fa-0c0c-4159-98a3-3edc551f74c1',
        source: 'd4a1ce1b-ae43-4149-89c5-baf7311e1ad3',
        target: '2077d83c-09ad-475a-9d4d-ac1169644d2d',
      },
      {
        id: '2e739873-36a0-401e-a32b-96dd904ec526',
        source: '111b3de6-d750-4906-8713-0565eb7f01b3',
        target: 'd4a1ce1b-ae43-4149-89c5-baf7311e1ad3',
      },
    ],
    unlocks: {
      type: 'offer',
      path: 0,
      tier: 3,
    },
  },
  {
    id: '5b807914-cf14-4edd-8b85-f29cd941575f',
    name: 'Lava Chicken',
    nodes: [
      {
        id: 'fb3c4e80-d7a3-45f3-bb8e-f2fdfdc413ca',
        type: 'serve',
        position: { x: 1.6928628921688045, y: 297.9588748584638 },
        data: {},
      },
      {
        id: '8e9cd397-248e-4b21-9dce-5cdce5084ee4',
        type: 'raw',
        position: { x: 105.42854557921663, y: -772.6483853370553 },
        data: { id: 'chicken', count: 1 },
      },
      {
        id: '2c85c42c-081d-4f17-bde5-7027597f76aa',
        type: 'grill',
        position: { x: 53.88711836389692, y: -499.6497433944173 },
        data: { duration: 120 },
      },
      {
        id: '7043e89c-cde4-44d6-8561-0eb360a775c2',
        type: 'spice',
        position: { x: 100.04753960719762, y: -259.1353648164438 },
        data: { id: 'chilipowder', amount: 4 },
      },
      {
        id: '4410f1e3-cf72-4b6d-9e65-3723a61931a4',
        type: 'spice',
        position: { x: -120.49003753583753, y: 3.6791102817171577 },
        data: { id: 'blackpepper', amount: 4 },
      },
      {
        id: 'c0491a38-c2b4-425b-bb43-3cdecb3f76f4',
        type: 'raw',
        position: { x: 582.7354985753307, y: -432.642793496603 },
        data: { id: 'tomato', count: 2 },
      },
      {
        id: '55db8bef-fa16-442b-9408-0d6a5bad3855',
        type: 'raw',
        position: { x: 1026.5122684319808, y: -370.5563410301179 },
        data: { id: 'chilipepper', count: 2 },
      },
      {
        id: '3ffa83cd-b01c-4a29-8186-2cf7b55fe57e',
        type: 'blend',
        position: { x: 806.7682730125587, y: -79.88353029145225 },
        data: {},
      },
      {
        id: '3bd691db-9f84-410f-8e79-bd66c0cb5908',
        type: 'spice',
        position: { x: 294.056286885596, y: 50.355262356343275 },
        data: { id: 'blackpepper', amount: 4 },
      },
    ],
    edges: [
      {
        id: '48e907dd-ab07-430f-a7a8-897a7f304eab',
        source: '2c85c42c-081d-4f17-bde5-7027597f76aa',
        target: '7043e89c-cde4-44d6-8561-0eb360a775c2',
      },
      {
        id: '298eefe0-2889-479f-aa1e-2f2a9ddb791f',
        source: '8e9cd397-248e-4b21-9dce-5cdce5084ee4',
        target: '2c85c42c-081d-4f17-bde5-7027597f76aa',
      },
      {
        id: '05a155cd-56d0-4ac3-9a86-e1e006e6923d',
        source: '7043e89c-cde4-44d6-8561-0eb360a775c2',
        target: '4410f1e3-cf72-4b6d-9e65-3723a61931a4',
      },
      {
        id: '44fb8b3f-812f-47e4-93d1-8eedc77eb678',
        source: '4410f1e3-cf72-4b6d-9e65-3723a61931a4',
        target: 'fb3c4e80-d7a3-45f3-bb8e-f2fdfdc413ca',
      },
      {
        id: 'eee3c623-7de2-4adf-84de-139387911f5b',
        source: '55db8bef-fa16-442b-9408-0d6a5bad3855',
        target: '3ffa83cd-b01c-4a29-8186-2cf7b55fe57e',
      },
      {
        id: '0948566c-a9ea-4c9d-a1c7-58b5ee07b090',
        source: 'c0491a38-c2b4-425b-bb43-3cdecb3f76f4',
        target: '3ffa83cd-b01c-4a29-8186-2cf7b55fe57e',
      },
      {
        id: 'a7da812f-b3cd-4528-aca6-cb43632ef6b1',
        source: '3ffa83cd-b01c-4a29-8186-2cf7b55fe57e',
        target: '3bd691db-9f84-410f-8e79-bd66c0cb5908',
      },
      {
        id: '3ce685c8-af9f-405b-a1c0-82d808a7dfed',
        source: '3bd691db-9f84-410f-8e79-bd66c0cb5908',
        target: 'fb3c4e80-d7a3-45f3-bb8e-f2fdfdc413ca',
      },
    ],
    unlocks: {
      type: 'offer',
      path: 1,
      tier: 3,
    },
  },
  {
    id: 'cab0ed16-4e88-4a77-83c8-7ba96f496c2e',
    name: 'Garden Salad',
    nodes: [
      {
        id: 'ea6e18e1-b530-4b6e-8843-fc9e7f5ef01c',
        type: 'serve',
        position: { x: 67.23436103662215, y: 160.30768724335394 },
        data: {},
      },
      {
        id: '2ff2b199-33a3-4ea0-a298-0194073e91b6',
        type: 'raw',
        position: { x: -258.6012391712618, y: -637.4842166771905 },
        data: { id: 'tomato', count: 1 },
      },
      {
        id: '32c28e14-4e50-4a54-beec-27dabcb3f66a',
        type: 'raw',
        position: { x: 210.2235165120037, y: -688.3157355358687 },
        data: { id: 'lettuce', count: 1 },
      },
      {
        id: '58a2480a-216d-479f-9ade-6c612e5b8e99',
        type: 'spice',
        position: { x: -155.66956531553802, y: -86.51510624791314 },
        data: { id: 'blackpepper', amount: 2 },
      },
      {
        id: '4452b90a-1892-4d09-b3ed-58ca0b1e80a7',
        type: 'cut',
        position: { x: -371.99348139931726, y: -381.48952668084166 },
        data: { pieces: 10 },
      },
      {
        id: '402627a1-f6e3-4fb1-a50d-a466b4866059',
        type: 'cut',
        position: { x: 130.91619849207814, y: -437.2788315579144 },
        data: { pieces: 20 },
      },
      {
        id: '098c895e-5cc0-4913-88ce-02a758d80beb',
        type: 'raw',
        position: { x: 638.755900817163, y: -593.196927054665 },
        data: { id: 'carrot', count: 1 },
      },
      {
        id: '1399c49b-405f-4546-82b0-91dee770e0a1',
        type: 'cut',
        position: { x: 572.6044699240294, y: -367.12431217009873 },
        data: { pieces: 10 },
      },
      {
        id: '04cb48e6-901b-471d-bbb8-e1258b4f1981',
        type: 'raw',
        position: { x: 1011.6520788121788, y: -333.43139429634675 },
        data: { id: 'bellpepper', count: 1 },
      },
      {
        id: '112343d1-5ac1-444f-a472-23b986635879',
        type: 'cut',
        position: { x: 768.3855322606781, y: -86.41888507664447 },
        data: { pieces: 15 },
      },
    ],
    edges: [
      {
        id: 'a5f6cc0c-80e9-4e29-be4f-a158781a0326',
        source: '58a2480a-216d-479f-9ade-6c612e5b8e99',
        target: 'ea6e18e1-b530-4b6e-8843-fc9e7f5ef01c',
      },
      {
        id: 'dd32abac-84e7-4b55-a72d-734938abb734',
        source: '2ff2b199-33a3-4ea0-a298-0194073e91b6',
        target: '4452b90a-1892-4d09-b3ed-58ca0b1e80a7',
      },
      {
        id: '94fa6f7a-a4fc-46e6-9664-b46997084c92',
        source: '4452b90a-1892-4d09-b3ed-58ca0b1e80a7',
        target: '58a2480a-216d-479f-9ade-6c612e5b8e99',
      },
      {
        id: '8780a11d-2934-41df-b265-4c2d6de0fab4',
        source: '32c28e14-4e50-4a54-beec-27dabcb3f66a',
        target: '402627a1-f6e3-4fb1-a50d-a466b4866059',
      },
      {
        id: '4d0cb6b8-198d-4502-b665-fea757b518aa',
        source: '402627a1-f6e3-4fb1-a50d-a466b4866059',
        target: '58a2480a-216d-479f-9ade-6c612e5b8e99',
      },
      {
        id: '3785ffe4-e5ae-4b14-85f1-1f977d25d0dd',
        source: '098c895e-5cc0-4913-88ce-02a758d80beb',
        target: '1399c49b-405f-4546-82b0-91dee770e0a1',
      },
      {
        id: 'f455977d-01f5-445c-a407-e928065c6457',
        source: '1399c49b-405f-4546-82b0-91dee770e0a1',
        target: '58a2480a-216d-479f-9ade-6c612e5b8e99',
      },
      {
        id: '248d37ff-0962-4223-9806-bc4aa8fc67b7',
        source: '04cb48e6-901b-471d-bbb8-e1258b4f1981',
        target: '112343d1-5ac1-444f-a472-23b986635879',
      },
      {
        id: 'fc3d1d06-4948-4aa5-a57a-6dbb7600c0b2',
        source: '112343d1-5ac1-444f-a472-23b986635879',
        target: '58a2480a-216d-479f-9ade-6c612e5b8e99',
      },
    ],
    unlocks: [
      {
        type: 'offer',
        path: 0,
        tier: 1,
      },
      {
        type: 'offer',
        path: 1,
        tier: 1,
      },
      {
        type: 'level',
        level: 6,
      },
    ],
  },
]

exampleRecipes.sort((a, b) => a.name.localeCompare(b.name))
