<template>
  <div
    :class="
      'w-90 mb-2 setting-alert d-flex justify-content-between align-items-center px-3 ' +
      type
    "
  >
    <div
      class="d-flex flex-column flex-sm-row align-items-center justify-content-center"
    >
      <svg
        v-if="type === 'Success'"
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M46 23C46 35.7026 35.7026 46 23 46C10.2974 46 0 35.7026 0 23C0 10.2974 10.2974 0 23 0C35.7026 0 46 10.2974 46 23ZM20.3396 35.1783L37.4041 18.1138C37.9836 17.5343 37.9836 16.5948 37.4041 16.0153L35.3056 13.9169C34.7262 13.3373 33.7866 13.3373 33.2071 13.9169L19.2903 27.8335L12.7929 21.3361C12.2135 20.7567 11.2739 20.7567 10.6944 21.3361L8.59588 23.4346C8.01643 24.014 8.01643 24.9536 8.59588 25.5331L18.241 35.1782C18.8206 35.7578 19.7601 35.7578 20.3396 35.1783Z"
          fill="#29A87C"
        />
      </svg>
      <svg
        v-else
        width="39"
        height="38"
        viewBox="0 0 39 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.5611 32.6572C39.8108 35.0318 38.2421 38 35.7459 38H3.25367C0.752733 38 -0.808756 35.0272 0.438566 32.6572L16.6849 1.78014C17.9353 -0.595531 21.067 -0.591226 22.3151 1.78014L38.5611 32.6572ZM19.5 26.2734C17.7799 26.2734 16.3854 27.802 16.3854 29.6875C16.3854 31.573 17.7799 33.1016 19.5 33.1016C21.2201 33.1016 22.6146 31.573 22.6146 29.6875C22.6146 27.802 21.2201 26.2734 19.5 26.2734ZM16.543 14.0017L17.0452 24.0954C17.0687 24.5677 17.425 24.9375 17.8565 24.9375H21.1435C21.575 24.9375 21.9313 24.5677 21.9548 24.0954L22.457 14.0017C22.4824 13.4915 22.1119 13.0625 21.6458 13.0625H17.3542C16.8881 13.0625 16.5176 13.4915 16.543 14.0017Z"
          fill="#F8A72D"
        />
      </svg>

      <div
        class="d-flex flex-column px-sm-4 mt-2 justify-content-center text-center text-sm-left"
      >
        <p class="mb-0">{{ title }}</p>
        <p class="mb-0 fs-14 font-weight-light">{{ text }}</p>
      </div>
    </div>
    <button class="align-self-start outline-none" @click="closeAlert">x</button>
  </div>
</template>
<script>
export default {
  name: "SettingsAlert",
  methods: {
    closeAlert() {
      if (this.type == "Success") {
        document.getElementById("alertSuccess").classList.toggle("d-none");
      } else {
        document.getElementById("alertWarning").classList.toggle("d-none");
      }
    },
  },
  props: {
    title: {
      type: String,
      default: "Account was activated it successfully",
    },
    text: {
      type: String,
      default: "Account has been reactivated",
    },
    type: {
      type: String,
      default: "Success",
    },
  },
};
</script>
<style>
.setting-alert {
  height: 67px;
}
@media (max-width: 576px) {
  .setting-alert {
    height: 150px;
  }
}
.Success {
  background: rgba(201, 223, 212, 0.47);
  border: 1px solid #29a87c;
  border-radius: 5px;
}
.Warning {
  background: rgba(255, 216, 139, 0.22);
  border: 1px solid #f8a72d;
  border-radius: 5px;
}
</style>