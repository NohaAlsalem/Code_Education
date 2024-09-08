<template>
    <div class="container">
        <div class="row mt-0">
            <div class="col-8">
                <div class="container mt-4 p-0">
                    <p>Contest Name</p>
                </div>
            </div>
            <div class="col-4 container  mt-4 p-0  pt-0">
                <button type="button" class="btn btn-success ms-5 mt-0" @click="createContest">
                    Create
                </button>
            </div>
        </div>
        <!-- input to contest name -->
        <div class="input-group">
            <!-- <input type="text" class="form-control" v-model="formData.name"> -->
            <input type="text" class="form-control" v-model="name">
        </div>

        <div class="container mt-4 p-0">
            <p>Contest Discription:</p>
        </div>
        <!-- input to contest desicription -->
        <div class="input-group ">
            <textarea class="form-control" rows="10" v-model="description"></textarea>
            <!-- <div class="absolute inset-y-0 right-0 pr-3 pt-2">icon</div> -->
        </div>


        <div class="row mt-4">
            <div class="col-4">
                <p>Contest date</p>
            </div>
            <div class="col-4">
                <p>Contest Time</p>
            </div>
            <div class="col-4   ">
                <div class="d-flex">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <p>privet</p>

                    </div>
                    <div class="form-check ms-4">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                            checked>
                        <p>public</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-0 mb-4">
            <div class="col-4">
                <div class="input-group">
                    <input v-model="start_at" type="text" class="form-control" placeholder="dd/mm/yy">
                    <!-- <datepicker 
      v-model="start_at" 
      class="form-control" 
      :format="datepickerFormat"
      placeholder="dd/mm/yy" 
      style="background: var(--WhiteColor); border: 1px solid var(--LightGreen); padding: 10px; margin-right: 20px;" 
      @change="updateStartAt"
    /> -->

                </div>
            </div>
            <div class="col-4">
                <div class="input-group">
                    <input v-model="contest_time" type="text" class="form-control" placeholder="00:00:00">
                </div>
            </div>
            <div class="col-4 ">
                <div class="input-group">
                    <input v-model="password" type="text" class="form-control" placeholder="Enter password">
                </div>
            </div>
        </div>


        <div class="container mt-5 p-0">
            <p>help to generate your problems:</p>
        </div>

        <div class="row">

            <div class="col-4">
                <p>Min-level</p>
            </div>
            <div class="col-4">
                <p>Max-level</p>
            </div>
            <div class="col-4">
                <!-- <p>Scoure</p> -->
            </div>
        </div>

        <div class="row mt-0">
            <div class="col-4">
                <div class="input-group">
                    <input v-model="min_level" type="text" class="form-control" placeholder="min">
                </div>
            </div>
            <div class="col-4">
                <div class="input-group">
                    <input v-model="max_level" type="text" class="form-control" placeholder="max">
                    <!-- <div class="absolute inset-y-0 right-0 pr-3 pt-2">icon</div> -->
                </div>
            </div>

            <div class="col-4 ">
                <!-- <div class="input-group">
                    <input v-model="scoure" type="text" class="form-control" placeholder="Enter password">
                </div> -->
            </div>
        </div>


        <div class="container mt-5 p-0">
            <p>you can add student to contest</p>
        </div>



        <table class="table  table-bordered mt-4">
            <thead>
                <tr>
                    <th scope="col">
                        <h6>
                            Student
                        </h6>
                    </th>
                    <th scope="col">
                        <!-- <h6>
                            Student
                        </h6> -->
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> <router-link to="/students" style="text-decoration: none; color: inherit;">
                            <p> + Add
                            </p>
                        </router-link></td>
                </tr>
                <tr v-for="student in selectedStudents" :key="student.id">

                    <td>
                        {{ student.student_name }}
                    </td>
                    <td> <router-link to="/students" style="text-decoration: none; color: inherit;">
                            <p> + Add
                            </p>
                        </router-link></td>

                </tr>


            </tbody>
        </table>

        <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />
    </div>
</template>
<script>
import Datepicker from 'vue3-datepicker';
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
import { BASE_URL } from "@/assets/config";
import Alert from '@/components/Alert.vue';
import moment from 'moment';
export default {
    components: {
        NavBar,
        Datepicker,
        Alert
    },
    data() {
        return {
            token: localStorage.getItem('token'),
            startAtDisplay: '', // The date in "dd/mm/yy" format
            datepickerFormat: 'DD/MM/YY',
            successMessage: "",
            errorMessage: "",
            alertType: "",
            selectedStudents: [],
            name: '',
            description: '',
            password: '',
            duration: 2,
            start_at: '',
            contest_time: '',
            min_level: null,
            max_level: null,
            students: [],
            houre: 2,
            scoure: 0,
        };
    },
    mounted() {
        this.loadFormData();
        this.clearFormData();
    },
    watch: {
        // Watch all the relevant data properties
        name: 'saveFormData',
        description: 'saveFormData',
        password: 'saveFormData',
        duration: 'saveFormData',
        start_at: 'saveFormData',
        contest_time: 'saveFormData',
        min_level: 'saveFormData',
        max_level: 'saveFormData',
        houre: 'saveFormData',
        scoure: 'saveFormData',
        selectedStudents: {
            handler: 'saveFormData',
            deep: true,
        },
    },
    created() {
        const students = this.$route.query.students;
        if (students) {
            this.selectedStudents = JSON.parse(students);
        }
    },
    methods: {
        updateStartAt(date) {
            this.startAtDisplay = date;
            this.start_at = moment(date, 'DD/MM/YY').format('YYYY-MM-DD');
        },
        loadFormData() {
            const savedFormData = localStorage.getItem("formData");
            if (savedFormData) {
                const parsedData = JSON.parse(savedFormData);
                this.name = parsedData.name || '';
                this.description = parsedData.description || '';
                this.password = parsedData.password || '';
                this.duration = parsedData.duration;
                this.start_at = parsedData.start_at;
                // this.start_at = parsedData.start_at ? new Date(parsedData.start_at) : null;
                this.contest_time = parsedData.contest_time || '';
                this.min_level = parsedData.min_level;
                this.max_level = parsedData.max_level;
                this.houre = parsedData.houre;
                this.scoure = parsedData.scoure;
                this.selectedStudents = parsedData.selectedStudents || [];
            }
        },
        saveFormData() {
            const formData = {
                name: this.name,
                description: this.description,
                password: this.password,
                duration: this.duration,
                start_at: this.start_at,
                // start_at: this.start_at ? this.start_at.toISOString() : '',
                contest_time: this.contest_time,
                min_level: this.min_level,
                max_level: this.max_level,
                houre: this.houre,
                scoure: this.scoure,
                selectedStudents: this.selectedStudents,
            };
            localStorage.setItem("formData", JSON.stringify(formData));
        },
        clearFormData() {
            localStorage.removeItem("formData");
        },
        navigateToStudents() {
            this.saveFormData();
            this.$router.push({
                name: "problemsToaddTotest",
                params: { id: this.$route.params.id },
            });
        },
        beforeRouteLeave(to, from, next) {
            // Save form data before leaving the route
            this.saveFormData();
            next();
        },
        beforeRouteUpdate(to, from, next) {
            // Load form data when the route is updated (e.g., coming back from a child route)
            this.loadFormData();
            next();
        },

        createContest() {
            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('description', this.description);
            formData.append('password', this.password);
            formData.append('duration', this.duration);
            formData.append('start_at', this.start_at ? this.start_at : '');
            // formData.append('start_at', this.start_at ? this.start_at.toISOString() : '');
            formData.append('contest_time', this.contest_time);
            formData.append('min_level', this.min_level);
            formData.append('max_level', this.max_level);
            formData.append('houre', this.houre);
            // formData.append('scoure', this.scoure);

            this.selectedStudents.forEach((student, index) => {
                index = index++;
                formData.append(`students[${index}]`, student.id);
            });
            axios.post(BASE_URL + 'contests/create', formData, {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                }
            })
                .then((response) => {
                    
                    this.successMessage = response.data.message;
                    this.alertType = "success";
                    this.alertMessage = response.data.message;
                    this.message = response.data.message;
                    setTimeout(() => {
            this.clearAlert();
          }, 2000);
          this.$router.push('/contests');
                })
                .catch((error) => {
                    this.errorMessage = "Error not creat contest: " + error.message;
                    this.alertType = "error";
                    this.alertMessage = "Error not creat contest: " + error.message;
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
    font-weight: bold;
}

h6 {
    color: var(--GreenColor);
}

.table th {
    background: #e7dff9;
    /* background: var(--WhiteColor); */
}

.table td {
    color: var(--GreenOpacity)
}

.table {
    border-radius: 5px;
}

.btn {
    background: var(--GreenColor);
}

.input-group .form-control {
    background: #e7dff9;
    /* background: var(--WhiteColor); */
    border: 1px solid var(--LightGreen);
    padding: 10px;
    margin-right: 20px;
}

.form-group .form-control ::placeholder {
    display: block;
    margin-bottom: 6px;
    /* color:#fff; */
    color: var(--LightGreen);
}
</style>
