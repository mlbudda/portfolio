<template>
    <div>
        <form @submit.prevent="onSubmit">
            <label for="text-search">Search</label>
            <input v-model="searchTerm" type="text" id="text-search">

            <label for="location-search">Location</label>
            <input v-model="searchLocation" type="text" id="location-search">
            <label for="full-time">Full-Time</label>
            <input v-model="searchFulltime" type="checkbox" name="" id="full-time">
            <input type="submit" value="Search">
        </form>
    </div>
</template>

<script setup>


const searchTerm = ref('')
const searchLocation = ref('')
const searchFulltime = ref(false)


const availablePosts = useState('postList')
const filteredPosts = useState('filteredPostList', () => availablePosts)


function onSubmit() {
    filteredPosts.value = availablePosts.value.filter(item => {
        const position = item.position.toLowerCase()
        const location = item.location.toLowerCase()
        const contract = item.contract.toLowerCase()

        if (searchTerm.value === "" && searchLocation.value === "" && !searchFulltime.value) {
            return item
        }
        if (position.includes(searchTerm.value) && location.includes(searchLocation.value) && contract.includes("full time")) {
            return item
        }
    })
}

</script>

<style scoped>
form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: 1px solid gray;
    padding: 5px;
}
</style>