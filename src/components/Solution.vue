<template>
  <div class="card-body">
    <p class="card-text" ref="codeContainer">
      <pre><code class="language-cpp">{{ solve }}</code></pre>
    </p>
  </div>
</template>

<script>
// Import Prism.js and its necessary components
import Prism from 'prismjs';
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike'; // Import C-like languages (includes C++)

export default {
  data() {
    return {
      code: "int sum(){return 3;}",
    };
  },
  props:['solve'],
  mounted() {
    // Call the highlightCode method when the component is mounted
    this.highlightCode();
  },
  methods: {
    highlightCode() {
      // Use Prism's highlightElement method to highlight the code
      Prism.highlightElement(this.$refs.codeContainer.querySelector('code'));
    }
  },
};
</script>

<style>
.card-body{
  height: 100%;
}</style>
