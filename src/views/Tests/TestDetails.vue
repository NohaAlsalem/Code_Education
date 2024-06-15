<template>
  <!-- <SubjectAndClass></SubjectAndClass> -->
  <div
    class="container text-center col-md-12"
    style="margin-top: 10px; margin-bottom: 10px"
  >
    <div class="card text-start">
      <div class="card-header">
        <button
          type="button"
          class="btn bt"
          :class="{ 'custom-button': selectedButton === 1 }"
          @click="selectButton(1)"
        >
          Description
        </button>
        |
        <button
          type="button"
          class="btn bt"
          :class="{ 'custom-button': selectedButton === 2 }"
          @click="selectButton(2)"
        >
          Solution
        </button>
        <!-- |
        <button
          type="button"
          class="btn bt"
          :class="{ 'custom-button': selectedButton === 3 }"
          @click="selectButton(3)"
        >
          Test
        </button> -->
      </div>
      <Description
        v-if="description"
        :name="problem.name"
        :diffculty="problem.diffculty"
        :description="problem.description"
        :tags="problem.tags"
        :test_case="problem.test_case"
      >
      </Description>
      <Solution
        v-else-if="solution"
        :solve="problem.solve"
        :hint1="problem.hint1"
        :hint2="problem.hint2"
      ></Solution>
    </div>
    <!-- <div class="text-start">
      <p style="margin-top: 10px; margin-bottom: 10px">
        Modifying the grades of students who received a zero grade and have
        codes
      </p>
      <router-link :to="{ name: 'modifygrades' }">
        <button
          type="button"
          class="btn"
          style="background: var(--GreenColor); color: white"
        >
          Edit
        </button>
      </router-link>
    </div> -->

    <table class="table table-striped">
      <thead>
        <tr class="colored-header">
          <th scope="col">#</th>
          <th scope="col">Name</th>

          <th scope="col">Mark</th>
          <!-- <th scope="col">Operation</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in Students" :key="student.id">
          <th scope="row">1</th>
          <td>{{ student.name }}</td>

          <td>
            <input type="text" class="custom-input"  v-model="student.mark" />
          </td>
          <!-- <td>
            <button type="button" class="btn btn-success">Edit</button>
          </td> -->
        </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-danger ms-1 me-1" @click="finish">
          Finish
        </button>
      </div>
    </div>
  </div>
  <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />
</template>

<script>
import Description from "../../components/Description.vue";
import Solution from "../../components/Solution.vue";
import { BASE_URL } from "@/assets/config";
import axios from "axios";
import Alert from "../../components/Alert.vue";

export default {
  components: { Description, Solution, Alert },
  props: ["id"],
  data() {
    return {
      selectedButton: 1,
      alertType: "",
      alertMessage: "",
      description: true,
      solution: false,
      problem: "",
      Students: [],
    };
  },
  mounted() {
    this.getMyTestDetails();
  },
  methods: {
    selectButton(buttonNumber) {
      this.selectedButton = buttonNumber;
      this.description = this.selectedButton === 1;
      this.solution = this.selectedButton === 2;
    },
    getMyTestDetails() {
      const token = localStorage.getItem("token");
      const id = this.$route.params.id;
      axios
        .get(BASE_URL + "assessment/details/" + id, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.testDetails = response.data;
          this.problem = response.data.problem;
          this.Students = response.data.student;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    finish() {
      const token = localStorage.getItem("token");
      const id = this.$route.params.id;
      const formData = new FormData();
      console.clear();
      this.Students.forEach((student, index) => {
   
        console.log(student.mark)
        formData.append(`students[${index}][id]`, student.id);
        formData.append(`students[${index}][mark]`, student.mark);
      });
  console.log(formData);
      axios
        .post(`${BASE_URL}assessment/stop/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          this.alertType = "success";
          this.alertMessage = response.data.mesage;
          console.log(response.data.students);
          console.log("Attendance saved successfully", response.data);
          alert("Attendance saved successfully");
        })
        .catch((error) => {
          this.alertType = "error";
          this.alertMessage = "Something occuring error ";
          console.error("Error saving attendance", error);
          alert("Error saving attendance");
        });
    },
  },
};
</script>

<style scoped>
.btn {
  border: none;
}
.input {
  border: none;
  text-align: center;
}
.custom-input {
  border: none;
  border-bottom: 1px solid rgb(192, 192, 192);
  text-align: center;
  /* width: 100%; */
  outline: none;
}
.custom-button,
.bt:hover {
  color: var(--GreenColor);
  font-weight: bold;
}
</style>
