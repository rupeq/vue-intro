app.component("socks-item", {
  props: {
    item: {
      type: Object,
      required: true,
    },
    isInCart: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["add-to-cart", "remove-from-cart"],
  methods: {
    onAddToCart(id) {
      this.$emit("add-to-cart", id);
    },
    onRemoveFromCart(id) {
      this.$emit("remove-from-cart", id);
    },
  },
  template: /*html*/ `
    <li class="socksItem">
      <div class="socksItemLogo_Container">
        <img 
          :alt="item.image.alt"
          :src="item.image.src" 
        />
      </div>
      <div>
        <template v-if="item.quantity > 0">
          <p>In stock: {{item.quantity}}</p>
        </template>
        <template v-else>
          <p>Out of stock</p>
        </template>
        <p>{{item.price}}</p>
        <p v-if="item.onSale">On sale</p>
        <button 
          :disabled="item.quantity === 0" 
          @click="onAddToCart(item.id)"
        >
          Add to cart
        </button>
        <button 
          v-if="isInCart" 
          @click="onRemoveFromCart(item.id)"
        >
          Remove from cart
        </button>
      </div>
    </li>
  `,
});
