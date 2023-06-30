<script src="./Blog.js"></script>
<style scoped src="./Blog.css"></style>
<template>
  <div class="container">
    <h1>Les articles du blog</h1>
    <ul>
      <li v-for="(blog, index) in allArticles" :key="index" class="mt-4">
        <div class="card p-3">
          <h1>Blog Numero {{ blog.id }}</h1>
          <p>Titre : {{ blog.title }}</p>
          <router-link :to="`/blog/${index + 1}`">
            <button class="btn btn-success mt-1 float-end">Details...</button>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>