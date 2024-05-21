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
                      Difficulty
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">easy</a></li>
                      <li><a class="dropdown-item" href="#">meduim</a></li>
                      <li>
                        <a class="dropdown-item" href="#">hard</a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Separated link</a>
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
                      Tags
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li>
                        <a class="dropdown-item" href="#">Another action</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Separated link</a>
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
                      sort
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li>
                        <a class="dropdown-item" href="#">Another action</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">Separated link</a>
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
                  class="form-control"
                  placeholder="Search questions"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
          </div>
          <div class="col mt-5"></div>
        </div>
      </div>
      <div class="me-5">
        <table class="table">
          <thead>
            <tr class="colored-header">
              <th scope="col">#</th>
              <th scope="col" @click="getMyProblems">Title</th>
              <th scope="col">Difficulty</th>
              <th scope="col">Tags</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="problem in problems" :key="problem.id">
              <th scope="row">
                <router-link
                  :to="{ name: 'problemdetails', params: { id: problem.id } }"
                >
                  {{ problem.id }}
                </router-link>
              </th>
              <td>
                <router-link
                  :to="{ name: 'problemdetails', params: { id: problem.id } }"
                >
                  {{ problem.title }}
                </router-link>
              </td>
              <td>
                <router-link
                  :to="{ name: 'problemdetails', params: { id: problem.id } }"
                >
                  {{ problem.diffculty }}
                </router-link>
              </td>
              <td>
                <button
                  v-for="tag in problem.tags"
                  :key="tag"
                  type="button"
                  class="custom-btn ms-2"
                  style="pointer-events: none"
                >
                  {{ tag.name }}
                </button>
              </td>
              <td>
                <button
                  @click="active(problem.id)"
                  type="button"
                  class="btn btn-success"
                >
                  Active
                </button>
                <button
                  @click="confirmDelete(problem.id)"
                  type="button"
                  class="btn btn-danger ms-3"
                  data-bs-toggle="modal"
                  data-bs-target="#confirmDeleteModal"
                >
                  Delete
                </button>
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
    Alert
  },
  data() {
    return {
      successMessage: "",
      errorMessage: "",
      alertType: "",
      alertMessage: "",
      problems: [],
      confirmId: null,
    };
  },
  mounted() {
    this.getMyProblems();
  },
  methods: {
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
  background: var(--darkwhite);
  border: none;
  color: var(--GreenColor);
}

.input-group .form-control {
  margin-top: 3.5rem;
  background: var(--WhiteColor);
  border: 1px solid var(--LightGreen);
}

.input-group .form-control::placeholder {
  color: var(--LightGreen);
}

.Divider {
  border-top: 1px solid var(--LightGreen) !important;
  /* border-bottom: 1px solid  var(--LightGreen)!important; */
  /* height: 0.5px; */
  margin: 0px 100px;
}

p {
  color: var(--GreenColor);
  margin-bottom: 0;
}

.page-footer .btn {
  border: 1px solid var(--GreenColor);
  color: var(--GreenColor);
  background: var(--LightGreen);
}
</style>
