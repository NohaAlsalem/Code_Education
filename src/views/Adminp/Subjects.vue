<template>
    <div>
        <NavBarA></NavBarA>
        <div class="container ms-2 mt-4">
            <div class="row">
                <div class="col-8 ">
                    <div class="card m-4 mt-0
                    " style="height:100vh;" v-for="subject in Subjects">
                        <div class="card-header">
                            <div class="row">
                                <div class="col">
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">number of class:</h6>
                                        <p>{{ subject.class }}</p>
                                    </div>
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">Subject:</h6>
                                        <p>{{ subject.subject }}</p>
                                    </div>

                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">Student in class:</h6>
                                        <!-- <p>{{ NumberStudent }}</p> -->
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">Teacher Name:</h6>
                                        <p>{{ subject.teacher_name }}</p>
                                    </div>
                                    <div class="card-title d-flex m-0">
                                        <h6 class="me-2">Number of students:</h6>
                                        <p>{{ subject.number_of_students }}</p>
                                    </div>
                                    <!-- <div class="card-title d-flex m-0">
                                        <h6 class="me-2">final exam degree:</h6>
                                        <p>{{ FinalDegre }}</p>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-0 m-0">
                            <table class="table table-borderless m-0">
                                <thead>
                                    <tr>
                                        <th scope="col">student_id</th>
                                        <th scope="col">student_name</th>
                                        <th scope="col">student_email</th>
                                        <th scope="col">phone_number</th>
                                        <th scope="col">Rate</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr v-for="student in subject.students" :key="student.student_id">
                                        <td scope="row">{{ student.student_id }}</td>


                                        <td>
                                            <p>{{ student.student_name }}</p>
                                        </td>
                                        <td>{{ student.student_email }}</td>

                                        <td>{{ student.phone_number }}</td>
                                        <td>{{ student.rate }}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <div class="col-4">

                    <div class="card p-2 mb-3">
                        <p>add exel file</p>
                        <input @change="handleFile1Upload()" type="file" ref="file1" class="form-control-file mb-3">

                        <!-- <div class="modal fade btn" id="addTagModal" tabindex="-1" role="dialog"
                            aria-labelledby="passwordModalLabel"
                             aria-hidden="true">Add -->
                        <!-- <button @click="importStudents($event)" class="btn">Add</button> -->

                        <!-- <button @click="importStudents($event)" type="button" class="btn"
                            style="white-space: nowrap; background: var(--GreenColor);" data-bs-toggle="modal"
                            :data-bs-target="studentsExist.length >= 1 ? '#passwordModal' : ''">
                            Add
                        </button> -->

                        
                                    <button  @click="importStudents($event)" type="button" class="btn btn-primary btn-sm btn-auto"
                                        style="white-space: nowrap; background: var(--GreenColor);"
                                        data-bs-toggle="modal" data-bs-target="#passwordModal">
                                    Add
                                    </button>
                                    <div class="modal fade" id="passwordModal" tabindex="-1" role="dialog"
                                        aria-labelledby="passwordModalLabel" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-body" style="background-color: #e7dff9;">
                                                    <p style="color: var(--GreenColor);">
                                                        {{ messageee }}
                                                    </p>
                                                    <div v-for="(student,index) in studentsExist" :key="index">
                                                        <div class="d-flex m-2" style="background: white;" >
<p>{{ student.name }}</p>
<p>{{ student.number }}</p>
</div>
                                                    </div>
                                                    <div></div>


                                                </div>
                                                <div class="modal-footer" style="background-color: #e7dff9;">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">
                                                        ok
                                                    </button>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        <!-- </div> -->

                    

                    <div class="card p-4">
                        <p class="mb-4">
                            you can add subjects and classes and select the degree of tests and final exam and student
                            attendance.
                        </p>
                        <form>
                            <!-- <p>Subject Name:</p>
                            <input class="inp" v-model="SubjectName" /> -->
                            <p>Number Of Classes:</p>
                            <input class="inp" v-model="NumberClasses" />
                            <p>Year:</p>
                            <input class="inp" v-model="year">
                            <p>add exel file</p>
                            <input @change="handleFileUpload()" type="file" ref="file" class="form-control-file">
                            <button @click="AddStudents($event)" class="btn">Add</button>
                        </form>

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
import Alert from './component/Alert.vue';

export default {
    components: {
        NavBarA,
        Alert
    },
    data() {
        return {
            studentsExist: [],
            Subjects: [],
            SubjectName: '',
            messageee:'',
            year: 0,
            NumberClasses: 0,
            file: '',
            successMessage: "",
            errorMessage: "",
            alertType: "",
            alertMessage: "",
            modalInstance: null, // To store the modal instance
        }
    },
    mounted() {
        this.getSubjects();
       
    },
    methods: {
       
        handleFile1Upload() {
            this.file = this.$refs.file1.files[0];
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
        },
        AddStudents(event) {
            event.preventDefault();
            let formData = new FormData();
            formData.append('classes', this.NumberClasses);
            formData.append('year', this.year);
            formData.append('file', this.file);

            axios.post(ADMIN_URL + 'students/distribute', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then((response) => {
                this.successMessage = response.data.message;
                this.alertType = "success";
                this.alertMessage = response.data.message;

                setTimeout(() => {
                    this.clearAlert();
                }, 1000);
            })
            .catch((error) => {
                this.errorMessage = "Error not import file: " + error.response.data.message;
                this.alertType = "error";
                this.alertMessage = "Error not import file: " + error.response.data.message;
                this.error = error;
                setTimeout(() => {
                    this.clearAlert();
                }, 2000);
                console.log(error);
            });
        },
        importStudents(event) {
            event.preventDefault();
            let formData = new FormData();
            formData.append('file', this.file);

            axios.post(ADMIN_URL + 'students/import', formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then((response) => {
                this.messageee=response.data.message;
                this.studentsExist = response.data.students;
                // console.log(response.data.message)
                // this.successMessage = response.data.message;
                // this.alertType = "success";
                // this.alertMessage = response.data.message;

              

                setTimeout(() => {
                    this.clearAlert();
                }, 1000);
            })
            .catch((error) => {
                this.messageee=error.response.data.message
//                 if (error.response) {
//     this.errorMessage = "Error: " + error.response.data.message;
//     this.alertType = "error";
//     this.alertMessage = "Error: " + error.response.data.message;
//   } else {
//     this.errorMessage = "A Network Error.";
//     this.alertType = "error";
//     this.alertMessage = "A  Network Error.";
//   }
                setTimeout(() => {
                    this.clearAlert();
                }, 2000);
                console.log(error);
            });
        },
        getSubjects() {
            axios.get(ADMIN_URL + 'categories-with-subjects', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then((response) => {
                this.Subjects = response.data.data;
            })
            .catch((error) => {
                console.log(error);
                this.errMessage = 'error retrieving data';
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

.inp {
    width: 100%;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
}

.card {
    background: #e7dff9;
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
</style>