<template>
    <div>
        <TopBar></TopBar>
        <div class="screen">
            <div class="row">
                <div class="col-2"></div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-6">
                            <div class="container mt-4">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search..."
                                        v-model="searchkey"  @input="onSearchInput">
                                        <!-- <div class="input-group-append"> -->
                                        <span class="input-group-text" @click="search">
                                            <font-awesome-icon icon="fa-solid fa-search" class="i" />
                                        </span>
                                    <!-- </div> -->
                         
                                </div>
                            </div>
                        </div>
                        <div class="col-4"></div>
                        <div class="col-2 mt-4">
                            <router-link
                                :to="{ path: '/createContests', query: { students: JSON.stringify(selectedStudents) } }"
                                style="text-decoration: none; color: inherit;">
                                <button type="button" class="btn m-2 fw-b">
                                    Add
                                </button>
                            </router-link>
                        </div>
                    </div>
                    <table class="table table-bordered mt-2">
                        <thead>
                            <tr>
                                <th style="width: 10%;">
                                    <h6>id</h6>
                                </th>
                                <th>
                                    <h6>Name</h6>
                                </th>
                                <th style="width: 10%;">
                                    <h6>Selected</h6>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="student in students" :key="student.id">
                                <td style="max-width: 10%;">{{ student.id }}</td>
                                <td>{{ student.student_name }}</td>
                                <td style="width: 10%;" @click="toggleStudentSelection(student)">
                                    <font-awesome-icon :icon="isSelected(student.id) ? ['fas', 'square-check'] : ['far', 'square-check']" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import { BASE_URL, B_URL } from "@/assets/config";
import axios from 'axios';

export default {
    components: {
        TopBar,
    },
    data() {
        return {
            searchQuery: '',
            students: [],
            selectedStudents: [], // Ensure this is initialized as an array
            searchkey: '',
            searchResults: {},
        };
    },
    mounted() {
        this.getStudents();
        this.loadSelectedStudents();
    },
    methods: {
        loadSelectedStudents() {
            const savedSelectedStudents = localStorage.getItem("selectedStudents");
            this.selectedStudents = savedSelectedStudents ? JSON.parse(savedSelectedStudents) : []; // Ensure it's an array
        },
        toggleStudentSelection(student) {
            if (this.isSelected(student.id)) {
                this.deselectStudent(student); // Deselect if already selected
            } else {
                this.selectStudent(student); // Select if not selected
            }
        },
        selectStudent(student) {
            this.selectedStudents.push(student); // Add student to selectedStudents
            this.saveSelectedStudents(); // Save to local storage
        },
        deselectStudent(student) {
            this.selectedStudents = this.selectedStudents.filter(s => s.id !== student.id); // Remove student from selectedStudents
            this.saveSelectedStudents(); // Save to local storage
        },
        isSelected(studentId) {
            return this.selectedStudents.some(student => student.id === studentId); // Check if student is selected
        },
        saveSelectedStudents() {
            localStorage.setItem("selectedStudents", JSON.stringify(this.selectedStudents)); // Save selected students to local storage
        },
        getStudents() {
            axios.get(BASE_URL + 'contests/allStudents', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                this.students = response.data.data; // Set students from API response
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
                this.errMessage = 'Error retrieving data';
            });
        },
        onSearchInput(event) {
            this.searchkey = event.target.value;
            this.search();
        },
        search() {
            this.formData={   
                   key:this.searchkey},
            axios.post(B_URL+'search', this.formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
                .then((response) => {
                    this.students = response.data;
                    console.log(response.data.data.id+'897777777777777777777'),
                    
                    // this.searchResults = response.data;
                    console.log(response.data)
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
.btn {
    background: var(--GreenColor);
    color: white;
}

.screen {
    padding: 40px 80px;
    background: #e7dff9;
    min-height: 100vh;
    height: 100%;
    max-height: fit-content;
    justify-content: center;
    align-items: center;
    text-align: center;
}

p {
    color: var(--GreenOpacity);
}

.table th {
    background: var(--GreenColor);
    color: white;
}

.table td {
    color: var(--GreenOpacity);
}

.table {
    border-radius: 5px;
}

.input-group {
    border-radius: 5px;
    border: 1px solid #ced4da;
}

.input-group-text {
    background-color: transparent;
    border: none;
}
</style>