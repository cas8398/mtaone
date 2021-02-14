<template>
  <f7-page id="wow" name="post"  color-theme="deeporange" >
    <f7-navbar  class="navbar2" :title="post ? post.name : ''" back-link="Back"></f7-navbar>
    <div v-if="post">   
       <f7-card-content fill class="hide-navbar-on-scroll">  
   <f7-block strong inset>
    <p>{{post.name}} ( {{post.name_translations.id}} ),  surat ke {{contents.number_of_surah}}  diturunkan {{contents.place}}. Jumlah {{contents.number_of_ayah}} ayat,</p>
  </f7-block><hr>
   
           
    <div  v-for="row in pageOfItems " 
>   
     <transition-group class="page-content hide-navbar-on-scroll"
  name="bounceUp"  
>            
    <f7-card :key="row.number" expandable  >
    <f7-card-content  :style="{width: '100%'}">
      <div :style="{height: 'auto'}" id="expand">
        <f7-card-header  class="display-block">
    <f7-chip :text="row.number" color="orange"></f7-chip>
     <p class="rtl" > {{row.text}}</p>
     <p  >{{row.number}}. {{row.translation_id}}</p>
        </f7-card-header>
      </div>
      <div class="card-content-padding contentz"> 
    <div v-html="contents.tafsir.id.kemenag.text[row.number]" > 
    </div > <br><hr>
    <p>Sumber {{contents.tafsir.id.kemenag.source}}</p>  
          <f7-button raised fill card-close  class="card-opened-fade-in"> Tutup </f7-button> 
          <p>Atau swipe ke atas, pada atas halaman</p>
      </div> <br><br><br>
    </f7-card-content>
  </f7-card>   
         
</transition-group> 
        
              
    </div>   
           
           
      </f7-card-content>
    </div><br><br><br> 
   <f7-toolbar  class="centeris"  tabbar :position="'bottom'"> 
       <jw-pagination :items="contents.verses" @changePage="onChangePage" :labels="customLabels" ></jw-pagination> <br> 
    </f7-toolbar> 
  </f7-page>
</template>

<script>    
const customLabels = {
    first: 'Awal',
    last: 'Ahir',
    previous: 'Sebelumnya',
    next: 'Selanjutnya'
}; 
import axios from 'axios'
export default {
  name: "post",
  props: ["post"],  
created() {   
  axios
  .get ('../../'+this.post.number_of_surah+'.json')
     .then(response => { 
      this.contents = response.data 
})
      },
  mounted() {
    document.addEventListener("backbutton", this.onBackKeyDown, false);
  },
  data() {
    return { 
        customLabels, 
      pageOfItems: [],
    contents: [],
    };
  },
  methods: {
onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
      bukaayat(post) {
      document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/arti/", {
        props: {
          post: post
        }
      });
    },
     
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
