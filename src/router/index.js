import { createRouter, createWebHistory } from "vue-router";
import TopBar from "@/components/TopBar.vue";
import NavBar from "@/components/NavBar.vue";
import splashSc from "../views/splashSc.vue";
import ProblemS from "../views/ProblemS.vue";
import ClasseS from "../views/ClasseS.vue";
import logIn from "../views/logIn.vue";
import ShowTests from "@/views/Tests/ShowTests.vue";
import TakeAttendance from "@/views/TakeAttendance.vue";
import StudentMarks from "@/views/StudentMarks.vue";
import TestDetails from "@/views/Tests/TestDetails.vue";
import ModifyGrades from "@/views/ModifyGrades.vue";
import CreateTest from "../views/Tests/CreateProblem.vue";
import AddManuallyTest from "../components/AddManuallyTest.vue";
import GenerateTest from "../components/GenerateTest.vue";
const routes = [
  {
    name: "topbar",
    path: "/topbar",
    component: TopBar,
  },
  {
    name: "splash",
    path: "/",
    component: splashSc,
  },

  {
    path: "/NavBar",
    component: NavBar,
  },
  {
    name: "login",
    path: "/login",
    component: logIn,
  },
  {
    name: "problem",
    path: "/problems",
    component: ProblemS,
  },
  {
    name: "classes",
    path: "/classes",
    component: ClasseS,
  },
  {
    name: "showtests",
    path: "/showtests",
    component: ShowTests,
  },
  {
    name: "takeAttendance",
    path: "/takeAttendance",
    component: TakeAttendance,
  },
  {
    name: "studentMarks",
    path: "/studentmarks",
    component: StudentMarks,
  },
  {
    name: "testdetails",
    path: "/testdetails/:id",
    component: TestDetails,
    props: true,
  },
  {
    name: "createtest",
    path: "/createtest",
    component: CreateTest,
  },
  { name: "modifygrades", path: "/modifygrades", component: ModifyGrades },
  {
    name:"addmanuallytest",
    path:"/addmanuallytest",
    component:AddManuallyTest
  },{
    name:"generatetest",
    path:"/generatetest",
    component:GenerateTest
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
