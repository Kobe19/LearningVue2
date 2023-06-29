<script src="./task-creation.js"></script>
<style scoped src="./task-creation.css"></style>
<template>
  <div>
    <div class="mb-5">
      <header-top :titre="titre"></header-top>
    </div>
    <div class="container space">
      <h1>{{ myTitle }}</h1>

      <form>
        <label for="action">Action</label>
        <input type="text" id="action" class="form-control mt-2" v-model="formData.newTask">
        <button class="btn btn-primary mt-3" @click.prevent="saveData">Créer une tâche</button>
      </form>

      <single-task
          class="mt-4"
          v-for="(task, index) in tasks"
          :task-name="task"
          :key="index"
          :toggleBtn="toggleBtnFunc"
      >
      </single-task>
    </div>
  </div>
</template>