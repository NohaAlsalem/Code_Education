import { createRouter, createWebHashHistory } from 'vue-router'
import Astudents from "@/views/Adminp/Astudents.vue";
import Subjects from "@/views/Adminp/Subjects.vue";
import TeachersAddEdit from "@/views/Adminp/TeachersAddEdit.vue";
import StudentsClass from "@/views/Adminp/StudentsClass.vue";
import Exams from "@/views/Adminp/Exams.vue";
import Add_Problem from "@/views/Adminp/Add_Problem.vue";
// import Add_Exam from "@/views/Adminp/Add_Exam.vue";


import splashSc from "@/views/Adminp/splashSc.vue";
import logIn from '@/views/Adminp/logIn.vue';

const routes = [
  {
    name: 'splash',
    path: '/',
    component: splashSc,
},
{
  name: 'login',
  path: '/login',
  component: logIn,
},
  {
    name:'students',
    path:'/studentsA',
    component:Astudents,

},
{
name:'Subjects',
path:'/subjectsA',
component:Subjects,
},
{
name:'TeachersAddEdit',
path:'/teachersA',
component:TeachersAddEdit,
},
{
    name:'StudentsClass',
    path:'/lm',
    component:StudentsClass,
},
{
    name:'Exams',
    path:'/examsA',
    component:Exams,
},

{
  name:'Add_Problem',
  path:'/Add_Problem',
  component:Add_Problem,
},
// {
//   name:'Add_Exam',
//   path:'/Add_Exam',
//   component:Add_Exam,
// },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
