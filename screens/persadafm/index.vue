<template>
  <f7-page id="wow" name="post"  color-theme="deeporange" >
    <f7-navbar class="navbar2" title="Persada FM" back-link="Back"></f7-navbar> 
 
<div class="background">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
<f7-toolbar tabbar :position="'bottom'">
<audio   controls autoplay="autoplay"><source src="http://radio.mtafm.com:1079/;" type="audio/mp3">YMaaf, Silahkan gunakan sistem operasi yang lebih baru</audio>   
    </f7-toolbar>   
  </f7-page>
</template>

<script>
export default {
  name: "post",  
  mounted() {
    document.addEventListener("backbutton", this.onBackKeyDown, false);
  },
  data() {
    return {
      content: null
    };
  },
  methods: {
    onBackKeyDown(e) {
      e.preventDefault();
      this.$f7router.back();
      document.removeEventListener("backbutton", this.onBackKeyDown);
    }
  }
};
</script>
<style lang="scss">
  body {
  margin: 0;
  overflow: hidden;
}

.background {
  width: 100vw;
  height: 100vh; 
}

$particleSize: 20vmin;
$animationDuration: 6s;
$amount: 20;
.background span {
  width: $particleSize;
  height: $particleSize;
  border-radius: $particleSize;
  backface-visibility: hidden;
  position: absolute;
  animation-name: move;
  animation-duration: $animationDuration;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  $colors: (
    #583C87,
    #E45A84,
    #FFACAC
  );
  @for $i from 1 through $amount {
    &:nth-child(#{$i}) {
      color: nth($colors, random(length($colors)));
      top: random(100) * 1%;
      left: random(100) * 1%;
      animation-duration: (random($animationDuration * 10) / 10) * 1s + 10s;
      animation-delay: random(($animationDuration + 10s) * 10) / 10 * -1s;
      transform-origin: (random(50) - 25) * 1vw (random(50) - 25) * 1vh;
      $blurRadius: (random() + 0.5) * $particleSize * 0.5;
      $x: if(random() > 0.5, -1, 1);
      box-shadow: ($particleSize * 2 * $x) 0 $blurRadius currentColor;
    }
  }
}

@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}
</style>