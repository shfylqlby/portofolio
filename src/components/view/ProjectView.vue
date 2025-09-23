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
import Navbar from '../../components/features/navbar/Navbar.vue'
import Hero from '../../components/features/home/Hero.vue'
import Quote from '../../components/features/home/Quote.vue'
import Projects from '../../components/features/project/Projects.vue'
import Skills from '../../components/features/skills/Skills.vue'
import About from '../../components/features/about/About.vue'
import Contact from '../../components/features/contact/Contact.vue'
</script>
