<template>
    <NavBar></NavBar>
   

    <div>
     
        <div class="ms-5">
            <div class="container-fluid">
                <form>
                    <div class="row">

                        <!-- v-for="problem in problems" :key="problem.id" -->
                        <div class="col me-0">
                            <div class="d-flex flex-row ms-5">
                                <div class="p-2">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-danger dropdown-toggle"
                                            data-bs-toggle="dropdown" aria-expanded="true">
                                            {{
                                                selectedDifficulty ? selectedDifficulty : "Difficulty"
                                            }}
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a class="dropdown-item" @click="submitDifficulty('Hard')">Hard</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="submitDifficulty('Medium')">Medium</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="submitDifficulty('Easy')">Easy</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="submitDifficulty('')" style="font-weight: bold;">None</a>
                                            </li>
                                        </ul>
                                    </div>
                                   
                                </div>


                                <div class="p-2">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-danger dropdown-toggle"
                                            data-bs-toggle="dropdown" aria-expanded="true">
                                            {{ selectedTag ? selectedTag : "Tags" }}
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li v-for="tag in tags" :key="tag.id">
                                                <a class="dropdown-item" @click="submitTag(tag.name)">{{ tag.name }}
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="submitTag('')" style="font-weight: bold;">None</a>
                                            </li>
                                        </ul>
                                    </div>
                               
                                </div>
                                <div class="p-2">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-danger dropdown-toggle"
                                            data-bs-toggle="dropdown" aria-expanded="true">
                                            {{ selectedSort ? selectedSort : "Sort" }}
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <a class="dropdown-item" @click="submitSort('AES')">AES</a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" @click="submitSort('DES')">DES</a>
                                            </li>
                                        </ul>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>

                        <div class="col ms-0">
                            <div class="input-group">
                                <input type="text" class="form-control search-input" placeholder="Search to problem"
                                    aria-label="Search" aria-describedby="basic-addon1" v-model="searchText"
                                    @input="onSearchInput" />
                                <!-- <div class="search-icon">
                                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                                </div> -->
                            </div>
                        </div>

        
                        <div class="col mt-5"></div>

                    </div>
                </form>
            </div>
            <div style="height:50vh;">
                <Table :problems="this.problems"></Table>
            </div>


            <!-- <footer class="page-footer  mt-3   mb-3 ">
                <div class="p-3">
                    <pagination :total-items="100" :items-per-page="10" :current-page="currentPage"
                        @pageChanged="handlePageChange" />
                </div>

            </footer> -->


          

        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Pagination from '@/components/Pagination.vue';
import Table from '@/components/Table.vue';
import { BASE_URL } from "@/assets/config";
import axios from 'axios';
export default {
    components: {
        NavBar,
        Pagination,
        Table
    },
    data() {
        return {
            currentPage: 1,
            searchText: "",
            selectedTag: "",
            selectedDifficulty: "",
            selectedSort: "",
            tags: [],
           
            formData: {
                diffculty: this.selectedDifficulty,
                sort: this.selectedSort,
                name: this.searchText,
                tag: this.selectedTag,
            },
            // formData: {
            //     diffculty: 'Difficulty',
            //     sort: 'AES',
            //     tag: 'Tag',
            //     name: '',
            // },
            problems: [],
            tags: [],
            searchResults: [],
        }
    },
    mounted() {

        this.getAllProblems();
        this.getTags();
    },
    methods: {
    
        handlePageChange(page) {
            this.currentPage = page
            // Fetch data for the new page
        },

        getAllProblems() {
            axios.get(BASE_URL + 'problems/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                this.problems = response.data.data;
                console
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },



        getTags() {
            axios.get(BASE_URL+'problems/tags', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                console.log(this.token);
                this.tags = response.data;
                console
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },
        submitTag(name) {
            this.selectedTag = name;
            console.log(this.selectedTag);
            this.Filter();
        },

        submitDifficulty(diff) {
            this.selectedDifficulty = diff;
            this.Filter();
        },

        submitSort(sort) {
            this.selectedSort = sort;
            this.Filter();
        },

        onSearchInput(event) {
            this.searchText = event.target.value;
            this.Filter();
        },
        Filter() {
            this.formData={   
                    diffculty: this.selectedDifficulty,
                sort: this.selectedSort,
                name: this.searchText,
                tag: this.selectedTag,},
            axios.post(BASE_URL+'problems/fillter', this.formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            })
                .then((response) => {
                    this.problems = response.data;
                    // this.searchResults = response.data;
                    console.log(response.data)
                    // <router-link to="/home"></router-link>
                })
                .catch((error) => {
                    console.log(error);
                    this.error = error;
                });
        },

      

    }
}
</script>

<style scoped>
.btn-group .btn {
    margin-top: 3rem;
    /* background: #e7dff9; */
    background: var(--GreenColor);
    border: none;
    color: #ffffff;
    /* color: var(--GreenColor); */
}

.input-group .form-control {
    margin-top: 3.5rem;
    background: #e7dff9;
    /* background: var(--WhiteColor); */
    border: 1px solid var(--LightGreen);
}

.input-group .form-control::placeholder {
    color: var(--GreenColor)
}

.Divider {
    border-top: 1px solid var(--LightGreen) !important;
    /* border-bottom: 1px solid  var(--LightGreen)!important; */
    /* height: 0.5px; */
    margin: 0px 100px;
}

.page-footer {}

.drop {
    background: var(--darkwhite);
    border: none;
    color: var(--GreenColor);
    border-radius: 5px;

}

p {
    color: var(--GreenColor);
    margin-bottom: 0;
}

.page-footer .btn {
    border: 1px solid var(--GreenColor);
    color: var(--GreenColor);
    background: var(--LightGreen);
}

</style>