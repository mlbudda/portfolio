<template>
    <v-banner>
        <v-container class="py-12">
            <v-row justify="start">
                <v-col>
                    <h2 class="banner2-title font-weight-light text-grey-darken-2"> > Hello!
                    </h2>
                    <h2 class="banner2-title font-weight-light text-grey-darken-2"> > <v-btn variant="tonal"
                            append-icon="mdi-arrow-left" @click="isGreetActive = true" v-show="!isGreetActive">
                            say Hello
                        </v-btn>
                        <span v-show="isGreetActive">Hello</span>
                    </h2>
                    <v-slide-x-transition>
                        <h2 v-show="isGreetActive" class="banner2-title font-weight-light text-grey-darken-2"> > I'm Ignas
                            Markauskas, <span class="font-weight-bold">
                                Front-end Developer</span> based in Vilnius.
                        </h2>
                    </v-slide-x-transition>

                </v-col>
            </v-row>
            <v-row class="py-4">

                <v-col>
                    <v-fade-transition>
                        <v-btn v-show="isGreetActive" :disabled="isDisabled" prepend-icon="mdi-briefcase-outline"
                            variant="outlined" @click.stop="showWork">Check My
                            Work</v-btn>
                    </v-fade-transition>

                </v-col>

            </v-row>
        </v-container>
    </v-banner>
</template>
  
<script setup>

import { ref } from "vue"

const isGreetActive = ref(false)
const isDisabled = ref(false)

const emit = defineEmits(["showWork"])

function showWork() {
    emit('showWork')
    isDisabled.value = true
}

</script>
  