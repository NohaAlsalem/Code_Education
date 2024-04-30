<template>
  <div>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <div class="navbar-brand">
          <img src="@/assets/images/logoo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
          <codeEdu></codeEdu>
        </div>
        <font-awesome-icon icon="fa-solid fa-user" id="toggleDrawerIcon" class="profile-icon" @click="toggleDrawer" />
      </div>
    </nav>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"
      :class="{ 'show': isDrawerOpen }">
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
        <button type="button" class="btn-close text-reset" @click="closeDrawer" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        ...
      </div>
    </div>
  </div>
</template>

<script>
import codeEdu from '@/components/codeEdu.vue';

export default {
  components: {
    codeEdu
  },
  data() {
    return {
      isDrawerOpen: false
    };
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    closeDrawer() {
      this.isDrawerOpen = false;
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.profile-icon {
cursor: pointer;
}
.svg-icon {
  width: 24px;
  height: 24px;
  fill: var(--GreenColor);
}
.offcanvas{
  background: var(--WhiteColor);
}
</style>