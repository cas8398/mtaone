<template >
  <f7-page id="wow" color-theme="deeporange" name="home" :page-content="false"  @page:init="onPageInit"> 
    <f7-navbar class="navbar2" title="MTA ONE"></f7-navbar>
    <f7-toolbar  tabbar :position="'bottom'">
       <f7-link tab-link-active  tab-link="#tab-home"  text="Beranda" icon-f7="house_alt_fill" icon-size="18px" ></f7-link>
       <f7-link tab-link="#tab-cari"  text="Cari" icon-f7="search_circle_fill" icon-size="18px" ></f7-link>
      <f7-link  @click="persadafm()" tab-link=""   text="Persada FM" icon-f7="antenna_radiowaves_left_right" icon-size="18px"></f7-link>
      <f7-link  @click="mtatv()" tab-link="" text="MTA TV" icon-f7="tv_fill" icon-size="18px"> </f7-link>
    </f7-toolbar> 
    <f7-tabs animated>   
      <f7-tab 
        tab-active
        id="tab-home"
        class="page-content infinite-scroll-content ptr-content"   @ptr:refresh.native="onPullToRefresh">
        <div class="ptr-preloader"  >
           <f7-preloader color="multi"></f7-preloader> 
        </div>  
          <br>
          <div  v-for="item in tanggal">
      <f7-button fill  :key="item.tanggal" sheet-open=".tanggal"  >{{item.tanggal}}</f7-button> 
   <f7-sheet
    class="tanggal"
    style="height:auto; --f7-sheet-bg-color: #fff;" 
  >
    <f7-page-content> 
      <f7-block>
        <p> {{item.kejadian}}</p> 
      </f7-block>
    </f7-page-content>
  </f7-sheet></div>   
           
  <div  @click="bukacovid()"> 
      <f7-card ><b >Data Covid 19 Indonesia </b><br>
     <f7-row>
         <f7-col>[ {{datacovid.update}}  ]</f7-col>
      <f7-col><b>Positif :</b> {{datacovid.positif}}  </f7-col>
    </f7-row><f7-row>
      <f7-col><b>Meninggal :</b> {{datacovid.meninggal}} </f7-col>
      <f7-col><b>Sembuh :</b> {{datacovid.sembuh}} </f7-col>
    </f7-row><p text-color="deeporange">(klik untuk lihat data per-provinsi)</p>
    </f7-card> </div>  
  <div >  <f7-card><marquee-text :duration="60" >..  Assalamualaikum {{datacovid.selamat}}  {{namaku}}...  {{surat}}... Jadwal sholat {{namakota}}, {{sholat.provinsi}}
</marquee-text></f7-card>   </div> 
           
           
 <f7-swiper pagination  scrollbar
  :params="{effect:'overflow',speed: 600, slidesPerView: 1, spaceBetween: 40, autoplay: { delay: 5000, disableOnInteraction:false }}" class="navbar2" id="siper1" > 
    <f7-swiper-slide 
            v-for="(item, index) in pmi"
            :key="'p' + index"
            > 
           
        <div class="inislide " @click="bukapmi()">  
        <div class="card"  > 
  <div class="card-content ">
    <span v-html="item.nama"></span>
    <span v-html="item.tanggal"></span>
      <f7-row>
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
    </f7-row> 
          
  </div> 
</div>    
            
       </div></f7-swiper-slide>
  </f7-swiper>   
  
      
          
    

    <f7-sheet class="demo-sheet" >
    <f7-toolbar>
      <div class="left"></div>
      <div class="right">
        <f7-link sheet-close>Tutup</f7-link>
      </div>
    </f7-toolbar>
    <!-- Scrollable sheet content -->
    <f7-page-content>
      <f7-list > 
          <f7-list-item
            :title="item.name"
            :link="'/home/' + item.id"
            :badge="item.count"
            v-for="(item, index) in categories"
            :key="'c' + index"
            @click="showCategoryPosts(item);isHidden2 = true;isHidden3 = false"
          ></f7-list-item>
           
           <f7-list-item @click="brosurlengkap();isHidden2 = true;isHidden3 = false">
         10. Berita Umum
         </f7-list-item>
           <f7-list-item @click="BukaBrosur();isHidden2 = true;isHidden3 = false">
         11. Selayang Pandang
         </f7-list-item>
           <f7-list-item @click="FajarHidayah();isHidden2 = true;isHidden3 = false">
         12. Lembar ilmu
         </f7-list-item>
           <f7-list-item @click="JadwalSholat();isHidden2 = true;isHidden3 = false">
         13. Risalah Tafsir
         </f7-list-item>
          <f7-list-item @click="KalkulatorUmur();isHidden2 = true;isHidden3 = false">
         14. Cabang dan Perwakilanku
         </f7-list-item>
        </f7-list> 
      </f7-page-content>
  </f7-sheet>    
          
  <f7-card title="Menu Pilihan">     
 <f7-row tag="p">
        <f7-col tag="span">
        <f7-button large raised  @click="brosurmingguan();isHidden2 = true;isHidden3 = false">Brosur MTA</f7-button>
           
      </f7-col>
      <f7-col tag="span">
        <f7-button large raised   @click="inialamatkajian();isHidden2 = true;isHidden3 = false">Alamat Kajian</f7-button>
      </f7-col> 
    </f7-row>
      
     
 <f7-row tag="p">
        <f7-col tag="span">
        <f7-button large raised  @click="iniprofilmta();isHidden2 = true;isHidden3 = false">Profil MTA</f7-button>
           
      </f7-col>
      <f7-col tag="span">
        <f7-button large raised   @click="inimakabarmta();isHidden2 = true;isHidden3 = false">Kabar MTA</f7-button>
      </f7-col> 
    </f7-row>
       
 <f7-row tag="p">  
      <f7-col tag="span">
        <f7-button large raised   @click="iniaudiobrosur();isHidden2 = true;isHidden3 = false">Audio brosur</f7-button>
      </f7-col>
      <f7-col tag="span">
        <f7-button large raised   @click="kajian()">Jihadpagi 24jam</f7-button>
      </f7-col>
    </f7-row>
       
 <f7-row tag="p">  
      <f7-col tag="span">
        <f7-button large raised   @click="myquran()">Al-Quran KU</f7-button>
      </f7-col>
      <f7-col tag="span">
        <f7-button large raised   @click="dipengaturan()">Pengaturan</f7-button>
      </f7-col>
    </f7-row>
          
          <f7-button fill sheet-open=".demo-sheet">Menu Lengkap</f7-button>      
     </f7-card>  
     
           
 <f7-swiper pagination  scrollbar
  :params="{effect:'overflow',speed: 500, slidesPerView: 1, spaceBetween: 40, autoplay: { delay: 5000, disableOnInteraction:false }}"
        class="navbar2" id="siper2"    > 
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
        <br>      
          <f7-card  v-if="isHidden" >Silahkan Scroll kebawah</f7-card>
        <f7-button  v-if="!isHidden"  fill  @click="isHidden = true;beranda();kabarmta()">Lihat aktivitas</f7-button>
          <br>
        <f7-button  v-if="isHidden"  fill  @click="isHidden = false">Tutup aktivitas</f7-button> 
          
   <div v-if="isHidden"> 
     <f7-block-title text-color="white" >Kabar MTA 
         </f7-block-title>
  <f7-swiper  pagination 
  :params="{effect:'overflow',speed: 600, slidesPerView: 1, spaceBetween: 20, autoplay: { delay: 5000, disableOnInteraction:false }}"
            id="siper3"  >
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

          
         
   
     <f7-block-title text-color="white" id="aktivitas">Aktivitas Terbaru 
         </f7-block-title>
       
       <f7-list media-list>
    <f7-list-item
            link="#"  
            v-for="(item, index) in pageOfItems"
            :key="'p' + index"
            @click="cekloadmore(item)" 
    ><b>{{item.title}}</b><br>
    <span>{{item.date |  moment('from')}}</span>_<f7-chip outline :text="item.kategori" color="blue"></f7-chip><hr>
    </f7-list-item> 
  </f7-list> 
        
       
        <f7-button  v-if="isHidden"  fill  @click="isHidden = false">Tutup aktivitas</f7-button>
         <f7-card>
        <jw-pagination :items="berandaya" @changePage="onChangePage"></jw-pagination>
        </f7-card>
       
        </div> 
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
      <f7-col>
    <f7-button fill sheet-open=".demo-sheet">Buka Menu</f7-button>
        </f7-col>
      <f7-col > <f7-button  key="123" fill color="green" v-on:click="mencari();isHidden3 = true;isHidden2 = false">Cari</f7-button></f7-col>
    </f7-row>
    </div> 
       </f7-list>   
      
       <f7-list media-list inset>
    <f7-list-item
            link="#"  
            v-for="(item, index) in pageOfItems"
            :key="'p' + index"
            @click="cekloadmore(item)" 
    ><b>{{item.title}}</b><br>
    <span>{{item.date |  moment('from')}}</span>_<f7-chip outline :text="item.kategori" color="blue"></f7-chip> <hr>
        
    </f7-list-item>  
  </f7-list> 
         <f7-block  v-if="isHidden2"> 
       <f7-card><jw-pagination :items="cari" @changePage="onChangePage"></jw-pagination></f7-card> 
           
            <p><b>Silahkan Gunakan menu next dan prev diatas, menu sebelumnya dan selanjutnya dibawah, digunakan untuk memuat data baru</b></p>
       <f7-row>
      <f7-col>
    <f7-button fill color="orange" @click="lesspost()" >Sebelumnya</f7-button>
        </f7-col>
      <f7-col > <f7-button fill color="blue" @click="morepost()" >Selanjutnya</f7-button></f7-col>
    </f7-row>
        </f7-block>
             
      <f7-block  v-if="isHidden3">
       <f7-card><jw-pagination :items="cari" @changePage="onChangePage"></jw-pagination></f7-card> 
           
            <p><b>Silahkan Gunakan menu next dan prev diatas, menu sebelumnya dan selanjutnya dibawah, digunakan untuk memuat data baru</b></p>
       <f7-row>
      <f7-col>
    <f7-button fill color="orange" @click="lesspost2()" >Sebelumnya</f7-button>
        </f7-col>
      <f7-col > <f7-button fill color="blue" @click="morepost2()" >Selanjutnya</f7-button></f7-col>
    </f7-row>
              
        </f7-block>
            
            
      </f7-tab> 
          
    </f7-tabs>
  </f7-page> 
</template>

<script>    
import 'framework7-icons'; 
import axios from 'axios';  
import moment from 'moment';   
export default { 
  name: "home", 
  created() { 
    this.getCategories(); 
    
    if(localStorage.getItem('surat') == null){
        this.surat = " Saudara dapat membaca AL-Quran dimenu bawah"
    }else {
         this.surat = "mari melanjutkan membaca al-quran surat "+localStorage.getItem('surat')+""
    }
      
    if(localStorage.getItem('namakota') == null){
        this.namakota = "Surakarta"
    }else {
         this.namakota = localStorage.getItem('namakota')
    }
        
    if(localStorage.getItem('nama') == null){
        this.namaku = "saudara"
    }else {
         this.namaku =  localStorage.getItem('nama')
    }
      
    if(localStorage.getItem('kotaid') == null){
        this.kotaku_id = "739"
    }else {
         this.kotaku_id =  localStorage.getItem('kotaid') 
    }
    if(localStorage.getItem('kota') == null){
        this.kotaku = "Surakarta"
    }else {
         this.kotaku =  localStorage.getItem('kota')
    }
        
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
    this.tanggalhijriyah()
    this.komen()
    this.pmi()
    this.inicovid()
    this.jadwalsholat()
 },  
  data() { 
    return {   
      isHidden: false, 
      isHidden2: false, 
      isHidden3: false, 
      surat: [],
      namakota: [],
      pageOfItems: [], 
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
      datacari: [], 
      idpost: [], 
      datacovid: [],
      categories: [], 
      sholat: [], 
      allowInfinite: true,
      loading: true
        
        
    };
  },
  methods: {  
      moment: function () {  
        return moment();
  },
onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
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
 axios.get(`http://mta.flagodna.com/beranda/v2/api_tanggal2.php`)
                 
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
      jadwalsholat () {   
    this.kota =  localStorage.getItem('kota');    
      this.$f7.preloader.show();
 axios.get('http://api.flagodna.com/wp/sholat.php?kota='+this.kota+'') 
    .then(response => { 
      this.sholat = response.data  
      this.$f7.preloader.hide();
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
    },  pmi () {   
 axios.get(`http://api.flagodna.com/wp/pmi.php`)
   .then(response => { 
      this.pmi = response.data
    })
    .catch(e => {
      this.errors(e)
    })
    }, 
       inicovid () {   
 axios.get(`http://api.flagodna.com/wp/apicovid.php`)
   .then(response => { 
      this.datacovid = response.data
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
          localStorage.setItem('page2a', this.cari.page); 
          localStorage.setItem('newcat2', this.newCat); 
 axios.get("http://api.flagodna.com/wp/cari.php?kueri="+this.newCat+"&page="+this.cari.page)      
    .then(response => { 
      this.cari = response.data
      this.$f7.preloader.hide();
    })
    .catch(e => {
      this.errors.push(e)
    })
    },  
inialamatkajian() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
         localStorage.setItem('id',  '13');
          localStorage.setItem('page', this.cari.page); 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=13&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
      this.$f7.tab.show("#tab-cari");
    })
    .catch(e => {
      this.errors.push(e)
    })
},
iniprofilmta() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
         localStorage.setItem('id',  '14');
          localStorage.setItem('page', this.cari.page); 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=14&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
      this.$f7.tab.show("#tab-cari");
    })
    .catch(e => {
      this.errors.push(e)
    })
},
inimakabarmta() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
         localStorage.setItem('id', '3');
          localStorage.setItem('page', this.cari.page); 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=3&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
      this.$f7.tab.show("#tab-cari");
    })
    .catch(e => {
      this.errors.push(e)
    })
},
iniaudiobrosur() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
         localStorage.setItem('id', '9');
          localStorage.setItem('page', this.cari.page); 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=9&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
      this.$f7.tab.show("#tab-cari");
    })
    .catch(e => {
      this.errors.push(e)
    })
},
brosurlengkap() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
         localStorage.setItem('id', '15');
          localStorage.setItem('page', this.cari.page); 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=15&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
      this.$f7.tab.show("#tab-cari");
    })
    .catch(e => {
      this.errors.push(e)
    })
},
 BukaBrosur() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
         localStorage.setItem('id', '5');
          localStorage.setItem('page', this.cari.page); 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=5&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
      this.$f7.tab.show("#tab-cari");
    })
    .catch(e => {
      this.errors.push(e)
    })
}, FajarHidayah() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
         localStorage.setItem('id', '19');
          localStorage.setItem('page', this.cari.page); 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=19&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
      this.$f7.tab.show("#tab-cari");
    })
    .catch(e => {
      this.errors.push(e)
    })
}, JadwalSholat() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
         localStorage.setItem('id', '12');
          localStorage.setItem('page', this.cari.page); 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=12&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
      this.$f7.tab.show("#tab-cari");
    })
    .catch(e => {
      this.errors.push(e)
    })
},KalkulatorUmur() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
         localStorage.setItem('id', '2');
          localStorage.setItem('page', this.cari.page); 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=2&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
      this.$f7.tab.show("#tab-cari");
    })
    .catch(e => {
      this.errors.push(e)
    })
}, brosurmingguan() {
 this.$f7.preloader.show();
this.cari.page   = 1; 
         localStorage.setItem('id', '18');
          localStorage.setItem('page', this.cari.page); 
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=18&page=" + this.cari.page)      
    .then(response => { 
      this.cari = response.data 
     this.$f7.preloader.hide();
      this.$f7.tab.show("#tab-cari");
    })
    .catch(e => {
      this.errors.push(e)
    })
},  
 morepost2: function(){ 
  this.$f7.progressbar.show('multi');    
this.pages2  = Number(localStorage.getItem('page2a')) + Number(1) ;
localStorage.setItem('page2a', this.pages2);     
this.newCat2 = localStorage.getItem('newcat2');
 axios.get("http://api.flagodna.com/wp/cari.php?kueri="+this.newCat2+"&page="+this.pages2)     
    .then(response => { 
      this.cari = response.data
  this.$f7.progressbar.hide(); 
    })
    .catch(e => {
      this.errors.push(e)
    })
    },  
      
lesspost2: function(){   
  this.$f7.progressbar.show('multi');  
this.pages2  = Number(localStorage.getItem('page2a')) - Number(1) ;
localStorage.setItem('page2a', this.pages2);     
this.newCat2 = localStorage.getItem('newcat2');
    
 axios.get("http://api.flagodna.com/wp/cari.php?kueri="+this.newCat2+"&page="+this.pages2)     
    .then(response => { 
      this.cari = response.data
  this.$f7.progressbar.hide(); 
    })
    .catch(e => {
      this.errors.push(e)
    })
    }, 
      
morepost: function(){ 
  this.$f7.progressbar.show('multi');    
this.pages  = Number(localStorage.getItem('page')) + Number(1) ;
localStorage.setItem('page', this.pages);    
this.idpost = localStorage.getItem('id');
localStorage.setItem('id', this.idpost);   
          
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=" +
 this.idpost +"&page=" + this.pages)      
    .then(response => { 
      this.cari = response.data
  this.$f7.progressbar.hide(); 
    })
    .catch(e => {
      this.errors.push(e)
    })
    },  
      
lesspost: function(){   
  this.$f7.progressbar.show('multi');  
this.pages  = Number(localStorage.getItem('page')) - Number(1) ;
localStorage.setItem('page', this.pages);    
this.idpost = localStorage.getItem('id');
localStorage.setItem('id', this.idpost);   
          
 axios.get("http://api.flagodna.com/wp/carikategori.php?id=" +
 this.idpost +"&page=" + this.pages)      
    .then(response => { 
      this.cari = response.data
  this.$f7.progressbar.hide(); 
    })
    .catch(e => {
      this.errors.push(e)
    })
    },       

      carikategori () {    
 this.$f7.preloader.show();  
  this.cari.page   = 1; 
         localStorage.setItem('id', this.posts.category.id);
          localStorage.setItem('page', this.cari.page); 
    
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
       
      myquran() {  document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/quran/", {
        props: { 
        }
      });
    },
       
       
      dipengaturan() {  document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/pengaturan/", {
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
    bukacovid(post) {
      document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/covid/", {
        props: {
          post: post
        }
      });
    },
    bukapmi(post) {
      document.removeEventListener("backbutton", this.onBackKeyDown);
      this.$f7router.navigate("/pmi/", {
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
