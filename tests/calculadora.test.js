const calculadora = require("../models/calculadora");

test("deve somar dois números corretamente", () => {
  // esquerda dinamico, direita estatico
  const resultado = calculadora.somar(1, 1);
  expect(resultado).toBe(2);
});
