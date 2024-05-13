<template>
  <NavBar></NavBar>
  <!-- <SubjectAndClass></SubjectAndClass> -->
  <div class="container text-center d-flex justify-content-center col-md-12">
    <table class="table ms-4 mt-5">
      <thead>
        <tr class="colored-header">
          <th scope="col">#</th>
          <th scope="col">Test name</th>
          <th scope="col">Problem name</th>
          <th scope="col">Create date</th>
          <th scope="col">Operation</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(test, index) in tests" :key="index++">
          <td scope="row">{{ index }}</td>
          <td>{{ test.name }}</td>
          <td>{{ test.problem_name }}</td>
          <td>{{ formatDate(test.date) }}</td>
          <td class="d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-success me-2"
              data-bs-toggle="modal"
              data-bs-target="#takeAttendance"
            >
              Start
            </button>
            <button
              @click="confirmDelete(test.id)"
              type="button"
              class="btn btn-danger me-2"
              data-bs-toggle="modal"
              data-bs-target="#confirmDeleteModal"
            >
              Delete
            </button>
            <button type="button" class="btn btn-warning">End</button>
          </td>
          <td>
            <router-link
              class="mt-1"
              :to="{ name: 'testdetails', params: { id: 1 } }"
              style="text-decoration: none"
            >
              Show details
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div
    class="modal fade"
    id="takeAttendance"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLongTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body container text-center col-md-12 mt-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Presence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <div>
                    <input
                      class="form-check-input custom-checkbox"
                      type="checkbox"
                      id="checkboxNoLabel"
                      value=""
                      aria-label="..."
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  <div>
                    <input
                      class="form-check-input custom-checkbox"
                      type="checkbox"
                      id="checkboxNoLabel"
                      value=""
                      aria-label="..."
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>
                  <div>
                    <input
                      class="form-check-input custom-checkbox"
                      type="checkbox"
                      id="checkboxNoLabel"
                      value=""
                      aria-label="..."
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-success me-2">Save</button>
        </div>
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
            @click="deleteTest(confirmId)"
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
import SubjectAndClass from "../../components/SubjectAndClass.vue";
import NavBar from "../../components/NavBar.vue";
import axios from "axios";
import { BASE_URL } from "@/assets/config";
import Alert from "../../components/Alert.vue";
export default {
  components: { SubjectAndClass, NavBar, Alert },
  props: ["id"],
  data() {
    return {
      tests: [],
      confirmId: null,
      successMessage: "",
      errorMessage: "",
      alertType: "",
      alertMessage: "",
    };
  },
  mounted() {
    this.getTests();
    this.getStudentsInClass();
  },
  methods: {
    getStudentsInClass() {
      const token = localStorage.getItem("token");
      console.log("this is from students " + token);
      axios
        .get(BASE_URL + "categories/" + this.$route.params.id + "/students", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("this is studnets");
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
          // this.errMessage = "error retrieving data";
        });
    },
    confirmDelete(id) {
      this.confirmId = id;
    },
    deleteTest(id) {
      const token = localStorage.getItem("token");
      console.log(token);
      axios
        .delete(BASE_URL + "assessment/" + id, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.successMessage = response.data.message;
          this.alertType = "success";
          this.alertMessage = response.data.message;
          this.getTests();
          setTimeout(() => {
            this.clearAlert();
          }, 1000);
        })
        .catch((error) => {
          this.errorMessage = "Error deleting test: " + error.message;
          this.alertType = "error";
          this.alertMessage = "Error deleting test: " + error.message;
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
    formatDate(dateString) {
      const date = new Date(dateString);
      const formattedDate = date.toISOString().split("T")[0];
      return formattedDate;
    },
    getTests() {
      const token = localStorage.getItem("token");
      axios
        .get(BASE_URL + "assessment/" + this.$route.params.id, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.tests = response.data;
          console.log(this.tests);
        })
        .catch((error) => {
          console.log(error);
          this.errMessage = "error retrieving data";
        });
    },
  },
};
</script>

<style scoped>
.modal-footer {
  border: none;
}
.table thead th {
  background: var(--GreenColor);
  color: white;
}
.table thead {
  margin-bottom: 2px;
}
</style>
