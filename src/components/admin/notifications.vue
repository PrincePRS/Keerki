<template>
  <div class="w-90 pt-9 min-vh-100">
    <div
      class="w-100 notifications-cont pt-4 pb-11 flex-column d-flex justify-content-center align-items-center"
    >
      <div
        class="d-flex w-100 justify-content-center border-bottom align-items-center"
      >
        <div
          class="d-flex w-90 justify-content-between flex-lg-row flex-column align-items-center"
        >
          <div class="text-center text-lg-left">
            <h1 class="font-24">
              {{ $t("adminNotificationsAllNotifications") }}
            </h1>
            <p class="fs-18 text-muted font-weight-light">
              {{ $t("adminNotificationsNewOrders") }}
            </p>
          </div>
          <div
            class="d-flex width-25 justify-content-between align-items-center"
          >
            <button class="notifications-btn btn-admin-top text-white">
              {{ $t("adminNotificationsUnRead") }}
            </button>
            <button class="btn-admin-top border btn">
              {{ $t("adminNotificationsRead") }}
            </button>
          </div>
        </div>
      </div>
      <div
        class="w-100 notification-hover admin-notification-unread border-bottom py-15 d-flex justify-content-center align-items-center"
      >
        <div
          class="d-flex justify-content-between w-90 flex-column flex-sm-row align-items-center"
        >
          <div class="w-90">
            <h1 class="fs-18 font-weight-normal">Saudia Arabia</h1>
            <div
              class="width-25 d-flex justify-content-between align-items-center"
            >
              <p class="mb-0 font-weight-lighter">1 minute ago</p>
              <p class="text-primary mb-0">
                {{ $t("adminNotificationsViewOrder") }}
              </p>
            </div>
          </div>
          <div>
            <button class="admin-dismiss-btn text-white mt-4 mt-lg-0">
              {{ $t("adminNotificationsDismiss") }}
            </button>
          </div>
        </div>
      </div>
      <div
        class="w-100 notification-hover admin-notification-unread border-bottom py-15 d-flex justify-content-center align-items-center"
      >
        <div
          class="d-flex justify-content-between w-90 flex-column flex-sm-row align-items-center"
        >
          <div class="w-90">
            <h1 class="fs-18 font-weight-normal">New Order from Hedi</h1>
            <div
              class="width-25 d-flex justify-content-between align-items-center"
            >
              <p class="mb-0 font-weight-lighter">1 minute ago</p>
              <p class="text-primary mb-0">
                {{ $t("adminNotificationsViewOrder") }}
              </p>
            </div>
          </div>
          <div>
            <button class="admin-dismiss-btn text-white mt-4 mt-lg-0">
              {{ $t("adminNotificationsDismiss") }}
            </button>
          </div>
        </div>
      </div>
      <div
        class="w-100 notification-hover admin-notification-unread border-bottom py-15 d-flex justify-content-center align-items-center"
      >
        <div
          class="d-flex justify-content-between w-90 flex-column flex-sm-row align-items-center"
        >
          <div class="w-90">
            <h1 class="fs-18 font-weight-normal">Chair Order</h1>
            <div
              class="width-25 d-flex justify-content-between align-items-center"
            >
              <p class="mb-0 font-weight-lighter">1 minute ago</p>
              <p class="text-primary mb-0">
                {{ $t("adminNotificationsViewOrder") }}
              </p>
            </div>
          </div>
          <div>
            <button class="admin-dismiss-btn text-white mt-4 mt-lg-0">
              {{ $t("adminNotificationsDismiss") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminNotifications",
};
</script>
<style scoped>
.admin-dismiss-btn {
  background: #f12b2c;
  border-radius: 8px;
  width: 74px;
  height: 24px;
}
.admin-notification-unread {
  border-left: 4px solid #245aab;
}
.btn-admin-top {
  height: 38px !important;
  width: 124px;
}
.notifications-btn {
  background: #29cc97;
  border: 1px solid #29cc97;
  border-radius: 5px;
}
.notifications-cont {
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
}
</style>