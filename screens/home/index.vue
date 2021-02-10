<template >
  <f7-page  color-theme="teal" name="home" :page-content="false"  @page:init="onPageInit"> 
    <f7-navbar  bg-color="green"  title="MTA ONE"></f7-navbar>
    <f7-toolbar tabbar :position="'bottom'">
       <f7-link tab-link-active  tab-link="#tab-home"  text="Beranda" icon-fa="home" icon-size="15px" ></f7-link>
       <f7-link tab-link="#tab-cari"  text="Pencarian" icon-fa="search" icon-size="15px" ></f7-link>
      <f7-link tab-link="#tab-categories" text="Menu" icon-fa="list" icon-size="15px"></f7-link>
    </f7-toolbar> 
    <f7-tabs animated>   
      <f7-tab 
        tab-active
        id="tab-home"
        class="page-content infinite-scroll-content ptr-content"   @ptr:refresh.native="onPullToRefresh">
        <div class="ptr-preloader"  >
           <f7-preloader color="multi"></f7-preloader>
          <div class="ptr-arrow"></div>
        </div>  
          <div  v-for="item in tanggal">
      <f7-button fill  :key="item.tanggal" sheet-open=".tanggal">{{item.tanggal}}</f7-button> 
   <f7-sheet
    class="tanggal"
    style="height:auto; --f7-sheet-bg-color: #fff;"
    swipe-to-close
    backdrop
  >
    <f7-page-content> 
      <f7-block>
        <p> {{item.kejadian}}</p> 
      </f7-block>
    </f7-page-content>
  </f7-sheet></div>    
  <f7-swiper pagination 
  :params="{effect:'overflow',speed: 600, slidesPerView: 1, spaceBetween: 20, autoplay: { delay: 5000, disableOnInteraction:false }}"
             >
    <f7-swiper-slide
            v-for="(item, index) in kabar"
            :key="'p' + index"
            >  
 <div class="card"  @click="lihatberita(item)"> 
  
  <f7-list>
    <f7-list-item :title="item.title"></f7-list-item> 
  </f7-list> 
      <img class="lazy lazy-fade-in" :style=" 'height: 100%; max-height: 170px; width: 100%; max-width: 350px; display: block;margin: 0 auto'" :src="item.img" >
</div> </f7-swiper-slide>
  </f7-swiper>      
       <br>

 <f7-row tag="p">
      <f7-col tag="span">
        <f7-button raised round @click="mtatv()">MTA TV</f7-button>
      </f7-col>
      <f7-col tag="span">
        <f7-button raised round @click="persadafm()">PersadaFM</f7-button>
      </f7-col>
      <f7-col tag="span">
        <f7-button raised round @click="kajian()">Jihadpagi</f7-button>
      </f7-col>
    </f7-row>
     
     <f7-block-title>Saling Sapa</f7-block-title>
 <f7-swiper pagination  scrollbar
  :params="{effect:'overflow',speed: 600, slidesPerView: 1, spaceBetween: 20, autoplay: { delay: 3000, disableOnInteraction:false }}"
             > 
    <f7-swiper-slide
            v-for="(item, index) in salingsapa"
            :key="'p' + index"
            > 
           
        <div class="inislide" @click="sapa()">  
        <div class="card"> 
  <div class="card-content">
    <span v-html="item.pesan"></span>
  </div> 
</div>    
            
       </div></f7-swiper-slide>
  </f7-swiper>   
            
         <hr/>   
        <f7-block-title>Aktivitas</f7-block-title>
        <f7-list media-list>
    <f7-list-item 
            link="#"
            :title="item.title"
            :subtitle="item.date |  moment('from') "
            v-for="(item, index) in berandaya"
            :key="'p' + index"
            @click="cekloadmore(item)"
          >  
            <img  class="lazy lazy-fade-in demo-lazy"  slot="media" :src="item.img" width="80">
    <f7-chip outline :text="item.kategori" color="blue"></f7-chip>
          </f7-list-item> 
       
        </f7-list>  
      </f7-tab>
          
        <f7-tab  id="tab-cari" class="page-content infinite-scroll-content" @tab:show="tabCategoriesShown"   >   
    <f7-list form > 
        <f7-list-input  
          @click="hapuscari()"
          class="inputCat"
          :value="newCat"
          @input="newCat = $event.target.value"
          type="text"
          placeholder="Jika tidak muncul, data tidak tersedia"
    label="Silahkan tulis disini"
    floating-label 
    clear-button
        ></f7-list-input>  
    <div class="inigrid" >
       <f7-row>
      <f7-col> <f7-button fill raised actions-open="#actions-one-group">Menu Lainnya</f7-button></f7-col>
      <f7-col > <f7-button  key="123" fill color="green" v-on:click="mencari()">Cari</f7-button></f7-col>
    </f7-row>
    </div> 
        
       </f7-list>   
        <!-- One Group -->
  <f7-actions id="actions-one-group">
    <f7-actions-group>
      <f7-actions-label>Menu lainnya</f7-actions-label>
      <f7-actions-button  @click="brosurlengkap()">7. Berita Umum</f7-actions-button>
      <f7-actions-button @click="BukaBrosur()">6. Selayang Pandang</f7-actions-button>
      <f7-actions-button @click="DataCovid()">5. Data Covid</f7-actions-button>
      <f7-actions-button @click="FajarHidayah()">4. Fajar Hidayah</f7-actions-button>
      <f7-actions-button @click="JadwalMTATV()">3. Jadwal MTATV</f7-actions-button>
      <f7-actions-button @click="JadwalSholat()">2. Jadwal Sholat</f7-actions-button>
      <f7-actions-button @click="KalkulatorUmur()">1. Cabang dan Perwakilan-Ku</f7-actions-button> 
      <f7-actions-button color="red">Tutup</f7-actions-button>
    </f7-actions-group>
  </f7-actions>       
     
          <f7-list media-list  >
         <f7-list-item 
            link="#"
            :title="item.title"
            :subtitle="item.date |  moment('from')"
            v-for="(item, index) in cari"
            :key="'p' + index"
            @click="cekloadmore(item)"
          >
            <img  class="lazy lazy-fade-in demo-lazy"  slot="media" :src="item.img" width="80">
         <f7-chip outline :text="item.kategori" color="blue"></f7-chip>  </f7-list-item>
        </f7-list>
       
      </f7-tab> 
        
      <f7-tab  id="tab-categories" class="page-content" @tab:show="tabCategoriesShown">
        <f7-list >
            
          <f7-list-item @click="mtatv()">
         12. MTA TV
         </f7-list-item>
          <f7-list-item @click="persadafm()">
         11. Persada FM
         </f7-list-item>
          <f7-list-item @click="kajian()">
        10. Jihad Pagi 24 Jam
         </f7-list-item>
          <f7-list-item
            :title="item.name"
            :link="'/home/' + item.id"
            :badge="item.count"
            v-for="(item, index) in categories"
            :key="'c' + index"
            @click="showCategoryPosts(item)"
          ></f7-list-item>
        </f7-list>
      </f7-tab>  
      
    </f7-tabs>
  </f7-page> 
</template>

<script>     
import axios from 'axios';  
import moment from 'moment';  
export default { 
  name: "home", 
  created() { 
    this.getCategories(); 
  },
  mounted() {
    document.addEventListener("backbutton", this.onBackKeyDown, false);
    },
  computed: {
    noImage() {
      return require("../../assets/img/no-image.svg");
    }
  },  
beforeMount(){
    this.beranda()
    this.komen()
    this.kabarmta()
    this.tanggalhijriyah()
 },  
  data() { 
    return {   
      newCat: '',
      pesan: '',  
      posts: {  
        page: 1,
        category: null,
        data: []
      },  
      berandaya: [],
      salingsapa: [],
      tanggal: [],
      kabar: [],
      cari: [],
      categories: [], 
      allowInfinite: true,
      loading: true
        
        
    };
  },
  methods: {  
      moment: function () {  
        return moment();
  },
  keatas() {    document.getElementById('atas').scrollIntoView({
        behavior: "smooth"
      })},   
 reload(){    
   location.reload()

   }, 
 onPageInit() { 
    },

    onPullToRefresh() {
      const self = this; 
      self.beranda()  
      self.reload()  
      },  
      
     tanggalhijriyah () {       
 axios.get(`http://mta.flagodna.com/beranda/v2/api_tanggal.php`)
                 
    .then(response => { 
      this.tanggal = response.data
       
 if(this.tanggal.some(data => data.update != 1)){
   this.$f7.dialog.confirm('Kami telah memperbarui aplikasi ini, update aplikasi sekarang ?', function () {
       var ref = cordova.InAppBrowser.open('http://api.flagodna.com/wp/update.php', '_system', 'location=yes');
          ref();  
       
        });
}else{
   //don't exists
}
    })
    .catch(e => { 
     
    })
         
         
    },  
      
      beranda () {         
  this.$f7.progressbar.show('multi'); 
 axios.get(`http://api.flagodna.com/wp/beranda.php`) 
    .then(response => { 
      this.berandaya = response.data  
  this.$f7.progressbar.hide(); 
    }) 
    },  
      
    komen () {   
 axios.get(`http://api.flagodna.com/wp/salingsapa.php`)
   .then(response => { 
      this.salingsapa = response.data
    })
    .catch(e => {
      this.errors(e)
    })
    }, 
      
      kabarmta () {   
 axios.get(`http://api.flagodna.com/wp/kabarmta.php`)
    .then(response => { 
      this.kabar = response.data 
    })
    .catch(e => {
      this.errors.push(e)
    })
    }, 

     mencari () {    
 this.$f7.preloader.show();
  this.cari.page   = 1; 
 axios.get("http://api.flagodna.com/wp/cari.php?kueri="+this.newCat+"&page="+this.cari.page)      
    .then(response => { 
      this.cari = response.data
      this.$f7.preloader.hide();
    })
    .catch(e => {
      this.errors.push(e)
    })
    },  
brosurlengkap() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=15&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
    })
    .catch(e => {
      this.errors.push(e)
    })
},
 BukaBrosur() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=5&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
    })
    .catch(e => {
      this.errors.push(e)
    })
},DataCovid() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=21&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
    })
    .catch(e => {
      this.errors.push(e)
    })
},FajarHidayah() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=7&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
    })
    .catch(e => {
      this.errors.push(e)
    })
},JadwalMTATV() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=8&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
    })
    .catch(e => {
      this.errors.push(e)
    })
},JadwalSholat() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=12&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
    })
    .catch(e => {
      this.errors.push(e)
    })
},KalkulatorUmur() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=2&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
    })
    .catch(e => {
      this.errors.push(e)
    })
},     
      carikategori () {  
 this.$f7.preloader.show();  
  this.cari.page   = 1; 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=" +
 this.posts.category.id +"&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data
      this.$f7.preloader.hide();
    })
    .catch(e => {
      this.errors.push(e)
    })
    },      
      sapa() {  document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/salingsapa/", {
        props: { 
        }
      });
    },
      mtatv() {  document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/mtatv/", {
        props: { 
        }
      });
    },   
      persadafm() {  document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/persadafm/", {
        props: { 
        }
      });
    },
      kajian() {  document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/kajianfull/", {
        props: { 
        }
      });
    },
       

      
      cekloadmore(post) {  
  if(post.klik == '18'){
          this.bacapdf(post) 
} 
    if(post.klik == '3'){
          this.lihatberita(post) 
}  
 if(post.klik == '9'){
          this.readMore2(post) 
}   if(post.klik == '11'){
          this.readMore2(post) 
}  if(post.klik == '27'){
          this.readMore2(post) 
}  if(post.klik == '14'){
          this.readMore2(post) 
}  if(post.klik == '4'){
          this.readMore2(post) 
}  if(post.klik == '6'){
          this.readMore2(post) 
}  if(post.klik == '15'){
          this.readMore2(post) 
}  if(post.klik == '5'){
          this.readMore2(post) 
}  if(post.klik == '21'){
          this.readMore2(post) 
}  if(post.klik == '7'){
          this.readMore2(post) 
}  if(post.klik == '8'){
          this.readMore2(post) 
}  if(post.klik == '12'){
          this.readMore2(post) 
}  if(post.klik == '2'){
          this.readMore2(post) 
}   if(post.klik == '13'){
          this.readMore2(post) 
}  if(post.klik == '19'){
          this.readMore2(post) 
}      
   },
  
      readMore(post) {
      document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/post/", {
        props: {
          post: post
        }
      });
    },
    readMore2(post) {
      document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/post2/", {
        props: {
          post: post
        }
      });
    },
    lihatberita(post) {
      document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/kabarmta/", {
        props: {
          post: post
        }
      });
    },
    bacapdf(post) {
      document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/pdf/", {
        props: {
          post: post
        }
      });
    },    
  getCategories() {
 axios.get(`http://api.flagodna.com/wp/kategori.php`)
        .then(({ data }) => {
          this.categories = data;
        });
    },
    showCategoryPosts(category) { 
      this.posts.category = category; 
      this.carikategori();
      this.$f7.tab.show("#tab-cari");
    },
    tabHomeShown() {},
    tabCategoriesShown() {},
    onBackKeyDown(e) {
      e.preventDefault();
      window.navigator.app.exitApp();
    }
  }
    
};
</script>
