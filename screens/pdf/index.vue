<template>
  <f7-page name="post">
    <f7-navbar bg-color="green" :title="post ? post.title : ''" back-link="Back"></f7-navbar> 
     <img :data-src="post.img" class="lazy lazy-fade-in" :style=" 'height: 100%; max-height: 200px; width: 100%; max-width: 300px; display: block;margin: 0 auto'">
      <f7-card
    title="Download"
    content=" Silahkan download Brosur dengan mengeklik tombol kanan dibawah."
   
  ></f7-card>
      <br><br><br>
    <!-- FAB Right Bottom -->
    <f7-fab position="left-bottom" @click="kembali()" >
<f7-icon icon="icon-back" ></f7-icon>
    </f7-fab>
    <f7-fab position="right-bottom" @click="inapp(post)" >
 ⬇️
    </f7-fab>
  </f7-page>
</template>

<script>
//import PdfViewer  from "vue-pdf-app";
import axios from 'axios';    
export default {
  name: "post",
  props: ["post"], 
  mounted() {    
    document.addEventListener("backbutton", this.onBackKeyDown, false);
  },
   
	 
  methods: {
      kembali() {
      this.$f7router.back();
      },   
      
      inapp() {
     var ref = cordova.InAppBrowser.open(this.post.isi, '_system', 'location=yes');
          ref();
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

 }   
 
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
