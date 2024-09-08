<template>
    <div>
        <NavBarA></NavBarA>
        <div class="m-5 mt-3">
            <button class="btn mb-2" data-bs-toggle="modal" data-bs-target="#exampleModaladdT"> Add New Techer</button>
            <div class="modal fade" id="exampleModaladdT" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">

                        <div class="modal-body">
                            <h6 class="modal-title" id="exampleModalLongTitle">Add Teacher</h6>
                            <P>Enter Name teacher</P>
                            <!-- <input v-model="formData.name" type="text"
                                            style="width: 100%;"/> -->
                            <input v-model="formData.name" id="name" name="name" class="form-control _ge_de_ol mb-3"
                                type="text" placeholder="Username" required="" aria-required="true">
                            <P>Enter The Email</P>
                            <input v-model="formData.email" id="email" name="email" class="form-control _ge_de_ol mb-3"
                                type="email" placeholder="examble@gmail.com" required="" aria-required="true">
                            <!-- <input v-model="formData.email" type="text"
                                            style="width: 100%;" /> -->
                            <P>Enter phone number</P>
                            <!-- <input v-model="formData.phone_number" type="number"
                                            style="width: 100%;" /> -->
                            <input v-model="formData.phone_number" id="text" type="text" class="form-control mb-3"
                                name="number" placeholder="09999999" required="required">
                            <P>Enter The password</P>
                            <!-- <input v-model="formData.password" type="password"
                                            style="width: 100%;" /> -->
                            <input v-model="formData.password" id="password" type="Password" class="form-control mb-3"
                                name="password" placeholder="*******" required="required">
                            <div style="justify-content: center; justify-items: center;">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                    @click="AddNewTeacher">Add</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="card" style="height:90vh; overflow-y: auto">

                <div class="card-body p-0 ">
                    <table class="table table-borderless  table-striped m-0">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">phone_number</th>
                                <th scope="col">Add</th>
                                <th scope="col">Delete</th>

                            </tr>

                        </thead>

                        <tbody>
                            <tr v-for="teacher in teachers" :key="teacher.id">
                                <td>{{ teacher.id }}</td>
                                <td>{{ teacher.name }}</td>
                                <td>
                                    <p>{{ teacher.email }}</p>
                                </td>
                                <td>{{ teacher.phone_number }}</td>
                                <!-- <td>dd</td> -->
                                <td>

                                    <div class="pt-0 d-flex" @click="toggleCollapse(teacher.id)">

                                        <button type="button" class="btn btn-success ms-5 mt-0" aria-expanded="false"
                                            :aria-controls="'modal' + teacher.id" :data-bs-toggle="'modal'"
                                            :data-bs-target="'#cardModal' + teacher.id"
                                            @click="passcontestid(teacher.id)">
                                            Add
                                        </button>
                                    </div>

                                    <div class="modal fade" :class="['cardModal', { show: isActive(teacher.id) }]"
                                        :id="'cardModal' + teacher.id" tabindex="-1" aria-labelledby="cardModalLabel"
                                        aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="">
                                                    <div class="m-0" style="text-align: center">
                                                        <p class=" pb-1 m-0">{{ teacher.name }}</p>
                                                        <div class=" ms-0" style="border: none;">
                                                            <div class=" pb-0">
                                                                <!-- <h5 class="card-title">Top Selling <span>| Today</span></h5> -->

                                                                <table class="table table-borderless ">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">class</th>
                                                                            <th scope="col">subject</th>
                                                                            <th scope="col">number_of_students</th>
                                                                            <th scope="col">teacher_name</th>
                                                                            <th scope="col">Add</th>

                                                                        </tr>

                                                                    </thead>

                                                                    <tbody>
                                                                        <tr v-for="category in categry_No_Tech"
                                                                            :key="category.class" >
                                                                            <td >{{ category.class }}</td>
                                                                            <td>
                                                                                <p>{{ category.subject }}</p>
                                                                            </td>
                                                                            <td>{{ category.number_of_students }}</td>
                                                                            <td>{{ category.teacher_name }}</td>
                                                                            <td> <button v-if="category.teacher_name"
                                                                                    type="button" class="btn"
                                                                                    @click="addformdata(teacher.id,category.class),AddTeacher2class()" data-bs-dismiss="modal">Edit</button>
                                                                                <button v-else="category.teacher_name"
                                                                                    type="button" class="btn"
                                                                                    @click="addformdata(teacher.id,category.class),AddTeacher2class()" data-bs-dismiss="modal">Add</button>
                                                                            </td>
                                                                        </tr>

                                                                    </tbody>
                                                                </table>


                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>




                                    <!-- <button class="btn">
                                        Add
                                    </button> -->

                                    <!-- <button v-if="add" class="btn">
                                        Add
                                    </button>
                                    <button v-else class="btn" style="background: brown;">
                                        Delete
                                    </button> -->
                                </td>
                                <td>
                                    <p  style="color: brown;" @click="DeleteTeacher(teacher.id)">
                                        Delete
                                    </p>
                                </td>
                            </tr>

                        </tbody>
                    </table>
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
import Alert from './component/Alert.vue';
export default {
    components: {
        NavBarA,
        Alert
    },
    data() {
        return {
            add: true,
            teachers: [],
            categry_No_Tech: [],
            errorMessage: "",
      alertType: "",
      alertMessage: "",
      successMessage: "",
            formData: {
                name: '',
                email: '',
                password: '',
                phone_number: '',
                activeSolutionId: null,
              
    
            },
            formData1:{
                teacher_id:0,
                category_id:0,
            }
        }
    },
    mounted() {
        this.getAllTeachers();
        this.category_no_Teachers();
    },
    methods: {
        addformdata(teacherId,categoryId){
           
            this.formData1.teacher_id=teacherId;
            this.formData1.category_id=categoryId;

        },


        toggleCollapse(solutionId) {
            this.activeSolutionId = this.activeSolutionId === solutionId ? null : solutionId;
        },
        isActive(solutionId) {
            return this.activeSolutionId === solutionId;
        },
        passcontestid(id) {
            this.confirmId = id;
        },


        getAllTeachers() {
            // axios.get('http://127.0.0.1:8000/adminstrator/teachers', {
            axios.get(ADMIN_URL + 'teachers', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                console.log(response.data);
                this.teachers = response.data.data;
                console
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },

        category_no_Teachers() {
            // axios.get('http://127.0.0.1:8000/adminstrator/teachers', {
            axios.get(ADMIN_URL + 'categories-with-subjects', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                console.log(response.data);
                this.categry_No_Tech = response.data.data;
                console
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },
        AddNewTeacher() {
            axios.post(ADMIN_URL + 'teachers/add', this.formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
                .then((response) => {
                    this.token = response.data.token;
                    this.successMessage = response.data.success;
          this.alertType = "success";
          this.alertMessage = response.data.success;
                    console.log(this.token + "lknkj");
                    this.getAllTeachers();
                    setTimeout(() => {
            this.clearAlert();
          }, 2000);
                    // <router-link to="/home"></router-link>
                })
                .catch((error) => {
                    if (error.response) {
    this.errorMessage = "Error: " + error.response.data.message;
    this.alertType = "error";
    this.alertMessage = "Error: " + error.response.data.message;
  } else {
    this.errorMessage = "An unknown error occurred.";
    this.alertType = "error";
    this.alertMessage = "An unknown error occurred.";
  }
          setTimeout(() => {
            this.clearAlert();
          }, 2000);
                    console.log(error);
                    this.error = error;
                });
        },

        AddTeacher2class() {
            console.log(this.formData1)
            axios.post(ADMIN_URL + 'add-teacher2category', this.formData1, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
                .then((response) => {
                    // this.token = response.data.token;
                    this.successMessage = response.data.message;
          this.alertType = "success";
          this.alertMessage = response.data.message;
                    console.log(this.token + "lknkj");
                    setTimeout(() => {
            this.clearAlert();
          }, 2000);
                    this.category_no_Teachers();
                    // <router-link to="/home"></router-link>
                })
                .catch((error) => {
                    this.errorMessage = "Error not added: " + error.message;
          this.alertType = "error";
          this.alertMessage = "Error not added: " + error.message;
          this.error = error;
          setTimeout(() => {
            this.clearAlert();
          }, 2000);
                    console.log(error);
                    this.error = error;
                });
        },
       
        DeleteTeacher(teacherId) {
            axios.delete(ADMIN_URL + `teacher/${teacherId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
                .then((response) => {
                    // this.token = response.data.token;
                    this.successMessage = response.data.message;
          this.alertType = "success";
          this.alertMessage = response.data.message;
        this.getAllTeachers();
        this.category_no_Teachers();
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
        clearAlert() {
      this.alertType = "";
      this.alertMessage = "";
    },
    }
}
</script>

<style scoped>
p {
    color: var(--GreenColor);
    margin: 0;

}

h6 {
    color: var(--GreenColor);
    font-weight: bold;
    margin: 0;
}

.form-control{
    background: #e7dff9;
}
.card {
    /* background: var(--WhiteColor); */
    padding: 0;
    border: 1px solid var(--borderColor);
    border-radius: 5px;
}

.table th {
    background: var(--GreenColor);
    color: white;
    font-weight: 400;
}

.btn {
    border-radius: 10px;
    background: var(--GreenColor);
    padding: 2px 10px;
    border: 0;
    color: white;
}

.cardModal {
    display: none;
}

.cardModal.show {
    display: block;
}
</style>