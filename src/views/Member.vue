<template>
  <div
    class="w-100 d-flex flex-column align-items-center"
    style="max-width: 767px"
  >
    <MemberInfo
      v-if="hasLoggedIn"
      :name="userInfo.name"
      :studentNum="userInfo.studentNum"
      :phoneNum="userInfo.phoneNum"
      :area="userInfo.area"
    ></MemberInfo>
    <Login v-else></Login>
    <Footer></Footer>
  </div>
</template>
<script>
import MemberInfo from "../components/member/MemberInfo.vue";
import Login from "../components/member/Login.vue";
import Footer from "../components/Footer.vue";

import { mapState } from "pinia";
import { useAuthStore } from "../stores/authStore.js";

export default {
  components: {
    MemberInfo,
    Login,
    Footer,
  },
  computed: {
    ...mapState(useAuthStore, ["hasLoggedIn", "userInfo"]),
  },
};
</script>
