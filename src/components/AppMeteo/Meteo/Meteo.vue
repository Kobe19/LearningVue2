<script src="./Meteo.js"></script>
<style scoped src="./Meteo.css"></style>
<template>
  <div class="container">
    <h1 class="my-4">App météo avec Vue.js</h1>
    <div class="form-group mb-5">
      <label for="position">Entrez le nom d'une ville</label>
      <input type="text" id="position" class="form-control" v-model="requete" @keypress="goMeteo">
    </div>
    <div class="w-75 m-auto" v-if="temps">
      <h3 class="text-center mb-3">
        Position: {{ temps.name }}
      </h3>
      <div class="card text-center p-5">
        <p class="text-affichage">
          Temperature : {{ temps.main.temp.toFixed() + '°' }}
        </p>
        <p class="text-affichage">
          Temps : {{ temps.weather[0].description }}
        </p>
      </div>
    </div>
  </div>
</template>

