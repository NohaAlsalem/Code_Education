<template>
  <div class="r">
    <TopBar></TopBar>
    <div>
      <div class="col-md-12">
        <div class="form-sub-main">
          <div class="_main_head_as text-center justify-content-cnter align-items-center mb-4">
            <img src="@/assets/images/logoo.png">
            <codeEdu class="mt-0"></codeEdu>
          </div>
          <form @submit.prevent="signIn">
            <div class="form-group">
              <input v-model="formData.email"  type="email"  class="form-control _ge_de_ol mb-3"
                placeholder="username or E-mail" required="" aria-required="true">
            </div>

            <div class="form-group">
              <input v-model="formData.password" id="password" type="password" class="form-control mb-3" name="password"
                placeholder="password" required="required">
              <!-- <i toggle="#password" class="fa fa-fw fa-eye toggle-password field-icon"></i> -->
            </div>

            <div class="form-group">
              <div class="btn_uy" type="submit" @click="signIn">
                <!-- <routerLink to="/problems"> -->
                <h5>SignIn</h5>
                <!-- </routerLink> -->
              </div>
            </div>

          </form>
            <!-- <div class="txt d-flex ">
              <p class="pt-2">Forgot Password?</p>
              <routerLink to="/signup" class="txt-h pt-2 ms-auto">
                <h5>Sign Up</h5>
              </routerLink>

            </div> -->

     

            <!-- <div class="form-group">
                <div class="check_box_main">
                  <a href="#" class="pas-text">Forgot Password</a>
                </div>
              </div> -->



        </div>

        <!-- <div class="txt d-flex ">
          <p class="pt-2"></p>
          <routerLink to="/signup" class="txt-h pt-0  me-4 ms-auto">
            <font-awesome-icon icon="fa-solid fa-bell" class="i" />
          </routerLink>

        </div> -->
        <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />

      </div>
    </div>
    
  </div>
</template>

<script>

import TopBar from '@/components/TopBar.vue';
import codeEdu from '@/components/codeEdu.vue';
import Alert from '@/components/Alert.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
export default {
  components: {
    TopBar,
    codeEdu,
    Alert
  },
  data() {
    return {
      successMessage: "",
      errorMessage: "",
      alertType: "",
      alertMessage: "",
      searchText: '',
      token: '',
      number_menu:1,
      formData: {
        email: '',
        password: '',
       
      },
    }
  },
  mounted() {
    this.loadFormData();
    console.log(this.problemId);
    console.log(this.$route.params.id);
  },
  watch: {
    formData: {
      handler(newFormData) {
        localStorage.setItem("formData", JSON.stringify(newFormData));
      },
      deep: true,
    },
  },

  methods: {
    loadFormData() {
      const savedFormData = localStorage.getItem("formData");
      if (savedFormData) {
        this.formData = JSON.parse(savedFormData);
      }
    },
    signIn() {
      //  if (this.isValidEmail && this.isValidPassword) {
        axios.post('http://127.0.0.1:8000/api/login',this.formData)
      // axios.post('http://192.168.225.182:8000/api/login',this.formData)
        .then((response) => {
          this.token = response.data.token;
          console.log(response.data.token)
         
          localStorage.setItem('token', this.token);
          this.$router.push('/problems');
          // if(response.data.role=='student'){
          // this.$router.push('/problems');
          // }
          // else if(response.data.role=='adminstrator'){
          // this.$router.push('/teachersA');
          // }
         
          this.successMessage = response.data.message;
          this.alertType = "success";
          this.alertMessage = response.data.message;
          this.getTests();
          setTimeout(() => {
            this.clearAlert();
          }, 1000);
        
          // <router-link to="/home"></router-link>
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
    this.errorMessage = "Error: " + error.response.data.error;
    this.alertType = "error";
    this.alertMessage = "Error: " + error.response.data.error;
  } else {
    this.errorMessage = "An unknown error occurred.";
    this.alertType = "error";
    this.alertMessage = "An unknown error occurred.";
  }
          setTimeout(() => {
            this.clearAlert();
          }, 1000);
        });
    },
    clearAlert() {
      this.alertType = "";
      this.alertMessage = "";
    },
  }
}
</script>

<style scoped>
.r {
  height: 100vh;
  background: #e7dff9;

}

.i {

  color: var(--GreenColor);
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
  color: var(--GreenColor);
}

.txt .txt-h h5 {
  color: var(--GreenColor);
}



/* a:hover,
a:focus,
input,
textarea {
  text-decoration: none;
  outline: none; 
} */


.form-sub-main {
  max-width: 400px;
  width: 100%;
  display: block;
  margin: 20px auto;
  margin-top: 5rem;
  /* margin:20px auto; */
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  /* background:rgba(0,0,0,0.8); */
  padding: 0px 30px 20px;

}

/* @media screen and (max-width:767px){
      .form-sub-main{
        padding: 30px;
      }
  } */

.form-group .form-control {
  min-height: 50px;
  -webkit-box-shadow: none;
  border: 1px solid var(--LightGreen);
  border-radius: 3px;
  box-shadow: none;
  /* border: 1px solid rgba(255, 255, 255, 0.3); */
  padding: 10px 15px;
  background-color: transparent;
  color:black;
  margin: 10px 0px;

}


/* .form-sub-main{
    color:#545454;
    font-size:16px;
    margin-top: 5%;
} */

.form-sub-main .form-group ::placeholder {
  display: block;
  margin-bottom: 6px;
  /* color:#fff; */
  color: var(--LightGreen);
}

.form-group {
  position: relative;
  z-index: 9;
}

.toggle-password {
  position: absolute;
  right: 8px;
  bottom: 18px;
}

.form-group .form-control:focus {
  background: transparent;
  box-shadow: none;
  border-color: var(--GreenColor);
  /* color:#495057; */
}

/* .check_box_main{
  display:inline-block;
  width:100%;
  text-align:center;
} */

.btn_uy {
  position: relative;
  z-index: 9;
  display: block;
  margin: 20px 0px;
}

.btn_uy h5 {
  padding: 10px 20px;
  background: var(--GreenColor);
  ;
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

/* .form-sub-main ._main_head_as{
  margin:0;
  padding:0;
  display:inline-block;
  z-index:2;
  position:relative; 
}

.form-sub-main ._main_head_as a img{
  height:60px;
  width:60px;
  position:relative;
  border-radius:50px;
} */
</style>