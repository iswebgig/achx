<template>
  <q-page class="q-mr-xl">
    <div class="row">

    </div>
  </q-page>
</template>

<script>


export default {
  name: 'PageIndex',
  components: {  },
  data () {
    return {
      show: faLse,
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
