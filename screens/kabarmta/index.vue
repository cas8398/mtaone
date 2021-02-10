<template> 
  <f7-page name="post">
    <f7-navbar bg-color="green" :title="post ? post.title : ''" back-link="Back"></f7-navbar>   
<iframe :src="post.isi" 
        frameborder="0" allow="autoplay; encrypted-media" class="iframe" sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation"
        id="Overlayvideo" allowfullscreen>
</iframe>
     <br><br><br>
    <!-- FAB Right Bottom -->
    <f7-fab position="left-bottom" @click="kembali()" :style=" 'bottom: 70px'">
<f7-icon icon="icon-back" ></f7-icon>
    </f7-fab>
  </f7-page>
</template>

<script> 
export default {
  name: "post",
  props: ["post"],
  created() { 
  },
  mounted() {
    document.addEventListener("backbutton", this.onBackKeyDown, false);
  },
  data() {
    return {
      contents: []
    };
  },
  methods: {
      kembali() {
      this.$f7router.back();
      },
    onBackKeyDown(e) {
      e.preventDefault();
      this.$f7router.back();
      document.removeEventListener("backbutton", this.onBackKeyDown);
    }
  }
};
</script>
