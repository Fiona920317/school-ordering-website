<template>
  <div class="mb-5 ms-3 me-3 w-100" style="max-width: 767px">
    <h2 class="newsTitle mb-4">最新消息</h2>
    <div class="newsListBackground">
      <ul class="newsList">
        <li>
          <a class="newsList--textTitle" href=""
            >本周新增3間餐廳，校內點餐更方便!</a
          >
        </li>
        <li>
          <a class="newsList--textTitle" href="">9/30前首單滿NT$80折NT$10。</a>
        </li>
        <li>
          <a class="newsList--textTitle" href=""
            >中午尖峰時段請提前20分鐘下單，取餐更順暢。</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.newsTitle {
  color: $primary;
  font-weight: bold;
}
.newsListBackground {
  width: 100%;
  background-color: $light;
  padding: 20px;
  border-radius: 20px;
}
.newsList {
  list-style: disc;
  padding-left: 30px;
  line-height: 2;

  margin: 0;
}
</style>
