<template>
  <div class="row q-my-md q-mr-md">
    <q-card style="width: 90vw;" class="col-12 bg-black">
      <iframe
      class="xs"
        style="min-width: 100%; min-height: 250px; overflow: hidden; border-style: none;"
        src="https://experience.sourcesync.io/live-ux-test"
      ></iframe>
       <iframe
      class="gt-xs"
        style="min-width: 100%; min-height: 600px; overflow: hidden; border-style: none;"
        src="https://experience.sourcesync.io/live-ux-test"
      ></iframe>
    </q-card>
  </div>
</template>

<style lang="sass" scoped>
.my-card
  position: relative
  overflow: hidden
  width: 100%!important
  padding-top: 56.25%!important
.my-iframe
  position: absolute
  top: 0
  left: 0
  bottom: 0
  right: 0
  width: 100%!important
  height: 100%!important
</style>
