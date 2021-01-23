<template>
  <div
    class="px-lg-9 pt-9 min-vh-100 pb-11 px-4 d-flex flex-column justify-content-center align-items-center"
    dir="ltr"
  >
    <div
      class="form-preview d-flex justify-content-center align-items-center p-lg-8 p-5"
    >
      <img src="../assets/Vectorpreview.png" class="w-100" />
    </div>
    <div
      class="d-flex flex-lg-row flex-column w-100 justify-content-around align-items-center mt-5"
    >
      <button class="d-flex align-items-center outline-none"
      @click="$router.go(-1)"
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.25 7H7C6.07174 7 5.1815 7.36875 4.52513 8.02513C3.86875 8.6815 3.5 9.57174 3.5 10.5V35C3.5 35.9283 3.86875 36.8185 4.52513 37.4749C5.1815 38.1313 6.07174 38.5 7 38.5H31.5C32.4283 38.5 33.3185 38.1313 33.9749 37.4749C34.6313 36.8185 35 35.9283 35 35V22.75"
            stroke="#696F79"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32.375 4.37491C33.0712 3.67872 34.0154 3.2876 35 3.2876C35.9846 3.2876 36.9288 3.67872 37.625 4.37491C38.3212 5.0711 38.7123 6.01534 38.7123 6.99991C38.7123 7.98447 38.3212 8.92872 37.625 9.62491L21 26.2499L14 27.9999L15.75 20.9999L32.375 4.37491Z"
            stroke="#404040"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="mb-0 fs-36 ml-4">{{ $t("formPreviewEdit") }}</p>
      </button>
      <button class="d-flex align-items-center outline-none mt-5 mt-lg-0">
        <svg
          width="42"
          height="25"
          viewBox="0 0 42 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 12.1286C1 12.1286 8.27273 1 21 1C33.7273 1 41 12.1286 41 12.1286C41 12.1286 33.7273 23.2572 21 23.2572C8.27273 23.2572 1 12.1286 1 12.1286Z"
            stroke="#404040"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 16.3496C23.7614 16.3496 26 14.4597 26 12.1284C26 9.79712 23.7614 7.90723 21 7.90723C18.2386 7.90723 16 9.79712 16 12.1284C16 14.4597 18.2386 16.3496 21 16.3496Z"
            stroke="#404040"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p class="mb-0 fs-36 ml-4">{{ $t("formPreviewView") }}</p>
      </button>
    </div>
    <div
      class="w-100 d-flex flex-column flex-lg-row justify-content-center mt-8 align-items-center font-weight-bolder"
    >
      <button
        class="btn btn-outline-secondary w-100 text-dark bg-white form-buttons"
        @click="cancelSubmit"
      >
        {{ $t("formPreviewCancel") }}
      </button>
      <button
        class="btn btn-secondary w-100 text-dark ml-lg-4 mt-4 mt-lg-0 form-buttons"
        @click="sendForm"
      >
        {{ $t("formPreviewSend") }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormPreview",
  methods: {
    cancelSubmit() {
      this.$router.push({ path: "/dashboard" });
    },
    sendForm() {
      this.$router.push({ path: "/dashboard/order-form" });
    },
  },
};
</script>