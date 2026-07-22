<template>
  <div class="resItem">
    <span
      class="resItem__tagBadge badge rounded-pill"
      v-if="state"
      :class="{
        'bg-danger': state == '熱門',
        'bg-warning': state == '新品',
        'bg-primary': state == '促銷',
      }"
      >{{ state }}</span
    >
    <span
      class="resItem__veganBadge badge rounded-pill bg-success"
      v-if="vegan"
    >
      素食</span
    >
    <router-link :to="{ name: 'Products' }" class="d-flex flex-column">
      <img
        class="resItem__image img-fluid shadow-sm"
        :src="imgUrl"
        alt="ReataurantImage"
      />
      <div class="resItem__textGroup shadow-sm">
        <h4 class="resItem__textTitle">{{ name }}</h4>
        <p class="resItem__textContent m-0">{{ tag }}</p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    tag: String,
    vegan: { type: Boolean, default: false },
    state: {
      type: String,
      default: "",
    },
    imgUrl: String,
  },
};
</script>
<style lang="scss">
.resItem {
  position: relative;
}
.resItem__tagBadge {
  position: absolute;
  top: 10px;
  left: 10px;
}
.resItem__veganBadge {
  position: absolute;
  top: 10px;
  right: 10px;
}
.resItem__image {
  margin-bottom: 10px;
  border-radius: 10px 10px 0 0;
  margin: 0;

  max-height: 90px; //不定max-height的話會無法統一所有商品img高度
  object-fit: cover; //裁切img避免形變
}
.resItem__textGroup {
  border-radius: 0 0 10px 10px;
  background-color: $light;
  padding: 15px;
  color: $primary;
}
.resItem__textTitle {
  font-size: 20px;
  font-weight: bold;
}
.resItem a:hover .resItem__textGroup {
  //當父元素 hover → 改子元素樣式
  background-color: $primary;
  color: $light;
}
</style>
