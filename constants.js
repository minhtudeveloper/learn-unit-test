const STATUS = {
  INVALID: "Sai giá trị input",
  NONE_TRAIN: " Không có tàu",
  OK: "OK",
};

const TYPE_PERSON = {
  [1]: "STUDENT",
  [2]: "ELDER",
  [3]: "CHILDREN",
  [4]: "OTHER",
};

const TYPE_CHAIR = {
  L1: "L1",
  L2: "L2",
  L3: "L3",
};

const TRAIN = {
  SE1: {
    [TYPE_CHAIR.L1]: 100,
    [TYPE_CHAIR.L2]: 200,
    [TYPE_CHAIR.L3]: 150,
    time: "08:30",
  },
  SE2: {
    [TYPE_CHAIR.L1]: 150,
    [TYPE_CHAIR.L2]: 250,
    [TYPE_CHAIR.L3]: 170,
    time: "12:00",
  },
};

const DISCOUNT_PERSON = {
  [1]: 10,
  [2]: 20,
  [3]: 50,
  [4]: 0,
};

module.exports = { STATUS, TYPE_PERSON, DISCOUNT_PERSON, TRAIN, TYPE_CHAIR };
