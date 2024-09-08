<template>
    <div>
        <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container-fluid">
                <!-- <a class="navbar-brand" href="#">Navbar</a> -->
                <div class="d-flex">
                    <img src="@/assets/images/logoo.png" alt="Logo" width="40" height="40"
                        class="d-inline-block align-text-top ps-0 ms-0">
                        <codeEdu class="mt-1"></codeEdu>
                </div>


                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-0  mb-lg-0 mt-2">

                        <router-link to="/teachersA" style="text-decoration: none; color: inherit;">
                            <li class="nav-item">
                                <h5 class="nav-link p-2 p-lg-3" aria-current="page" :class="{active:$route.path==='/teachersA'}">Teachers</h5>
                                <!-- <a class="nav-link active" aria-current="page" href="#">Problems</a> -->
                            </li>
                        </router-link>


                        <router-link to="/examsA" style="text-decoration: none; color: inherit;">
                            <li class="nav-item">
                                <h5 class="nav-link p-2 p-lg-3" :class="{active:$route.path==='/examsA'}">Exams</h5>
                                <!-- <a class="nav-link" href="#">Contests</a> -->
                            </li>
                        </router-link>

                        <router-link to="/studentsA" style="text-decoration: none; color: inherit;">
                            <li class="nav-item">
                                <h5 class="nav-link p-2 p-lg-3" :class="{active:$route.path==='/studentsA'}">Students</h5>
                                <!-- <a class="nav-link" href="#">classes</a> -->
                            </li>
                        </router-link>

                        <router-link to="/subjectsA" style="text-decoration: none; color: inherit;">
                            <li class="nav-item">
                                <h5 class="nav-link p-2 p-lg-3" :class="{active:$route.path==='/subjectsA'}">Subjects</h5>
                                <!-- <a class="nav-link" href="#">Exams</a> -->
                            </li>
                        </router-link>
                        <router-link to="/Add_Problem" style="text-decoration: none; color: inherit;">
                            <li class="nav-item">
                                <h5 class="nav-link p-2 p-lg-3" :class="{active:$route.path==='/Add_Problem'}">Add Problem</h5>
                                <!-- <a class="nav-link" href="#">Exams</a> -->
                            </li>
                        </router-link>


                    </ul>
                  
                </div>
            </div>
        </nav>

    </div>
</template>

<script>
import codeEdu from './codeEdu.vue';
export default {
    components: {
        codeEdu
    }
}

</script>

<style >
:root {
    --WhiteColor: #CAA8F5;
    --darkwhite: #CAA8F5;
    --LightGreen: #9984D4;
    --GreenOpacity: #CAA8F5;
    --GreenColor: #592E83;
    --borderColor:#230C33;


    /* --WhiteColor: #FAF3DD;
    --darkwhite: #C8D5B9;
    --LightGreen: #8FC0A9;
    --GreenOpacity: #68B0AB;
    --GreenColor: #4A7C59;
    --borderColor:#707070; */
}
.i{
 
 color: var(--GreenColor);
}
.navbar {
    /* background-color: var(--WhiteColor); */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

}

.nav-link {
    color: var(--GreenColor);
    font-size: 1.25rem;

    /* padding: 1rem; */
    margin-bottom: 2;
}


.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:hover {
    color: var(--LightGreen);
}
.navbar .navbar-nav .nav-link.active{
    color: var(--GreenColor);
    font-weight: bold;
    text-underline-position: auto;
}

.navbar .profile {
    border-left: 1px solid var(--GreenColor);
}

.navbar .profile .svg {
    color: var(--GreenColor);
}

.navbar .navbar-toggler {
    color: white;
    font-size: 25px;
    border-color: white;
}

.navbar .navbar-toggler:focus,
.navbar .navbar-toggler:hover {
    color: var(--LightGreen);
    box-shadow: none;
}

.navbar .navbar-toggler[aria-expanded="true"] {
    border-color: var(--GreenColor);
}
</style>