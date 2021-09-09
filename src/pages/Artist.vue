<template>

    <div class="q-ma-none row reverse">
      <div class="col">
        <div class="row">
          <q-btn
            size="lg"
            to="/"
            label="Hide"
            class="text-white text-h5"
            color="black"
          />
        </div>
      </div>
      <div class="col">
        <div class="gt-sm q-mb-sm">
          <userVideo  />
        </div>

        <div class="row ">
          <div v-if="show !== 'true'" class="col">
            <q-card flat class="q-ma-none q-pa-none bg-transparent">
              <q-card-section class="q-ma-none q-pa-none bg-transparent">
                <artist />
              </q-card-section>
            </q-card>
          </div>
          <div v-else />
        </div>
      </div>
    </div>

</template>

<script>
import artist from '../components/artist/artist'
import userVideo from '../components/user/userVideo/userVideo'

export default {
  name: 'PageIndex',
  components: { artist, userVideo },
  data () {
    return {
      show: true,
      panel: chat
    }
  },
  methods: {
    setActiveTabArtist () {
      // we select third tab which has `name` set to 'tab-3'
      this.panel='artist'
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
