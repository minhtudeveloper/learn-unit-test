const moment = require("moment/moment");
const {
  isValidDateFormat,
  checkTimeRunTrains,
  getInfoTrains,
  isPastDate,
} = require("./util");
const {
  STATUS,
  TYPE_PERSON,
  DISCOUNT_PERSON,
  TRAIN,
  TYPE_CHAIR,
} = require("./constants");

const calculateTicketPrice = ({ date, typeChair, typePerson }) => {
  console.log(
    "check invalid : ",
    isValidDateFormat(date),
    TYPE_CHAIR[typeChair],
    TYPE_PERSON[typePerson],
    moment(date, "HH:mm", true),
    isPastDate(date)
  );

  //check invalid -> DATE || IS_PAST_DATE || TYPE_CHAIR || TYPE_PERSON
  if (
    !isValidDateFormat(date) ||
    isPastDate(date) ||
    !TYPE_CHAIR[typeChair] ||
    !TYPE_PERSON[typePerson]
  ) {
    return STATUS.INVALID;
  }

  console.log("check none train : ", checkTimeRunTrains(date, TRAIN));

  // check none train
  if (!checkTimeRunTrains(date, TRAIN)) {
    return STATUS.NONE_TRAIN;
  }

  console.log("Trains : ", getInfoTrains(date, TRAIN, typeChair, typePerson));
  let result = "";

  const trains = getInfoTrains(date, TRAIN, typeChair, typePerson);
  trains.map((train, index) => {
    result += `
      Option ${index + 1} :
      -  Tàu : ${train.name}
      -  Thời gian xuất phát : ${train.time}
      -  Giảm giá : ${train.discount}k
      -  Tổng tiền : ${train.price}k
      
      `;
  });

  console.log("====================================");
  console.log(result);
  console.log("====================================");
  return STATUS.OK;
};

// const data = {
//   date: "12/12/2023 11:30",
//   typeChair: "L1",
//   typePerson: 1,
// };

// console.log(calculateTicketPrice(data));

module.exports = { calculateTicketPrice };
