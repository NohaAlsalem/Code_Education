<template>
    <div>
        <!-- <router-link :to="{ name: 'detailExam', params: { examId: exam.id } }" style="  text-decoration: none;
  outline: none;
  "> -->

        <div class="container mt-4">
            <div class="row">
                <div class="col-8"> <!-- start Card -->
                    <div class="container d-flex mt-4 p-4">
                        <div class="card">
                            <!-- <div class="card mb-3" style="max-width:540px;">  -->
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="../../assets/images/C.png" class="img-fluid rounded" alt="...">
                                </div>
                                <div class="col-md-8 ps-3">
                                    <h5>
                                        {{ exam.id }}
                                        {{ exam.subject }}
                                    </h5>
                                    <div class="pt-2 d-flex">
                                        <p>
                                            date exam:</p>
                                        <h6 class="text-black pt-1 ps-1">
                                            {{ exam.exam_date }}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 container  mt-4 p-4 pt-0">

                    <div class="pt-0 d-flex" @click="toggleCollapse(exam.id)">

                        <button type="button" class="btn btn-success ms-5 mt-5" aria-expanded="false"
                            :aria-controls="'modal' + exam.id" :data-bs-toggle="'modal'"
                            :data-bs-target="'#cardModal' + exam.id" @click="passcontestid(exam.id)">
                            join
                        </button>
                    </div>
                </div>
                <!-- 
                id="cardModal" -->
                <div class="modal fade" :class="['cardModal', { show: isActive(exam.id) }]" :id="'cardModal' + exam.id"
                    tabindex="-1" aria-labelledby="cardModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="container">
                                    <p class="card-text pb-2">You can join a Contest using the contest identification
                                        number that the originator if the contest will
                                        give you</p>
                                    <p>Enter the contest identification number</p>
                                    <div class="input-group">
                                        <input v-model="formData.password" type="text" class="form-control">
                                    </div>
                                </div>

                            </div>

                            <div class="modal-footer d-flex">
                                <button type="button" class="btn bg-white" data-bs-dismiss="modal">
                                    <p> Cancel</p>
                                </button>
                                <button type="button" class="btn bg-white" data-bs-dismiss="modal"
                                    @click="joinExam(exam.id)">
                                    <p>Ok</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Divider"></div>
        </div>
        <!-- </router-link> -->
        <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />
    </div>


    <!-- <div>
        <router-link :to="{ name: 'detailExam', params: { examId: exam.id } }" style="  text-decoration: none;
  outline: none;
  ">
           
            <div class="container">
                <div class="row mt-0">
                    <div class="col-8"> 

                        <div class="container d-flex mt-4 p-4 pb-1 pt-0">
                            <div class="card">
                                
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                                            class="img-fluid rounded" style="max-width: 100%;" alt="...">
                                    </div>
                                    <div class="col-md-8 ps-3">
                                        <h5>
                                            {{ exam.id }}
                                            {{ exam.subject }}
                                        </h5>
                                        <div class="pt-2 d-flex">
                                            <p>
                                                date exam:</p>
                                            <h6 class="text-black pt-1 ps-1">
                                                {{ exam.exam_date }}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="Divider"></div>

            </div>
        </router-link>
    </div> -->
</template>
<script>
import Alert from '@/components/Alert.vue';
import { BASE_URL } from "@/assets/config";
import axios from 'axios';
export default {
    props: {
        exam: {
            type: Object,
            required: true,
        }
    },
    components: {
        Alert,
    },
    data() {
        return {
            successMessage: "",
            errorMessage: "",
            alertType: "",
            alertMessage: "",
            approved: '',

            NameExam: 'exam ',
            date: '25/5/2024',
            time: '2h',
            nameTeacher: 'Noha',
            formData: {
                password: '',
            }

        }
    },
    methods: {
        toggleCollapse(solutionId) {
            this.activeSolutionId = this.activeSolutionId === solutionId ? null : solutionId;
        },
        isActive(solutionId) {
            return this.activeSolutionId === solutionId;
        },
        passcontestid(id) {
            this.confirmId = id;
        },
        joinExam(examId) {
            axios.post(BASE_URL + `exams/${examId}/join`, this.formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
                .then((response) => {
                    console.log(response);
                    this.$router.push({ name: 'detailExam', params: { examId: examId } });
                    this.successMessage = response.data.message;
                    this.alertType = "success";
                    this.alertMessage = response.data.message;
                    setTimeout(() => {
            this.clearAlert();
          }, 2000);
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
          }, 2000);
                    //             this.errorMessage = "Error on join: " + error.message;
                    //   this.alertType = "error";
                    //   this.alertMessage = "Error on join: " + error.message;
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
.card {
    border: none;
}

p {
    color: var(--GreenOpacity);
}

.btn {
    background: var(--GreenColor);
}

.card .img-fluid {
    height: 5rem;
    width: 10rem;
    max-width: 100%;

}

.Divider {
    border-top: 1px solid var(--LightGreen) !important;
    /* border-bottom: 1px solid  var(--LightGreen)!important; */
    /* height: 0.5px; */
    /* margin: 0 100px; */
    margin-left: 100px;
    margin-right: 300px;
}

/* .Divider {
    border-top: 1px solid var(--LightGreen) !important;
    margin-left: 100px;
	margin-right: 200px;
} */

.text-muted {
    color: var(--LightGreen);
}

.font-c {
    color: var(--GreenColor);
}

.modal-footer {
    border: none;
}

.cardModal {
    display: none;
}

.cardModal.show {
    display: block;
}
</style>