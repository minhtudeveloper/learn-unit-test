const moment = require("moment/moment");
const { DISCOUNT_PERSON } = require("./constants");
const dateTimeFormat = "DD/MM/YYYY HH:mm";
const dateFormat = "DD/MM/YYYY";
const timeFormat = "HH:mm";

const isValidDateFormat = (dateTimeString) => {
  return moment(dateTimeString, dateTimeFormat, true).isValid();
};

const isPastDate = (dateTimeString) => {
  const momentDateTimeInput = moment(dateTimeString, dateTimeFormat);
  const momentCurrent = moment();

  return momentDateTimeInput.isBefore(momentCurrent);
};

const checkTimeRunTrains = (date, traisObj) => {
  let check = false;

  const timeInput = moment(date, dateTimeFormat).format(timeFormat);
  const momentTimeInput = moment(timeInput, timeFormat, true);

  console.log({ momentTimeInput });

  for (const [key, value] of Object.entries(traisObj)) {
    console.log(`${key}: ${value.time}`);
    const timeTrain = moment(value.time, timeFormat, true).format(timeFormat);
    const momentTimeTrain = moment(timeTrain, timeFormat, true);

    if (momentTimeInput.isBefore(momentTimeTrain)) {
      check = true;
      break;
    }
  }
  return check;
};

const getInfoTrains = (date, traisObj, typeChair, typePerson) => {
  const trains = [];
  const timeInput = moment(date, dateTimeFormat).format(timeFormat);
  const momentTimeInput = moment(timeInput, timeFormat, true);

  for (const [key, value] of Object.entries(traisObj)) {
    console.log(`${key}: ${value.time}`);
    const timeTrain = moment(value.time, timeFormat, true).format(timeFormat);
    const momentTimeTrain = moment(timeTrain, timeFormat, true);

    if (momentTimeInput.isBefore(momentTimeTrain)) {
      const priceDiscount =
        (value[typeChair] / 100) * DISCOUNT_PERSON[typePerson];
      trains.push({
        name: key,
        time: `${moment(date, dateTimeFormat).format(dateFormat)} ${
          value.time
        }`,
        discount: priceDiscount,
        price: value[typeChair] - priceDiscount,
      });
    }
  }

  return trains;
};

module.exports = {
  isValidDateFormat,
  checkTimeRunTrains,
  getInfoTrains,
  isPastDate,
};
