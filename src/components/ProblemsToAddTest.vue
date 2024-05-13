<template>
  <NavBar></NavBar>
  <div>
    <div class="ms-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col me-0">
            <div class="d-flex flex-row ms-5">
              <div class="p-2">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Difficulty
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Difficulty</a></li>
                    <li><a class="dropdown-item" href="#">status</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-2">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Statuse
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-2">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Tags
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="p-2">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-danger dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    sort
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Separated link</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col ms-0">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Search questions"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <!-- <div class="absolute inset-y-0 right-0 pr-3 pt-2">icon</div> -->
            </div>
          </div>
          <div class="col mt-5"></div>
        </div>
      </div>
      <div class="me-5">
        <table class="table">
          <thead>
            <tr class="colored-header">
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Language</th>
              <th scope="col">Difficulty</th>
              <th scope="col">Tags</th>
              <th scope="col">Operation</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="problem in problems" :key="problem.id">
              <th scope="row">{{ problem.id }}</th>
              <td>{{ problem.title }}</td>
              <td>{{ problem.Language }}</td>
              <td>{{ problem.Difficulty }}</td>
              <td>
                <button
                  type="button"
                  class="custom-btn"
                  style="pointer-events: none"
                >
                  {{ problem.Tags }}
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-success"
                  @click="goToCreateTest(problem)"
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer class="page-footer mt-3 mb-3">
        <div class="p-3">
          <pagination
            :total-items="100"
            :items-per-page="10"
            :current-page="currentPage"
            @pageChanged="handlePageChange"
          />
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Pagination from "@/components/Pagination.vue";
import Table from "@/components/Table.vue";
export default {
  components: {
    NavBar,
    Pagination,
    Table,
  },
  props:['id'],
  data() {
    return {
      currentPage: 1,
      problems: [
        {
          id: 1,
          title: "Return Length of Arguments Passed",
          Language: "C++",
          Difficulty: "Return Length of Arguments Passed",
          Tags: "Array",
        },
        {
          id: 2,
          title: "Return Length of Arguments Passed",
          Language: "C++",
          Difficulty: "Return Length of Arguments Passed",
          Tags: "hash table",
        },
      ],
    };
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
    },
    goToCreateTest(problem) {
      console.log(this.$route.params.id);
      this.$router.push({
        name: "createtest",
        query: {
          id:this.$route.params.id,
          problemId: problem.id,
          title: problem.title,
          Language: problem.Language,
          Difficulty: problem.Difficulty,
          Tags: problem.Tags,
        },
      });
    },
  },
};
</script>

<style scoped>
.btn-group .btn {
  margin-top: 3rem;
  background: var(--darkwhite);
  border: none;
  color: var(--GreenColor);
}

.input-group .form-control {
  margin-top: 3.5rem;
  background: var(--WhiteColor);
  border: 1px solid var(--LightGreen);
}

.input-group .form-control::placeholder {
  color: var(--LightGreen);
}

.Divider {
  border-top: 1px solid var(--LightGreen) !important;
  /* border-bottom: 1px solid  var(--LightGreen)!important; */
  /* height: 0.5px; */
  margin: 0px 100px;
}
.page-footer {
}

p {
  color: var(--GreenColor);
  margin-bottom: 0;
}

.page-footer .btn {
  border: 1px solid var(--GreenColor);
  color: var(--GreenColor);
  background: var(--LightGreen);
}
</style>
