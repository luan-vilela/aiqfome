type CatalogItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  promo?: boolean;
  icon?: 'vegan' | 'spicy';
};

type AccordionSection = {
  title: string;
  description: string;
  icon?: boolean;
  items: CatalogItem[];
};

type RestaurantMenu = {
  [restaurantId: string]: AccordionSection[];
};

export const restaurantMenus: RestaurantMenu = {
  'res-001': [
    {
      title: 'Ceviches',
      description: 'Peixe marinado com limão e especiarias.',
      items: [
        { id: 'product-01', name: 'Clássico', description: 'Peixe branco com limão', price: 22.5 },
        {
          id: 'product-02',
          name: 'Tropical',
          description: 'Peixe com manga e pimenta',
          price: 25.9,
          icon: 'spicy',
        },
        {
          id: 'product-03',
          name: 'Vegano',
          description: 'Tofu marinado com limão',
          price: 18.0,
          icon: 'vegan',
        },
        { id: 'product-04', name: 'Especial', description: 'Com leite de tigre', price: 27.5, promo: true },
      ],
    },
    {
      title: 'Sushis',
      description: 'Pequenos pedaços de arroz com peixe.',
      items: [
        { id: 'product-01', name: 'Filadélfia', description: 'Salmão e cream cheese', price: 19.9 },
        { id: 'product-02', name: 'Hot Roll', description: 'Frito crocante', price: 21.0 },
        { id: 'product-03', name: 'Skin', description: 'Pele de salmão frita', price: 17.5 },
        { id: 'product-04', name: 'Temaki', description: 'Cone de alga e recheio', price: 28.5 },
      ],
    },
    {
      title: 'Bebidas',
      description: 'Para acompanhar sua refeição.',
      items: [
        { id: 'product-01', name: 'Refrigerante Lata', description: '350ml', price: 6 },
        { id: 'product-02', name: 'Água com Gás', description: '500ml', price: 4.5 },
        { id: 'product-03', name: 'Cerveja Long Neck', description: '330ml', price: 8.0 },
        { id: 'product-04', name: 'Suco Natural', description: 'Laranja ou Uva', price: 7.5 },
      ],
    },
  ],
  'res-002': [
    {
      title: 'Pizzas Salgadas',
      description: 'Clássicas e especiais com muito recheio.',
      items: [
        { id: 'product-01', name: 'Calabresa', description: 'Com cebola roxa', price: 35 },
        { id: 'product-02', name: 'Frango c/ Catupiry', description: 'Cremosa', price: 38 },
        { id: 'product-03', name: '4 Queijos', description: 'Mix de queijos nobres', price: 42 },
        { id: 'product-04', name: 'Portuguesa', description: 'Presunto, ovo, ervilha', price: 40 },
      ],
    },
    {
      title: 'Pizzas Doces',
      description: 'Cobertas com chocolate e frutas.',
      items: [
        { id: 'product-01', name: 'Chocolate c/ Morango', description: 'Delícia cremosa', price: 45 },
        { id: 'product-02', name: 'Romeu e Julieta', description: 'Goiabada e queijo', price: 43 },
        { id: 'product-03', name: 'Banana c/ Canela', description: 'Sabor caseiro', price: 38 },
        { id: 'product-04', name: 'Prestígio', description: 'Coco e chocolate', price: 44 },
      ],
    },
    {
      title: 'Bebidas',
      description: 'Refresque-se!',
      items: [
        { id: 'product-01', name: 'Coca 2L', description: 'Para compartilhar', price: 10.5 },
        { id: 'product-02', name: 'Suco Natural', description: 'Uva/Laranja', price: 7.5 },
        { id: 'product-03', name: 'Água Mineral', description: '500ml', price: 3.5 },
      ],
    },
  ],
  'res-003': [
    {
      title: 'Burguers Clássicos',
      description: 'Pães artesanais e carne grelhada.',
      items: [
        { id: 'product-01', name: 'Cheddar Burguer', description: 'Com cebola caramelizada', price: 27 },
        { id: 'product-02', name: 'X-Salada', description: 'Com alface e tomate', price: 24 },
        { id: 'product-03', name: 'Bacon Duplo', description: 'Dois andares de bacon', price: 29 },
        { id: 'product-04', name: 'Smash Burguer', description: 'Pão tostado, carne prensada', price: 30 },
      ],
    },
    {
      title: 'Acompanhamentos',
      description: 'Para completar seu combo.',
      items: [
        { id: 'product-01', name: 'Batata Frita', description: 'Porção média', price: 10 },
        { id: 'product-02', name: 'Onion Rings', description: 'Crocantes', price: 12 },
        { id: 'product-03', name: 'Nuggets', description: '6 unidades', price: 14 },
      ],
    },
    {
      title: 'Bebidas Geladas',
      description: 'Combina com o lanche.',
      items: [
        { id: 'product-01', name: 'Coca Lata', description: '350ml', price: 6 },
        { id: 'product-02', name: 'Milkshake', description: 'Chocolate/Morango', price: 15 },
        { id: 'product-03', name: 'Suco Natural', description: 'Uva ou Laranja', price: 8 },
      ],
    },
  ],
  'res-004': [
    {
      title: 'Massas Artesanais',
      description: 'Molhos frescos e massas feitas na casa.',
      items: [
        { id: 'product-01', name: 'Spaghetti Bolonhesa', description: 'Carne moída e tomate', price: 32 },
        { id: 'product-02', name: 'Fettuccine Alfredo', description: 'Molho branco e parmesão', price: 36 },
        { id: 'product-03', name: 'Ravioli de Ricota', description: 'Recheado e gratinado', price: 39 },
      ],
    },
    {
      title: 'Pratos Executivos',
      description: 'Para o almoço do dia a dia.',
      items: [
        { id: 'product-01', name: 'Parmegiana', description: 'Frango empanado, arroz e fritas', price: 28 },
        { id: 'product-02', name: 'Strogonoff', description: 'Com batata palha', price: 26 },
        { id: 'product-03', name: 'Bife Acebolado', description: 'Arroz, feijão e salada', price: 25 },
      ],
    },
    {
      title: 'Bebidas & Sobremesas',
      description: 'Feche com chave de ouro.',
      items: [
        { id: 'product-01', name: 'Pudim', description: 'Fatia cremosa', price: 7 },
        { id: 'product-02', name: 'Mousse de Maracujá', description: 'Equilibrado e leve', price: 6.5 },
        { id: 'product-03', name: 'Refrigerante', description: 'Lata 350ml', price: 5 },
      ],
    },
  ],
  'res-005': [
    {
      title: 'Tapiocas',
      description: 'Opções doces e salgadas sem glúten.',
      items: [
        { id: 'product-01', name: 'Frango c/ Queijo', description: 'Leve e saborosa', price: 18 },
        { id: 'product-02', name: 'Banana c/ Canela', description: 'Doce da casa', price: 16 },
        { id: 'product-03', name: 'Coco c/ Leite Condensado', description: 'Doce e suave', price: 17 },
      ],
    },
    {
      title: 'Sucos Naturais',
      description: 'Feitos na hora.',
      items: [
        { id: 'product-01', name: 'Detox', description: 'Couve, limão, gengibre', price: 10 },
        { id: 'product-02', name: 'Melancia', description: 'Refrescante', price: 8 },
        { id: 'product-03', name: 'Acerola', description: 'Rica em vitamina C', price: 8 },
      ],
    },
    {
      title: 'Açai no Copo',
      description: 'Com complementos deliciosos.',
      items: [
        { id: 'product-01', name: 'Açai Tradicional', description: '300ml', price: 12 },
        { id: 'product-02', name: 'Açai c/ Banana e Granola', description: '500ml', price: 16 },
        { id: 'product-03', name: 'Açai Turbo', description: 'Com leite ninho e paçoca', price: 18 },
      ],
    },
  ],
  'res-006': [
    {
      title: 'Sopas Quentes',
      description: 'Perfeitas para dias frios.',
      items: [
        { id: 'product-01', name: 'Sopa de Abóbora', description: 'Com gengibre', price: 16 },
        { id: 'product-02', name: 'Caldo Verde', description: 'Batata e couve', price: 18 },
        { id: 'product-03', name: 'Canja de Galinha', description: 'Tradicional', price: 15 },
        { id: 'product-04', name: 'Sopa de Ervilha', description: 'Com bacon', price: 19 },
      ],
    },
    {
      title: 'Pães Artesanais',
      description: 'Feitos com fermentação natural.',
      items: [
        { id: 'product-01', name: 'Pão Integral', description: 'Com sementes', price: 7 },
        { id: 'product-02', name: 'Focaccia', description: 'Azeite e alecrim', price: 10 },
        { id: 'product-03', name: 'Pão de Azeitona', description: 'Saboroso', price: 9 },
        { id: 'product-04', name: 'Baguete Tradicional', description: 'Crocante', price: 8 },
      ],
    },
    {
      title: 'Chás e Infusões',
      description: 'Bebidas naturais e reconfortantes.',
      items: [
        { id: 'product-01', name: 'Chá de Camomila', description: 'Calmante natural', price: 5 },
        { id: 'product-02', name: 'Chá de Hibisco', description: 'Com limão', price: 5 },
        { id: 'product-03', name: 'Chá Verde', description: 'Detox', price: 5 },
        { id: 'product-04', name: 'Infusão de Frutas Vermelhas', description: 'Leve e doce', price: 6 },
      ],
    },
  ],

  'res-007': [
    {
      title: 'Comida Árabe',
      description: 'Receitas tradicionais do Oriente Médio.',
      items: [
        { id: 'product-01', name: 'Kibe Frito', description: 'Com hortelã', price: 4.5 },
        { id: 'product-02', name: 'Esfiha Aberta', description: 'Carne ou queijo', price: 5 },
        { id: 'product-03', name: 'Homus', description: 'Pasta de grão de bico', price: 12 },
        { id: 'product-04', name: 'Tabule', description: 'Salada libanesa', price: 10 },
      ],
    },
    {
      title: 'Pratos Quentes',
      description: 'Com toque árabe.',
      items: [
        { id: 'product-01', name: 'Arroz Marroquino', description: 'Com amêndoas', price: 18 },
        { id: 'product-02', name: 'Charuto de Uva', description: 'Recheado com arroz', price: 16 },
        { id: 'product-03', name: 'Kafta no Espeto', description: 'Carne moída temperada', price: 22 },
      ],
    },
    {
      title: 'Doces Árabes',
      description: 'Feitos com mel, nozes e massa folhada.',
      items: [
        { id: 'product-01', name: 'Baklava', description: 'Camadas crocantes com mel', price: 9 },
        { id: 'product-02', name: 'Mamoul', description: 'Biscoito de tâmaras', price: 8 },
        { id: 'product-03', name: 'Halawi', description: 'Doce de gergelim', price: 7 },
      ],
    },
  ],

  'res-008': [
    {
      title: 'Lanches Naturais',
      description: 'Opções leves e saudáveis.',
      items: [
        { id: 'product-01', name: 'Sanduíche de Frango', description: 'Integral com alface', price: 12 },
        { id: 'product-02', name: 'Wrap Vegano', description: 'Com homus e legumes', price: 14 },
        { id: 'product-03', name: 'Sanduíche de Atum', description: 'Light', price: 13 },
        { id: 'product-04', name: 'Salada no Pote', description: 'Pronta para consumo', price: 15 },
      ],
    },
    {
      title: 'Sucos Detox',
      description: 'Com ingredientes naturais.',
      items: [
        { id: 'product-01', name: 'Verde', description: 'Couve, maçã e limão', price: 9 },
        { id: 'product-02', name: 'Vermelho', description: 'Beterraba e morango', price: 9 },
        { id: 'product-03', name: 'Amarelo', description: 'Abacaxi e gengibre', price: 9 },
      ],
    },
    {
      title: 'Sobremesas Fit',
      description: 'Sem açúcar e lactose.',
      items: [
        { id: 'product-01', name: 'Bolo de Banana', description: 'Com aveia', price: 8 },
        { id: 'product-02', name: 'Torta de Maçã', description: 'Sem glúten', price: 9 },
        { id: 'product-03', name: 'Brownie Fit', description: 'Com cacau 70%', price: 10 },
      ],
    },
  ],

  'res-009': [
    {
      title: 'Mexicano',
      description: 'Sabor e picância da culinária mexicana.',
      items: [
        { id: 'product-01', name: 'Tacos', description: 'Carne ou vegetariano', price: 22 },
        { id: 'product-02', name: 'Burrito', description: 'Feijão, arroz e carne', price: 24 },
        { id: 'product-03', name: 'Nachos', description: 'Com guacamole e cheddar', price: 20 },
        { id: 'product-04', name: 'Quesadilla', description: 'Queijo derretido e jalapeño', price: 21 },
      ],
    },
    {
      title: 'Molhos Especiais',
      description: 'Para acompanhar seus pratos.',
      items: [
        { id: 'product-01', name: 'Guacamole', description: 'Abacate e temperos', price: 6 },
        { id: 'product-02', name: 'Pico de Gallo', description: 'Tomate, cebola e coentro', price: 5 },
        { id: 'product-03', name: 'Sour Cream', description: 'Creme azedo', price: 5 },
      ],
    },
    {
      title: 'Bebidas Temáticas',
      description: 'Mexican style.',
      items: [
        { id: 'product-01', name: 'Agua Fresca', description: 'Hibisco gelado', price: 6 },
        { id: 'product-02', name: 'Refrigerante Importado', description: 'Mexican Coke', price: 9 },
        { id: 'product-03', name: 'Tequila Shot', description: 'Dose de tequila', price: 12 },
      ],
    },
  ],

  'res-010': [
    {
      title: 'Comida Brasileira',
      description: 'Sabores do Brasil em um só lugar.',
      items: [
        { id: 'product-01', name: 'Feijoada Completa', description: 'Com arroz, farofa e couve', price: 29 },
        { id: 'product-02', name: 'Moqueca de Peixe', description: 'Com leite de coco e dendê', price: 34 },
        {
          id: 'product-03',
          name: 'Escondidinho',
          description: 'De carne seca com purê de mandioca',
          price: 27,
        },
        { id: 'product-04', name: 'Bobó de Camarão', description: 'Tradicional nordestino', price: 36 },
      ],
    },
    {
      title: 'Porções',
      description: 'Perfeitas para compartilhar.',
      items: [
        { id: 'product-01', name: 'Mandioca Frita', description: 'Crocante', price: 12 },
        { id: 'product-02', name: 'Torresmo', description: 'Bem sequinho', price: 15 },
        { id: 'product-03', name: 'Polenta Frita', description: 'Com parmesão', price: 14 },
      ],
    },
    {
      title: 'Sobremesas Típicas',
      description: 'Doces tradicionais brasileiros.',
      items: [
        { id: 'product-01', name: 'Brigadeiro Gourmet', description: 'Com granulado belga', price: 5 },
        { id: 'product-02', name: 'Pavê de Chocolate', description: 'Camadas cremosas', price: 7 },
        { id: 'product-03', name: 'Cocada Cremosa', description: 'Feita com leite condensado', price: 6 },
      ],
    },
  ],
};
