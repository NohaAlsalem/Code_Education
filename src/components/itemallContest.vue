<template>
    <div>

        <!-- start i need it -->
        <div class="container">

            <div class="row mt-0">
                <div class="col-8"> <!-- start Card -->

                    <!-- <router-link :to="{ name: 'detaileContest', params: { ContestId: contest.id } }"
                        style="text-decoration: none; outline: none;"> -->
                        <div class="container d-flex mt-4 p-4 pb-1 pt-0">
                            <div class="card">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="../assets/images/Capture.png"
                                            class="img-fluid rounded" style="max-width: 100%;" alt="...">
                                    </div>
                                    <div class="col-md-8 ps-3">
                                        <h5>{{ contest.name }}</h5>
                                        <div class="pt-2 d-flex">
                                            <p>date start Contest:</p>
                                            <h6 class="text-black pt-1 ps-1">{{ contest.start_at }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <!-- </router-link> -->

                </div>



                <div class="col-4 container  mt-4 p-4 pt-0">
                    <div class="d-flex">
                        <h6 class="font-c">Create by :</h6>
                        <p class="text-black"> {{ contest.owner }}</p>
                    </div>
                    <div class="pt-0 d-flex"  @click="toggleCollapse(contest.id)" >

                        <button type="button" class="btn btn-success ms-5 mt-0" 
                    aria-expanded="false" :aria-controls="'modal' + contest.id"
                        
                        :data-bs-toggle="'modal'"
                            :data-bs-target="'#cardModal'+contest.id" @click="passcontestid(contest.id)">
                            join
                        </button>
                    </div>
                </div>
<!-- 
                id="cardModal" -->
                <div class="modal fade" 
                :class="['cardModal', { show: isActive(contest.id) }]"
                :id="'cardModal' + contest.id"
                 tabindex="-1" aria-labelledby="cardModalLabel"
                    aria-hidden="true">
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
                                    @click="joinContest(contest.id)">
                                    <p>Ok</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="Divider"></div>


            <!-- end i need it -->
        </div>
        <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" />
    </div>
</template>

<script>
// import itemContest from '@/components/itemContest.vue';
import { BASE_URL } from "@/assets/config";
import axios from 'axios';
import Alert from '@/components/Alert.vue';
export default {
    props: {
        contest: {
            type: Object,
            required: true,
        }
    },
    components: {
        // itemContest,
        Alert,
    },
    data() {
        return {
            successMessage: "",
      errorMessage: "",
      alertType: "",
            NameContest: 'Cntests Programing 1',
            EndOfContest: 'end',
           
            confirmId:null,
            activeSolutionId: null,
            formData:{
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
        joinContest(contestId) {
            axios.post(BASE_URL +  `contests/join/${contestId}`, this.formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
                .then((response) => {
                 
                    this.successMessage = response.data.message;
          this.alertType = "success";
          this.alertMessage = response.data.message;
                    console.log(response);
                    console.log(this.password);
                    this.$router.push({ name: 'detaileContest', params: { ContestId: contestId } });
                    // <router-link to="/home"></router-link>
                })
                .catch((error) => {
                    this.errorMessage = "Error on join: " + error.response.data.message;
          this.alertType = "error";
          this.alertMessage = "Error on join: " + error.response.data.message;
                    console.log(error);
                    this.error = error;
                    setTimeout(() => {
            this.clearAlert();
          }, 2000);
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
p,
small {
    color: var(--GreenColor);
}

.btn {
    background: var(--GreenColor);
}

.card .img-fluid {
    height: 5rem;
    width: 10rem;
    max-width: 100%;

}

.input-group .form-control {
    background: #e7dff9;
    /* background: var(--WhiteColor); */
    border: 1px solid var(--LightGreen);
}

.card {
    border: none;
    /* background: var(--WhiteColor);  */
}

.card .img-fluid {
    height: 5rem;
    width: 10rem;

}

.Divider {
    border-top: 1px solid var(--LightGreen) !important;
    /* border-bottom: 1px solid  var(--LightGreen)!important; */
    /* height: 0.5px; */
    margin: 0px 100px;
}

.card .text-muted {
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