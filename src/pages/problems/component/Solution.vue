<template>
    <div class="card-body" style="height:100vh; overflow-y: auto">
        <table class="table table-bordered    narrow-table me-0 overflow-auto">

            <tbody>
                <tr v-for="solution in solutions" :key="solution.id">
                    <td @click="getSolutiondetails(solution.id)">

                        <!-- <router-link :to="{ name: 'mySolution', params: { SolutionId: solution.id } }"
                            style="text-decoration: none; color: inherit;"> -->
                        <div class="row" @click="toggleCollapse(solution.id)">
                            <div class="i" :data-bs-toggle="'collapse'" :data-bs-target="'#collapse' + solution.id"
                                aria-expanded="false" :aria-controls="'collapse' + solution.id">
                                <div class="d-flex">
                                <div class="col">
                                    <p>{{ solution.name }}</p>
                                </div>
                                <div class="col" style="text-align: end;">
                                    <p v-if="solution.status == 'accept'" @click="chosed = true">
                                        <font-awesome-icon :icon="['far', 'circle-check']" />
                                    </p>
                                    <p v-else @click="chosed = false">
                                        <font-awesome-icon :icon="['far', 'circle-xmark']" style="color: brown;" />
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div :class="['collapse', { show: isActive(solution.id) }]" :id="'collapse' + solution.id"
                            style="justify-self: start; text-align: left;">


                      

                            <div class="row mb-3 mt-2">
                                
                                <div class="col d-flex">
                                    <h6 style="color: var(--GreenColor);">
                                        {{ solution.name }}:
                                    </h6>
                                </div>
                                <div class=" col mt-0" style="text-align: end;">

                                    <h6 v-if="solution.status == 'accept'" style="color: var(--GreenColor);">
                                        <font-awesome-icon :icon="['fas', 'circle-check']" />
                                        Accepted
                                    </h6>

                                    <h6 v-else style="color: var(--GreenColor);">
                                        <font-awesome-icon :icon="['far', 'circle-xmark']" />
                                        Not Accepted
                                    </h6>
                                </div>
                            </div>


                            <div class="backg p-4">
                                <div class="card-text">
                                    <pre ref="codeContainer"><code>{{ solve.solve }}</code></pre>
                                </div>
                            </div>
<div v-if="ll >= 1">
                            <h6 style="color: var(--GreenColor);" >
                                Tests :
                            </h6>
                        </div>
                            <div v-for="(testcase, index) in testcases" :key="index">
                                <h6 style="color: var(--GreenColor); margin-top: 20px;">
                                    Test {{ index + 1 }} :
                                </h6>
                                <p>Input:</p>

                                <p class="backg mt-0">
                                    {{ testcase.input }}
                                </p>
                                <p>Output:</p>
                                <p class="backg">{{ testcase.output }}</p>
                                <p>Answer</p>
                                <p class="backg">{{ testcase.answer }}</p>
                            </div>


                        </div>


                        <!-- </div>
                        </router-link> -->
                    </td>
                </tr>

            </tbody>
        </table>

    </div>
</template>

<script>
import 'prismjs/components/prism-javascript';
import { BASE_URL } from "@/assets/config";

import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import axios from 'axios';
export default {
    props: {
        problemId: Number,
    },
    data() {
        return {
            chosed: false,
            solutions: [],
            solve: {},
            testcases: [],
            activeSolutionId: null,
            ll:0,
        }
    },
    watch: {
        solve() {
            this.highlightCode();
        }
    },
    mounted() {
        this.highlightCode();
        this.getSolutions(this.problemId);
this.ll=this.testcases.length;
    },
    updated() {
        this.highlightCode();
    },

    methods: {
        highlightCode() {
            this.$nextTick(() => {
                const codeContainer = this.$refs.codeContainer;
                console.log('codeContainer:', codeContainer); // Debugging log
                console.log('Type of codeContainer:', typeof codeContainer); // Debugging log
                if (codeContainer && codeContainer.querySelector) {
                    const codeBlock = codeContainer.querySelector('code');
                    if (codeBlock) {
                        const result = hljs.highlightAuto(codeBlock.textContent);
                        codeBlock.innerHTML = result.value;
                    }
                } else {
                    console.error('codeContainer is not an HTML element or does not have querySelector method');
                }
            });
        },


        toggleCollapse(solutionId) {
            this.activeSolutionId = this.activeSolutionId === solutionId ? null : solutionId;
        },
        isActive(solutionId) {
            return this.activeSolutionId === solutionId;
        },

        getSolutions(problemId) {
            axios.get(BASE_URL + `problems/solves/${problemId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                this.solutions = response.data.data;
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },

        getSolutiondetails(solutionId) {
            this.solve = {};
            this.testcases = [];
            axios.get(BASE_URL + `problems/solution/${solutionId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                this.solve = response.data.data;
                this.testcases = response.data.data.testCases;
                console.log(response.data.data.testCases);
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        }

    }
};
</script>

<style scoped>
h6{
    margin: 0;
    padding: 0;
}
.card-body {
    border: 1px solid var(--GreenOpacity);
    height: 40%;
    max-height: 40;
}

p {
    color: var(--GreenOpacity);
}

.table {
    border: 1px solid var(--borderColor);
    border-radius: 10px;
}

.backg {
    background: #e7dff9;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid var(--borderColor);
    /* height: 40px; */
}

.collapse {
    display: none;
}

.collapse.show {
    display: block;
}
</style>
