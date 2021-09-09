<template>
    <div style="max-width: 400px;" class="row">
        <div class="col">
            <q-card flat class="q-mx-sm bg-black q-px-sm">
                <div class="row no-wrap justify-center q-pt-md">
                  <q-icon color="primary" size="xl"  name="chat"></q-icon>
                  <div class="text-h5 text-grey-4 q-ml-md q-mt-xs">Chat</div> 
                </div>
            </q-card>
        <q-card style="border-radius: 10px;" flat class="bg-black">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey bg-black q-mt-md"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="public" label="Public" />
          <q-tab name="vip" label="VIP" />
          <q-tab name="qa" label="QA" />
        </q-tabs>


        <q-tab-panels style="border-radius: 10px;" class="transparent" v-model="tab" animated>
          <q-tab-panel style="border-radius: 10px;" class="transparent q-mt-md" name="vip">
            <chatVIP />
          </q-tab-panel>

          <q-tab-panel style="border-radius: 10px;" class="transparent q-mt-md" name="public">       
            <chatPublic />
          </q-tab-panel>

          <q-tab-panel style="border-radius: 10px;" class="transparent q-mt-md" name="qa"> 
            <chatQA />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
        </div>
    </div>    
</template>

<script>
import chatVIP from './chat'
import chatPublic from './chat'
import chatQA from './chat'

export default {
    components: { chatVIP, chatPublic, chatQA },
    data () {
        return {
            tab: 'public'
        }
    }
}
</script>

<style scoped>

</style>