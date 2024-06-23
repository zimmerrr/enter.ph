<template>
  <q-footer
    v-if="!route.meta.footer"
    class="content-center bg-transparent q-pa-xl"
  >
    <div class="row">
      <div class="row col-3">
        <div class="col-12">
          <q-img
            src="~assets/logo.png"
            no-spinner
            class="logo"
            fit="contain"
            flat
          />
        </div>

        <div class="col-12 logo-text">
          This website is made by the 4th year students with the course of Bachelor Science in Computer Science of Cavite State University - Imus Campus.
        </div>
      </div>
      <div
        class="col-9 q-pl-lg"
      >
        <div class="row font-poppins">
          <!-- CONTENT CREATOR -->
          <div class="col-4">
            <div class="row">
              <div class="col-12">
                <q-img
                  src="~assets/icons/content.png"
                  no-spinner
                  class="creator-logo col-6"
                  flat
                />
                <span class="col-6 text-uppercase creator-text content-center">
                  Content Creators
                </span>
              </div>

              <div class="col-12 row">
                <div
                  class="col-6 text-italic"
                  :class="$q.screen.width > $q.screen.height ? `q-mt-md` : `q-mt-sm`"
                >
                  <!-- JUSTICE ADVOCATES -->
                  <div class="text-weight-bold creator-subgroup">
                    Justice Advocates:
                  </div>
                  <div
                    v-for="(members, idx) in justiceAdvocates"
                    :key="idx"
                    class="member-text"
                  >
                    <div>{{ members }}</div>
                  </div>
                  <!-- ENTERTAINMENT -->
                  <div class="q-mt-md">
                    <div class="text-weight-bold creator-subgroup">
                      Entertainment:
                    </div>
                    <div
                      v-for="(members, idx) in entertainment"
                      :key="idx"
                      class="member-text"
                    >
                      <div>{{ members }}</div>
                    </div>
                  </div>
                </div>
                <div class="col-6 q-mt-md text-italic">
                  <!-- APPAREL WORKERS -->
                  <div class="text-weight-bold creator-subgroup">
                    Apparel Workers:
                  </div>
                  <div
                    v-for="(members, idx) in apparelWorkers"
                    :key="idx"
                    class="member-text"
                  >
                    <div>{{ members }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- WEB DESIGNER -->
          <div class="col-4">
            <div class="row">
              <div class="col-12">
                <q-img
                  src="~assets/icons/uiux.png"
                  no-spinner
                  class="creator-logo col-6"
                  flat
                />
                <span class="col-6 text-uppercase creator-text content-center">
                  Web Designers
                </span>
              </div>

              <div class="col-7 q-mx-auto">
                <div class="q-mt-md  text-italic">
                  <div
                    v-for="(members, idx) in webDesigner"
                    :key="idx"
                    class="member-text"
                  >
                    <div>{{ members }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- DEVELOPER -->
          <div class="col-4">
            <div class="row">
              <div class="col-12">
                <q-img
                  src="~assets/icons/dev.png"
                  no-spinner
                  class="creator-logo col-6"
                  flat
                />
                <span class="col-6 text-uppercase creator-text content-center">
                  Web Developers
                </span>
              </div>

              <div class="col-8 q-mx-auto">
                <div class="q-mt-md  text-italic">
                  <div
                    v-for="(members, idx) in developer"
                    :key="idx"
                    class="member-text q-pl-xl"
                  >
                    <div>{{ members }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row q-mt-lg">
              <div class="col-12">
                <q-img
                  src="~assets/icons/pm.png"
                  no-spinner
                  class="creator-logo col-6"
                  flat
                />
                <span class="col-6 text-uppercase creator-text content-center">
                  Project Manager
                </span>
              </div>

              <div class="col-8 q-mx-auto">
                <div class="q-mt-md text-italic">
                  <div
                    v-for="(members, idx) in projectManager"
                    :key="idx"
                    class="member-text q-pl-xl"
                  >
                    <div>{{ members }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-footer>

  <q-footer
    v-else
    class="container-alt content-center q-mx-auto bg-transparent q-my-xl"
  >
    <div class="text-center">
      <q-img
        src="~assets/logo.png"
        no-spinner
        class="logo-alt"
        fit="contain"
        flat
      />
    </div>
    <div class="text-alt text-justify q-mx-auto">
      This website is made by the 4th year students with the course of Bachelor Science in Computer Science of Cavite State University - Imus Campus.
    </div>
  </q-footer>
</template>

<script  lang="ts" setup>
import { useRoute } from 'vue-router'
import { DEVELOPERS } from './constants'

const justiceAdvocates = DEVELOPERS[0].group[0].members
const entertainment = DEVELOPERS[0].group[1].members
const apparelWorkers = DEVELOPERS[0].group[2].members
const webDesigner = DEVELOPERS[1].members
const developer = DEVELOPERS[2].members
const projectManager = DEVELOPERS[3].members

const route = useRoute()
</script>

<style lang="sass" scoped>
.logo
  width: 60%

.logo-text
  font-size: 0.9vw
  max-width: 80%
  margin-top: -25%
.creator-logo
  width: 6.5vw

.creator-text
  font-size: 1.4vw
  font-weight: 600
.creator-subgroup
  font-size: 1vw
.member-text
  font-size: 1vw
.container-alt
  width: 30vw
  // margin-left: 41%

.logo-alt
  width: 55%
  margin-left: -20%
  margin-bottom: -5%
.text-alt
  width: 20vw
  font-size: 1.2vw

@media screen and (max-width: $breakpoint-xs-max)
  .creator-text
    font-size: 1vw

  .member-text
    font-size: 1vw
</style>
