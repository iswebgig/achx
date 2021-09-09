<template>
<!-- virutal lobby / chat room --> 
  <!-- TODO: Set the css values for primary, secondary, etc so the user can setup the SAM in the beginning and everything moves downstream -->
    <div class="row">
      <div class="col justify-start">
        <q-card class="bg-grey-4 text-white" style="">
          <q-card-section>
            <div class="row q-ma-md justify-center items-center">
              <div class="col-12 text-center">
                <q-icon color="green-8" size="30px" name="lock" />
              </div>
              <div class="col-12 text-grey-8 text-center text-no-wrap text-h6">
                {{ donateCallToActionText }}
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <!-- TODO: Set the state to properly adjust based on selection -->
            <!-- TODO: Make sure that the selection fo weekly, monthly is a variable on the admnin for the church to designate what they would like -->
            <q-btn-toggle
              v-model="model"
              spread
              no-caps
              toggle-color="primary"
              color="white"
              class="q-mx-lg"
              text-color="black"
              :options="[
                { label: 'Give Once', value: 'one' },
                { label: 'Monthly', value: 'two' }
              ]"
            />
          </q-card-section>

<!-- TODO: Tighten the grid sectino to be identical to https://partnershipforthehomeless.org/?form=Covid --> 
          <q-card-section class="q-ma-none q-pa-none">
            <div class="row justify-center q-pa-md q-gutter-sm">
              <q-btn
                class="col-3"
                :text-color="donateAmountTextColor"
                :color="donateAmountColor"
                :label="valueOne"
              />
              <q-btn
                class="col-3"
                :text-color="donateAmountTextColor"
                :color="donateAmountColor"
                :label="valueTwo"
              />
              <q-btn
                class="col-3"
                :text-color="donateAmountTextColor"
                :color="donateAmountColor"
                
                :label="valueThree"
              />
              <q-btn
                class="col-3"
                :text-color="donateAmountTextColor"
                :color="donateAmountColor"
                :label="valueFour"
              />
              <q-btn
                class="col-3"
                :text-color="donateAmountTextColor"
                :color="donateAmountColor"
                :label="valueFive"
              />
              <q-btn
                class="col-3"
                :text-color="donateAmountTextColor"
                :color="donateAmountColor"
                :label="valueSix"
              />
            </div>
            <div class="row justify-center q-mb-md">
              <div class="col-10">
                <q-input outlined v-model="text" :label="amount">
                  <template v-slot:prepend>
                    <q-icon name="money_off" color="grey-8" />
                  </template>
                </q-input>
              </div>
            </div>
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
        <!-- TODO: Add the donate button. Make sure it has a variable that allows for donate or give to be selcted as the label text. --> 
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      model: "one",
      valueOne: "$5",
      valueTwo: "$10",
      valueThree: "$35",
      valueFour: "$55",
      valueFive: "$130",
      valueSix: "$250",
      donateAmountColor: "grey-3",
      donateAmountTextColor: "grey-9",
      donateCallToActionText: "Secure Donation"
    };
  }
};
</script>
