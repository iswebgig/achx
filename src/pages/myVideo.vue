<template>
  <q-page class="transparent">
    <div class="q-px-xl">
      <userVideo class="q-px-lg" />
    </div>
    <div class="row absolute-right">
        <q-btn
          size="lg"
          to="/"
          label="<"
          class="text-white text-vertical text-h5"
          color="black"
        />
    </div>
    <div class="row q-mx-md">
      <div
        v-if="show !== 'true'"
        class="col q-mx-lg"
      >

        <q-card
          flat
          class="q-pa-md bg-black"
        >
          <q-card-section>

            <chatRoom />

          </q-card-section>

        </q-card>
      </div>
      <div v-else />
    </div>
  </q-page>
</template>

<script>
import chatRoom from '../components/chat/chatRoom'
import userVideo from '../components/user/userVideo/userVideo'

export default {
  name: 'PageIndex',
  components: { chatRoom, userVideo },
  data () {
    return {
      show: true,
      panel: chat
    }
  },
  methods: {
    setActiveTabChat () {
      // we select third tab which has `name` set to 'tab-3'
      this.panel='chat'
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  position: relative
  overflow: hidden
  width: 100%
  padding-top: 56.25%
.my-iframe
  position: absolute
  top: 0
  left: 0
  bottom: 0
  right: 0
  width: 100%
  height: 100%
</style>
