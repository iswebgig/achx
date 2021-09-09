<template>
    <div class="row">
        <div class="col">
            <q-card flat class="q-mx-lg q-px-lg">
                <div class="text-center">
                  <q-icon color="primary" size="4rem"  name="local_activity"></q-icon>
                  <div class="text-h5 text-primary q-mt-xs">Tickets</div> 
                </div>
            </q-card>
        <q-card flat class="">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey q-mt-md"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="public" label="Public" />
          <q-tab name="vip" label="VIP" />
          <q-tab name="qa" label="QA" />
        </q-tabs>


        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="vip">
         
            tab 1
          </q-tab-panel>

          <q-tab-panel name="public">
         
            tab 2
          </q-tab-panel>

          <q-tab-panel name="qa">
          
            tab 3
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
        </div>
    </div>    
</template>

<script>


export default {
    components: {  },
    data () {
        return {
            tab: 'public'
        }
    }
}
</script>

<style scoped>

</style>