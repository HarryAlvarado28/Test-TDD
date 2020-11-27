const handlers = require("./index");

describe("Endpoint ", () => {
  describe("users ", () => {
    describe("get ", () => {
      it("return to user json", async () => {
        const axios = { get: jest.fn().mockResolvedValue({ data: 1 }) };
        handlers({ axios }).get({});
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        await handlers({ axios }).get({}, res);
        console.log(res.status.mock.calls);
        expect(res.status.mock.calls).toEqual([[200]]);
        expect(res.status.mock.calls).toEqual([[5]]); // Dara error , Por que el estado que recibira nunca sera 5, sera 200 el que se definio en el endpoint
      });
    });
  });
});
