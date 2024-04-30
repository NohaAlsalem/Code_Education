<template>
  <div>
    <NavBar></NavBar>
    <div class="container text-center col-md-12 mt-5">
      <table class="table">
        <thead>
          <tr class="colored-header">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Presence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <div>
                <input
                  class="form-check-input custom-checkbox"
                  type="checkbox"
                  id="checkboxNoLabel"
                  value=""
                  aria-label="..."
                />
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <div>
                <input
                  class="form-check-input custom-checkbox"
                  type="checkbox"
                  id="checkboxNoLabel"
                  value=""
                  aria-label="..."
                />
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>
              <div>
                <input
                  class="form-check-input custom-checkbox"
                  type="checkbox"
                  id="checkboxNoLabel"
                  value=""
                  aria-label="..."
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="container text-end mt-5">
        <button type="button" class="btn btn-success me-2">Save</button>
      </div>
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

.custom-checkbox:checked {
  background-color: var(--GreenColor);
  border-color: var(--GreenColor);
}
</style>
