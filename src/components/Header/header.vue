<script src="./header.js"></script>
<style scoped src="./header.css"></style>

<template>
  <div class="header-top">
    <p>{{ titre }}
      <router-link to="/" exact>Contenu</router-link> -
      <router-link to="/todo" exact>My ToDo List</router-link>
    </p>
  </div>
</template>

