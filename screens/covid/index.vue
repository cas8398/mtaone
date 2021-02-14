<template >
  <f7-page id="wow" name="post"  color-theme="deeporange" >
    <f7-navbar  class="navbar2" title="Data Covid" back-link="Back"></f7-navbar> 
      <f7-card-content class="hide-navbar-on-scroll">  
    <transition-group class="page-content hide-navbar-on-scroll"
  name="bounceUp"  
>     <div class="hide-navbar-on-scroll" v-for="item in contents" :key="item.id">
         
    <f7-card > 
        <span slot="header"> {{item.provinsi}}</span>
  <span slot="content"> 
      
      <f7-col><b>Positif : </b>
    <span v-html="item.positif"></span></f7-col> <br>
      <f7-col><b>Sembuh : </b>
    <span v-html="item.sembuh"></span></f7-col> <br>
     
     
      <f7-col><b>Meninggal : </b> 
    <span v-html="item.meninggal"></span></f7-col> 
     </span>
  
</f7-card>
    </div>
</transition-group>
           
      </f7-card-content>
   <br><br><br>
    <!-- FAB Right Bottom -->
    <f7-fab position="left-bottom" @click="kembali()" >
<f7-icon icon="icon-back" ></f7-icon>
    </f7-fab>
  </f7-page>
</template>

<script>
import axios from 'axios';   
export default {
  name: "post",
  props: ["post"],
  created() { 
      this.$f7.preloader.show();
 axios.get('http://api.flagodna.com/wp/apicovid2.php')
       .then(response => { 
      this.contents = response.data 
      this.$f7.preloader.hide();
    }); 
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
