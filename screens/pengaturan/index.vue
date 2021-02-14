<template>
  <f7-page id="wow" name="post"  color-theme="deeporange" >
    <f7-navbar  class="navbar2" title="Pengaturan" back-link="Back">
     
    </f7-navbar>
    <f7-card class="demo-card-header-pic" outline >
     <f7-list form >  
        <f7-list-input  
          @click="hapuscari()"
          class="inputCat2"
          :value="newCat2"
          @input="newCat2 = $event.target.value"
          type="text"
          placeholder="Nama akan muncul dimenu beranda"
    label="Silahkan Tulis Nama saudara"
    floating-label  
        ></f7-list-input>  
    <div class="inigrid" >
       <f7-row> 
      <f7-col > <f7-button  key="123" fill color="green" v-on:click="simpannama()">Simpan</f7-button></f7-col>
    </f7-row>
    </div>  
         
       </f7-list> 
     </f7-card>   
        
      <f7-card class="page-content hide-navbar-on-scroll">
          
      <f7-list class="searchbar-not-found">
    <f7-list-item title="Kota tidak ditemukan"></f7-list-item>
  </f7-list>
          
  <f7-list class="search-list searchbar-found" >
    <f7-list-item v-for="item in pageOfItems" :key="item.id" :title="item.nama" @click="buka(item)"></f7-list-item> 
  </f7-list>  <jw-pagination :items="contents" @changePage="onChangePage"  ></jw-pagination>    
    </f7-card> 
      <f7-card> <p>Silahkan pilih kota untuk menampilkan kota jadwal sholat</p> </f7-card> 
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
  created() { 
      this.$f7.preloader.show();
 axios.get('http://api.flagodna.com/wp/sholatkota.php')
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
      namaku: [],
      newCat2: '',  
      contents: [], pageOfItems: [],
    };
  },
  methods: {   
onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
     
      simpannama(post) {
      localStorage.setItem('nama', this.newCat2);   
           this.$f7.dialog.alert('Berhasil menyimpan nama, '+this.newCat2);
    },
      buka(post) {
      localStorage.setItem('kota',  post.id);   
      localStorage.setItem('namakota',  post.nama);   
           this.$f7.dialog.alert('Berhasil memilih, '+post.nama);
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
