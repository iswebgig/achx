<template>
     <q-scroll-area style="height: 20rem;" class="q-mt-lg">
  <div class="row items-start justify-center q-gutter-xs ">
   
    <div
      v-for="user in users"
      :key="user.id"
      class="col-2 q-ma-sm"
    >
      <q-card
        flat
        class="userVideo-card justify-around"
      >
            <q-video
               class="userVideo-frame"
               style="height: auto;"
               contain
               autoplay="true"
               :ratio="16/9"
               :src='user.videoStreamUrl' />

      </q-card>

    </div>
        
  </div>
  </q-scroll-area>
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
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/26350b8f-a2fe-41ba-8354-48c0c90b1ddc.mp4'
        },
        {
          id: 2,
          firstName: "Luke",
          lastName: "Smith",
          userName: "LucasOilMachine",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/c90fdd0a-9fd1-4d30-858b-e001b69f7942.mp4'
        },
        {
          id: 3,
          firstName: "Bob",
          lastName: "Smith",
          userName: "BarbaraSwampTurtle",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/62815418-1e73-45a1-b4b0-eabdf9b5b28f.mp4'
        },
        {
          id: 4,
          firstName: "susan",
          lastName: "Smith",
          userName: "DannyDoNothing",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/26350b8f-a2fe-41ba-8354-48c0c90b1ddc.mp4'
        },
        {
          id: 5,
          firstName: "Fred",
          lastName: "Smith",
          userName: "GeorgeOrBret",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/c90fdd0a-9fd1-4d30-858b-e001b69f7942.mp4'
        },
                {
          id: 6,
          firstName: "Fred",
          lastName: "Smith",
          userName: "GeraldBreeze",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/62815418-1e73-45a1-b4b0-eabdf9b5b28f.mp4'
        },
                {
          id: 7,
          firstName: "Fred",
          lastName: "Smith",
          userName: "DerekSail",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/26350b8f-a2fe-41ba-8354-48c0c90b1ddc.mp4'
        },
                {
          id: 8,
          firstName: "Fred",
          lastName: "Smith",
          userName: "HugeDude",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/c90fdd0a-9fd1-4d30-858b-e001b69f7942.mp4'
        },
        {
          id: 9,
          firstName: "Fred",
          lastName: "Smith",
          userName: "HugeDude",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/c90fdd0a-9fd1-4d30-858b-e001b69f7942.mp4'
        },
        {
          id: 10,
          firstName: "Fred",
          lastName: "Smith",
          userName: "HugeDude",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/c90fdd0a-9fd1-4d30-858b-e001b69f7942.mp4'
        },
        {
          id: 11,
          firstName: "Fred",
          lastName: "Smith",
          userName: "HugeDude",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/c90fdd0a-9fd1-4d30-858b-e001b69f7942.mp4'
        },
        {
          id: 12,
          firstName: "Fred",
          lastName: "Smith",
          userName: "HugeDude",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/c90fdd0a-9fd1-4d30-858b-e001b69f7942.mp4'
        },
        {
          id: 13,
          firstName: "Fred",
          lastName: "Smith",
          userName: "HugeDude",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/c90fdd0a-9fd1-4d30-858b-e001b69f7942.mp4'
        },
                {
          id: 14,
          firstName: "Fred",
          lastName: "Smith",
          userName: "HugeDude",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/c90fdd0a-9fd1-4d30-858b-e001b69f7942.mp4'
        },
                {
          id: 15,
          firstName: "Fred",
          lastName: "Smith",
          userName: "HugeDude",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/c90fdd0a-9fd1-4d30-858b-e001b69f7942.mp4'
        },
                {
          id: 16,
          firstName: "Fred",
          lastName: "Smith",
          userName: "HugeDude",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/c90fdd0a-9fd1-4d30-858b-e001b69f7942.mp4'
        },
                {
          id: 17,
          firstName: "Fred",
          lastName: "Smith",
          userName: "HugeDude",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/c90fdd0a-9fd1-4d30-858b-e001b69f7942.mp4'
        },
                {
          id: 18,
          firstName: "Fred",
          lastName: "Smith",
          userName: "HugeDude",
          mainImage: "https://cdn.quasar.dev/img/avatar2.jpg",
          videoStreamUrl: 'https://storage.googleapis.com/cdn.source.tools/media/c90fdd0a-9fd1-4d30-858b-e001b69f7942.mp4'
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
  min-width: 6rem
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