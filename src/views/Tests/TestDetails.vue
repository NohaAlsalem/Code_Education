<template>
  <SubjectAndClass></SubjectAndClass>

  <div
    class="container text-center col-md-12"
    style="margin-top: 10px; margin-bottom: 10px"
  >
    <div class="card text-start">
      <div class="card-header">
        <button
          type="button"
          class="btn"
          :class="{ 'custom-button': selectedButton === 1 }"
          @click="selectButton(1)"
        >
          Description
        </button>
        |
        <button
          type="button"
          class="btn"
          :class="{ 'custom-button': selectedButton === 2 }"
          @click="selectButton(2)"
        >
          Solution
        </button>
        <!-- |
        <button
          type="button"
          class="btn"
          :class="{ 'custom-button': selectedButton === 3 }"
          @click="selectButton(3)"
        >
          Test
        </button> -->
      </div>
      <Description v-if="description"> </Description>
      <Solution v-else></Solution>
    </div>
    <div class="text-start">
      <p style="margin-top: 10px; margin-bottom: 10px">
        Modifying the grades of students who received a zero grade and have
        codes
      </p>
      <router-link :to="{ name: 'modifygrades' }">
        <button
          type="button"
          class="btn"
          style="background: var(--GreenColor); color: white"
        >
          Edit
        </button>
      </router-link>
    </div>

    <table class="table">
      <thead>
        <tr class="colored-header">
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Presence</th>
          <th scope="col">Mark percentage</th>
          <th scope="col">Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Mark</td>
          <td><input type="text" value="Mark" /></td>
          <td>
            <button type="button" class="btn btn-success">Edit</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>

          <td><input type="text" value="Mark" /></td>
          <td>
            <button type="button" class="btn btn-success">Edit</button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>

          <td><input type="text" value="Mark" /></td>
          <td>
            <button type="button" class="btn btn-success">Edit</button>
          </td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Larry</td>
          <td>the Bird</td>

          <td><input type="text" value="Mark" /></td>
          <td>
            <button type="button" class="btn btn-success">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Description from "../../components/Description.vue";
import Solution from "../../components/Solution.vue";
import SubjectAndClass from "../../components/SubjectAndClass.vue";
export default {
  components: { SubjectAndClass, Description, Solution },
  data() {
    return {
      selectedButton: 1,
      description: true,
      solution: false,
    };
  },
  methods: {
    selectButton(buttonNumber) {
      this.selectedButton = buttonNumber;
      if (this.selectedButton === 1) {
        this.description = true;
        this.solution = false;
      } else {
        this.solution = true;
        this.description = false;
      }
    },
  },
};
</script>

<style scoped>
.btn {
  border: none;
}
.custom-button,
.btn:hover {
  color: var(--GreenColor);
  font-weight: bold;
}
</style>
