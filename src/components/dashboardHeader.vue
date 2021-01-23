<template>
  <div dir="ltr">
    <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top">
      <div class="d-flex">
        <b-navbar-toggle target="nav-collapse" class="white"></b-navbar-toggle>
      </div>
      <b-navbar-nav class="d-lg-none w-25">
        <img src="../assets/logo.png" width="100" />
      </b-navbar-nav>
      <b-collapse id="nav-collapse" is-nav class="w-100">
        <div
          class="d-flex flex-column flex-lg-row justify-content-lg-around w-100"
        >
          <b-navbar-nav
            class="d-flex justify-content-lg-center text-light pt-lg-3 mt-3 mt-lg-0"
          >
            <router-link to="/">
              <p class="pl-lg-5 text-white">{{ $t("home") }}</p></router-link
            >
            <p class="pl-lg-5">{{ $t("product") }}</p>
            <p class="pl-lg-5">{{ $t("about") }}</p>
            <p class="pl-lg-5">{{ $t("contact") }}</p>

            <div class="d-flex align-items-start">
              <p
                class="pl-lg-5 pr-2 mb-0 d-flex "
              >
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

              <b-nav-item-dropdown :text="`${$t('setLanguage')}`" toggle-class="p-0 d-flex align-items-center">
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
      <b-navbar-nav class="d-none d-lg-block ml-xl-10 ml-lg-18">
        <img src="../assets/logo.png" width="200" />
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "DashboardHeader",
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        document.getElementById("app").classList.remove(this.$i18n.locale);
        localStorage.currentLanguage = locale;
        document.getElementById("app").classList.add(locale);
        this.$i18n.locale = locale;
                location.reload();
      }
    },
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/" });
    },
    overview() {
      this.$router.push({ path: "/dashboard" }).catch(() => {});
    },
    notifications() {
      this.$router.push({ path: "/dashboard/notifications" }).catch(() => {});
    },
    messages() {
      this.$router.push({ path: "/dashboard/messages" }).catch(() => {});
    },
    orderHistory() {
      this.$router.push({ path: "/dashboard/order-history" }).catch(() => {});
    },
    account() {
      this.$router.push({ path: "/dashboard/account" }).catch(() => {});
    },
  },
};
</script>