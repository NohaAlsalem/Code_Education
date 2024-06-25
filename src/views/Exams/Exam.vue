<template>
  <div>
    <NavBar></NavBar>
    <div class="container text-center col-md-12 screen">
      <table class="table">
        <thead>
          <tr class="colored-header">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">University id</th>
            <th scope="col">Exam mark</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <th scope="row">{{ student.id }}</th>
            <td>{{ student.name }}</td>
            <td>{{ student.university_id }}</td>
            <td>{{ student.mark }}</td>
            <td>
            <router-link
             style="text-decoration: none"
              :to="{
                name: 'examdatils',
                params: { id:exam_id , student_id: student.id },
              }"
              >Edit mark </router-link
            >
          </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
import { BASE_URL } from "@/assets/config";

export default {
  components: { NavBar },
  props: ["id"],
  data() {
    return {
      students: [],
      exam_id:null,
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
        .get(BASE_URL + "exams/" + this.$route.params.id + "/marks", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("this is students");
          console.log(response.data.students);
          this.students = response.data.students;
          this.exam_id=response.data.exam.id;
        })
        .catch((error) => {
          console.log(error.message);
          // this.errMessage = "error retrieving data";
        });
    },
    // saveAttendance() {
    //   const formData = new FormData();
    //   console.log();
    //   this.students.forEach((student, index) => {
    //     if (student.checked) {
    //       formData.append(`students[${index}][id]`, student.student_id);
    //     }
    //   });
    //   console.log(...formData); // Debug output to check formData

    //   const token = localStorage.getItem("token");
    //   axios
    //     .post(
    //       BASE_URL + "categories/" + this.$route.params.id + "/attendance",
    //       formData,
    //       {
    //         headers: { Authorization: `Bearer ${token}` },
    //       }
    //     )
    //     .then((response) => {
    //       console.log("success" + response.data.message);
    //       this.alertType = "success";
    //       this.alertMessage = response.data.mesage;

    //       this.students = this.students.map((student) => {
    //         return {
    //           ...student,
    //           checked: false, // Add a checked property
    //         };
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error.mesage);
    //       this.alertType = "error";
    //       this.alertMessage = "Something error during check";
    //     });
    // },
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
