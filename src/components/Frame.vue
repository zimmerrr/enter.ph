<template>
  <div class="flex flex-center font-poppins frame-container">
    <div class="text-center">
      <div class="image-container text">
        <q-responsive :ratio="682/682">
          <q-img
            :src="imageSrc"
            no-spinner
            class="q-pa-md photo"
            ratio="1"
            flat
          />
        </q-responsive>
      </div>
      <div class="name q-mt-md">
        {{ name }}
      </div>
      <div class="role">
        {{ role }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  imageSrc: { type: String, default: '' },
  name: { type: String, default: '' },
  role: { type: String, default: '' },
})

</script>

<style lang="sass" setup>
.frame-container
  width: 100%

.image-container
  width: 100%

.name
  font-size: 1vw
  font-weight: 900
  line-height: 1
  font-style: italic
  width: 200px

.role
  font-size: 1vw

</style>
