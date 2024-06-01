<template>
  <div
    v-for="student in students"
    :key="student.id"
    class="container"
    style="
      background: var(--darkwhite);
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 7px 7px;
      border: 1px solid var(--darkwhite);
      border-radius: 5px;
    "
  >
    <h5 style="margin-top: 5px">
      Name:
      <span style="padding: 0px 3px">{{ student.name }}</span>
    </h5>
    <div
      class="card text-start mt-3 mb-3 me-2"
      style="border: 1px solid var(--darkwhite)"
    >
      <h5 class="card-header">Solution:</h5>
      <div
        style="
          padding: 10px 10px;
          margin-top: 10px;
          height: 200px;
          overflow-y: auto;
        "
      >
        <p class="card-text" style="background: white">
          {{ student.exams.length ? student.exams[0].code1 : "" }}
        </p>
      </div>
    </div>
    <div class="text-end me-2">
      <h6>
        Grade
        <input
          type="text"
          placeholder="Enter grade"
          style="
            background: var(--darkwhite);
            border: 1.3px solid var(--MainColor);
            border-radius: 5px;
          "
        />
      </h6>
    </div>
    <div class="text-end">
      <button
        type="button"
        class="btn"
        @click="updateMark(student.id, student.exams[0]?.mark)"
        style="background: var(--MainColor); color: white; margin-right: 10px"
      >
        Edit
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_URL } from "@/assets/config";

export default {
  props: ["category_id"],
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.fetchStudents();
  },
  methods: {
    fetchStudents() {
      const token = localStorage.getItem("token");
      axios
        .get(
          `${BASE_URL}categories/${this.$route.params.category_id}/students`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          this.students = response.data;
          console.log(this.students);
        })
        .catch((error) => {
          this.errMessage = "Error retrieving data";
        });
    },
    updateMark(studentId, mark) {
      const token = localStorage.getItem("token");
      const data = {
        category_id: this.$route.params.category_id,
        student_id: studentId,
        mark: mark,
      };

      axios
        .put(`${BASE_URL}update-mark`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("Mark updated successfully");
        })
        .catch((error) => {
          console.error("Error updating mark", error);
        });
    },
  },
};
</script>

<style></style>
