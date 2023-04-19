<template>
    <button :class="{ 'full-width': fullWidth }" @click="onClick">
        <slot>Button</slot>
    </button>
</template>
<style scoped>
button {
    background-color: var(--btn-blue);
    color: white;
    padding: 16px min(32px, max(16px, 2vw));
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    border: none;
    border-radius: 5px;
}

.full-width {
    width: 100%;
}

button:hover {
    background-color: var(--btn-light-blue);
}

button:active {
    box-shadow: 1px 1px 8px 2.5px #dddddd;
}
</style>
<script setup>
defineProps(['onClick', 'fullWidth'])
</script>
