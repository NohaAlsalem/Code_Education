<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <div class="d-flex">
          <img
            src="../assets/images/logoo.png"
            alt="Logo"
            width="40"
            height="40"
            class="d-inline-block align-text-top ps-0 ms-0"
          />
          <codeEdu class="mt-1 ms-2"></codeEdu>
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
                      $route.path.startsWith('/showtests') ||
                      /^\/classdetails\//.test($route.path)||
                      $route.path.startsWith('/problemsToaddTotest')||
                      $route.path.startsWith('/takeAttendance')
                      
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

            <div class="dropdown">
              <button
                class="nav-link p-2 p-lg-3 btn dropdown-toggle"
                :class="{ active: $route.path.startsWith('/classesOfSubject') }"
                type="button"
                id="dropdownSubjects"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ selectedSubject ? selectedSubject.name : "Exams" }}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownSubjects">
                <li v-for="subject in subjects" :key="subject.id">
                  <router-link
                    :to="{
                      name: 'classesOfSubject',
                      params: {
                        subjectId: subject.id,
                        subjectName: subject.name,
                      },
                    }"
                    class="dropdown-item"
                    @click="selectSubject(subject)"
                    style="text-decoration: none; color: inherit"
                  >
                    {{ subject.name }}
                  </router-link>
                </li>
              </ul>
            </div>
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
                      v-model="info.name"
                    />
                    <label @click.stop>Email address:</label>
                    <input
                      @click.stop
                      class="form-control custom-input"
                      type="text"
                      placeholder="lolo@gmail.com"
                      :readonly="!editMode"
                      v-model="info.email"
                    />

                    <button
                      type="button"
                      class="btn btn-primary btn-sm btn-auto"
                      style="white-space: nowrap; background: var(--MainColor)"
                      data-bs-toggle="modal"
                      data-bs-target="#passwordModal"
                    >
                      Change password
                    </button>

                    <button
                      v-if="editMode"
                      type="button"
                      class="btn btn-secondary btn-sm btn-block"
                      style="background: var(--MainColor)"
                      @click="edit"
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
              v-model="formData.old_password"
              id="oldPassword"
              class="form-control"
              type="password"
              placeholder="Enter your old password"
            />
          </div>
          <div class="form-group">
            <label for="newPassword">New Password:</label>
            <input
              v-model="formData.new_password"
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
            style="background: var(--MainColor); color: white"
            @click="changePassword"
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
import { BASE_URL } from "@/assets/config";
import axios from "axios";

export default {
  components: { codeEdu },

  data() {
    return {
      subjects: [],
      selectedSubject: null,
      isDrawerOpen: false,
      editMode: false,
      info: {
        name: "",
        email: "",
      },
      errMessage: "",
      formData: {
        old_password: "",
        new_password: "",
      },
    };
  },
  mounted() {
    this.getMyProfile();
    this.fetchSubjects();
  },
  methods: {
    closeDrawer(event) {
      event.stopPropagation();
      this.isDrawerOpen = false;
      this.getMyProfile();
    },
    selectSubject(subject) {
      this.selectedSubject = subject;
      // this.$router.push({
      //   name: "classesOfSubject",
      //   params: { selectedSubject: subject },
      // });
    },
    fetchSubjects() {
      const token = localStorage.getItem("token");
      axios
        .get(`${BASE_URL}subjects`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.subjects = response.data.subjects;
        })
        .catch((error) => {
          this.errMessage = "Error retrieving data";
        });
    },
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    getMyProfile() {
      const token = localStorage.getItem("token");
      axios
        .get(`${BASE_URL}profile/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.info = response.data;
        })
        .catch((error) => {
          this.errMessage = "Error retrieving data";
        });
    },
    changePassword() {
      const token = localStorage.getItem("token");
      axios
        .post(`${BASE_URL}profile/change-password`, this.formData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          this.formData.new_password = "";
          this.formData.old_password = "";
          this.closePasswordModal();
        })
        .catch((error) => {
          this.error = error;
        });
    },
    closePasswordModal() {
      const modal = document.getElementById("passwordModal");
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      modal.setAttribute("style", "display: none");
      const modalBackdrop = document.querySelector(".modal-backdrop");
      modalBackdrop.parentNode.removeChild(modalBackdrop);
    },
  },
};
</script>

<style>
:root {
  --darkwhite: #caa8f5;
  --LightGreen: #592e83;
  --GreenOpacity: #c79682;
  --MainColor: #230c33;
  --PrimaryColor: #007bff;
  --TextColor: #ffffff;
  --GrayColor: #d3d4d4;
  --GrayOpactiyColor: #dddddd;
  --HoverColor: #0056b3;
  --HoverTextColor: #ffffff;
}

.navbar {
  background-color: white;
  position: sticky;
  top: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
}

.nav-link {
  color: var(--MainColor);
  font-size: 1.25rem;
  padding: 0.25rem 0.5rem;
}

.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:hover {
  color: var(--darkwhite);
}

.navbar .navbar-nav .nav-link.active {
  color: var(--MainColor);
  font-weight: bold;
  text-underline-position: auto;
}

.navbar .profile {
  border-left: 1px solid var(--MainColor);
}

.offcanvas.offcanvas-end {
  background: white;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.2);
}

.edit-icon {
  color: var(--MainColor);
}

.navbar .profile .svg {
  color: var(--MainColor);
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
  border-color: var(--MainColor);
}

.dropdown-submenu {
  position: relative;
  color: var(--MainColor);
}

.dropdown-submenu > .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -6px;
  margin-left: 0;
  border-radius: 0.25rem;
  color: var(--MainColor);
  font-weight: bold;
}

/* Additional or overriding styles */
.navbar .dropdown-menu {
  background-color: white;
}

.navbar .dropdown-item {
  color: var(--MainColor);
}

.navbar .dropdown-item:hover {
  background-color: var(--GrayColor);
  color: var(--HoverTextColor);
}

.dropdown-submenu > .dropdown-menu {
  left: 100%;
  top: 0;
  margin-top: -6px;
  margin-left: 0;
  border-radius: 0.25rem;
}

.nav-link.active {
  font-weight: bold;
}
</style>
