<template>
  <form class="inputGroup searchArea">
    <input type="text" class="searchInput" placeholder="請輸入餐廳或菜品名稱" />
    <a href="" class="searchBtn translate-middle">
      <i class="bi bi-search"></i>
    </a>
  </form>

  <div class="inputGroup filterArea">
    <select class="filterInput" name="foodType" id="foodType">
      <option class="filterInput__option" value="all">全部</option>
      <option class="filterInput__option" value="rice">飯食</option>
      <option class="filterInput__option" value="noodles">麵食</option>
      <option class="filterInput__option" value="boxedMeal">便當</option>
      <option class="filterInput__option" value="dessert">點心</option>
      <option class="filterInput__option" value="drinks">飲料</option>
    </select>
    <i class="filterInput__dropdown translate-middle bi bi-chevron-down"></i>
  </div>
  <div class="container p-0" style="max-width: 767px">
    <div class="row row-cols-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="res-item">
          <span class="res-item__badge badge rounded-pill bg-danger">熱門</span>
          <router-link :to="{ name: 'Products' }" class="d-flex flex-column">
            <img
              class="res-item__image img-fluid shadow-sm"
              src="https://images.unsplash.com/photo-1783542784656-834b97b3954a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="res-item__textGroup shadow-sm">
              <h4 class="res-item__textTitle">活力早餐</h4>
              <p class="res-item__textContent m-0">早餐</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="col">
        <div class="res-item">
          <span class="res-item__badge badge rounded-pill bg-success"
            >新品</span
          >
          <a href="" class="d-flex flex-column">
            <img
              class="res-item__image img-fluid"
              src="https://images.unsplash.com/photo-1783542784656-834b97b3954a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="res-item__textGroup">
              <h4 class="res-item__textTitle">活力早餐</h4>
              <p class="res-item__textContent m-0">早餐</p>
            </div>
          </a>
        </div>
      </div>
      <div class="col">
        <div class="res-item">
          <span class="res-item__badge badge rounded-pill bg-primary"
            >促銷</span
          >
          <a href="" class="d-flex flex-column">
            <img
              class="res-item__image img-fluid"
              src="https://images.unsplash.com/photo-1783542784656-834b97b3954a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="res-item__textGroup">
              <h4 class="res-item__textTitle">活力早餐</h4>
              <p class="res-item__textContent m-0">早餐</p>
            </div>
          </a>
        </div>
      </div>
      <div class="col">
        <div class="res-item">
          <a href="" class="d-flex flex-column">
            <img
              class="res-item__image img-fluid"
              src="https://images.unsplash.com/photo-1783542784656-834b97b3954a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="res-item__textGroup">
              <h4 class="res-item__textTitle">活力早餐</h4>
              <p class="res-item__textContent m-0">早餐</p>
            </div>
          </a>
        </div>
      </div>
      <div class="col">
        <div class="res-item">
          <a href="" class="d-flex flex-column">
            <img
              class="res-item__image img-fluid"
              src="https://images.unsplash.com/photo-1783542784656-834b97b3954a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="res-item__textGroup">
              <h4 class="res-item__textTitle">活力早餐</h4>
              <p class="res-item__textContent m-0">早餐</p>
            </div>
          </a>
        </div>
      </div>
      <div class="col">
        <div class="res-item">
          <a href="" class="d-flex flex-column">
            <img
              class="res-item__image img-fluid"
              src="https://images.unsplash.com/photo-1783542784656-834b97b3954a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div class="res-item__textGroup">
              <h4 class="res-item__textTitle">活力早餐</h4>
              <p class="res-item__textContent m-0">早餐</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
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

//restaurant item
.res-item {
  position: relative;
}
.res-item__badge {
  position: absolute; //定位badge
  top: 10px;
  left: 10px;
}
.res-item__image {
  margin-bottom: 10px;
  border-radius: 10px 10px 0 0;
  margin: 0;

  max-height: 90px; //不定max-height的話會無法統一所有商品img高度
  object-fit: cover; //裁切img避免形變
}
.res-item__textGroup {
  border-radius: 0 0 10px 10px;
  background-color: $light;
  padding: 15px;
  color: $primary;
}
.res-item__textTitle {
  font-size: 20px;
  font-weight: bold;
}
.res-item a:hover .res-item__textGroup {
  //當父元素 hover → 改子元素樣式
  background-color: $primary;
  color: $light;
}
</style>
