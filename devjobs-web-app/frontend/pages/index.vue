<template>
    <div class="padding-md">
        <div class="container-lg overlap">
            <FilterPosts />
            <div class="card-wrapper">
                <SinglePostCard v-for="post in postToLoad" :key="post.id" :id="post.id" :position="post.position"
                    :location="post.location" :contract="post.contract" :company="post.company" :posted-at="post.postedAt"
                    :logo="post.logo" :logo-background="post.logoBackground" />
            </div>
            <div class="horizontal-align"> <button class="button" v-if="moreToLoadBtnShow"
                    @click="maxPostsToLoad += userDefinedIncrements">Load more</button></div>

        </div>
    </div>
</template>

<style scoped>
.card-wrapper {
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(320px, 350px));
    place-content: center;
    gap: 65px min(30px, 2vw);
    margin-top: 105px;
}

.horizontal-align {
    display: grid;
    place-content: center;
    padding-top: 56px;
}
</style>


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
