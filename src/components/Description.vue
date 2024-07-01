<template>
  <div class="card-body" style="height: 40%; overflow-y: auto">
    <h5 class="card-title">{{ name }}</h5>
    <h6 class="card-title" style="color: var(--GreenColor)">{{ diffculty }}</h6>
    <!-- <h6 class="card-title" style="color: var(--GreenColor)">Language: C++</h6> -->
    <p class="card-text">
      {{ description }}
    </p>
    <div v-if="test_case">
      <h6 class="card-title" style="color: var(--MainColor)">Test 1:</h6>
      <p>
        <span style="color: var(--MainColor)">Input: </span>
        {{ test_case.input }}
      </p>
      <p>
        <span style="color: var(--MainColor)">Output: </span>
        {{ test_case.output }}
      </p>
    </div>

    <div>
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <div class="d-flex align-items-center" @click="toggleTags">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  :aria-expanded="toggleTag"
                  aria-controls="collapseOne"
                >
                  <div class="d-flex">
                    <font-awesome-icon
                      icon="font-awesome"
                      class="me-1"
                      style="color: var(--MainColor)"
                    />
                    <h6 class="card-title" style="color: var(--MainColor)">
                      Tags:
                    </h6>
                  </div>
                </button>
                <div
                  class="arrow-icon"
                  :class="{
                    'arrow-up': toggleTag,
                    'arrow-down': !toggleTag,
                  }"
                ></div>
              </div>
            </h5>
          </div>

          <div
            id="collapseOne"
            :class="{
              'collapse show': toggleTag,
              collapse: !toggleTag,
            }"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <button
                v-for="tag in tags"
                :key="tag"
                type="button"
                class="custom-btn me-1"
                style="pointer-events: none"
              >
                {{ tag.name }}
              </button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <div class="d-flex align-items-center" @click="toggleHints1">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  :aria-expanded="toggleHint1"
                  aria-controls="collapseOne"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-lightbulb"
                    class="fa-xs me-1"
                    style="color: var(--MainColor)"
                  />
                  Hint 1:
                </button>
                <div
                  class="arrow-icon"
                  :class="{
                    'arrow-up': toggleHint1,
                    'arrow-down': !toggleHint1,
                  }"
                ></div>
              </div>
            </h5>
          </div>

          <div
            id="collapseOne"
            :class="{
              'collapse show': toggleHint1,
              collapse: !toggleHint1,
            }"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              {{ hint1 }}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <div class="d-flex align-items-center" @click="toggleHints2">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  :aria-expanded="toggleHint2"
                  aria-controls="collapseOne"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-lightbulb"
                    class="fa-xs me-1 icon"
                    style="color: var(--MainColor)"
                  />
                  Hint 2:
                </button>
                <div
                  class="arrow-icon"
                  :class="{
                    'arrow-up': toggleHint2,
                    'arrow-down': !toggleHint2,
                  }"
                ></div>
              </div>
            </h5>
          </div>

          <div
            id="collapseOne"
            :class="{
              'collapse show': toggleHint2,
              collapse: !toggleHint2,
            }"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              {{ hint2 }}
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
      toggleTag: false,
      toggleHint1: false,
      toggleHint2: false,
    };
  },
  props: [
    "name",
    "diffculty",
    "description",
    "tags",
    "hint1",
    "hint2",
    "test_case",
  ],
  methods: {
    toggleTags() {
      this.toggleTag = !this.toggleTag;
    },
    toggleHints1() {
      this.toggleHint1 = !this.toggleHint1;
    },
    toggleHints2() {
      this.toggleHint2 = !this.toggleHint2;
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
.fa-xs {
  color: yellow;
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
.card-body {
  height: 100%;
}
</style>
