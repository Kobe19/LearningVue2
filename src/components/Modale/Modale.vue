<script src="./Modale.js"></script>
<style scoped src="./Modale.css"></style>
<template>
  <div v-if="revele" class="bloc-modale">
    <div @click="toggleModale" class="overlay"></div>
    <div class="modale card">
      <div @click="toggleModale" class="btn-modale btn btn-danger">X</div>
      <h2>Le contenu de la modale</h2>
    </div>
  </div>
</template>

