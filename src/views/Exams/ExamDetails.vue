<template>
  <div class="screen">
    <div class="container col-md-12">
      <div class="row d-flex justify-content-center mt-2">
        <div v-if="exam" class="col-md-5 card me-3">
          <div class="card-header">Exam Details</div>
          <div class="exam-details">
            <h2>Exam Details</h2>
            <p><strong>ID:</strong> {{ exam.id }}</p>
            <p><strong>Name:</strong> {{ exam.name }}</p>
            <p><strong>Time:</strong> {{ exam.time }}</p>
          </div>

          <div class="problem-details">
            <h2>Problem Details</h2>
            <p><strong>Name:</strong> {{ exam.problem1.name }}</p>
            <p><strong>Description:</strong> {{ exam.problem1.description }}</p>
            <p><strong>Difficulty:</strong> {{ exam.problem1.diffculty }}</p>
          </div>

          <TrueOrFalse :questions="exam.true_false_questions"></TrueOrFalse>
        </div>
        <div class="col-md-5 card text-start firt">
          <div class="card-header">
            <button
              type="button"
              class="btn"
              :class="{ 'custom-button': selectedButton === 2 }"
              @click="selectButton(2)"
            >
              Solution
            </button>

            |
            <button
              type="button"
              class="btn"
              :class="{ 'custom-button': selectedButton === 1 }"
              @click="selectButton(1)"
            >
              Questions and answers
            </button>
          </div>
          <div v-if="solution" class="solve">
            <Solution :solve="solve_code"></Solution>
          </div>

          <div v-else v-for="answer in answers" :key="answer.id">
            <p>
              <span class="qn">Question:</span>
              {{ answer.question_text }}
            </p>
            <p>
              <span class="qn">Answer:</span>
              <span class="answer"> {{ answer.answer }}</span>
            </p>
          </div>
        </div>

        <!-- <div class="col-md-5 card text-start second m-0">
          <div class="card-header">
            <button
              type="button"
              class="btn custom-button"
              @click="selectButton(2)"
            >
              Solution
            </button>
          </div>
          <div class="solve">
            <Solution :solve="solve_code"></Solution>
          </div>
        </div> -->
      </div>
      <div class="text-center mt-5">
        <h6>
          Grade
          <input
            type="text"
            value="20%"
            style="
              background: white;
              border: 1.3px solid var(--MainColor);
              border-radius: 5px;
            "
          />
        </h6>
      </div>
      <div class="text-center">
        <button
          type="button"
          class="btn"
          style="
            background: var(--MainColor);
            color: white;
            margin-left: 30px;
            border: 1.3px solid var(--MainColor);
          "
          @click="UpdateMark"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
  <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />
</template>

<script>
import axios from "axios";
import Solution from "../../components/Solution.vue";
import { BASE_URL } from "@/assets/config";
import Alert from "../../components/Alert.vue";
import "highlight.js/styles/default.css"; // Ensure this path is correct
import TrueOrFalse from "../../components/TrueOrFalse.vue";
export default {
  components: { Solution, Alert, TrueOrFalse },
  props: ["id", "student_id"],
  data() {
    return {
      selectedButton: 2,
      questions: false,
      solution: true,
      alertType: "",
      alertMessage: "",
      tests: false,
      exam: null, // Object to hold the API response data
      error: null,
      solve_code: null,
      formData: {
        mark: null,
        student_id: null,
        exam_id: null,
      },
      answers: [],
      formData: {
        student_id: this.$route.params.student_id,
        exam_id: this.$route.params.id,
      },
    };
  },
  methods: {
    clearAlert() {
      this.alertType = "";
      this.alertMessage = "";
    },
    getStudentSolve() {
      const token = localStorage.getItem("token");
      console.log(token);
      axios
        .post(BASE_URL + "exams/answers", this.formData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response.data);
          this.formData.mark = response.data.mark;
          this.formData.student_id = response.data.student_id;
          this.formData.exam_id = response.data.exam_id;
          this.solve_code = response.data.code1;
          this.answers = response.data.answers;
        })
        .catch((error) => {
          console.log(error.message);

          this.error = error;
        });
    },

    fetchExamDetails() {
      const token = localStorage.getItem("token");

      axios
        .get(BASE_URL + "exams/show/" + this.$route.params.id, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.exam = response.data; // Bind the response data to the exam object
          console.log(this.exam);
          console.log(this.exam.id);
          this.mark = this.exam.mark;
          console.log(this.mark);
          console.log(this.exam.true_false_questions);
        })
        .catch((error) => {
          this.error = error;
        });
    },
    selectButton(buttonNumber) {
      this.selectedButton = buttonNumber;
      if (this.selectedButton === 1) {
        this.questions = true;
        this.solution = false;
      } else if (this.selectedButton === 2) {
        this.solution = true;
        this.questions = false;
      } else {
        this.solution = false;
        this.questions = false;
      }
    },
    UpdateMark() {
      const token = localStorage.getItem("token");
      axios
        .post(`${BASE_URL}exams/edit-student-mark`, this.formData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response.data);
          this.alertType = "success";
          this.alertMessage = "Update successfully";
        })
        .catch((error) => {
          this.error = error;
          console.log(this.error.message);
        });
    },
  },
  mounted() {
    this.fetchExamDetails(); // Fetch the data when the component is created
    this.getStudentSolve();
  },
};
</script>
<style scoped>
.card-body {
  height: 100%;
  margin-top: 20px;
}
.btn {
  border: none;
}
.screen {
  background: var(--darkwhite);
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
}
.solve {
  max-width: 400px;
  overflow-y: auto;
}

.custom-button,
.btn:hover {
  color: var(--MainColor);
  font-weight: bold;
  border: none;
}
.qn {
  color: var(--GreenOpacity);
  font-weight: bold;
  display: block;
}
</style>
