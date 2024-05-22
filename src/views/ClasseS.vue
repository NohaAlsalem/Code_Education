<template>
  <NavBar></NavBar>
  <div class="screen">
    <div class="container-fluid col-md-12 class-cards">
      <div v-for="classs in classes" :key="classs.id" class="card classess">
        <router-link
          :to="{
            name: 'classdetails',
            params: {
              id: classs.id,
              class_name: classs.category_name,
              class_subject: classs.subject_name,
            },
          }"
          class="router-link"
        >
          <div class="card-body row">
            <div class="col-md-4 image-container">
              <img
                src="../assets/images/class.jpg"
                alt="Class Image"
                class="class-image"
              />
            </div>
            <div class="col-md-7 text-container ms-4">
              <p><strong>Class :</strong> {{ classs.category_name }}</p>
              <p><strong>Subject :</strong> {{ classs.subject_name }}</p>
              <p><strong>Number of students :</strong> {{ classs.student_count }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { BASE_URL } from "@/assets/config";
import axios from "axios";

export default {
  data() {
    return {
      classes: [],
    };
  },
  mounted() {
    this.getClasses();
  },
  methods: {
    getClasses() {
      const token = localStorage.getItem("token");
      axios
        .get(BASE_URL + "categories/min", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          // Assuming the API response includes an image URL for each class
          this.classes = response.data.data.map((classItem) => ({
            ...classItem,
            image: classItem.image || "default-image-url.jpg", // Provide a default image URL if none is available
          }));
        })
        .catch((error) => {
          console.log(error);
          this.errMessage = "error retrieving data";
        });
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
.screen {
  margin-top: 8%;
  display: flex;
  justify-content: center;
}
.class-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center horizontally */
}

.classess {
  flex-basis: 60%;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 20px;
  margin: 20px; /* Adjust margin to give space between cards */
  display: flex;
  align-items: stretch; /* Ensure card items stretch to full height */
}

.card-body {
  margin: 0;
  display: flex;
  align-items: stretch; /* Ensure card items stretch to full height */
  width: 100%;
}

.image-container {
  padding: 0;
  display: flex;
  align-items: stretch;
}

.text-container {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

p {
  margin-bottom: 10px;
}

.card.classess {
  display: flex;
  height: 150px;
  padding: 0;
  justify-content: center;
  margin: 13px;
  background: var(--darkwhite);
  border: 1px solid var(--MainColor);
  margin-left: 30px;
  margin-right: 30px;
}

strong {
  color: var(--MainColor);
}

.router-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  width: 100%;
}

.class-image {
  margin-left:-20px;
  width: 100%;
  height: 150px; /* Make the image take the full height of the container */
  object-fit: cover; /* Ensure the image covers the entire area without distortion */
  border: 1px solid var(--MainColor);
  border-radius:08px 0px 0px 8px ;
}
</style>
