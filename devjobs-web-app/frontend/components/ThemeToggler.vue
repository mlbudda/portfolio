<template>
    <div class="wrapper">
        <img src="/desktop/icon-sun.svg" alt="Light theme" class="sun-icon">
        <div @click="toggle" class="toggle-wrapper">
            <div class="ball" :class="{ toggled: isActive }"></div>
        </div>
        <img src="/desktop/icon-moon.svg" alt="Dark theme">
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
}

.toggle-wrapper {
    height: 24px;
    width: 48px;
    background-color: white;
    display: grid;
    align-items: center;
    border-radius: 12px;
    padding: 5px;
    cursor: pointer;
}

.ball {
    height: 100%;
    width: 37%;
    background-color: var(--btn-blue);
    border-radius: 50%;
    translate: 0;
    transition: translate 160ms;
}

.toggle-wrapper:hover .ball {
    background-color: var(--btn-light-blue);
}

.ball.toggled {
    translate: 24px;
}
</style>

<script setup>
const isActive = ref(false)
const darkTheme = useState("darkTheme", () => "")


function toggle() {
    isActive.value = !isActive.value
    isActive.value ? darkTheme.value = 'dark-theme' : darkTheme.value = ''
}
</script>