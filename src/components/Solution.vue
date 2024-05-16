<template>
  <div class="card-body">
    <p class="card-text" ref="codeContainer">
      <pre><code class="language-java">{{ solve }}</code></pre>
    </p>
  </div>
</template>

<script>
// Import Prism.js and its necessary components
import 'prismjs';
// import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-java';

export default {
  props:['solve'],
 
  mounted() {
    // Call Prism.highlightAll() to apply syntax highlighting
    Prism.highlightAll();
  },
};
</script>

<style>
.card-body {
  height: 100%;
}
</style>
