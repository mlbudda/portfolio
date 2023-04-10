<template>
<div>
  <div class="navbar"><h1>Navbar</h1></div>
  <NuxtPage/>
  <div class="footer"><h1>footer</h1></div>

</div>
</template>

<script setup>
import * as data from './data.json'

// const posts = ref(data.default)

useState('postList', () => data.default)

onMounted(() => {
    // console.log(posts)
})

</script>