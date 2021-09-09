<template>
  <div style="border-radius: 10px;" class="q-px-sm transparent row justify-center">
    <div style="width: 100%;">
      <q-chat-message
        class="text-white"
        name="Brad"
        stamp="8 minutes ago"
        :text="['Hello Everyone!!!']"
        text-color="white"
        bg-color="green-7"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--received"
            src="https://cdn.quasar.dev/img/avatar1.jpg"
          >
        </template>
      </q-chat-message>
      <q-chat-message
        class="text-white"
        name="me"
        stamp="7 minutes ago"
        :text="['Have you seen Mercy Me before?']"
        sent
        text-color="white"
        bg-color="primary"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--sent"
            src="https://cdn.quasar.dev/img/avatar4.jpg"
          >
        </template>
      </q-chat-message>

      <q-chat-message
      class="text-white"
        name="Shadleigh"
        :text="['Only 5 times... They are my favorite on AHCX!!']"
        bg-color="amber"
      >
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--received"
            src="https://cdn.quasar.dev/img/avatar2.jpg"
          >
        </template>

        <q-spinner-dots size="2rem" />
      </q-chat-message>
    </div>
    <q-space />
    <div class="full-width q-mt-xl q-pt-md">
      <q-separator />
      <div class="row no-wrap justify-around">
        <q-input class="col-10 q-mt-md text-black" bg-color="white" dense rounded outlined v-model="text" label="type your message" />
        <q-btn dark rounded class="q-mt-md q-mx-sm text-grey-4" color="primary" label="send" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        text: ''
      }
    }
}
</script>