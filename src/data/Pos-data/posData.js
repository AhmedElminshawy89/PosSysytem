const PosData = [
  {
    cardData: {
      img: "/assets/media/svg/food-icons/spaghetti.svg",
      title: "Lunch",
      numOfOptions: 8,
    },
    categoriesInCard: [
      {
        img: "/assets/media/stock/food/img-1.jpg",
        title: "macaroni",
        time: "16",
        price: "15",
      },
      {
        img: "/assets/media/stock/food/img-2.jpg",
        title: "T-Bone Stake",
        time: "16",
        price: "16.50",
      },
      {
        img: "/assets/media/stock/food/img-9.jpg",
        title: "Soup of the Day",
        time: "16",
        price: "7.50",
      },
      {
        img: "https://fitmencook.com/wp-content/uploads/2023/03/Burger-King-Cheese-Whopper-Burger-Recipe11.jpg.webp",
        title: "Whopper Burger",
        time: "16",
        price: "10.50",
      },
      {
        img: "https://www.allrecipes.com/thmb/3hN7uCQpPhYlm-K1QlxPB-Z5ato=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/150306-the-best-chicken-fried-steak-DDMFS-4x3-22a44d8658c24fd6880232cc2cbf9c65.jpg",
        title: "Chicken Fried",
        time: "16",
        price: "12.00",
      },
      {
        img: "data:image/jpeg;base64,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",
        title: "Caesar Salad",
        time: "16",
        price: "8.00",
      },
      {
        img: "https://assets.bonappetit.com/photos/656f48d75b552734225041ba/1:1/w_3129,h_3129,c_limit/20231120-WEB-Lasanga-6422.jpg",
        title: "Lasagna",
        time: "16",
        price: "14.00",
      },
      {
        img: "https://www.allrecipes.com/thmb/xNb_l8rpNkFB0i7MqcRjxgbmGoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241890-grilled-chicken-marinade-DDMFS-4x3-93bf452481e645808c72f13349340582.jpg",
        title: "Grilled Chicken",
        time: "16",
        price: "13.50",
      },
    ],
  },
  {
    cardData: {
      img: "/assets/media/svg/food-icons/salad.svg",
      title: "Salad",
      numOfOptions: 14,
    },
    categoriesInCard: [
      {
        img: "/assets/media/stock/food/img-9.jpg",
        title: "Soup of the Day",
        time: "16",
        price: "7.50",
      },
      {
        img: "/assets/media/stock/food/img-4.jpg",
        title: "Chicken Breast",
        time: "16",
        price: "9.00",
      },
      {
        img: "/assets/media/stock/food/img-3.jpg",
        title: "A special salad",
        time: "16",
        price: "13.00",
      },
      
    ],
  },
  {
    cardData: {
      img: "/assets/media/svg/food-icons/cheeseburger.svg",
      title: "Burger",
      numOfOptions: 5,
    },
    categoriesInCard: [
      {
        img: "/assets/media/stock/food/img-4.jpg",
        title: "Chicken Breast",
        time: "16",
        price: "9.00",
      },
      {
        img: "/assets/media/stock/food/img-8.jpg",
        title: "Ramen",
        time: "16",
        price: "14.90",
      },
    ],
  },
  {
    cardData: {
      img: "/assets/media/svg/food-icons/coffee.svg",
      title: "Coffee",
      numOfOptions: 7,
    },
    categoriesInCard: [
      {
        img: "/assets/media/stock/food/img-11.jpg",
        title: "Sweetey",
        time: "16",
        price: "11.40",
      },

      {
        img: "/assets/media/stock/food/img-8.jpg",
        title: "Ramen",
        time: "16",
        price: "14.90",
      },
    ],
  },
  {
    cardData: {
      img: "/assets/media/svg/food-icons/cheesecake.svg",
      title: "Dessert",
      numOfOptions: 8,
    },
    categoriesInCard: [
      {
        img: "/assets/media/stock/food/img-11.jpg",
        title: "Sweetey",
        time: "16",
        price: "11.40",
      },
      {
        img: "/assets/media/stock/food/img-2.jpg",
        title: "T-Bone Stake",
        time: "16",
        price: "16.50",
      },
    ],
  },
];

export { PosData };
