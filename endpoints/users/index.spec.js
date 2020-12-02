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
        expect(res.status.mock.calls).toEqual([[200]]); // Dara error , Por que el estado que recibira nunca sera 5, sera 200 el que se definio en el endpoint
      });
    });

    //POST
    describe("post", () => {
      it("Create a Reasource", async () => {
        const axios = {
          post: jest.fn().mockResolvedValue({ data: 1 }),
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };
        const req = {
          body: "resquest body",
        };
        await handlers({ axios }).post(req, res);
        expect(res.status.mock.calls).toEqual([[201]]);
        // expect(res.status.mock.calls).toEqual([[1]]); // Dara error , Por que el estado que recibira nunca sera 5, sera 200 el que se definio en el endpoint
        // expect(res.send.mock.calls).toEqual([[201]]);
        expect(axios.post.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users", "request body"],
        ]);
      });
    });

    //PUT
    describe("Put", () => {
      it("Update Resource", async () => {
        const axios = {
          post: jest.fn().mockResolvedValue({ data: 1 }),
        };
        const req = {
          body: "request body",
          params: { id: 12 },
        };
        const res = { sendStatus: jest.fn() };
        await handlers({ axios }).put(req, res);
        expect(axios.put.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users/12", "request body"],
        ]);
        expect(res.sendStatus.mock.calls).toEqual([[204]]);
      });
    });
    //DELETE
    describe("Delete", () => {
      it("Delete a Resource", async () => {
        const req = {
          params: {
            id: 54,
          },
        };
        const axios = {
          delete: jest.fn(),
        };
        const res = {
          sendStatus: jest.fn(),
        };
        await handlers({ axios }).delete(req, res);
        expect(axios.delete.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users/54"],
        ]);
        expect(res.sendStatus.mock.calls).toEqual([[204]]);
      });
    });
  });
});
