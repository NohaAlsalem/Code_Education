<template>
  <div class="screen">
    <div class="container col-md-12 text-center">
      <div class="row d-flex">
        <div class="col-md-5 card text-start firt">
          <div class="card-header">
            <button
              type="button"
              class="btn"
              :class="{ 'custom-button': selectedButton === 1 }"
              @click="selectButton(1)"
            >
              Description
            </button>

            |
            <button
              type="button"
              class="btn"
              :class="{ 'custom-button': selectedButton === 3 }"
              @click="selectButton(3)"
            >
              Tests
            </button>
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

          <Tests :test_case="problem.test_case" v-else></Tests>
        </div>
        <div class="col-md-6 card text-start second">
          <div class="card-header">
            <button
              type="button"
              class="btn custom-button"
              @click="selectButton(2)"
            >
              Solution
            </button>
          </div>

          <Solution
            :solve="problem.solve"
            :hint1="problem.hint1"
            :hint2="problem.hint2"
          ></Solution>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Description from "../../components/Description.vue";
import Solution from "../../components/Solution.vue";
import Tests from "../../components/Tests.vue";
import { BASE_URL } from "@/assets/config";
import axios from "axios";
export default {
  components: { Description, Solution, Tests },
  props: ["id"],
  data() {
    return {
      selectedButton: 1,
      description: true,
      solution: false,
      tests: false,
      errMessage: "",
      problem: "",
    };
  },
  mounted() {
    this.getMyProblemDetails();
  },
  methods: {
    selectButton(buttonNumber) {
      this.selectedButton = buttonNumber;
      if (this.selectedButton === 1) {
        this.description = true;
        this.solution = false;
        this.tests = false;
      } else if (this.selectedButton === 2) {
        this.solution = true;
        this.description = false;
        this.tests = false;
      } else {
        this.tests = true;
        this.solution = false;
        this.description = false;
      }
    },
    getMyProblemDetails() {
      const token = localStorage.getItem("token");
      const id = this.$route.params.id;
      console.log(id);
      console.log(token);
      axios
        .get(BASE_URL + "problems/" + id, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response.data);
          this.problem = response.data;
          console.log(this.problem.name);
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
.card.text-start.firt {
  height: 90vh;
  margin-right: 48px;
  margin-top: 5px;
}
.card.text-start.second {
  height: 90vh;
  /* margin-right: 3px; */
  margin-top: 5px;
}
.btn {
  border: none;
}
.custom-button,
.btn:hover {
  color: var(--GreenColor);
  font-weight: bold;
}
.screen {
  background: var(--darkwhite);
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
}
</style>
