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
    <div class="text-start">
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
    </div>

    <table class="table table-striped">
      <thead>
        <tr class="colored-header">
          <th scope="col">#</th>
          <th scope="col">Name</th>

          <th scope="col">Mark</th>
          <th scope="col">Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in Students" :key="student.id">
          <th scope="row">1</th>
          <td>{{ student.name }}</td>

          <td><input type="text" :value="student.mark" /></td>
          <td>
            <button type="button" class="btn btn-success">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="row">
      <button type="button" class="btn btn-danger ms-1 me-1">Finish</button>
    </div>
  </div>
</template>

<script>
import Description from "../../components/Description.vue";
import Solution from "../../components/Solution.vue";
import SubjectAndClass from "../../components/SubjectAndClass.vue";
import { BASE_URL } from "@/assets/config";
import axios from "axios";
export default {
  components: { SubjectAndClass, Description, Solution },
  props: ["id"],
  data() {
    return {
      selectedButton: 1,
      description: true,
      solution: false,
      problem: "",
      Students: "",
    };
  },
  mounted() {
    this.getMyTestDetails();
  },
  methods: {
    selectButton(buttonNumber) {
      this.selectedButton = buttonNumber;
      if (this.selectedButton === 1) {
        this.description = true;
        this.solution = false;
      } else {
        this.solution = true;
        this.description = false;
      }
    },
    getMyTestDetails() {
      const token = localStorage.getItem("token");
      const id = this.$route.params.id;
      console.log(id);
      console.log(token);
      axios
        .get(BASE_URL + "assessment/details/" + id, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("this is test details");
          console.log(response.data);
          this.testDetails = response.data;
          this.problem = response.data.problem;
          this.Students = response.data.student;
        })
        .catch((error) => {
          console.log(error);
          this.errMessage = "Error retrieving data";
        });
    },
  },
};
</script>

<style scoped>
.btn {
  border: none;
}
.custom-button,
.bt:hover {
  color: var(--GreenColor);
  font-weight: bold;
}
</style>
