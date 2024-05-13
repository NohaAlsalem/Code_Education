<template>
  <div class="screen">
    <div class="container text-center col-md-12" style="margin-bottom: 10px">
      <div class="card text-start">
        <div class="card-header">
          <button
            type="button"
            class="btn"
            :class="{ 'custom-button': selectedButton === 1 }"
            @click="selectButton(1)"
          >
            Description
          </button>
          |
          <button
            type="button"
            class="btn"
            :class="{ 'custom-button': selectedButton === 2 }"
            @click="selectButton(2)"
          >
            Solution
          </button>
          |
          <button
            type="button"
            class="btn"
            :class="{ 'custom-button': selectedButton === 3 }"
            @click="selectButton(3)"
          >
            Tests
          </button>
        </div>
        <Description v-if="description"> </Description>
        <Solution v-else-if="solution"></Solution>
        <Tests v-else></Tests>
      </div>
      <div class="container col-md-12" style="background: var(--WhiteColor)">
        <div class="row">
          <button
            type="button"
            class="row btn btn-success mb-2 ms-2 mt-4 me-2"
            style="background: var(--GreenColor)"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Description from "../../components/Description.vue";
import Solution from "../../components/Solution.vue";
import Tests from "../../components/Tests.vue";
export default {
  components: { Description, Solution, Tests },
  data() {
    return {
      selectedButton: 1,
      description: true,
      solution: false,
      tests: false,
    };
  },
  methods: {
    selectButton(buttonNumber) {
      this.selectedButton = buttonNumber;
      if (this.selectedButton === 1) {
        this.description = true;
        this.solution = false;
        this.tests = false;
      } else if (this.selectedButton === 2) {
        this.solution = true;
        this.description = false;
        this.tests = false;
      } else {
        this.tests = true;
        this.solution = false;
        this.description = false;
      }
    },
  },
};
</script>

<style scoped>
.btn {
  border: none;
}
.custom-button,
.btn:hover {
  color: var(--GreenColor);
  font-weight: bold;
}
.screen {
  background: var(--WhiteColor);
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
}
.card.text-start {
  margin: auto;
}
</style>
