<template>
  <div>
    <DashboardHeader />
    <div class="d-flex w-100 min-vh-100" dir="ltr">
      <div
        class="d-none w-33 min-vh-100 sign-up-image d-lg-flex justify-content-center align-items-center"
      >
        <img
          src="../assets/logo.png"
          width="304"
          height="131"
          class="login-logo"
        />
      </div>
      <div class="w-66 bg-white mt-5">
        <button
          class="d-flex pt-5 ml-4 ml-lg-5 outline-none d-flex align-items-center justify-content-center"
          @click="$router.go(-1)"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8627 3.225L13.3794 1.75L5.1377 10L13.3877 18.25L14.8627 16.775L8.0877 10L14.8627 3.225Z"
              fill="#8692A6"
            />
          </svg>
          <p class="font-weight-lighter ml-3 mb-0">{{ $t("back") }}</p>
        </button>
        <div
          class="w-100 pt-lg-11 px-4 bg-white text-left flex-column d-flex justify-content-center align-items-center"
          dir="auto"
        >
          <img
            class="d-block d-lg-none"
            src="../assets/logoDark.png"
            width="158"
            height="80"
          />
          <div>
            <h1 class="fs-30 ml-23">{{ $t("signUpHeading") }}</h1>
            <p class="font-weight-lighter fs-18 ml-23">
              {{ $t("signUpdummy") }}
            </p>
            <p class="horizontal-line"></p>
            <div>
              <b-form @submit="onSubmit">
                <b-form-group
                  id="input-group-1"
                  :label="`${$t('yourName')}`"
                  label-for="input-1"
                >
                  <input
                    class="form-input outline-none border rounded-lg px-3"
                    id="input-1"
                    v-model="form.name"
                    :placeholder="`${$t('fullName')}`"
                    required
                  />
                </b-form-group>
                <b-form-group
                  id="input-group-2"
                  :label="`${$t('email')}`"
                  label-for="input-2"
                >
                  <input
                    id="input-2"
                    v-model="form.email"
                    type="email"
                    :placeholder="`${$t('enterEmail')}`"
                    required
                    class="form-input outline-none border rounded-lg px-3"
                  />
                </b-form-group>
                <p class="mb-1">{{ $t("phone") }}</p>

                <div class="d-flex w-100">
                  <b-dropdown
                    v-if="this.$i18n.locale == 'ar'"
                    :text="selected"
                    toggle-class="catalog-input outline-none ml-3 bg-transparent select-width border d-flex justify-content-center align-items-center px-4"
                    menu-class="h-select-200"
                  >
                    <b-dropdown-item
                      href="#"
                      v-for="(options, index) in countryCodes"
                      :key="options.value"
                      @click="(e) => itemSelected(e, index)"
                      >{{ options.value + " " + options.text }}</b-dropdown-item
                    >
                  </b-dropdown>
                  <b-dropdown
                    v-else
                    :text="selected"
                    toggle-class="catalog-input outline-none mr-3 bg-transparent select-width border d-flex justify-content-center align-items-center px-4"
                    menu-class="h-select-200"
                  >
                    <b-dropdown-item
                      href="#"
                      v-for="(options, index) in countryCodes"
                      :key="options.value"
                      @click="(e) => itemSelected(e, index)"
                      >{{ options.value + " " + options.text }}</b-dropdown-item
                    >
                  </b-dropdown>
                  <b-form-group id="input-group-3" class="w-100 ml-1">
                    <input
                      id="input-3"
                      v-model="form.number"
                      type="text"
                      :placeholder="`${$t('phonePlaceholder')}`"
                      required
                      class="form-input outline-none border rounded-lg px-3"
                    />
                  </b-form-group>
                </div>
                <b-form-group
                  id="input-group-4"
                  :label="`${$t('createPassword')}`"
                  label-for="input-4"
                >
                  <input
                    id="input-4"
                    v-model="form.password"
                    type="password"
                    :placeholder="`${$t('enterPassword')}`"
                    required
                    class="form-input outline-none border rounded-lg px-3"
                  />
                </b-form-group>
                <b-form-group
                  id="input-group-5"
                  :label="`${$t('confirmPassword')}`"
                  label-for="input-5"
                >
                  <input
                    id="input-5"
                    v-model="form.confirmPassword"
                    type="password"
                    :placeholder="`${$t('enterPassword')}`"
                    required
                    class="form-input outline-none border rounded-lg px-3"
                  />
                </b-form-group>
                <b-form-checkbox
                  class="mb-2 mr-sm-2 mb-sm-0 ml-23 outline-none"
                  required
                >
                  <button v-b-modal.terms-modal class="outline-none">
                    {{ $t("termsAndConditions") }}
                  </button>
                </b-form-checkbox>

                <b-modal id="terms-modal" centered hide-footer no-stacking>
                  <h1>Terms and Conditions</h1>
                  <h4>{{ $t("randomLarge") }}</h4>
                </b-modal>
                <b-button
                  size="lg"
                  class="w-100 border-0 bg-info mt-11 text-white ml-23 py-3 mb-5"
                  type="submit"
                  >{{ $t("registerAccountBtn") }}</b-button
                >
                <div
                  class="d-flex align-items-center text-center separator font-weight-lighter text-black ml-22"
                >
                  {{ $t("or") }}
                </div>

                <router-link to="/login">
                  <button
                    dir="auto"
                    type="button"
                    class="btn w-100 ml-23 btn-white ml-23 text-center shadow-sm form-input mt-5"
                  >
                    {{ $t("signupLoginNow") }}
                  </button>
                </router-link>

                <button
                  type="button"
                  class="btn w-100 btn-white ml-23 d-flex align-items-center justify-content-between shadow-sm form-input mt-3"
                >
                  <svg
                    width="34"
                    height="32"
                    viewBox="0 0 34 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.8913 13.3885H29.7502V13.3332H17.0002V18.6665H25.0065C23.8384 21.7712 20.6998 23.9998 17.0002 23.9998C12.306 23.9998 8.50016 20.4178 8.50016 15.9998C8.50016 11.5818 12.306 7.99984 17.0002 7.99984C19.167 7.99984 21.1382 8.76917 22.6392 10.0258L26.6462 6.2545C24.1161 4.03517 20.7317 2.6665 17.0002 2.6665C9.17662 2.6665 2.8335 8.6365 2.8335 15.9998C2.8335 23.3632 9.17662 29.3332 17.0002 29.3332C24.8237 29.3332 31.1668 23.3632 31.1668 15.9998C31.1668 15.1058 31.0691 14.2332 30.8913 13.3885Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M4.4668 9.79384L9.12125 13.0065C10.3807 10.0718 13.4308 7.99984 17 7.99984C19.1668 7.99984 21.1381 8.76917 22.6391 10.0258L26.6461 6.2545C24.116 4.03517 20.7315 2.6665 17 2.6665C11.5586 2.6665 6.83971 5.55784 4.4668 9.79384Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M17.0001 29.3333C20.6593 29.3333 23.9842 28.0153 26.4981 25.872L22.1135 22.38C20.6434 23.4322 18.847 24.0013 17.0001 24C13.3153 24 10.1866 21.7886 9.00793 18.7026L4.38818 22.0526C6.73277 26.3706 11.4942 29.3333 17.0001 29.3333Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M30.8911 13.3888H29.75V13.3335H17V18.6668H25.0063C24.4476 20.1444 23.4411 21.4356 22.1113 22.3808L22.1135 22.3795L26.498 25.8715C26.1878 26.1368 31.1667 22.6668 31.1667 16.0002C31.1667 15.1062 31.0689 14.2335 30.8911 13.3888Z"
                      fill="#1976D2"
                    />
                  </svg>
                  <span class="flex-grow-1">{{
                    $t("registerWithGoogle")
                  }}</span>
                </button>
                <button
                  type="button"
                  class="btn w-100 btn-white d-flex ml-23 align-items-center justify-content-between shadow-sm form-input mt-3 mb-5"
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="15" cy="15" r="15" fill="url(#paint0_linear)" />
                    <path
                      d="M18.6289 15.625L19.0117 13.1094H16.5781V11.4688C16.5781 10.7578 16.9062 10.1016 18 10.1016H19.1211V7.94141C19.1211 7.94141 18.1094 7.75 17.1523 7.75C15.1562 7.75 13.8438 8.98047 13.8438 11.168V13.1094H11.6016V15.625H13.8438V21.75H16.5781V15.625H18.6289Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-0.000188651"
                        y1="0"
                        x2="-0.000188651"
                        y2="30.0004"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#00B2FF" />
                        <stop offset="1" stop-color="#006AFF" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span class="flex-grow-1"
                    >{{ $t("registerWithFacebook") }}
                  </span>
                </button>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardHeader from "../components/dashboardHeader";
export default {
  name: "SignUp",
  data() {
    return {
      form: {
        email: "",
        name: "",
        number: "",
        password: "",
        confirmPassword: "",
      },
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
  components: {
    DashboardHeader,
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$router.push({ path: "success" });
    },
    itemSelected(e, index) {
      this.selected = this.countryCodes[index].value;
    },
    displayCountryCode() {
      var countrycode = document.getElementById("countrycode");
      countrycode.options[countrycode.selectedIndex].text =
        "+" + countrycode.value;
    },
  },
};
</script>