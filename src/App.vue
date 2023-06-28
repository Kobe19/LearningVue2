<template>
  <div id="app">
    <contenu></contenu>
    <header-top></header-top>
  </div>
</template>

<script>

import Contenu from "@/components/Contenu/Contenu.vue";
import Header from "@/components/Header/header.vue";

export default {
  name: 'App',
  components: {
    'contenu': Contenu,
    'header-top': Header
  }
}
</script>

<style>

</style>
