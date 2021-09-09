<template>
  <div class="">
    <template v-if="!experience.user.isLoggedIn">
      <div class="row">
        <div class="col">
          <eventPromotionAccess />
        </div>
      </div>
    </template>
    <template v-else>
      <q-layout view="hHh Lpr fFf">
        <div class="row">
          <div class="col">
            <!-- <admin-header /> -->
            <header v-if="experience.config.headerState = 'true'" class="q-mb-xl">
              <adminHeader v-model="leftDrawerOpen" />
            </header>

            <div class="row no-wrap bg-black">
              <div class="gt-sm row justify-around">
                <q-page-container class="q-px-md">
                  <q-page class="no-margin no-padding bg-black text-black">
                    <router-view></router-view>
                  </q-page>
                </q-page-container>
                <div class="col">
                  <div class="row no-wrap q-mt-sm">
                    <div class="col">
                      <mainVideo />
                      <audienceLiveVideo />
                    </div>
                  </div>
                </div>
              </div>
              <div class="lt-md column reverse ">
                <q-page-container class="q-px-md">
                  <q-page class="no-margin no-padding bg-black text-black">
                    <router-view></router-view>
                  </q-page>
                </q-page-container>
                <div class="col">
                  <div class="row no-wrap q-mt-xs">
                    <div class="col">
                      <mainVideo />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-layout>
    </template>
  </div>
</template>

<script>
// import AdminHeader from 'layouts/header.vue'
import AdminHeader from "layouts/header.vue";
import mainVideo from "../components/watchAndShopVideo/watchAndShopVideo";
import audienceLiveVideo from "../components/videoChat/audienceVideoDisplay";
import eventPromotionAccess from "../components/eventPromotionAccess/eventPromotionAccess";

export default {
  components: {
    AdminHeader,
    mainVideo,
    audienceLiveVideo,
    eventPromotionAccess
  },
  methods: {
   
  },
  computed: {
    experience() {
      return this.$store.state.experience;
    }
  },
  data() {
    return {
      error: "",
      user: {
        name: " Zach",
        authenticated: true,
        photo: {
          url: "https://cdn.onlinewebfonts.com/svg/img_266351.png"
        }
      }
    };
  }
};
</script>
