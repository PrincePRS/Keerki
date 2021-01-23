<template>
  <div
    class="w-100 d-flex align-items-lg-center justify-content-between flex-column px-xl-11 pt-11 flex-lg-row"
  >
    <div class="order-1 order-lg-0 mt-4 mt-lg-0">
      <h1 class="fs-43">{{ this.Heading }}</h1>
      <h3 class="fs-13 font-weight-light">{{ this.Text }}</h3>
    </div>
    <div
      v-if="
        this.$route.fullPath === '/dashboard/order-history/quote-orders' ||
        this.$route.fullPath === '/dashboard/order-history/service-orders' ||
        this.$route.fullPath === '/dashboard/order-history/shipping-orders' ||
        this.$route.fullPath === '/dashboard/order-history/order-template'
      "
      class="order-2 order-lg-0 fs-16 zindex-dropdown checkbox"
    >
      <b-form-checkbox
        size="lg"
        v-model="checked"
        @click.native="toggleView"
        button-variant="secondary"
        name="check-button"
        switch
        class="fs-16 font-weight-lighter"
      >
        {{ $t("viewInTemplates") }}
      </b-form-checkbox>
    </div>
    <div
      class="d-flex justify-content-between width-100 align-items-center"
      dir="auto"
    >
      <div class="d-flex">
        <button
          class="d-flex align-items-center justify-content-center outline-none"
          v-b-modal.entry-modal
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 9C18 13.9717 13.9702 18 9 18C4.02979 18 0 13.9717 0 9C0 4.03124 4.02979 0 9 0C13.9702 0 18 4.03124 18 9ZM9.24151 2.97581C7.2638 2.97581 6.00242 3.80892 5.01191 5.2896C4.88359 5.48144 4.92652 5.74015 5.11044 5.87961L6.36968 6.83441C6.55857 6.97765 6.8277 6.94357 6.97446 6.7574C7.62275 5.93514 8.06727 5.45832 9.054 5.45832C9.79537 5.45832 10.7124 5.93546 10.7124 6.65438C10.7124 7.19786 10.2637 7.47697 9.53173 7.88737C8.67803 8.36594 7.54839 8.96157 7.54839 10.4516V10.5968C7.54839 10.8373 7.74337 11.0323 7.98387 11.0323H10.0161C10.2566 11.0323 10.4516 10.8373 10.4516 10.5968V10.5484C10.4516 9.5155 13.4705 9.4725 13.4705 6.67742C13.4705 4.57251 11.2871 2.97581 9.24151 2.97581ZM9 11.9758C8.0795 11.9758 7.33065 12.7247 7.33065 13.6452C7.33065 14.5656 8.0795 15.3145 9 15.3145C9.9205 15.3145 10.6694 14.5656 10.6694 13.6452C10.6694 12.7247 9.9205 11.9758 9 11.9758Z"
              fill="#0278AE"
            />
          </svg>
          <p class="btn p-0 outline-none mb-0 mx-sm-1 mx-xl-2" v-b-modal.entry-modal>
            {{ $t("help") }}
          </p>

          <b-modal
            id="entry-modal"
            @hide="handleClose('headerClose')"
            v-model="firstTime"
            hide-footer
            centered
            size="lg"
          >
            <div
              class="d-flex flex-column py-4 px-4 w-100 align-items-center justify-content-center"
            >
              <div class="align-self-start w-70">
                <p class="first-modal-header">
                  {{ this.data[index].heading }}
                </p>
                <p class="first-modal-body mb-0">
                  {{ this.data[index].body }}
                </p>
              </div>
              <div
                class="w-70 d-flex justify-content-center align-items-center"
                style="max-height: 100%"
              >
                <img
                  v-if="index !== 4"
                  :src="`${require(`../assets/${this.data[index].img}`)}`"
                  class="mt-16 w-100"
                  style="max-height: 400px"
                />
              </div>
              <div
                class="d-flex justify-content-between align-items-center flex-column flex-lg-row w-100 mt-5"
              >
                <div class="d-flex justify-content-center w-100 pl-lg-9">
                  <button
                    class="rounded-circle ml-2 faded-circle outline-none active-circle"
                    @click="changeSlide(0, 'active-circle0')"
                    id="active-circle0"
                  ></button>
                  <button
                    class="rounded-circle ml-2 faded-circle outline-none"
                    @click="changeSlide(1, 'active-circle1')"
                    id="active-circle1"
                  ></button>
                  <button
                    class="rounded-circle ml-2 faded-circle outline-none"
                    @click="changeSlide(2, 'active-circle2')"
                    id="active-circle2"
                  ></button>
                  <button
                    class="rounded-circle ml-2 faded-circle outline-none"
                    @click="changeSlide(3, 'active-circle3')"
                    id="active-circle3"
                  ></button>
                  <button
                    class="rounded-circle ml-2 faded-circle outline-none"
                    @click="changeSlide(4, 'active-circle4')"
                    id="active-circle4"
                  ></button>
                </div>
                <div class="d-flex flex-column flex-lg-row">
                  <button
                    v-if="index != 0"
                    class="btn btn-outline-primary border-0 mr-lg-3 mt-4 mt-lg-0"
                    @click="prev"
                  >
                    {{ $t("newUserPrev") }}
                  </button>
                  <div
                    v-else
                    class="btn border-0 mr-0 outline-none mt-4 mt-lg-0 bg-transparent text-white"
                  >
                    {{ $t("newUserPrev") }}
                  </div>
                  <button
                    v-if="index != 4"
                    class="btn btn-primary mt-4 mt-lg-0"
                    @click="next"
                  >
                    {{ $t("newUserNext") }}
                  </button>
                  <button
                    v-if="index >= 4"
                    class="btn btn-primary mt-4 mt-lg-0"
                    @click="done"
                  >
                    {{ $t("newUserDone") }}
                  </button>
                </div>
              </div>
            </div>
          </b-modal>
        </button>
        <button
          v-b-popover.hover.top
          id="popover-target-2"
          class="outline-none ml-sm-2 ml-xl-4 ml-lg-2"
        >
          <b-popover
            target="popover-target-2"
            triggers="hover"
            placement="bottom"
            custom-class="pop-over p-0"
          >
            <div class="d-flex flex-column w-100 p-2" dir="auto">
              <div class="px-2 py-2 border-bottom w-100">
                <p class="mb-1 fs-20">{{ $t("popupMessages") }}</p>
                <p class="fs-14 font-weight-light">{{ $t("popupDaysAgo") }}</p>
              </div>
              <div
                class="d-flex w-100 justify-content-between align-items-center mt-3"
              >
                <p class="font-12 mb-0">{{ $t("popupNewMessages") }}</p>
                <p class="font-11 mb-0">{{ $t("popupDismiss") }}</p>
              </div>
              <div
                class="w-100 py-2 mt-3 d-flex justify-content-center align-items-center"
              >
                <button
                  class="btn noti-btn w-100 d-flex align-items-center justify-content-center py-3"
                  @click="messages"
                  dir="ltr"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H15"
                      stroke="#625D5D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 1L15 8L8 15"
                      stroke="#625D5D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p class="fs-18 mb-0 ml-3">{{ $t("popupViewAll") }}</p>
                </button>
              </div>
            </div>
          </b-popover>

          <svg
            width="27"
            height="25"
            viewBox="0 0 27 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.90726 4.00195H22.0169C23.1932 4.00195 24.1556 4.90195 24.1556 6.00195V18.002C24.1556 19.102 23.1932 20.002 22.0169 20.002H4.90726C3.73097 20.002 2.76855 19.102 2.76855 18.002V6.00195C2.76855 4.90195 3.73097 4.00195 4.90726 4.00195Z"
              fill="#A9A9A9"
            />
            <path
              d="M24.1556 6.00195L13.4621 13.002L2.76855 6.00195"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          id="popover-target-1"
          v-b-popover.hover.top
          class="outline-none ml-sm-2 ml-xl-4 ml-lg-2"
        >
          <b-popover
            target="popover-target-1"
            triggers="hover"
            placement="bottom"
            custom-class="pop-over p-0"
          >
            <div class="d-flex flex-column w-100 p-2" dir="auto">
              <div class="px-2 py-2 border-bottom w-100">
                <p class="mb-1 fs-20">{{ $t("popupNotifications") }}</p>
                <p class="fs-14 font-weight-light">{{ $t("popupDaysAgo") }}</p>
              </div>
              <div
                class="d-flex w-100 justify-content-between align-items-center mt-3"
              >
                <p class="font-12 mb-0">{{ $t("popupNewNotifications") }}</p>
                <p class="font-11 mb-0">{{ $t("popupDismiss") }}</p>
              </div>
              <div
                class="w-100 py-2 mt-3 d-flex justify-content-center align-items-center"
              >
                <button
                  class="btn noti-btn w-100 d-flex align-items-center justify-content-center py-3"
                  @click="notifications"
                  dir="ltr"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 8H15"
                      stroke="#625D5D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8 1L15 8L8 15"
                      stroke="#625D5D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <p class="fs-18 mb-0 ml-3">{{ $t("popupViewAll") }}</p>
                </button>
              </div>
            </div>
          </b-popover>
          <svg
            width="27"
            height="25"
            viewBox="0 0 27 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M19.9295 8.00195C19.9295 6.41065 19.2535 4.88453 18.0502 3.75931C16.847 2.63409 15.215 2.00195 13.5133 2.00195C11.8117 2.00195 10.1797 2.63409 8.97646 3.75931C7.77321 4.88453 7.09722 6.41065 7.09722 8.00195C7.09722 15.002 3.88916 17.002 3.88916 17.002H23.1375C23.1375 17.002 19.9295 15.002 19.9295 8.00195Z"
                fill="#A9A9A9"
              />
              <path
                d="M15.3635 21.002C15.1755 21.305 14.9057 21.5566 14.581 21.7315C14.2563 21.9064 13.8882 21.9984 13.5136 21.9984C13.1389 21.9984 12.7708 21.9064 12.4461 21.7315C12.1214 21.5566 11.8516 21.305 11.6636 21.002"
                stroke="#A9A9A9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <ellipse
                cx="19.6102"
                cy="4.70023"
                rx="4.24743"
                ry="3.97196"
                fill="#BB4430"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="25.6645"
                  height="24"
                  fill="white"
                  transform="translate(0.681152 0.00195312)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div
        class="d-flex justify-content-center text-white align-items-center text-left outline-none ml-0 ml-lg-2 ml-xl-5"
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
        <div class="mx-sm-2">
          <p class="mb-0 text-dark fs-14">Hedi</p>
          <p class="mb-0 fs-14 text-dark d-flex align-items-center">
            {{ $t("formHeaderAccountDetails") }}

            <b-dropdown
              variant="link"
              size="sm"
              dropleft
              toggle-class="text-decoration-none p-0 outline-none mx-1"
              no-caret
            >
              <template #button-content>
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.20711 0.792893C1.81658 0.402369 1.18342 0.402369 0.792893 0.792893C0.402369 1.18342 0.402369 1.81658 0.792893 2.20711L5.29289 6.70711C5.68342 7.09763 6.31658 7.09763 6.70711 6.70711L11.2071 2.20711C11.5976 1.81658 11.5976 1.18342 11.2071 0.792893C10.8166 0.402369 10.1834 0.402369 9.79289 0.792893L6 4.58579L2.20711 0.792893Z"
                    fill="#000000"
                  />
                </svg>
              </template>
              <b-dropdown-item @click="account">
                {{ $t("formHeaderAccountDetails") }}</b-dropdown-item
              >
              <b-dropdown-item @click="overview">{{
                $t("overview")
              }}</b-dropdown-item>
              <b-dropdown-item @click="orderHistory">{{
                $t("orderHistory")
              }}</b-dropdown-item>
              <b-dropdown-item @click="notifications">{{
                $t("notifications")
              }}</b-dropdown-item>
              <b-dropdown-item @click="messages">{{
                $t("messages")
              }}</b-dropdown-item>
              <b-dropdown-item @click="account">{{
                $t("settings")
              }}</b-dropdown-item>
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

              <b-dropdown-item v-b-modal.log-out-modal>{{
                $t("logout")
              }}</b-dropdown-item>
            </b-dropdown>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DashboardTop",
  data() {
    return {
      firstTime: localStorage.newUser == "true" ? true : false,
      index: 0,
      data: [
        {
          heading: this.$t("newUserWelcomeHeading"),
          body: this.$t("newUserWelcomeDescription"),
          img: "dashboard.png",
        },
        {
          heading: this.$t("newUserHistoryPageHeading"),
          body: this.$t("newUserHistoryPageDescription"),
          img: "ordertemplate.png",
        },
        {
          heading: this.$t("newUserOrderTemplateHeading"),
          body: this.$t("newUserOrderTemplateDescription"),
          img: "orderpreview.png",
        },
        {
          heading: this.$t("newUserAccountInformationHeading"),
          body: this.$t("newUserAccountInformationDescription"),
          img: "account.png",
        },
        {
          heading: this.$t("newUserNotificationHeading"),
          body: this.$t("newUserNotificationDescription"),
          img: "",
        },
      ],
    };
  },
  methods: {
    handleClose() {
      this.firstTime = false;
      localStorage.newUser = false;
      this.$bvModal.hide("entry-modal");
    },
    done() {
      this.$bvModal.hide("entry-modal");
    },
    prev() {
      this.index != 0 && this.index--;
      this.changeSlide(this.index, `active-circle${this.index}`);
    },
    next() {
      this.index < 5 && this.index++;
      this.changeSlide(this.index, `active-circle${this.index}`);
    },
    changeSlide(currentIndex, id) {
      var elems = document.querySelectorAll(".active-circle");

      [].forEach.call(elems, function (el) {
        el.classList.remove("active-circle");
      });
      this.index = currentIndex;
      document.getElementById(id).classList.add("active-circle");
    },

    messages() {
      this.$router.push({ path: "/dashboard/messages" }).catch(() => {});
    },
    notifications() {
      this.$router.push({ path: "/dashboard/notifications" }).catch(() => {});
    },
    account() {
      this.$router.push({ path: "/dashboard/account" }).catch(() => {});
    },

    logout() {
      localStorage.clear();
      this.$router.push({ path: "/" });
    },
    overview() {
      this.$router.push({ path: "/dashboard" }).catch(() => {});
    },
    orderHistory() {
      this.$router.push({ path: "/dashboard/order-history" }).catch(() => {});
    },
    toggleView(e) {
      e.preventDefault();
      !this.checked &&
        this.$router
          .push({ path: "/dashboard/order-history/order-template" })
          .catch(() => {});
      this.checked && this.$router.go(-1);
    },
  },
  props: {
    Heading: {
      type: String,
      default: function () {
        return this.$t("dashboardHeading");
      },
    },
    Text: {
      type: String,
      default: function () {
        return this.$t("dashboardDescription");
      },
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.checkbox .custom-control-input:checked ~ .custom-control-label::before {
  border-color: #66cc66 !important;
  background: #66cc66 !important;
}
</style>