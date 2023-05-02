<template>
    <!-- <v-expand-x-transition> -->
    <v-carousel height="auto" v-show="expand" hide-delimiters progress="primary" touch>
        <v-carousel-item v-for="(slide, i) in  slides " :key="i">
            <v-sheet class="d-flex fill-height align-center">
                <v-container class="d-flex fill-height justify-center">
                    <v-row align="center" class="mx-12">
                        <v-col align="center">
                            <v-sheet elevation="1">
                                <v-img aspect-ratio="1/1" max-height="600" min-width="200" :src="slide.image">
                                </v-img>
                            </v-sheet>
                        </v-col>
                        <v-col>
                            <v-card elevation="0" max-width="400">
                                <v-card-title>
                                    {{ slide.name }}
                                </v-card-title>
                                <v-card-text>
                                    {{ slide.desc }}
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions class="">
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
            </v-sheet>
        </v-carousel-item>
    </v-carousel>
    <!-- </v-expand-x-transition> -->
</template>
  
<script setup>
defineProps(['expand'])

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
        desc: `FrontendMentor challenge - production-ready front-end application built with
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
        desc: `FrontendMentor challenge - I’ve used pure HTML, CSS and
              JS to call API and display results. It has
              custom error checking and dark theme which match
              user preferred theme.`,
        liveUrl: "https://mlbudda.github.io/portfolio/dictionary-web-app",
        repo: 'https://github.com/mlbudda/portfolio/tree/master/dictionary-web-app',
        stack: [{ name: "HTML", icon: "language-html5" }, { name: "CSS", icon: "language-css3" }, { name: "JavaScript", icon: "language-javascript" }, { name: "API", icon: "api" }]
    }
]

</script>