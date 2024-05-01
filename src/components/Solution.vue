<template>
  <div class="card-body">
    <!-- <h5 class="card-title">1. Two Sum</h5>
        <h6 class="card-title" style="color: var(--GreenColor)">Easy</h6> -->
    <p class="card-text" ref="codeContainer">
      
        <pre><code class="language-cpp">
          <prism language="java">
            #include &lt;iostream&gt;
             int main() {
             std::cout &lt;&lt; "Hello, World!" &lt;&lt; std::endl;
             return 0;
}
</prism>
</code></pre>
    
    </p>
  </div>
</template>
<script>
import "prismjs/prism";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-java";
// import 'prismjs/components/prism-cpp';
// import "prismjs/components/prism-cpp";
// import "prismjs/components/prism-cpp.min.js";
import Prism from "vue-prism-component";

export default {
  components: {
    Prism,
  },
  data() {
    return {
      code: "",
    };
  },
  mounted() {
    this.code = `#include <iostream>
int main() {
  std::cout << "Hello, World!" << std::endl;
  return 0;
}`;
  },
};
</script>

<style></style>
