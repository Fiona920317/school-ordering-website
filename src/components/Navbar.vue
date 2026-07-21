<template>
  <div class="navbarBackground bg-light">
    <nav class="navbar">
      <router-link class="navbar-brand text-primary fs-3" to="/">
        <i class="bi bi-fork-knife"></i>校園點餐
      </router-link>
      <a class="navbar-notification"
        ><i class="bi bi-bell position-relative">
          <span
            class="position-absolute translate-middle p-2 bg-danger border border-light rounded-circle"
            style="top: 15%; left: 85%"
          >
            <span class="visually-hidden">New alerts</span>
          </span>
        </i>
      </a>
    </nav>
  </div>
  <div class="navbarBottomBackground bg-light">
    <ul class="navbarBottom d-flex m-0">
      <li>
        <router-link class="navbarBottom-link" to="/">
          <i class="bi bi-house"></i><span style="font-size: 12px">首頁</span>
        </router-link>
      </li>
      <li>
        <router-link class="navbarBottom-link" to="/browse">
          <i class="bi bi-fork-knife"></i
          ><span style="font-size: 12px">點餐</span>
        </router-link>
      </li>
      <li>
        <router-link class="navbarBottom-link" to="/cart">
          <i class="bi bi-cart position-relative">
            <span
              class="position-absolute top-0 start-70 translate-middle badge rounded-pill bg-danger"
              style="font-size: 12px"
            >
              3
              <span class="visually-hidden">unread messages</span>
            </span></i
          ><span style="font-size: 12px">購物車</span>
        </router-link>
      </li>
      <li>
        <router-link
          class="navbarBottom-link"
          :to="loggedIn ? '/member' : '/login'"
        >
          <i class="bi bi-person"></i
          ><span style="font-size: 12px">會員專區</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loggedIn: true,
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
<style lang="scss">
//全域設定
* {
  font-family: "Noto Sans", sans-serif;
}
ul {
  list-style: none;
  padding: 0;
}
//
.navbarBackground {
  border-bottom: 1px solid $secondary;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
}
.navbar {
  max-width: 767px;
  width: 100%;
}
.navbar-brand {
  font-size: 60px;
  font-weight: bold;
  margin-left: 10px;
}
.navbar-notification {
  font-size: 24px;
  height: 100%;
  width: 70px;
  border-radius: 10px;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar-notification:hover {
  background-color: $secondary;
}

////navbarBottom
.navbarBottomBackground {
  border-top: 1px solid $secondary;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
}
.navbarBottom {
  margin: 0;
  max-width: 767px;
  width: 100%;

  display: flex;
}
.navbarBottom li {
  flex: 1;
  display: flex;
  justify-content: center;
  text-align: center;
}
.navbarBottom-link {
  font-size: 26px;
  color: $primary;
  padding: 10px;
  width: 100%;
  font-weight: bold;

  display: flex;
  flex-direction: column;
}
.navbarBottom-link:hover {
  background-color: $secondary;
  color: $primary;
}
.navbarBottom .router-link-active {
  background-color: $secondary;
  color: $primary;
}
</style>
