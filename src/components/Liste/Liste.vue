<script src="./Liste.js"></script>
<style scoped src="./Liste.css"></style>

<template>
  <div class="container">
    <ul class="liste">
      <li v-for="(fruit, index) in fruits" :key="index">{{ fruit }}</li>
    </ul>
    <p>{{ prenom?.nom }}</p>
    <p>{{ reversing() }}</p>
    <ul class="mt-5">
      <li v-for="(film, index) in myArr" :key = index>
        <div class="card">
          <div class="card-body">
            Titre : {{ film.titre }}
            <br>
            Date : {{ film.date }}
          </div>
          <button @click="deleteOneFilm(index)" class="btn btn-danger">
            Supprime le film
          </button>
        </div>
      </li>
    </ul>
    <p>{{ monTexte }}</p>
    <button @click="deleteLastFilm" class="btn btn-danger">
      Supprime le film
    </button>
    <button @click="RefreshListFilm" class="btn btn-primary ms-2">
      Refraichir la liste
    </button>
    <button @click="deleteTexte" class="btn btn-danger ms-2">
      Supprime le texte
    </button>
    <button @click="changeTitre" class="btn btn-success ms-2">
      Modifie le titre
    </button>
    <slot name="info"></slot>
  </div>
</template>

