
describe("Endpoint", () => {
  describe("POST", () => {
    it("Should create", async () => {
      const mockUsers = [{ id: 1 }, { id: 2 }];
      const post = {
        userId: 1,
        id: 1,
        title: "Titulo",
        body: "Cuerpo del post",
      };
      const req = {
        body: post,
      };
      const res = {
        status: jest.fn(),
        send: jest.fn(),
      };
      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: { id: 1000 } }),
      };
      await postHardlers({ axios }).post(req, res);
      expect(res.status.mock.calls).toEqual([[201]]);
      expect(res.send.mock.calls).toEqual([[[{ id: 1000 }]]]);
    });
    it("Should not create if userId does not exist", async () => {
      const mockUsers = [{ id: 1 }, { id: 2 }];
      const post = {
        userId: 1,
        id: 1,
        title: "Titulo",
        body: "Cuerpo del post",
      };
      const req = {
        body: post,
      };
      const res = {
        status: jest.fn(),
        send: jest.fn(),
        sendStatus: jest.fn(),
      };
      const axios = {
        get: jest.fn().mockResolvedValue({ data: mockUsers }),
        post: jest.fn().mockResolvedValue({ data: { id: 1000 } }),
      };
      await postHardlers({ axios }).post(req, res);
      expect(axios.post.mock.calls).toEqual([]);
      expect(res.sendStatus.mock.calls).toEqual([[500]]);
    });
  });
});
