<script src="./single-task.js"></script>
<style scoped src="./single-task.css"></style>
<template>
  <div>
    <div class="card p-3 pb-4">
      <label class="mt-1">{{ taskName }}</label>
      <div @click="toggleBtn" class="btn-modale btn btn-danger">X</div>
    </div>
  </div>
</template>

