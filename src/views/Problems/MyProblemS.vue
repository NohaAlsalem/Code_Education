<template>
  <NavBar></NavBar>
  <div>
    <div class="ms-5 mt-5">
      <div class="container-fluid col-md-12">
        <div class="row">
          <div class="container d-flex justify-content-space-between">
            <div class="col">
              <div class="d-flex flex-row ms-5">
                <div class="p-2">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-danger dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      {{
                        selectedDifficulty ? selectedDifficulty : "Difficulty"
                      }}
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          @click="submitDifficulty('Easy')"
                          >Easy</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          @click="submitDifficulty('Medium')"
                          >Medium</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          @click="submitDifficulty('Hard')"
                          >Hard</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" @click="submitDifficulty('')"
                          >None</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="p-2">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-danger dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      {{ selectedTag ? selectedTag : "Tags" }}
                    </button>
                    <ul class="dropdown-menu">
                      <li v-for="tag in tags" :key="tag.id">
                        <a class="dropdown-item" @click="submitTag(tag.name)"
                          >{{ tag.name }}
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" @click="submitTag('')">None</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="p-2">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-danger dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      {{ selectedSort ? selectedSort : "Sort" }}
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" @click="submitSort('AES')"
                          >Aes</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" @click="submitSort('DESC')"
                          >Desc</a
                        >
                      </li>
                      <li>
                        <a class="dropdown-item" @click="submitSort('')"
                          >None</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col me-4">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control search-input"
                  placeholder="Search questions"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  v-model="searchText"
                  @input="onSearchInput"
                />
                <div class="search-icon">
                  <i class="fa fa-search"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-5"></div>
        </div>
      </div>
      <div class="me-5">
        <table class="table table-striped">
          <thead>
            <tr class="colored-header">
              <th scope="col">Title</th>
              <th scope="col">Tag</th>
              <th scope="col">Level</th>
              <th scope="col">Difficulty</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="problem in problems" :key="problem.id">
              <td>
                <router-link
                  class="router-link"
                  :to="{ name: 'problemdetails', params: { id: problem.id } }"
                >
                  {{ problem.id }}. {{ problem.name }}
                </router-link>
              </td>

              <td>
                <span class="badge bg-secondary me-1">
                  {{ problem.tags ? problem.tags.name : "" }}
                </span>
              </td>
              <td>
                {{ problem.level }}
              </td>
              <td
                :class="{
                  coloreasyDiff: problem.diffculty === 'easy',
                  colormediumDiff: problem.diffculty === 'medium',
                  colorhardDiff: problem.diffculty === 'hard',
                }"
              >
                {{ problem.diffculty }}
              </td>
              <td>
                <i
                  @click="active(problem.id)"
                  class="fas fa-check-circle text-success ms-4 me-3"
                  data-bs-toggle="tooltip"
                  title="Active"
                ></i>
                <i
                  @click="confirmDelete(problem.id)"
                  class="fas fa-trash-alt text-danger"
                  data-bs-toggle="tooltip"
                  title="Delete"
                ></i>

                <!-- <button
                  @click="active(problem.id)"
                  type="button"
                  class="btn btn-success btn-customer"
                >
                  Active
                </button> -->
                <!-- <button
                  @click="confirmDelete(problem.id)"
                  type="button"
                  class="btn btn-danger ms-3 btn-customer"
                  data-bs-toggle="modal"
                  data-bs-target="#confirmDeleteModal"
                >
                  Delete
                </button> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />

  <div
    class="modal fade"
    id="confirmDeleteModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="confirmDeleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">Are you sure you want to delete this item?</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            @click="deleteProblem(confirmId)"
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { BASE_URL } from "@/assets/config";
import Pagination from "@/components/Pagination.vue";
import Table from "@/components/Table.vue";
import Alert from "../../components/Alert.vue";
import axios from "axios";
export default {
  components: {
    NavBar,
    Pagination,
    Table,
    Alert,
  },
  data() {
    return {
      selectedSubject: null,
      successMessage: "",
      errorMessage: "",
      alertType: "",
      alertMessage: "",
      problems: [],
      confirmId: null,
      searchText: "",
      selectedTag: "",
      selectedDifficulty: "",
      selectedSort: "",
      tags: [],
      formData: {
        diffculty: this.selectedDifficulty,
        sort: this.selectedSort,
        name: this.searchText,
        tag: this.selectedTag,
      },
    };
  },
  mounted() {
    this.getTags();
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    this.getMyProblems();
  },
  methods: {
    updateSelectedSubject(subject) {
      this.selectedSubject = subject;
    },
    onSearchInput(event) {
      this.searchText = event.target.value;
      this.Filter();
    },
    Filter() {
      const token = localStorage.getItem("token");
      this.formData = {
        diffculty: this.selectedDifficulty,
        sort: this.selectedSort,
        name: this.searchText,
        tag: this.selectedTag,
      };
      axios
        .post(BASE_URL + "problems/bank/filter", this.formData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.problems = response.data.data; // assuming the response data has a 'data' property containing the filtered problems
          console.log("this is filter ");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
          this.error = error;
        });
    },
    submitTag(name) {
      this.selectedTag = name;
      console.log(this.selectedTag);
      this.Filter();
    },
    getTags() {
      const token = localStorage.getItem("token");
      axios
        .get(BASE_URL + "problems/tags", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.tags = response.data;
          console.log(this.tags);
        })
        .catch((error) => {
          console.log(error);
          this.errMessage = "error retrieving data";
        });
    },
    confirmDelete(id) {
      this.confirmId = id;
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
    getMyProblems() {
      const token = localStorage.getItem("token");
      console.log(token);
      console.log(BASE_URL);
      axios
        .get(BASE_URL + "problems/bank", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response.data);
          this.problems = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          this.errMessage = "error retrieving data";
        });
    },
    active(id) {
      const token = localStorage.getItem("token");
      console.log(token);
      console.log(BASE_URL);
      axios
        .get(BASE_URL + "problems/active/" + id, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response.data);
          this.getMyProblems();
          // this.problems = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errMessage = "error not activate";
        });
    },
    submitDifficulty(diff) {
      this.selectedDifficulty = diff;
      this.Filter();
    },
    submitSort(sort) {
      this.selectedSort = sort;
      this.Filter();
    },
    deleteProblem(id) {
      const token = localStorage.getItem("token");
      axios
        .delete(BASE_URL + "problems/" + id, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.successMessage = response.data.message;
          this.alertType = "success";
          this.alertMessage = response.data.message;
          console.log(response.data);
          // Assuming you're just refreshing the list after deletion
          this.getMyProblems();
          setTimeout(() => {
            this.clearAlert();
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
          this.errorMessage = "Error deleting problem: " + error.message;
          this.alertType = "error";
          this.alertMessage = "Error deleting problem: " + error.message;
          this.error = error;
          setTimeout(() => {
            this.clearAlert();
          }, 1000);
        });
    },
    clearAlert() {
      this.alertType = "";
      this.alertMessage = "";
    },
    goToCreateTest(problem) {
      this.$router.push({
        name: "createtest",
        query: {
          problemId: problem.id,
          title: problem.title,
          Language: problem.Language,
          Difficulty: problem.Difficulty,
          Tags: problem.Tags,
        },
      });
    },
  },
};
</script>

<style scoped>
.btn-group .btn {
  margin-top: 3rem;
  background: var(--GrayColor);
  border: none;
  color: var(--MainColor);
}

.input-group .form-control {
  margin-top: 3.5rem;
  background: var(--WhiteColor);
  border: 1px solid var(--LightGreen);
}

.input-group .form-control::placeholder {
  color: var(--LightGreen);
}
.btn-customer {
  border: none;
  background: none;
  color: black;
}
.Divider {
  border-top: 1px solid var(--LightGreen) !important;
  /* border-bottom: 1px solid  var(--LightGreen)!important; */
  /* height: 0.5px; */
  margin: 0px 100px;
}

p {
  color: var(--MainColor);
  margin-bottom: 0;
}

.page-footer .btn {
  border: 1px solid var(--MainColor);
  color: var(--MainColor);
  background: var(--LightGreen);
}
.router-link {
  color: inherit;
  text-decoration: none;
}
.router-link:hover {
  color: var(--darkwhite);
}
.coloreasyDiff {
  color: green;
}
.colormediumDiff {
  color: orange;
}
.colorhardDiff {
  color: red;
}
.input-group {
  position: relative;
}

.search-input {
  padding-left: 40px;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 68%;
  pointer-events: none;
  color: var(--WhiteColor);
}

.search-input::placeholder {
  text-indent: 10px;
}
</style>
