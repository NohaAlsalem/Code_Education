<template>
  <div>
    <NavBar></NavBar>
    <div class="container text-center col-md-12 mt-5">
      <table class="table">
        <thead>
          <tr class="colored-header">
            <th scope="col">Class</th>
            <th scope="col">Subject</th>
            <th scope="col">Number of sets</th>
            <th scope="col">Number of students</th>
            <th scope="col">Teacher name</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>fb</td>
            <td>fb</td>
            <td>
              <button type="button" class="btn btn-success me-2">Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>

<style scoped>
.custom-checkbox {
  width: 22px;
  height: 22px;
  background-color: var(--WhiteColor);
  border: 1px solid var(--GreenColor);
  border-radius: 4px;
  cursor: pointer;
}
.table thead th {
  background: var(--GreenColor);
  color: white;
}
.table thead {
  margin-bottom: 2px;
}
.custom-checkbox:checked {
  background-color: var(--GreenColor);
  border-color: var(--GreenColor);
}
</style>
