<template>
  <div id="app">
    <router-view></router-view>
    <!--<task-creation></task-creation>
    <header-top></header-top>-->
  </div>
</template>

<script>

//import Contenu from "@/components/Contenu/Contenu.vue";
//import Header from "@/components/Header/header.vue";
//import taskCreation from "@/components/ToDoList1/task-creation/task-creation.vue";

export default {
  name: 'App',
  components: {
    //'contenu': Contenu,
    //'task-creation': taskCreation,
    //'header-top': Header
  }
}
</script>

<style>
  body{
    background: skyblue;
    background: linear-gradient(to right, white, skyblue);
  }
</style>
