<template>
  <div class="container text-center col-md-12 screen">
    <h1 class="page-title">Student Marks Overview</h1>
    <div class="custom-button">
      <button
        type="button"
        class="btn btn-primary btn-sm btn-auto"
        style="white-space: nowrap; background: var(--MainColor)"
        data-bs-toggle="modal"
        data-bs-target="#passwordModal"
      >
        Add Student
      </button>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr class="colored-header">
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">
            Presence ({{
              distributedMark ? distributedMark.mark_of_commings : ""
            }}
            )
            <i
              class="fas fa-edit me-2 icon-custom"
              v-b-tooltip.hover
              title="Start"
              data-bs-toggle="modal"
              data-bs-target="#UpdateModal"
              ref="UpdateModal"
            ></i>
          </th>

          <th scope="col">
            Tests ({{ distributedMark ? distributedMark.mark_of_ratings : "" }})
            <i
              class="fas fa-edit me-2 icon-custom"
              v-b-tooltip.hover
              title="Start"
              data-bs-toggle="modal"
              data-bs-target="#UpdateModal"
              ref="UpdateModal"
            ></i>
          </th>
          <th scope="col">
            Exam mark ({{ distributedMark ? distributedMark.exam_mark : "" }})
          </th>
          <th scope="col">Total mark</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <th scope="row">{{ student.id }}</th>
          <td>{{ student.name }}</td>
          <td>{{ student.attendance_mark }}</td>
          <td>{{ student.assessment_mark }}</td>
          <td>{{ student.exam_mark }}</td>
          <td>{{ student.total }}</td>
        </tr>
      </tbody>
    </table>
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
            <label for="newPassword">Unversity ID:</label>
            <input
              v-model="formData.university_id"
              id="newPassword"
              class="form-control"
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
            @click="AddStudent"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="UpdateModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="UpdateModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body" style="background-color: var(--WhiteColor)">
          <div class="form-group">
            <label for="newPassword">Mark of commings:</label>
            <input
              v-model="formDataUpdate.mark_of_commings"
              id="newPassword"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="newPassword">Mark of ratings:</label>
            <input
              v-model="formDataUpdate.mark_of_ratings"
              id="newPassword"
              class="form-control"
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
            @click="Update"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
  <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />
</template>

<script>
import axios from "axios";
import { BASE_URL } from "@/assets/config";
import Alert from "../components/Alert.vue";
export default {
  components: { Alert },
  props: ["id"],
  data() {
    return {
      students: [],
      distributedMark: null,
      commings: "",
      ratings: "",
      exam_mark: null,
      alertType: "",
      alertMessage: "",
      formData: {
        university_id: 0,
      },
      formDataUpdate: {
        mark_of_commings: "",
        mark_of_ratings: "",
      },
    };
  },
  mounted() {
    this.getStudentsWithMarks();
    // this.getDistributedMarks();
  },
  methods: {
    // getDistributedMarks() {
    //   const token = localStorage.getItem("token");
    //   axios
    //     .get(`${BASE_URL}categories/${this.$route.params.id}/details`, {
    //       headers: { Authorization: `Bearer ${token}` },
    //     })
    //     .then((response) => {
    //       console.log(response.data);
    //       this.distributedMark = response.data.category;
    //       this.exam_mark = response.data.exam_mark;
    //       console.log(this.distributedMark);
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //     });
    // },
    AddStudent() {
      const token = localStorage.getItem("token");
      axios
        .post(
          `${BASE_URL}categories/${this.$route.params.id}/add-student`,
          this.formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response.data.message);
          console.log(this.formData.university_id);
          this.formData.university_id = "";
          this.closePasswordModal();
          this.alertType = "success";
          this.alertMessage = response.data.message;
        })
        .catch((error) => {
          this.error = error;
          console.log(this.error.message);
        });
    },
    Update() {
      const token = localStorage.getItem("token");
      axios
        .post(
          `${BASE_URL}categories/${this.$route.params.id}`,
          this.formDataUpdate,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.formDataUpdate.mark_of_commings = "";
          this.formDataUpdate.mark_of_ratings = "";
          this.closeUpdateModal();
          this.alertType = "success";
          this.alertMessage = "Update successfully";
          this.getStudentsWithMarks();
        })
        .catch((error) => {
          this.error = error;
          console.log(this.error.message);
        });
    },
    clearAlert() {
      this.alertType = "";
      this.alertMessage = "";
    },
    closeUpdateModal() {
      const modal = document.getElementById("UpdateModal");
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      modal.setAttribute("style", "display: none");
      const modalBackdrop = document.querySelector(".modal-backdrop");
      modalBackdrop.parentNode.removeChild(modalBackdrop);
    },
    closePasswordModal() {
      const modal = document.getElementById("passwordModal");
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      modal.setAttribute("style", "display: none");
      const modalBackdrop = document.querySelector(".modal-backdrop");
      modalBackdrop.parentNode.removeChild(modalBackdrop);
    },
    getStudentsWithMarks() {
      const token = localStorage.getItem("token");
      axios
        .get(`${BASE_URL}categories/${this.$route.params.id}/marksStudents`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.students = response.data.students;
          this.distributedMark = response.data.marks;
          this.formDataUpdate.mark_of_commings =
            response.data.marks.mark_of_commings;
          this.formDataUpdate.mark_of_ratings =
            response.data.marks.mark_of_ratings;
          console.log(this.students);
          console.log(this.distributedMark);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>

<style scoped>
.screen {
  margin-top: 5%;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--LightGreen);
  margin-bottom: 20px;
}
.icon-custom {
  color: var(--GreenOpacity);
}
.table {
  width: 80%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.custom-button {
  display: flex;
  justify-content: right;
  margin-right: 20px;
}
.colored-header {
  background-color: var(--MainColor);
  color: var(--MainColor);
  font-size: 1.1rem;
}

.table th,
.table td {
  padding: 15px;
  text-align: center;
  vertical-align: middle;
}

.table th {
  border-top: none;
  border-bottom: 2px solid #dee2e6;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}

.table-hover tbody tr:hover {
  background-color: #f1f1f1;
}
</style>
