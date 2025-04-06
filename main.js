const app = Vue.createApp({
  data() {
    return {
      timestamp: new Date().getUTCFullYear(),
      cart: [],
    };
  },
  methods: {
    addToCart(id) {
      const cartItem = this.cart.find((item) => item.id === id);

      if (cartItem) {
        cartItem.count++;
      } else {
        this.cart.push({ id, count: 1 });
      }
    },
    removeFromCart(id) {
      const cartItem = this.cart.find((item) => item.id === id);
      const nextCount = cartItem.count - 1;

      if (nextCount === 0) {
        this.cart = this.cart.filter((item) => item.id !== id);
      } else {
        cartItem.count = nextCount;
      }
    },
    checkIsInCart(id) {
      return !!this.cart.find((item) => item.id === id);
    },
  },
  computed: {
    cartItemsNumber() {
      return this.cart.reduce((acc, item) => (acc += item.count), 0);
    },
  },
});
