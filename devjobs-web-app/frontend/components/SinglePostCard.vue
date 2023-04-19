<template>
    <div class="card">
        <div>
            <div :style="styleLogo" class="brand-logo"></div>
            <div class="card-header">
                <p>{{ postedAt }}</p>
                <p class="dot"></p>
                <p>{{ contract }}</p>
            </div>
            <NuxtLink :to="`/posts/${id}`">
                <h2 class="position title-h3">{{ position }}</h2>
            </NuxtLink>
            <p class="company">{{ company }}</p>
        </div>
        <p class="location">{{ location }}</p>
    </div>
</template>

<style scoped>
.card {
    background: var(--card-bg-color);
    border-radius: 6px;
    padding: 0 32px 32px 32px;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
}

.brand-logo {
    position: relative;
    top: -25px;
}

.card-header {
    display: inline-flex;
    align-items: center;
    gap: 12px;
}

.card-header .dot {
    margin-top: 7px;
    height: 4px;
    width: 4px;
    background-color: var(--secondary-color-4);
    border-radius: 50%;
}

.position {
    padding-top: 13px;
}

a {
    text-decoration: none;
    color: var(--primary-color-3);
}

a:hover {
    color: var(--secondary-color-4);
}

p {
    line-height: 20px;
    color: var(--secondary-color-4);
}

.company {
    padding-top: 17px;
    color: var(--secondary-color-4);
}

.location {
    padding-top: 20px;
    color: var(--primary-color-1);
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
}
</style>

<script setup>

const props = defineProps(['id', 'position', 'location', 'contract', 'company', 'postedAt', 'logo', 'logoBackground'])
const styleLogo = reactive({
    height: '50px',
    width: "50px",
    background: `no-repeat center url(/logos/${props.logo.split('/').at(-1)}),` + props.logoBackground,
    "border-radius": "15px"
})
</script>

