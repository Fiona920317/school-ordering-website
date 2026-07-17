<template>
  <div
    class="w-100 d-flex flex-column align-items-center gap-3"
    style="max-width: 767px"
  >
    <ul class="CheckoutList shadow-sm">
      <li>
        <div class="d-flex align-items-center mb-3">
          <i class="bi bi-dot fs-3 text-primary"></i>
          <h4 class="fw-bold m-0">活力早餐</h4>
          <a class="CheckoutList__deleteBtn btn btn-danger ms-auto" href="">
            <i class="bi bi-trash-fill"></i>
          </a>
        </div>

        <div class="d-flex">
          <div>
            <img
              class="img-fluid"
              style="max-height: 90px; border-radius: 10px"
              src="https://images.unsplash.com/photo-1783962211635-ef0af72c7759?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h5 class="mt-2 mb-2">起司蛋餅</h5>
          </div>
          <div class="ms-auto d-flex flex-column justify-content-center">
            <div class="CheckoutList__numBtnGroup ms-auto">
              <a @click.prevent="reduceNum" href=""
                ><i class="bi bi-dash-circle"></i
              ></a>
              3
              <a @click.prevent="productNum++" href=""
                ><i class="bi bi-plus-circle"></i
              ></a>
            </div>
            <p class="m-0 ms-auto pt-3">小計:NT$120</p>
          </div>
        </div>
      </li>
      <li>
        <div class="d-flex align-items-center mb-3">
          <i class="bi bi-dot fs-3 text-primary"></i>
          <h4 class="fw-bold m-0">活力早餐</h4>
          <a class="CheckoutList__deleteBtn btn btn-danger ms-auto" href="">
            <i class="bi bi-trash-fill"></i>
          </a>
        </div>

        <div class="d-flex">
          <div>
            <img
              class="img-fluid"
              style="max-height: 90px; border-radius: 10px"
              src="https://images.unsplash.com/photo-1783961797133-dd0fc5a722ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h5 class="mt-2 mb-2">起司蛋餅</h5>
          </div>
          <div class="ms-auto d-flex flex-column justify-content-center">
            <div class="CheckoutList__numBtnGroup ms-auto">
              <a @click.prevent="reduceNum" href=""
                ><i class="bi bi-dash-circle"></i
              ></a>
              3
              <a @click.prevent="productNum++" href=""
                ><i class="bi bi-plus-circle"></i
              ></a>
            </div>
            <p class="m-0 ms-auto pt-3">小計:NT$120</p>
          </div>
        </div>
      </li>
      <div class="CheckoutList__total">
        <h5>總計</h5>
        <h3 class="fw-bold text-primary">NT$120</h3>
      </div>
    </ul>
    <div class="w-100">
      <h4 class="text-primary fw-bold">取餐資訊</h4>
      <form class="memberInfo shadow-sm">
        <div class="row row-cols-1 row-cols-md-2 g-3">
          <div class="memberInfo-item d-flex flex-column col">
            <label for="">姓名</label>
            <input type="text" />
          </div>
          <div class="memberInfo-item d-flex flex-column col">
            <label for="">學號</label>
            <input type="text" />
          </div>
          <div class="memberInfo-item d-flex flex-column col">
            <label for="">電話</label>
            <input type="text" />
          </div>
          <div class="memberInfo-item d-flex flex-column col">
            <label for="">取餐地點</label>
            <div class="d-flex align-items-center">
              <p class="m-0 me-3">誠心樓二樓</p>
              <select name="" id="" style="cursor: pointer; flex: 1">
                <option value="A">A區(醫科院)</option>
                <option value="B">B區(口腔醫學院、健管院)</option>
                <option value="C">C區(醫學院)</option>
              </select>
            </div>
          </div>
        </div>
      </form>
      <div class="mt-3 w-100 d-flex justify-content-center gap-3">
        <a class="cancenlBtn btn btn-light text-primary" href="">繼續選購</a>
        <a class="submitBtn btn btn-primary" href="">確定送出</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.CheckoutList {
  background-color: $light;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
}
.CheckoutList li {
  border-bottom: 1.5px solid $secondary;
  padding-top: 10px;
}
.CheckoutList__total {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 20px;
}
.CheckoutList__numBtnGroup {
  font-size: 28px;

  display: flex;
  align-items: center;
  gap: 15px;
}
.memberInfo {
  background-color: $light;
  border-radius: 20px;
  padding: 20px;
}
.memberInfo-item label {
  margin-bottom: 5px;
}
.memberInfo-item input,
.memberInfo-item select {
  border: none;
  padding: 10px;
  border-radius: 10px;
}
.cancenlBtn,
.submitBtn {
  font-weight: bold;
  width: 30%;
  padding: 10px 0;
}
</style>
