<template>
  <q-page
    class="flex flex-center items-stretch non-selectable"
  >
    <!-- about -->
    <div class="about-container text-justify q-mt-lg">
      <div class="about-header font-harmoni">
        ABOUT US
      </div>
      <div class="about-text font-poppins text-italic">
        <div class="q-mb-md">
          Welcome to ENTER.PH, a dynamic platform created by the Bachelor of Science in Computer Science Section 4A of Cavite State University - Imus Campus. This website was developed as part of our coursework for the subject "The Contemporary World" (Subject Code: GNED 7).
        </div>
        <div class="q-mb-md">
          At ENTER.PH, we aim to provide a comprehensive look into the vibrant spheres of local entertainment, justice advocacy, and the apparel industry in the Philippines. Our goal is to inform, inspire, and connect our community through engaging content and meaningful stories.
        </div>
        <div class="q-mb-md">
          Join us as we explore and celebrate the unique aspects of Philippine culture and society, driven by the passion and dedication of future tech innovators and advocates.
        </div>
      </div>
    </div>

    <div class="bg-white full-width seperator q-my-xl" />

    <div class="frame-container q-mx-auto q-mb-xl">
      <div class="header text-center font-poppins q-mb-lg">
        Creators
      </div>
      <div class="grid-container fit">
        <div
          v-for="(developer, idx) in DEVELOPERS"
          :key="idx"
          class="grid"
        >
          <Frame
            :name="DEVELOPERS[idx].name"
            :role="DEVELOPERS[idx].role"
            :image-src="DEVELOPERS[idx].image"
          />
        </div>
      </div>
    </div>

    <div class="frame-container q-mx-auto q-my-xl">
      <div class="header text-center font-poppins q-mb-lg">
        Professor
      </div>
      <div class="justify-center">
        <Frame
          :name="INSTRUCTOR.name"
          :role="INSTRUCTOR.role"
          :image-src="INSTRUCTOR.image"
        />
      </div>
    </div>

    <div class="bg-white full-width seperator q-my-xl" />
  </q-page>
</template>

<script lang="ts" setup>
import Frame from 'src/components/Frame.vue'
import { DEVELOPERS, INSTRUCTOR } from 'src/components/developers'

</script>

<style scoped lang="sass">

.about-container
  max-width: 80vw
  margin-left: 30%
.about-header
  font-size: 7vw
  line-height: 1
.about-text
  max-width: 35vw
  font-size: 1vw
.frame-container
  max-width: 80vw

.header
  font-size: 2vw
  font-weight: 900
  letter-spacing: 1px

.grid-container
  display: grid
  grid-template-columns: repeat(4, 25%)

.grid
  padding: 5%

</style>
