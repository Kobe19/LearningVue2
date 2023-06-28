<script src="./Contenu.js"></script>
<style scoped></style>
<template>
  <div class="container mt-5">
    <p>{{ txt }}</p>
    <liste :prenom="prenom" :myArr="myArr" :monTexte="monTexte" @changeTitre="changementTitre($event)"></liste>
    <h1 class="mt-5">
      {{ titre }}
    </h1>
  </div>
</template>

