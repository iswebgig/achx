<template>
  <q-drawer
    v-model="show"
    show-if-above
    :mini="miniState"
    @mouseover="miniState = false"
    @mouseout="miniState = true"
    :width="250"
    :breakpoint="500"
    content-class="bg-black"
  >
  <div class="col">

    <q-space class="q-my-xl" />
    <q-card
      bordered
      style="border-radius: 30px"
      class="q-mt-md bg-black q-ml-sm"
    >

      <div class="row q-mt-md gt-xs">
        <q-card
          flat
          class="col justify-center q-mx-lg"
        >
          <img
            contain
            :ratio="16/9"
            style="max-width: 15rem;"
            class="rounded-borders"
            :src="brandLogo"
          />

        </q-card>
      </div>

      <!-- The menu -->
      <div class="q-mt-md">
          <div v-if="miniState !== false" class="">
            <q-avatar class="bg-blue q-ma-xs" size="40px">
                <img src="https://149433751.v2.pressablecdn.com/wp-content/uploads/2020/06/cropped-ahcx_RetroLogo_FNLWhite-375x181.png" />
            </q-avatar>
          </div>
     
        <q-list
          padding
          class="text-grey-8 text-capitalize"
        >
        <q-item
            to="/chat"
            exact
            active-class="my-menu-link"
            style="border-radius: 10px"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="chat" />
            </q-item-section>

            <q-item-section>
              Chat
            </q-item-section>
          </q-item>
          <q-item
            to="/merchandise"
            name="sourceSync"
            label="platform"
            active-class="my-menu-link"
            style="border-radius: 10px"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="shopping_cart" />
            </q-item-section>

            <q-item-section>
              Merchandise
            </q-item-section>
          </q-item>
          <q-item
            to="/artist"
            name="domains"
            label="domains"
            active-class="my-menu-link"
            style="border-radius: 10px"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="album" />
            </q-item-section>

            <q-item-section>
              Artists
            </q-item-section>
          </q-item>
          <q-item
            to="/donations"
            name="organizations"
            label="organizations"
            active-class="my-menu-link"
            style="border-radius: 10px"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="payments" />
            </q-item-section>

            <q-item-section>
              Donations
            </q-item-section>
          </q-item>
          <q-item
          class="q-mb-md"
            to="/tickets"
            name="organizations"
            label="organizations"
            active-class="my-menu-link"
            style="border-radius: 10px"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="local_activity" />
            </q-item-section>

            <q-item-section>
              Upcoming Shows
            </q-item-section>
          </q-item>


        </q-list>
   
      </div>


    </q-card>
    </div>
  </q-drawer>

</template>

<script>

// import uploadable from 'components/admin/common/uploadable'
export default {
  components: {
    // uploadable
  },
  events: {
    toggleAdminDrawer () {
      this.show = !this.show
    }
  },
  methods: {

  },
  computed: {

  },
  data () {
    return {
        show: true,
      drawer: false,
      miniState: true,
      brandLogo: "https://149433751.v2.pressablecdn.com/wp-content/uploads/2020/06/cropped-ahcx_RetroLogo_FNLWhite-768x370.png", 
       user: {
        name: " Zach",
        authenticated: false,
        photo: {
          url: "https://cdn.quasar.dev/img/boy-avatar.png"
        }
      }
    }
  }
}
</script>

<style lang="sass">
.my-menu-link
  color: white
  background: rgb(88,149,241)
</style>