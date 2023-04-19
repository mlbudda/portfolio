<template>
    <div class="search">
        <img :src="iconUrl" :alt="name">
        <label :for="`text-search${id}`" class="sr-only">
            {{ name }}
        </label>
        <input :value="modelValue" :placeholder="placeholderValue" @input="$emit('update:modelValue', $event.target.value)"
            type="text" :id="`text-search${id}`">
    </div>
</template>

<script setup>
defineProps(["name", "iconUrl", "modelValue", "placeholderValue",])
defineEmits(['update:modelValue'])

const id = Math.floor(Math.random() * 10)

</script>

<style scoped>
.search {
    display: flex;
    align-items: center;
    gap: 1rem;
}

input {
    border: none;
    width: min(270px, max(105px, 16vw));
    caret-color: var(--primary-color-1);
    font-size: 1rem;
    background: var(--secondary-bg-color);
    text-overflow: ellipsis
}

input:focus-visible {
    outline: none;
}

@media (max-width: 375px) {

    input {
        width: 100%;
    }
}
</style>