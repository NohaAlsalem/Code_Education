<template>
    <div class="container text-center col-md-12" style="margin-top: 10px; margin-bottom: 10px">
      <div class="card text-start">
        <div class="card-header d-flex ">
          <h6 class="custom-button m-2">Language Information:</h6>
          <select class="drop" id="lnag" name="lang" v-model="formData.lang" placeholder="Lnguage" autocomplete="country-name" >
            <option class="opt" value="2">Java</option>
            <option class="opt" value="1">C++</option>
                  
                </select>
        </div>
        <div class="card-body">
          <textarea class="form-control" id="javaCode" rows="20" v-model="formData.code" @input="highlightCode"></textarea>
          <!-- <p v-if="errorDetails.length > 0" style="color: brown;">{{ this.errorDetails }}</p> -->
         <p>terminal</p>
          <div class="bckg">
            <span v-if="this.approved">approved:{{ this.approved }}</span>
          <span v-if="this.alertMessage"> message:{{ this.alertMessage }}</span>
       
         </div>
      
          <!-- <pre v-html="highlightedCode"></pre> -->
        </div>
       
        <div class="card-footer text-muted " style="justify-content: end;display: flex;">
          <!-- <button class="bttn m-1 mr-4" style="background: var( --WhiteColor); color: var(--GreenColor); padding: 1px 20px;" @click="run">Run</button> -->
          <button class="bttn m-1" @click="Solve(this.problemId)">Submit</button>
        

        </div>
        
        
      </div>
      <!-- <Alert :type="alertType" :message="alertMessage" @clear="clearAlert" style="align-content: center;"/> -->
    </div>
  </template>
  
  <script>
 import Alert from '@/components/Alert.vue';
  import { BASE_URL } from "@/assets/config";
  import axios from 'axios';

  export default {
    components:{
      Alert
    },
    props:{
      problemId:Number,
      
    },
    data() {
      return {
      
      //   highlightedCode: '',
      //   successMessage: "",
      // errorMessage: "",
      alertType: "",
      alertMessage: "",
      successMessage: "",
      errorMessage: "",
      errorDetails: [],
   approved:'',
     
       formData:{
        code:'',
        lang:1,
           },
           formData1:{
        input:'',
        code:1,
           }
      }
    },

    methods: {


        toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
     
   
      Solve(problemId) {
      axios.post( BASE_URL + `problems/solve/${problemId}`,this.formData,{ headers: {
                     Authorization: `Bearer ${ localStorage.getItem('token')}`,
                 }})
        .then((response) => {
        console.log(response);
        this.successMessage = response.data.message;
          this.alertType = "success";
          this.alertMessage = response.data.message;
        this.approved=response.data.approved;
          // setTimeout(() => {
          //   this.clearAlert();
          // }, 1000);
          // <router-link to="/home"></router-link>
        })
        .catch((error) => {
          console.log(error);
   
            // this.errorMessage = error.response.data.message;
            // this.errorDetails = error.response.data.approved;
     
            // this.errorMessage = "Error submit test: " + error.response.data.message;
            // this.errorDetails = [];
       
          this.alertType = "error";
          this.alertMessage =  error.response.data.message;
   this.approved=error.response.data.approved;
          // setTimeout(() => {
          //   this.clearAlert();
          // }, 1000);
        });
    },
    clearAlert() {
      this.alertType = "";
      this.alertMessage = "";
    },
    }
  };
  </script>
  
  <style scoped>
  .card{
    border: 1px solid var(--GreenOpacity);
  }
  .bckg{
     background: #e7dff9;
     max-height: max-content;
     /* height:4rem; */
  }
  .drop{
    background: #e7dff9;
    border: none;
    color: var(--GreenColor);
    border-radius: 5px;
  }
  .opt{
    background: #e7dff9;
  }
  .card-body {
    border: 1px solid var(--GreenOpacity);
    height: 93vh;
  }
  .custom-button {
    color: var(--GreenColor);
    font-weight: bold;
  }
  /* .btn {
    background: var( --LightGreen);
    padding: 0px 2px;
} */
.bttn {
    background: var(--GreenColor);
    color: white;
    padding: 0 20px;
    border-radius: 10px;
    border: none;
}
.custom-button,
.btn:hover
{
    color: var(--GreenColor);
    font-weight: bold;
}
.bttn:hover {
    /* color: var(--GreenColor); */
    font-weight: bold;
    /* color: aliceblue; */
}



.editor {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	gap: 0;
}

.editor pre,
.editor textarea {
	grid-area: 1 / 1 / 2 / 2;
}
pre,
.editor textarea {
	background-color: #f7f7f7;
	color: #272727;
	display: block;
	line-height: 1.5;
	margin: 0 0 1.5625em;
	overflow: auto;
	padding: 0.8125em;
	white-space: pre-wrap;
	word-break: break-all;
}

code {
	word-wrap: break-word;
}

pre,
code,
.editor textarea {
	font-family: Menlo, Monaco, "Courier New", monospace;
	font-size: 0.875em;
}

pre code {
	color: inherit;
	font-size: 1em;
}
.editor textarea {
	background-color: transparent;
	border: none;
	color: transparent;
	caret-color: #000;
	overflow: hidden;
	resize: none;
	width: 100%;
}








/* <pre><code class="language-javascript">
function helloWorld() {
  int x=1;
  cout>>frcedui
  console.log('Hello, world!');
}
</code></pre> */
.hljs {
  display: block;
  padding: 0.5em;
  background: #f5f5f5;
  color: #333;
}
.hljs-comment,
.hljs-quote {
  color: #777;
  font-style: italic;
}
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-name {
  color: #007acc;
}
.hljs-attribute,
.hljs-meta {
  color: #f08d49;
}
.hljs-number,
.hljs-regexp,
.hljs-link {
  color: #d36363;
}
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-subst {
  color: #50a14f;
}
.hljs-title,
.hljs-section {
  color: #4078f2;
}
.hljs-emphasis {
  font-style: italic;
}
.hljs-strong {
  font-weight: bold;
}
  </style>
  