<script src="./Contenu.js"></script>
<style scoped src="./Contenu.css"></style>
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

    <h1 class="mt-5">Création de formulaire</h1>

    <form>
      <div class="form-group input-space">
        <label for="prenom">Ton prénom</label>
        <!-- le @input permet de reinitialiser la saisie-->
        <input @input="toggleResult" type="text" id="prenom" class="form-control" v-model="formData.prenom2" required>
      </div>
      <div class="form-group input-space">
        <label for="prenom">Ton numero de Telephone</label>
        <input @input="toggleResult" type="text" id="prenom" class="form-control" v-model.number="formData.telephone" required>
      </div>
      <div class="form-group input-space">
        <label for="txt">Ton texte</label>
        <textarea @input="toggleResult" id="txt" class="form-control" v-model="formData.texte"></textarea>
      </div>
      <div class="form-check input-space">
        <input v-model="formData.checkFruits" type="checkbox" id="banane" value="banane" class="form-check-input">
        <label for="banane">Banane</label>
      </div>
      <div class="form-check input-space">
        <input v-model="formData.checkFruits" type="checkbox" id="fraise" value="fraise" class="form-check-input">
        <label for="fraise">Fraise</label>
      </div>
      <div class="form-check input-space">
        <input v-model="formData.checkFruits" type="checkbox" id="cerise" value="cerise" class="form-check-input">
        <label for="cerise">Cerise</label>
      </div>
      <select v-model="formData.select" class="form-select input-space">
        <option v-for="(pays, index) in formData.listePays" :key="index">{{pays}}</option>
      </select>
      <button @click.prevent="envoiForm" class="btn btn-primary input-space">Envoyer les données</button>
    </form>

    <div v-if="infoSubmit">
      <h2 class="mt-3">Résultats</h2>

      <div class="card p-3">
        <p>Prenom : {{ formData.prenom2 }}</p>
        <p>Telephone : {{ formData.telephone }}</p>
        <p>Fruits : </p>
        <ul>
          <li v-for="(value, index) in formData.checkFruits" :key="index">{{ value }}</li>
        </ul>
        <p>Pays : {{ formData.select }}</p>
        <p style="white-space: pre">Texte : {{ formData.texte }}</p>
      </div>
    </div>
    <div>
      <h2>Aller à ma todoList : </h2>
      <router-link to="/todo"><button class="btn btn-success">my ToDoList</button></router-link>
    </div>


  </div>
</template>

