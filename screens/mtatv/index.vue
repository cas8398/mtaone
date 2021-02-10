<template>
  <f7-page name="post">
    <f7-navbar bg-color="green" title="MTA TV" back-link="Back"></f7-navbar> 
      
 
<iframe src="https://www.youtube.com/embed/live_stream?channel=UCIrj7gqiu8uUfgMitYFzkNg" 
        frameborder="0" allow="autoplay; encrypted-media" class="iframe" sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
        id="Overlayvideo" allowfullscreen>
</iframe> 
  </f7-page>
</template>

<script>
export default {
  name: "post",  
  mounted() {
    document.addEventListener("backbutton", this.onBackKeyDown, false);
  },
  data() {
    return {
      content: null
    };
  },
  methods: {
    onBackKeyDown(e) {
      e.preventDefault();
      this.$f7router.back();
      document.removeEventListener("backbutton", this.onBackKeyDown);
    }
  }
};
</script> 