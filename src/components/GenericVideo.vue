<template>
  <div class="flex flex-center non-selectable">
    <div class="container font-poppins">
      <div class="text-center text-weight-bold text-italic title">
        {{ title }}
      </div>
      <div class="text-center description">
        {{ description }}
      </div>
      <div class="text-center video-container q-mt-lg">
        <q-responsive :ratio="1519/534">
          <q-video
            :src="videoSrc"
            loop
            :volume="volume"
            class="fit"
          />
        </q-responsive>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
  videoSrc: { type: String, default: '' },
  volume: { type: String, default: '1' },
})
</script>

<style lang="sass" scoped>

.container
  width: 100%

.video-container
  min-width: 80vw

.title
  font-size: 3vw
.description
  font-size: 1vw

</style>
