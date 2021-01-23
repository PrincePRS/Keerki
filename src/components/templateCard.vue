<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center mt-4 mx-md-4"
  >
    <div class="template-card p-15">
      <CustomAlert
        v-bind:alert="200"
        v-bind:type="this.name"
        v-bind:color="this.color"
      />
      <div class="d-flex w-100 p-15 align-items-center justify-content-center">
        <svg
          width="154"
          height="218"
          viewBox="0 0 154 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M72.9495 109.043C70.9443 102.23 70.9844 89.0734 72.1474 89.0734C75.5161 89.0734 75.1953 104.785 72.9495 109.043ZM72.2677 129.139C69.1797 137.74 65.3297 147.576 60.8781 155.836C68.2172 152.855 76.5187 148.512 86.1036 146.511C81.0104 142.424 76.1177 136.548 72.2677 129.139ZM34.5297 182.277C34.5297 182.618 39.8234 179.978 48.526 165.161C45.8391 167.843 36.8557 175.592 34.5297 182.277ZM99.4583 68.125H154V207.781C154 213.444 149.709 218 144.375 218H9.625C4.29115 218 0 213.444 0 207.781V10.2188C0 4.55586 4.29115 0 9.625 0H89.8333V57.9062C89.8333 63.5266 94.1646 68.125 99.4583 68.125ZM96.25 141.274C88.2292 136.08 82.8953 128.927 79.1255 118.367C80.9302 110.49 83.7776 98.5258 81.612 91.032C79.7271 78.5141 64.6078 79.7488 62.4422 88.1367C60.437 95.9285 62.2818 106.914 65.6906 120.922C61.0385 132.673 54.1807 148.427 49.3281 157.454C49.288 157.454 49.288 157.496 49.2479 157.496C38.3797 163.415 19.7313 176.444 27.3911 186.45C29.637 189.387 33.8078 190.707 36.0135 190.707C43.1922 190.707 50.3307 183.043 60.5172 164.394C70.8641 160.775 82.2135 156.262 92.1995 154.516C100.902 159.54 111.089 162.819 117.866 162.819C129.577 162.819 130.379 149.194 125.767 144.34C120.192 138.549 103.99 140.21 96.25 141.274ZM151.193 44.707L111.891 2.98047C110.086 1.06445 107.64 0 105.073 0H102.667V54.5H154V51.9027C154 49.2203 152.997 46.623 151.193 44.707ZM121.476 153.409C123.12 152.259 120.473 148.342 104.311 149.577C119.19 156.304 121.476 153.409 121.476 153.409Z"
            fill="#4379A7"
            fill-opacity="0.47"
          />
        </svg>
      </div>
    </div>
    <button
      class="d-flex justify-content-center align-items-center w-100 outline-none fs-24 mt-3"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="mr-3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7 10L12 15L17 10"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 15V3"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {{ $t("orderDownload") }}
    </button>
  </div>
</template>
<script>
import CustomAlert from "../components/customAlert";
export default {
  name: "TemplateCard",
  components: {
    CustomAlert,
  },
  props: {
    name: {
      type: String,
      default: "WAITING",
    },
    color: {
      type: String,
      default: "waiting",
    },
  },
};
</script>