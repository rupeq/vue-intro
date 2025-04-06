app.component("socks-list", {
  props: {
    checkIsInCart: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      socks: [
        {
          id: "547d1dfd-799e-4e1b-8df5-b767e02cfe9d",
          image: {
            alt: "Blue Socks",
            src: "./assets/images/socks_blue.jpg",
          },
          quantity: 100,
          price: 150,
          onSale: false,
        },
        {
          id: "2224717d-6e84-4522-835b-36b3f0359d4f",
          image: {
            alt: "Green Socks",
            src: "./assets/images/socks_green.jpg",
          },
          quantity: 10,
          price: 100,
          onSale: true,
        },
      ],
    };
  },
  emits: ["add-to-cart", "remove-from-cart"],
  methods: {
    addToCart(id) {
      this.socks.find((item) => item.id === id).quantity--;
      this.$emit("add-to-cart", id);
    },
    removeFromCart(id) {
      this.socks.find((item) => item.id === id).quantity++;
      this.$emit("remove-from-cart", id);
    },
  },
  template: /*html*/ `
    <ul 
      class="socks"
      v-if="Array.isArray(socks) && socks.length > 0" 
    >
      <socks-item 
        v-for="item in socks" 
        :key="item.id"
        :item="item"
        :isInCart="checkIsInCart(item.id)"
        @add-to-cart="addToCart"
        @remove-from-cart="removeFromCart"
      >
      </socks-item>
    </ul>
    <p v-else>
      No socks available now :[
    </p>
  `,
});
