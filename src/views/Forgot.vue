<template>
  <div dir="ltr">
    <DashboardHeader />
    <div class="d-flex w-100 min-vh-100>">
      <div
        class="d-none w-33 min-vh-100 sign-up-image d-lg-flex justify-content-center align-items-center"
      >
        <img
          src="../assets/logo.png"
          width="304"
          height="131"
          class="login-logo mw-100"
        />
      </div>
      <div
        class="w-66 bg-white d-flex min-vh-100 justify-content-center align-items-center flex-column"
      >
        <button
          class="d-flex ml-4 ml-lg-5 align-self-start outline-none d-flex align-items-center justify-content-center"
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
          class="w-70 pt-lg-11 px-4 text-left flex-column d-flex justify-content-center align-items-center"
        >
          <img
            class="d-block d-lg-none"
            src="../assets/logoDark.png"
            width="158"
            height="80"
          />
          <div class="w-84">
            <div v-if="this.$i18n.locale == 'ar'">
              <h1 class="fs-30">{{ $t("forgotPasswordHeading") }}</h1>
              <p class="font-weight-lighter fs-18">
                {{ $t("forgotPasswordDescription") }}
              </p>
            </div>
            <div v-else class="ml-23">
              <h1 class="fs-30">{{ $t("forgotPasswordHeading") }}</h1>
              <p class="font-weight-lighter fs-18">
                {{ $t("forgotPasswordDescription") }}
              </p>
            </div>
            <p class="horizontal-line"></p>
            <div>
              <b-form @submit="onSubmit">
                <b-form-group
                  dir="auto"
                  id="input-group-8"
                  :label="`${$t('loginEmail')}`"
                  label-for="input-8"
                >
                  <input
                    id="input-8"
                    v-model="form.email"
                    :placeholder="`${$t('enterYourEmail')}`"
                    required
                    class="form-input outline-none border rounded-lg px-3"
                  />
                </b-form-group>
                <b-button
                  v-b-modal.modal-center
                  size="lg"
                  v-if="this.$i18n.locale == 'ar'"
                  type="submit"
                  class="w-100 bg-info border-0 text-white py-3 mb-5"
                  >{{ $t("requestNewPassword") }}</b-button
                >
                 <b-button
                  v-b-modal.modal-center
                  size="lg"
                  v-else
                  type="submit"
                  class="w-100 ml-23 bg-info border-0 text-white py-3 mb-5"
                  >{{ $t("requestNewPassword") }}</b-button
                >
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
  name: "Forgot",
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$router.push({ path: "reset" });
    },
  },
  components: {
    DashboardHeader,
  },
  data() {
    return {
      form: {
        email: "",
      },
    };
  },
};
</script>