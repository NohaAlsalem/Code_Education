<template>
  <div>
    <NavBarA></NavBarA>
    <div class="container ms-2 mt-4">
      <div class="row">
        <div class="col-8 " style="height:100vh; overflow-y: auto">
          <!-- <h6 class="ms-3">My test</h6> -->
          <div class="container mt-4">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search to student" v-model="searchkey" @input="onSearchInput">
              <!-- <div class="input-group-append"> -->
                <span class="input-group-text" @click="search">
                  <font-awesome-icon icon="fa-solid fa-search" class="i" />
                </span>
              <!-- </div> -->

            </div>
          </div>
          <div class="card ms-0" style="border: none;">
            <div class="card-body pb-0">
              <table class="table table-borderless table-striped ">
                <thead>
                  <tr>
                    <th scope="col">#id</th>
                    <th scope="col">Student Name</th>

                    <th scope="col">University_id</th>
                    <th scope="col">password</th>
                  </tr>

                </thead>

                <tbody>

                  <tr v-for="student in students" :key="student.id">
                    <td scope="row">{{ student.id }}</td>
                    <td>
                      <p>{{ student.student_name }}</p>
                    </td>

                    <td>{{ student.university_id }}</td>

                    <td>
                      <div @click="toggleCollapse1(student.id)">
                        <button type="button" class="btn" @click="generatePassword(student.id)" aria-expanded="false"
                          :aria-controls="'modal' + student.id" :data-bs-toggle="'modal'"
                          :data-bs-target="'#cardModal1' + student.id">Generate</button>
                      </div>

                      <div class="modal fade" :class="['cardModal1', { show: isActive1(student.id) }]"
                        :id="'cardModal1' + student.id" tabindex="-1" aria-labelledby="cardModalLabel1"
                        aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="">
                              <div class="m-0" style="text-align: center">
                                <p class=" pb-1 m-0">{{ student.id }}</p>

                                <div class="modal-body" style="justify-content: center;">
                                  <div class=" d-flex">
                                    <h6 class=" me-2 mt-1">name :</h6>
                                    <h7>{{ student.student_name }}</h7>
                                  </div>

                                  <div class=" d-flex mb-3">
                                    <div class="d-flex me-5">
                                      <h6 class=" me-2 mt-1">New Password :</h6>
                                      <button class="btn" style=" background: #e7dff9; color: var(--GreenColor)">{{
                newStudentPassword }}</button>
                                    </div>

                                  </div>
                                  <button class="btn" data-bs-dismiss="modal">teminate</button>
                                </div>

                              </div>

                            </div>

                          </div>
                        </div>
                      </div>

                    </td>
                  </tr>

                </tbody>
              </table>


            </div>
          </div>

        </div>
        <div class="col-4 ps-4" style="height: 100%; overflow-y: auto">
          <div class="d-flex">
          <button class="btn mb-3 me-2" @click="getallbackups">get all backups</button>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="enter year" v-model="year">
              <!-- <div class="input-group-append"> -->
                <span class="input-group-text" @click="getbackup(this.year)">
                  <font-awesome-icon icon="fa-solid fa-search" class="i" />
                </span>
              <!-- </div> -->

            </div>
          </div>
          <a v-if="backup" class="btn mb-4" :href="backup" style="background: #e7dff9; color: var(--GreenColor)">{{ backup }}</a>
          <!-- <input type="text" @change="getbackup" placeholder="enter year"> -->
          <div class="mb-4">
            <div class="card" style="border-radius: 0;">
              <table v-if="backups.length >= 1" class="table table-borderless w-100">
                <thead>
                  <tr>
                    <th class="col-8">
                      <div class="d-flex">
                        <p style="color: white;">
                          BackUps:
                        </p>
                        <p style="color: white; font-weight: 100;">
                          (click on name backup to download it)
                        </p>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="m-2">
                    <td class="mb-3">
                      <div class="d-flex" v-for="(backup, index) in backups" :key="index">
                        <a class="btn mb-3" :href="backup.url" style="background: #e7dff9; color: var(--GreenColor);">{{ backup.name }}</a>
                        <!-- <a :href="backup.url">{{ backup.url }}</a> -->
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- <div class="card" style="border-radius: 0;">
              <table class="table table-borderless w-100">
                <thead>
                  <tr>
                    <th class="col-8">new password</th>

                 
                  </tr>
                
                </thead>

                <tbody>

                  <tr class="mb-3">
                   

                    <td class="col-4">
                      <button class="btn">{{ newStudentPassword }}</button>
                  
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div> -->
          </div>

          <div>
            <h6>Change class requests</h6>
            <div class="card" style="border-radius: 0;">
              <table class="table table-borderless w-100">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <!-- <th scope="col">Subject</th> -->
                    <th scope="col">Old Class</th>
                    <th scope="col">New Class</th>
                    <th>Accept</th>
                    <th>Delete</th>

                  </tr>

                </thead>

                <tbody>
                  <tr v-for="student1 in change_class_requests" :key="student1.id" class="trow"
                    @click="toggleCollapse(student1.id)">
                    <!-- <tr v-for="student in change_class_requests" class="trow" data-bs-toggle="modal" data-bs-target="#classModal"> -->

                    <td scope="row" aria-expanded="false" :aria-controls="'modal' + student1.id"
                      :data-bs-toggle="'modal'" :data-bs-target="'#cardModal' + student1.id">{{ student1.student_name }}
                    </td>
                    <td>{{ student1.old_class }}</td>
                    <td>{{ student1.new_class }}</td>

                    <td>
                      <div class="pt-0 d-flex" @click="toggleCollapse(student1.id)">
                        <button type="button" class="btn btn-success ms-0 mt-0" aria-expanded="false"
                          :aria-controls="'modal' + student1.id" :data-bs-toggle="'modal'"
                          :data-bs-target="'#cardModal' + student1.id" @click="passcontestid(student1.id)">
                          Change
                        </button>
                      </div>

                      <div class="modal fade" :class="['cardModal', { show: isActive(student1.id) }]"
                        :id="'cardModal' + student1.id" tabindex="-1" aria-labelledby="cardModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="">
                              <div class="m-0" style="text-align: center">
                                <p class=" pb-1 m-0">{{ student1.id }}</p>

                                <div class="modal-body" style="justify-content: center;">
                                  <div class=" d-flex">
                                    <h6 class=" me-2 mt-1">name :</h6>
                                    <h7>{{ student1.student_name }}</h7>
                                  </div>
                                  <div class=" d-flex ">
                                    <div class="d-flex me-5">
                                      <h6 class=" me-2 mt-1">old class :</h6>
                                      <h7>{{ student1.old_class }}</h7>
                                    </div>
                                    <div class="d-flex ms-5">
                                      <h6 class=" me-2 mt-1">new class :</h6>
                                      <h7>{{ student1.new_class }}</h7>
                                    </div>
                                  </div>
                                  <div class="d-flex me-5">
                                    <h6 class=" me-2 mt-1">the reason :</h6>
                                    <h7>{{ student1.reason }}</h7>
                                  </div>
                                  <button class="btn" @click="changeClass(student1.id)"
                                    data-bs-dismiss="modal">Agree</button>
                                </div>

                              </div>

                            </div>

                          </div>
                        </div>
                      </div>


                    </td>
                    <td>
                      <p style="color: brown;" @click="DeleteRequest(student1.id)">reject</p>


                    </td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />

  </div>
</template>

<script>
import NavBarA from './component/NavBarA.vue';
import axios from 'axios';
import { ADMIN_URL } from "@/assets/config";
import { B_URL } from "@/assets/config";
import Alert from './component/Alert.vue';
export default {
  components: {
    NavBarA,
    Alert
  },
  data() {
    return {
      students: [],
      change_class_requests: [],
      backups: [],
      year: '',
      backup: '',
      confirmId: null,
      activeSolutionId: null,
      activeSolutionId1: null,
      newStudentPassword: '',
      successMessage: "",
      errorMessage: "",
      alertType: "",
      alertMessage: "",
      searchkey: '',

    }
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    toggleCollapse(solutionId) {
      this.activeSolutionId = this.activeSolutionId === solutionId ? null : solutionId;
    },
    toggleCollapse1(solutionId) {
      this.activeSolutionId1 = this.activeSolutionId1 === solutionId ? null : solutionId;
    },
    isActive(solutionId) {
      return this.activeSolutionId === solutionId;
    },
    isActive1(solutionId) {
      return this.activeSolutionId1 === solutionId;
    },
    passcontestid(id) {
      this.confirmId = id;
    },


    getStudents() {
      axios.get(ADMIN_URL + 'students', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }).then((response) => {
        console.log(response.data);
        this.students = response.data.students;
        this.change_class_requests = response.data.change_class_request;

      }).catch((error) => {
        console.log(error)
        this.errMessage = 'error retrieving data'
      })
    },
    getallbackups() {
      axios.get(ADMIN_URL + 'backups', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }).then((response) => {
        console.log(response.data);
        this.backups = response.data;
        this.backup = null;
      }).catch((error) => {
        console.log(error)
        this.errMessage = 'error retrieving data'
      })
    },
    getbackup(namee) {
      axios.get(ADMIN_URL + `backups/${namee}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      }).then((response) => {
        console.log(response.data);
        this.backup = response.data;
        this.backups = [];

      }).catch((error) => {
        console.log(error)
        this.errMessage = 'error retrieving data'
      })
    },
    generatePassword(studentId) {
      axios.post(ADMIN_URL + `students/${studentId}/change-password`, '', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      })
        .then((response) => {
          this.newStudentPassword = response.data.new_password;
          this.successMessage = response.data.message;
          this.alertType = "success";
          this.alertMessage = response.data.message;

          setTimeout(() => {
            this.clearAlert();
          }, 1000);


        })
        .catch((error) => {
          this.errorMessage = "Error on generate password: " + error.message;
          this.alertType = "error";
          this.alertMessage = "Error on generate password: " + error.message;
          this.error = error;
          setTimeout(() => {
            this.clearAlert();
          }, 1000);
          console.log(error);
          this.error = error;
        });
    },


    changeClass(studentId) {

      axios.post(ADMIN_URL + `change/${studentId}`, '', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      })
        .then((response) => {
          this.successMessage = response.data.message;
          this.alertType = "success";
          this.alertMessage = response.data.message;
          this.getStudents();

          setTimeout(() => {
            this.clearAlert();
          }, 1000);

          // this.newStudentPassword = response.new_password;
        })
        .catch((error) => {
          this.errorMessage = "Error the request not accepted:" + error.message;
          this.alertType = "error";
          this.alertMessage = "Error the request not accepted:" + error.message;
          this.error = error;
          setTimeout(() => {
            this.clearAlert();
          }, 1000);
          console.log(error);
          this.error = error;
        });
    },
    DeleteRequest(studentId) {
      axios.delete(ADMIN_URL + `delete-request/${studentId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
      })
        .then((response) => {
          // this.token = response.data.token;
          this.successMessage = response.data.message;
          this.alertType = "success";
          this.alertMessage = response.data.message;
          this.getStudents();
          setTimeout(() => {
            this.clearAlert();
          }, 1000);

          console.log(this.token + "lknkj");
          // <router-link to="/home"></router-link>
        })
        .catch((error) => {
          this.errorMessage = "Error deleting teacher: " + error.message;
          this.alertType = "error";
          this.alertMessage = "Error deleting teacher: " + error.message;
          this.error = error;
          setTimeout(() => {
            this.clearAlert();
          }, 1000);
          console.log(error);
          this.error = error;
        });
    },
    onSearchInput(event) {
            this.searchkey = event.target.value;
            this.search();
        },
    search() {
      this.formData = {
        key: this.searchkey
      },
        axios.post(B_URL + 'search', this.formData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        })
          .then((response) => {
            this.students = response.data;
            console.log(response.data.data.id + '897777777777777777777'),

              // this.searchResults = response.data;
              console.log(response.data)
            // <router-link to="/home"></router-link>
          })
          .catch((error) => {
            console.log(error);
            this.error = error;
          });
    },

    clearAlert() {
      this.alertType = "";
      this.alertMessage = "";
    },
  },
}
</script>

<style scoped>
p {
  color: var(--GreenOpacity);
}

h6 {
  color: var(--GreenColor);
}

.table th {
  background: var(--GreenColor);
  color: white;
}

.table .trow td {
  /* background: var(--WhiteColor); */
  padding: 5px;

}

.btn {
  border-radius: 10px;
  background: var(--GreenColor);
  padding: 2px 10px;
  border: 0;
  color: white;
}

.backg {
  background: var(--WhiteColor);
  padding: 10px;
  border-radius: 10px;
}

.cardModal {
  display: none;
}

.cardModal.show {
  display: block;
}

.cardModal1 {
  display: none;
}

.cardModal1.show {
  display: block;
}
</style>