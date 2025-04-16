import express from "express";
// Carregando o método do express para gerenciamento de rotas
const router = express.Router();

// ROTA DE PRODUTOS
router.get("/produtos", (req, res) => {

  //Array de objetos
  const produtos = [
    {
      imagem: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/chili-1993744_1280.jpg',
      nome: 'Pimenta Malagueta',
      preco: 7.90,
      categoria: 'Fresca'
    },
    {
      imagem: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/chili-1239426_1280.jpg',
      nome: 'Pimenta Biquinho',
      preco: 6.50,
      categoria: 'Conserva'
    },
    {
      imagem: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/chili-1993743_1280.jpg',
      nome: 'Pimenta Dedo-de-Moça',
      preco: 8.20,
      categoria: 'Fresca'
    },
    {
      imagem: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/chili-1993742_1280.jpg',
      nome: 'Pimenta Jalapeño',
      preco: 10.00,
      categoria: 'In natura'
    },
    {
      imagem: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/chili-1993741_1280.jpg',
      nome: 'Pimenta Habanero',
      preco: 12.50,
      categoria: 'Fresca'
    },
    {
      imagem: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/chili-1993740_1280.jpg',
      nome: 'Pimenta Calabresa',
      preco: 5.90,
      categoria: 'Desidratada'
    }
  ];

  res.render("produtos", {
    // Enviando variáveis produto para a página
    produtos: produtos,
  });
});

// Exportando o módulo
export default router;
// pra mais um de um módulo - export default { teste1, exemplo1 };