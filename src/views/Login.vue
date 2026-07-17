<template>
  <div class="loginBackground mb-5">
    <h2 class="loginTitle">登入/註冊</h2>
    <div class="loginContent shadow-sm">
      <p class="loginContent__text">
        使用LINE帳號登入，<br />即可同步你的訂單和取餐資訊。<br /><span
          class="fw-bold"
          >首次登入將自動為你建立會員。</span
        >
      </p>
      <button class="loginContent__loginBtn">
        <i class="bi bi-line me-2"></i>使用Line登入
      </button>
      <p class="loginContent__text">
        登入即表示你同意我們的<span class="fw-bold text-decoration-underline"
          ><a href="">使用者條款</a></span
        >與<span class="fw-bold text-decoration-underline"
          ><a href="">隱私權政策</a></span
        >。
      </p>
    </div>
  </div>
  <Footer></Footer>
</template>
<script>
import Footer from "../components/Footer.vue";
export default {
  components: { Footer },
};
</script>
<style lang="scss">
.loginBackground {
  text-align: center;
  color: $primary;
}
.loginContent {
  background-color: $light;
  padding: 30px;
  border-radius: 20px;

  margin-bottom: 0;
}
.loginContent__text {
  font-size: 18px;
}
.loginContent__loginBtn {
  display: inline;
  border: none;
  border-radius: 10px;
  padding: 10px 30px;
  background-color: $LINE;
  color: white;
  font-size: 20px;

  margin-bottom: 20px;
}
.loginContent__loginBtn:hover {
  background-color: $LINE--hover;
}
</style>
