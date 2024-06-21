<template>
  <div class="flex flex-center non-selectable">
    <div class="container row q-pa-lg">
      <div
        v-if="!flip"
        class="col-4 text-right"
      >
        <q-img
          :src="image"
          no-spinner
          class="photo"
          flat
        />
      </div>
      <div class="col-8 row flex flex-center">
        <div class="col-12 text-center">
          <div class="font-poppins text-weight-bold welcome">
            WELCOME TO
          </div>
          <div class="font-harmoni text-uppercase name">
            <span class="text-primary">ENT</span><span class="text-accent">ER</span>.<span class="text-secondary">{{ redText }}</span>{{ whiteText }}
          </div>
          <div class="description q-mx-auto">
            {{ description }}
          </div>
        </div>
      </div>
      <div
        v-if="flip"
        class="col-4 text-right"
      >
        <q-img
          :src="imageSrc"
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
  imageSrc: { type: String, default: '' },
  redText: { type: String, default: '' },
  whiteText: { type: String, default: '' },
  description: { type: String, default: '' },
  flip: { type: Boolean, default: false },
})

</script>
<style lang="sass" scoped>
.container
  width: 86vw
.photo
  width: 80%

.welcome
  font-size: 3vw

.name
  font-size: 6vw
  line-height: 1

.description
  font-size: 1vw
  max-width: 60%
</style>
