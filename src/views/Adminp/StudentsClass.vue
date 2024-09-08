<template>
    <div>
        <NavBarA></NavBarA>
        <div class="m-5 mt-3">
            <div class="card" style="height:90vh; overflow-y: auto">
               
                <div class="card-body p-0 ">
                    <table class="table table-borderless m-0">
                        <thead>
                            <tr>
                                <th scope="col">name</th>
                                <th scope="col">Attendance</th>
                                <th scope="col">Tests Degree</th>
                                <th scope="col">Exam Degree</th>
                                <th scope="col">Total Degree</th>
                                <th scope="col">Teacher name</th>
                                <th scope="col">Operation</th>

                            </tr>

                        </thead>

                        <tbody>
                            <tr  v-for="student in students" :key="student.id">
                                <td >gjnk</td>
                                <td>
                                    <p>not Solved</p>
                                </td>
                                <td>dd</td>
                                <td>dd</td>
                                <td>
                                    dfv
                                </td>
                                <td>gokd</td>
                                <td>
                                    <button class="btn" style="background: brown;">
                                        Edit
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
</template>

<script>
import NavBarA from './component/NavBarA.vue';
import axios from 'axios';
import { ADMIN_URL } from "@/assets/config";
export default {
    components: {
        NavBarA
    },
    data() {
        return {
           
            add:true,
            students:[],

        }
    },
    mounted(){
        this.getStudents();
    },
    methods :{
        getStudents() {
       axios.get(ADMIN_URL + 'students', {
           headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`,
           }
       }).then((response) => {
           console.log(response.data);
           this.students = response.data.data;
           console
       }).catch((error) => {
           console.log(error)
           this.errMessage = 'error retrieving data'
       })
   },

    },

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
</style>