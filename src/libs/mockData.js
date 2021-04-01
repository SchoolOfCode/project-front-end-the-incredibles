const mockBusiness = {
  businessName: "Macramè Master",
  businessAbout: "We make really epic macramè things",
  businessImg: {
    src:
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    alt: "happy woman",
  },
  isTrading: true,
  products: [
    {
      productName: "White Macramè",
      img: {
        src: "https://static.turbosquid.com/Preview/2018/12/28__12_53_26/im03.jpg0CA87E61-DDCA-4FD5-9F79-EA8D7662CACADefault.jpg",
        alt: "white macrame"
      },
      price: 7.35,
      inventoryQuantity: 4,
      productId: 1,
      qty: 0
    },
    {
      productName: "Dog Macramè",
       img: {
        src: "https://i.pinimg.com/736x/7c/d4/db/7cd4dbbe1932bcabaf5c433fff435690.jpg",
        alt: "Dog macramè"
      },
      price: 2.83,
      inventoryQuantity: 4,
      productId: 2,
      qty: 0
    },
    {
      productName: "Leaf Macramè",
       img: {
        src: "https://honestlywtf.com/wp-content/uploads/2018/10/macramefeather30-2.jpg",
        alt: "leaf macramè"
      },
      price: 1.57,
      inventoryQuantity: 0,
      productId: 3,
    },
    {
     productName: "Plant Macramè",
       img: {
        src: "https://www.thesprucecrafts.com/thmb/xN3OgYeVE-2L2YpadYWYGpuViQ4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-macrame-13-04ecd36da4f84b289d0a88cb366e1d7f.jpg",
        alt: "Plant macramè"
      },
      price: 2.56,
      inventoryQuantity: 3,
      productId: 4,
    },
    {
      productName: "Poodle Macramè",
       img: {
        src: "https://i.ebayimg.com/images/g/DikAAOSwaZRdSy88/s-l300.jpg",
        alt: "Poodle macramè"
      },
      price: 25.99,
      inventoryQuantity: 5,
    },
    {
      productName: "Cat Macramè",
       img: {
        src: "data:image/jpeg;base64,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",
        alt: "Cat macramè"
      },
      price: 8.55,
      inventoryQuantity: 3,
      productId: 5,
    },
     {
      productName: "Owl Macramè",
       img: {
        src: "https://i.etsystatic.com/14966992/r/il/b7c403/1885787251/il_570xN.1885787251_l2hc.jpg",
        alt: "Owl macramè"
      },
      price: 6.55,
      inventoryQuantity: 2,
      productId: 6,
    },
  ],
};

export default mockBusiness;
