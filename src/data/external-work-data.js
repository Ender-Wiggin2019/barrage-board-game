export const externalData =
  {
    greenContract: {
      contractType: "Green Contract",
      contractColor: "green",
      contractList: [
        {
          name: "G1",
          machineRequire: {brownMachine: 2, },
          benefits: { money: 5, },
        },
        {
          name: "G2",
          machineRequire: {brownMachine: 2, whiteMachine: 2, },
          benefits: { vp: 2, elevator: 2, powerplant: 1},
        },
        {
          name: "G2",
          machineRequire: {brownMachine: 2, whiteMachine: 2, },
          benefits: { vp: 2, money: 2, brownMachine: 1},
        },
      ]
    }

  };


export default externalData;
