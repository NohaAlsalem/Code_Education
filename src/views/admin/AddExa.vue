<template>
  <div class="screen">
    <div class="container col-md-12">
      <div class="row">
        <div class="col-md-5">
          <h2>Add New Exam</h2>
          <form @submit.prevent="submitExam">
            <div class="form-group">
              <label for="exam_date">Exam Date</label>
              <input
                type="datetime-local"
                v-model="examData.exam_date"
                id="exam_date"
                required
              />
            </div>

            <div class="form-group">
              <label for="exam_name">Exam Name</label>
              <input
                type="text"
                v-model="examData.exam_name"
                id="exam_name"
                required
              />
            </div>

            <div class="form-group">
              <label for="exam_password">Exam Password</label>
              <input
                type="password"
                v-model="examData.exam_password"
                id="exam_password"
                required
              />
            </div>

            <div class="form-group">
              <label for="problem_id">Problem ID</label>
              <input
                type="number"
                v-model="examData.problem_id"
                id="problem_id"
                required
              />
            </div>

            <button type="button" @click="addQuestion">Add Question</button>
            <button type="submit">Submit Exam</button>
          </form>
        </div>
        <div class="col-md-5" ref="questionsContainer">
          <div
            v-for="(question, index) in examData.questions"
            :key="index"
            class="question-group"
          >
            <h3>Question {{ index + 1 }}</h3>
            <div class="form-group">
              <label :for="'question_text_' + index">Question Text</label>
              <input
                type="text"
                v-model="question.question_text"
                :id="'question_text_' + index"
                required
              />
            </div>
            <div class="form-check">
              <p>Do you want to add a code :</p>
              <input
                class="form-check-input"
                type="radio"
                :name="'need_code_' + index"
                :id="'need_code_yes_' + index"
                v-model="need_code"
                value="yes"
              />
              <label :for="'need_code_yes_' + index">Yes</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                :name="'need_code_' + index"
                :id="'need_code_no_' + index"
                v-model="need_code"
                value="no"
              />
              <label :for="'need_code_no_' + index">No</label>
            </div>

            <div v-if="need_code === 'yes'" class="form-group">
              <label :for="'code_' + index">Enter Code</label>
              <input
                type="text"
                v-model="question.code"
                :id="'code_' + index"
                required
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                :name="'flexRadioDefault' + index"
                :id="'choise_1_' + index"
                v-model="question.correct"
                :value="1"
              />
              <input
                type="text"
                v-model="question.choise_1"
                :id="'choise_1_' + index"
                required
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                :name="'flexRadioDefault' + index"
                :id="'choise_2_' + index"
                v-model="question.correct"
                :value="2"
              />
              <input
                type="text"
                v-model="question.choise_2"
                :id="'choise_2_' + index"
                required
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                :name="'flexRadioDefault' + index"
                :id="'choise_3_' + index"
                v-model="question.correct"
                :value="3"
              />
              <input
                type="text"
                v-model="question.choise_3"
                :id="'choise_3_' + index"
                required
              />
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                :name="'flexRadioDefault' + index"
                :id="'choise_4_' + index"
                v-model="question.correct"
                :value="4"
              />
              <input
                type="text"
                v-model="question.choise_4"
                :id="'choise_4_' + index"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      need_code: "no",
      examData: {
        exam_date: "2023-10-01T10:00:00",
        exam_name: "Midterm Exam",
        exam_password: "securepassword123",
        problem_id: 42,
        questions: [],
      },
      question: {
        question_text: "",
        choise_1: "",
        choise_2: "",
        choise_3: "",
        choise_4: "",
        correct: 1,

        code: "",
      },
    };
  },
  methods: {
    addQuestion() {
      const newQuestion = {
        question_text: this.question.question_text,
        choise_1: this.question.choise_1,
        choise_2: this.question.choise_2,
        choise_3: this.question.choise_3,
        choise_4: this.question.choise_4,
        correct: this.question.correct,

        code: this.need_code === "yes" ? this.question.code : "",
      };
      this.examData.questions.push(newQuestion);
      this.$nextTick(() => {
        this.scrollToNewQuestion();
      });
      this.resetQuestion();
    },
    resetQuestion() {
      (this.need_code = "no"),
        (this.question = {
          question_text: "",
          choise_1: "",
          choise_2: "",
          choise_3: "",
          choise_4: "",
          correct: 1,

          code: "",
        });
    },
    scrollToNewQuestion() {
      const container = this.$refs.questionsContainer;
      container.scrollTop = container.scrollHeight;
    },
    async submitExam() {
      console.log(this.examData);
      try {
        const response = await axios.post(
          "{{url}}/api/adminstrator/add-exam/1",
          this.examData
        );
        console.log("Exam submitted successfully:", response.data);
      } catch (error) {
        console.error("Error submitting exam:", error);
      }
    },
  },
};
</script>

<style scoped>
.screen {
  background: var(--darkwhite);
  height: 100vh;
  overflow: auto;
}

.container {
  background: var(--darkwhite);
}

.question-group {
  background: #d3bcf1;
  padding: 1rem;
  margin-bottom: 1rem;
  margin-top: 20px;
  border: 2px solid #ddd;
  border-radius: 7px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  margin-right: 1rem;
  border: none;
  border-radius: 4px;
  background-color: var(--MainColor);
  color: white;
  cursor: pointer;
}
</style>
