<template>
  <div class="card-body">
    <div>
      <div class="row">
        <div class="col-md-9">
          <p class="custom-p">Test :</p>
          <p class="out-int">Input:</p>
          <p class="custom-card">{{ input }}</p>
          <p class="out-int">Output:</p>
          <p class="custom-card">{{ output }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    input: null,
    output: null,
  },
};
</script>

<style scoped>
.custom-card {
  border: solid 1px var(--LightGreen);
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  background: var(--WhiteColor);
}
.custom-p {
  color: var(--GreenColor);
  font-weight: bold;
  font-size: large;
}
.out-int {
  color: var(--GreenColor);
  margin-bottom: 0px;
  margin-left: 3px;
}
.card-body {
  height: 100%;
}
</style>
