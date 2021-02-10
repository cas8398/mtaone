<template>
  <f7-page name="post">
    <f7-navbar bg-color="green" title="Saling Sapa" back-link="Back"></f7-navbar> 
          
    
  <div id="atas">
      <f7-block-title>{{currentDateTime()}}</f7-block-title>
  </div>
      
   
      <hr/> 
  <transition-group class="page-content hide-navbar-on-scroll"
  name="bounceUp"  
>  <div class="timeline medium-sides" v-for="item in salingsapa" :key="item.unix">
      <div class="timeline-item"  >
    <div class="timeline-item-date">{{item.unix |  moment('from')}}</div>
    <div class="timeline-item-divider"></div>
    <div class="timeline-item-content">
      <div class="timeline-item-inner"> {{item.pesan}}</div>
    </div>
  </div>
    </div> 
      
</transition-group>
      
   <f7-toolbar tabbar :position="'bottom'">
   <f7-link> 
       <f7-list-input   
          v-on:click="moveTo()"
          class="inputCat"
          :value="inputCat"
          @input="inputCat = $event.target.value"
          type="text"
          placeholder=" ..Tulis disini" 
    floating-label 
    clear-button required validate
        ></f7-list-input></f7-link>
    <f7-link > 
        <f7-button  fill color="green" v-on:click="cek()">Kirim</f7-button> </f7-link>
     
    </f7-toolbar> 
  </f7-page>
</template>

<script> 
import moment from 'moment';
import axios from 'axios';
export default {   
  created() {
 this.$f7.preloader.show();
  axios.get(`http://api.flagodna.com/wp/salingsapa2.php`)
                 
    .then(response => { 
      this.salingsapa = response.data 
      this.$f7.preloader.hide();
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  mounted() { 
    document.addEventListener("backbutton", this.onBackKeyDown, false);
  },
    
  data() {
    return { 
       inputCat: '', 
      salingsapa: [],  
    };
  },
    
  methods: { 
      
 currentDateTime() {
      return moment().format('LLLL');
    },
scroll() {    document.getElementById('atas').scrollIntoView({
        behavior: "smooth"
      })},
 
  cek() {
if(this.inputCat == ''){
        this.$f7.dialog.alert('Pastikan pesan diisi');
   
   }else {
       this.created();
}
  },      
 async  created() {   
 var data = new FormData();
data.append('pesan', this.inputCat); 

axios.post('http://mta.flagodna.com/chat/admin2.php?pesan='+this.inputCat+'', data)
    .then(response => {  
        this.inputCat = '' 
        this.salingsapa = response.data
         this.scroll()
    })
    .catch(e => {
        this.errors.push(e)
});         
             }
  
  }
};
</script>
