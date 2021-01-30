<template>
  <div
    class="min-vh-100 w-150 d-flex justify-content-center align-items-center login-bg"
  >
    <!-- <form class="w-84" v-on:submit="handleSubmit"> -->
      <div
        class="d-flex justify-content-center align-items-center flex-column w-150"
      >
        <img src="../../assets/logo.png" width="275" height="86" />
        <div
          class="mt-15 d-flex justify-content-center width-25 text-white align-center-items"
        >
          <AdminCustomAlert v-bind:alert="type" />
        </div>
        <div class="mt-15 w-300">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            class="mt-13 mx-13 position-absolute"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66668C5.78262 12.5 4.93478 12.8512 4.30965 13.4763C3.68453 14.1014 3.33334 14.9493 3.33334 15.8333V17.5"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.99999 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99999 2.5C8.15904 2.5 6.66666 3.99238 6.66666 5.83333C6.66666 7.67428 8.15904 9.16667 9.99999 9.16667Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            class="border border-white rounded-lg text-white login-input w-100 outline-none px-5"
            :placeholder="`${$t('loginUserName')}`"
            type="text"
            v-model="email"
            v-on:change="handleUserName"
            required
          />
        </div>
        <div class="mt-3 w-300">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            class="position-absolute mt-13 mx-13"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8333 9.16667H4.16667C3.24619 9.16667 2.5 9.91286 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91286 16.7538 9.16667 15.8333 9.16667Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.83334 9.16667V5.83334C5.83334 4.72827 6.27233 3.66846 7.05373 2.88706C7.83513 2.10566 8.89494 1.66667 10 1.66667C11.1051 1.66667 12.1649 2.10566 12.9463 2.88706C13.7277 3.66846 14.1667 4.72827 14.1667 5.83334V9.16667"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input
            class="border border-white rounded-lg text-white login-input w-100 outline-none px-5"
            :placeholder="`${$t('loginUserPassword')}`"
            v-model="password"
            type="password"
            required
          />
        </div>
        <div v-if="this.$i18n.locale == 'ar'" class="w-300">
          <button
            class="btn w-100 login-input shadow-md btn-white btn-light mt-5"
            @click="handleSubmit"
            type="submit"
          >
            {{ $t("loginBtn") }}
          </button>
          <p class="align-self-start fs-16 mb-0 text-white mt-13">
            {{ $t("contactAdministrator") }}
          </p>
        </div>
        <div v-else class="w-300 ml-22">
          <button
            class="btn w-100 login-input shadow-md btn-white btn-light mt-5"
            v-on:click="handleSubmit"
            type="submit"
          >
            {{ $t("loginBtn") }}
          </button>
          <p class="align-self-start fs-16 mb-0 text-white mt-13">
            {{ $t("contactAdministrator") }}
          </p>
        </div>
      </div>
    <!-- </form> -->
  </div>
</template>
<script>
import AdminCustomAlert from "./customAlert";
export default {
  name: "AdminLogin",
  components: { AdminCustomAlert },
  data() {
    return {
      type: 0,
      email: "admin@gmail.com",
      password: "qqqqqq"
    };
  },
  methods: {

    handleUserName() {
      this.type = parseInt(this.email);
    },
    handleSubmit() {
      // if (this.userId == "nick") localStorage.setItem("role", "employee");
      // else localStorage.setItem("role", "admin");
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      }).then(()=>{
        if(this.$store.state.error.validations === 200){
          
          this.$router.push({ path: "/admin/dashboard" }).catch(() => {}); 
        }else{
          this.type = this.$store.state.error.validations;
        }
      });
    },
  },
};
</script>
<style scoped>
.w-300 {
  width: 300px;
}
.login-bg {
  background-image: url("../../assets/adminBG.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.login-input {
  height: 45px !important;
}
.login-input::placeholder {
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.8;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.8;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.8;
}
</style>