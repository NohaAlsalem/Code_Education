<template>
  <NavBar></NavBar>
  <SubjectAndClass></SubjectAndClass>
  <div class="container text-center col-md-12">
    <table class="table ms-4 mt-3">
      <thead>
        <tr class="colored-header">
          <th scope="col">#</th>
          <th scope="col">Problem</th>
          <th scope="col">Date</th>
          <th scope="col">Operation</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td class="d-flex justify-content-center">
            <button type="button" class="btn btn-success me-2">Start</button>
            <button type="button" class="btn btn-danger me-2">Delete</button>
            <button type="button" class="btn btn-warning">End</button>
          </td>
          <td>
            <router-link
              class="mt-1"
              :to="{ name: 'testdetails', params: { id: 1 } }"
              style="text-decoration: none"
            >
              Show details
            </router-link>
          </td>
        </tr>
        <tr>
          <td scope="row">2</td>
          <td>Mark</td>
          <td>Otto</td>
          <td class="d-flex justify-content-center">
            <button type="button" class="btn btn-success me-2">Start</button>
            <button type="button" class="btn btn-danger me-2">Delete</button>
            <button type="button" class="btn btn-warning">End</button>
          </td>
          <td>
            <router-link
              class="mt-1"
              :to="{ name: 'testdetails', params: { id: 2 } }"
              style="text-decoration: none"
            >
              Show details
            </router-link>
          </td>
        </tr>
        <tr>
          <td scope="row">3</td>
          <td>Mark</td>
          <td>Otto</td>
          <td class="d-flex justify-content-center">
            <button type="button" class="btn btn-success me-2">Start</button>
            <button type="button" class="btn btn-danger me-2">Delete</button>
            <button type="button" class="btn btn-warning">End</button>
          </td>
          <td>
            <router-link
              class="mt-1"
              :to="{ name: 'testdetails', params: { id: 3 } }"
              style="text-decoration: none"
            >
              Show details
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div
    class="modal fade"
    id="exampleModalLong"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLongTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body container text-center col-md-12 mt-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Presence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
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
                <td scope="row">2</td>
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
                <router-link
                  :to="{ name: 'testdetails', params: { id: 3 } }"
                  style="text-decoration: none; color: inherit"
                >
                  <td scope="row">3</td>
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
                </router-link>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" class="btn btn-success me-2">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubjectAndClass from "../../components/SubjectAndClass.vue";
import NavBar from "../../components/NavBar.vue";
export default {
  components: { SubjectAndClass, NavBar },
};
</script>

<style scoped>
.modal-footer {
  border: none;
}
.table thead th {
  background: var(--GreenColor);
}
.table thead {
  margin-bottom: 2px;
}
</style>
