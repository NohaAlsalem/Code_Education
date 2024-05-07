<template>
  <div class="r m-5">
    <div class="container col-md-12 m-5">
      <div class="mt-0">
        <div>
          <div class="mt-4 p-0">
            <p>Test Name</p>
          </div>
        </div>
      </div>
      <div class="input-group">
        <input type="text" class="form-control" v-model="TestName" />
      </div>
      <div class="row mt-0">
        <div class="col-8">
          <div class="mt-4 p-0">
            <p>Enter mark</p>
          </div>
        </div>
      </div>
      <div class="input-group">
        <input type="number" class="form-control" v-model="mark" />
      </div>
      <div class="container mt-4 p-0">
        <p>Add problem to test:</p>
      </div>

      <div>
        <router-link :to="{ name: 'problemsToaddTotest' }">
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
          <button type="button" class="btn btn-success mb-2 col-md-6">
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  props: ["problemId", "title", "Language", "Difficulty", "Tags"],
  data() {
    return {
      TestName: "",
      mark: 1,
    };
  },
};
</script>

<style scoped>
.r {
  height: 100%;
  background: var(--WhiteColor);
  border: solid 1px var(--GreenColor);
  border-radius: 10px;
}
p {
  color: var(--GreenColor);
}

h6 {
  color: var(--GreenColor);
}

.btn {
  background: var(--GreenColor);
}

.input-group .form-control {
  background: var(--WhiteColor);
  border: 1px solid var(--LightGreen);
  padding: 10px;
  margin-right: 20px;
}

.form-group .form-control ::placeholder {
  display: block;
  margin-bottom: 6px;
  /* color:#fff; */
  color: var(--LightGreen);
}
</style>
