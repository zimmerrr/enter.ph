<template>
  <div class="flex flex-center non-selectable">
    <div class="container row q-pa-lg">
      <div class="text-center font-poppins text-italic description">
        {{ description }}
      </div>
      <div class="text-center fit q-mt-xl">
        <q-img
          :src="image"
          no-spinner
          class="photo"
          flat
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  image: { type: String, default: '' },
  description: { type: String, default: '' },

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
</style>
