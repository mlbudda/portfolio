<template>
    <v-footer absolute v-show="expand" class="mt-4">
        <v-container>
            <v-row>
                <v-col class="d-flex align-center justify-center">2023 - <v-btn class="text-lowercase"
                        append-icon="mdi-github" variant="plain">
                        mlbudda
                    </v-btn></v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script setup>
defineProps(['expand'])


</script>