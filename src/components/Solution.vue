<template>
  <div class="card-body">
    <p class="card-text" ref="codeContainer">
      <pre><code :class="languageClass">{{ solve }}</code></pre>
    </p>
  </div>
</template>

<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css'; // You can choose a different style if you prefer

export default {
  props: ['solve', 'language'],
  computed: {
    languageClass() {
      return this.language;
    }
  },
  watch: {
    solve() {
      this.$nextTick(() => {
        this.highlightCode();
      });
    },
    language() {
      this.$nextTick(() => {
        this.highlightCode();
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.highlightCode();
    });
  },
  methods: {
    highlightCode() {
      const codeBlock = this.$refs.codeContainer.querySelector('code');
      hljs.highlightElement(codeBlock);
    }
  }
};
</script>

<style>
.card-body {
  height: 100%;
}
</style>
//192.168.95.243