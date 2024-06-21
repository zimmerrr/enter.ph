<template>
  <div class="nav fit text-white q-pa-xl">
    <div class="row">
      <div class="col-2 text-right">
        <q-img
          src="~assets/logo.png"
          no-spinner
          class="logo"
          flat
        />
      </div>
      <div
        v-for="(menu, idx) in MENU"
        :key="idx"
        class="col-2 flex flex-center"
      >
        <q-btn
          class="text-uppercase cursor-pointer text-weight-bold"
          :class="{ 'text-primary': active === menu.url }"
          @click="nextRoute(menu.url)"
        >
          {{ menu.name }}
        </q-btn>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MENU } from './constants'
import { useRouter } from 'vue-router'

const router = useRouter()
const currPath = ref(router.currentRoute.value.fullPath)
const active = ref(currPath.value)

function nextRoute(url) {
  let nextRoute = '/'
  nextRoute = url
  active.value = url
  router.push(nextRoute)
}

</script>
<style lang="sass" scoped>
.logo
  width: 200px
  max-width: 30vw

</style>
