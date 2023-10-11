<template>
    <Layout>
      <template #header>
        <h1>Hoş Geldiniz</h1>
      </template>
      <template #footer>
        <p>Merhaba {{ user.name }}, ilk Atalet uygulamanıza hoş geldiniz!</p>
      </template>
    </Layout>
  </template>
  
  <script>
import Layout from './User/Layout.vue' 

export default {

  layout: (h, page) => h(Layout, [page]), 
  layout: Layout, 
}
</script>

<script setup>
defineProps({ user: Object }) 
</script>