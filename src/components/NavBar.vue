<template>
  <div>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <div>
          <img
            src="@/assets/images/logoo.png"
            alt="Logo"
            width="30"
            height="30"
          />
          <codeEdu></codeEdu>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <router-link
              to="/problems"
              style="text-decoration: none; color: inherit"
            >
              <li class="nav-item">
                <h5 class="nav-link p-2 p-lg-3 active" aria-current="page">
                  Problems
                </h5>
              </li>
            </router-link>

            <router-link
              to="/classes"
              style="text-decoration: none; color: inherit"
            >
              <li class="nav-item">
                <h5 class="nav-link p-2 p-lg-3">Classes</h5>
              </li>
            </router-link>
          </ul>
          <font-awesome-icon
            icon="fa-solid fa-user"
            id="toggleDrawerIcon"
            class="profile-icon"
            @click="toggleDrawer"
          />
        </div>
      </div>
    </nav>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
      :class="{ show: isDrawerOpen }"
    >
      <div class="offcanvas-header">
        <button
          type="button"
          class="btn-close text-reset"
          @click="closeDrawer"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <div class="container">
          <div class="row">
            <div>
              <div class="profile-card">
                <div class="profile-details">
                  <div class="d-grid gap-2">
                    <font-awesome-icon
                      icon="fa-solid fa-user"
                      id="toggleDrawerIcon"
                      class="profile-icon"
                    />
                    <label>Name:</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="loujain"
                      readonly
                    />
                    <label>Email address:</label>
                    <input
                      class="form-control custom-input"
                      type="text"
                      placeholder="lolo@gmail.com"
                      readonly
                    />

                    <button
                      type="button"
                      class="btn btn-primary btn-sm btn-auto"
                      style="white-space: nowrap; background: var(--GreenColor)"
                      data-bs-toggle="modal"
                      data-bs-target="#passwordModal"
                    >
                      Change password
                    </button>

                    <button
                      type="button"
                      class="btn btn-secondary btn-sm btn-block"
                      style="background: var(--GreenColor)"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="passwordModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="passwordModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body" style="background-color: var(--WhiteColor)">
          <div class="form-group">
            <label for="oldPassword">Old Password:</label>
            <input
              id="oldPassword"
              class="form-control"
              type="password"
              placeholder="Enter your old password"
            />
          </div>
          <div class="form-group">
            <label for="newPassword">New Password:</label>
            <input
              id="newPassword"
              class="form-control"
              type="password"
              placeholder="Enter your new password"
            />
          </div>
        </div>
        <div class="modal-footer" style="background-color: var(--WhiteColor)">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn"
            style="background: var(--GreenColor); color: white"
          >
            Change
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import codeEdu from "@/components/codeEdu.vue";
export default {
  components: {
    codeEdu,
  },
  data() {
    return {
      isDrawerOpen: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    closeDrawer() {
      this.isDrawerOpen = false;
    },
  },
};
</script>

<style>
:root {
  --WhiteColor: #faf3dd;
  --darkwhite: #c8d5b9;
  --LightGreen: #8fc0a9;
  --GreenOpacity: #68b0ab;
  --GreenColor: #4a7c59;
}
.form-control.custom-input {
  max-width: 100%;
}
.form-control {
  max-width: 100%;
}
.navbar {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.profile-card .profile-icon {
  font-size: 72px;
}

.profile-icon {
  cursor: pointer;
}

.nav-link {
  color: var(--GreenColor);
  font-size: 1.25rem;

  /* padding: 1rem; */
  margin-bottom: 2;
}

.offcanvas.offcanvas-end {
  background: var(--WhiteColor);
}

.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:hover {
  color: #8fc0a9;
}

.navbar .profile {
  border-left: 1px solid var(--GreenColor);
}

.navbar .profile .svg {
  color: var(--GreenColor);
}

.navbar .navbar-toggler {
  color: white;
  font-size: 25px;
  border-color: white;
}

.navbar .navbar-toggler:focus,
.navbar .navbar-toggler:hover {
  color: var(--LightGreen);
  box-shadow: none;
}

.navbar .navbar-toggler[aria-expanded="true"] {
  border-color: var(--GreenColor);
}
</style>
