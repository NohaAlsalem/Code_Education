<template>
  <div>
    <NavBar></NavBar>
    <div class="container text-center col-md-12 screen">
      <table class="table">
        <thead>
          <tr class="colored-header">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Attendance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.student_id">
            <th scope="row">{{ student.student_id }}</th>
            <td>{{ student.student_name }}</td>
            <td>{{ student.tests }}</td>
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
      <div class="container text-end mt-5">
        <button
          type="button"
          class="btn btn-custom me-2"
          @click="saveAttendance()"
        >
          Save
        </button>
      </div>
    </div>
  </div>
  <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
import { BASE_URL } from "@/assets/config";
import Alert from "../components/Alert.vue";

export default {
  components: { NavBar, Alert },
  props: ["id"],
  data() {
    return {
      students: [],
      alertType: "",
      alertMessage: "",
    };
  },
  mounted() {
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
          console.log("this is students");
          console.log(response.data.data);
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
    saveAttendance() {
      const formData = new FormData();
      this.students.forEach((student, index) => {
        if (student.checked) {
          formData.append(`students[${index}][id]`, student.student_id);
        }
      });
      console.log(...formData); // Debug output to check formData

      const token = localStorage.getItem("token");
      axios
        .post(
          BASE_URL + "categories/" + this.$route.params.id + "/attendance",
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log("success" + response.data.message);
          this.alertType = "success";
          this.alertMessage = response.data.message;

          this.students = this.students.map((student) => {
            return {
              ...student,
              checked: false, // Add a checked property
            };
          });
        })
        .catch((error) => {
          console.log(error.message);
          this.alertType = "error";
          this.alertMessage = "Something error during check";
        });
    },
  },
};
</script>

<style scoped>
.custom-checkbox {
  border: 1px solid var(--MainColor);
  padding: 4;
}
.btn-custom {
  background: var(--MainColor);
  color: white;
}
.btn-custom:hover {
  background: var(--MainColor);
  color: white;
}
.custom-checkbox:checked {
  background-color: var(--MainColor);
  border-color: var(--MainColor);
}
.screen {
  margin-top: 8%;
}
</style>
