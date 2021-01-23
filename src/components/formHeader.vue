<template>
  <div class="mb-lg-11" dir="ltr">
    <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
      <b-navbar-toggle target="nav-collapse" class="white"></b-navbar-toggle>
      <b-navbar-nav class="ml-auto d-lg-none">
        <img src="../assets/logo.png" width="100" />
      </b-navbar-nav>
      <b-collapse id="nav-collapse" is-nav>
        <div
          class="d-flex flex-column ml-xl-5 flex-lg-row align-items-center justify-content-around w-100 mr-lg-5"
        >
          <b-navbar-nav
            class="d-flex justify-content-center mt-4 mt-lg-0 align-items-lg-center align-items-start text-left width-50 outline-none ml-0 ml-lg-5"
          >
            <div class="bg-secondary rounded-circle">
              <svg
                width="47"
                height="47"
                viewBox="0 0 39 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="39"
                  height="36"
                >
                  <ellipse
                    cx="19.5711"
                    cy="18.0019"
                    rx="18.745"
                    ry="17.5292"
                    fill="#FFC145"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M31.1551 37.6195V34.0386C31.1551 32.1392 30.5448 30.3176 29.4586 28.9746C28.3724 27.6315 26.8991 26.877 25.363 26.877H13.7789C12.2427 26.877 10.7695 27.6315 9.68327 28.9746C8.59705 30.3176 7.98682 32.1392 7.98682 34.0386V37.6195"
                    fill="#197BBD"
                  />
                  <path
                    d="M19.5694 21.4598C22.7683 21.4598 25.3615 19.0348 25.3615 16.0434C25.3615 13.052 22.7683 10.627 19.5694 10.627C16.3705 10.627 13.7773 13.052 13.7773 16.0434C13.7773 19.0348 16.3705 21.4598 19.5694 21.4598Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
            <div class="mx-lg-4 my-2 my-lg-0 text-white pl-24 pl-lg-0">
              <p class="mb-0 fs-16 font-weight-bolder">Hedi</p>
              <router-link to="/dashboard/account" class="text-white">
                <p class="mb-0 fs-16">{{ $t("formHeaderAccountDetails") }}</p>
              </router-link>
            </div>
            <div class="d-flex align-items-center pl-24 pl-lg-0">
              <svg
                width="26"
                height="24"
                class="mx-lg-2"
                viewBox="0 0 26 24"
                fill="none"
                v-if="this.$route.fullPath == '/dashboard/inbox'"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.27744 4H21.3871C22.5634 4 23.5258 4.9 23.5258 6V18C23.5258 19.1 22.5634 20 21.3871 20H4.27744C3.10115 20 2.13873 19.1 2.13873 18V6C2.13873 4.9 3.10115 4 4.27744 4Z"
                  fill="white"
                />
                <path
                  d="M23.5258 6L12.8323 13L2.13873 6"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="26"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                class="my-2 my-lg-0 mx-3"
                v-if="this.$route.fullPath == '/dashboard/inbox'"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2997 8C19.2997 6.4087 18.6237 4.88258 17.4204 3.75736C16.2172 2.63214 14.5852 2 12.8835 2C11.1819 2 9.5499 2.63214 8.34664 3.75736C7.14338 4.88258 6.4674 6.4087 6.4674 8C6.4674 15 3.25934 17 3.25934 17H22.5077C22.5077 17 19.2997 15 19.2997 8Z"
                  fill="white"
                />
                <path
                  d="M14.7335 21C14.5455 21.3031 14.2757 21.5547 13.951 21.7295C13.6263 21.9044 13.2582 21.9965 12.8836 21.9965C12.5089 21.9965 12.1408 21.9044 11.8161 21.7295C11.4914 21.5547 11.2216 21.3031 11.0336 21"
                  stroke="#A9A9A9"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <ellipse
                  cx="18.9804"
                  cy="4.69852"
                  rx="4.24743"
                  ry="3.97196"
                  fill="#BB4430"
                />
              </svg>
            </div>
          </b-navbar-nav>

          <b-navbar-nav
            class="d-flex justify-content-around pl-24 pl-lg-0 text-light pt-lg-3 w-100"
          >
            <router-link to="/">
              <p class="pl-lg-5 text-white">{{ $t("home") }}</p></router-link
            >
            <p class="">{{ $t("product") }}</p>
            <p class="">{{ $t("about") }}</p>
            <p class="">{{ $t("contact") }}</p>
            <div class="d-flex align-items-start">
              <p class="pr-2 mb-0 d-flex">
                <img
                  v-if="this.$i18n.locale == 'en'"
                  src="../assets/enFlag.png"
                  width="24"
                  height="24"
                  class="rounded-circle"
                />
                <img
                  v-else-if="this.$i18n.locale == 'ar'"
                  src="../assets/arFlag.png"
                  width="24"
                  height="24"
                  class="rounded-circle"
                />
                <img
                  v-else
                  if="this.$i18n.locale == 'ch'"
                  src="../assets/chFlag.png"
                  width="24"
                  height="24"
                  class="rounded-circle"
                />
              </p>

              <b-nav-item-dropdown
                :text="`${$t('setLanguage')}`"
                toggle-class="p-0 d-flex align-items-center"
              >
                <b-dropdown-item @click="switchLocale('en')">
                  <img
                    src="../assets/enFlag.png"
                    width="24"
                    height="24"
                    class="rounded-circle"
                  />
                  ENGLISH</b-dropdown-item
                >
                <b-dropdown-item @click="switchLocale('ar')">
                  <img
                    src="../assets/arFlag.png"
                    width="24"
                    height="24"
                    class="rounded-circle"
                  />
                  عربى</b-dropdown-item
                >
                <b-dropdown-item @click="switchLocale('ch')">
                  <img
                    src="../assets/chFlag.png"
                    width="24"
                    height="24"
                    class="rounded-circle"
                  />
                  中文</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </div>
          </b-navbar-nav>
        </div>
      </b-collapse>
      <b-navbar-nav class="ml-auto d-none d-lg-block width-25">
        <img src="../assets/logo.png" class="w-50" />
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "FormHeader",
  methods: {
    gotoHome() {
      this.$router.push({ path: "/" });
    },
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        document.getElementById("app").classList.remove(this.$i18n.locale);
        localStorage.currentLanguage = locale;
        document.getElementById("app").classList.add(locale);
        this.$i18n.locale = locale;
        location.reload();
      }
    },
  },
};
</script>