<template >
  <f7-page id="wow" name="post"  color-theme="deeporange" >
    <f7-navbar  class="navbar2" title="Al Quran-ku" back-link="Back">
     <f7-subnavbar>
       <jw-pagination :items="contents" @changePage="onChangePage"  ></jw-pagination>
    </f7-subnavbar>
    </f7-navbar> 
        
      <f7-card-content class="hide-navbar-on-scroll">  
    <transition-group class="page-content hide-navbar-on-scroll"
  name="bounceUp"  
>     
        <div class="hide-navbar-on-scroll" v-for="item in pageOfItems" :key="item.number_of_surah" @click="bukaayat(item)">
         
 <f7-card class="cari"> 
        <span slot="header" class="ini"><b>{{item.number_of_surah}}. </b> {{item.name}} ({{item.name_translations.id}}) </span>  
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
import json from '../../assets/awal.json' ;
export default {
  name: "post", 
  mounted() {
    document.addEventListener("backbutton", this.onBackKeyDown, false);
  },
  data() {
    return { 
      pageOfItems: [],
     contents: json, 
    };
  },
  methods: {
onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
      
      bukaayat(post) {
      localStorage.setItem('surat',  post.name);  
      document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/ayat"+post.number_of_surah+"/", {
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
