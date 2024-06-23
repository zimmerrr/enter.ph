<template>
  <q-header class="nav text-white">
    <div class="row">
      <div class="col-2 text-center">
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
          class="text-uppercase cursor-pointer text-weight-bold menu-text"
          :class="{ 'text-primary': active === menu.url }"
          @click="nextRoute(menu.url)"
        >
          {{ menu.name }}
        </q-btn>
      </div>
    </div>
  </q-header>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MENU } from './constants'
import { useRouter } from 'vue-router'

const router = useRouter()
const currPath = ref(router.currentRoute.value.fullPath)
const active = ref(currPath.value)

function nextRoute(url: string) {
  let nextRoute = '/'
  nextRoute = url
  active.value = url
  router.push(nextRoute)
}

</script>
<style lang="sass" scoped>
.nav
  background: transparent
  background: linear-gradient(180deg, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)
.logo
  width: 200px
  max-width: 30vw

.menu-text
  font-size: 1vw
@media screen and (max-width: $breakpoint-xs-max)
  .logo
    width: 200px
    max-width: 20vw

  .menu-text
    font-size: 1.5vw
</style>
