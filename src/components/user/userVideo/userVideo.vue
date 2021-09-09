<template>
  <div class="row justify-around q-mx-lg">
    <div
      v-for="user in users"
      :key="user.id"
      class="full-width"
    >
      <q-card
        transparent
        style=""
        class="userVideo-card justify-around"
      >
      
            <q-video
               class="userVideo-frame"
               style="height: auto;"
               contain
               :autoplay="true"
               :ratio="16/9"
               :src='user.videoStreamUrl' />

      </q-card>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [
        {
          id: 1,
          firstName: "Lucy",
          lastName: "Smith",
          userName: "SaraYo",
          mainImage: 'https://cdn.quasar.dev/img/avatar2.jpg',
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/62815418-1e73-45a1-b4b0-eabdf9b5b28f.mp4'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.userVideo-card
  position: relative
  overflow: hidden
  width: 100%
  min-width: 10rem
  padding-top: 56.25%
.userVideo-frame
  position: absolute
  top: 0
  left: 0
  bottom: 0
  right: 0
  width: 100%
  height: 100%
</style>