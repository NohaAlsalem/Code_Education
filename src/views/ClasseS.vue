<template>
  <NavBar></NavBar>
  <div class="container class-cards mt-4">
    <div v-for="classs in classes" :key="classs.id" class="card classess">
      <router-link
        :to="{ name: 'classdetails', params: { id: classs.id } }"
        class="router-link"
      >
        <div class="card-body row">
          <p class="col-md-4"><strong>Class:</strong> {{ classs.class }}</p>
          <p class="col-md-4"><strong>Subject:</strong>{{ classs.subject }}</p>
          <p class="col-md-4">
            <strong>Number of students:</strong> {{ classs.numberOfStudents }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  data() {
    return {
      classes: [
        {
          id: 1,
          class: 2,
          subject: "Programming1",
          numberOfStudents: 25,
        },
        {
          id: 2,
          class: 4,
          subject: "Programming1",
          numberOfStudents: 25,
        },
      ],
    };
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
