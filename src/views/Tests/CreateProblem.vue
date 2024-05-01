<template>
  <div class="r">
    <div class="col-md-12 ms-3">
      <div class="form-group col-md-4">
        <label for="exampleFormControlInput1">Problem name</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div class="row">
        <div class="form-group col-md-6">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <div class="form-group col-md-6">
          <label for="exampleFormControlTextarea1">Solution</label>
          <textarea
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
          </div>
        </div>
        <div class="col"></div>
      </div>

      <div class="form-group col-md-4">
        <label for="exampleFormControlInput1" class="mb-2"
          >Add hint for this problem</label
        >
        <input
          type="email"
          class="form-control mb-3"
          id="exampleFormControlInput1"
        />
      </div>
      <button
        type="button"
        class="btn mb-3"
        style="background: var(--GreenColor); color: white"
      >
        Add hint
      </button>
    </div>
    <div class="d-flex justify-content-start ms-3">
      <div>
        <label class="form-check-label" for="generateTestCheckbox">
          <input
            class="form-check-input"
            type="radio"
            id="generateTestCheckbox"
            @click="navigateToGenerateTest"
            :checked="selectedOption === 'generateTest'"
          />
          Generate test
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
          Add manually test
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import codeEdu from "@/components/codeEdu.vue";
import AddManuallyTest from "@/components/AddManuallyTest.vue";
import GenerateTest from "@/components/GenerateTest.vue";
import router from "@/router";
export default {
  components: {
    TopBar,
    codeEdu,
    AddManuallyTest,
    GenerateTest,
  },
  data() {
    return {
      selectedOption: null,
    };
  },
  methods: {
    navigateToGenerateTest() {
      this.selectedOption = "generateTest";
      router.push("/generatetest");
      console.log(this.selectedOption);
    },
    navigateToAddManuallyTest() {
      this.selectedOption = "addManuallyTest";
      router.push("/addmanuallytest");
      console.log(this.selectedOption);
    },
  },
};
</script>

<style scoped>
.r {
  background: var(--WhiteColor);
  height: 100vh;
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
</style>
