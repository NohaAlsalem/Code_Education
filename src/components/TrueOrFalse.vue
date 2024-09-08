<template>
  <div>
    <div class="choose mt-4">
      <h6 v-if="questions.length >= 1">2.Choose the correct answer</h6>
      <div v-for="(question, index) in questions" :key="question.id">
        <p>{{ index + 1 }} {{ question.question_text }}</p>
        <div class="radios">
          <div class="form-check mt-0">
            <!-- :checked="question.choise1 === question.correct" -->
            <input
              class="form-check-input"
              type="radio"
              :name="'flexRadioDefault' + index"
              :id="'flexRadioDefault' + index"
              :checked="1 === question.correct"
              disabled
            />
            <p>{{ question.choise1 }}</p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              :name="'flexRadioDefault' + index"
              :id="'flexRadioDefault' + index"
              :checked="2 === question.correct"
              disabled
            />
            <p>{{ question.choise2 }}</p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              :name="'flexRadioDefault' + index"
              :id="'flexRadioDefault' + index"
              :checked="3 === question.correct"
              disabled
            />
            <p>{{ question.choise3 }}</p>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              :name="'flexRadioDefault' + index"
              :id="'flexRadioDefault' + index"
              :checked="4 === question.correct"
              disabled
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
  color: var(--MainColor);
  font-weight: bold;
}
.bttn {
  background: var(--MainColor);
  color: white;
  padding: 0 20px;
  border-radius: 10px;
  border: none;
}
p {
  color: var(--MainColor);
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
  color: var(--MainColor);
  font-weight: bold;
}

.card-body .form-control {
  margin: 0;
  height: 100vh;
}
.form-check {
  background: var(--darkwhite);
  border: 1px solid var(--darkwhite);
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
