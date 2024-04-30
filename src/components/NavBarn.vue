<template>
    <div>
        <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container-fluid">
                <div>
                    <img src="@/assets/images/logoo.png" alt="Logo" width="40" height="40"
                        class="d-inline-block align-text-top ps-0 ms-0">
                        <codeEdu></codeEdu>
                    <!-- <h4 class="d-inline-block align-text-top pt-3 p-lg-3 pe-lg-0">Code</h4>
                    <h4 class="d-inline-block align-text-top pt-3 p-lg-3 ps-lg-2">Education</h4> -->
                </div>


                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2  mb-lg-0">

                        <router-link to="/problems" style="text-decoration: none; color: inherit;">
                            <li class="nav-item">
                                <h5 class="nav-link p-2 p-lg-3 active " aria-current="page">Problems</h5>
                                <!-- <a class="nav-link active" aria-current="page" href="#">Problems</a> -->
                            </li>
                        </router-link>


                        <router-link to="/contests" style="text-decoration: none; color: inherit;">
                            <li class="nav-item">
                                <h5 class="nav-link p-2 p-lg-3">Contests</h5>
                                <!-- <a class="nav-link" href="#">Contests</a> -->
                            </li>
                        </router-link>

                        <router-link to="/classes" style="text-decoration: none; color: inherit;">
                            <li class="nav-item">
                                <h5 class="nav-link p-2 p-lg-3">Classes</h5>
                                <!-- <a class="nav-link" href="#">classes</a> -->
                            </li>
                        </router-link>

                        <router-link to="/exams" style="text-decoration: none; color: inherit;">
                            <li class="nav-item">
                                <h5 class="nav-link p-2 p-lg-3">Exams</h5>
                                <!-- <a class="nav-link" href="#">Exams</a> -->
                            </li>
                        </router-link>

                    </ul>


                    <router-link to="/profile" style="text-decoration: none; color: inherit;">
                        <div class="profile ps-3 pe-3 d-none d-lg-block">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
                            </svg>
                           
                        </div>
                    </router-link>
                    <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import codeEdu from '@/components/codeEdu.vue';
export default {
    components: {
        codeEdu
    }
}
</script>


<style scoped>
:root {
    --WhiteColor: #FAF3DD;
    --darkwhite: #C8D5B9;
    --LightGreen: #8FC0A9;
    --GreenOpacity: #68B0AB;
    --GreenColor: #4A7C59;
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

.navbar .navbar-nav .nav-link.active,
.navbar .navbar-nav .nav-link:focus,
.navbar .navbar-nav .nav-link:hover {
    color: #8FC0A9;
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