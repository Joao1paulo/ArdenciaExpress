import express from "express";
// Carregando o método do express para gerenciamento de rotas
const router = express.Router();

// ROTA DE PRODUTOS
router.get("/clientes", (req, res) => {

  //Array de objetos
  const clientes = [
    { nome: "Celular Motorole E22", preco: 1200, categoria: "Eletroportáteis" },
  ];

  res.render("produtos", {
    // Enviando variáveis produto para a página
    produtos: produtos,
  });
});

// Exportando o módulo
export default router;
// pra mais um de um módulo - export default { teste1, exemplo1 };