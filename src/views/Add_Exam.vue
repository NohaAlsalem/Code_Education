<template>
  <div class="screen">
    <div class="container col-md-12">
      <div class="row">
        <div class="col-md-5">
          <h2>Add New Exam</h2>
          <!-- @submit.prevent="submitExam(subjectid)" -->
          <form @submit="(event) => submitExam(event, subjectid)">
            <div class="form-group">
              <label for="exam_date">Exam Date</label>
              <input type="text" v-model="examData.exam_date" id="exam_date" required />
            </div>

            <div class="form-group">
              <label for="exam_name">Exam Name</label>
              <input type="text" v-model="examData.exam_name" id="exam_name" required />
            </div>

            <div class="form-group">
              <label for="exam_password">Exam Password</label>
              <input type="password" v-model="examData.exam_password" id="exam_password" required />
            </div>

            <div class="form-group">
              <label for="exam_password">Subject Name</label>
              <select class="drop ms-2" id="subject" name="subject" v-model="subjectid" placeholder="subjects"
                autocomplete="country-name">
                <option class="opt " v-for="subject in subjects1" :key="subject.id" :value="subject.id">{{ subject.name
                  }}</option>
                <!-- <option class="opt ">2</option> -->
              </select>
            </div>
            <div class="form-group">
              <label for="exam_password">Bank Problems</label>
              <select class="drop ms-2" id="problem" name="problem" v-model="examData.problem_id" placeholder="problems"
                autocomplete="country-name">
                <option class="opt " v-for="problem in problems" :key="problem.id" :value="problem.id">{{ problem.name
                  }}</option>
                <!-- <option class="opt ">2</option> -->
              </select>
            </div>

            <!-- <div class="form-group">
                <label for="problem_id">Problem ID</label>
                <input
                  type="number"
                  v-model="examData.problem_id"
                  id="problem_id"
                  required
                />
              </div> -->

            <button type="button" @click="addQuestion">Add Question</button>
            <button type="submit" @click="(event) => submitExam(event, subjectid)">Submit Exam</button>
          </form>
        </div>
        <div class="col-md-5" ref="questionsContainer">
          <div v-for="(question, index) in examData.questions" :key="index" class="question-group">
            <h3>Question {{ index + 1 }}</h3>
            <div class="form-group">
              <label :for="'question_text_' + index">Question Text</label>
              <input type="text" v-model="question.question_text" :id="'question_text_' + index" required />
            </div>
            <div class="form-check">
              <p>Do you want to add a code :</p>
              <input class="form-check-input" type="radio" :name="'need_code_' + index" :id="'need_code_yes_' + index"
                v-model="need_code" value="yes" />
              <label :for="'need_code_yes_' + index">Yes</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" :name="'need_code_' + index" :id="'need_code_no_' + index"
                v-model="need_code" value="no" />
              <label :for="'need_code_no_' + index">No</label>
            </div>

            <div v-if="need_code === 'yes'" class="form-group">
              <label :for="'code_' + index">Enter Code</label>
              <input type="text" v-model="question.code" :id="'code_' + index" required />
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" :name="'flexRadioDefault' + index" :id="'choise_1_' + index"
                v-model="question.correct" :value="1" />
              <input type="text" v-model="question.choise_1" :id="'choise_1_' + index" required />
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" :name="'flexRadioDefault' + index" :id="'choise_2_' + index"
                v-model="question.correct" :value="2" />
              <input type="text" v-model="question.choise_2" :id="'choise_2_' + index" required />
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" :name="'flexRadioDefault' + index" :id="'choise_3_' + index"
                v-model="question.correct" :value="3" />
              <input type="text" v-model="question.choise_3" :id="'choise_3_' + index" required />
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" :name="'flexRadioDefault' + index" :id="'choise_4_' + index"
                v-model="question.correct" :value="4" />
              <input type="text" v-model="question.choise_4" :id="'choise_4_' + index" required />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />

  </div>
</template>

<script>
import axios from "axios";
import Alert from './Adminp/component/Alert.vue';
import { ADMIN_URL } from "../assets/config";

export default {
  data() {
    return {
      need_code: "no",
      subjects1: [],
      subjectid: null,
      errorMessage: "",
      alertType: "",
      alertMessage: "",
      successMessage: "",
      examData: {
        exam_date: "2023-10-01 10:00:00",
        exam_name: "Midterm Exam",
        exam_password: "securepassword123",
        problem_id: 'problem Id',
        questions: [],
      },
      errorMessage: "",
      alertType: "",
      alertMessage: "",
      successMessage: "",
      problems: [],
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
  components: {
    Alert
  },
  mounted() {
    this.getMyProblems();
    this.getSubjects();
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
    submitExam(event, subjectid) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(this.examData);

    axios.post(
        ADMIN_URL + `add-exam/${subjectid}`,
        this.examData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        }
    ).then((response) => {
        console.log('Response:', response.data);
        this.successMessage = response.data.success;
        this.alertType = "success";
        this.alertMessage = response.data.success;

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
        this.getExams()
        // Optionally call this.getExams() if you want to refresh the exam list

    }).catch((error) => {
        if (this.subjectid == null) {
            this.errorMessage = "Error: please choose a subject.";
            this.alertType = "error";
            this.alertMessage = "Error: please choose a subject.";
        } else if (error.response) {
            this.errorMessage = "Error: " + error.response.data.message;
            this.alertType = "error";
            this.alertMessage = "Error: " + error.response.data.message;
        } else {
            this.errorMessage = "An unknown error occurred.";
            this.alertType = "error";
            this.alertMessage = "An unknown error occurred.";
        }
        console.log(error);
        this.errMessage = 'Error retrieving data';
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    });
},
    getSubjects() {
      const token = localStorage.getItem("token");

      axios
        .get(ADMIN_URL + 'subjects', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {

          this.subjects1 = response.data.subjects;
        })
        .catch((error) => {
          console.log(error);

        });
    },
    getMyProblems() {
      const token = localStorage.getItem("token");

      axios
        .get(ADMIN_URL + 'bank-problems', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("this problem admin" + response.data);
          this.successMessage = response.data.message;
          this.alertType = "success";
          this.alertMessage = response.data.message;
          this.problems = response.data.data;
        })
        .catch((error) => {
          console.log(error);
          if  (error.response) {
          this.errorMessage = "Error: " + error.response.data.message;
          this.alertType = "error";
          this.alertMessage = "Error: " + error.response.data.message;
        } else {
          this.errorMessage = "An unknown error occurred.";
          this.alertType = "error";
          this.alertMessage = "An unknown error occurred.";
        }
        });
    },

    getExams() {

      axios.get(ADMIN_URL + 'exams', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }).then((response) => {
        console.log(response.data);
        // this.exams = response.data.data;
        // console
      }).catch((error) => {
        console.log(error)
        this.errMessage = 'error retrieving data'
      })
    },

    clearAlert() {
      this.alertType = "";
      this.alertMessage = "";
    },
  },
};
</script>

<style scoped>
.screen {
  /* background: var(--darkwhite); */
  height: 100vh;
  overflow: auto;
}

.container {
  /* height: 50vh; */
  /* height: 100vh; */
  max-height: 90vh;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid var(--borderColor);
  border-radius: 5px;
  background: #ffffff;
  max-height: max-content;
  /* overflow-y: auto; */

}

label,
h2,
h3 {
  color: var(--GreenColor);
}

.btn {
  color: #ffffff;
  font-weight: bold;
  background: var(--GreenColor);

}

.question-group {
  background: #e7dff9;
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
  background: var(--GreenColor);
  color: white;
  cursor: pointer;
}
</style>