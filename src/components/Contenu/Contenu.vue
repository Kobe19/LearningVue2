<script src="./Contenu.js"></script>
<style scoped></style>
<template>
  <div class="container mt-5">
    <p>{{ txt }}</p>
    <liste
        :prenom="prenom"
        :myArr="myArr"
        :monTexte="monTexte"
        @changeTitre="changementTitre($event)">

      <template v-slot:info>
        <h1 class="mt-5">Le contenu du slot nommé</h1>
      </template>
    </liste>

    <h1 class="mt-5">
      {{ titre }}
    </h1>

    <div class="btn btn-outline-primary me-2" @click="toggleOng1">Onglet 1</div>
    <div class="btn btn-outline-primary me-2" @click="toggleOng2">Onglet 2</div>

    <div v-if="toggle1" class="card mb-5 mt-2">
      <texte1 class="p-3"></texte1>
    </div>
    <div v-if="toggle2" class="card mb-5 mt-2">
      <texte2 class="p-3"></texte2>
    </div>

    <div class="btn btn-outline-primary me-2" @click="component = 'texte1'">Onglet 1</div>
    <div class="btn btn-outline-primary me-2" @click="component = 'texte2'">Onglet 2</div>


    <div class="card mt-2 mb-5 p-3">
      <component :is="component"></component>
    </div>

    <button class="btn btn-success mt-3" @click="displayModal">ouvre la modale</button>
    <modale :revele="revele" :toggleModale="displayModal"></modale>

    <h1 class="mt-5">Appel à une API</h1>

    <div class="mt-4">
      <img :src="urlImg">
    </div>

  </div>
</template>

