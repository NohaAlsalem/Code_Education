<template>
  <div class="r">
    <div class="container col-md-12 mb-2 ms-5">
      <p
        class="mt-5"
        style="color: var(--MainColor); font-weight: bold; font-size: 18px"
      >
        Enter the number of test cases you want
      </p>
      <div class="row ">
        <div class="form-group col-md-4 p-3" style="background: #e7dff9">
          <div>
            <input
              type="email"
              class="form-control mb-3"
              id="exampleFormControlInput1"
              placeholder="Enter input for test case"
              v-model="testNumber"
            />
            <p
              class="mt-3"
              style="
                color: var(--MainColor);
                font-weight: bold;
                font-size: 18px;
              "
            >
              Choose input type:
            </p>
          </div>

          <div class="btn-group col-md-4">
            <button
              type="button"
              class="btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              {{ selectedInputType }}
            </button>
            <ul class="dropdown-menu">
              <li v-for="inputType in inputTypes" :key="inputType.id">
                <a
                  :class="{ selected: inputType === selectedInputType }"
                  class="dropdown-item"
                  @click="selectInputType(inputType)"
                  >{{ inputType.name }}</a
                >
              </li>
            </ul>
          </div>
          <div
            v-if="
              selectedInputType === 'INTEGER' || selectedInputType === 'DOUBLE'
            "
          >
            <p class="mt-3">Enter Range value you want</p>
            <div class="row">
              <div class="container col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <p>minimum value</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="MinimumValue"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum value</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="MaximumValue"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="selectedInputType === 'STRING'">
            <p>Enter Range value you want</p>
            <div class="row">
              <div class="container col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <p>Minimum value</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="MinimumValue"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>Maximum value</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="MaximumValue"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <p>first character range</p>
                    <div class="btn-group col-md-4">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        {{ FirstCharacterRange }}
                      </button>
                      <ul class="dropdown-menu">
                        <li
                          v-for="inputType in characterRange"
                          :key="inputType.id"
                        >
                          <a
                            :class="{
                              selected: inputType === FirstCharacterRange,
                            }"
                            class="dropdown-item"
                            @click="FirstCharacterRangeMethod(inputType)"
                            >{{ inputType.name }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <p>last character range</p>
                    <div class="btn-group col-md-4">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        {{ LastCharacterRange }}
                      </button>
                      <ul class="dropdown-menu">
                        <li
                          v-for="inputType in characterRange"
                          :key="inputType.id"
                        >
                          <a
                            :class="{
                              selected: inputType === LastCharacterRange,
                            }"
                            class="dropdown-item"
                            @click="LastCharacterRangeMethod(inputType)"
                            >{{ inputType.name }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="selectedInputType === 'STRING_ARRAY'"
            style="background:#e7dff9"
          >
            <p>Enter Range number of row in array you want</p>
            <div class="row">
              <div class="container col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <p>minimum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="rowMinimumValue"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="rowMaximumValue"
                    />
                  </div>
                </div>
                <p>Enter Range number of column in array you want</p>
                <div class="row">
                  <div class="col-md-6">
                    <p>minimum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="colMinimumValue"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="colMaximumValue"
                    />
                  </div>
                </div>
                <p>Enter Range value you want</p>

                <div class="row">
                  <div class="col-md-6">
                    <p>minimum length</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="MinimumValue"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum length</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="MaximumValue"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <p>first character range</p>
                    <div class="btn-group col-md-4">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        {{ FirstCharacterRange }}
                      </button>
                      <ul class="dropdown-menu">
                        <li
                          v-for="inputType in characterRange"
                          :key="inputType.id"
                        >
                          <a
                            :class="{
                              selected: inputType === FirstCharacterRange,
                            }"
                            class="dropdown-item"
                            @click="FirstCharacterRangeMethod(inputType)"
                            >{{ inputType.name }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <p>last character range</p>
                    <div class="btn-group col-md-4">
                      <button
                        type="button"
                        class="btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        {{ LastCharacterRange }}
                      </button>
                      <ul class="dropdown-menu">
                        <li
                          v-for="inputType in characterRange"
                          :key="inputType.id"
                        >
                          <a
                            :class="{
                              selected: inputType === LastCharacterRange,
                            }"
                            class="dropdown-item"
                            @click="LastCharacterRangeMethod(inputType)"
                            >{{ inputType.name }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="selectedInputType === 'INTEGER_ARRAY'"
            style="background: #e7dff9"
          >
            <p>Enter Range number of row in array you want</p>
            <div class="row">
              <div class="container col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <p>minimum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="rowMinimumValue"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="rowMaximumValue"
                    />
                  </div>
                </div>
                <p>Enter Range number of column in array you want</p>
                <div class="row">
                  <div class="col-md-6">
                    <p>minimum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="colMinimumValue"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="colMaximumValue"
                    />
                  </div>
                </div>
                <p>Enter Range value you want</p>

                <div class="row">
                  <div class="col-md-6">
                    <p>minimum value</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="MinimumValue"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum value</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="MaximumValue"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="selectedInputType === 'DOUBLE_ARRAY'"
            style="background: #e7dff9"
          >
            <p>Enter Range number of row in array you want</p>
            <div class="row">
              <div class="container col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <p>minimum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="rowMinimumValue"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="rowMaximumValue"
                    />
                  </div>
                </div>
                <p>Enter Range number of column in array you want</p>
                <div class="row">
                  <div class="col-md-6">
                    <p>minimum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="colMinimumValue"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="colMaximumValue"
                    />
                  </div>
                </div>
                <p>Enter Range value you want</p>

                <div class="row">
                  <div class="col-md-6">
                    <p>minimum value</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="MinimumValue"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum value</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="MaximumValue"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn mb-3 mt-2 d-flex justify-content-center align-items-center"
            style="background: var(--GreenColor); color: white"
            @click="addTestCase"
          >
            Save
          </button>
        </div>
        <div class="col-md-2" style="background: #e7dff9">
          <button
            type="button"
            class="btn mt-3 d-flex justify-content-center align-items-center"
            :style="{
             
              background: buttonClicked ? 'gray' : 'var(--GreenColor)',
              color: 'white',
              
            }"
            @click="GenerateTest"
          >
            generate tests
          </button>
          <button
            type="button"
            class="btn example-button mb-3"
            @click="ShowExample"
          >
            show example
          </button>
        </div>

        <div
          v-if="tests.length"
          class="col-md-4"
          style="background: #e7dff9"
        >
          <div
            class="text-center"
            style="
              margin-top: 10px;
              margin-bottom: 10px;
              height: 600px;
              overflow-y: auto;
            "
          >
            <div class="card text-start">
              <div class="card-header">Your test:</div>
              <div class="card-body">
                <div v-if="tests.length">
                  <div v-for="(test, index) in tests" :key="index">
                    <div class="row custom-card">
                      <div class="col-md-9">
                        <p>Type: {{ test.type }}</p>
                        <p
                          v-if="
                            test.type === 'INTEGER' ||
                            test.type === 'DOUBLE' ||
                            test.type === 'STRING_ARRAY' ||
                            test.type === 'DOUBLE_ARRAY' ||
                            test.type === 'INTEGER_ARRAY'
                          "
                        >
                          Minimum Value: {{ test.minimumValue }}
                        </p>
                        <p
                          v-if="
                            test.type === 'INTEGER' ||
                            test.type === 'DOUBLE' ||
                            test.type === 'STRING_ARRAY' ||
                            test.type === 'DOUBLE_ARRAY' ||
                            test.type === 'INTEGER_ARRAY'
                          "
                        >
                          Maximum Value: {{ test.maximumValue }}
                        </p>
                        <p
                          v-if="
                            test.type === 'STRING' ||
                            test.type === 'STRING_ARRAY'
                          "
                        >
                          First Character Range: {{ test.FirstCharacterRange }}
                        </p>
                        <p
                          v-if="
                            test.type === 'STRING' ||
                            test.type === 'STRING_ARRAY'
                          "
                        >
                          Last Character Range: {{ test.LastCharacterRange }}
                        </p>
                        <p
                          v-if="
                            test.type === 'STRING_ARRAY' ||
                            test.type === 'INTEGER_ARRAY' ||
                            test.type === 'DOUBLE_ARRAY'
                          "
                        >
                          Number of Rows: {{ test.rowMinimumValue }} -
                          {{ test.rowMaximumValue }}
                        </p>
                        <p
                          v-if="
                            test.type === 'STRING_ARRAY' ||
                            test.type === 'INTEGER_ARRAY' ||
                            test.type === 'DOUBLE_ARRAY'
                          "
                        >
                          Number of Columns: {{ test.colMinimumValue }} -
                          {{ test.colMaximumValue }}
                        </p>
                      </div>
                      <!-- <button
                      type="button"
                      class="btn col-md-2"
                      style="background: var(--MainColor); color: white"
                      @click="deleteTest(index)"
                    >
                      Delete
                    </button> -->
                    <font-awesome-icon icon="fa-solid fa-trash-alt" class="i" style="color: brown;" @click="deleteTest(index)"  data-bs-toggle="tooltip"
                    title="Delete"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <p id="test-cases-container"></p> -->
        <div
          v-else-if="generatedTests.length"
          class="col-md-4"
          style="background:#e7dff9"
        >
          <div
            class="text-center"
            style="
              margin-top: 10px;
              margin-bottom: 10px;
              height: 600px;
              overflow-y: auto;
            "
          >
            <div
              class="card text-start mb-3"
              v-for="(test, index) in generatedTests"
              :key="index"
            >
              <div class="card-header">Your test:</div>
              <div class="card-body">
                <div class="row custom-card">
                  <p>Test Case {{ index + 1 }}:</p>
                  <ul>
                    <li
                      v-for="(num, numIndex) in splitInput(test.input)"
                      :key="numIndex"
                    >
                      {{ num }}
                    </li>
                  </ul>
                  <p><strong>Output:</strong> {{ test.output }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="responseText" class="col-md-2 card-custom card text-start">
        <div class="card-header">Sample:</div>
        <div class="card-body">{{ responseText }}</div>
      </div>
      <!-- <div v-for="test in generatedTests" :key="test.input">
            <p>Input:</p>
            <ul>
              <li v-for="num in test.input" :key="num">{{ num }}</li>
            </ul>
            <p>Output: {{ test.output }}</p>
          </div> -->
    </div>
  </div>
  <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />
</template>

<script>
import axios from "axios";
import Alert from "../component/Alert.vue";
import { ADMIN_URL } from "@/assets/config";
// import ModalComponent from "../components/ShowSample.vue";
export default {
  components: {
    Alert
    // ModalComponent,
  },
  props: ["code", "language"],
  data() {
    return {
      isModalVisible: false,
      errorMessage: "",
      alertType: "",
      alertMessage: "",
      successMessage: "",
      responseText: "",
      tests: [],
      test_cases: [],
      example: null,
      buttonClicked: false,
      generatedTests: [],
      formData: {
        lang: this.language,
        code: this.code,
        model: this.model,
      },
      formDataExample: {
        model: this.model,
      },
      model: "",
      testNumber: "",
      showInteger: false,
      showString: false,
      showDouble: false,
      showArrayString: false,
      showArrayDouble: false,
      showArrayInteger: false,
      inputTypes: [
        { id: 1, name: "INTEGER" },
        { id: 2, name: "STRING" },
        { id: 3, name: "DOUBLE" },
        { id: 4, name: "STRING_ARRAY" },
        { id: 5, name: "INTEGER_ARRAY" },
        { id: 6, name: "DOUBLE_ARRAY" },
      ],
      characterRange: [
        { id: 1, name: "A" },
        { id: 2, name: "a" },
        { id: 3, name: "z" },
        { id: 4, name: "Z" },
        { id: 5, name: "0" },
        { id: 6, name: "1" },
      ],
      selectedInputType: "INTEGER",
      FirstCharacterRange: "A",
      LastCharacterRange: "A",
      MinimumValue: 1,
      MaximumValue: 1,
      colMaximumValue: 1,
      colMinimumValue: 1,
      rowMinimumValue: 1,
      rowMaximumValue: 1,
    };
  },
  methods: {
    setModel() {
      // Your logic for setModel
    },
    sendTestsToParent() {
      this.$emit("tests-updated", this.test_cases);
    },
    splitInput(input) {
      // Trim the input and split by spaces
      return input.trim().split(/\s+/);
    },
    deleteTest(index) {
      console.log(index);
      this.tests.splice(index, 1);
    },
    ShowExample() {
      const token = localStorage.getItem("token");
      console.log(token);
      this.setModel();
      console.log(this.formData);
      console.log("model" + this.model);
      console.log("model" + this.formData.model);
      console.log("this is model example" + this.formDataExample.model);

      axios
        .post(BASE_URL + "problems/generate-sample", this.formDataExample, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(
            "this is response of show example" + response.data.sample
          );
          this.modalContent = this.responseText;
          this.isModalVisible = true;
          this.responseText = response.data.sample;
        })
        .catch((error) => {
          console.log(error.message);
          this.error = error;
          this.buttonClicked = false;
        });
    },
    clearAlert() {
      this.alertType = "";
      this.alertMessage = "";
    },
    // GenerateTest() {
    //   const token = localStorage.getItem("token");
    //   console.log(token);
    //   this.setModel();
    //   console.log(this.formData);
    //   console.log("model" + this.model);
    //   console.log("model" + this.formData.model);
    //   axios
    //     .post(BASE_URL + "problems/generate-test-cases", this.formData, {
    //       headers: { Authorization: `Bearer ${token}` },
    //     })
    //     .then((response) => {
    //       // this.mesaage = response.data;
    //       console.log(
    //         "this is response of generate" + JSON.stringify(response.data.data)
    //       );
    //       this.generatedTests = JSON.stringify(response.data.data);
    //       console.log("this is response of generate" + this.generatedTests);
    //       // this.generatedTests.forEach(()=>console.log(test.input));

    //       console.log(` ${this.generatedTests[0]}`);
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //       this.error = error;
    //     });
    // },
    GenerateTest() {
      const token = localStorage.getItem("token");
      console.log(token);
      this.setModel();
      console.log(this.formData);
      console.log("model" + this.model);
      this.formDataExample.model = this.formData.model;
      console.log("model" + this.formData.model);
      this.buttonClicked = true;
      axios
        .post(ADMIN_URL + "generate-test-cases", this.formData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.tests = [];
          console.log(
            "this is response of generate" + JSON.stringify(response.data.data)
          );

          // Parse the response data
          this.generatedTests = response.data.data;
          console.log(
            "this is response of generate" + JSON.stringify(this.generatedTests)
          );

          // Iterate over each test case
          this.generatedTests.forEach((test, index) => {
            this.test_cases.push(test.input);
            console.log(`Test Case ${index + 1}:`);
            console.log(`Input: ${test.input}`);
            console.log(`Output: ${test.output}`);

            // Assuming you have some method to update the screen
            // this.updateScreenWithTestCase(index + 1, test.input, test.output);
          });

          console.log("this is test cases" + this.test_cases);
          this.sendTestsToParent();
          this.buttonClicked = false;
          this.successMessage = response.data.message;
        this.alertType = "success";
        
        this.alertMessage = response.data.message;
          
        })

        .catch((error) => {
          console.log(error.message);
          this.error = error;
          this.buttonClicked = false;
          this.error = error;
          // this.alertType = "error";
          if (error.response) {
    this.errorMessage = "Error: " + error.response.data.error;
    this.alertType = "error";
    this.alertMessage = "Error: " + error.response.data.error;
  } else {
    this.errorMessage = "An unknown error occurred.";
    this.alertType = "error";
    this.alertMessage = "An unknown error occurred.";
  }
        });
    },

    updateScreenWithTestCase(testNumber, input, output) {
      // Implement the logic to update your screen with the test case data
      // For example, you might append it to a list in the DOM

      const testCaseElement = document.createElement("p");
      testCaseElement.innerHTML = `
    <p>Test Case ${testNumber}</p>
    <p><strong>Input:</strong> ${input}</p>
    <p><strong>Output:</strong> ${output}</p>
  `;

      // Assuming you have a container element with id 'test-cases-container'
      document
        .getElementById("test-cases-container")
        .appendChild(testCaseElement);
    },

    setModel() {
      let modelString = `${this.testNumber} `;

      this.tests.forEach((test) => {
        if (test.type === "INTEGER" || test.type === "DOUBLE") {
          modelString += ` ${test.type} ${test.minimumValue} ${test.maximumValue} `;
        } else if (test.type === "STRING")
          modelString += ` ${test.type} ${test.minimumValue} ${test.maximumValue} ${test.FirstCharacterRange} ${test.LastCharacterRange} `;
        else if (test.type === "DOUBLE_ARRAY" || test.type === "INTEGER_ARRAY")
          modelString += ` ${test.type} ${test.rowMinimumValue} ${test.rowMaximumValue} ${test.colMinimumValue} ${test.colMaximumValue} ${test.minimumValue} ${test.maximumValue} `;
        else if (test.type === "STRING_ARRAY")
          modelString += ` ${test.type} ${test.rowMinimumValue} ${test.rowMaximumValue} ${test.colMinimumValue} ${test.colMaximumValue} ${test.minimumValue} ${test.maximumValue} ${test.FirstCharacterRange} ${test.LastCharacterRange} `;
      });

      modelString += "EXIT";
      this.model = modelString;
      this.formData.model = modelString;
      this.formDataExample.model = modelString;
    },
    addTestCase() {
      // Push the entered test data to the tests array
      this.tests.push({
        type: this.selectedInputType,
        minimumValue: this.MinimumValue,
        maximumValue: this.MaximumValue,
        FirstCharacterRange: this.FirstCharacterRange,
        LastCharacterRange: this.LastCharacterRange,
        rowMinimumValue: this.rowMinimumValue,
        rowMaximumValue: this.rowMaximumValue,
        colMinimumValue: this.colMinimumValue,
        colMaximumValue: this.colMaximumValue,
      });

      // Reset input fields after adding the test case
      this.resetInputFields();
    },
    resetInputFields() {
      // Reset all input fields
      this.selectedInputType = "INTEGER";
      this.MinimumValue = 1;
      this.MaximumValue = 1;
      this.FirstCharacterRange = "A";
      this.LastCharacterRange = "A";
      this.rowMinimumValue = 1;
      this.rowMaximumValue = 1;
      this.colMinimumValue = 1;
      this.colMaximumValue = 1;
    },
    selectInputType(inputType) {
      this.selectedInputType = inputType.name;
    },
    FirstCharacterRangeMethod(inputType) {
      this.FirstCharacterRange = inputType.name;
    },
    LastCharacterRangeMethod(inputType) {
      this.LastCharacterRange = inputType.name;
    },
    addTestCase() {
      const newTest = {
        id: this.tests.length + 1,
        type: this.selectedInputType,
        maximumValue: this.MaximumValue,
        minimumValue: this.MinimumValue,
        FirstCharacterRange: this.FirstCharacterRange,
        LastCharacterRange: this.LastCharacterRange,
        colMaximumValue: this.colMaximumValue,
        colMinimumValue: this.colMinimumValue,
        rowMinimumValue: this.rowMinimumValue,
        rowMaximumValue: this.rowMaximumValue,
      };
      this.tests.push(newTest);
      this.testInput = "";
      this.selectedInputType = "INTEGER";
      this.FirstCharacterRange = "A";
      this.LastCharacterRange = "A";
      this.MinimumValue = 1;
      this.MaximumValue = 1;
      this.colMaximumValue = 1;
      this.colMinimumValue = 1;
      this.rowMinimumValue = 1;
      this.rowMaximumValue = 1;
    },
  },
};
</script>

<style scoped>
.card-custom {
  height: 220px;
  margin-top: 10px;
  overflow-y: auto;
}
.r {
  /* background: var(--WhiteColor); */
  height: 100%;
}
.example-button {
  color: var(--GreenOpacity);
  font-weight: bold;
  font-size: 16px;
}
.custom-card {
  border: solid 1px var(--LightGreen);
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  background: #e7dff9;
}
#responseDialog {
  display: none;
  border: 1px solid #ccc;
  padding: 20px;
  background: #fff;
}
.btn {
  height: 30px;
  text-align: center;
}
.btn.dropdown-toggle {
  color: var(--MainColor);
  background: white;
}
.dropdown-item:hover {
  cursor: pointer;
}
.dropdown-item:click {
  background: var(--LightGreen);
}
.selected {
  background-color: var(--MainColor);
  color: white;
}
.screen {
  margin-bottom: 10px;
}
.custom-p {
  color: var(--MainColor);
  font-weight: bold;
}
input {
  border: 1px solid var(--MainColor);
}
</style>
