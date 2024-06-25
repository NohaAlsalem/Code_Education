<template>
  <div class="screen">
    <div class="container col-md-12">
      <div class="row d-flex justify-content-center">
        <div v-if="exam" class="col-md-5 card me-1">
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

          <div
            v-if="exam.true_false_questions.length"
            class="true-false-questions"
          >
            <h2>True/False Questions</h2>
            <div
              v-for="(question, index) in exam.true_false_questions"
              :key="index"
              class="question"
            >
              <h3>Question {{ index + 1 }}</h3>
              <p><strong>Text:</strong> {{ question.question_text }}</p>
              <ul>
                <li><strong>Choice 1:</strong> {{ question.choise1 }}</li>
                <li><strong>Choice 2:</strong> {{ question.choise2 }}</li>
                <li><strong>Choice 3:</strong> {{ question.choise3 }}</li>
                <li><strong>Choice 4:</strong> {{ question.choise4 }}</li>
              </ul>
              <p>
                <strong>Correct Answer:</strong> Choice {{ question.correct }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-5 card text-start second m-0">
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
            <div v-for="answer in answers" :key="answer.id">
              <p>question: {{ answer.question_text }}</p>
              <p>answer:{{ answer.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Solution from "../../components/Solution.vue";
import { BASE_URL } from "@/assets/config";
import hljs from "highlight.js";
import "highlight.js/styles/default.css"; // Ensure this path is correct
export default {
  components: { Solution },
  props: ["id", "student_id"],
  data() {
    return {
      exam: null, // Object to hold the API response data
      error: null,
      solve_code: null,
      answers: [],
      formData: {
        student_id: this.$route.params.student_id,
        exam_id: this.$route.params.id,
      },
    };
  },
  methods: {
    solve() {
      this.highlightCode();
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
          this.solve_code = response.data.code1;
          this.answers = response.data.answers;
        })
        .catch((error) => {
          console.log(error.message);

          this.error = error;
        });
    },
    highlightCode() {
      this.$nextTick(() => {
        const codeBlock = this.$refs.codeContainer.querySelector("code");
        if (codeBlock) {
          const result = hljs.highlightAuto(codeBlock.textContent);
          codeBlock.innerHTML = result.value;
        }
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
          console.log(this.exam.true_false_questions);
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
  mounted() {
    this.highlightCode();
    this.fetchExamDetails(); // Fetch the data when the component is created
    this.getStudentSolve();
  },
};
</script>
<style scoped>
.card-body {
  height: 100%;
}
.screen {
  background: var(--darkwhite);
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
}
.solve{
  max-width: 400px;
  overflow: scroll;
}
</style>
