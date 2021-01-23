<template>
  <div class="px-2">
    <DashboardTop
      :Heading="$t('accountHeading')"
      :Text="$t('accountDescription')"
    />

    <div class="d-flex justify-content-start mt-5 px-4 px-lg-11" dir="auto">
      <div
        class="w-100 d-flex justify-content-start align-items-start flex-column"
      >
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <label class="file-select">
            <div class="select-button d-flex flex-column">
              <img
                src="../assets/Group 198accountImage.png"
                width="100"
                height="100"
                class="bg-secondary rounded-circle"
                id="profileimage"
              />

              <span class="mt-3 fs-16 font-weight-lighter outline-none">
                {{ $t("setNewPhoto") }}
              </span>
            </div>
            <input type="file" @change="handleFileChange" />
          </label>
        </div>
        <div class="w-100 fs-18 text-69">
          <b-modal
            id="name-modal"
            centered
            hide-footer
            content-class="content-class"
            header-class="header-class"
            hide-header
            hide-header-close
          >
            <div
              class="d-flex w-100 justify-content-center align-items-center pt-5 pb-4"
            >
              <input
                class="border-bottom outline-none w-100 pb-4"
                :placeholder="`${$t('fullName')}`"
                v-model="name"
              />
            </div>
            <div class="d-flex justify-content-end">
              <button
                class="rounded-pill modal-button color-c7 outline-none"
                @click="$bvModal.hide('name-modal')"
              >
                {{ $t("companyCancel") }}
              </button>
              <button
                class="rounded-pill color-ff modal-button outline-none ml-2"
                @click="$bvModal.hide('name-modal')"
              >
                {{ $t("companySave") }}
              </button>
            </div>
          </b-modal>

          <div
            class="border-bottom border-danger d-flex justify-content-between align-items-center pb-4 mx-1 mt-5"
          >
            <p class="mb-0">{{ $t("accountName") }} {{ name }}</p>
            <button class="outline-none" v-b-modal.name-modal>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                  stroke="#696F79"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
                  stroke="#696F79"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            class="border-bottom border-danger d-flex justify-content-between align-items-center pb-4 mx-1 mt-5"
          >
            <b-modal
              id="email-modal"
              centered
              hide-footer
              content-class="content-class"
              header-class="header-class"
              hide-header
              hide-header-close
            >
              <div
                class="d-flex w-100 justify-content-center align-items-center pt-5 pb-4"
              >
                <input
                  class="border-bottom outline-none w-100 pb-4"
                  :placeholder="`${$t('enterEmail')}`"
                  v-model="email"
                />
              </div>
              <div class="d-flex justify-content-end">
                <button
                  class="rounded-pill modal-button color-c7 outline-none"
                  @click="$bvModal.hide('email-modal')"
                >
                  {{ $t("companyCancel") }}
                </button>
                <button
                  class="rounded-pill color-ff modal-button outline-none ml-2"
                  @click="$bvModal.hide('email-modal')"
                >
                  {{ $t("companySave") }}
                </button>
              </div>
            </b-modal>
            <p class="mb-0">{{ $t("accountEmail") }} {{ email }}</p>
            <button class="outline-none" v-b-modal.email-modal>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                  stroke="#696F79"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
                  stroke="#696F79"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            class="border-bottom border-danger d-flex justify-content-between align-items-center pb-4 mx-1 mt-5"
          >
            <b-modal
              id="phone-modal"
              centered
              hide-footer
              content-class="content-class"
              header-class="header-class"
              hide-header
              hide-header-close
            >
              <div
                class="d-flex w-100 justify-content-center align-items-center border-bottom pt-5 mb-4"
              >
              <b-dropdown
                  :text="selectedCode"
                  toggle-class=" border-bottom border-0 outline-none w-100  bg-transparent"
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
                <input
                  class="outline-none w-100"
                  :placeholder="`${$t('phonePlaceholder')}`"
                  v-model="phone"
                />
              </div>
              <div class="d-flex justify-content-end">
                <button
                  class="rounded-pill modal-button color-c7 outline-none"
                  @click="$bvModal.hide('phone-modal')"
                >
                  {{ $t("companyCancel") }}
                </button>
                <button
                  class="rounded-pill color-ff modal-button outline-none ml-2"
                  @click="$bvModal.hide('phone-modal')"
                >
                  {{ $t("companySave") }}
                </button>
              </div>
            </b-modal>
            <p class="mb-0">{{ $t("accountPhone") }}  {{ selectedCode+ " " +  phone }}</p>
            <button class="outline-none" v-b-modal.phone-modal>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                  stroke="#696F79"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
                  stroke="#696F79"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            class="border-bottom border-danger d-flex justify-content-between align-items-center pb-4 mx-1 my-5"
          >
            <b-modal
              id="password-modal"
              centered
              hide-footer
              content-class="content-class"
              header-class="header-class"
              hide-header
              hide-header-close
            >
              <div
                class="d-flex w-100 justify-content-center align-items-center py-4"
              >
                <input
                  class="border-bottom outline-none w-100 pb-4"
                  :placeholder="`${$t('oldPassword')}`"
                  v-modal="password"
                />
              </div>
              <div
                class="d-flex w-100 justify-content-center align-items-center py-4"
              >
                <input
                  class="border-bottom outline-none w-100 pb-4"
                  :placeholder="`${$t('newPassword')}`"
                />
              </div>
              <div
                class="d-flex w-100 justify-content-center align-items-center py-4"
              >
                <input
                  class="border-bottom outline-none w-100 pb-4"
                  :placeholder="`${$t('confirmNewPassword')}`"
                />
              </div>
              <div class="d-flex justify-content-end">
                <button
                  class="rounded-pill modal-button color-c7 outline-none"
                  @click="$bvModal.hide('password-modal')"
                >
                  {{ $t("companyCancel") }}
                </button>
                <button
                  class="rounded-pill color-ff modal-button outline-none ml-2"
                  @click="$bvModal.hide('password-modal')"
                >
                  {{ $t("companySave") }}
                </button>
              </div>
            </b-modal>

            <p class="mb-0">{{ $t("accountPassword") }} *****************</p>
            <button class="outline-none" v-b-modal.password-modal>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                  stroke="#696F79"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
                  stroke="#696F79"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="account-card my-5 px-lg-5 py-lg-4 p-3 py-lg-0 d-flex flex-column justify-content-around"
        >
          <p class="mb-0 fs-24 font-weight-bold">{{ $t("addCompanyInfo") }}</p>
          <div class="d-flex justify-content-between">
            <svg
              width="66"
              height="72"
              viewBox="0 0 66 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64.2321 67.5H61.2857V3.375C61.2857 1.51102 59.7027 0 57.75 0H8.25C6.29725 0 4.71429 1.51102 4.71429 3.375V67.5H1.76786C0.791558 67.5 0 68.2556 0 69.1875V72H66V69.1875C66 68.2556 65.2084 67.5 64.2321 67.5ZM18.8571 10.6875C18.8571 9.75558 19.6487 9 20.625 9H26.5179C27.4942 9 28.2857 9.75558 28.2857 10.6875V16.3125C28.2857 17.2444 27.4942 18 26.5179 18H20.625C19.6487 18 18.8571 17.2444 18.8571 16.3125V10.6875ZM18.8571 24.1875C18.8571 23.2556 19.6487 22.5 20.625 22.5H26.5179C27.4942 22.5 28.2857 23.2556 28.2857 24.1875V29.8125C28.2857 30.7444 27.4942 31.5 26.5179 31.5H20.625C19.6487 31.5 18.8571 30.7444 18.8571 29.8125V24.1875ZM26.5179 45H20.625C19.6487 45 18.8571 44.2444 18.8571 43.3125V37.6875C18.8571 36.7556 19.6487 36 20.625 36H26.5179C27.4942 36 28.2857 36.7556 28.2857 37.6875V43.3125C28.2857 44.2444 27.4942 45 26.5179 45ZM37.7143 67.5H28.2857V55.6875C28.2857 54.7556 29.0773 54 30.0536 54H35.9464C36.9227 54 37.7143 54.7556 37.7143 55.6875V67.5ZM47.1429 43.3125C47.1429 44.2444 46.3513 45 45.375 45H39.4821C38.5058 45 37.7143 44.2444 37.7143 43.3125V37.6875C37.7143 36.7556 38.5058 36 39.4821 36H45.375C46.3513 36 47.1429 36.7556 47.1429 37.6875V43.3125ZM47.1429 29.8125C47.1429 30.7444 46.3513 31.5 45.375 31.5H39.4821C38.5058 31.5 37.7143 30.7444 37.7143 29.8125V24.1875C37.7143 23.2556 38.5058 22.5 39.4821 22.5H45.375C46.3513 22.5 47.1429 23.2556 47.1429 24.1875V29.8125ZM47.1429 16.3125C47.1429 17.2444 46.3513 18 45.375 18H39.4821C38.5058 18 37.7143 17.2444 37.7143 16.3125V10.6875C37.7143 9.75558 38.5058 9 39.4821 9H45.375C46.3513 9 47.1429 9.75558 47.1429 10.6875V16.3125Z"
                fill="#197BBD"
                fill-opacity="0.55"
              />
            </svg>
            <b-modal
              id="modal-company"
              centered
              hide-footer
              content-class="content-class"
              header-class="header-class"
              hide-header
              hide-header-close
            >
              <div
                class="d-flex w-100 justify-content-center align-items-center pt-5 pb-4"
              >
                <input
                  class="border-bottom outline-none w-100 pb-4"
                  :placeholder="`${$t('companyName')}`"
                />
              </div>
              <div
                class="d-flex w-100 justify-content-center align-items-center py-4"
              >
                <input
                  class="border-bottom outline-none w-100 pb-4"
                  :placeholder="`${$t('companyAddress')}`"
                />
              </div>
              <div
                class="d-flex w-100 justify-content-center align-items-center py-4"
              >
                <input
                  class="border-bottom outline-none w-100 pb-4"
                  :placeholder="`${$t('companyPhone')}`"
                />
              </div>
              <div
                class="d-flex w-100 justify-content-center align-items-center py-4"
              >
                <input
                  class="border-bottom outline-none w-100 pb-4"
                  :placeholder="`${$t('companyPersonIncharge')}`"
                />
              </div>
              <div
                class="d-flex w-100 justify-content-center align-items-center py-4"
              >
                <input
                  class="border-bottom outline-none w-100 pb-4"
                  :placeholder="`${$t('companyCountry')}`"
                />
              </div>
              <div class="d-flex justify-content-end">
                <button
                  class="rounded-pill modal-button color-c7 outline-none"
                  @click="$bvModal.hide('modal-company')"
                >
                  {{ $t("companyCancel") }}
                </button>
                <button
                  class="rounded-pill color-ff modal-button outline-none ml-2"
                  @click="$bvModal.hide('modal-company')"
                >
                  {{ $t("companySave") }}
                </button>
              </div>
            </b-modal>
            <button
              class="outline-none"
              variant="white"
              v-b-modal.modal-company
            >
              <svg
                width="58"
                height="60"
                viewBox="0 0 58 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.0002 55C42.347 55 53.1668 43.8071 53.1668 30C53.1668 16.1929 42.347 5 29.0002 5C15.6533 5 4.8335 16.1929 4.8335 30C4.8335 43.8071 15.6533 55 29.0002 55Z"
                  fill="#FFC145"
                />
                <path
                  d="M28.9995 20V40"
                  stroke="#404040"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.333 30H38.6663"
                  stroke="#404040"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardTop from "./dashboardTop";
export default {
  name: "Account",
  components: {
    DashboardTop,
  },
  methods: {

    itemSelected(e, index) {
      this.selectedCode  = this.countryCodes[index].value;
    },
    handleOk() {
      document
        .getElementById("app")
        .classList.remove(localStorage.currentLanguage);
      localStorage.currentLanguage = this.selected;
      this.switchLocale(this.selected);
      document.getElementById("app").classList.add(this.selected);
    },
    handleFileChange(e) {
      this.$emit("input", e.target.files[0]);
      var output = document.getElementById("profileimage");
      output.src = URL.createObjectURL(event.target.files[0]);
      this.profile = true;
      output.onload = function () {
        URL.revokeObjectURL(output.src);
      };
    },
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    },
  },
  data() {
    return {
      selected: localStorage.currentLanguage,
      profile: false,
      name: "HEDI",
      email: "HEDI@EMAIL.COM",
      phone: "139315651",
      password: "1212525458585",
      newPassword: "",
      confirmPassword: "",
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
      selectedCode: "+986",

      options: [
        {
          value: null,
          text: `${this.$t("selectLanguage")}`,
        },
        { value: "en", text: "ENGLISH" },
        { value: "ar", text: "عربى" },
        { value: "ch", text: "中文" },
      ],
    };
  },
};
</script>

<style scoped>
.file-select > .select-button {
  font-style: normal;
  font-weight: bold;
  font-size: 16.0564px;
  line-height: 18px;

  color: #aeaeae;

  cursor: pointer;
  border-radius: 0.3rem;
  text-align: center;
  font-weight: bold;
}

/* Don't forget to hide the original file input! */
.file-select > input[type="file"] {
  display: none;
}
</style>