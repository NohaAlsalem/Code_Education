<template>
  <img class="image" src="../assets/images/bg.webp" />
  <img
    class="position-absolute top-70 start-0"
    src="../assets/images/load.webp"
  />
  <button class="btn btn-custom text-center">
    Sign in
    <svg
      class="arrow-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M4.354 4.354a.5.5 0 0 1 .708 0l5.792 5.792a.5.5 0 0 1 0 .708l-5.792 5.792a.5.5 0 1 1-.708-.708L9.293 8 4.354 3.146a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.image {
  height: 100vh;
  width: 100%;
  position: relative;
}
.btn-custom {
  border: 1px solid var(--GrayColor);
  border-radius: 20px;
  position: absolute;
  /* background: var(--GrayColor); */
  padding: 20px 20px 0 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  top: 40%;
  left: 70%;
  padding: 10px 34px;
  /* background-color: var(--GrayColor); */
  color: var(--TextColor); /* Replace with your desired text color */
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.btn-custom:hover {
  background-color: var(
    --HoverColor
  ); /* Replace with your desired hover color */
  color: var(--HoverTextColor); /* Replace with your desired hover text color */
}

.arrow-icon {
    display: flex;
  justify-content: center;
  align-content: center;
  margin-top:3px;
  margin-left: 7px;
  }
</style>
