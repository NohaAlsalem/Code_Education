<template>
  <div>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid d-flex">
        <div class="navbar-brand d-flex">
          <img
            src="../assets/images/logoo.png"
            alt="Logo"
            width="40"
            height="40"
            class="d-inline-block align-text-top"
          />
          <h4 class="code d-inline pe-2">Code</h4>
          <h4 class="edu d-inline">Education</h4>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import codeEdu from "@/components/codeEdu.vue";
export default {
  components: {
    codeEdu,
  },
};
</script>

<style scoped>
.navbar {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.container-fluid {
  /* justify-content: center; */
  text-align: center;
}


.code {
  color: var(--GreenColor);
  position: relative;
  top: 5px;
}

.edu {
  color: var(--GreenOpacity);
  position: relative;
  top: 5px;
}
</style>
