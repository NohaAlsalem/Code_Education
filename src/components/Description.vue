<template>
  <div class="card-body" style="height: 40%; overflow-y: auto">
    <h5 class="card-title">1. Two Sum</h5>
    <h6 class="card-title" style="color: var(--GreenColor)">Easy</h6>
    <h6 class="card-title" style="color: var(--GreenColor)">Language: C++</h6>
    <p class="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet
      dolor? Ab neque quam reprehenderit vero, fugiat laudantium doloribus unde
      necessitatibus, consequuntur nisi dolorem? Dolor accusamus vero autem, sit
      culpa nam repellendus minima optio rerum dolore qui a deleniti minus illo
      iure sed facilis et veritatis recusandae consequuntur! Itaque omnis
      voluptas modi facere, enim, non, maxime rem obcaecati exercitationem quasi
      suscipit placeat doloremque. Ut, quis quasi? Hic enim distinctio sequi
      perspiciatis molestiae, vel vero. Pariatur, tempora ratione est obcaecati
      quasi amet magnam veniam temporibus nostrum laboriosam, consectetur, iste
      a odio et. Laborum quia placeat neque suscipit autem dolores nam ipsam.
    </p>
    <h6 class="card-title" style="color: var(--GreenColor)">Test 1:</h6>
    <p>
      <span style="color: var(--GreenColor)">Input: </span>
      nums = [2,7,11,15], target = 9
    </p>
    <p>
      <span style="color: var(--GreenColor)">Output: </span>
      [0,1]
    </p>
    <div class="d-flex">
      <font-awesome-icon
        icon="font-awesome"
        class="me-1"
        style="color: var(--GreenColor)"
      />
      <h6 class="card-title" style="color: var(--GreenColor)">Tags:</h6>
    </div>
    <div>
      <button type="button" class="custom-btn" style="pointer-events: none">
        Array
      </button>
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <div class="d-flex align-items-center" @click="toggleCollpases">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  :aria-expanded="toggleCollapse"
                  aria-controls="collapseOne"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-lightbulb"
                    class="fa-xs me-1"
                    style="color: var(--GreenColor)"
                  />
                  Hint 1:
                </button>
                <div
                  class="arrow-icon"
                  :class="{
                    'arrow-up': toggleCollapse,
                    'arrow-down': !toggleCollapse,
                  }"
                ></div>
              </div>
            </h5>
          </div>

          <div
            id="collapseOne"
            :class="{
              'collapse show': toggleCollapse,
              collapse: !toggleCollapse,
            }"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Collapsible Group Item #2
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Collapsible Group Item #3
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleCollapse: false,
    };
  },
  methods: {
    toggleCollpases() {
      this.toggleCollapse = !this.toggleCollapse;
    },
  },
};
</script>

<style>
.custom-btn {
  border: none;
  background: var(--darkwhite);
  border-radius: 25px;
  color: var(--GreenColor);
  padding: 0px 10px;
}
.arrow-down,
.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-left: auto;
}

.arrow-down {
  border-top: 5px solid black;
}

.arrow-up {
  border-bottom: 5px solid black;
}
#accordion {
  margin-top: 10px;
}
.icon {
  color: var(--GreenColor);
  size: 10px;
}
.d-flex.align-items-center {
  display: flex;
  align-items: center;
}
.btn.btn-link {
  text-decoration: none;
  color: var(--GreenColor);
}
</style>
