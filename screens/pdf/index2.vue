<template>
  <f7-page name="post">
    <f7-navbar bg-color="green" :title="post ? post.title : ''" back-link="Back"></f7-navbar> 
<div id="app2"> 
    <pdf-viewer :pdf="post.isi"></pdf-viewer>
	</div>
      <br><br><br>
    <!-- FAB Right Bottom -->
    <f7-fab position="left-bottom" @click="kembali()" >
<f7-icon icon="icon-back" ></f7-icon>
    </f7-fab>
    <f7-fab position="right-bottom" @click="downloadpdf(post)" >
 ⬇️
    </f7-fab>
  </f7-page>
</template>

<script>
import PdfViewer  from "vue-pdf-app";
import axios from 'axios';   
export default {
  name: "post",
  props: ["post"],
  components: {
    PdfViewer
  },
  mounted() {  
    document.addEventListener("backbutton", this.onBackKeyDown, false);
  },
  data() {
return { 
		}
  },
  methods: {
      kembali() {
      this.$f7router.back();
      },
    onBackKeyDown(e) {
      e.preventDefault();
      this.$f7router.back();
      document.removeEventListener("backbutton", this.onBackKeyDown);
    },
      downloadpdf(post) {
 this.$f7.preloader.show();
    const specificationId = post.isi;  
    const judul2 = post.date;  
    axios
        .get(specificationId, {
            headers: this.headers,
            responseType: 'blob', 
        }) 
      .then (response => {
      const type = response.headers['content-type']
      const blob = new Blob([response.data], { type: type, encoding: 'UTF-8' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = "Brosur_"+judul2+".pdf"
      link.click()
     this.$f7.preloader.hide();
  })
},
  } 
    
};
</script>
<style>
#app2 {
  height: 100%;
  text-align: center;
}
#app2 h3 {
  margin-top: 30px;
}
</style>
