<template>
  <f7-page id="wow" name="post"  color-theme="deeporange" >
    <f7-navbar  class="navbar2" :title="post ? post.name : ''" back-link="Back"></f7-navbar>
    <div v-if="post">   
       <f7-card-content fill class="hide-navbar-on-scroll">  
  <br> <f7-block strong inset bg-color="deeporange" text-color="white">
    <p>Surat {{post.name}} ( {{post.name_translations.id}} ),  surat ke {{post.number_of_surah}}  diturunkan {{post.place}}. Jumlah {{post.number_of_ayah}} ayat,</p>
  </f7-block><hr><br>
   
           
    <div  v-for="row in pageOfItems " 
>   
     <transition-group class="page-content hide-navbar-on-scroll"
  name="bounceUp"  
>            
         <f7-card :key="row.number"> 
     <p class="rtl" > {{row.text}}</p>
     <p  >{{row.number}}. {{row.translation_id}}</p>
    </f7-card>
         
    <f7-card class="navbar2" :key="'p' + row.number" :style="{height: '50px'}"  expandable  >
    <f7-card-content :style="{height: '100%'}">
      <div :style="{height: 'auto'}" id="expand"> 
            <p>Tafsir {{post.name}} ayat {{row.number}}</p>  
      </div>
      <div bg-color="white"  class="card-content-padding" > 
    <b><div  v-html="contents.tafsir.id.kemenag.text[row.number]" > 
    </div ></b> <br><hr>
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
    
import json from '../../assets/75.json' ;
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
        customLabels, 
      pageOfItems: [],
    contents: json,
    };
  },
  methods: {
onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
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
