<template>
  <div class="r">
    <div class="mt-4">
      <div class="container col-md-12">
        <div class="form-group col-md-4">
        <input
          type="email"
          class="form-control mb-3"
          id="exampleFormControlInput1"
          placeholder="Enter input for test case"
        />
      </div>
      <button
        type="button"
        class="btn mb-3 col-md-2"
        style="background: var(--GreenColor); color: white"
      >
        Add test case
      </button>
      <div class="row">
        <div class="container col-md-12">
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
                <div v-for="test in tests" :key="test.id" class="row">
                  <h6 class="col-md-9">
                    Test{{ test.id }}:
                    <div class="col-md-6">
                      <p>{{ test.input }}</p>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      tests: [
        {
          id: 1,
          input: "1",
        },
        {
          id: 1,
          input: "1",
        },
        {
          id: 1,
          input: "1",
        },
        {
          id: 1,
          input: "1",
        },
        {
          id: 1,
          input: "1",
        },
        {
          id: 1,
          input: "1",
        },
        {
          id: 1,
          input: "1",
        },
        {
          id: 1,
          input: "1",
        },
        {
          id: 1,
          input: "1",
        },
      ],
    };
  },
};
</script>

<style scoped>
.r {
  background: var(--WhiteColor);
  height: 100%;
}
.btn {
  height: 30px;
  text-align: center;
}
</style>
