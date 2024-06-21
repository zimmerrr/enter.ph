<template>
  <q-page
    class="flex flex-center items-stretch non-selectable"
  >
    <div class="contianer q-my-xl">
      <div class="main row">
        <div class="col-7 content-center text-center text-balance">
          <div class="main-text q-mx-auto">
            <div class="font-harmoni text-header">
              YOUR GATEWAY:
            </div>
            <div class="text-justify text-body">
              <span class="text-weight-bold">Welcome to ENTER.PH</span>
              — your ultimate destination for the latest
              in local entertainment, justice advocacy, and workers in stylish
              apparels. Discover captivating stories, stay informed about
              social justice initiatives, and shop trendy clothing that reflects
              your unique style. Join our vibrant community and immerse
              yourself in the best of Philippine culture and lifestyle.
            </div>
          </div>
        </div>
        <div class="col-grow q-pa-xl">
          <q-img
            src="~assets/home/computer.png"
            no-spinner
            class="main-photo"
            flat
          />
        </div>
      </div>
    </div>

    <!-- ENTERTAINMENT -->
    <div class="contianer  content-center">
      <div class="main row">
        <div class="col-4 q-py-xl text-center">
          <q-img
            src="~assets/home/entertainment.png"
            no-spinner
            class="second-photo"
            flat
          />
        </div>
        <div class="col-8 content-center text-center text-balance">
          <div class="entertainment-text q-mx-auto">
            <div class="font-harmoni text-header">
              <span class="text-primary">ENT</span><span class="text-accent">ER</span>.<span class="text-secondary">TAIN</span>MENT
            </div>
            <div class="text-justify text-body">
              Your go-to source for the latest in Philippine local entertainment.
              Stay updated with news, exclusive interviews, and behind-the-
              scenes stories from the heart of the local entertainment scene.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white full-width seperator" />

    <!-- JUSTICE -->
    <div class="contianer  content-center">
      <div class="main row">
        <div class="col-8 content-center text-center text-balance">
          <div class="justice-text q-mx-auto">
            <div class="font-harmoni text-header">
              <span class="text-primary">ENT</span><span class="text-accent">ER</span>.<span class="text-secondary">JUSTICE</span>AD
            </div>
            <div class="text-justify text-body">
              Your hub for local justice advocacy in the Philippines. Stay
              informed about key issues, meet inspiring advocates, and join the
              movement for a fair and just society.
            </div>
          </div>
        </div>
        <div class="col-4 q-py-xl text-center">
          <q-img
            src="~assets/home/justice.png"
            no-spinner
            class="second-photo"
            flat
          />
        </div>
      </div>
    </div>

    <div class="bg-white full-width seperator" />

    <!-- APPAREL -->
    <div class="contianer content-center">
      <div class="main row">
        <div class="col-4 q-py-xl text-center">
          <q-img
            src="~assets/home/apparel.png"
            no-spinner
            class="second-photo"
            flat
          />
        </div>
        <div class="col-8 content-center text-center text-balance">
          <div class="apparel-text q-mx-auto">
            <div class="font-harmoni text-header">
              <span class="text-primary">ENT</span><span class="text-accent">ER</span>.<span class="text-secondary">APPAREL</span>WORK
            </div>
            <div class="text-justify text-body">
              dedicated to showcasing the stories and talents of local apparel workers
              in the Philippines. Discover their craft, learn about their impact, and
              support the heart of the Philippine fashion industry.
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="sass">
.contianer
  width: 75vw
  height: 70vh
.seperator
  height: 10px !important
.main-text
  max-width: 38vw
  .text-header
    font-size: 7.4vw
    line-height: 1

  .text-body
    font-size: 1vw
.main-photo
    width: 100%
.entertainment-text
  max-width: 38vw
  .text-header
    font-size: 7vw
    line-height: 1

  .text-body
    font-size: 1vw
.justice-text
  max-width: 38vw
  .text-header
    font-size: 7vw
    line-height: 1

  .text-body
    font-size: 1vw
.apparel-text
  max-width: 50vw
  .text-header
    font-size: 7vw
    line-height: 1

  .text-body
    font-size: 1vw

.second-photo
  width: 75%

</style>
