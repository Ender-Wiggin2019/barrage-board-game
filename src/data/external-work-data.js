export const externalData =
  {
    ageIExternalWork: {
      externalType: "Age I",
      externalColor: "green",
      externalList: [
        {
          name: "I1",
          machineRequire: {brownMachine: 1, },
          benefits: { money: 2, fulfillContract: 4},
        },
        {
          name: "I2",
          machineRequire: {whiteMachine: 1, },
          benefits: { money: 3, rotate: 2},
        },
        {
          name: "I3",
          machineRequire: {brownMachine: 2, },
          benefits: { money: 4, techTile: 1},
        },
        {
          name: "I4",
          machineRequire: {whiteMachine: 2, },
          benefits: { vp: 4, base: "plain"},
        },
        {
          name: "I5",
          machineRequire: {brownMachine: 2, },
          benefits: { money: 2, powerplant: 1},
        },
      ]
    },
    ageIIExternalWork: {
      externalType: "Age II",
      externalColor: "amber",
      externalList: [
        {
          name: "II1",
          machineRequire: {brownMachine: 3, },
          benefits: { vp: 5, energyPro: 6},
        },
        {
          name: "II2",
          machineRequire: {whiteMachine: 3, },
          benefits: { money: 3, conduit: 4, vp: 3},
        },
        {
          name: "II3",
          machineRequire: {brownMachine: 4, },
          benefits: { vp: 4, water: 2, rotate: 2},
        },
        {
          name: "II4",
          machineRequire: {whiteMachine: 4, },
          benefits: { vp: 2, elevator: 2, },
        },
        {
          name: "II5",
          machineRequire: {brownMachine: 2, whiteMachine: 1, },
          benefits: { money: 5, energy: 6, },
        },
      ]
    },
    ageIIIExternalWork: {
      externalType: "Age III",
      externalColor: "red",
      externalList: [
        {
          name: "III",
          machineRequire: {brownMachine: 5, },
          benefits: { vp: 6, whiteMachine: 3},
        },
        {
          name: "III2",
          machineRequire: {brownMachine: 6, },
          benefits: { vp: 5, fulfillAnyContract: 1, },
        },
        {
          name: "III3",
          machineRequire: {whiteMachine: 5, },
          benefits: { vp: 10, waterDrop: 1, },
        },
        {
          name: "III4",
          machineRequire: {brownMachine: 3, whiteMachine: 2, },
          benefits: { vp: 6, waterDrop: 2, },
        },
        {
          name: "III5",
          machineRequire: {brownMachine: 2, whiteMachine: 4, },
          benefits: { vp: 8, rotate: 3, },
        },
      ]
    }

  };


export default externalData;
