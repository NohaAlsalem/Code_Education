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
              v-model="testInput"
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
              selectedInputType === 'Integer' || selectedInputType === 'Double'
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
            v-if="selectedInputType === 'String Array'"
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
            v-if="selectedInputType === 'Integer Array'"
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
            v-if="selectedInputType === 'Double Array'"
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
          >
            generate tests
          </button>
        </div>

        <div class="col-md-6" style="background: var(--WhiteColor)">
          <div
            v-if="showTestDetails && tests.length"
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
                <div v-for="test in tests" :key="test.id" class="row">
                  <h6 class="col-md-9">
                    Test{{ test.id }}:
                    <div>
                      <p>{{ test.selectInputType }}</p>
                      <p
                        v-if="
                          selectedInputType === 'Integer' ||
                          selectedInputType === 'Double' ||
                          selectedInputType === 'String'
                        "
                      >
                        <span>Minimum value: {{ test.minimumValue }}</span
                        ><span>Maximum value: {{ test.maximumValue }}</span>
                      </p>
                      <p
                        v-if="
                          selectedInputType === 'String Array' ||
                          selectedInputType === 'Double Array'
                        "
                      >
                        <span>colMinimumValue: {{ test.colMinimumValue }}</span
                        ><span
                          >colMaximumValue: {{ test.colMaximumValue }}</span
                        >
                      </p>
                      <p
                        v-if="
                          selectedInputType === 'String Array' ||
                          selectedInputType === 'Double Array'
                        "
                      >
                        <span>rowMinimumValue: {{ test.rowMinimumValue }}</span
                        ><span
                          >rowMaximumValue: {{ test.rowMaximumValue }}</span
                        >
                      </p>
                      <p v-if="selectedInputType === 'String'">
                        <span
                          >FirstCharacterRange:
                          {{ test.FirstCharacterRange }}</span
                        ><span
                          >LastCharacterRange:
                          {{ test.LastCharacterRange }}</span
                        >
                      </p>
                    </div>
                  </h6>
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
</template>

<script>
export default {
  data() {
    return {
      tests: [],
      testInput: "",
      showTestDetails: false,
      inputTypes: [
        { id: 1, name: "Integer" },
        { id: 2, name: "String" },
        { id: 3, name: "Double" },
        { id: 4, name: "String Array" },
        { id: 5, name: "Integer Array" },
        { id: 6, name: "Double Array" },
      ],
      characterRange: [
        { id: 1, name: "A" },
        { id: 2, name: "a" },
        { id: 3, name: "z" },
        { id: 4, name: "Z" },
        { id: 5, name: "0" },
        { id: 6, name: "1" },
      ],
      selectedInputType: "Integer",
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
      this.selectedInputType = "Integer";
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
.dropdown-item:clic {
  background: var(--LightGreen);
}
.selected {
  background-color: var(--GreenColor);
  color: white;
}
.screen {
  margin-bottom: 10px;
}
</style>
