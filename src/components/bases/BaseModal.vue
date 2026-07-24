<template>
  <div v-if="isOpen">
    <div class="modal-container translate-middle">
      <div class="modal-header">
        <slot name="header">本周新增</slot>
      </div>
      <div
        class="modal-body d-flex flex-column align-items-center gap-1 overflow-auto w-100"
        style="max-height: 200px"
      >
        <slot name="body">我是內文</slot>
      </div>
      <div class="modal-footer d-flex flex-column gap-1">
        <slot name="footer">
          <div class="numBtnGroup" v-if="numBtnGroup">
            <a @click.prevent="reduceNum" href="">
              <i class="bi bi-dash-circle fs-2"></i>
            </a>
            {{ productNum }}
            <a @click.prevent="productNum++" href="">
              <i class="bi bi-plus-circle fs-2"></i>
            </a>
          </div>
          <div class="submitBtnGroup">
            <button
              @click="closeModal"
              class="submitBtnGroup__cancelBtn btn btn-danger"
            >
              取消
            </button>
            <button
              @click="closeModal"
              class="submitBtnGroup__confirmBtn btn btn-primary"
            >
              確認
            </button>
          </div>
        </slot>
      </div>
    </div>
    <div class="modal-overlay"></div>
  </div>
</template>
<script>
export default {
  props: {
    isOpen: Boolean,
    numBtnGroup: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close", "productNum"],
  data() {
    return {
      productNum: 1,
    };
  },
  methods: {
    reduceNum() {
      if (this.productNum <= 1) {
        return;
      } else {
        this.productNum--;
      }
    },
    closeModal() {
      this.$emit("productNum", this.productNum);
      this.productNum = 1;
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss">
//modal-container
.modal-container {
  background-color: $light;
  border-radius: 20px;
  padding: 15px;
  min-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1002;
}
//modal-header
.modal-header {
  color: $primary;
}
//modal-body

.numBtnGroup {
  font-size: 24px;

  display: flex;
  align-items: center;
  gap: 30px;
}
.numBtnGroup a:hover {
  color: $secondary;
}
//modal-footer
.submitBtnGroup {
  margin-top: 10px;

  display: flex;
  gap: 10px;
}
.submitBtnGroup__cancelBtn,
.submitBtnGroup__confirmBtn {
  padding: 10px 30px;
  font-weight: bold;
}
//modal-overlay
.modal-overlay {
  background-color: rgba($color: #000000, $alpha: 0.5);
  backdrop-filter: blur(10px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1001;
}
</style>
