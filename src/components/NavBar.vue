<template>
  <div>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <div class="d-flex">
          <img
            src="../assets/images/logoo.png"
            alt="Logo"
            width="40"
            height="40"
            class="d-inline-block align-text-top ps-0 ms-0"
          />
          <codeEdu class="mt-1"></codeEdu>
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
          <ul class="navbar-nav me-auto mb-0 mb-lg-0 mt-2">
            <router-link
              to="/problems"
              style="text-decoration: none; color: inherit"
            >
              <li class="nav-item">
                <h5
                  class="nav-link p-2 p-lg-3"
                  aria-current="page"
                  :class="{ active: $route.path === '/problems' }"
                >
                  My problems
                </h5>
                <!-- <a class="nav-link active" aria-current="page" href="#">Problems</a> -->
              </li>
            </router-link>

            <router-link
              to="/classes"
              style="text-decoration: none; color: inherit"
            >
              <li class="nav-item">
                <h5
                  class="nav-link p-2 p-lg-3"
                  :class="{
                    active:
                      $route.path === '/classes' ||
                      $route.path === '/showtests' ||
                      /^\/classdetails\//.test($route.path),
                  }"
                >
                  Classes
                </h5>
              </li>
            </router-link>
            <router-link
              to="/createproblem"
              style="text-decoration: none; color: inherit"
            >
              <li class="nav-item">
                <h5
                  class="nav-link p-2 p-lg-3"
                  :class="{
                    active: $route.path === '/createproblem',
                  }"
                >
                  Create problem
                </h5>
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
      <div class="offcanvas-header row">
        <div class="container d-flex justify-content-end">
          <font-awesome-icon
            icon="fa-solid fa-pen"
            class="edit-icon"
            @click="toggleEditMode"
          ></font-awesome-icon>
        </div>
      </div>
      <div
        class="offcanvas-body"
        @click="closeDrawer($event)"
        style="cursor: pointer"
      >
        <div class="container">
          <div class="row">
            <div>
              <div class="profile-card">
                <div class="profile-details">
                  <div class="d-grid gap-2">
                    <font-awesome-icon
                      @click.stop
                      icon="fa-solid fa-user"
                      id="toggleDrawerIcon"
                      class="profile-icon"
                    />
                    <label @click.stop>Name:</label>
                    <input
                      @click.stop
                      class="form-control"
                      type="text"
                      placeholder="loujain"
                      :readonly="!editMode"
                    />
                    <label @click.stop>Email address:</label>
                    <input
                      @click.stop
                      class="form-control custom-input"
                      type="text"
                      placeholder="lolo@gmail.com"
                      :readonly="!editMode"
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
                      v-if="editMode"
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
      editMode: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    closeDrawer(event) {
      event.stopPropagation();
      this.isDrawerOpen = false;
    },
    toggleEditMode() {
      this.editMode = !this.editMode;
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
  --borderColor: #707070;
}
.i {
  color: var(--GreenColor);
}
.navbar {
  /* background-color: var(--WhiteColor); */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.nav-link {
  color: var(--GreenColor);
  font-size: 1.25rem;

  /* padding: 1rem; */
  margin-bottom: 2;
}

.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:hover {
  color: #8fc0a9;
}
.navbar .navbar-nav .nav-link.active {
  color: var(--GreenColor);
  font-weight: bold;
  text-underline-position: auto;
}
.navbar .profile {
  border-left: 1px solid var(--GreenColor);
}
.offcanvas.offcanvas-end {
  background: var(--WhiteColor);
}
.edit-icon {
  color: var(--GreenColor);
}
.navbar .profile .svg {
  color: var(--GreenColor);
}
.profile-card .profile-icon {
  font-size: 72px;
}
.profile-icon {
  cursor: pointer;
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
