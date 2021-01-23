<template>
  <div class="bg-white" dir="ltr">
    <DashboardHeader v-if="this.$route.fullPath != '/dashboard/inbox'" />
    <FormHeader v-else />
    <div class="d-flex flex-column flex-lg-row mt-5">
      <div
        class="w-21 z-index-2 px-3 side-bar d-none d-lg-flex align-items-center flex-column pt-11 border-right"
        dir="auto"
      >
        <div
          class="d-flex flex-column justify-content-between align-items-between"
        >
          <div class="d-flex align-items-center px-3 mt-5">
            <img src="../assets/logoSign.png" width="35" height="35" />
            <p class="mb-0 fs-16 mx-2" style="color: #0f4264">
              {{ $t("keerki") }}
            </p>
          </div>
          <button
            type="button"
            v-on:click="overview"
            class="btn dashboard-btn btn-white d-flex align-items-center justify-content-between mt-11"
          >
            <svg
              width="33"
              height="30"
              viewBox="0 0 33 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.35889 23.5415L7.35889 6.45776"
                stroke="#696969"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.35892 23.5413L25.6274 23.5413"
                stroke="#696969"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.4614 16.6341C13.8436 14.5994 15.5523 13.436 17.4791 11.8206L18.6749 16.2009L23.8856 12.0935"
                stroke="#696969"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="flex-grow-1">{{ $t("overview") }}</span>
          </button>
          <button
            type="button"
            v-on:click="orderHistory"
            class="btn dashboard-btn btn-white d-flex align-items-center justify-content-between mt-4"
          >
            <svg
              width="33"
              height="30"
              viewBox="0 0 33 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.4199 9.28687H25.6577"
                stroke="#696969"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.4199 15.0005H25.6577"
                stroke="#696969"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.4199 20.7139H25.6577"
                stroke="#696969"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.3291 9.28711H7.33767"
                stroke="#696969"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.32861 15.0005H7.33718"
                stroke="#696969"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.32861 20.7139H7.33718"
                stroke="#696969"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="flex-grow-1">{{ $t("orderHistory") }}</span>
          </button>
          <button
            type="button"
            class="btn dashboard-btn btn-white d-flex align-items-center justify-content-between mt-4"
            v-on:click="account"
          >
            <div
              class="d-flex flex-column justify-content-center align-items-center pl-2"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 9.00049C7.20914 9.00049 9 7.20963 9 5.00049C9 2.79135 7.20914 1.00049 5 1.00049C2.79086 1.00049 1 2.79135 1 5.00049C1 7.20963 2.79086 9.00049 5 9.00049Z"
                  stroke="#696969"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                width="18"
                height="8"
                viewBox="0 0 18 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 7.00049V5.00049C17 3.93962 16.5786 2.92221 15.8284 2.17206C15.0783 1.42192 14.0609 1.00049 13 1.00049H5C3.93913 1.00049 2.92172 1.42192 2.17157 2.17206C1.42143 2.92221 1 3.93962 1 5.00049V7.00049"
                  stroke="#696969"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="flex-grow-1">{{ $t("account") }}</span>
          </button>
          <button
            type="button"
            class="btn dashboard-btn btn-white d-flex align-items-center justify-content-between mt-4"
            v-on:click="notifications"
          >
            <div
              class="d-flex flex-column justify-content-center align-items-center pl-2"
            >
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7.00049C16 5.40919 15.3679 3.88307 14.2426 2.75785C13.1174 1.63263 11.5913 1.00049 10 1.00049C8.4087 1.00049 6.88258 1.63263 5.75736 2.75785C4.63214 3.88307 4 5.40919 4 7.00049C4 14.0005 1 16.0005 1 16.0005H19C19 16.0005 16 14.0005 16 7.00049Z"
                  stroke="#696969"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="6"
                height="3"
                viewBox="0 0 6 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.73002 1.00049C4.55421 1.30357 4.30186 1.55514 3.99825 1.73002C3.69463 1.9049 3.3504 1.99694 3.00002 1.99694C2.64964 1.99694 2.30541 1.9049 2.00179 1.73002C1.69818 1.55514 1.44583 1.30357 1.27002 1.00049"
                  stroke="#696969"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="flex-grow-1">{{ $t("notifications") }}</span>
          </button>
          <button
            type="button"
            class="btn dashboard-btn btn-white d-flex align-items-center justify-content-between mt-4"
            @click="messages"
          >
            <svg
              width="32"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9.50052C19.0034 10.8204 18.6951 12.1224 18.1 13.3005C17.3944 14.7123 16.3098 15.8997 14.9674 16.7298C13.6251 17.5599 12.0782 17.9999 10.5 18.0005C9.18013 18.004 7.87812 17.6956 6.7 17.1005L1 19.0005L2.9 13.3005C2.30493 12.1224 1.99656 10.8204 2 9.50052C2.00061 7.92227 2.44061 6.37537 3.27072 5.03307C4.10083 3.69077 5.28825 2.60608 6.7 1.90052C7.87812 1.30545 9.18013 0.997076 10.5 1.00052H11C13.0843 1.11551 15.053 1.99528 16.5291 3.47138C18.0052 4.94747 18.885 6.91617 19 9.00052V9.50052Z"
                stroke="#696969"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="flex-grow-1">{{ $t("messages") }}</span>
          </button>
          <button
            type="button"
            class="btn dashboard-btn btn-white d-flex align-items-center justify-content-between mt-4"
            @click="account"
          >
            <svg
              width="33"
              height="30"
              viewBox="0 0 33 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.4935 17.3157C17.8607 17.3157 18.969 16.2792 18.969 15.0007C18.969 13.7222 17.8607 12.6858 16.4935 12.6858C15.1264 12.6858 14.0181 13.7222 14.0181 15.0007C14.0181 16.2792 15.1264 17.3157 16.4935 17.3157Z"
                stroke="#696F79"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.5995 17.3155C22.4896 17.5482 22.4569 17.8064 22.5054 18.0567C22.5539 18.307 22.6815 18.538 22.8718 18.7199L22.9213 18.7662C23.0747 18.9095 23.1964 19.0797 23.2795 19.267C23.3625 19.4544 23.4053 19.6552 23.4053 19.858C23.4053 20.0608 23.3625 20.2617 23.2795 20.449C23.1964 20.6364 23.0747 20.8066 22.9213 20.9499C22.768 21.0934 22.586 21.2072 22.3856 21.2849C22.1853 21.3626 21.9706 21.4025 21.7537 21.4025C21.5368 21.4025 21.322 21.3626 21.1217 21.2849C20.9214 21.2072 20.7393 21.0934 20.5861 20.9499L20.5366 20.9036C20.3421 20.7257 20.0951 20.6064 19.8274 20.561C19.5597 20.5156 19.2836 20.5462 19.0348 20.649C18.7907 20.7468 18.5826 20.9092 18.436 21.1162C18.2893 21.3232 18.2107 21.5658 18.2096 21.8141V21.9453C18.2096 22.3546 18.0357 22.7472 17.7262 23.0366C17.4167 23.326 16.997 23.4886 16.5593 23.4886C16.1216 23.4886 15.7018 23.326 15.3923 23.0366C15.0828 22.7472 14.909 22.3546 14.909 21.9453V21.8759C14.9026 21.6205 14.8142 21.3728 14.6552 21.165C14.4963 20.9572 14.2742 20.7989 14.0178 20.7107C13.7689 20.608 13.4928 20.5773 13.2252 20.6227C12.9575 20.6681 12.7105 20.7874 12.516 20.9653L12.4665 21.0116C12.3132 21.1551 12.1312 21.269 11.9309 21.3466C11.7305 21.4243 11.5158 21.4643 11.2989 21.4643C11.082 21.4643 10.8673 21.4243 10.6669 21.3466C10.4666 21.269 10.2846 21.1551 10.1313 21.0116C9.97784 20.8683 9.85612 20.6981 9.77306 20.5108C9.69001 20.3234 9.64727 20.1226 9.64727 19.9198C9.64727 19.717 9.69001 19.5161 9.77306 19.3288C9.85612 19.1414 9.97784 18.9712 10.1313 18.8279L10.1808 18.7816C10.371 18.5997 10.4986 18.3687 10.5472 18.1184C10.5957 17.8681 10.5629 17.6099 10.4531 17.3772C10.3485 17.149 10.1748 16.9543 9.95343 16.8172C9.73205 16.6801 9.47263 16.6065 9.2071 16.6056H9.06683C8.62913 16.6056 8.20937 16.443 7.89987 16.1535C7.59038 15.8641 7.4165 15.4716 7.4165 15.0623C7.4165 14.653 7.59038 14.2604 7.89987 13.971C8.20937 13.6816 8.62913 13.519 9.06683 13.519H9.14109C9.41421 13.513 9.6791 13.4303 9.90131 13.2817C10.1235 13.1331 10.2928 12.9254 10.3871 12.6856C10.4969 12.4529 10.5297 12.1947 10.4812 11.9444C10.4326 11.6941 10.305 11.4631 10.1148 11.2812L10.0653 11.2349C9.91183 11.0916 9.7901 10.9214 9.70705 10.734C9.624 10.5467 9.58125 10.3458 9.58125 10.143C9.58125 9.94022 9.624 9.7394 9.70705 9.55205C9.7901 9.3647 9.91183 9.19449 10.0653 9.05116C10.2185 8.90767 10.4006 8.79384 10.6009 8.71617C10.8012 8.63851 11.016 8.59853 11.2329 8.59853C11.4498 8.59853 11.6645 8.63851 11.8648 8.71617C12.0652 8.79384 12.2472 8.90767 12.4005 9.05116L12.45 9.09746C12.6445 9.27535 12.8915 9.39468 13.1591 9.44007C13.4268 9.48546 13.7029 9.45482 13.9518 9.3521H14.0178C14.2618 9.25428 14.47 9.09187 14.6166 8.88484C14.7632 8.67782 14.8419 8.43522 14.843 8.18692V8.05574C14.843 7.64643 15.0168 7.25389 15.3263 6.96447C15.6358 6.67505 16.0556 6.51245 16.4933 6.51245C16.931 6.51245 17.3507 6.67505 17.6602 6.96447C17.9697 7.25389 18.1436 7.64643 18.1436 8.05574V8.12519C18.1447 8.37349 18.2233 8.61609 18.3699 8.82311C18.5166 9.03014 18.7247 9.19255 18.9688 9.29037C19.2176 9.39309 19.4937 9.42373 19.7614 9.37834C20.0291 9.33295 20.2761 9.21362 20.4705 9.03573L20.5201 8.98943C20.6733 8.84594 20.8553 8.73211 21.0557 8.65444C21.256 8.57678 21.4708 8.5368 21.6877 8.5368C21.9045 8.5368 22.1193 8.57678 22.3196 8.65444C22.52 8.73211 22.702 8.84594 22.8553 8.98943C23.0087 9.13276 23.1304 9.30296 23.2135 9.49032C23.2965 9.67767 23.3393 9.87849 23.3393 10.0813C23.3393 10.2841 23.2965 10.4849 23.2135 10.6723C23.1304 10.8596 23.0087 11.0299 22.8553 11.1732L22.8058 11.2195C22.6155 11.4013 22.4879 11.6323 22.4394 11.8826C22.3908 12.133 22.4236 12.3911 22.5334 12.6239V12.6856C22.638 12.9138 22.8117 13.1085 23.0331 13.2456C23.2545 13.3827 23.5139 13.4563 23.7794 13.4572H23.9197C24.3574 13.4572 24.7772 13.6198 25.0867 13.9093C25.3962 14.1987 25.57 14.5912 25.57 15.0005C25.57 15.4098 25.3962 15.8024 25.0867 16.0918C24.7772 16.3812 24.3574 16.5438 23.9197 16.5438H23.8455C23.5799 16.5448 23.3205 16.6184 23.0991 16.7555C22.8777 16.8926 22.7041 17.0872 22.5995 17.3155V17.3155Z"
                stroke="#696F79"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="flex-grow-1">{{ $t("settings") }}</span>
          </button>
        </div>
        <b-modal
          id="log-out-modal"
          centered
          hide-footer
          header-class="header-class"
          hide-header
          hide-header-close
        >
          <div
            class="d-flex flex-column w-100 justify-content-center align-items-center p-3"
          >
            <div class="w-100">
              <h1 class="fs-16">{{ $t("automaticLogout") }}</h1>
              <h1 class="fs-18 text-primary">{{ $t("logoutTime") }}</h1>
            </div>
            <div class="d-flex justify-content-end w-100 mt-3">
              <button
                class="rounded-lg btn modal-logout bg-white color-c7 outline-none"
                @click="logout"
              >
                {{ $t("logout") }}
              </button>
              <button
                class="rounded-lg btn btn-primary outline-none ml-2"
                @click="$bvModal.hide('log-out-modal')"
              >
                {{ $t("continueSession") }}
              </button>
            </div>
          </div>
        </b-modal>
        <b-button
          variant="outline-secondary"
          v-b-modal.log-out-modal
          class="text-success px-5 mt-11 mb-5 d-flex flex-nowrap align-items-center border-radius-13"
          >{{ $t("logout") }}
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            class="ml-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.375 14.875H3.54167C3.16594 14.875 2.80561 14.7257 2.53993 14.4601C2.27426 14.1944 2.125 13.8341 2.125 13.4583V3.54167C2.125 3.16594 2.27426 2.80561 2.53993 2.53993C2.80561 2.27426 3.16594 2.125 3.54167 2.125H6.375"
              stroke="#5C5C5C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.3335 12.0416L14.8752 8.49992L11.3335 4.95825"
              stroke="#5C5C5C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.875 8.5H6.375"
              stroke="#5C5C5C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </b-button>
        <div
          v-if="this.$route.fullPath === '/dashboard/inbox'"
          class="text-dark align-self-start mt-14 mb-4"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 15C30 23.2861 23.2837 30 15 30C6.71631 30 0 23.2861 0 15C0 6.71873 6.71631 0 15 0C23.2837 0 30 6.71873 30 15ZM15.4025 4.95968C12.1063 4.95968 10.004 6.34821 8.35319 8.81601C8.13931 9.13573 8.21087 9.56692 8.5174 9.79935L10.6161 11.3907C10.9309 11.6294 11.3795 11.5726 11.6241 11.2623C12.7046 9.89189 13.4454 9.0972 15.09 9.0972C16.3256 9.0972 17.854 9.89244 17.854 11.0906C17.854 11.9964 17.1062 12.4616 15.8862 13.1456C14.4634 13.9432 12.5806 14.9359 12.5806 17.4194V17.6613C12.5806 18.0621 12.9056 18.3871 13.3065 18.3871H16.6935C17.0944 18.3871 17.4194 18.0621 17.4194 17.6613V17.5807C17.4194 15.8592 22.4508 15.7875 22.4508 11.129C22.4508 7.62085 18.8118 4.95968 15.4025 4.95968ZM15 19.9597C13.4658 19.9597 12.2177 21.2078 12.2177 22.7419C12.2177 24.276 13.4658 25.5242 15 25.5242C16.5342 25.5242 17.7823 24.276 17.7823 22.7419C17.7823 21.2078 16.5342 19.9597 15 19.9597Z"
              fill="#0278AE"
            />
          </svg>
          <p class="btn p-0 outline-none mb-0 ml-2">
            {{ $t("help") }}
          </p>
        </div>
      </div>
      <div class="w-100">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardHeader from "../components/dashboardHeader";
import FormHeader from "../components/formHeader";

export default {
  name: "Dashboard",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/" });
      this.$bvModal.hide("log-out-modal");
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
  components: {
    DashboardHeader,
    FormHeader,
  },
};
</script>