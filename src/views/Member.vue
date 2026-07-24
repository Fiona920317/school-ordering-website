<template>
  <div
    v-if="hasLoggedIn"
    class="w-100 d-flex flex-column align-items-center"
    style="max-width: 767px"
  >
    <router-view></router-view>
    <Footer></Footer>
  </div>
  <Login v-else></Login>
</template>
<script>
import Login from "../components/member/Login.vue";
import Footer from "../components/Footer.vue";

import { mapState } from "pinia";
import { useAuthStore } from "../stores/authStore.js";

export default {
  components: {
    Login,
    Footer,
  },
  computed: {
    ...mapState(useAuthStore, ["hasLoggedIn"]),
  },
};
</script>
