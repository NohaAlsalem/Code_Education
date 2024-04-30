<template>
  <SubjectAndClass></SubjectAndClass>
  <div class="container text-center col-md-12">
    <table class="table">
      <thead>
        <tr class="colored-header">
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Presence (5)</th>
          <th scope="col">Exam mark (15)</th>
          <th scope="col">Tests(10)</th>
          <th scope="col">Total mark</th>
          <th scope="col">Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td><input type="text" value="Mark" /></td>
          <td><input type="text" value="Mark" /></td>
          <td><input type="text" value="Mark" /></td>
          <td><input type="text" value="Mark" /></td>
          <td>
            <button type="button" class="btn btn-success">Edit</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>
            <button type="button" class="btn btn-success">Edit</button>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>Otto</td>
          <td>
            <button type="button" class="btn btn-success">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SubjectAndClass from "../components/SubjectAndClass.vue";
export default {
  components: { SubjectAndClass },
};
</script>

<style></style>
