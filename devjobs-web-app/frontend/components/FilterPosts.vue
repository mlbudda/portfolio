<script setup>

const searchTerm = ref('')
const searchLocation = ref('')
const searchFulltime = ref(false)
const isActiveDialog = useState("toggleDialog")

const availablePosts = useState('postList')
const filteredPosts = useState('filteredPostList', () => availablePosts)

function onSubmit() {
    filteredPosts.value = availablePosts.value.filter(item => {
        const isPosition = searchTerm.value ? item.position.toLowerCase().includes(searchTerm.value.toLowerCase()) : true
        const isCompany = searchTerm.value ? item.company.toLowerCase().includes(searchTerm.value.toLowerCase()) : true
        const isLocation = searchLocation.value ? item.location.toLowerCase().includes(searchLocation.value.toLowerCase()) : true
        const isFullTime = searchFulltime.value ? item.contract.toLowerCase().includes('full time') : true

        if (isFullTime) {
            return (isPosition || isCompany) && isLocation && isFullTime
        }

    })
    isActiveDialog.value = false
}

</script>

<template>
    <div class="form-wrapper">
        <form @submit.prevent="onSubmit">

            <div class="search-wrapper vertical-center">
                <AppInput name="Search" v-model="searchTerm" icon-url="/desktop/icon-search.svg"
                    placeholder-value="Filter by title, companies, expertise">
                </AppInput>
            </div>
            <div class="location-wrapper mobile-hide vertical-center">
                <AppInput name="Location" v-model="searchLocation" icon-url="/desktop/icon-location.svg"
                    placeholder-value="Filter by location">
                </AppInput>
            </div>
            <div class="search-contract vertical-center mobile-hide">
                <AppCheckbox v-model="searchFulltime">Full Time Only</AppCheckbox>
            </div>
            <div class="button-wrapper mobile-hide">
                <AppButton :onclick="onSubmit">Search</AppButton>
            </div>
            <div class="icon-wrapper mobile-show">
                <span @click="isActiveDialog = !isActiveDialog" style="cursor: pointer; padding: 20px 5px;"> <svg width="20"
                        height="20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                            fill="var(--icon-search)" fill-rule="nonzero" />
                    </svg></span>
                <AppButton :onclick="onSubmit"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                            fill="#FFFFFF" fill-rule="nonzero" />
                    </svg></AppButton>
            </div>
            <Dialog>
                <div class="dialog-header">
                    <AppInput name="Search" v-model="searchTerm" icon-url="/desktop/icon-search.svg"
                        placeholder-value="Filter by title, companies, expertise…">
                    </AppInput>
                </div>
                <div class="dialog-checkbox-wrapper">
                    <AppCheckbox v-model="searchFulltime">Full Time Only</AppCheckbox>
                </div>
                <div class="dialog-search-btn-wrapper">
                    <AppButton :onclick="onSubmit" :fullWidth="true">Search</AppButton>
                </div>
            </Dialog>
        </form>
    </div>
</template>

<style scoped>
form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 5px;
    background-color: var(--secondary-bg-color);
    height: 80px;
    border-radius: 6px;
    padding-right: 16px;
}

.mobile-show {
    display: none;
}

.search-term,
.search-contract {
    padding-left: min(32px, max(20px, 2vw));
}

.button-wrapper {
    display: grid;
    place-content: center;
}

.search-wrapper,
.location-wrapper {
    padding-left: 23px;
}

form>div {
    border-left: 1px solid #6e809820;
    height: 100%;
}

form> :first-child {
    border: none;
}

.vertical-center {
    display: flex;
    align-items: center;
    gap: 16px;
}

.input-field:focus-visible {
    outline: none;
}

.icon-wrapper {
    justify-content: space-between;
    gap: 24px;
    align-items: center;
}

.dialog-header {
    border-bottom: 1px solid hsla(214, 17%, 51%, 0.2);
    padding: 24px 24px;
    display: flex;
    gap: 16px;
}

.dialog-header .input-field {
    width: 200px;
}

.dialog-search-btn-wrapper {
    padding: 24px 24px;
}

.dialog-checkbox-wrapper {
    padding: 24px 24px 0 24px;
}

@media (max-width: 635px) {
    .mobile-hide {
        display: none;
    }

    .mobile-show {
        display: flex;
    }

    form>div {
        border-left: none;
    }

}
</style>