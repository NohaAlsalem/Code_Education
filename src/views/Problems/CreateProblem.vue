<template>
  <NavBar></NavBar>
  <div class="r">
    <div class="container col-md-12 ms-3 pt-4">
      <div class="row">
        <div class="form-group col-md-6">
          <label for="exampleFormControlInput1">Problem name</label>
          <input
            v-model="formData.name"
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
          />
        </div>
        <div class="btn-group col-md-6">
          <label for="exampleFormControlInput1">Language:</label>
          <button
            type="button"
            class="btn btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            {{ selectedLanguage || "Language" }}
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" @click="setSelectedLanguage('C++')"
                >C++</a
              >
            </li>
            <li>
              <a class="dropdown-item" @click="setSelectedLanguage('Java')"
                >Java</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="row d-flex justify-content-space-between">
        <div class="form-group col-md-6">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            v-model="formData.description"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <div class="form-group col-md-6">
          <label for="exampleFormControlTextarea1">Solution</label>
          <textarea
            v-model="formData.teacher_code_solve"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
      </div>

      <div class="row">
        <div class="col me-5">
          <div class="d-flex flex-row mb-2 mt-2">
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
          </div>
        </div>
        <div class="col"></div>
      </div>

      <div class="row">
        <div class="container col-md-12">
          <div class="form-group col-md-4">
            <label for="exampleFormControlInput1"
              >Add tags for this problem</label
            >
            <div>
              <div class="btn-group mt-0 mb-0">
                <button
                  type="button"
                  class="btn btn-danger dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                {{ "Tags" ||  selectedTag }}
                </button>
                <ul class="dropdown-menu">
                  <li v-for="tag in tags" :key="tag.id">
                    <a class="dropdown-item" @click="submitTag(tag.id,tag.name)">{{
                      tag.name
                    }} {{ tag.id }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn mb-3 mt-0"
        style="background: var(--GreenColor); color: white"
        @click="addTag()"
      >
        Add tag
      </button>
      <p 
        v-for="tag in formData.tags"
        :key="tag"
        class="ms-2"
        style="color: black"
      >
        {{ tag }}
      </p>
      <input
        v-model="formData.hint1"
        class="row form-control mb-3 ms-1 col-md-6"
        id="exampleFormControlInput1"
        placeholder="Enter first hint"
      />
      <input
        v-model="formData.hint2"
        class="row form-control mb-3 ms-1 col-md-6"
        id="exampleFormControlInput1"
        placeholder="Enter second hint"
      />
    </div>
    <div class="d-flex justify-content-start ms-4">
      <div>
        <label class="form-check-label" for="generateTestCheckbox">
          <input
            class="form-check-input"
            type="radio"
            id="generateTestCheckbox"
            @click="navigateToGenerateTest"
            :checked="selectedOption === 'generateTest'"
          />
          Generate test case
        </label>
      </div>
      <div>
        <label class="form-check-label ms-5" for="addManuallyTestRadio">
          <input
            class="form-check-input"
            type="radio"
            id="addManuallyTestRadio"
            @click="navigateToAddManuallyTest"
            :checked="selectedOption === 'addManuallyTest'"
          />
          Add manually test case
        </label>
      </div>
    </div>
    <div style="background: var(--WhiteColor)">
      <AddManuallyTest
        @tests-updated="handleTestsUpdated"
        :language="formData.language"
        :code="formData.teacher_code_solve"
        v-if="selectedOption === 'addManuallyTest'"
      ></AddManuallyTest>
      <Generate2 v-if="selectedOption === 'generateTest'"></Generate2>
    </div>

    <div class="container col-md-12" style="background: var(--WhiteColor)">
      <router-link :to="{ name: 'confirmproblem' }">
        <div class="row">
          <button
            type="button"
            class="row btn btn-success mb-2 ms-4 mt-4"
            style="background: var(--GreenColor)"
            @click="addProblem"
          >
            Create
          </button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import codeEdu from "@/components/codeEdu.vue";
import AddManuallyTest from "@/components/AddManuallyTest.vue";
import NavBar from "@/components/NavBar.vue";
import Generate2 from "@/components/Generate2.vue";
import axios from "axios";
import { BASE_URL } from "@/assets/config";
export default {
  components: {
    TopBar,
    codeEdu,
    AddManuallyTest,
    Generate2,
    NavBar,
  },
  data() {
    return {
      selectedOption: null,
      selectedLanguage: "",
      selectedTag:"",
      tags: [],
   
      newTag: null,
      formData: {
        name: "",
        teacher_code_solve: "",
        language: "",
        description: "",
        tags: [],
        test_cases: [],
        hint1: "",
        hint2: "",
      },
    };
  },
  mounted() {
    this.getTags();
  },
  methods: {
    navigateToGenerateTest() {
      this.selectedOption = "generateTest";
      console.log(this.selectedOption);
    },
    navigateToAddManuallyTest() {
      this.selectedOption = "addManuallyTest";
      console.log(this.selectedOption);
    },
    setSelectedLanguage(language) {
      if (language === "C++") {
        this.selectedLanguage = "C++"; // Set variable 1 to a value for C++
        this.formData.language = 1;
        console.log("Variable 1 set to: " + this.selectedLanguage);
      } else if (language === "Java") {
        this.selectedLanguage = "Java"; // Set variable 2 to a value for Java
        this.formData.language = 2;
        console.log("Variable 2 set to: " + this.selectedLanguage);
      }
    },
    submitTag(id,name) {
      this.newTag = id;
      this.selectedTag=name;
      console.log(this.selectedTag);
      console.log(this.newTag);
    },
    addTag() {
      if (this.newTag !== null) {
        this.formData.tags.push(this.newTag);
        this.newTag = "";
        console.log("Tags:", this.formData.tags);
      }
    },
    handleTestsUpdated(tests) {
      this.formData.test_cases = tests; // Update the received tests list
      console.log("Received Tests:", this.formData.test_cases);
    },
    addProblem() {
      const token = localStorage.getItem("token");
      console.log(this.formData);
      console.log(this.formData.test_cases);
      console.log(this.formData.hint1);
      console.log(this.formData.hint2);
      console.log(token);
      axios
        .post(BASE_URL + "problems/", this.formData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          // this.mesaage = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.message);
          this.error = error;
        });
    },

    getTags() {
      const token = localStorage.getItem("token");
      axios
        .get(BASE_URL + "problems/tags", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.tags = response.data;
          console.log(this.tags);
        })
        .catch((error) => {
          console.log(error);
          this.errMessage = "error retrieving data";
        });
    },
  },
};
</script>

<style scoped>
.r {
  background: var(--WhiteColor);
  height: 100%;
}
.btn-group .btn {
  background: var(--LightGreen);
  border: none;
  color: var(--GreenColor);
}
.form-check-input[type="radio"] {
  appearance: none;

  border-radius: 50%;
  border: 1.5px solid var(--GreenColor);
  outline: none;
  transition: border-color 0.2s ease-in-out;
}

.form-check-input[type="radio"]:checked {
  border-color: var(--BlueColor);
}
.btn.btn-danger.dropdown-toggle {
  margin-bottom: 3rem;
  margin-top: 1.5rem;
  background: var(--darkwhite);
  border: none;
  color: var(--GreenColor);
}
</style>
