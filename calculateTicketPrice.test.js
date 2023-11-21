const { calculateTicketPrice } = require("./calculateTicketPrice");
const { STATUS } = require("./constants");

// test("data is ememtty", () => {
//   const input = {
//     date: null,
//     typeChair: null,
//     typePerson: 1,
//   };
//   const output = calculateTicketPrice(input);
//   const expectedDiscountedPrice = STATUS.INVALID;

//   console.log({ output });
//   expect(output).toBe(expectedDiscountedPrice);
// });

// test("data is ememtty 2", () => {
//   const input = {
//     date: null,
//     typeChair: null,
//     typePerson: 1,
//   };
//   const output = calculateTicketPrice(input);
//   const expectedDiscountedPrice = STATUS.INVALID;

//   console.log({ output });
//   expect(output).toBe(expectedDiscountedPrice);
// });

describe("Ticket train", () => {
  it("should be instanceable function", () => {
    const data = {
      date: "12/12/2023 11:30",
      typeChair: "L1",
      typePerson: 1,
    };
    const result = calculateTicketPrice(data);
    expect(result).toBeDefined();
  });

  describe("Sai giá trị input", () => {
    it("should throw an Error if less than 3 args are supplied", () => {
      const data = {
        date: "12/12/2023 11:30",
        typeChair: "L1",
      };
      const result = calculateTicketPrice(data);
      expect(result).toBe(STATUS.INVALID);
    });

    it("should throw an Error if the input wrong format datetime", () => {
      const data = {
        date: "12-12-2023 11:30",
        typeChair: "L1",
        typePerson: 1,
      };
      const result = calculateTicketPrice(data);
      expect(result).toBe(STATUS.INVALID);
    });

    it("should throw an Error if the input datetime is in the past date", () => {
      const data = {
        date: "12/11/2023 11:30",
        typeChair: "L1",
        typePerson: 1,
      };
      const result = calculateTicketPrice(data);
      expect(result).toBe(STATUS.INVALID);
    });

    it("should throw an Error if input wrong format type chair", () => {
      const data = {
        date: "12/12/2023 11:30",
        typeChair: "L5",
        typePerson: 1,
      };
      const result = calculateTicketPrice(data);
      expect(result).toBe(STATUS.INVALID);
    });

    it("should throw an Error if input wrong format type customer", () => {
      const data = {
        date: "12/12/2023 11:30",
        typeChair: "L1",
        typePerson: 5,
      };
      const result = calculateTicketPrice(data);
      expect(result).toBe(STATUS.INVALID);
    });
  });

  describe("Không có tàu", () => {
    it("should throw an Error if the input time is later than the train departure time", () => {
      const data = {
        date: "12/12/2023 12:30",
        typeChair: "L1",
        typePerson: 1,
      };
      const result = calculateTicketPrice(data);
      expect(result).toBe(STATUS.NONE_TRAIN);
    });
  });

  describe("Info Ticket trains", () => {
    it("should throw a ticket train if the input data is pass valid", () => {
      const data = {
        date: "12/12/2023 07:30",
        typeChair: "L1",
        typePerson: 1,
      };
      const result = calculateTicketPrice(data);
      expect(result).toBe(STATUS.OK);
    });
  });
});
