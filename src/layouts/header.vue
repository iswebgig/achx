<template>
  <q-header
  v-show="experience.config.headerState = 'true'"
    class="text-grey-8 "
    reveal
  >
    <q-toolbar class="justify-end bg-white q-pa-none">
      <q-card
          flat
          class="col justify-center q-mx-lg q-py-none"
        >
          <img
            contain
            :ratio="16/9"
            style="max-width: 8rem;"
            class="rounded-borders"
            :src="brandLogo"
          />

        </q-card>
     

        <q-btn
        flat
          class="text-capitalize"
          name="tab1"
          to="/chat"
          label="Chat"
        />
                <q-btn
                flat
          class="text-capitalize"
          name="tab1"
          to="/merchandise"
          label="Merchandise"
        />
                <q-btn
                flat
          class="text-capitalize"
          name="tab1"
          to="/artist"
          label="Artists"
        />
                <q-btn
                flat
          class="text-capitalize"
          name="tab1"
          to="/donations"
          label="Donations"
        />
                <q-btn
                flat
          class="text-capitalize"
          name="tab1"
          label="Upcoming Shows"
        />
     
    </q-toolbar>
    
  </q-header>
</template>

<script>

export default {
  name: 'adminHeader',

  components: {

  },
  computed: {
    experience() {
      return this.$store.state.experience;
    }
  },
  data () {
    return {
      photoUrl: "",
      brandLogo: "https://149433751.v2.pressablecdn.com/wp-content/uploads/2020/06/cropped-ahcx_RetroLogo_FNLWhite-768x370.png", 
      user: {
        name: " Zach",
        authenticated: true,
        photo: {
          url: "https://cdn.quasar.dev/img/boy-avatar.png"
        }
      }
    }
  }
}

</script>

<style lang="sass">

</style>