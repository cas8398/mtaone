<template >
  <f7-page name="post" id="wow" color-theme="deeporange" >
    <f7-navbar class="navbar2" title="STOK PMI" back-link="Back"></f7-navbar> 
      <f7-card-content class="hide-navbar-on-scroll">  
    <transition-group class="page-content hide-navbar-on-scroll"
  name="bounceUp"  
>     <div class="hide-navbar-on-scroll" v-for="item in contents" :key="item.id">
         
    <f7-card > 
        <span slot="header">{{item.nama}}</span>
  <span slot="content"><f7-row>
      <f7-col><b>Darah A :</b>
    <span v-html="item.daraha"></span></f7-col>
      <f7-col><b>Darah B :</b>
    <span v-html="item.darahb"></span> </f7-col>
    </f7-row>
      <f7-row>
      <f7-col><b>Darah AB :</b>
    <span v-html="item.darahab"></span></f7-col>
      <f7-col><b>Darah 0 :</b>
    <span v-html="item.daraho"></span></f7-col>
    </f7-row> 
      <f7-row>
      <f7-col><b>TOTAL :</b> 
    <span v-html="item.total"></span></f7-col> 
    </f7-row> </span>
  <span slot="footer">Update per {{item.tanggal}}</span>
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
 axios.get('http://api.flagodna.com/wp/pmi2.php')
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
