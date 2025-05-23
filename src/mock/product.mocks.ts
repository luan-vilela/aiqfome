export const productListMock = [
  {
    id: 'product-01',
    title: 'Ceviche de salmão',
    description: 'salmão temperado com limão, cebola e pimenta',
    imageUrl: '/images/ceviche.png',
    basePrice: 29.9,
    unitPrice: 29.9,
    options: {
      checkboxGroup: {
        title: 'acompanhamentos',
        subtitle: 'escolha de 1 a 2',
        required: true,
        min: 1,
        max: 2,
        options: [
          { id: 'cb-1', label: 'shoyu', price: 2, value: 'shoyu' },
          { id: 'cb-2', label: 'gengibre', price: 3, oldPrice: 4, value: 'gengibre' },
          { id: 'cb-3', label: 'wasabi', value: 'wasabi' },
        ],
        initialSelected: ['wasabi'],
      },
      radioGroup: {
        title: 'qual o tamanho?',
        subtitle: 'escolha 1',
        required: true,
        name: 'tamanho',
        options: [
          { id: 'r-1', label: 'pequeno', price: 25, value: 'p', name: 'tamanho' },
          { id: 'r-2', label: 'médio', price: 29.9, value: 'm', name: 'tamanho' },
          { id: 'r-3', label: 'grande', price: 34.9, value: 'g', name: 'tamanho' },
        ],
        initialSelected: ['m'],
      },
      quantityItems: {
        title: 'vai querer bebida?',
        subtitle: 'escolha quantos quiser',
        items: [
          { id: 'coca', label: 'coca-cola', price: 5 },
          { id: 'fanta', label: 'fanta laranja', price: 5 },
          { id: 'gua', label: 'guaraná antarctica', price: 5 },
          { id: 'suco', label: 'suco prats laranja', price: 6 },
          { id: 'agua', label: 'água sem gás', price: 3 },
        ],
      },
    },
  },
  {
    id: 'product-02',
    title: 'Yakissoba de frango',
    description: 'macarrão oriental com legumes e frango grelhado',
    imageUrl: '/images/yakissoba.png',
    basePrice: 24.9,
    unitPrice: 24.9,
    options: {
      checkboxGroup: {
        title: 'extras',
        subtitle: 'até 3 itens',
        required: false,
        min: 0,
        max: 3,
        options: [
          { id: 'ex-1', label: 'tofu', price: 4, value: 'tofu' },
          { id: 'ex-2', label: 'champignon', price: 3, value: 'champignon' },
          { id: 'ex-3', label: 'broto de feijão', price: 2, value: 'broto' },
        ],
        initialSelected: [],
      },
      radioGroup: {
        title: 'escolha o molho',
        subtitle: 'somente um',
        required: true,
        name: 'molho',
        options: [
          { id: 'r-4', label: 'shoyu tradicional', price: 0, value: 'shoyu', name: 'molho' },
          { id: 'r-5', label: 'teriyaki', price: 2, value: 'teriyaki', name: 'molho' },
          { id: 'r-6', label: 'picante', price: 2, value: 'picante', name: 'molho' },
        ],
        initialSelected: ['shoyu'],
      },
      quantityItems: {
        title: 'adicionar bebidas?',
        subtitle: 'opcional',
        items: [
          { id: 'agua', label: 'água sem gás', price: 3 },
          { id: 'suco', label: 'suco de uva', price: 6 },
        ],
      },
    },
  },
  {
    id: 'product-03',
    title: 'Combo burger artesanal',
    description: 'hambúrguer com batata frita e bebida inclusa',
    imageUrl: '/images/burger.png',
    basePrice: 32.9,
    unitPrice: 32.9,
    options: {
      checkboxGroup: {
        title: 'adicionais no burger',
        subtitle: 'escolha até 2',
        required: false,
        min: 0,
        max: 2,
        options: [
          { id: 'ad-1', label: 'bacon', price: 4, value: 'bacon' },
          { id: 'ad-2', label: 'cheddar extra', price: 3, value: 'cheddar' },
          { id: 'ad-3', label: 'ovo', price: 2, value: 'ovo' },
        ],
        initialSelected: [],
      },
      radioGroup: {
        title: 'ponto da carne',
        subtitle: 'escolha 1',
        required: true,
        name: 'carne',
        options: [
          { id: 'r-7', label: 'mal passada', value: 'mal', name: 'carne' },
          { id: 'r-8', label: 'ao ponto', value: 'ponto', name: 'carne' },
          { id: 'r-9', label: 'bem passada', value: 'bem', name: 'carne' },
        ],
        initialSelected: ['ponto'],
      },
      quantityItems: {
        title: 'refil de bebidas?',
        subtitle: 'quantos quiser',
        items: [
          { id: 'refil-coca', label: 'refil coca', price: 7 },
          { id: 'refil-guarana', label: 'refil guaraná', price: 7 },
        ],
      },
    },
  },
  {
    id: 'product-04',
    title: 'Açaí na tigela',
    description: 'açaí puro batido, com frutas e coberturas',
    imageUrl: '/images/acai.png',
    basePrice: 21.0,
    unitPrice: 21.0,
    options: {
      checkboxGroup: {
        title: 'frutas',
        subtitle: 'até 3 frutas',
        required: false,
        min: 0,
        max: 3,
        options: [
          { id: 'fr-1', label: 'banana', price: 0, value: 'banana' },
          { id: 'fr-2', label: 'morango', price: 2, value: 'morango' },
          { id: 'fr-3', label: 'kiwi', price: 3, value: 'kiwi' },
        ],
        initialSelected: ['banana'],
      },
      radioGroup: {
        title: 'tipo de granola',
        subtitle: 'escolha 1',
        required: true,
        name: 'granola',
        options: [
          { id: 'r-10', label: 'tradicional', value: 'tradicional', name: 'granola' },
          { id: 'r-11', label: 'sem açúcar', value: 'sem-acucar', name: 'granola' },
        ],
        initialSelected: ['tradicional'],
      },
      quantityItems: {
        title: 'quer adicionar toppings?',
        subtitle: 'quantos quiser',
        items: [
          { id: 'tp-1', label: 'leite condensado', price: 2 },
          { id: 'tp-2', label: 'paçoca', price: 1.5 },
          { id: 'tp-3', label: 'choco ball', price: 2 },
        ],
      },
    },
  },
  {
    id: 'product-05',
    title: 'Temaki de salmão',
    description: 'cone de alga com arroz e salmão fresco',
    imageUrl: '/images/temaki.png',
    basePrice: 18.9,
    unitPrice: 18.9,
    options: {
      checkboxGroup: {
        title: 'adicionais',
        subtitle: 'escolha até 2',
        required: false,
        min: 0,
        max: 2,
        options: [
          { id: 'add-1', label: 'cream cheese', price: 2, value: 'creamcheese' },
          { id: 'add-2', label: 'cebolinha', price: 1, value: 'cebolinha' },
          { id: 'add-3', label: 'molho tarê', price: 1.5, value: 'tare' },
        ],
        initialSelected: [],
      },
      radioGroup: {
        title: 'tipo de alga',
        subtitle: 'escolha 1',
        required: true,
        name: 'alga',
        options: [
          { id: 'r-12', label: 'tradicional', value: 'tradicional', name: 'alga' },
          { id: 'r-13', label: 'tostada', value: 'tostada', name: 'alga' },
        ],
        initialSelected: ['tradicional'],
      },
      quantityItems: {
        title: 'complementos',
        subtitle: 'quantos quiser',
        items: [
          { id: 'molho-soja', label: 'molho shoyu', price: 0 },
          { id: 'hashi', label: 'par de hashi', price: 1 },
        ],
      },
    },
  },
  {
    id: 'product-06',
    title: 'Pizza portuguesa',
    description: 'presunto, ovo, cebola, pimentão e azeitona',
    imageUrl: '/images/pizza.png',
    basePrice: 42.0,
    unitPrice: 42.0,
    options: {
      checkboxGroup: {
        title: 'borda recheada',
        subtitle: 'opcional',
        required: false,
        min: 0,
        max: 1,
        options: [
          { id: 'borda-catupiry', label: 'catupiry', price: 5, value: 'catupiry' },
          { id: 'borda-cheddar', label: 'cheddar', price: 5, value: 'cheddar' },
        ],
        initialSelected: [],
      },
      radioGroup: {
        title: 'tamanho da pizza',
        subtitle: 'escolha 1',
        required: true,
        name: 'tamanho',
        options: [
          { id: 'r-14', label: 'média', value: 'm', name: 'tamanho' },
          { id: 'r-15', label: 'grande', value: 'g', name: 'tamanho' },
        ],
        initialSelected: ['g'],
      },
      quantityItems: {
        title: 'bebidas',
        subtitle: 'adicionais',
        items: [
          { id: 'coca2l', label: 'coca-cola 2L', price: 10 },
          { id: 'agua', label: 'água 500ml', price: 3 },
        ],
      },
    },
  },
  {
    id: 'product-07',
    title: 'Esfiha de carne',
    description: 'massa leve recheada com carne temperada',
    imageUrl: '/images/esfiha.png',
    basePrice: 6.0,
    unitPrice: 6.0,
    options: {
      checkboxGroup: {
        title: 'molhos adicionais',
        subtitle: 'até 2',
        required: false,
        min: 0,
        max: 2,
        options: [
          { id: 'molho-alho', label: 'molho de alho', price: 1, value: 'alho' },
          { id: 'molho-pimenta', label: 'molho de pimenta', price: 1, value: 'pimenta' },
        ],
        initialSelected: [],
      },
      radioGroup: {
        title: 'tipo da esfiha',
        subtitle: 'assada ou frita',
        required: true,
        name: 'tipo',
        options: [
          { id: 'r-16', label: 'assada', value: 'assada', name: 'tipo' },
          { id: 'r-17', label: 'frita', value: 'frita', name: 'tipo' },
        ],
        initialSelected: ['assada'],
      },
      quantityItems: {
        title: 'quantas unidades?',
        subtitle: 'adicione à vontade',
        items: [{ id: 'esf-1', label: 'esfiha extra', price: 6 }],
      },
    },
  },
  {
    id: 'product-08',
    title: 'Tapioca de coco com leite condensado',
    description: 'tapioca doce com recheio cremoso',
    imageUrl: '/images/tapioca.png',
    basePrice: 10.5,
    unitPrice: 10.5,
    options: {
      checkboxGroup: {
        title: 'recheios adicionais',
        subtitle: 'até 2',
        required: false,
        min: 0,
        max: 2,
        options: [
          { id: 'rch-1', label: 'banana', price: 2, value: 'banana' },
          { id: 'rch-2', label: 'chocolate', price: 2.5, value: 'chocolate' },
        ],
        initialSelected: [],
      },
      radioGroup: {
        title: 'tipo da tapioca',
        subtitle: 'escolha 1',
        required: true,
        name: 'massa',
        options: [
          { id: 'r-18', label: 'fina', value: 'fina', name: 'massa' },
          { id: 'r-19', label: 'grossa', value: 'grossa', name: 'massa' },
        ],
        initialSelected: ['fina'],
      },
      quantityItems: {
        title: 'adicionar bebida?',
        subtitle: 'escolha quantas quiser',
        items: [{ id: 'agua-coco', label: 'água de coco', price: 5 }],
      },
    },
  },
  {
    id: 'product-09',
    title: 'Salada tropical',
    description: 'folhas verdes com frutas e molho cítrico',
    imageUrl: '/images/salada.png',
    basePrice: 19.0,
    unitPrice: 19.0,
    options: {
      checkboxGroup: {
        title: 'ingredientes extras',
        subtitle: 'até 3',
        required: false,
        min: 0,
        max: 3,
        options: [
          { id: 'sal-1', label: 'nozes', price: 2, value: 'nozes' },
          { id: 'sal-2', label: 'queijo feta', price: 3, value: 'feta' },
          { id: 'sal-3', label: 'croutons', price: 1, value: 'croutons' },
        ],
        initialSelected: [],
      },
      radioGroup: {
        title: 'molho da salada',
        subtitle: 'escolha 1',
        required: true,
        name: 'molho',
        options: [
          { id: 'r-20', label: 'mostarda e mel', value: 'mostarda', name: 'molho' },
          { id: 'r-21', label: 'balsâmico', value: 'balsamico', name: 'molho' },
        ],
        initialSelected: ['mostarda'],
      },
      quantityItems: {
        title: 'adicionais de proteína?',
        subtitle: 'quantos quiser',
        items: [
          { id: 'frango', label: 'frango grelhado', price: 6 },
          { id: 'ovo-cozido', label: 'ovo cozido', price: 2 },
        ],
      },
    },
  },
  {
    id: 'product-10',
    title: 'Brownie com sorvete',
    description: 'brownie quente com bola de sorvete',
    imageUrl: '/images/brownie.png',
    basePrice: 15.0,
    unitPrice: 15.0,
    options: {
      checkboxGroup: {
        title: 'coberturas extras',
        subtitle: 'até 2',
        required: false,
        min: 0,
        max: 2,
        options: [
          { id: 'top-1', label: 'calda de chocolate', price: 2, value: 'chocolate' },
          { id: 'top-2', label: 'calda de caramelo', price: 2, value: 'caramelo' },
        ],
        initialSelected: [],
      },
      radioGroup: {
        title: 'sabor do sorvete',
        subtitle: 'escolha 1',
        required: true,
        name: 'sorvete',
        options: [
          { id: 'r-22', label: 'baunilha', value: 'baunilha', name: 'sorvete' },
          { id: 'r-23', label: 'morango', value: 'morango', name: 'sorvete' },
        ],
        initialSelected: ['baunilha'],
      },
      quantityItems: {
        title: 'acompanhamentos?',
        subtitle: 'quantos quiser',
        items: [{ id: 'bola-extra', label: 'bola extra de sorvete', price: 5 }],
      },
    },
  },
];
