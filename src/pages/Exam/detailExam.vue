<template>
  <div class="screen w-100 h-100">
    <!-- side -->
    <button class="bttn ms-3 " @click="toggleSidebar">QRCode</button>

    <div class="sidebar" :class="{ 'active': isSidebarVisible }">
      <div class="sidebar-header">
        <h6>you QR to attendance</h6>
      </div>
    
      <div class="main-content">
        <QrGenerator :namee="student_email"></QrGenerator>
      </div>
    </div>
    <!-- endside -->
    <div class="row">
      <div class="col-md-6">
        <div class="container  col-md-12" style="margin-top: 10px; margin-bottom: 10px">
          <div class="card text-start ">
            <div class="card-header">
              <button type="button" class="btn" :class="{ 'custom-button': selectedButton === 1 }"
                @click="selectButton(1)">
                Description
              </button>
              <button class="btn">
                |
              </button>
              <button type="button" class="btn" :class="{ 'custom-button': selectedButton === 2 }"
                @click="selectButton(2)">
                Solution
              </button>
            </div>
            <Description v-if="description" :problem="this.problem" :test_case="this.testCase"> </Description>
            <SolutionExam v-else :problemId="this.Exam.id"></SolutionExam>
          </div>
          <true_false_q :questions="this.questions" :examId="this.Exam.id" :mark="this.the_mark"></true_false_q>

          <!-- <div v-if="description" class="choose mt-4">
                      <h6>2.Choose the correct answer</h6>
                      <p>1-What is the correct way to declare a variable in java?</p>
                      <div class="radios ">
                          <div class="form-check mt-0">
                              <input class="form-check-input" type="radio" name="flexRadioDefault"
                                  id="flexRadioDefault1">
               
                              <p>int x=10</p>
                          </div>
                          <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault"
                                  id="flexRadioDefault2" checked>
                              <p>x=10</p>
                          </div>
                          <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault"
                                  id="flexRadioDefault2" checked>
                              <p>x=10</p>
                          </div>
                          <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault"
                                  id="flexRadioDefault2" checked>
                              <p>x=10</p>
                          </div>
                      </div>
                      <p>2-What will be the output of the following code snippet</p>
                      <div class="ps-2 p-1" style="background: black; color: white; width: 50%; height: auto;">
                          <p>java</p>
                          <p>int x=4</p>
                      </div>
                      <div class="radios mt-2">
                          <div class="form-check mt-0">
                              <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                  id="flexRadioDefault1">
                   
                              <p>int x=10</p>
                          </div>
                          <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                  id="flexRadioDefault2" checked>
                              <p>x=10</p>
                          </div>
                          <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                  id="flexRadioDefault2" checked>
                              <p>x=10</p>
                          </div>
                          <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault1"
                                  id="flexRadioDefault2" checked>
                              <p>x=10</p>
                          </div>
                      </div>
                      <div class="d-flex">
                          <p style="color: brown;margin-right: 2px;">Note:</p>
                          <p>if you click on finish exam, you cannot go back and complete the exam and correct your mistakes.</p>
                      </div>
                      <button class="bttn" style="color: aliceblue">Finish Exam</button>
                      <p></p>
                  </div> -->
        </div>
      </div>


      <div class="col-md-6">
        <solve_Exam :problemId="this.Exam.id" @mark="getMark"></solve_Exam>
      </div>

    </div>

  </div>
</template>

<script>
import Description from "../problems/component/Description.vue";
import solve_Exam from "./solve_Exam.vue"
// import Solution from "../problems/component/Solution.vue";
import SolutionExam from './SolutionExam.vue';
import inputcode from "../problems/component/inputcode.vue";
import true_false_q from './true_false_q.vue'
import { BASE_URL } from "@/assets/config";
import QrGenerator from '@/components/QrGenerator';
import axios from 'axios';


export default {
  components: {
    Description,
    SolutionExam,
    inputcode,
    true_false_q,
    solve_Exam,
    QrGenerator
  },
  mounted() {
    const examId = this.$route.params.examId;
    console.log(examId);
    this.getProblem(examId);
    this.getProfile();
    // console.log('maaaaaaark detaileeeeeee'+this.the_mark)
  },
  data() {
    return {

      selectedButton: 1,
      description: true,
      solution: false,
      Exam: {},
      subject: {},
      problem: {},
      testCase: {},
      questions: [],
      student_email:'',
      the_mark: 0.0,
      isSidebarVisible: false,

    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },

    getMark(mm) {
      this.the_mark = mm;
      console.log(this.the_mark + 'marrrrrrrrrrrrrrrrrrrrrrrrrrrrrk')
    },
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
    getProblem(ProblemId) {
      axios.get(BASE_URL + `exams/${ProblemId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }).then((response) => {
        this.Exam = response.data.exam;
        this.problem = response.data.exam.problem1;
        this.subject = response.data.exam.subject;
        this.questions = response.data.exam.true_false_questions;
        this.testCase = response.data.test_case;
        console.log(response.name)
      }).catch((error) => {
        console.log(error)
        this.errMessage = 'error retrieving data'
      })
    },
    getProfile() {
       axios.get(BASE_URL + 'profile',{ headers: {
                     Authorization: `Bearer ${localStorage.getItem('token')}`,
                 }}).then((response) => {
                    this.student_email=response.data.detail.email;
                    console.log(';olihuy'+response.data.detail.email)
               
                           
         console
       }).catch((error) => {
         console.log(error)
         this.errMessage = 'error retrieving data'
       })
     },

  },
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
  background: #e7dff9;
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
.btn:hover
 {
  color: var(--GreenColor);
  font-weight: bold;
}
.bttn:hover {
  color: white;
  font-weight: bold;
}
.card-body .form-control {
  margin: 0;
  height: 100vh;
}

.sidebar {
  position: fixed;
  top: 0;
  right: -500px;
  /* right: -250px; */
  /* Hide sidebar off-screen */
  width: fit-content;
  max-width: fit-content;
  height: 100%;
  background:white;
  /* box-shadow: -2px 0 5px #e7dff9; */
  transition: right 0.3s ease;
  /* padding: 20px; */
  z-index: 100;
}

.sidebar.active {
  right: 0;
  /* Show sidebar */
}

.sidebar-header {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.sidebar-item {
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.sidebar-item:hover {
  background-color: #e9ecef;
}

.main-content {
  /* margin-left: 20px; */
  padding: 20px;
  flex-grow: 1;
}
</style>