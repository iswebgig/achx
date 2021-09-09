<template>
    <q-card
     flat
      style="border-radius: 30px"
      class="q-mt-md bg-black q-ml-sm"
    >
            <q-btn
        class=""
        dense
        flat
        no-wrap
        @click="$bus.emit('toggleUserProfile')"
      >
        <div class="text-capitalize">
          <q-avatar size="35px"><img :src="user.photo.url"></q-avatar>
          Hello {{user.name}}
        </div>

        <!--
            <q-icon name="arrow_drop_down" size="16px" />
            <admin-user-menu :user="$app.user" :admin="adminMode" :offline="offlineMode" :currentOrg="0" />
            -->
      </q-btn>
    </q-card>

</template>

<script>
export default {
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