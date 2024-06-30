<template>
  <div>
    <div class="choose mt-4">
      <h6 v-if="questions.length >= 1">2.Choose the correct answer</h6>
      <div v-for="(question, index) in questions" :key="question.id">
        <p>{{ index + 1 }} {{ question.question_text }}</p>
        <div class="radios">
          <div class="form-check mt-0">
            <input
              class="form-check-input"
              type="radio"
              :name="'flexRadioDefault' + index"
              :id="'flexRadioDefault' + index"
            />
            <p>{{ question.choise1 }}</p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              :name="'flexRadioDefault' + index"
              :id="'flexRadioDefault' + index"
              checked
            />
            <p>{{ question.choise2 }}</p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              :name="'flexRadioDefault' + index"
              :id="'flexRadioDefault' + index"
              checked
            />
            <p>{{ question.choise3 }}</p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              :name="'flexRadioDefault' + index"
              :id="'flexRadioDefault' + index"
              checked
            />
            <p>{{ question.choise4 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: [],
  },

  data() {
    return {
      selectedButton: 1,
    };
  },
  methods: {},
};
</script>

<style scoped>
h6 {
  color: var(--GreenColor);
  font-weight: bold;
}
.bttn {
  background: var(--GreenColor);
  color: white;
  padding: 0 20px;
  border-radius: 10px;
  border: none;
}
p {
  color: var(--GreenColor);
}

.screen {
  padding: 20px 40px;
  /* background: var(--WhiteColor); */
  height: 100vh;
  /* height: calc(100vh-72px); */
}

.btn {
  border: none;
  color: var(--GreenOpacity);
}

.card {
  border: 1px solid var(--GreenOpacity);
}

.custom-button,
.btn:hover,
.bttn:hover {
  color: var(--GreenColor);
  font-weight: bold;
}

.card-body .form-control {
  margin: 0;
  height: 100vh;
}
</style>
