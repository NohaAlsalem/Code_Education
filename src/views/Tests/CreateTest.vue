<template>
  <div class="full-screen-background">
    <div class="r m-5">
      <div class="container col-md-12 m-1">
        <div class="mt-0">
          <div>
            <div class="mt-4 p-0">
              <p>Test Name</p>
            </div>
          </div>
        </div>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            v-model="formData.name"
            required
          />
        </div>
        <div class="row mt-0">
          <div class="col-8">
            <div class="mt-4 p-0">
              <p>Enter mark</p>
            </div>
          </div>
        </div>
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            v-model="formData.mark"
            required
          />
        </div>
        <div class="container mt-4 p-0">
          <p>Add problem to test:</p>
        </div>

        <div>
          <router-link
            :to="{
              name: 'problemsToaddTotest',
              params: { id: $route.params.id },
            }"
          >
            <button type="button" class="btn btn-success mb-2">Add</button>
          </router-link>
        </div>
        <div v-if="problemId" class="row input-group">
          <div class="me-5">
            <table class="table">
              <thead>
                <tr class="colored-header">
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Language</th>
                  <th scope="col">Difficulty</th>
                  <th scope="col">Tags</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{{ problemId }}</th>
                  <td>{{ title }}</td>
                  <td>{{ Language }}</td>
                  <td>{{ Difficulty }}</td>
                  <td>
                    <button
                      type="button"
                      class="custom-btn"
                      style="pointer-events: none"
                    >
                      {{ Tags }}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row m-5">
          <div class="d-flex justify-content-center">
            <button
              @click="addTest"
              type="button"
              class="btn btn-success mb-2 col-md-6"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { BASE_URL } from "@/assets/config";
import axios from "axios";

export default {
  components: {
    NavBar,
  },
  props: ["problemId", "title", "Language", "Difficulty", "Tags", "id"],
  data() {
    return {
      formData: {
        problem_id: this.problemId,
        category_id: this.$route.params.id,
        name: "",
        mark: 0,
      },
    };
  },
  mounted() {
    this.loadFormData();
    console.log(this.problemId);
    console.log(this.$route.params.id);
  },
  watch: {
    formData: {
      handler(newFormData) {
        localStorage.setItem("formData", JSON.stringify(newFormData));
      },
      deep: true,
    },
  },
  methods: {
    loadFormData() {
      const savedFormData = localStorage.getItem("formData");
      if (savedFormData) {
        this.formData = JSON.parse(savedFormData);
      }
    },
    addTest() {
      const token = localStorage.getItem("token");
      console.log(this.formData);
      console.log(token);
      axios
        .post(BASE_URL + "assessment/create", this.formData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          // this.message = response.data;
          console.log(response.data.message);
        })
        .catch((error) => {
          console.log(error.message);
          this.error = error;
        });
    },
  },
};
</script>

<style scoped>
.full-screen-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--darkwhite); /* gray color */
  z-index: -1; /* Ensure it stays in the background */
}

.r {
  height: 87%;
  border: solid 1px var(--MainColor);
  border-radius: 10px;
  background-color: white; /* Ensure content background is white */
  padding: 20px;
  margin-bottom: 10px;
}
p {
  color: var(--MainColor);
  font-weight: bold;
}

h6 {
  color: var(--MainColor);
}

.btn {
  background: var(--MainColor);
}
.btn:hover {
  background: var(--MainColor);
}
.input-group .form-control {
  background: var(--WhiteColor);
  border: 1px solid var(--MainColor);
  padding: 10px;
  margin-right: 20px;
}

.form-group .form-control ::placeholder {
  display: block;
  margin-bottom: 6px;
  color: var(--LightGreen);
}
</style>
