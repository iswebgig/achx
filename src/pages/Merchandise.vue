<template>
  <div class="transparent">
    <div class="q-ma-none">
      <div class="col">
        <div class="row absolute-right">
          <q-btn
            size="lg"
            to="/"
            label="<"
            class="text-white text-h5"
            color="black"
          />
        </div>
      </div>
      <div class="col">
        <div class="q-px-xl">
          <userVideo class="gt-sm" />
        </div>

        <div class="row">
          <div v-if="show !== 'true'" class="col q-mx-lg">
            <q-card flat class="q-pa-md bg-transparent">
              <q-card-section>
                <merchandise />
              </q-card-section>
            </q-card>
          </div>
          <div v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import merchandise from "../components/merchandise/merchandise";
import userVideo from "../components/user/userVideo/userVideo";

export default {
  name: "PageIndex",
  components: { merchandise, userVideo },
  data() {
    return {
      show: false
    };
  },
  methods: {}
};
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
