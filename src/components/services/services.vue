<template>
  <div
    class="d-flex align-items-center text-light text-center flex-column mt-5 mt-xl-8"
  >
    <h1 class="font-weight-normal w-60 fs-52" >
      {{ $t("services") }}
    </h1>
    <h4 class="font-weight-normal text-center pt-4 w-30 fs-20" >
      {{ $t("randomHuge") }}
    </h4>
    <div
      class="mt-lg-9 d-flex w-100 justify-content-center align-items-center flex-column flex-lg-row" dir="ltr"
    >
      <div
        class="d-flex mt-5 mt-lg-0 flex-column justify-content-center align-items-center svgContainer"
      >
        <svg
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.4167 7.75H12.5833C9.91396 7.75 7.75 9.91396 7.75 12.5833V46.4167C7.75 49.086 9.91396 51.25 12.5833 51.25H46.4167C49.086 51.25 51.25 49.086 51.25 46.4167V12.5833C51.25 9.91396 49.086 7.75 46.4167 7.75Z"
            stroke="#FFDA90"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24.6667 17.4167H17.4167V39.1667H24.6667V17.4167Z"
            stroke="#FFDA90"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M41.5833 17.4167H34.3333V29.5H41.5833V17.4167Z"
            stroke="#FFDA90"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="font-24">{{$t('servicesProducts')}}</p>
      </div>
      <div
        class="d-flex mt-3 mt-lg-0 ml-lg-3 justify-content-center align-items-center svgContainer flex-column"
      >
        <svg
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.3334 54.25V49.0833C41.3334 46.3428 40.2447 43.7144 38.3068 41.7766C36.3689 39.8387 33.7406 38.75 31 38.75H12.9167C10.1761 38.75 7.54781 39.8387 5.60994 41.7766C3.67206 43.7144 2.58337 46.3428 2.58337 49.0833V54.25"
            stroke="#FFDA90"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.9583 28.4167C27.6653 28.4167 32.2917 23.7903 32.2917 18.0833C32.2917 12.3764 27.6653 7.75 21.9583 7.75C16.2514 7.75 11.625 12.3764 11.625 18.0833C11.625 23.7903 16.2514 28.4167 21.9583 28.4167Z"
            stroke="#FFDA90"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M43.9166 28.4167L49.0833 33.5833L59.4166 23.25"
            stroke="#FFDA90"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="font-24">{{$t('servicesConsultation')}}</p>

      </div>
      <div
        class="d-flex mt-3 mt-lg-0 ml-lg-3 justify-content-center align-items-center svgContainer flex-column"
      >
        <svg
          width="47"
          height="48"
          viewBox="0 0 47 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5 43.5833C34.3155 43.5833 43.0833 34.8156 43.0833 24C43.0833 13.1844 34.3155 4.41666 23.5 4.41666C12.6844 4.41666 3.91663 13.1844 3.91663 24C3.91663 34.8156 12.6844 43.5833 23.5 43.5833Z"
            stroke="#FFDA91"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.5 16.1667V24"
            stroke="#FFDA91"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.5 31.8333H23.5196"
            stroke="#FFDA91"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="font-24">{{$t('servicesInformation')}}</p>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Services",
};
</script>
<style scoped>
.svgContainer {
  width: 280px;
  height: 180px;
  border: 3px solid #ffffff;
}
</style>