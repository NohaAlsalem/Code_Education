<template>
  <router-view />
</template>

<script>
import Pagination from "./components/Pagination.vue";
export default {
  name: "App",
  components: {
    Pagination,
  },
  data() {  
    return {
      currentPage: 1,
      fields: [
        {
          key: "last_name",
          sortable: true,
        },
        {
          key: "first_name",
          sortable: false,
        },
        {
          key: "age",
          label: "Person age",
          sortable: true,
          variant: "danger",
        },
      ],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald",
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style>
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
