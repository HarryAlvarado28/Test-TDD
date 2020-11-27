describe("Pruebas", () => {
  describe("suma", () => {
    it("suma dos numeros", () => {
      const suma = (a, b) => {
        return a + b;
      };
      expect(suma(1, 2)).toEqual(3);
    });
  });
});
