<script src="./DetailsBlog.js"></script>
<style scoped src="./DetailsBlog.css"></style>
<template>
  <div class="container">
    <h1>Details du blog numero {{ blogDetails.id }}</h1>
    <div class="card p-3">
      <p>Titre : {{ blogDetails.title }}</p>
      <p>Body : {{ blogDetails.body }}</p>
      <router-link to="/blog">
        <button class="btn btn-warning mt-1 float-end">retour</button>
      </router-link>
    </div>
  </div>
</template>