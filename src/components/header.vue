<template>
  <div class="pb-lg-5 mb-lg-5" dir="ltr">
    <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
      <b-navbar-toggle target="nav-collapse" class="white"></b-navbar-toggle>
      <b-navbar-nav class="d-lg-none">
        <img src="../assets/logo.png" width="100" />
      </b-navbar-nav>
      <b-collapse id="nav-collapse" is-nav>
        <div
          class="d-flex flex-column ml-xl-5 flex-lg-row align-items-lg-center justify-content-around w-100 pt-3 pt-lg-0"
        >
          <b-navbar-nav class="ml-xl-5" dir="ltr">
            <b-button
              @click="login"
              class="py-2 btn-width-135"
              squared
              variant="secondary"
              >{{ $t("login") }}</b-button
            >

            <b-button
              class="ml-lg-3 py-2 btn-width-135 mt-lg-0 mt-3"
              @click="signup"
              squared
              variant="outline-light"
              >{{ $t("signup") }}</b-button
            >
          </b-navbar-nav>

          <b-navbar-nav
            class="d-flex justify-content-lg-center text-light pt-3 w-100"
          >
            <p class="pl-lg-5">{{ $t("home") }}</p>
            <p class="pl-lg-5">{{ $t("product") }}</p>
            <p class="pl-lg-5">{{ $t("about") }}</p>
            <p class="pl-lg-5">{{ $t("contact") }}</p>
            <div class="d-flex align-items-start">
              <p class="pl-lg-5 pr-2 mb-0 d-flex">
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
      <b-navbar-nav class="ml-auto d-none d-lg-block w-25">
        <img src="../assets/logo.png" class="w-50" />
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (localStorage.email && localStorage.password) {
        this.$router.push({ path: "/dashboard" }).catch(() => {});
      } else {
        this.$router.push({ path: "/login" }).catch(() => {});
      }
    },
    signup() {
      this.$router.push({ path: "/sign-up" });
    },
    handleLanguage(e) {
      console.log("here");
      this.switchLocale(e.target.value);
    },
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        document.getElementById("app").classList.remove(this.$i18n.locale);
        localStorage.currentLanguage = locale;
        document.getElementById("app").classList.add(locale);

        location.reload();
      }
    },
  },
};
</script>