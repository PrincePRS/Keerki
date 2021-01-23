<template>
  <div class="px-4 px-lg-15">
    <DashboardTop
      :Heading="$t('dashboardHeading')"
      :Text="$t('dashboardDescription')"
    />
    <div class="d-flex flex-column">
      <div class="d-flex flex-column flex-xl-row">
        <div
          class="d-flex justify-content-around align-items-center flex-wrap pt-lg-9 pt-11 px-0 w-100"
        >
          <DashboardCard
            v-bind:title="`${$t('overViewOrderHistory')}`"
            v-bind:footer="`${$t('cardClickHere')}`"
            v-on:click.native="orderHistory"
          />
          <DashboardCard
            v-bind:title="`${$t('overViewNotification')}`"
            v-bind:footer="`${$t('cardClickHere')}`"
            v-on:click.native="notification"
            icon="<svg width='37' height='41' viewBox='0 0 37 41' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M18.5 41C21.417 41 23.7832 38.7058 23.7832 35.875H13.2168C13.2168 38.7058 15.583 41 18.5 41ZM36.2889 29.0115C34.6932 27.3491 31.7076 24.8482 31.7076 16.6562C31.7076 10.4342 27.2082 5.45332 21.1412 4.23133V2.5625C21.1412 1.14752 19.9585 0 18.5 0C17.0415 0 15.8588 1.14752 15.8588 2.5625V4.23133C9.79181 5.45332 5.29236 10.4342 5.29236 16.6562C5.29236 24.8482 2.30677 27.3491 0.711149 29.0115C0.215614 29.528 -0.00407235 30.1454 5.71011e-05 30.75C0.00914189 32.0633 1.07206 33.3125 2.65116 33.3125H34.3488C35.9279 33.3125 36.9917 32.0633 36.9999 30.75C37.0041 30.1454 36.7844 29.5272 36.2889 29.0115Z' fill='#F8964C'/></svg>"
          />
        </div>
        <div
          class="d-flex justify-content-around align-items-center flex-wrap pt-xl-9 pt-lg-0 px-0 w-100"
        >
          <DashboardCard
            v-bind:title="`${$t('overViewAccount')}`"
            v-bind:footer="`${$t('cardClickHere')}`"
            v-on:click.native="account"
            icon='<svg width="39" height="43" viewBox="0 0 39 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.5 24.1875C25.5557 24.1875 30.4688 18.7705 30.4688 12.0938C30.4688 5.41699 25.5557 0 19.5 0C13.4443 0 8.53125 5.41699 8.53125 12.0938C8.53125 18.7705 13.4443 24.1875 19.5 24.1875ZM29.25 26.875H25.0529C23.3619 27.7316 21.4805 28.2188 19.5 28.2188C17.5195 28.2188 15.6457 27.7316 13.9471 26.875H9.75C4.36465 26.875 0 31.6873 0 37.625V38.9688C0 41.1943 1.6377 43 3.65625 43H35.3438C37.3623 43 39 41.1943 39 38.9688V37.625C39 31.6873 34.6354 26.875 29.25 26.875Z" fill="#20A044"/>
      </svg>'
          />
          <DashboardCard
            v-bind:title="`${$t('overViewOrderForm')}`"
            v-bind:footer="`${$t('cardClickHere')}`"
            v-on:click.native="form"
            icon='<svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.25 5.5H21.25L16.25 0H3.75C1.67891 0 0 1.8468 0 4.125V28.875C0 31.1532 1.67891 33 3.75 33H36.25C38.3211 33 40 31.1532 40 28.875V9.625C40 7.3468 38.3211 5.5 36.25 5.5ZM28.75 19.9375C28.75 20.6972 28.1906 21.3125 27.5 21.3125H21.875V27.5C21.875 28.2597 21.3156 28.875 20.625 28.875H19.375C18.6844 28.875 18.125 28.2597 18.125 27.5V21.3125H12.5C11.8094 21.3125 11.25 20.6972 11.25 19.9375V18.5625C11.25 17.8028 11.8094 17.1875 12.5 17.1875H18.125V11C18.125 10.2403 18.6844 9.625 19.375 9.625H20.625C21.3156 9.625 21.875 10.2403 21.875 11V17.1875H27.5C28.1906 17.1875 28.75 17.8028 28.75 18.5625V19.9375Z" fill="#FFC107"/>
      </svg>'
          />
        </div>
      </div>
      <button
        class="text-dark align-self-end mt-9 mb-5"
        id="popover-order-message1"
      >
        <b-popover
          target="popover-order-message1"
          triggers="hover"
          placement="top"
          custom-class="border"
        >
          <p>
            {{ $t("adminOrdersDetailsAnyIssue") }}
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <button
              class="btn rounded-pill btn-primary border"
              v-b-modal.send-message-modal
            >
              {{ $t("adminOrdersDetailsSendAMessage") }}
            </button>
          </div>
        </b-popover>
        <b-modal
          id="send-message-modal"
          centered
          hide-footer
          content-class="content-class"
          header-class="header-class"
          hide-header
          size="lg"
          hide-header-close
        >
          <div>
            <p>{{ $t("adminOrdersEnquiry") }}</p>
            <div class="modal-orders p-2">
              <input
                class="bg-transparent w-100 outline-none"
                :placeholder="`${$t('adminOrdersDetailsWriteQuestion')}`"
              />
              <div
                class="d-flex justify-content-end align-items-center pt-9 pt-lg-5"
              >
                <div
                  class="d-flex justify-content-around align-items-center w-xl-35"
                >
                  <button
                    class="order-color-c7 btn outline-none border rounded-pill modal-order-btn"
                    @click="$bvModal.hide('send-message-modal')"
                  >
                    {{ $t("adminOrdersDetailsCancel") }}
                  </button>

                  <button
                    class="btn-primary btn outline-none border rounded-pill modal-order-btn"
                    @click="$bvModal.hide('send-message-modal')"
                  >
                    {{ $t("adminOrdersDetailsSubmit") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </b-modal>

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
      </button>
    </div>
  </div>
</template>
<script>
import DashboardCard from "../components/dashboardCard";
import DashboardTop from "../components/dashboardTop";

export default {
  name: "DashboardOverview",
  components: {
    DashboardCard,
    DashboardTop,
  },
  methods: {
    orderHistory() {
      this.$router.push({ path: "/dashboard/order-history" }).catch(() => {});
    },
    notification() {
      this.$router.push({ path: "/dashboard/notifications" }).catch(() => {});
    },
    account() {
      this.$router.push({ path: "/dashboard/account" }).catch(() => {});
    },
    form() {
      this.$router.push({ path: "/dashboard/order-form" }).catch(() => {});
    },
  },
};
</script>

