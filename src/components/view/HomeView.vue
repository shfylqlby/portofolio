<template>
  <div class="HomeView">
    <Navbar />
    <Hero />
    <Quote />
    <Projects />
    <Skills />
    <About />
    <Contact />
  </div>
</template>

<script setup>
import Navbar from '../navbar/Navbar.vue'
import Hero from '../features/home/Hero.vue'
import Quote from '../features/home/Quote.vue'
import Projects from '../features/home/Project.vue'
import Skills from '../features/home/Skills.vue'
import About from '../features/home/About.vue'
import Contact from '../features/home/Contact.vue'
</script>
