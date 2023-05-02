<template>
    <v-banner v-show="expand">
        <v-container class="py-12">
            <v-row justify="start">
                <v-col>
                    <h2 class="banner2-title font-weight-light text-grey-darken-2">
                        <v-icon icon="mdi-greater-than" size="x-small"></v-icon>Are you looking who
                        can build
                        scalable, performant, and visually appealing web
                        applications?
                    </h2>
                    <h2 class="banner2-title font-weight-light text-grey-darken-2">
                        <v-icon icon="mdi-greater-than" size="x-small"></v-icon>
                        <v-btn variant="tonal" href="mailto:ignasmark5@gmail.com"
                            append-icon="mdi-email-arrow-left-outline">Let's talk
                            <template v-slot:append>
                                <v-icon color="deep-purple-accent-3"></v-icon>
                            </template>
                        </v-btn>
                    </h2>
                </v-col>
            </v-row>
        </v-container>
    </v-banner>
</template>
<script setup>
defineProps(['expand'])

</script>


