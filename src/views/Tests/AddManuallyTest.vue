<template>
  <div class="r">
    <div class="col-md-12 ms-3">
      <div class="form-group col-md-4">
        <label for="exampleFormControlInput1"><h6>Test</h6></label>
        <input
          type="email"
          class="form-control mb-3"
          id="exampleFormControlInput1"
        />
        <button
          type="button"
          class="btn mb-3"
          style="background: var(--GreenColor); color: white"
        >
          Add hint
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.r {
  background: var(--WhiteColor);
  height: 100vh;
}
</style>
