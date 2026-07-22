<template>
  <div v-if="isOpen">
    <div class="modal-container translate-middle">
      <div class="modal-header">
        <slot name="header">本周新增</slot>
      </div>
      <div class="modal-body overflow-auto" style="max-height: 200px">
        <slot name="body">我是內文</slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          <div class="submitBtnGroup">
            <button
              @click="$emit('close')"
              class="submitBtnGroup__cancelBtn btn btn-danger"
            >
              取消
            </button>
            <button
              @click="$emit('close')"
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
  emits: ["close"],
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

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1002;
}
//modal-body

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
