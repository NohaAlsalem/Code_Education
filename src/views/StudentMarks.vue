<template>
  <div class="container text-center col-md-12 screen">
    <h1 class="page-title">Student Marks Overview</h1>
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
          </th>

          <th scope="col">
            Tests ({{ distributedMark ? distributedMark.mark_of_ratings : "" }})
          </th>
          <th scope="col">Exam mark ({{ distributedMark ? distributedMark.exam_mark : "" }})</th>
          <th scope="col">Total mark</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <th scope="row">{{ student.id }}</th>
          <td>{{ student.name }}</td>
          <td>{{ student.attendance_mark}}</td>
          <td>{{ student.assessment_mark }}</td>
          <td>{{ student.exam_mark}}</td>
          <td>{{ student.total}}</td>
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
      distributedMark: null,
      exam_mark: null,
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
    getStudentsWithMarks() {
      const token = localStorage.getItem("token");
      axios
        .get(`${BASE_URL}categories/${this.$route.params.id}/marksStudents`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.students = response.data.students;
          this.distributedMark=response.data.marks;
          console.log( this.students);
          console.log(this.distributedMark)
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

.table {
  width: 80%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
