<template>
  <div class="px-4 px-lg-15">
    <DashboardTop
      :Heading="$t('messagesHeading')"
      :Text="$t('messagesDescription')"
    />
    <div class="d-flex flex-column w-100 p-lg-5 p-1" dir="auto">
      <div class="notifications">
        <div
          class="d-flex px-lg-5 py-lg-4 p-2 flex-column flex-lg-row justify-content-between align-items-center"
        >
          <div class="text-center text-lg-left">
            <h1 class="font-24">{{ $t("openMessages") }}</h1>
            <p class="fs-18 mb-0 font-weight-lighter">
              {{ $t("allMessages") }}
            </p>
          </div>
          <div class="d-flex mt-4 mt-lg-0" dir="ltr">
            <button
              class="notifications-btn bg-primary border border-primary text-light"
            >
              {{ $t("messagesOpen") }}
            </button>
            <button
              class="notifications-btn btn-outline-primary border border-primary ml-2"
            >
              {{ $t("messagesClosed") }}
            </button>
          </div>
        </div>
        <button
          class="border-top d-flex flex-column flex-lg-row notification-hover w-100 outline-none"
          @click="inbox"
        >
          <div class="active-notification py-lg-4 py-2 w-100">
            <div
              class="d-flex w-100 flex-column flex-sm-row justify-content-between px-3 px-lg-0 align-notifications align-items-lg-center"
            >
              <div class="px-lg-5 text-center text-sm-left">
                <h1 class="fs-18 font-weight-light">
                  {{ $t("orderTypeNumber") }}
                </h1>
                <div class="d-flex w-100 justify-content-between">
                  <p class="mb-0 font-weight-lighter ml-2 ml-lg-0">
                    {{ $t("message1Minute") }}
                  </p>
                  <p class="mb-0 btn text-primary ml-lg-5 ml-3 p-0">
                    {{ $t("messageReply") }}
                  </p>
                </div>
              </div>
              <div class="px-5 mt-2 mt-lg-0">
                <button
                  class="dismiss-btn px-15 py-2 d-flex justify-content-center align-items-center"
                >
                  2
                </button>
              </div>
            </div>
          </div>
        </button>
        <button
          class="border-bottom border-top d-flex flex-column flex-lg-row notification-hover w-100 outline-none"
          @click="inbox"
        >
          <div class="active-notification py-lg-4 py-2 w-100">
            <div
              class="d-flex w-100 flex-column flex-sm-row justify-content-between px-3 px-lg-0 align-notifications align-items-lg-center"
            >
              <div class="px-lg-5 text-center text-sm-left">
                <h1 class="fs-18 font-weight-light">
                  {{ $t("messageSubject") }}
                </h1>
                <div class="d-flex w-100 justify-content-between">
                  <p class="mb-0 font-weight-lighter ml-2 ml-lg-0">
                    {{ $t("message1Minute") }}
                  </p>
                  <p class="btn mb-0 text-primary ml-16 p-0">
                    {{ $t("messageReply") }}
                  </p>
                </div>
              </div>
              <div class="px-5 mt-2 mt-lg-0">
                <button
                  class="dismiss-btn px-15 py-2 d-flex justify-content-center align-items-center"
                >
                  5
                </button>
              </div>
            </div>
          </div>
        </button>
      
      
        <button
          class="border-bottom mb-5 mb-md-9 d-flex flex-column flex-lg-row notification-hover w-100 outline-none"
          @click="inbox"
        >
          <div class="active-notification py-lg-4 py-2 w-100">
            <div
              class="d-flex w-100 flex-column flex-sm-row justify-content-between px-3 px-lg-0 align-notifications align-items-lg-center"
            >
              <div class="px-lg-5 text-center text-sm-left">
                <h1 class="fs-18 font-weight-light">
                  {{ $t("orderTypeNumber") }}
                </h1>
                <div class="d-flex w-100 justify-content-between">
                  <p class="mb-0 font-weight-lighter ml-2 ml-lg-0">
                    {{ $t("message1Minute") }}
                  </p>

                  <p class="mb-0 text-primary ml-lg-4 ml-3 p-0 btn">
                    {{ $t("messageReply") }}
                  </p>
                </div>
              </div>
              <div class="px-5 mt-2 mt-lg-0">
                <button
                  class="dismiss-btn px-15 py-2 d-flex justify-content-center align-items-center"
                >
                  1
                </button>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div
        class="d-none d-lg-flex align-items-center justify-content-end text-dark w-100 mt-lg-4"
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
        <p class="mb-0 ml-2">Help</p>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardTop from "./dashboardTop";
export default {
  name: "Messages",
  components: {
    DashboardTop,
  },
  methods: {
    inbox() {
      this.$router.push("/dashboard/inbox");
    },
  },
};
</script>