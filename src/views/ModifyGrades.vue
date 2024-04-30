<template>
  <SubjectAndClass></SubjectAndClass>
  <div
    v-for="grade in grades"
    :key="grade.id"
    class="container"
    style="
      background: var(--WhiteColor);
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 7px 7px;
      border: 1px solid var(--WhiteColor);
      border-radius: 5px;
    "
  >
    <h5 style="margin-top: 5px">
      Name:
      <span
        style="
          border-radius: 5px;
          border: 1px solid var(--GreenColor);
          background-color: var(--LightGreen);
          padding: 0px 3px;
        "
        >Loujain ibrahim</span
      >
    </h5>
    <div
      class="card text-start mt-3 mb-3"
      style="background-color: var(--WhiteColor)"
    >
      <div class="card-header">
        <h6>Description</h6>
      </div>
      <div class="card-body" style="height: 200px; overflow-y: auto">
        <h5 class="card-title">1. Two Sum</h5>
        <h6 class="card-title" style="color: var(--GreenColor)">Easy</h6>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          amet dolor? Ab neque quam reprehenderit vero, fugiat laudantium
          doloribus unde necessitatibus, consequuntur nisi dolorem? Dolor
          accusamus vero autem, sit culpa nam repellendus minima optio rerum
          dolore qui a deleniti minus illo iure sed facilis et veritatis
          recusandae consequuntur! Itaque omnis voluptas modi facere, enim, non,
          maxime rem obcaecati exercitationem quasi suscipit placeat doloremque.
          Ut, quis quasi? Hic enim distinctio sequi perspiciatis molestiae, vel
          vero. Pariatur, tempora ratione est obcaecati quasi amet magnam veniam
          temporibus nostrum laboriosam, consectetur, iste a odio et. Laborum
          quia placeat neque suscipit autem dolores nam ipsam.
        </p>
      </div>
      <h5 class="card-header">Solution:</h5>
      <!-- ms-3 mt-3 -->
      <div
        style="
          padding: 10px 10px;
          margin-top: 10px;
          height: 200px;
          overflow-y: auto;
        "
      >
        <p class="card-text" style="background: white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          amet dolor? Ab neque quam reprehenderit vero, fugiat laudantium
          doloribus unde necessitatibus, consequuntur nisi dolorem? Dolor
          accusamus vero autem, sit culpa nam repellendus minima optio rerum
          dolore qui a deleniti minus illo iure sed facilis et veritatis
          recusandae consequuntur! Itaque omnis voluptas modi facere, enim, non,
          maxime rem obcaecati exercitationem quasi suscipit placeat doloremque.
          Ut, quis quasi? Hic enim distinctio sequi perspiciatis molestiae, vel
          vero. Pariatur, tempora ratione est obcaecati quasi amet magnam veniam
          temporibus nostrum laboriosam, consectetur, iste a odio et. Laborum
          quia placeat neque suscipit autem dolores nam ipsam.
        </p>
      </div>
    </div>
    <div class="text-center">
      <h6>
        Grade
        <input
          type="text"
          value="20%"
          style="
            background: var(--darkwhite);
            border: 1.3px solid var(--GreenColor);
            border-radius: 5px;
          "
        />
      </h6>
    </div>
    <div class="text-end">
      <button
        type="button"
        class="btn"
        style="background: var(--GreenColor); color: white; margin-right: 10px"
      >
        Edit
      </button>
    </div>
  </div>
</template>

<script>
import SubjectAndClass from "../components/SubjectAndClass.vue";
export default {
  components: {
    SubjectAndClass,
  },
  data() {
    return {
      grades: [
        {
          id: 1,
        },
        { id: 2 },
        { id: 3 },
      ],
    };
  },
};
</script>

<style></style>
