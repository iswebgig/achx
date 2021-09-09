<template>
  <q-layout view="hHh Lpr lFf">
    <div class="row bg-black">
      <div class="col">
        <q-page-container>
          <q-page
            style=""
            class="bg-black"
          >
            <div class="row">
               <!-- src="https://storage.googleapis.com/cdn.source.tools/media/f8fc41c6-008e-40f2-b1de-d355f44f71ae.mp4" -->
              <div class="container col full-height text-h2">
                <videoBackground
                  src="https://sourcecentralstorage.blob.core.windows.net/customer-59df521a923dde113ccd5edb/60931193-2cc0-452b-b4f6-fbe3eca6196b.mp4"
                  style=""
                  class="bottomLayer dimmed"
                >
                  <div class="row">
                    <q-header
                      class="text-grey-5 bg-black"
                      height-hint="61.59"
                    >
                      <q-toolbar class="justify-end q-py-sm q-px-md">
                        <div class="">
                          <img
                            contain
                            :ratio="16/9"
                            style="max-width: 5rem;"
                            class="rounded-borders"
                            :src="brandLogo"
                          />
                        </div>
                        <q-space />
                        <div class="">
                          <q-btn-group
                            class="text-no-wrap q-gutter-x-xl"
                            spread
                          >
                            <q-btn label="Home" />
                            <q-btn label="Upcoming Shows" />
                            <q-btn label="News" />
                            <q-btn label="About ACHX" />
                          </q-btn-group>
                        </div>
                        <q-space />
                        <q-btn
                          class="q-mr-lg"
                          dense
                          flat
                          no-wrap
                          @click="$bus.emit('toggleUserProfile')"
                        >
                          <div class="text-capitalize">
                            <q-avatar
                              color="grey-5"
                              class="q-mx-sm"
                              size="28px"
                            ><img :src="user.photo.url"></q-avatar>
                            Login
                          </div>

                          <!--
            <q-icon name="arrow_drop_down" size="16px" />
            <admin-user-menu :user="$app.user" :admin="adminMode" :offline="offlineMode" :currentOrg="0" />
            -->
                        </q-btn>
                      </q-toolbar>
                      <!-- <importDialog v-model="show.import" /> -->
                    </q-header>
                  </div>
                  <div class="row">
                    <div
                      style="position: relative;"
                      class="col"
                    >
                      <q-img
                        style="max-width: 40rem; position: absolute; left: 3%; top: 52vh;"
                        class="self-center"
                        :src="overlayImage"
                      />
                    </div>
                  </div>
                </videoBackground>
                <div class="topLayer">
                  <div class="row">
                    <div class="col-6">
                      <q-card
                        flat
                        class="q-pa-xl text-white transparent"
                      >
                        <div class="row no-wrap flex-center">
                          <div class="col q-ml-sm text-no-wrap text-h2">Mercy Me |</div>
                          <div class="col q-ml-xl text-no-wrap text-subtitle1 text-italic">Live from Sound Kitchen Studios</div>
                        </div>

                      </q-card>
                    </div>
                    <div class="col-6">
                      <div class="row">

                        <div class="col text-h1 text-white">
                          <q-card
                            flat
                            class="q-pa-xl text-white transparent"
                          >
                            <q-card-section class="q-my-xl">
                              <q-space class="q-my-xl" />
                            </q-card-section>
                            <q-card-section class="q-mt-xl">
                              <q-card
                                flat
                                class="transparent"
                              >
                                <q-card-section>
                                  <div class="row">
                                    <div class="col text-h4 text-weight-thin text-grey-2">
                                      Get the full <b class="text-uppercase">concert experience LIVE</b> from your living room
                                    </div>
                                  </div>
                                </q-card-section>
                                <q-card-section>
                                  <div class="row q-mx-xl">
                                    <div class="col">
                                      <q-btn color="red-10 text-capitalize q-px-xl">Buy Tickets</q-btn>
                                    </div>
                                  </div>
                                </q-card-section>

                              </q-card>
                            </q-card-section>
                          </q-card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-page>
        </q-page-container>
      </div>
    </div>

  </q-layout>
</template>

<script>
import videoBackground from 'vue-responsive-video-background-player'

export default {
  components: {
    videoBackground
  },
  data () {
    return {
      photoUrl: "",
      brandLogo: "https://sourcecentralstorage.blob.core.windows.net/customer-59df521a923dde113ccd5edb/34db74ae-9995-4fa2-8417-0a90df99bce5.png",

      overlayImage: "https://sourcecentralstorage.blob.core.windows.net/customer-59df521a923dde113ccd5edb/59b6ee91-7208-4c70-9b50-8180f068ba9a.png",
      user: {
        name: " Zach",
        authenticated: true,
        photo: {
          url: "https://cdn.onlinewebfonts.com/svg/img_266351.png"
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  width: 100vw
  height: 100vh
  position: relative
  margin: 0px
.bottomLayer
  width: 100vw
  height: 100vh
  position: absolute
  top: 0
  left: 0
  opacity: 0.9
.topLayer
  z-index: 9
  margin: 25px; /* for demo purpose  */
</style>