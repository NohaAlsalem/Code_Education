<template>
  <div>
    <NavBar></NavBar>
    <SubjectAndClass
      :class_name="$route.params.class_name"
      :class_subject="class_subject"
    ></SubjectAndClass>

    <div
      class="container  position-absolute top-70 start-50 translate-middle"
    >
      <div class="row">
        <div class="col-md-3">
          <router-link
            :to="{ name: 'createtest', params: { id: $route.params.id } }"
            class="router-link"
          >
            <div
              class="card bg-light rounded"
              @mouseover="addAnimation"
              @mouseout="removeAnimation"
            >
              <img
                class="card-img-top"
                src="../assets/images/img1.jpg"
                alt="Image"
              />
              <div class="card-body">
                <p class="card-text">Create tests</p>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-md-3">
          <router-link :to="{ name: 'showtests', params: { id: $route.params.id } }" class="router-link">
            <div
              class="card bg-light rounded"
              @mouseover="addAnimation"
              @mouseout="removeAnimation"
            >
              <img
                class="card-img-top"
                src="../assets/images/images (4).jpg"
                alt="Image"
              />
              <div class="card-body">
                <p class="card-text">Show tests</p>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-md-3">
          <router-link :to="{ name: 'takeAttendance' }" class="router-link">
            <div
              class="card bg-light rounded"
              @mouseover="addAnimation"
              @mouseout="removeAnimation"
            >
              <img
                class="card-img-top"
                src="../assets/images/img3.jpg"
                alt="Image"
              />
              <div class="card-body">
                <p class="card-text">Check attendance</p>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-md-3">
          <router-link :to="{ name: 'studentMarks' }" class="router-link">
            <div
              class="card bg-light rounded"
              @mouseover="addAnimation"
              @mouseout="removeAnimation"
            >
              <img
                class="card-img-top"
                src="../assets/images/img2.jpg"
                alt="Image"
              />
              <div class="card-body">
                <p class="card-text">Student marks</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="row cont"></div>
    </div>
  </div>
</template>

<script>
import SubjectAndClass from "../components/SubjectAndClass.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
    SubjectAndClass,
  },
  props: ["id", "class_name", "class_subject"],
  mounted() {
    // this.id=this.$route.params.id;
    console.log("Received item ID:", this.$route.params.id);
    console.log("Received item name:", this.$route.params.class_name);
  },
  methods: {
    // goToCreateTest(problem) {
    //   console.log()
    //   this.$router.push({
    //     name: "createtest",
    //     query: {
    //       id:this.$route.params.id,
    //       problemId: problem.id,
    //       title: problem.title,
    //       Language: problem.Language,
    //       Difficulty: problem.Difficulty,
    //       Tags: problem.Tags,
    //     },
    //   });
    // },
    addAnimation(event) {
      const cardBody = event.currentTarget.querySelector(".card-body");
      cardBody.classList.add("hover-animation");
      cardBody.style.backgroundPosition = "bottom";
    },
    removeAnimation(event) {
      const cardBody = event.currentTarget.querySelector(".card-body");
      cardBody.classList.remove("hover-animation");
      cardBody.style.backgroundPosition = "top";
    },
  },
  
};
</script>

<style scoped>
.d-flex {
  height: 70%;
}
.cont {
  height: 50px;
}
.subject {
  margin-top: 3px;
}

img {
  height: 200px;
}
.router-link {
  text-decoration: none;
}
.hover-animation {
  background-image: linear-gradient(
    to top,
    var(--GreenColor) 0%,
    transparent 100%
  );
  background-size: 100% 200%;
  transition: background-position 0.3s ease;
}
</style>
