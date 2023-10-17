<template>
  <Layout>
    <!-- <Head>
  <title>About - My app</title>
  <meta head-key="description" name="description" content="This is a page specific description" />
</Head> -->
    <!-- <AppHead title="About" /> -->

    <Head title="welcome"> </Head>

    <template #header>
      <h1>Hoş Geldiniz</h1>
      <div>
        <button @click="createUser">Create User</button>
      </div>
  
    </template>
    <template #footer>
      <p>Hello {{ user }}, welcome to your first Inertia app!</p>
       <Link href="/welcome" :class="{ 'active': $page.url === '/welcome' }">Users</Link>
      
    </template>
  </Layout>
</template>
<script >
import Layout from './User/Layout.vue'
import { router } from '@inertiajs/vue3';

export default {

  layout: Layout,

  methods: {
    createUser() {
       //router.get('/', { search: 'John' }, { replace:false })
       // router.get('/', { preserveScroll: true }) scrollun sayfa değiştirdikten sonra kaldığı yerden devam etmesini sağlar. router.visit('/users', { search: 'John' }, { only: ['users'] })
       // router.visit('/', { search: 'John' }, { only: ['users'] })
       router.get('/', {
        name: 'John Doe',
        email: 'john.doe@example.com',
        })

  },
    }
  };


</script>

<script setup>
import { Head } from '@inertiajs/vue3'
 import { Link } from '@inertiajs/vue3';

//import AppHead from './AppHead.vue'

defineProps({ user: Object }) 
</script>
<style>
.active {
  margin-top: 10px;
  padding: 10px;
  background-color: #3b82b1;
  color: #fff;
}
</style>