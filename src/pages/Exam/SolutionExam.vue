<template>
    <div class="card-body" style="height:100vh; overflow-y: auto">
        
                        <div class="row" >
                            <div class="i" >
                                <div class="col">
                                    <p> your Mark: {{ solution.mark }}</p>
                                </div>
                            </div>
                        </div>
                        <div >

                            <div class="row mb-3 mt-2">
                                <div class="col d-flex m-0">
                                    <h6 style="color: var(--GreenColor);">
                                        your Code:
                                    </h6>
                                </div>
                               
                            </div>
                            <div class="backg p-2 mt-0 mb-2">
                                <div class="card-text">
                                    <pre ref="codeContainer"><code>{{ solution.code1 }}</code></pre>
                                </div>                      
                            </div>

                            <h6  style="color: var(--GreenColor);">
                                answers :
                            </h6>
                            <div v-for="(answer, index) in answers" :key="index">
                                <h6 style="color: var(--GreenColor); margin-top: 20px;">
                                    Test {{ index + 1 }} :
                                </h6>
                                <p>Input:</p>

                                <p class="backg mt-0">
                                    {{ answer.input }}
                                </p>
                                <p>Output:</p>
                                <p class="backg">{{ answer.output }}</p>
                                <p>Answer</p>
                                <p class="backg">{{ answer.answer }}</p>
                            </div>


                        </div>
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
            solution: {},
            answers:[],
            solve: {},
           
           
            activeSolutionId: null,
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
            axios.get(BASE_URL + `exams/${problemId}/show-solve`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            }).then((response) => {
                this.solution = response.data.solve;
                this.answers=response.data.solve.answers;
            }).catch((error) => {
                console.log(error)
                this.errMessage = 'error retrieving data'
            })
        },

     
    }
};
</script>

<style scoped>
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
