<template>
<div dir="ltr">
   <DashboardHeader/>
  <div class="d-flex w-100 min-vh-100">
    <div
      class="d-none w-33 sign-up-image d-lg-flex justify-content-center align-items-center"
    >
      <img
        src="../assets/logo.png"
        width="304"
        height="131"
        class="login-logo"
      />
    </div>
    <div class="w-66 bg-white mt-5">
      <button class="d-flex pt-5 ml-4 ml-lg-5 outline-none d-flex align-items-center justify-content-center"
      @click="$router.go(-1)"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8627 3.225L13.3794 1.75L5.1377 10L13.3877 18.25L14.8627 16.775L8.0877 10L14.8627 3.225Z"
            fill="#8692A6"
          />
        </svg>
        <p class="font-weight-lighter ml-3 mb-0">{{$t('back')}}</p>
      </button>
      <div
        class="w-100 pt-lg-11 text-center flex-column d-flex justify-content-center align-items-center"
      >
        <img
          class="d-block d-lg-none"
          src="../assets/logoDark.png"
          width="158"
          height="80"
        />
        <div class="d-flex flex-column align-items-center justify-content-center">
          <h1 class="fs-30">{{$t('activateYourAccount')}}</h1>
          <p class="font-weight-lighter fs-18 mt-5 w-60">{{$t('activateAccountDescription')}}
          </p>
          <p class="horizontal-line w-60"></p>
          <svg
            width="239"
            height="233"
            viewBox="0 0 239 233"
            fill="none"
            class="my-lg-9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M239 116.5C239 180.841 185.498 233 119.5 233C53.5018 233 0 180.841 0 116.5C0 52.1586 53.5018 0 119.5 0C185.498 0 239 52.1586 239 116.5ZM105.678 178.186L194.339 91.7503C197.349 88.8153 197.349 84.0562 194.339 81.1211L183.436 70.4919C180.425 67.5564 175.544 67.5564 172.532 70.4919L100.226 140.983L66.4675 108.072C63.4569 105.137 58.5752 105.137 55.5641 108.072L44.6612 118.701C41.6506 121.636 41.6506 126.395 44.6612 129.33L94.7741 178.185C97.7852 181.121 102.666 181.121 105.678 178.186Z"
              fill="#17AD49"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import DashboardHeader from '../components/dashboardHeader'
export default {
  name: "Sucessful",
  components:{
    DashboardHeader
  }

};
</script>