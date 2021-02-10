<template>
  <f7-page name="home">
    <f7-navbar bg-color="green" :title="$root.app.name"></f7-navbar>
    <tabbar active="categories"/>
  </f7-page>
</template>

<script>
import tabbar from "../../components/tabbar";
export default {
  name: "categories",
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
