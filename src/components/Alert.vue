<template>
  <div class="alert-container">
    <div
      v-if="message"
      :class="[typeClass]"
      class="alert-dismissible fade show"
      role="alert"
    >
      {{ message }}
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="clearMessage"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type", "message"],
  data() {
    return {
      typeClass: "",
    };
  },
  watch: {
    type(newVal) {
      this.typeClass =
        newVal === "success" ? "alert alert-success" : "alert alert-danger";
    },
  },
  methods: {
    clearMessage() {
      this.$emit("clear");
    },
  },
};
</script>

<style scoped>
.alert-container {
  width: 80%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-content: end;
  margin: auto;
  bottom: 0;
  padding-left: 20px;
  /* right: -20px; */
  /* left: 20px; */
  /* margin-right: 50%;
  margin-left: 23%; */
  z-index: 9999;
}
</style>
