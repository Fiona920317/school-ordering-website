<template>
  <div class="navbarBackground bg-light">
    <nav class="navbar">
      <router-link class="navbar-brand text-primary" to="/">
        <i class="bi bi-fork-knife"></i>校園點餐
      </router-link>
      <a class="navbar-notification"><i class="bi bi-bell"></i></a>
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
        <router-link class="navbarBottom-link" to="/">
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
              99+
              <span class="visually-hidden">unread messages</span>
            </span></i
          ><span style="font-size: 12px">購物車</span>
        </router-link>
      </li>
      <li>
        <router-link class="navbarBottom-link" to="/login">
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
}
.navbar-notification {
  font-size: 24px;
  height: 100%;
  width: 70px;
  border-radius: 10px;

  cursor: pointer;
  text-align: center;
}
.navbar-notification:hover {
  background-color: $secondary;
}
////navbarBottom
.navbarBottomBackground {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
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
  border-radius: 10px;
  width: 100%;

  display: flex;
  flex-direction: column;
}
.navbarBottom-link:hover {
  background-color: $secondary;
  color: $primary;
}
</style>
