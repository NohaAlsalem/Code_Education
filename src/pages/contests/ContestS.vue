<template>
    <div>
        <NavBar></NavBar>
        <div class="screen w-100 h-100">
            <div class="sub_screen">
                <!-- ms-5 -->
                <div class="row mt-0  text-center justify-content-center align-items-center">
                    <div class="col-md-3 ps-5 pe-5  m-0" v-on:click="componente = 'all_Conetsts' " >
                        <h4 v-on:click="componente = choosecomponent(1)" v-bind:class="{ choosed  : allConetsts }"  > All Contests</h4>
                    </div>

                    <div class="col-md-3 ps-5 pe-5  m-0" v-on:click="componente = 'my_contests'">
                        <h4  v-on:click="componente = choosecomponent(2)"  v-bind:class="{ choosed : MyContests }">My Contests</h4>
                    </div>

                    <div class="col-md-3 ps-5 pe-5  m-0" v-on:click="componente = 'create_contest'">
                        <h4 v-on:click="componente = choosecomponent(3)"  v-bind:class="{ choosed : creatContests }">
                            Create Contests
                        </h4>
                    </div>
                    <div class="col-md-3"></div>

                </div>
                <div class="row">
                    <div class="md-col-9">
                        <keep-alive>
                            <component v-bind:is="componente"></component>
                        </keep-alive>
                    </div>
                </div>
            </div>






        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import MyContests from './comonents/myContests.vue';
import allConetsts from './comonents/allContests.vue';
import creatContests from './comonents/creatContests.vue';

export default {
    
    components: {
        NavBar,
        'all_Conetsts':allConetsts,
        'my_contests': MyContests,
        // 'join_Contest': joinContests,
        'create_contest': creatContests,
    },
    data() {
        return {
            componente: 'all_Conetsts',
            MyContests: false,
            allConetsts: true,
            creatContests: false,
        }

    },
    mounted(){
        // this.getMycontests();
    },
    methods: {
        choosecomponent(value) {
            if (value === 1) {
                //  this.componente ='my_contests',
                    this.MyContests = false,
                    this.allConetsts = true,
                    this.creatContests = false
            }
            if (value === 2) {
                // this.componente ='join_Contest',
                this.MyContests = true,
                    this.allConetsts = false,
                    this.creatContests = false
            }
            if (value === 3) {
                // this.componente ='create_contest',
                    this.MyContests = false,
                    this.allConetsts = false,
                    this.creatContests = true
            }
        },

    }
}
</script>

<style scoped>
a {
  text-decoration: none;
  outline: none;
  color: #444;
}
h4 {
    color: var(--GreenColor);
}

.screen {
    padding: 40px 80px;
    background: #e7dff9;
    height: 100vh;
}
.sub_screen {
    height: 100%;
    min-height: 80vh;
    border: 1px solid var(--GreenColor);
    border-radius: 5px;
    background: white;
    padding: 20px;
    /* height: 100%;
    border: 1px solid var(--WhiteColor);
    border-radius: 5px;
    background: white;
    padding: 20px; */
}

.choosed {
    background:  var(--GreenColor);
    border: 1px solid ;
    border-radius: 5px;
    min-height: 40px; /* Ensure a minimum height */
    color: #ffffff;
}
/* .choosed {
background: var(--darkwhite);
border: 1px solid ;
border-radius: 5px;
height: 40px;

color: var(--GreenColor);

} */


</style>