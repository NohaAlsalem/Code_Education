<template>
  <div>

    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <div class="d-flex">
                    <img src="@/assets/images/logoo.png" alt="Logo" width="40" height="40"
                        class="d-inline-block align-text-top ps-0 ms-0">
                        <codeEdu class="mt-1"></codeEdu>
                </div>
        <!-- <div class="navbar-brand">
          <div class="d-flex">
            <img src="@/assets/images/logo.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-top">
            <codeEdu></codeEdu>
          </div>
        </div> -->

        <!-- <router-link to="/profile" style="text-decoration: none; color: inherit;">
          <font-awesome-icon icon="fa-solid fa-user" class="i" />
        </router-link> -->
      </div>
    </nav>
  </div>
</template>

<script>
import codeEdu from './codeEdu.vue';
export default {
  components: {
    codeEdu
  },

}

</script>

<style scoped>
.navbar {
  background-color: white;
  padding: 0;
  /* background-color: var(--WhiteColor); */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.svg-icon {
  width: 24px;
  /* Adjust the size as needed */
  height: 24px;
  /* Adjust the size as needed */
  fill: var(--GreenColor);
  /* This will inherit the color from the parent element */
}

.i {

  color: var(--GreenColor);
}
</style>