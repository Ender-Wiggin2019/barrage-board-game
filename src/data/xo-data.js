export const xoData = [
  {
    id: "1",
    name: "Amir Zahir",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-1",
    avatarDesc: {},
    effectDesc:
      "Whenever you place Water Drops on the Headstreams, you can decide to make them flow immediately (you need to decide for each single Wate Drop). When you are supposed to place Water Drops that should flow immediately on the Headstreams, you can place them directly in one of your Dams with Enough Capacity to hold them (you need to decide for each single Water Drop).",
    additionalDesc: {},
    tier: 1.8,
    tierDesc: "A-",
    tierComment: "Good choice to solve water shortage",
    source: "Promo",
  },
  {
    id: "2",
    name: "Elon Audia",
    startMachine: { money: 6, purpleMachine: 8 },
    effectType: "xo-desc-1",
    avatarDesc: {},
    effectDesc:
      "You start the game with no Excavators and no Concrete Mixers; instead, you receive the 8 Excamixers. You can use these special Machineries as wildcards - they count both as Excavators or Concrete Mixers.",
    additionalDesc: {
      Sekibo:
        "Your Machineries count as Excamixers for the current turn. They lose this status at the end of the turn.",
    },
    tier: 2.8,
    tierDesc: "B-",
    tierComment:
      "Start with only 8 Machines is a huge limitation. Need some special startup strategies to achieve his flexibility.",
    source: "Promo",
  },
  {
    id: "3",
    name: "Wilhelm Adler",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-3",
    avatarDesc: {},
    effectDesc:
      "Your Bases always cost 3 Excavators, no matter which area of the Map you build them. Your Elevations costs depend on the area of the Map, as for the basic rule.",
    additionalDesc: {},
    tier: 1,
    tierDesc: "A+",
    tierComment:
      "With Special Tech tile Base I, you can build 2 bases in Round 1, and 4 or even 5 bases in Round 2.",
    source: "Base",
  },
  {
    id: "4",
    name: "Graziano Del Monte",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-1",
    avatarDesc: {},
    effectDesc:
      "Your level 3 Dams can hold up to 4 Water Drops. Your level 1 and level 2 Dams can hold 1 or 2 Water Drops respectively, as for the basic rules.",
    additionalDesc: {
      Sekibo:
        "Your level 3 Dams can collect up to 4 Water Drops for the duration of the current turn and as long as the 4 Water Drops don't leave the Dam.",
    },
    tier: 1.5,
    tierDesc: "A",
    tierComment: "Level 3 Dam + 4 Water = National Contract",
    source: "Base",
  },
  {
    id: "5",
    name: "Margot Fouche",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-1",
    avatarDesc: {},
    effectDesc:
      "You have a personal action space on this Executive Officer tile. When it's your turn during the Actions Phase, you can place 1 Engineer here to perform the special action of a Private Building that you have activated. You still can perform the same Private Building action using its normal action spaces. Therefore, this Executive Officer allows you to perform the same Private Building special action twice in the same round.",
    additionalDesc: {
      Sekibo:
        "You can perform the special action of a Private Building tile you have activated by placing one of your Engineers in the Bank. You don't receive any Credit from the Bank.",
    },
    tier: 2.5,
    tierDesc: "B",
    tierComment:
      "Quite hard to play. Depends on the Private Buildings and the Bonus tiles.",
    source: "LWT",
  },
  {
    id: "6",
    name: "Franz De Lasse",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-1",
    avatarDesc: {},
    effectDesc:
      "When you perform a production action and fulfill a Contract with a lower value than the energy produced, move your marker on the Energy Track only by the exceeding value. During the End of Round Phase, move your marker back on the Energy Track to the lower limit of the current round section (only if you reached it). Otherwise, don't move your marker back.",
    additionalDesc: {
      Sekibo:
        "If you fulfill a Contract with production action, move your marker on the Energy Track only by the exceeding value and keep the Contract aside. At the beginning of next round, move your marker up by the Contract's value.",
    },
    tier: 10,
    tierDesc: "NA",
    tierComment: "No description yet.",
    source: "Promo",
  },
  {
    id: "7",
    name: "Anton Krylov",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-4",
    avatarDesc: {},
    effectDesc:
      "Take the depicted special Technology tile at the beginning of the game. When you use this Technology tile you can copy another Technology tile of your choice on your Construction Wheel. This special tile copies both the main building effect and the special effect of the copied tile.",
    additionalDesc: {
      Sekibo:
        "You can copy another Technology tile on your Construction Wheel. To do so, you don't need to insert any tile in the Construction Wheel. You still have to insert thr required amount og Machineries.",
    },
    tier: 1,
    tierDesc: "A+",
    tierComment:
      "Can unlock the income in horizontal direction fastly, or obtain plenty of VPs with age III special Tech tiles.",
    source: "Base",
  },
  {
    id: "8",
    name: "Mahiri Sekibo",
    startMachine: { money: 9, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-2",
    avatarDesc: {},
    effectDesc:
      "You have a personal special ability that you can activate placing 1 Engineer on the action space of this tile. If you use it a second time during the same round, you must also pay 3 Credits. When you activate it, you can copy another Executive Officer's special ability.",
    additionalDesc: {
      faq: "Put workers on this board is a fast action that you do before the normal action.",
    },
    tier: 0.9,
    tierDesc: "A~S",
    tierComment:
      "Depends on the usability of other Executive Officers on play, yet starts with 9 Credits is good enough, which provides enough flexibility after purchasing special Tech tiles.",
    source: "Base",
  },
  {
    id: "9",
    name: "Gennaro Grasso",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-1",
    avatarDesc: {},
    effectDesc:
      "You have an extra Construction space. You can use it one time per round and it works exactly like the Construction spaces on the Company boards. This means that you could make five construction actions per round - or save Engineers and/or Credits by using this action space instead of an action space on your Company Board.",
    additionalDesc: {
      Sekibo:
        "You can take the Construction action by placing 2 of your free Engineers in thr Bank space and resolving the Construction. You don't get any Credit from the Bank by doing so.",
    },
    tier: 2.5,
    tierDesc: "B",
    tierComment: "Although he can save some Engineers...",
    source: "Promo",
  },
  {
    id: "10",
    name: "Jill MaDowell",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-1",
    avatarDesc: {},
    effectDesc:
      "You can build your Conduits using Concrete Mixers instead of Excavators. If you use this ability the Conduit coses 1 Concrete Mixer multiplied by the Conduit production value. You cannot mix the two Machineries to pay for a Conduit.",
    additionalDesc: {},
    tier: 1,
    tierDesc: "A+",
    tierComment:
      "Not hard to construct Value 5 Conduit. However, there is also a trade-off between Elevators, conduits and Power Plants.",
    source: "Base",
  },
  {
    id: "11",
    name: "Solomon P.Jordan",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-1",
    avatarDesc: {},
    effectDesc:
      "Whenever you build a structure you can pay 3 Credits instead of a requested Machinery. You can use this ability as many times as you want, even paying only in Credits. Put the Credits in the general supply, not in the Construction Wheel.",
    additionalDesc: {},
    tier: 2.8,
    tierDesc: "B-",
    tierComment:
      "Can be surprisingly useful with some Company's incomes or special Tech tiles.",
    source: "Base",
  },
  {
    id: "12",
    name: "Leslie Spencer",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-4",
    avatarDesc: {},
    effectDesc:
      "Take the depicted Special Technology tile at the beginning of the game. When you perform an External Works action, you can place the required Machineries on your Construction Wheel together with this tile. Then, rotate the Wheel by one segment. You don't have to place Engineers in a construction action space on your Company Board, but you still have to place them on the connected External Works action space.",
    additionalDesc: {
      Sekibo:
        "You can copy the special ability without using the corresponding special Technology tile. Just put the number of Machineries required by the External Work in the open segment of the Construction Wheel. Then, rotate your Wheel by one segment.",
    },
    tier: 0.1,
    tierDesc: "S+",
    tierComment: "G.O.A.T",
    source: "LWT",
  },
  {
    id: "13",
    name: "Viktor Fieslerr",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-1",
    avatarDesc: {},
    effectDesc:
      "When you produce less than 4 Energy Units with a production action, you produce 4 Energy Units Instead. Multiply the total of Water Drops by the value of the Conduit that you are using. If the total is three or less you should consider the total to be 4. Then you must apply any bonus/minus of the action symbol and bonus of your Company Board.",
    additionalDesc: {
      German:
        "If you are playing with German and your special ability is active, in both production action you can produce at least 4 Energy Unit",
    },
    tier: 1,
    tierDesc: "A+",
    tierComment: "Value 1 Conduit + 1 water = a yellow Contract!",
    source: "Base",
  },
  {
    id: "14",
    name: "Wu Fang",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-1",
    avatarDesc: {},
    effectDesc:
      "You have a personal action space. When it's your turn during the Actions Phase, you can place 1 Engineer on this space to immediately produce an amount of Energy Units equal to the number of Water Drops currently held in your Dams, without moving them; don't add any bonus to this production. You can use these Energy Units to fulfill a Contract and to advance on the Energy Track.",
    additionalDesc: {
      Sekibo:
        "You can take the Wu Fang special action by placing one of your Engineers in the Bank space and resolving the special action (you don't get ang Credit from the Bank)",
    },
    tier: 1.8,
    tierDesc: "A-",
    tierComment:
      "Since water usually be gathered from Round 2, this ability can be used almost 4 times. Good synergy with special Tech tile Elevator II, which can provide 10 Energy Units in maximum. In early stages, Machines and Rotates in cheap contracts can save the construction of Power Plants and let you focus on achieving incomes from Bases and Elevators.",
    source: "Promo",
  },
  {
    id: "15",
    name: "Tommaso Battista",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-1",
    avatarDesc: {},
    effectDesc:
      "Replace one of your 12 starting Engineers with the Architect at the beginning of the game. The Architect is a special Engineer. If you place the Architect in an action space requiring only one Engineer, you can immediately take another turn. If you place the Architect together with other Engineers in an action space requiring two or three Engineers, you do not activate this special ability.",
    additionalDesc: {
      Sekibo: "You can use one of your Engineers as if it was the Architect.",
    },
    tier: 1.5,
    tierDesc: "A",
    tierComment:
      "Extremely Good with Private Building Loan Agency, which allow your to build and activate the ability in one turn. Besides, if you're the first or second order in Round 2, you can even take 2 External Works in one turn. Sometimes this ability can be used to drop a water and perform a production.",
    source: "LWT",
  },
  {
    id: "16",
    name: "Dr. Octavius",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-1",
    avatarDesc: {},
    effectDesc:
      "When producing energy by activating one of your Powerhouses with a Production action, you can use Water Drops from two or more of your Dams (and/or Neutral Dams) connected to the activated Powerhouse.",
    additionalDesc: {
      Sekibo:
        "You can perform a Production action applying this Executive Officer ability.",
      German:
        "If you are playing with German and your special ability is active, you can apply Dr. Octavius's ability only for the first production.",
    },
    tier: 1.5,
    tierDesc: "A",
    tierComment:
      "with Connection with Neutral Dams, you can finish National Contracts quickly.",
    source: "Promo",
  },
  {
    id: "17",
    name: "Simone Luciani",
    startMachine: { money: 6, brownMachine: 6, whiteMachine: 4 },
    effectType: "xo-desc-1",
    avatarDesc: {},
    effectDesc:
      "You can have up to 4 Contract tiles face-up in your personal supply. You can fulfill two or more Contracts with one single production action, as long as the total amount of produced Energy Units is more than or equal to the total amount of energy required by the Contracts.",
    additionalDesc: {
      Sekibo:
        "If you are performing an action in the Contract Office, you'll be able to acquire new Contracts with a temporaty Contract limit of 4. You'll be able to hold 4 Contracts until you fulfill one of them - after the fulfillment, your limit will go back to 3. If you are performing an action in the Turbine Station, you'll be able to fulfill multiple Contracts with that production action.",
    },
    tier: 2.8,
    tierDesc: "B-",
    tierComment: "No description yet.",
    source: "LWT",
  },
];

export default xoData;
