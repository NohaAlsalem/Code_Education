<template>
  <div class="card-body">
    <p class="card-text" ref="codeContainer">
      <pre><code>{{ solve }}</code></pre>
    </p>
  </div>
</template>

<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css'; // Ensure this path is correct

export default {
  props: ['solve'],
  watch: {
    solve() {
      this.highlightCode();
    }
  },
  mounted() {
    this.highlightCode();
  },
  methods: {
    highlightCode() {
      this.$nextTick(() => {
        const codeBlock = this.$refs.codeContainer.querySelector('code');
        if (codeBlock) {
          const result = hljs.highlightAuto(codeBlock.textContent);
          codeBlock.innerHTML = result.value;
        }
      });
    }
  }
};
</script>

<style>
.card-body {
  height: 100%;
}
</style>
