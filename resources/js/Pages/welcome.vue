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
        <li style="float: left;"><a
            style="display: block;color: white; text-align: center;padding: 14px 16px; text-decoration: none;"
            class="active" href="#home">Home</a></li>
        <li style="float: left;"><a
            style="display: block;color: white; text-align: center;padding: 14px 16px; text-decoration: none;"
            href="#news">News</a></li>
        <li style="float: left;"><a
            style="display: block;color: white; text-align: center;padding: 14px 16px; text-decoration: none;"
            href="#contact">Contact</a></li>
        <li style="float: left;"><a
            style="display: block;color: white; text-align: center;padding: 14px 16px; text-decoration: none;"
            href="#about">About</a></li>
      </ul>
      <h1>Hoş Geldiniz</h1>
      <div>
        <button @click="createUser">Create User</button>
      </div>
  
    </template>
    <template #footer>
      <p>Merhaba {{ user }}, ilk Atalet uygulamanıza hoş geldiniz!</p>
      <!-- <Link href="/welcome" :class="{ 'active': $page.url === '/welcome' }">Users</Link> -->
      <!-- <input v-model="query" type="text" />
      <Link href="/" :data="{ query }" preserve-state>Search</Link>  -->
      
    </template>
  </Layout>
</template>
<script >
import Layout from './User/Layout.vue'
import { router } from '@inertiajs/vue3';

export default {

  layout: (h, page) => h(Layout, [page]),
  layout: Layout,

 
 
  methods: {
    createUser() {
      // router.get('/', { search: 'John' }, { replace:false })
      // router.get('/', { preserveScroll: true }) scrollun sayfa değiştirdikten sonra kaldığı yerden devam etmesini sağlar. router.visit('/users', { search: 'John' }, { only: ['users'] })
      router.visit('/', { search: 'John' }, { only: ['users'] })

  },
    }
  };


</script>

<script setup>
import { Head } from '@inertiajs/vue3'
// import { Link } from '@inertiajs/vue3';

// import AppHead from './AppHead.vue'

defineProps({ user: Object }) 
</script>
<style>
.active {
  background-color: #3498db;
  color: #fff;
}
</style>