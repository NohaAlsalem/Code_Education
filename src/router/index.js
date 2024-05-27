import { createRouter, createWebHistory } from "vue-router";
import TopBar from "@/components/TopBar.vue";
import NavBar from "@/components/NavBar.vue";
import splashSc from "../views/splashSc.vue";
import ProblemS from "../views/Problems/MyProblemS.vue";
import Classes from "../views/Classes.vue";
import logIn from "../views/logIn.vue";
import ShowTests from "@/views/Tests/ShowTests.vue";
import TakeAttendance from "@/views/TakeAttendance.vue";
import StudentMarks from "@/views/StudentMarks.vue";
import TestDetails from "@/views/Tests/TestDetails.vue";
import ModifyGrades from "@/views/ModifyGrades.vue";
import CreateTest from "../views/Tests/CreateTest.vue";
import AddManuallyTest from "../components/AddManuallyTest.vue";
import GenerateTest from "../components/GenerateTest.vue";
import ClassDetails from "@/views/ClassDetails.vue";
import CreateProblem from "../views/Problems/CreateProblem.vue";
import problemsToaddTotest from "../components/ProblemsToAddTest.vue";
import ProblemDetails from "../views/Problems/ProblemDetails.vue";
import ConfirmCreateTest from "../views/Problems/ConfirmCreateProblem.vue";
import ConfirmCreateProblem from "../views/Problems/ConfirmCreateProblem.vue";
import Loading from "../views/Loading.vue"
import SideBar from "../components/SideBar.vue"
import Test from "../components/Test.vue"
const routes = [
  {
    name: "topbar",
    path: "/topbar",
    component: TopBar,
  },
  // {
  //   name: "splash",
  //   path: "/",
  //   component: splashSc,
  // },
  {
    name: "loading",
    path: "/",
    component: Loading,
  },
  // {
  //   name: "splash",
  //   path: "/",
  //   component: SideBar,
  // },
  //  {
  //   name: "splash",
  //   path: "/",
  //   component: Test,
  // },
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
    component: Classes,
  },
  {
    name: "showtests",
    path: "/showtests/:id",
    component: ShowTests,
    props:true
  },
  {
    name: "takeAttendance",
    path: "/takeAttendance/:id",
    props:true,
    component: TakeAttendance,
  },
  {
    name: "studentMarks",
    path: "/studentmarks/:id",
    component: StudentMarks,
    props:true
  },
  {
    name: "testdetails",
    path: "/testdetails/:id",
    component: TestDetails,
    props: true
  },
  {
    name: "createproblem",
    path: "/createproblem",
    component: CreateProblem,
  },
  {
    name: "createtest",
    path: "/createtest/:id",
    component: CreateTest,
    props: (route) => ({
      problemId: route.query.problemId,
      title: route.query.title,
      Language: route.query.Language,
      Difficulty: route.query.Difficulty,
      Tags: route.query.Tags,
    }),
  },
  { name: "modifygrades", path: "/modifygrades", component: ModifyGrades },
  {
    name: "addmanuallytest",
    path: "/addmanuallytest",
    component: AddManuallyTest,
  },
  {
    name: "generatetest",
    path: "/generatetest",
    component: GenerateTest,
  },
  {
    name: "classdetails",
    path: "/classdetails/:id/:class_name/:class_subject",
    component: ClassDetails,
    props: true
  },
  {
    name: "problemsToaddTotest",
    path: "/problemsToaddTotest/:id",
    component: problemsToaddTotest,
    props:true
  },
  {
    name: "problemdetails",
    path: "/problemdetails/:id",
    component: ProblemDetails,
    props:true
  },
  {
    name: "confirmproblem",
    path: "/confirmproblem",
    component: ConfirmCreateProblem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
