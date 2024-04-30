<template>
  <div>
    <NavBar></NavBar>
    <SubjectAndClass></SubjectAndClass>
    <div
      class="container mt-5 position-absolute top-70 start-50 translate-middle"
    >
      <div class="row">
        <div class="col-md-3">
          <router-link :to="{name:'createtest'}">
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
          <router-link :to="{ name: 'showtests' }">
            <div
              class="card bg-light rounded"
              @mouseover="addAnimation"
              @mouseout="removeAnimation"
            >
              <img
                class="card-img-top"
                src="../assets/images/image.png"
                alt="Image"
              />
              <div class="card-body">
                <p class="card-text">Show tests</p>
              </div>
            </div>
          </router-link>
        </div>

        <div class="col-md-3">
          <router-link :to="{ name: 'takeAttendance' }">
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
          <router-link :to="{ name: 'studentMarks' }">
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
  methods: {
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
  height: 40%;
}

.subject {
  margin-top: 3px;
}

.image {
  flex-shrink: 0;
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
