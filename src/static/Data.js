export const steps = [
  {
    id: 0,
    name: "Broth",
    description: "Choose your broth",
    type: "SELECT_SINGLE",
    items: [
      {
        id: 0,
        name: "Beef",
        description: "Beef Broth",
        max_amount: 1,
      },
      {
        id: 1,
        name: "Pork",
        description: "Pork Broth",
        max_amount: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Tare",
    description: "Choose your tare",
    type: "SELECT_SINGLE",
    items: [
      {
        id: 0,
        name: "Tonkatsu",
        description: "Tongue my katsu",
        max_amount: 1,
        highlight_dependency: [
          {
            data: [
              {
                parent_id: 2,
                id: 2,
              },
              {
                parent_id: 2,
                id: 2,
              },
            ],
          },
          {
            parent_id: 2,
            id: 2,
          },
        ],
      },
      {
        id: 1,
        name: "Miso",
        description: "Miso tare",
        max_amount: 1,
      },
      {
        id: 2,
        name: "Mango Miso",
        description: "Its not Spicy",
        max_amount: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Toppings",
    description: "Choose your toppings",
    type: "SELECT_MULTIPLE",
    items: [
      {
        id: 0,
        name: "Tomatoe",
        description: "Its a tomatoe, man.",
        max_amount: 1,
      },
      {
        id: 1,
        name: "Mushroom",
        description: "not the magic kind",
        max_amount: 1,
      },
    ],
  },
  {
    id: 3,
    name: "Mango Additions",
    description: "Chose additons for your mango-habenero enhanced ramen",
    type: "SELECT_MULTIPLE",
    dependency: [
      {
        data: [
          {
            parent_id: 2,
            id: 2,
          },
          {
            parent_id: 2,
            id: 2,
          },
        ],
      },
      {
        parent_id: 2,
        id: 2,
      },
    ],
    items: [
      {
        id: 0,
        name: "Tajin",
        description: "Mexican Tajin",
        max_amount: 1,
      },
      {
        id: 1,
        name: "Lime",
        description: "normal lime",
        max_amount: 3,
      },
    ],
  },
];
