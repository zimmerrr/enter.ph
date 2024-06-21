<template>
  <q-page
    class="flex flex-center items-stretch"
  >
    <div>
      <generic-header
        :image="Image"
        red-text="apparel"
        white-text="work"
      />
    </div>

    <div class="bg-white full-width seperator q-my-xl" />

    <generic-infographics
      :description="INFOGRAPHICS[1].description"
      :imageSrc="INFOGRAPHICS[1].image"
    />
  </q-page>
</template>

<script lang="ts" setup>
import GenericHeader from 'src/components/GenericHeader.vue'
import GenericInfographics from 'src/components/GenericInfographics.vue'
import { INFOGRAPHICS } from 'src/components/constants'
import Image from 'src/assets/home/entertainment.png'
</script>

<style scoped lang="sass">

</style>
