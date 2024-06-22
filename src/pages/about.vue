<template>
  <q-page
    class="flex flex-center items-stretch"
  >
    <!-- about -->

    <div class="bg-white full-width seperator q-my-xl" />

    <div class="frame-container q-mx-auto q-mb-xl">
      <div class="header text-center font-poppins q-mb-lg">
        Creators
      </div>
      <div class="justify-center grid-container fit">
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
.frame-container
  max-width: 80vw

.header
  font-size: 2vw
  font-weight: 900
  letter-spacing: 1px

.grid-container
  display: grid
  grid-template-columns: repeat(5, 20%)

.grid
  padding: 5%

</style>
