<template>
    <div @click="check" class="mobile-overlay" :class="{ active: isActive }" id="overlay">
        <div class="dialog">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.mobile-overlay {
    display: none;
}

.mobile-overlay.active {
    position: fixed;
    inset: 0;
    background-color: hsla(220, 29%, 10%, 0.5);
    display: flex;
    place-items: center;
    place-content: center;
    z-index: 999;
}

.dialog {
    min-width: calc(240px + 20vw);
    background-color: var(--card-bg-color);
    border-radius: 6px;
}
</style>

<script setup>
const isActive = useState("toggleDialog", () => false)
function check(event) {
    if (event.target.id === 'overlay') {
        isActive.value = !isActive.value
    }
}
</script>   