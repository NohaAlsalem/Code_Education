<template>
  <div class="r">
    <div class="mt-4">
      <div class="container col-md-12 ms-5">
        <div class="form-group col-md-4">
          <input
            v-model="newTest"
            type="text"
            class="form-control mb-3"
            id="exampleFormControlInput1"
            placeholder="Enter input for test case"
          />
        </div>
        <button
          type="button"
          class="btn mb-3 col-md-2"
          @click="addTest"
          style=" background: var(--GreenColor); color:white"
        >
          Add test case
        </button>

        <div class="row">
          <div class="container col-md-12">
            <div
              v-if="test_cases.length"
              class="text-center"
              style="
                margin-top: 10px;
                margin-bottom: 10px;
                max-height: 400px;
                overflow-y: auto;
              "
            >
              <div class="card text-start">
                <div class="card-header">Output tests:</div>
                <div class="card-body">
                  <div
                    v-for="(test, index) in test_cases"
                    :key="index"
                    class="row"
                  >
                    <h6 class="col-md-9">
                      <div class="col-md-6">
                        <p><strong>Input:</strong> {{ test }}</p>
                        <p>
                          <strong>Output:</strong> {{ output_tests[index] }}
                        </p>
                      </div>
                    </h6>
                    <font-awesome-icon icon="fa-solid fa-trash-alt" class="i" style="color: brown;" @click="deleteTest(index)"  data-bs-toggle="tooltip"
                    title="Delete"/>
                    <!-- <i
                      @click="deleteTest(index)"
                      class="fas fa-trash-alt text-danger col-md-2 mb-3 me-5"
                      data-bs-toggle="tooltip"
                      title="Delete"
                    ></i> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button v-if="test_cases.length >= 1"
          type="button"
          class="btn mb-3 col-md-2 mt-2"
          @click="sendTestsToParent"
          :style="{
            background: buttonClicked ? 'gray' : 'var(--GreenColor)',
            color: 'white',
          }"
        >
          submit test cases
        </button>
      </div>
    </div>
  </div>
  <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />
</template>
<script>
import Alert from "../component/Alert.vue";
import axios from "axios";
import { ADMIN_URL } from "@/assets/config";

export default {
  components:{
    Alert
  },
  props: ["code", "language"],
  data() {
    return {
      buttonClicked: false,
      newTest: "",
      generatedTests: [],
      errorMessage: "",
      alertType: "",
      alertMessage: "",
      successMessage: "",
      formData: {
        lang: this.language,
        code: this.code,
        testCasess: [],
      },
      test_cases: [],
      output_tests: [],
    };
  },
  methods: {
    addTest() {
      if (this.newTest.trim() !== "") {
        this.test_cases.push(this.newTest.trim());
        this.output_tests.push(""); // Initialize the corresponding output as empty
        this.newTest = "";
        console.log("Tests:", this.test_cases);
      }
    },
    deleteTest(index) {
      console.log(index);
      this.test_cases.splice(index, 1);
      this.output_tests.splice(index, 1); // Remove the corresponding output
    },
    sendTestsToParent() {
      this.buttonClicked = true;
      const token = localStorage.getItem("token");

      // Change button color to gray

      const data = {
        language: this.language,
        code: this.code,
        testCasess: this.test_cases,
      };

      console.log("Sending data as JSON:", data);

      axios
        .post(ADMIN_URL + "generateOutputs", data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.generatedTests = response.data.testCasess;
          console.log("Generated tests:", this.generatedTests);

          // Update the output_tests array with the outputs
          this.generatedTests.forEach((test, index) => {
            this.output_tests[index] = test.output;
          });// Notify parent component
          this.$emit("tests-updated", this.test_cases);
          this.buttonClicked = false;
          this.successMessage = response.data.message;
        this.alertType = "success";
        
        this.alertMessage = response.data.message;
        setTimeout(() => {
            this.clearAlert();
          }, 2000);
          // Change button color back to main color
        })
        .catch((error) => {
          console.error(
            "Error:",
            error.response ? error.response.data : error.message
          );
          this.error = error;
          this.buttonClicked = false;
          this.error = error;
          // this.alertType = "error";
          if (error.response) {
    this.errorMessage = "Error: " + error.response.data.message;
    this.alertType = "error";
    this.alertMessage = "Error: " + error.response.data.message;
  } else {
    this.errorMessage = "An unknown error occurred.";
    this.alertType = "error";
    this.alertMessage = "An unknown error occurred.";
  }
  setTimeout(() => {
            this.clearAlert();
          }, 2000);
          // Revert the button color even if the request fails
        });
    },
  },
};
</script>
<style scoped>
 .form-control{
    background: #e7dff9;
  }
</style>