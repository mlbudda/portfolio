<template>
    <div class="footer">
        <div class="wrapper container-md padding-md">
            <div class="group">
                <h3 class="position title-h3">{{ position }}</h3>
                <p class="company">{{ company }}</p>
            </div>
            <div class="btn-wrapper">
                <AppButton :on-click="onClick" :full-width="true">Apply Now</AppButton>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    margin-top: 80px;
    height: 96px;
    background-color: var(--secondary-bg-color);
    width: 100%;
}

.wrapper {
    padding-top: 23px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

h3 {
    color: var(--primary-color-3);
}

p {
    color: var(--secondary-color-4);
}

@media (max-width: 375px) {
    .btn-wrapper {
        width: 100%;
    }

    .group {
        display: none;
    }

}
</style>

<script setup>
defineProps(['position', 'company', 'onClick'])
</script>