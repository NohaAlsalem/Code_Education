<template>
    <NavBar></NavBar>
    <div class="screen pt-5">
      <div class="content">
        <div class="cont">
          <div class="container col-md-12 pt-5">
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
              <div class="btn-group col-md-3">
                <label for="exampleFormControlInput1">Language:</label>
                <button
                  type="button"
                  class="btn dropdown-toggle btn-danger dropdown-toggle ms-2"
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
                  required
                  v-model="formData.description"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="12"
                ></textarea>
              </div>
              <div class="form-group col-md-6">
                <label for="exampleFormControlTextarea1">Solution</label>
                <textarea
                  v-model="formData.teacher_code_solve"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="12"
                ></textarea>
              </div>
            </div>
  
            <div class="row">
              <div class="col me-5">
                <div class="d-flex flex-row mt-2">
                  <div class="p-2">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-danger dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        {{ selectedDifficulty || "Difficulty" }}
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            class="dropdown-item"
                            @click="setSelectedDifficulty('Easy')"
                            >Easy</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            @click="setSelectedDifficulty('Medium')"
                            >Medium</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            @click="setSelectedDifficulty('Hard')"
                            >Hard</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="row mb-0">
              <div class="container col-md-12">
                <div class="form-group col-md-4">
                  <label for="exampleFormControlInput1"
                    >Add tags for this problem</label
                  >
                  <div>
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-danger dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        {{ "Tags" || selectedTag }}
                      </button>
                      <ul class="dropdown-menu">
                        <li v-for="tag in tags" :key="tag.id">
                          <a
                            class="dropdown-item"
                            @click="submitTag(tag.id, tag.name)"
                            >{{ tag.name }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div v-if="selectedTags" class="me-0 mt-0">
              <div v-for="(tag, index) in selectedTags" :key="index" class="me-0">
                <button type="button" class="custom-btn me-0 mt-0 tag-btn">
                  {{ tag }}
                  <i
                    @click.stop="deleteTag(index)"
                    class="fas fa-times text-danger ms-2 mt-0 me-0"
                    data-bs-toggle="tooltip"
                    title="Delete"
                    style="cursor: pointer"
                  ></i>
                </button>
              </div>
            </div>
  
            <p
              class="btn text-add-btn ps-2 mt-0"
              data-bs-toggle="modal"
              data-bs-target="#addTagModal"
            >
              Add new tag
            </p>
  
            <input
              v-model="formData.hint1"
              class="form-control mb-3 ms-1 me-5 hint"
              id="exampleFormControlInput1"
              placeholder="Enter first hint"
            />
            <input
              v-model="formData.hint2"
              class="form-control mb-3 ms-1 hint"
              id="exampleFormControlInput1"
              placeholder="Enter second hint"
            />
          </div>
          <div class="d-flex justify-content-start select-test-type">
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
          <div>
            <AddManuallyTest
              @tests-updated="handleTestsUpdated"
              :language="formData.language"
              :code="formData.teacher_code_solve"
              v-if="selectedOption === 'addManuallyTest'"
            ></AddManuallyTest>
            <Generate2
              @tests-updated="handleTestsUpdated"
              :code="formData.teacher_code_solve"
              :language="formData.language"
              v-if="selectedOption === 'generateTest'"
            ></Generate2>
          </div>
          <div class="container col-md-12">
            <div class="row">
              <div class="d-flex justify-content-center">
                <button
                  type="button"
                  class="row btn btn-create mb-2 ms-4 mt-4"
                  style="background: var(--MainColor)"
                  @click="addProblem"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="addTagModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="passwordModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body" style="background-color: var(--WhiteColor)">
            <div class="form-group">
              <label for="addTags">Add your tag:</label>
              <input
                v-model="formDataTag.name"
                id="addTags"
                class="form-control"
                type="text"
                placeholder="Enter your tag"
              />
            </div>
          </div>
          <div class="modal-footer" style="background-color: var(--WhiteColor)">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn"
              style="background: var(--MainColor); color: white"
              data-bs-dismiss="modal"
              @click="addTag"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
    <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />
  </template>
  
  <script>
  import TopBar from "@/components/TopBar.vue";
  import codeEdu from "@/components/codeEdu.vue";
  import AddManuallyTest from "@/components/AddManuallyTest.vue";
  import NavBar from "@/components/NavBar.vue";
  import Generate2 from "@/components/Generate2.vue";
  import axios from "axios";
  import Alert from "../../components/Alert.vue";
  import { BASE_URL } from "@/assets/config";
  export default {
    components: {
      Alert,
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
        selectedDifficulty: "",
        selectedTag: "",
        tags: [],
        selectedTags: [],
        alertType: "",
        alertMessage: "",
        newTag: null,
        formDataTag: {
          name: "",
        },
        formData: {
          name: "",
          teacher_code_solve: "",
          language: "",
          description: "",
          tags: [],
          test_cases: [],
          hint1: "",
          hint2: "",
          diffculty: "",
        },
      };
    },
    mounted() {
      this.getTags();
    },
    methods: {
      clearAlert() {
        this.alertType = "";
        this.alertMessage = "";
      },
      deleteTag(index) {
        this.selectedTags.splice(index, 1);
        this.formData.tags.splice(index, 1); // Also remove from formData.tags
      },
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
      setSelectedDifficulty(diff) {
        this.selectedDifficulty = diff;
        this.formData.diffculty = diff;
      },
      submitTag(id, name) {
        this.newTag = id;
        this.selectedTag = name;
        this.formData.tags.push(this.newTag);
        this.selectedTags.push(this.selectedTag);
        console.log(this.selectedTag);
        console.log(this.newTag);
      },
      addTag() {
        const token = localStorage.getItem("token");
  
        console.log(token);
        axios
          .post(BASE_URL + "problems/add-tag", this.formDataTag, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            // this.mesaage = response.data;
            this.alertType = "success";
            this.alertMessage = response.data.message;
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error.message);
            this.alertType = "error";
            this.alertMessage = error.message;
            this.error = error;
          });
      },
      handleTestsUpdated(tests) {
        this.formData.test_cases = tests; // Update the received tests list
        console.log("Received Tests:", this.formData.test_cases);
      },
      addProblem() {
        const token = localStorage.getItem("token");
        console.log(this.formData);
        console.log("this is testss from generate" + this.formData.test_cases);
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
            this.alertType = "success";
            this.alertMessage = "Problem added successfully";
          })
          .catch((error) => {
            console.log(error.message);
            this.error = error;
            this.alertType = "error";
            this.alertMessage = "Error deleting problem: " + error.message;
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
  body,
  html {
    height: 100%;
    margin: 0;
    background-color: var(--GrayColor);
  }
  .screen {
    background: var(--darkwhite);
    margin-top: 6%;
    padding: 20px;
  }
  .button-add-tag {
    margin-left: 10px;
    margin-bottom: -10px;
  }
  .cont {
    background: white;
    padding: 25px;
    border-radius: 10px;
    border: 1px solid var(--MainColor);
  }
  .select-test-type {
    margin-left: 65px;
  }
  .router-link {
    color: inherit;
    text-decoration: none;
  }
  .btn-group .btn {
    background: var(--LightGreen);
    border: none;
    color: var(--MainColor);
  }
  .text-add-btn {
    color: blue;
  }
  .btn-create {
    background: var(--MainColor);
    color: white;
  }
  .form-check-input[type="radio"] {
    appearance: none;
  
    border-radius: 50%;
    border: 1.5px solid var(--MainColor);
    outline: none;
    transition: border-color 0.2s ease-in-out;
  }
  label {
    color: var(--MainColor);
    font-weight: bold;
  }
  .form-check-input[type="radio"]:checked {
    border-color: var(--GreenOpacity);
  }
  .btn.btn-danger.dropdown-toggle {
    margin-bottom: 3rem;
    margin-top: 1.5rem;
    background: var(--MainColor);
    border: 1px solid var(--MainColor);
    border-radius: 8px;
    color: white;
  }
  .toggle-lang {
    height: 50px;
    background: var(--MainColor);
    color: white;
  }
  .form-group .form-control ::placeholder {
    display: block;
    margin-bottom: 6px;
    color: var(--LightGreen);
  }
  input,
  textarea {
    border: 1px solid var(--MainColor);
  }
  .hint {
    width: 50%;
  }
  </style>