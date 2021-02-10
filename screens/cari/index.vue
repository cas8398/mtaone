<template>
  <f7-page color-theme="teal" name="home">
    <f7-navbar bg-color="green" :title="$root.app.name"></f7-navbar>
    <tabbar active="cari"/>
  </f7-page>
</template>

<script>
import tabbar from "../../components/tabbar";
export default {
  name: "cari",
  components: {
    tabbar
  },
  created() {},
  data() {
    return {};
  },
  methods: {}
};
</script>
