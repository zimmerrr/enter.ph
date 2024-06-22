<template>
  <div class="flex flex-center non-selectable">
    <div class="container q-pa-lg">
      <div class="row article">
        <div class="col-5 q-mr-xl q-mb-xl">
          <q-img
            :src="imageSrc"
            no-spinner
            class="photo"
            flat
          />
        </div>
        <div class="col-6 ">
          <div class="title text-weight-bold text-center text-balance">
            {{ title }}
          </div>
          <diV>
            {{ description1 }}
          </diV>
        </div>
        <div class="col-12 q-mb-xl">
          {{ description2 }}
        </div>
        <div class="col-12 q-mb-xl">
          {{ description3 }}
        </div>
        <div class="col-12 q-mb-xl">
          {{ description4 }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  imageSrc: { type: String, default: '' },
  title: { type: String, default: '' },
  description1: { type: String, default: '' },
  description2: { type: String, default: '' },
  description3: { type: String, default: '' },
  description4: { type: String, default: '' },

})
</script>

<style lang="sass" scoped>

.container
  width: 75%
  // max-width: 100%

.description
  font-size: 1.3vw
.photo
  width: 100%

.title
  font-size: 2.550vw
  line-height: 1.15
  margin-top: 2%
  margin-bottom: 10%

.article
  font-size: 1.1vw
</style>
