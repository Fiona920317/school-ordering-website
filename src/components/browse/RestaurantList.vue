<template>
  <form
    class="inputGroup searchArea"
    @submit.prevent="activeSearchText = searchText"
  >
    <input
      type="text"
      class="searchInput"
      placeholder="請輸入餐廳或菜品名稱"
      v-model="searchText"
    />
    <button type="submit" class="searchBtn translate-middle p-0 m-0 bg-white">
      <i class="bi bi-search"></i>
    </button>
  </form>

  <div class="inputGroup filterArea">
    <select class="filterInput" name="tag" id="tag" v-model="selectedTag">
      <option class="filterInput__option" value="全部">全部</option>
      <option class="filterInput__option" value="飯食">飯食</option>
      <option class="filterInput__option" value="麵食">麵食</option>
      <option class="filterInput__option" value="便當">便當</option>
      <option class="filterInput__option" value="點心">點心</option>
      <option class="filterInput__option" value="飲料">飲料</option>
    </select>
    <i class="filterInput__dropdown translate-middle bi bi-chevron-down"></i>
  </div>
  <div class="container p-0" style="max-width: 767px">
    <div class="row row-cols-2 row-cols-md-3 g-3">
      <div class="col" v-for="resItem in filteredRestaurants" :key="resItem.id">
        <ResItem
          @click="selectRestaurant(resItem)"
          :name="resItem.name"
          :tag="resItem.tag"
          :state="resItem.state"
          :vegan="resItem.vegan"
          :imgUrl="resItem.imgUrl"
        ></ResItem>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <p
        v-if="filteredRestaurants.length == 0"
        class="m-0 fs-2 fw-bold text-primary"
      >
        這邊什麼都沒有QAQ
      </p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "pinia";
import { useBrowseStore } from "../../stores/browseStore.js";
import ResItem from "./ResItem.vue";

export default {
  name: "RestaurantList",
  components: { ResItem },

  data() {
    return {
      searchText: "", //持續同步搜尋框文字
      activeSearchText: "", //等到按下搜尋按鈕時，再和searchText同步
      selectedTag: "全部",
    };
  },
  methods: {
    ...mapActions(useBrowseStore, ["selectRestaurant"]),
  },
  computed: {
    ...mapState(useBrowseStore, ["restaurants", "temp"]),
    filteredRestaurants() {
      let filteredRestaurants = [];
      //tag篩選
      if (this.selectedTag == "全部") {
        filteredRestaurants = this.restaurants;
      } else {
        filteredRestaurants = this.restaurants.filter(
          (resItem) => resItem.tag == this.selectedTag,
        );
      }

      //activeSearchText篩選
      if (this.activeSearchText) {
        filteredRestaurants = filteredRestaurants.filter(
          (resItem) =>
            resItem.name
              .toLowerCase() //toLowerCase()=>讓文字不分大小寫(雖然都是中文就是了)
              .includes(this.activeSearchText.toLowerCase()), //includes()=>只要有部分內容符合即回傳
        );
      }
      return filteredRestaurants;
    },
  },
};
</script>

<style lang="scss">
.inputGroup {
  width: 100%;

  position: relative;
}
.searchInput {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
}
.searchBtn {
  border: none;
  color: black;

  position: absolute;
  top: 50%;
  right: 15px;
}

.filterInput {
  width: 100%;
  padding: 10px;

  border: none;
  border-radius: 10px;
  cursor: pointer;
  appearance: none; /* 隱藏原生樣式 */
}
.filterInput__dropdown {
  position: absolute;
  top: 50%;
  right: 15px;
}
</style>
