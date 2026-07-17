<template>
  <div
    class="w-100 d-flex flex-column align-items-center"
    style="max-width: 767px"
  >
    <div
      class="d-flex align-items-center w-100 p-3 shadow-sm"
      style="background-color: #f9ecd4; border-radius: 20px 20px 0 0"
    >
      <img
        class="img-fluid"
        style="height: 80px; width: 80px; border-radius: 100%"
        src="https://images.unsplash.com/photo-1783949247747-210d1403da8a?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div class="ms-3">
        <h5>林同學</h5>
        <p class="m-0">學號 B11302045</p>
      </div>
    </div>
    <ul
      class="memberLinksGroup w-100 shadow-sm"
      style="border-radius: 0 0 20px 20px"
    >
      <li>
        <a class="memberLinksGroup__link" href="">
          <i class="memberLinksGroup__link__titleIcon bi bi-person-circle"></i>
          <div class="ms-3">
            <h5>基本資料管理</h5>
            <p class="m-0">姓名、電話、預設取餐地點</p>
          </div>
          <i
            class="memberLinksGroup__link__arrowIcon translate-middle bi bi-chevron-right"
          >
          </i>
        </a>
      </li>
      <li>
        <a class="memberLinksGroup__link" href="">
          <i class="memberLinksGroup__link__titleIcon bi bi-list"></i>
          <div class="ms-3">
            <h5>我的訂單</h5>
            <p class="m-0">查看訂單狀態與歷史紀錄</p>
          </div>
          <i
            class="memberLinksGroup__link__arrowIcon translate-middle bi bi-chevron-right"
          >
          </i>
        </a>
      </li>
      <li>
        <a
          class="memberLinksGroup__link"
          style="border-radius: 0 0 20px 20px"
          href=""
        >
          <i class="memberLinksGroup__link__titleIcon bi bi-suit-heart"></i>
          <div class="ms-3">
            <h5>追蹤我們</h5>
            <p class="m-0">校園點餐官方FB、Line、IG</p>
          </div>
          <i
            class="memberLinksGroup__link__arrowIcon translate-middle bi bi-chevron-right"
          >
          </i>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.memberLinksGroup__link {
  display: flex;
  align-items: center;

  position: relative;
  padding: 20px;

  color: $primary;
  background-color: $light;
  border-bottom: 1px solid $secondary;
}
.memberLinksGroup__link:hover {
  color: $light;
  background-color: $primary;
}
.memberLinksGroup__link__titleIcon {
  font-size: 36px;
}
.memberLinksGroup__link__arrowIcon {
  position: absolute;
  top: 50%;
  right: 10px;
}
</style>
