<template>
  <q-page class="">
    <div class="row">
        <div class="col-9" />
        <div class="col q-mt-sm q-pa-sm">
            <q-btn size="sm" to="/" label="X" class="text-black text-subtitle1"  round color="grey-3" />
        </div> 
    </div>
    <div class="row">
      <div
        v-if="show !== 'true'"
        class="col q-mx-lg"
      >

        <q-card
          flat
          class="q-pa-md"
        >
          <q-card-section>

            <tickets />

          </q-card-section>

        </q-card>
      </div>
      <div v-else />
    </div>
  </q-page>
</template>

<script>
import tickets from '../components/tickets/tickets'

export default {
  name: 'PageIndex',
  components: { tickets },
  data () {
    return {
      show: true,
      panel: tickets
    }
  },
  methods: {
    setActiveTabChat () {
      // we select third tab which has `name` set to 'tab-3'
      this.panel='tickets'
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
