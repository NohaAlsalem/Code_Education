<template>
  <NavBar></NavBar>
  <div class="container class-cards mt-4">
    <div v-for="classs in classes" :key="classs.id" class="card classess">
      <router-link
        :to="{
          name: 'classdetails',
          params: {
            id: classs.id,
            class_name:classs.category_name,
            class_subject:classs.subject_name
          },
        }"
        class="router-link"
      >
        <div class="card-body row">
          <p class="col-md-4">
            <strong>Class:</strong> {{ classs.category_name }}
          </p>
          <p class="col-md-4">
            <strong>Subject: </strong>{{ classs.subject_name }}
          </p>
          <p class="col-md-4">
            <strong>Number of students:</strong> {{ classs.student_count }}
          </p>
        </div>
      </router-link>
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
          this.classes = response.data.data;
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

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.class-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.classess {
  flex-basis: 100%;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.card-body {
  margin: 0;
}

p {
  margin-bottom: 10px;
}
.card.classess {
  margin: 13px;
  background: var(--WhiteColor);
}
strong {
  color: var(--GreenColor);
}
.router-link {
  text-decoration: none;
  color: inherit;
}
</style>
