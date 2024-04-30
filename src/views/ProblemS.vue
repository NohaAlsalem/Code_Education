<template>
  <div>
    <NavBar></NavBar>

    <div class="container text-center">
      <div class="row">
        <div class="col me-5">
          <div class="d-flex flex-row mb-5 mt-5">
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
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
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
                  <li><a class="dropdown-item" href="#">Another action</a></li>
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
                  <li><a class="dropdown-item" href="#">Another action</a></li>
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
        <!-- <div class="col"></div> -->

        <div class="col mt-5 mb-3 ms-5">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search questions"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <!-- <div class="absolute inset-y-0 right-0 pr-3 pt-2">icon</div> -->
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                icon
              </button>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>

      <div class="row m-0">
        <div class="col col-lg-0 ms-0">
          <p>#</p>
        </div>
        <div class="col">
          <P>Title</P>
        </div>
        <div class="col-md-auto">
          <P> Statuse</P>
        </div>
        <div class="col col-lg-2">
          <P>Difficulty</P>
        </div>
        <div class="col col-lg-2">
          <P>Level</P>
        </div>
        <div class="col col-lg-2">
          <P>Num of solutions</P>
        </div>
      </div>
    </div>
    <div class="Divider"></div>

    <footer class="page-footer fixed-bottom pt-5 text-center mb-5">
      <div class="text-center p-3 justify-content-cnter align-items-center">
        <button type="button" class="btn btn-outline-info d-inline m-1">
          1
        </button>
        <button type="button" class="btn btn-outline-info">2</button>
      </div>
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style scoped>
.btn-group .btn {
  background: var(--LightGreen);
  border: none;
  color: var(--GreenColor);
}

.input-group .form-control {
  background: var(--WhiteColor);
  border: 1px solid var(--LightGreen);
}

.input-group .form-control::placeholder {
  color: var(--LightGreen);
}

.Divider {
  border-top: 1px solid var(--LightGreen) !important;
  /* border-bottom: 1px solid  var(--LightGreen)!important; */
  /* height: 0.5px; */
  margin: 0px 100px;
}
p {
  color: var(--GreenColor);
  margin-bottom: 0;
}
.page-footer .btn {
  border: 1px solid var(--GreenColor);
  color: var(--GreenColor);
  background: var(--LightGreen);
}
</style>
