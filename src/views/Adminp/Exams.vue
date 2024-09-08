<template>
    <div class="">
        <NavBarA></NavBarA>
        <div class="screen p-5">
        <div class="card-header ms-5 " >
                            <button type="button " class="btn ms-5 me-5" :class="{ 'custom-button': selectedButton === 1 }"
                                @click="selectButton(1)">
                                Exams
                            </button>
                           
                            <button type="button" class="btn ms-5" :class="{ 'custom-button': selectedButton === 2 }"
                                @click="selectButton(2)">
                                Add Exam
                            </button>
                        </div>
        <div  v-if="description" class=" ms-2 mt-4">
            <div class="row m-0">
                <div class="col-4 ">
                    <div class="card m-5 mt-0" >                       
                      
                            <table class="table table-borderless table-striped w-100" style="width: 100%;">
                                <thead>
                                    <tr>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Exam date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="exam in exams" :key="exam.id" @click="getDetailExam(exam.id)">
                                        <td >{{ exam.subject }}
                                       </td>
                                        <td>{{ exam.exam_date }}</td>
                                    </tr>
                                </tbody>
                            </table>
                       
                    </div>
                </div>

                <div class=" card col-8" >
<detailProblem :exam="this.exam" :problem="this.problem"  :questions="this.questions" :tests="this.tests" :tags="this.tags"></detailProblem>
                   </div>
            </div>
        </div>
        <div v-else>
<Add_Exam ></Add_Exam></div>
    </div>
    </div>
</template>

<script>
import NavBarA from './component/NavBarA.vue';
import detailProblem from '@/views/Adminp/component/detailProblem.vue';
import Add_Exam from '../Add_Exam.vue';
import axios from 'axios';
import { ADMIN_URL } from "@/assets/config";

export default {
    components: {
        NavBarA,
        detailProblem,
        Add_Exam
    },
    data() {
        return {
           exams:[],
           exam:{},
           problem:{},
           tests:[],
           tags:[],
           teacher_solve_code:'',
           questions:[],
           selectedButton: 1,
            description: true,
            solution: false,
        }
    },
    mounted(){
        this.getExams();
        // this.getDetailExam(1);
    },
    methods:{
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
        getExams() {
       
            axios.get(ADMIN_URL + 'exams', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                console.log(response.data);
                this.exams = response.data.data;
                console
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },
  
    getDetailExam(examId) {
            axios.get(ADMIN_URL + `exams/${examId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                console.log(response.data);
                this.exam = response.data.data;
                this.problem=response.data.data.problem;
                this.tests=response.data.data.tests;
                this.tags=response.data.data.tags;
                this.questions=response.data.data.questions;
                this.teacher_solve_code=response.data.data.teacher_solve_code;


                console.log(this.exam.subject+'ljhujyg')
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },
    },
    
}
</script>

<style scoped>
.screen{
    background: #e7dff9;
    height: auto;
    width: 100%;
}
.exam{
    background: #ffffff;
    padding: 0;
}
p {
    color: var(--GreenColor);
    margin: 0;

}

h6 {
    color: var(--GreenColor);
    font-weight: bold;
    margin: 0;
}
.inp{
    width: 100%;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
}
.card {
 /* height: 50vh; */
 /* height: 100vh; */
 max-height: 90vh;
    padding: 0;
    border: 1px solid var(--borderColor);
    border-radius: 5px;
    overflow-y: auto;
   
}

.table th {
    background: var(--GreenColor);
    color: white;
    font-weight: 400;
}

.btn {
    border-radius: 10px;
    background: #e7dff9;
    /* background: var(--GreenColor); */
    padding: 5px 20px;
    border: 0;
    color: var(--GreenColor);
  
}
.custom-button,
.btn:hover,
.bttn:hover {
    color: #ffffff;
    font-weight: bold;
    background: var(--GreenColor) ;

}


</style>