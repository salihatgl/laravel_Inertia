<script setup>

import { Head } from '@inertiajs/vue3'

defineProps({ user: Object })
</script>


<template>
  <Layout>
    <Head>
  <title>Welcome</title>
  <meta head-key="description" name="description" content="This is a page specific description" />
</Head>
    <h1>Welcome</h1>
     <p>Hello {{ user }}, welcome to your first Inertia app!</p><!--{ user.name }} kısmını görüntülenemedi -->
  </Layout>
</template>
