<template>
    <label>
        <input :value="modelValue" @input="$emit('update:modelValue', !modelValue)" type="checkbox"
            class="option-input checkbox" />
        <span class="text"></span>
    </label>
</template>

<style scoped>
label {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 16px;
}

.option-input {
    appearance: none;
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background: var(--checkbox-bg);
    border: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    z-index: 1000;
}

.text::After {
    content: 'Full Time Only';
    color: var(--primary-color-3);
    font-weight: 700;
    font-size: 1rem;

}

.option-input:checked {
    background: var(--btn-blue);
}

.option-input:checked::before {
    height: 24px;
    width: 24px;
    position: absolute;
    content: url(../public/desktop/icon-check.svg);
    display: inline-block;
    font-size: 24px;
    text-align: center;
    line-height: 20px;
}

@media (max-width: 768px) {
    .text::After {
        content: 'Full Time';
    }
}

@media (max-width: 635px) {
    .text::After {
        content: 'Full Time Only';
    }
}
</style>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>