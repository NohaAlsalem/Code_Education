<template>
    <div>
      <div>
  <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <div class="d-flex">
                    <img src="@/assets/images/logoo.png" alt="Logo" width="40" height="40"
                        class="d-inline-block align-text-top ps-0 ms-0">
                        <codeEdu class="mt-1"></codeEdu>
                </div>
  </div>
  
  </nav></div>
<!-- <TopBar></TopBar> -->

<div class="landing text-center justify-content-cnter align-items-center">
    <img  src="@/assets/images/logoo.png" alt="Logo"  class="d-inline-block align-text-top">
    <div>
    <h2 class="code d-inline pe-2 ">Code</h2>
    <h2 class="edu d-inline">Education</h2>
</div>

<div class="spinner-border text-success" role="status" style="color: var(--GreenColor);">
  <span class="visually-hidden" style="color: var(--GreenColor);">Loading...</span>
</div>
</div>
    </div>
</template>

<script>
import TopBar from'@/views/Adminp/component/TopBar.vue'
import codeEdu from '@/views/Adminp/component/codeEdu.vue'
export default{
    components:{
        TopBar,
        codeEdu
    },
    created(){
      setTimeout( () => this.$router.push({ path: '/login'}), 2000);

    }

}

</script>

<style scoped>

.landing {
/* background-color: var(); */
min-height: calc(100vh-72px);
}
.code{
  color: var(--GreenColor);
}
.edu{
  color: var(--GreenOpacity);
}
</style>