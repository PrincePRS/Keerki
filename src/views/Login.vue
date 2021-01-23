
<template>
  <div>
    <DashboardHeader />

    <div class="d-flex w-100 min-vh-100>" dir="ltr">
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
      <div
        class="w-66 bg-white d-flex mt-5 justify-content-center align-items-center flex-column"
      >
        <router-link to="/" class="align-self-start">
          <button
            class="d-flex pt-5 ml-4 ml-lg-5 outline-none d-flex align-items-center justify-content-center"
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
        </router-link>

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
            <div class="ml-23" v-if="type <= 1 || type > 8 || isNaN(type)">
              <h1 class="fs-30">{{ $t("loginHeading") }}</h1>
              <p class="font-weight-lighter fs-18">
                {{ $t("loginDescription") }}
              </p>
            </div>

            <CustomAlert v-else v-bind:alert="type" />
            <p class="horizontal-line"></p>
            <div>
              <b-form @submit="onSubmit">
                <b-form-group
                  dir="auto"
                  id="input-group-6"
                  :label="`${$t('loginEmail')}`"
                  label-for="input-6"
                >
                  <input
                    id="input-6"
                    v-model="email"
                    v-on:change="checkCredentials"
                    type="email"
                    :placeholder="`${$t('enterYourEmail')}`"
                    required
                    class="form-input outline-none border rounded-lg px-3"
                  />
                </b-form-group>
                <b-form-group
                  dir="auto"
                  id="input-group-7"
                  :label="`${$t('password')}`"
                  label-for="input-7"
                >
                  <input
                    id="input-7"
                    v-model="password"
                    type="password"
                    :placeholder="`${$t('enterPassword')}`"
                    required
                    class="form-input outline-none border rounded-lg px-3"
                  />
                </b-form-group>
                <router-link to="/forgot">
                  <button
                  v-if="this.$i18n.locale == 'ar'"
                    class="mb-2 mr-sm-2 mb-sm-0 bg-white border-0 outline-none"
                    type="button"
                  >
                    {{ $t("forgotPassword") }}
                  </button>
                   <button
                  v-else
                    class="mb-2 ml-23 mr-sm-2 mb-sm-0 bg-white border-0 outline-none"
                    type="button"
                  >
                    {{ $t("forgotPassword") }}
                  </button>
                  </router-link
                >
                <b-button
                  size="lg"
                  type="submit"
                  v-if="this.$i18n.locale == 'ar'"
                  class="w-100 border-0 bg-info mt-11 text-white py-3 mb-5"
                  >{{ $t("login") }}</b-button
                >
                <b-button
                  size="lg"
                  type="submit"
                  v-else
                  class="w-100 border-0 bg-info ml-23 mt-11 text-white py-3 mb-5"
                  >{{ $t("login") }}</b-button
                >
                <div
                  v-if="this.$i18n.locale == 'ar'"
                  class="d-flex align-items-center text-center separator font-weight-lighter text-black"
                >
                  {{ $t("or") }}
                </div>
                <div
                  v-else
                  class="d-flex ml-22 align-items-center text-center separator font-weight-lighter text-black"
                >
                  {{ $t("or") }}
                </div>
                <button
                  dir="auto"
                  v-if="this.$i18n.locale == 'ar'"
                  type="button"
                  class="btn w-100 btn-white d-flex align-items-center justify-content-between shadow-sm form-input mt-5"
                >
                  <div dir="ltr">
                    <svg
                      width="24"
                      height="24"
                      class="mr-2"
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="url(#paint0_linear)"
                      />
                      <path
                        d="M14.6289 12.625L15.0117 10.1094H12.5781V8.46875C12.5781 7.75781 12.9062 7.10156 14 7.10156H15.1211V4.94141C15.1211 4.94141 14.1094 4.75 13.1523 4.75C11.1562 4.75 9.84375 5.98047 9.84375 8.16797V10.1094H7.60156V12.625H9.84375V18.75H12.5781V12.625H14.6289Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-0.000150921"
                          y1="0"
                          x2="-0.000150921"
                          y2="24.0003"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B2FF" />
                          <stop offset="1" stop-color="#006AFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <span class="flex-grow-1">{{
                    $t("loginWithSocialMedia")
                  }}</span>
                </button>
                <button
                  dir="auto"
                  v-else
                  type="button"
                  class="btn w-100 btn-white ml-23 d-flex align-items-center justify-content-between shadow-sm form-input mt-5"
                >
                  <div dir="ltr">
                    <svg
                      width="24"
                      height="24"
                      class="mr-2"
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="url(#paint0_linear)"
                      />
                      <path
                        d="M14.6289 12.625L15.0117 10.1094H12.5781V8.46875C12.5781 7.75781 12.9062 7.10156 14 7.10156H15.1211V4.94141C15.1211 4.94141 14.1094 4.75 13.1523 4.75C11.1562 4.75 9.84375 5.98047 9.84375 8.16797V10.1094H7.60156V12.625H9.84375V18.75H12.5781V12.625H14.6289Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="-0.000150921"
                          y1="0"
                          x2="-0.000150921"
                          y2="24.0003"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#00B2FF" />
                          <stop offset="1" stop-color="#006AFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <span class="flex-grow-1">{{
                    $t("loginWithSocialMedia")
                  }}</span>
                </button>
                <router-link to="/sign-up">
                  <button
                    dir="auto"
                    v-if="this.$i18n.locale == 'ar'"
                    type="button"
                    class="btn w-100 btn-white text-center shadow-sm form-input mt-3 mb-5"
                  >
                    {{ $t("noAccount") }}
                  </button>
                  <button
                    dir="auto"
                    v-else
                    type="button"
                    class="btn ml-23 w-100 btn-white text-center shadow-sm form-input mt-3 mb-5"
                  >
                    {{ $t("noAccount") }}
                  </button>
                </router-link>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomAlert from "../components/customAlert";
import DashboardHeader from "../components/dashboardHeader";
export default {
  name: "Login",
  components: {
    CustomAlert,
    DashboardHeader,
  },
  methods: {
    checkCredentials() {
      this.type = parseInt(this.email);
    },
    onSubmit(e) {
      e.preventDefault();
      localStorage.email = this.email;
      localStorage.password = this.password;
      localStorage.newUser = true;
      localStorage.currentLanguage = this.$i18n.locale;

      this.$router.push({ path: "dashboard" });
    },
  },
  data() {
    return {
      email: "",
      password: "",
      type: 1,
    };
  },
};
</script>