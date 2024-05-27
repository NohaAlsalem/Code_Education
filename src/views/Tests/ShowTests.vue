<template>
  <NavBar></NavBar>
  <!-- <SubjectAndClass></SubjectAndClass> -->
  <div
    class="container text-center d-flex justify-content-center col-md-12 screen"
  >
    <table class="table table-striped ms-4 mt-5">
      <thead>
        <tr class="colored-header">
          <th scope="col">Test name</th>
          <th scope="col">Problem name</th>
          <th scope="col">Create date</th>
          <th scope="col">Operation</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(test, index) in tests" :key="index++">
          <td>{{ index }}.{{ test.name }}</td>
          <td>{{ test.problem_name }}</td>
          <td>{{ formatDate(test.date) }}</td>
          <td>
            <i
              class="fas fa-play me-2 text-success"
              v-b-tooltip.hover
              title="Start"
              data-bs-toggle="modal"
              data-bs-target="#takeAttendance"
              ref="takeAttendanceModal"
              @click="startAttendance(test.id)"
            ></i>

            <i
              class="fas fa-trash-alt text-danger"
              v-b-tooltip.hover
              title="Delete"
              @click="confirmDelete(test.id)"
              data-bs-toggle="modal"
              data-bs-target="#confirmDeleteModal"
            ></i>
            <!-- <button
              type="button"
              class="btn btn-success me-2"
              data-bs-toggle="modal"
              data-bs-target="#takeAttendance"
              ref="takeAttendanceModal"
              @click="startAttendance(test.id)"
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
            <button type="button" class="btn btn-warning">End</button> -->
          </td>
          <td>
            <router-link
              class="mt-1"
              :to="{ name: 'testdetails', params: { id: test.id } }"
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
                <th scope="col">Presence</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(student, index) in students" :key="index">
                <td scope="row">{{ student.student_id }}</td>
                <td>{{ student.student_name }}</td>
                <td>
                  <div>
                    <input
                      class="form-check-input custom-checkbox"
                      type="checkbox"
                      :id="'checkboxNoLabel_' + student.student_id"
                      v-model="student.checked"
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
          <button
            type="button"
            class="btn btn-success me-2"
            @click="saveAttendance()"
          >
            Save
          </button>
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
      students: [],
      selectedTestId: null,
    };
  },
  mounted() {
    this.getTests();
    this.getStudentsInClass();
  },
  methods: {
    startAttendance(testId) {
      this.selectedTestId = testId; // Set the selected test ID
    },
    getStudentsInClass() {
      const token = localStorage.getItem("token");
      console.log("this is from students " + token);
      axios
        .get(BASE_URL + "categories/" + this.$route.params.id + "/students", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("this is studnets");
          this.students = response.data.data.map((student) => {
            return {
              ...student,
              checked: false, // Add a checked property
            };
          });
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
    closeAttendanceModal() {
      // Close the password modal using vanilla JavaScript
      const modal = document.getElementById("takeAttendance");
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      modal.setAttribute("style", "display: none");
      const modalBackdrop = document.querySelector(".modal-backdrop");
      modalBackdrop.parentNode.removeChild(modalBackdrop);
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
    saveAttendance() {
      const selectedStudents = this.students
        .filter((student) => student.checked)
        .map((student) => student.student_id);
      // selectedStudents now contains the IDs of checked students

      // Make API POST request here, sending selectedStudents as form data
      const formData = new FormData();
      selectedStudents.forEach((studentId) => {
        formData.append("students[]", studentId);
      });

      // Example of POST request
      const token = localStorage.getItem("token");
      axios
        .post(BASE_URL + "assessment/active/" + this.selectedTestId, formData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response.data);
          this.closeAttendanceModal();
          this.$router.push({
            name: "testdetails",
            params: { id: this.selectedTestId },
          });

          this.selectedStudents = [];
          this.students = this.students.map((student) => {
            return {
              ...student,
              checked: false, // Add a checked property
            };
          });
        })
        .catch((error) => {
          console.log(error.message);
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
  background: var(--MainColor);
  color: white;
}
.screen {
  margin-top: 8%;
}
.table thead {
  margin-bottom: 2px;
}
.custom-checkbox {
  border: 1px solid var(--MainColor);
  padding: 4;
}
</style>
