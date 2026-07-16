<template>
  <Navbar></Navbar>
  <div class="main-content">
    <router-view />
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
<style lang="scss">
.main-content {
  min-height: 100vh;
  box-sizing: border-box;
  background-color: $secondary;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 30px 90px;
}
</style>
