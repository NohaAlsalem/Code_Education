<template>
  <div>
    <div class="choose mt-4">
      <h6 v-if="questions.length >= 1">2. Choose the correct answer</h6>
      <div v-for="(question, index) in questions" :key="question.id">
        <p>{{ index + 1 }} {{ question.question_text }}</p>
        <div class="radios">
          <div class="form-check mt-0">
            <input class="form-check-input" type="radio" :name="'flexRadioDefault' + index"
              :id="'flexRadioDefault1' + index" v-model="answers[index]" :value="1">
            <p>{{ question.choise1 }}</p>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" :name="'flexRadioDefault' + index"
              :id="'flexRadioDefault2' + index" v-model="answers[index]" :value="2">
            <p>{{ question.choise2 }}</p>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" :name="'flexRadioDefault' + index"
              :id="'flexRadioDefault3' + index" v-model="answers[index]" :value="3">
            <p>{{ question.choise3 }}</p>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" :name="'flexRadioDefault' + index"
              :id="'flexRadioDefault4' + index" v-model="answers[index]" :value="4">
            <p>{{ question.choise4 }}</p>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <p style="color: brown;margin-right: 2px;">Note:</p>
        <p>if you click on finish exam, you cannot go back and complete the exam and correct your mistakes.</p>
      </div>
      <button class="bttn" style="color: aliceblue" @click="Solve(examId)">Finish Exam</button>
    </div>
    <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />
        
  </div>
</template>

<script>
import Alert from '../../components/Alert.vue'
import axios from 'axios';
import { BASE_URL } from "@/assets/config.js";

export default {
  props: {
    questions: Array,
    examId: Number,
    problem_mark: Number,
    mark: Number,
    // Assuming examId is passed as a prop
  },
  components:{
    Alert
  },

  data() {
    return {
      answers: Array(this.questions.length).fill(null), // Initialize answers array
      error: null,
      successMessage: '',
      alertType: '',
      alertMessage: '',
      the_mark: 0.0,
    };
  },
  mounted() {
    this.the_mark = this.mark;
    console.log('mark true or false' + this.mark)
  },
  methods: {
    Solve(problemId) {
      this.the_mark = this.mark;
      let formData = {
        answers: this.questions.map((question, index) => ({
          true_false_question_id: question.id,
          answere: this.answers[index]? this.answers[index]:-1, // Ensure this key is 'answer' as expected by backend
        })),
        problem_mark: this.the_mark,
      };
      // this.questions.map((question, index) => ({
      //   true_false_question_id: question.id,
      //   answer: this.answers[index],
      //   problem_mark:this.the_mark,
      // }));

      console.log( JSON.stringify(formData, null, 2)); // Log formData to the console in a readable format

      // console.log(formData+'kjihugytfdrsfgthjk'),
      axios.post(BASE_URL + `exams/${problemId}/solve`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      })
        .then((response) => {
          console.log(response);
          this.successMessage = response.data.message;
          this.alertType = "success";
          this.alertMessage = response.data.message;
          
        this.approved=response.data.approved;
          this.$router.push('/exams');
          setTimeout(() => {
            this.clearAlert();
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
          this.alertType = "error";
          this.alertMessage =  error.response.data.message;
   this.approved=error.response.data.approved;
          setTimeout(() => {
            this.clearAlert();
          }, 2000);
        });
    },
    clearAlert() {
      this.successMessage = '';
      this.errorMessage = '';
      this.alertType = '';
      this.alertMessage = '';
    }
  }
};
</script>

<style scoped>
h6 {
  color: var(--GreenColor);
  font-weight: bold;
}

.bttn {
  background: var(--GreenColor);
  color: white;
  padding: 0 20px;
  border-radius: 10px;
  border: none;
}

p {
  color: var(--GreenColor);
}

.screen {
  padding: 20px 40px;
  /* background: var(--WhiteColor); */
  height: 100vh;
  /* height: calc(100vh-72px); */
}

.btn {
  border: none;
  color: var(--GreenOpacity);
}

.card {
  border: 1px solid var(--GreenOpacity);
}

.custom-button,
.btn:hover,
.bttn:hover {
  color: var(--GreenColor);
  font-weight: bold;
}

.card-body .form-control {
  margin: 0;
  height: 100vh;
}
</style>