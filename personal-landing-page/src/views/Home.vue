<template>
  <Hero @show-work="expand = true" />
  <Courusel :expand="expand" />
  <Hire-me :expand="expand" />
  <Footer :expand="expand" />
</template>

<script setup>
import Hero from "../components/Hero.vue"
import Courusel from "../components/Courusel.vue"
import Footer from "../components/Footer.vue"
import HireMe from "../components/HireMe.vue"
import { ref } from "vue"

const expand = ref(false)


</script>
