<template>
  <f7-page name="post">
    <f7-navbar bg-color="green" :title="post ? post.title : ''" back-link="Back"></f7-navbar>
    <f7-card class="demo-card-header-pic" outline v-if="post">  
    <img :data-src="post.image" class="lazy lazy-fade-in" :style=" 'height: 100%; max-height: 200px; width: 100%; max-width: 300px; display: block;margin: 0 auto'">
      <f7-card-content>
        <p class="date">Dibuat {{ post.date |  moment('from') }}</p>
        <h1>{{ post.title }}</h1>
        <br>
        <div class="content" v-for="item in contents" :key="item.protected" v-html="item.rendered"></div>
      </f7-card-content>
    </f7-card><br><br><br>
    <!-- FAB Right Bottom -->
    <f7-fab position="left-bottom" @click="kembali()" >
<f7-icon icon="icon-back" ></f7-icon>
    </f7-fab>
  </f7-page>
</template>

<script>
import moment from 'moment'; 
import axios from 'axios';  
export default {
  name: "post",
  props: ["post"],
  created() {
    if (this.post) { 
      this.$f7.preloader.show();
 axios.get('http://api.flagodna.com/wp/post.php?id=' + this.post.id)
       .then(response => { 
      this.contents = response.data 
      this.$f7.preloader.hide();
        });
    }
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
