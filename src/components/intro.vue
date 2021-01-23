<template>
  <div>
    <div
      class="mt-5 pt-5 text-center text-wrap text-light d-flex justify-content-center align-items-center flex-column"
    >
      <h1 class="font-weight-bold fs-5 w-60">
        {{ $t("randomSmall") }}
      </h1>
      <h4 class="font-weight-normal pt-4 w-60 fs-20 text-center">
        {{ $t("randomLarge") }}
      </h4>
      <div
        class="d-flex justify-content-between mt-5 align-items-center flex-column flex-sm-row"
      >
        <router-link to="/dashboard/order-form">
          <b-button
            class="p-3 btn-width-160 mx-3"
            squared
            variant="secondary"
            >{{ $t("tryForFree") }}</b-button
          >
        </router-link>
        <b-modal
          id="catalogs-modal"
          centered
          :title="`${$t('downloadYourCatalog')}`"
          hide-footer
          header-class="border-0"
        >
          <div
            class="d-flex flex-column w-100 justify-content-center align-items-center p-3"
            dir="auto"
          >
            <div class="w-100 d-flex">
              <p class="text-red mb-0 fs-24">*</p>
              <input
                id="input-700"
                type="text"
                :placeholder="`${$t('yourName')}`"
                class="catalog-input form-input outline-none border rounded-lg px-3"
              />
            </div>
            <div class="w-100 d-flex">
              <p class="text-red mb-0 fs-24 mt-3">*</p>
              <input
                id="input-800"
                type="text"
                :placeholder="`${$t('companyName')}`"
                class="catalog-input form-input outline-none border rounded-lg px-3 mt-3"
              />
            </div>
            <div class="w-100 d-flex">
              <p class="text-red mb-0 fs-24 mt-3">*</p>
              <input
                id="input-900"
                type="text"
                :placeholder="`${$t('catalogEmail')}`"
                class="catalog-input form-input outline-none border rounded-lg px-3 mt-3"
              />
            </div>
            <div class="w-100 d-flex">
              <p class="text-red mb-0 fs-24 mt-3">*</p>
              <div
                class="w-100 d-flex justify-content-between align-items-center"
              >
                <b-dropdown
                  :text="selected"
                   v-if="this.$i18n.locale == 'ar'"
                  toggle-class="catalog-input outline-none ml-3 select-width border mt-3 d-flex justify-content-center align-items-center px-4"
                  menu-class="h-select-200"
                >
                  <b-dropdown-item
                    href="#"
                    v-for="(options, index) in countryCodes"
                    :key="options.value"
                    @click="(e) => itemSelected(e, index)"
                    >{{  options.value + " " +  options.text }}</b-dropdown-item
                  >
                </b-dropdown>
                 <b-dropdown
                  :text="selected"
                   v-else
                  toggle-class="catalog-input outline-none mr-3 select-width border mt-3 d-flex justify-content-center align-items-center px-4"
                  menu-class="h-select-200"
                >
                  <b-dropdown-item
                    href="#"
                    v-for="(options, index) in countryCodes"
                    :key="options.value"
                    @click="(e) => itemSelected(e, index)"
                    >{{  options.value + " " +  options.text }}</b-dropdown-item
                  >
                </b-dropdown>
                <input
                  id="input-7"
                  type="text"
                  :placeholder="`${$t('catalogPhone')}`"
                  class="catalog-input form-input input-width outline-none border rounded-lg px-3 mt-3"
                  style="width: 73% !important"
                />
              </div>
            </div>
            <div class="w-90 d-flex">
              <b-form-checkbox class="mt-4" required>{{
                $t("termsAndConditions")
              }}</b-form-checkbox>
            </div>
            <button
              class="text-white btn w-100 catalog-btn outline-none mt-4"
              @click="$bvModal.hide('catalogs-modal')"
            >
              {{ $t("catalogDownloadBtn") }}
            </button>
          </div>
        </b-modal>
        <b-button
          v-b-modal.catalogs-modal
          class="p-3 btn-width-160 mt-3 mt-sm-0"
          squared
          variant="outline-light"
          >{{ $t("catalogs") }}</b-button
        >
      </div>
    </div>
    <div class="mt-5">
      <img src="../assets/introImage.png" class="img-fluid w-100 introImage" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Intro",
  data() {
    return {
      countryCodes: [
        { value: "+986", text: this.$t("ksa") },
        { value: "+971", text: this.$t("uae") },
        { value: "+974", text: this.$t("qatar") },
        { value: "+973", text: this.$t("bahrain") },
        { value: "+978", text: this.$t("oman") },
        { value: "+961", text: this.$t("lebanon") },
        { value: "+962", text: this.$t("jordan") },
        { value: "+963", text: this.$t("egypt") },
        { value: "+376", text: this.$t("germany") },
        { value: "+004", text: this.$t("Afghanistan") },
        { value: "+007", text: this.$t("Albania") },
        { value: "+012", text: this.$t("Algeria") },
        { value: "+016", text: this.$t("AmericanSamoa") },
        { value: "+020", text: this.$t("Andorra") },
        { value: "+024", text: this.$t("Angola") },
        { value: "+660", text: this.$t("Anguilla") },
        { value: "+010", text: this.$t("Antarctica") },
        { value: "+028", text: this.$t("AntiguaBarbuda") },
        { value: "+032", text: this.$t("Argentina") },
        { value: "+051", text: this.$t("Armenia") },
        { value: "+533", text: this.$t("Aruba") },
        { value: "+036", text: this.$t("Australia") },
        { value: "+040", text: this.$t("Austria") },
        { value: "+031", text: this.$t("Azerbaijan") },
        { value: "+044", text: this.$t("Bahamas") },
        { value: "+048", text: this.$t("Bahrain") },
        { value: "+050", text: this.$t("Bangladesh") },
        { value: "+052", text: this.$t("Barbados") },
        { value: "+112", text: this.$t("Belarus") },
        { value: "+056", text: this.$t("Belgium") },
        { value: "+084", text: this.$t("Belize") },
        { value: "+204", text: this.$t("Benin") },
        { value: "+060", text: this.$t("Bermuda") },
        { value: "+064", text: this.$t("Bhutan") },
        { value: "+068", text: this.$t("Bolivia") },
        { value: "+535", text: this.$t("Bonaire") },
        { value: "+070", text: this.$t("Bosnia") },
        { value: "+072", text: this.$t("Botswana") },
        { value: "+074", text: this.$t("Bouvet") },
        { value: "+076", text: this.$t("Brazil") },
        { value: "+086", text: this.$t("BritishIndian") },
        { value: "+096", text: this.$t("Brunei") },
        { value: "+100", text: this.$t("Bulgaria") },
        { value: "+854", text: this.$t("Burkina") },
        { value: "+108", text: this.$t("Burundi") },
        { value: "+132", text: this.$t("Burundi") },
        { value: "+116", text: this.$t("Cambodia") },
        { value: "+120", text: this.$t("Cameroon") },
        { value: "+124", text: this.$t("Canada") },
        { value: "+136", text: this.$t("Cayman") },
        { value: "+140", text: this.$t("Africa") },
        { value: "+148", text: this.$t("Chad") },
        { value: "+152", text: this.$t("Chile") },
        { value: "+156", text: this.$t("China") },
        { value: "+162", text: this.$t("Christmas") },
        { value: "+166", text: this.$t("Cocos") },
        { value: "+170", text: this.$t("Colombia") },
        { value: "+174", text: this.$t("Comoros") },
        { value: "+180", text: this.$t("Congo") },
        { value: "+178", text: this.$t("CongoThe") },
        { value: "+184", text: this.$t("Cook") },
        { value: "+188", text: this.$t("Costa") },
        { value: "+191", text: this.$t("Croatia") },
        { value: "+192", text: this.$t("Cuba") },
        { value: "+531", text: this.$t("Curaçao") },
        { value: "+196", text: this.$t("Cyprus") },
        { value: "+203", text: this.$t("Czechia") },
        { value: "+384", text: this.$t("Côte") },
        { value: "+208", text: this.$t("CôteDE") },
        { value: "+262", text: this.$t("Djibouti") },
        { value: "+212", text: this.$t("Dominica") },
        { value: "+214", text: this.$t("Dominican") },
        { value: "+818", text: this.$t("Egypt") },
        { value: "+222", text: this.$t("Salvador") },
        { value: "+226", text: this.$t("Equatorial") },
        { value: "+232", text: this.$t("Eritrea") },
        { value: "+233", text: this.$t("Estonia") },
        { value: "+748", text: this.$t("Eswatini") },
        { value: "+231", text: this.$t("Ethiopia") },
        { value: "+238", text: this.$t("Falkland") },
        { value: "+234", text: this.$t("Faroe") },
        { value: "+242", text: this.$t("Fiji") },
       
        
      ],
      selected: "+986",
    };
  },
  methods: {
    itemSelected(e, index) {
      this.selected = this.countryCodes[index].value;
    },
  },
};
</script>
<style scoped>
.text-red {
  color: red !important;
}
</style>