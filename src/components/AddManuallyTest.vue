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
          style="background: var(--MainColor); color: white"
          @click="addTest"
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
                <div class="card-header">Your test:</div>
                <div class="card-body">
                  <div
                    v-for="(test, index) in test_cases"
                    :key="index"
                    class="row"
                  >
                    <h6 class="col-md-9">
                      <div class="col-md-6">
                        <p>{{ test }}</p>
                      </div>
                    </h6>
                    <button
                      type="button"
                      class="btn col-md-2 mb-3"
                      style="background: var(--MainColor); color: white"
                      @click="deleteTest(index)"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn mb-3 col-md-2 mt-2"
          style="background: var(--MainColor); color: white"
          @click="sendTestsToParent"
        >
          submit test cases
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTest: "",
      test_cases: [],
    };
  },
  methods: {
    addTest() {
      if (this.newTest.trim() !== "") {
        this.test_cases.push(this.newTest.trim());
        this.newTest = "";
        console.log("Tests:", this.test_cases);
      }
    },
    deleteTest(index) {
      this.test_cases.splice(index, 1);
    },
    sendTestsToParent() {
      this.$emit("tests-updated", this.test_cases);
    },
  },
};
</script>
<style scoped>
input{
  border:1px solid var(--MainColor)
}
</style>
