<template>
    <div>
        <h3 v-show="title" class="title title-h3">{{ title }}</h3>
        <p>
            <slot></slot>
        </p>

        <ul v-if="!ordered">
            <li v-for="item in items">
                {{ item }}
            </li>
        </ul>
        <ol v-else>
            <li v-for="item in items">
                {{ item }}
            </li>
        </ol>
    </div>
</template>

<script setup>
defineProps(["title", 'ordered', 'items'])
</script>

<style scoped>
h3 {
    color: var(--primary-color-3);
    padding-bottom: 28px;
}

ul,
ol {
    margin: 24px 0 0 0;
    padding: 0 0 0 15px;
}

li {
    padding-bottom: 8px;
    padding-left: min(25px, max(10px, 3vw));

}
</style>