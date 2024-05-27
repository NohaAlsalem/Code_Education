<template>
  <div class="container text-center col-md-12 screen">
    <table class="table">
      <thead>
        <tr class="colored-header">
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Presence (5)</th>
          <th scope="col">Exam mark (15)</th>
          <th scope="col">Tests(10)</th>
          <th scope="col">Total mark</th>
          <th scope="col">Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <th scope="row">{{ student.id }}</th>
          <td>{{ student.name }}</td>
          <td>{{ student.pivot.attendance_marks }}</td>
          <td>{{ student.pivot.assessment_marks }}</td>
          <td>{{ student.pivot.mark }}</td>
          <td>
            <button type="button" class="btn btn-success">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "@/assets/config";
import Alert from "../components/Alert.vue";
export default {
  props: ["id"],
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.getStudentsWithMarks();
  },
  methods: {
    getStudentsWithMarks() {
      const token = localStorage.getItem("token");
      console.log("this is from students " + token);
      axios
        .get(
          BASE_URL + "categories/" + this.$route.params.id + "/marksStudents",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          console.log("this is students");
          console.log(response.data);
           this.students = response.data;
           console.log(this.students)
          // this.students = response.data.data.map((student) => {
          //   return {
          //     ...student,
          //     checked: false, // Add a checked property
          //   };
          // });
        })
        .catch((error) => {
          console.log(error.message);
          // this.errMessage = "error retrieving data";
        });
    },
  },
};
</script>

<style scoped>
.screen {
  margin-top: 8%;
}
</style>
