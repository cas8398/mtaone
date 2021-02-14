<template>
  <f7-page id="wow" name="post"  color-theme="deeporange" >
    <f7-navbar   class="navbar2" :title="post ? post.title : ''" back-link="Back"></f7-navbar>  
    <f7-card
    title="Brosur"
    :content="post.title"
   
  ></f7-card>
      <f7-card
    title="Download"
    content=" Silahkan download Brosur dengan menge-klik tombol kanan dibawah."
   
  ></f7-card>
      <br><br><br>
    <!-- FAB Right Bottom -->
    <f7-fab position="left-bottom" @click="kembali()" >
<f7-icon icon="icon-back" ></f7-icon>
    </f7-fab>
    <f7-fab position="right-bottom" @click="inapp(post)" >
  <i class="f7-icons size-50">cloud_download</i>
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
