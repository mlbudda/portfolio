<template>
    <NuxtLink :to="`/posts/${id}`">
        <h2> {{ id }} - {{ position }} - {{ location }} - {{ contract }}</h2>
    </NuxtLink>
</template>

<script setup>
defineProps(['id', 'position', 'location', 'contract'])
</script>
