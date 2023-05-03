<template>
    <v-expand-x-transition>
        <v-carousel v-model="model" height="400" v-show="expand && isScreenLarge" hide-delimiters progress="primary">
            <v-carousel-item v-for="(slide, i) in  slides " :key="i">
                <v-container>
                    <v-row>
                        <v-col align="center" class="pt-6">
                            <v-img max-width="300" min-width="255" aspect-ratio="1/1" cover :src="slide.image">
                            </v-img>
                        </v-col>
                        <v-col align="center">
                            <v-card elevation="0" max-width="400">
                                <v-card-title>
                                    {{ slide.name }}
                                </v-card-title>
                                <v-card-text>
                                    {{ slide.desc }}
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-chip v-for="item in slide.stack" :index="item.name"
                                        :prepend-icon="`mdi-${item.icon ? item.icon : 'lightbulb-outline'}`"
                                        variant="elevated">
                                        {{ item.name }}
                                    </v-chip>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                                <v-card-actions>
                                    <v-btn :href="slide.liveUrl" :disabled="slide.liveUrl !== '' ? false : true"
                                        target="_blank">Live site</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn :href="slide.repo" :disabled="slide.repo !== '' ? false : true"
                                        target="_blank">Repository</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-carousel-item>
        </v-carousel>
    </v-expand-x-transition>

    <v-expand-x-transition>
        <v-carousel v-model="model" height="700" v-show="expand && isScreenSmall" hide-delimiters progress="primary">
            <v-carousel-item v-for="(slide, i) in  slides " :key="i">
                <v-container>
                    <v-row>
                        <v-col align="center" class="pt-6">
                            <v-img max-width="300" min-width="255" aspect-ratio="1/1" cover :src="slide.image">
                            </v-img>
                        </v-col>
                        <v-col align="center">
                            <v-card elevation="0" max-width="400">
                                <v-card-title>
                                    {{ slide.name }}
                                </v-card-title>
                                <v-card-text>
                                    {{ slide.desc }}
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-chip v-for="item in slide.stack" :index="item.name"
                                        :prepend-icon="`mdi-${item.icon ? item.icon : 'lightbulb-outline'}`"
                                        variant="elevated">
                                        {{ item.name }}
                                    </v-chip>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                                <v-card-actions>
                                    <v-btn :href="slide.liveUrl" :disabled="slide.liveUrl !== '' ? false : true"
                                        target="_blank">Live site</v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn :href="slide.repo" :disabled="slide.repo !== '' ? false : true"
                                        target="_blank">Repository</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-carousel-item>
        </v-carousel>
    </v-expand-x-transition>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import debounce from 'lodash.debounce'

defineProps(['expand'])


const isScreenLarge = ref(false)
const isScreenSmall = ref(false)

const model = ref(0)


onMounted(() => {
    window.addEventListener("resize", debounce(windowResizeHandler, 50));
    window.innerWidth > 666 ? isScreenLarge.value = true : isScreenLarge.value = false
    window.innerWidth < 666 ? isScreenSmall.value = true : isScreenSmall.value = false
})

onUnmounted(() => {
    window.removeEventListener("resize", debounce(windowResizeHandler, 50));
})

function windowResizeHandler() {
    window.innerWidth > 666 ? isScreenLarge.value = true : isScreenLarge.value = false
    window.innerWidth < 666 ? isScreenSmall.value = true : isScreenSmall.value = false
}


const slides = [
    {
        id: 0,
        name: "Boutique e-shop - Yuga",
        image: "yuga-export.jpg",
        desc: `Full-stack app with custom checkout flow using Bulma UI and Vue. It includes client-side payment integration and a simple backend framework for operations.`,
        liveUrl: "https://yuga.lt",
        repo: '',
        stack: [{ name: "Bulma", icon: "bulma" }, { name: "VueJs", icon: "vuejs" }, { name: "NuxtJs", icon: "nuxt" }, { name: "Stripe", icon: "" }]
    },
    {
        id: 1,
        name: `Dev jobs ad app`,
        image: "dev-jobs.jpg",
        desc: `Production-ready frontend application built with
              Vue.js and Nuxt.js, bundled together using
              Vite.`,
        liveUrl: "https://chimerical-dieffenbachia-00afd0.netlify.app/",
        repo: 'https://github.com/mlbudda/portfolio/tree/master/devjobs-web-app/frontend',
        stack: [{ name: "HTML", icon: "language-html5" }, { name: "CSS", icon: "language-css3" }, { name: "NuxtJs", icon: "nuxt" }, { name: "VueJs", icon: "vuejs" }]
    },
    {
        id: 2,
        name: `Dictionary app`,
        image: "dictionary-screenshot.jpg",
        desc: `Native HTML, CSS and
              JS app. API implementation for fetching results. Custom error checking and dark theme which match
              user preferred theme.`,
        liveUrl: "https://mlbudda.github.io/portfolio/dictionary-web-app",
        repo: 'https://github.com/mlbudda/portfolio/tree/master/dictionary-web-app',
        stack: [{ name: "HTML", icon: "language-html5" }, { name: "CSS", icon: "language-css3" }, { name: "JavaScript", icon: "language-javascript" }, { name: "API", icon: "api" }]
    },
    {
        id: 3,
        name: `Landing page`,
        image: "equalizer-export.jpg",
        desc: `Landing page with Flexbox and responsive design in mind.`,
        liveUrl: "https://mlbudda.github.io/portfolio/equalizer-landing-page",
        repo: 'https://github.com/mlbudda/portfolio/tree/master/equalizer-landing-page',
        stack: [{ name: "HTML", icon: "language-html5" }, { name: "CSS", icon: "language-css3" }]
    }
]

</script>