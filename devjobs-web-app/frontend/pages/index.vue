<template>
    <div>
        <FilterPosts />
        <SinglePostCard v-for="post in postToLoad" :key="post.id" :id="post.id" :position="post.position"
            :location="post.location" :contract="post.contract" />
        <button v-if="moreToLoadBtnShow" @click="maxPostsToLoad += userDefinedIncrements">Load more</button>
    </div>
</template>
<script setup>

const userDefinedIncrements = 12
const maxPostsToLoad = useState('LoadMoreCounter', () => userDefinedIncrements)
const posts = useState('filteredPostList')

const postToLoad = computed(() => {
    return posts.value.slice(0, maxPostsToLoad.value)
})

const moreToLoadBtnShow = computed(() => {
    return postToLoad.value.length >= maxPostsToLoad.value
})
</script>
