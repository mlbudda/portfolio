<template>
    <div>
        <h1>Position: {{ currentPost.position }}</h1>
        <p>Company: {{ currentPost.company }}</p>
    </div>
</template>

<script setup>
const posts = useState('postList')
const route = useRoute()
const currentPost = posts.value.find(post => parseInt(post.id) === parseInt(route.params.id))
// console.log(route.params.id)
console.log(currentPost)

</script>
