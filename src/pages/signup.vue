<template>
  <div class="r">
    <TopBar></TopBar>
    <div>
      <div class="col-md-12">
        <div class="form-sub-main">
          <div class="_main_head_as text-center justify-content-cnter align-items-center mb-4">
            <img src="@/assets/images/logoo.png">
            <codeEdu></codeEdu>
          </div>

          <form @submit="Register">
          <div class="form-group">
            <input v-model="formData.name" id="name" name="name" class="form-control _ge_de_ol mb-3" type="text"
              placeholder="Username" required="" aria-required="true">
          </div>
          <div class="form-group">
            <input v-model="formData.email" id="email" name="email" class="form-control _ge_de_ol mb-3" type="email"
              placeholder="Username" required="" aria-required="true">
          </div>

          <div class="form-group">
            <input  v-model="formData.password" id="password" type="Password" class="form-control mb-3" name="password" placeholder="password"
              required="required">
            <!-- <i toggle="#password" class="fa fa-fw fa-eye toggle-password field-icon"></i> -->
          </div>
          
          <div class="form-group">
            <input v-model="formData.password_confirmation" id="password1" type="Password" class="form-control mb-3" name="password" placeholder="Confirm Password"
              required="required">
            <!-- <i toggle="#password" class="fa fa-fw fa-eye toggle-password field-icon"></i> -->
          </div>

          <div class="form-group">
            <input v-model="formData.phone_number" id="number" type="number" class="form-control mb-3" name="number" placeholder="Phone number"
              required="required">
            <!-- <i toggle="#password" class="fa fa-fw fa-eye toggle-password field-icon"></i> -->
          </div>
          <div class="form-group">
            <input v-model="formData.university_id" id="number" type="number" class="form-control mb-3" name="number" placeholder="university id"
              required="required">
            <!-- <i toggle="#password" class="fa fa-fw fa-eye toggle-password field-icon"></i> -->
          </div>


          <div class="form-group">
            <div class="btn_uy" type="submit" @click="Register">
              <!-- <routerLink to="/problems"> -->
                <h5>SignUp</h5>
              <!-- </routerLink> -->
            </div>
          </div>
        </form>

          <div class="txt d-flex justify-content-center">
            <p class="pt-2 me-2">Have an account?</p>
            <routerLink to="/login" class="txt-h pt-2 ">
              <h5>Sign In</h5>
            </routerLink>

          </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>

import TopBar from '@/components/TopBar.vue';
import codeEdu from '@/components/codeEdu.vue';
import { RouterLink } from 'vue-router';
import axios from'axios';
export default {
  components: {
    TopBar,
    codeEdu
  },
  data() {
          return {
              error: null,
              mesaage: '',
              searchText: '',
              token: '',
              formData: {
                name:'',
                  email: '',
                  password: '',
                  password_confirmation:'',
                  role:'student',
                  phone_number:'',
                  university_id:'',
              },
          };
      },
      methods: {
        Register() {
              //  if (this.isValidEmail && this.isValidPassword) {
              axios.post('http://192.168.74.182:8000/api/register', this.formData)
                  .then((response) => {
                 
                  this.token = response.data.token;
                  localStorage.setItem('token', this.token);
                  this.$router.push('/problems');
                  this.mesaage = response.data.mesaage;
                  console.log(this.token + "lknkj");
                  // <router-link to="/home"></router-link>
              })
                  .catch((error) => {
                  console.log(error);
                  this.error = error;
              });
          },
      },
}
</script>

<style scoped>
.r {
  height: 100vh;
  /* height: auto; */
  background: var(--WhiteColor);
}

img {
  max-width: 50%;
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


.form-sub-main {
  max-width: 400px;
  width: 100%;
  display: block;
  margin: 20px auto;
  margin-top: 50px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 0px 30px 20px;

}



.form-group .form-control {
  min-height: 50px;
  -webkit-box-shadow: none;
  border: 1px solid var(--LightGreen);
  border-radius: 3px;
  box-shadow: none;
  padding: 10px 15px;
  background-color: transparent;
  color: black;
  margin: 10px 0px;
}




.form-sub-main .form-group ::placeholder {
  display: block;
  margin-bottom: 6px;
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
}


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


</style>