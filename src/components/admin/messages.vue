<template>
  <div class="d-flex justify-content-center w-100 mt-9 align-items-center">
    <div
      class="admin-messages-cont w-90 d-flex flex-column py-5 align-items-center"
    >
      <div
        class="width-50 align-self-start d-flex justify-content-around align-items-center"
      >
        <button
          class="pb-3 px-2 outline-none border-bottom-open fs-16 font-weight-bold"
        >
          {{ $t("adminMessagesOpen") }}
        </button>
        <button
          class="btn btn-outline-primary outline-none fs-16 border"
          disabled
        >
          {{ $t("adminMessagesPending") }}
        </button>
        <button
          class="btn btn-outline-primary outline-none fs-16 border"
          disabled
        >
          {{ $t("adminMessagesResolve") }}
        </button>
        <button class="btn btn-outline-primary outline-none fs-16 border">
          {{ $t("adminMessagesClose") }}
        </button>
      </div>
      <div class="w-100 pt-5">
        <button
          class="outline-none notification-hover p-0 m-0 w-100 border d-flex justify-content-center flex-column align-items-center"
          @click="inbox"
        >
          <div
            class="w-100 border-left-yellow py-3 d-flex flex-column flex-lg-row justify-content-center align-items-center"
          >
            <div class="w-90 d-flex justify-content-between align-items-center">
              <div class="w-50">
                <div
                  class="d-flex justify-content-between w-30-resp align-items-center"
                >
                  <div
                    class="profile-circle d-flex justify-content-center align-items-center rounded-circle"
                  >
                    <img
                      src="../../assets/adminSettings.png"
                      class="w-100 rounded-circle"
                    />
                  </div>

                  <p class="mb-0 fs-14">Lorem Ipsum</p>
                </div>
              </div>
              <div
                class="w-50 d-flex justify-content-between flex-column flex-lg-row align-items-end"
              >
                <p class="text-muted mb-0 w-75 text-right text-lg-center">
                  {{ $t("adminMessagesOpen") }}
                </p>

                <p class="text-muted mb-0 text-right mt-11 mt-lg-0">
                  Yesterday at 4:32am
                </p>
              </div>
            </div>
          </div>
        </button>
        <button
          class="outline-none w-100 p-0 m-0 mt-2  notification-hover border d-flex justify-content-center flex-column align-items-center"
          @click="inbox"
        >
          <div
            class="w-100 border-left-yellow py-3 d-flex flex-column flex-lg-row justify-content-center align-items-center"
          >
            <div class="w-90 d-flex justify-content-between align-items-center">
              <div class="w-50">
                <div
                  class="d-flex justify-content-between w-30-resp align-items-center"
                >
                  <div
                    class="profile-circle d-flex justify-content-center align-items-center rounded-circle"
                  >
                    <img
                      src="../../assets/adminSettings.png"
                      class="w-100 rounded-circle"
                    />
                  </div>

                  <p class="mb-0 fs-14">Lorem Ipsum</p>
                </div>
              </div>
              <div
                class="w-50 d-flex justify-content-between flex-column flex-lg-row align-items-end"
              >
                <p class="text-muted mb-0 w-75 text-right text-lg-center">
                  {{ $t("adminMessagesOpen") }}
                </p>

                <p class="text-muted mb-0 text-right mt-11 mt-lg-0">
                  Yesterday at 4:32am
                </p>
              </div>
            </div>
          </div>
        </button>
        <button
          class="outline-none notification-hover p-0 m-0 w-100 mt-2 border d-flex justify-content-center flex-column align-items-center"
          @click="inbox"
        >
          <div
            class="w-100 border-left-yellow py-3 d-flex flex-column flex-lg-row justify-content-center align-items-center"
          >
            <div class="w-90 d-flex justify-content-between align-items-center">
              <div class="w-50">
                <div
                  class="d-flex justify-content-between w-30-resp align-items-center"
                >
                  <div
                    class="profile-circle d-flex justify-content-center align-items-center rounded-circle"
                  >
                    <img
                      src="../../assets/adminSettings.png"
                      class="w-100 rounded-circle"
                    />
                  </div>

                  <p class="mb-0 fs-14">Lorem Ipsum</p>
                </div>
              </div>
              <div
                class="w-50 d-flex justify-content-between flex-column flex-lg-row align-items-end"
              >
                <p class="text-muted mb-0 w-75 text-right text-lg-center">
                  {{ $t("adminMessagesOpen") }}
                </p>

                <p class="text-muted mb-0 text-right mt-11 mt-lg-0">
                  Yesterday at 4:32am
                </p>
              </div>
            </div>
          </div>
        </button>
        <button
          class="outline-none notification-hover p-0 m-0 w-100 mt-2 border d-flex justify-content-center flex-column align-items-center"
          @click="inbox"
        >
          <div
            class="w-100 border-left-yellow py-3 d-flex flex-column flex-lg-row justify-content-center align-items-center"
          >
            <div class="w-90 d-flex justify-content-between align-items-center">
              <div class="w-50">
                <div
                  class="d-flex justify-content-between w-30-resp align-items-center"
                >
                  <div
                    class="profile-circle d-flex justify-content-center align-items-center rounded-circle"
                  >
                    <img
                      src="../../assets/adminSettings.png"
                      class="w-100 rounded-circle"
                    />
                  </div>

                  <p class="mb-0 fs-14">Lorem Ipsum</p>
                </div>
              </div>
              <div
                class="w-50 d-flex justify-content-between flex-column flex-lg-row align-items-end"
              >
                <p class="text-muted mb-0 w-75 text-right text-lg-center">
                  {{ $t("adminMessagesOpen") }}
                </p>

                <p class="text-muted mb-0 text-right mt-11 mt-lg-0">
                  Yesterday at 4:32am
                </p>
              </div>
            </div>
          </div>
        </button>
        <button
          class="outline-none notification-hover p-0 m-0 w-100 mt-2 border d-flex justify-content-center flex-column align-items-center"
          @click="inbox"
        >
          <div
            class="w-100 border-left-yellow py-3 d-flex flex-column flex-lg-row justify-content-center align-items-center"
          >
            <div class="w-90 d-flex justify-content-between align-items-center">
              <div class="w-50">
                <div
                  class="d-flex justify-content-between w-30-resp align-items-center"
                >
                  <div
                    class="profile-circle d-flex justify-content-center align-items-center rounded-circle"
                  >
                    <img
                      src="../../assets/adminSettings.png"
                      class="w-100 rounded-circle"
                    />
                  </div>

                  <p class="mb-0 fs-14">Lorem Ipsum</p>
                </div>
              </div>
              <div
                class="w-50 d-flex justify-content-between flex-column flex-lg-row align-items-end"
              >
                <p class="text-muted mb-0 w-75 text-right text-lg-center">
                  {{ $t("adminMessagesOpen") }}
                </p>

                <p class="text-muted mb-0 text-right mt-11 mt-lg-0">
                  Yesterday at 4:32am
                </p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminMessages",
  methods: {
    inbox() {
      this.$router.push({ path: "inbox" }).catch(() => {});
    },
  },
};
</script>
<style scoped>
.w-30-resp {
  width: 100% !important;
}
.border-left-yellow {
  border-left: 7px solid #ffe663;
}
.admin-messages-cont {
  background: #ffffff;
  border-radius: 10px;
}
.border-bottom-open {
  border-bottom: 2px solid#267CB2;
}
.profile-circle {
  width: 49px;
  height: 49px;
  border: 1.5px solid #dfe0eb;
}
@media (min-width: 576px) and (max-width: 768px) {
  .w-30-resp {
    width: 55% !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .w-30-resp {
    width: 50% !important;
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .w-30-resp {
    width: 45% !important;
  }
}
@media (min-width: 1200px) {
  .w-30-resp {
    width: 30% !important;
  }
}
</style>