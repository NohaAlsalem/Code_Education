<template>
  <div class="r">
    <div class="container col-md-12 mb-2 ms-4">
      <p
        class="mt-5"
        style="color: var(--GreenColor); font-weight: bold; font-size: 18px"
      >
        Enter the number of test cases you want
      </p>
      <div class="row">
        <div class="form-group col-md-4" style="background: var(--WhiteColor)">
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
                color: var(--GreenColor);
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
          <div v-if="selectedInputType === 'String'">
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
            style="background: var(--WhiteColor)"
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
                      v-model="minimumValue"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum length</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      v-model="maximumValue"
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
            style="background: var(--WhiteColor)"
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
                      value="1"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      value="1"
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
                      value="1"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      value="1"
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
                      value="1"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum value</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      value="1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="selectedInputType === 'DOUBLE_ARRAY'"
            style="background: var(--WhiteColor)"
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
                      value="1"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      value="1"
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
                      value="1"
                    />
                  </div>
                  <div class="col-md-6">
                    <p>maximum range</p>
                    <input
                      type="number"
                      class="form-control mb-3"
                      id="exampleFormControlInput1"
                      value="1"
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
                      value="1"
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
        </div>
        <div class="col-md-2" style="background: var(--WhiteColor)">
          <button
            type="button"
            class="btn mb-3"
            style="background: var(--GreenColor); color: white"
            @click="addTestCase"
          >
            Add test case
          </button>
          <button
            type="button"
            class="btn mb-3"
            style="background: var(--GreenColor); color: white"
            @click="GenerateTest"
          >
            generate tests
          </button>
        </div>

        <div class="col-md-6" style="background: var(--WhiteColor)">
          <div
            v-if="tests.length"
            class="text-center"
            style="
              margin-top: 10px;
              margin-bottom: 10px;
              height: 400px;
              overflow-y: auto;
            "
          >
            <div class="card text-start">
              <div class="card-header">Your test:</div>
              <div class="card-body">
                <div v-for="(test, index) in tests" :key="index">
                  <div class="row custom-card">
                    <div class="col-md-9">
                      <p class="custom-p">Test {{ index + 1 }}:</p>
                      <p>Type: {{ test.type }}</p>
                      <p
                        v-if="test.type === 'INTEGER' || test.type === 'DOUBLE'"
                      >
                        Minimum Value: {{ test.minimumValue }}
                      </p>
                      <p
                        v-if="test.type === 'INTEGER' || test.type === 'DOUBLE'"
                      >
                        Maximum Value: {{ test.maximumValue }}
                      </p>
                      <p
                        v-if="
                          test.type === 'STRING' || test.type === 'STRING_ARRAY'
                        "
                      >
                        First Character Range: {{ test.FirstCharacterRange }}
                      </p>
                      <p
                        v-if="
                          test.type === 'STRING' || test.type === 'STRING_ARRAY'
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
                    <button
                      type="button"
                      class="btn col-md-2"
                      style="background: var(--GreenColor); color: white"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "@/assets/config";
export default {
  props: ["code", "language"],
  data() {
    return {
      tests: [],
      formData: {
        lang: this.language,
        code: this.code,
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
    GenerateTest() {
      const token = localStorage.getItem("token");
      console.log(token);
      this.setModel();
      console.log(this.formData);
      console.log(this.model);
      axios
        .post(BASE_URL + "problems/generate-test-cases", this.formData, {
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
    setModel() {
      let modelString = `${this.testNumber}\n`;

      this.tests.forEach((test) => {
        modelString += `${test.type} ${test.minimumValue} ${test.maximumValue} ${test.rowMinimumValue} ${test.rowMaximumValue} ${test.colMinimumValue} ${test.colMaximumValue}\n`;
      });

      modelString += "EXIT";
      this.model = modelString;
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
.r {
  background: var(--WhiteColor);
  height: 100vh;
}
.custom-card {
  border: solid 1px var(--LightGreen);
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  background: var(--WhiteColor);
}
.btn {
  height: 30px;
  text-align: center;
}
.btn.dropdown-toggle {
  color: var(--GreenColor);
  background: white;
}
.dropdown-item:hover {
  cursor: pointer;
}
.dropdown-item:click {
  background: var(--LightGreen);
}
.selected {
  background-color: var(--GreenColor);
  color: white;
}
.screen {
  margin-bottom: 10px;
}
.custom-p {
  color: var(--GreenColor);
  font-weight: bold;
}
</style>
