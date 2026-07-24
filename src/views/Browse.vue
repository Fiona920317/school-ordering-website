<template>
  <div
    class="w-100 d-flex flex-column align-items-center gap-3"
    style="max-width: 767px"
  >
    <router-view v-if="hasLoggedIn"></router-view>
    <Login v-else></Login>
  </div>
</template>
<script>
import Login from "../components/member/Login.vue";

import { mapState } from "pinia";
import { useAuthStore } from "../stores/authStore.js";

export default {
  components: {
    Login,
  },
  computed: {
    ...mapState(useAuthStore, ["hasLoggedIn"]),
  },
};
</script>
