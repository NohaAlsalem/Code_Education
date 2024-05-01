<template>
  <div class="r">
    <div class="col-md-12 ms-3">
      <div class="row">
        <div class="form-group col-md-4">
          <div data-mdb-input-init class="form-outline">
            <label for="exampleFormControlInput1"
              ><h6>Enter the number of test cases you want</h6></label
            >

            <input
              type="number"
              id="typeNumber"
              class="form-control"
              value="1"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn mb-3 col-md-2"
            style="background: var(--GreenColor); color: white"
          >
            Add hint
          </button>
        </div>
      </div>
      <div class="row">
        <div class="btn-group col-md-4">
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
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </div>
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
