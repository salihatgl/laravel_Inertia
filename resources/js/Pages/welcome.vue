<template>
  <Layout>
    <!-- <Head>
  <title>About - My app</title>
  <meta head-key="description" name="description" content="This is a page specific description" />
</Head> -->
<!-- <AppHead title="About" /> -->
        <Head title="Home"> </Head>

    <template #header>
      
      <ul style="list-style-type: none; margin: 0; padding: 0; overflow: hidden; background-color: #333;">
        <li style="float: left;"><a style="display: block;color: white; text-align: center;padding: 14px 16px; text-decoration: none;" class="active" href="#home">Home</a></li>
        <li style="float: left;"><a style="display: block;color: white; text-align: center;padding: 14px 16px; text-decoration: none;" href="#news">News</a></li>
        <li style="float: left;"><a style="display: block;color: white; text-align: center;padding: 14px 16px; text-decoration: none;" href="#contact">Contact</a></li>
        <li style="float: left;"><a style="display: block;color: white; text-align: center;padding: 14px 16px; text-decoration: none;" href="#about">About</a></li>
      </ul>
      <h1>Hoş Geldiniz</h1>
    </template>
    <template #footer>
      <p>Merhaba {{ user.name }}, ilk Atalet uygulamanıza hoş geldiniz!</p>
    </template>
  </Layout>
</template>

<script >
import Layout from './User/Layout.vue'

export default {

  layout: (h, page) => h(Layout, [page]),
  layout: Layout,
}

</script>

<script setup>
import { Head } from '@inertiajs/vue3'
// import AppHead from './AppHead.vue'

defineProps({ user: Object }) 
</script>