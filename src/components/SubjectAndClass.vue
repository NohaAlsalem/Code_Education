<template>
  <div class="bk position-relative text-center justify-content-center">
    <div class="d-flex flex-column align-items-center">
      <div class="image">
        <img
          class="img-fluid mt-1"
          src="../assets/images/logoo.png"
          alt="Logo"
        />
      </div>
      <div class="subject">
        <h1>
          <span class="first">Subject </span
          ><span class="second"> {{ class_subject }}</span>
        </h1>
        <h3>
          <span class="first">Class </span
          ><span class="second"> {{ class_name }}</span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["class_name", "class_subject"],
};
</script>

<style>
.bk {
  background: var(--GrayOpactiyColor);
  height: 70vh; /* Adjust the height as needed */
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.first {
  color: var(--GreenColor);
}
.second {
  color: var(--GreenOpacity);
}
.image {
  height: 200px;
  width: 200px;
}
.btn-custom{

}
</style>
