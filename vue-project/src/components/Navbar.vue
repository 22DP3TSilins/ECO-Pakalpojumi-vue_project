<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">🌿 Eco Pakalpojumi</router-link>
    </div>

    <!-- Navigation Links -->
    <div class="nav-links-container">
      <div class="nav-links" :class="{ 'show': menuOpen }">
        <router-link to="/" @click="closeMenu">🏠 Home</router-link>
        <router-link to="/products" @click="closeMenu">🛍️ Products</router-link>
      </div>

      <!-- Cart Button (Always Visible) -->
      <router-link to="/cart" class="cart">
        🛒 <span v-if="cartItems > 0" class="cart-badge">{{ cartItems }}</span>
      </router-link>
    </div>

    <!-- Mobile Hamburger Menu -->
    <button class="menu-toggle" @click="toggleMenu">🍔</button>
  </nav>
</template>

<script>
export default {
  props: ['cartItems'],
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
};
</script>

<style scoped>
/* General Navbar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #4caf50;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
}

/* Logo */
.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

/* Navigation Container */
.nav-links-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* Desktop Navigation */
.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

/* Cart (Always Visible) */
.cart {
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  position: relative;
}

/* Cart Badge (Red Circle with Item Count) */
.cart-badge {
  position: absolute;
  top: -5px;
  right: -8px;
  background: red;
  color: white;
  padding: 3px 7px;
  border-radius: 50%;
  font-size: 0.8rem;
  min-width: 18px;
  text-align: center;
}

/* Mobile Menu Button */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: #4caf50;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .nav-links.show {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }

  /* Fix Cart Button Position on Mobile */
  .nav-links-container {
    width: 100%;
    justify-content: space-between;
  }

  .cart {
    padding-right: 1rem;
    margin-left: auto;
  }
}
</style>
