<template>
  <TopBar></TopBar>

  <div class="row">
    <div class="container col-md-12">
      <div class="form-sub-main">
        <div
          class="_main_head_as text-center justify-content-center align-items-center mb-0"
        >
          <img class="logo" src="@/assets/images/logoo.png" />
          <codeEdu></codeEdu>
        </div>
        <form @submit.prevent="signIn">
          <div class="form-group">
            <input
              id="email"
              name="email"
              v-model="formData.email"
              class="form-control _ge_de_ol mb-3 mt-5"
              type="text"
              placeholder="username or E-mail"
              required=""
              aria-required="true"
            />
          </div>

          <div class="form-group">
            <input
              id="password"
              type="password"
              v-model="formData.password"
              class="form-control mb-3"
              name="password"
              placeholder="password"
              required="required"
            />
          </div>

          <div class="form-group fg">
            <button class="btn btn_uy" type="submit" :disabled="loading">
              <template v-if="loading">
                <i class="fa fa-spinner fa-spin"></i>
                <p class="load">Loading...</p>
              </template>
              <template v-else>
                <p class="load">Sign In</p>
              </template>
            </button>
          </div>
        </form>
        <div class="txt d-flex">
          <p class="pt-2 p">Forgot Password?</p>
        </div>
      </div>
      <!-- <div class="txt d-flex">
        <p class="pt-2"></p>
        <router-link to="/signup" class="txt-h pt-0 me-4 ms-auto">
          <font-awesome-icon icon="fa-solid fa-bell" />
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import codeEdu from "@/components/codeEdu.vue";
import axios from "axios";
import Alert from "../components/Alert.vue";

export default {
  components: {
    TopBar,
    codeEdu,
    Alert,
  },
  data() {
    return {
      error: null,
      message: "",
      loading: false,
      searchText: "",
      token: "",
      alertType: "",
      alertMessage: "",
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      this.loading = true; // Set loading to true when sign-in starts
      axios
        .post("http://127.0.0.1:8000/api/login", this.formData)
        .then((response) => {
          this.alertType = "success";
          this.alertMessage = response.data.message;
          this.$router.push("/problems");
          this.token = response.data.token;
          localStorage.setItem("token", this.token);
          this.message = response.data.message;
          console.log(this.token + "lknkj");
        })
        .catch((error) => {
          this.alertType = "error";
          this.alertMessage = "Error deleting problem: " + error.message;
          console.log(error);
          this.error = error;
        })
        .finally(() => {
          this.loading = false; // Set loading to false when sign-in finishes
        });
    },
  },
};
</script>

<style scoped>
.row {
  background: var(--GrayColor);
  margin: 0; /* Remove margin that might cause overflow */
  padding: 0; /* Remove padding that might cause overflow */
  width: 100%; /* Ensure it takes full width without overflow */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  height: 100vh;
}
.logo {
  height: 100px;
  width: 100px;
  margin-top: 20px;
}
img {
  max-width: 75%;
  margin: 0;
}

a {
  text-decoration: none;
  outline: none;
  color: #444;
}

.txt p {
  color: white;
}
.load {
  color: white;
  font-weight: normal;
}
.txt .txt-h p {
  color: var(--GreenColor);
}
.btn.btn_uy {
  border: 1px solid var(--MainColor);
  border-radius: 20px;
  margin-top: 20px;
}
.form-sub-main {
  max-width: 400px;
  width: 100%;
  height: 500px;
  display: block;
  margin: 20px auto;
  margin-top: 5rem;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 0px 30px 20px;
}

.form-group .form-control {
  min-height: 50px;
  -webkit-box-shadow: none;
  border: 1px solid var(--LightGreen);
  color: black;
  /* background: var(--darkwhite); */
  border-radius: 3px;
  box-shadow: none;
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  padding: 10px 15px;
  /* background-color: transparent;
  color: black; */
  margin: 10px 0px;
}

.form-sub-main .form-group ::placeholder {
  display: block;
  margin-bottom: 6px;
  color: var(--darkwhite);
}

.fg {
  position: relative;
  z-index: 9;
  background: var(--MainColor);
}
.fg:hover {
  background: var(--MainColor);
}

.toggle-password {
  position: absolute;
  right: 8px;
  bottom: 18px;
}

.form-group .form-control:focus {
  background: transparent;
  box-shadow: none;
  border-color: var(--MainColor);
}

.btn_uy {
  position: relative;
  z-index: 9;
  height: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: auto;
  background: var(--MainColor);
}

.btn_uy h5 {
  padding: 10px 20px;
  background: var(--GreenColor);
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  line-height: normal;
  border-radius: 3px;
  color: #fff;
  width: 100%;
  position: relative;
  display: inline-block;
  cursor: pointer;
}
</style>
