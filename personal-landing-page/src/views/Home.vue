<template>
  <Hero @show-work="expand = true" />
  <Courusel :expand="expand" />
  <v-footer absolute v-show="expand" class="mt-4" border>
    <v-container>
      <v-row>
        <v-col class="d-flex align-center justify-center">2023 - <v-btn class="text-lowercase" append-icon="mdi-github"
            variant="plain">
            mlbudda
          </v-btn></v-col>
      </v-row>

    </v-container>
  </v-footer>
</template>

<script setup>
import Hero from "../components/Hero.vue"
import Courusel from "../components/Courusel.vue"
import { ref } from "vue"

const expand = ref(false)
const isSkillActive = ref(false)


</script>
