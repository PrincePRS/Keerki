<template>
  <div
    class="d-flex justify-content-center align-items-center mt-xl-8 mt-5 w-100"
    dir="ltr"
  >
    <div
      class="d-flex flex-column width-76 justify-content-center align-items-center flex-lg-row border-secondary bg-warning bordered"
    >
      <div class="width-50">
        <img
          src="https://s3-alpha-sig.figma.com/img/d879/2c40/43e06ab6fdbaee0dc45666f2b048ef18?Expires=1611532800&Signature=ExmWMjVUl6YFAjq3mcTGg1Ro1J3ovZWPliW3C6x8C7IZhi2fVJ5bTruE1u-m9MA2mJZOlotes7P6Cc~VVHNEVyTWSgp4vqNDBVF544WSZbaThRaUM6VXhkPYE1dbcvAEd-a70M7vYk79S3ZK18T-jVEErTfgT7Q67JPelJwnqBTD2HmGjuHeJ~7Xsc2fHao4FuyGpXYUGx2MN6PsPAZM5QNUeChA5O9N81aGtWh3xyuelR7Uffsm3jDyq6b9LkKGIifKTdtjPk1~bDgQIR6elsUjo6wBkAU3y6ONjl~YbGgfETtV3YT4oFwC3nnRyYSkmpa5ltW9uhO4nbYRTMoe-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          class="border-primary bannerImage"
        />
      </div>
      <div
        class="d-flex pt-5 pt-lg-0 flex-grow-1 width-50 text-white text-center flex-column justify-content-center align-items-center width-50"
      >
        <h1 class="w-75-resp">{{ $t("containerOffer") }}</h1>
        <router-link to="/dashboard/order-form">
          <b-button
            class="p-3 mt-5 mb-4 btn-width"
            squared
            variant="secondary"
            >{{ $t("tryForFree") }}</b-button
          >
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
};
</script>

<style>

@media (min-width: 992px) {
  .width-117 {
    width: 117px;
  }
  .width-145 {
    width: 145px;
  }
}
.btn-select-table {
  width: 20px !important;
  height: 20px !important;
  border-radius: 3px !important;
}
.h-38 {
  height: 38px !important;
}
.overflow-scroll{
  overflow-y: scroll!important;
  overflow-x:hidden!important;
}
.rating-text-area {
  height: 130px !important;
  border: 1px solid #000000;
  border-radius: 20px;

  background: #eceaea !important;
}
.rating-header {
  border: none !important;
}
.resp-w-75 {
  width: 100%;
}
.btn-inbox {
  height: 36px !important;
  padding: 0 15px;
}
.quick-search {
  height: 46px !important;
  background: #e3e5e8;
}
.send {
  background: #b3d7e7;
  border-radius: 20px 20px 0px 20px;
  min-height: 70px !important;
}
.receive {
  background: #f9eac4;
  border-radius: 20px 20px 20px 0px;
  min-height: 70px !important;
}
.messagesend {
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;

  color: #060607;
}
.send-bar {
  background: #f1f4f5;
  height: 49px !important;
}
.messagebox {
  height: 117px !important;
}

#editor1 {
  min-height: 400px!important;
  border: 0px !important;
  padding-top: 14px;
}
.ql-toolbar.ql-snow {
  border: 0px !important;
  border-bottom: 2px solid #878787 !important;
}

.popover-header {
  border: 0 !important;
  background: #ffffff !important;
}
.popover {
  border-radius: 12px !important;
  border: 2px solid #ffffff !important;
  padding: 20px 10px !important;
}
.arrow::after {
  display: none !important;
  border-color: #ffffff;
}
.arrow::before {
  border-top-color: white !important;
}
.width-25 {
  width: 300px !important;
}

.select-width {
  width: 30% !important;
  border: 1px solid transparent;
  height: 64px !important;
}
.input-width {
  width: 65% !important;
}
.width-83 {
  width: 83% !important;
}
.width-30 {
  width: 30% !important;
}
.bannerImage {
  width: 100%;
  height: 340px;
  border-radius: 33px 0px 0px 33px;
}
.width-76 {
  width: 76% !important;
}
.width-50 {
  width: 50% !important;
}
.w-30 {
  width: 30%;
}
.w-60 {
  width: 60%;
}
.w-48 {
  width: 100% !important;
}
.w-32 {
  width: 100% !important;
}
.w-84 {
  width: 84%;
}
.faded-circle {
  width: 8px;
  height: 8px;
  background: #dedede;
  margin: 16px 0px;
}
.active-circle {
  background: #007bc7 !important;
}
.first-modal-body {
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: #747474;
}
.h-select-200 {
  height: 200px;
  overflow-y: scroll !important;
}
.first-modal-header {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  color: #007bc7;
}
.text-black {
  text-shadow: none !important;
  color: black;
}
.order-card {
  margin-bottom: 40px;
  width: 219px !important;
  height: 219px;
  background: #ffffff;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
}

.catalog-input {
  height: 38px;
  background: #f2f3f7!important;
  border-radius: 6px;
}
.catalog-btn {
  background: #2c5282 !important;
  border-radius: 40px !important;

  margin: 0px 8px;
}
.modal-logout {
  border: 1px solid #ff3a67 !important;
}
.pop-over {
  width: 300px !important;
}
.form-preview {
  background: #ffffff;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
}
.form-buttons {
  max-width: 270px !important;
  height: 70px !important;
  border: 2px solid #eab939 !important;
  border-radius: 16px !important;
}
.rounded-button {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.border-26 {
  border: 1px solid #c8c8c8 !important;
}
.form-file-input {
  background: #ffffff;
  border: 2px solid #c8c8c8;
  border-radius: 16px;
  height: 150px;
}
.input-text-area {
  background: #ffffff !important;
  border-radius: 16px !important;
  height: 226px !important;
  width: 100%;
}
.input-form {
  background: #ffffff !important;
  border-radius: 16px !important;
  height: 66px !important;
  width: 100%;
}
.border-3 {
  border-bottom: 3px solid #1580e3;
}
.form {
  background: #f2f2f2;
}
.z-index-2 {
  z-index: 2 !important;
}
.template-card {
  width: 260px;
  height: 320px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
}
.in-progress {
  background: #fec400;
}
.cancelled {
  background: #f12b2c;
}
.clientCancel {
  background: #888888;
}
.waiting {
  background: #6fa6f6;
}
.done {
  background: #66cc66;
}
.shipped {
  background: #4788e8;
}
.status-button {
  border-radius: 100px !important;
  width: 100px;
  /* padding: 5px 15px!important; */
}
.color-f5 {
  background-color: #f5f5f5 !important;
}
.orders {
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
}
.dismiss-btn {
  background: #f12b2c;
  text-align: center;
  border-radius: 8px;
  min-width: 75px;

  height: 24px;
  color: white;
}
.align-notifications {
  align-items: initial;
}
.active-notification {
  border-left: 5px solid #f12b2c;
}
.notifications-btn {
  width: 124px;
  height: 38px;
  border-radius: 5px;
}
.notifications {
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
}
.modal-button {
  width: 76px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.color-ff {
  background-color: #ffc145;
}
.color-c7 {
  background-color: #c7c9ca;
}
.content-class {
  border-radius: 20px !important;
  border: 1px solid #e3e3e3 !important;
  padding-left: 50px !important;
  padding-right: 50px !important;
}
.header-class {
  display: none !important;
}
.account-card {
  width: 100%;
  height: 219px;
  border-radius: 20px;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
}
.noti-btn {
  background: #f2faff !important;
}
.text-69 {
  color: #696969;
}
.border-radius-13 {
  border-radius: 13.62px !important;
}

.font-12 {
  font-size: 12px;
}
.font-11 {
  font-size: 11px;
  color: #f12b2c;
}
.font-11 {
  font-size: 11px;
}
.fs-11 {
  font-size: 11px;
  color: white;
  font-weight: 700;
  line-height: 13.81px;
}
.fs-14 {
  font-size: 14px !important;
}
.fs-43 {
  font-size: 18px;
}
.fs-13 {
  font-size: 13px;
}
.fs-19 {
  font-size: 19px;
}
.dashboard-card {
  margin-bottom: 40px;
  width: 219px !important;
  height: 219px;
  background: #ffffff;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
}
.dashboard-btn {
  width: 176px !important;
  height: 40px !important;
  outline: none !important;
}
.dashboard-btn:hover{
  border:1px solid black;
  transform: scale(1.1)
}
btn:focus,
a:focus,
btn-secondary:focus {
  outline: none !important;
}
.outline-none {
  outline: none !important;
}
.outline-none:focus {
  outline: none !important;
  box-shadow: 0 0 0 0 rgba(2, 120, 174, 0.25) !important;
}

.separator::before,
.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #bababa;
}
.separator::before {
  margin-right: 0.25em;
}
.separator::after {
  margin-left: 0.25em;
}
.modal-input {
  border: 1px solid transparent;
  height: 36px !important;
}
.form-input {
  border: 1px solid transparent;
  height: 64px !important;
  width: 100% !important;
}
.form-input:focus,
.form-input:hover,
.modal-input:focus,
.modal-input:hover,
.select-width:focus,
.select-width:hover {
  background: #ffffff;
  border: 1px solid #1565d8;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.11);
  border-radius: 6px;
}
.horizontal-line {
  border: 1px solid #f5f5f5;
}
.fs-36 {
  font-size: 36px;
}
.fs-30 {
  font-size: 30px;
}
.fs-18 {
  font-size: 18px !important;
}
.w-66 {
  width: 100%;
}
.w-70 {
  width: 100%;
}
.w-33 {
  width: 45%;
}
.login-logo {
  opacity: 0.7;
}
.sign-up-image {
  background: linear-gradient(
      0deg,
      rgba(2, 120, 174, 0.9),
      rgba(2, 120, 174, 0.9)
    ),
    url("../assets/login.jpeg");
}
.w-152 {
  width: 152px;
}
.galleryImage {
  object-fit: cover;
  border-radius: 12px;
}
.fs-46 {
  font-size: 46px;
}
.fs-16 {
  font-size: 16px !important;
}
.lh-32 {
  line-height: 32px;
}
.border-radius-5 {
  border-radius: 50%;
}

.w-22 {
  width: 21rem;
}
.fs-52 {
  font-size: 52px;
}
.introImage {
  mix-blend-mode: hard-light;
  opacity: 0.9;
}
.btn-width-160 {
  width: 160px;
}
.fs-5 {
  font-size: 5vw;
}
.btn-width-135 {
  min-width: 135px;
}
.fs-28 {
  font-size: 28px !important;
}
.fs-20 {
  font-size: 20px;
}
.font-24 {
  font-size: 24px !important;
}
.fs-24 {
  font-size: 24px;
  color: #696969;
  line-height: 28px;
}
.btn-width {
  width: 224px;
}
@media only screen and (max-width: 576px) {
  .w-84{
    width:100%!important;
  }
  .w-30 {
    width: 80%;
  }
  .width-83 {
    width: 83% !important;
  }
  .width-30 {
    width: 100% !important;
  }
  .bannerImage {
    width: 100%;
    border-radius: 0px;
  }
  .width-76 {
    width: 85% !important;
  }
  .width-50 {
    width: 100% !important;
  }

  .w-21 {
    width: 55%;
  }
  .template-card {
    width: 100%;
  }
  .align-notifications {
    align-items: center;
  }
  .side-bar {
    position: absolute;
    background-color: white;
  }
  .width-100 {
    width: 100%;
  }
  .respImage {
    max-width: 100%;
    border-radius: 0px;
    max-height: 400px;
  }
  .bordered {
    border-radius: 0px;
  }
  .padding {
    width: 65%;
  }
}
@media only screen and (min-width: 576px) and (max-width: 768px) {
  .w-30 {
    width: 60%;
  }
  .width-83 {
    width: 83% !important;
  }
  .width-30 {
    width: 100% !important;
  }

  .bannerImage {
    width: 100%;
    border-radius: 0px;
  }
  .width-76 {
    width: 85% !important;
  }
  .width-50 {
    width: 100% !important;
  }
  .w-21 {
    width: 35%;
  }
  .template-card {
    width: 75%;
  }
  .side-bar {
    position: absolute;
    background-color: white;
  }
  .width-100 {
    width: 100%;
  }
  .respImage {
    max-width: 100%;
    border-radius: 0px;
    max-height: 500px;
  }
  .bordered {
    border-radius: 0px;
  }
  .padding {
    width: 70%;
  }
  .fs-43 {
    font-size: 30px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .w-30 {
    width: 60%;
  }
  .width-83 {
    width: 83% !important;
  }
  .width-30 {
    width: 100% !important;
  }

  .bannerImage {
    width: 100%;
    border-radius: 0px;
  }
  .width-76 {
    width: 85% !important;
  }
  .width-50 {
    width: 100% !important;
  }
  .w-21 {
    width: 35%;
  }
  .template-card {
    width: 400px;
  }
  .account-card {
    width: 50%;
  }
  .side-bar {
    position: absolute;
    background-color: white;
  }
  .width-100 {
    width: 100%;
  }
  .respImage {
    border-radius: 0px;
    max-width: 100%;
    max-height: 650px;
  }
  .bordered {
    border-radius: 0px;
  }
  .padding {
    width: 80%;
  }
  .fs-43 {
    font-size: 35px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .w-30 {
    width: 40%;
  }
  .width-83 {
    width: 65% !important;
  }
  .width-30 {
    width: 50% !important;
  }
  .bannerImage {
    width: 100%;
    height: 330px !important;
  }
  .width-76 {
    width: 76% !important;
  }
  .width-50 {
    width: 50% !important;
  }
  .w-32 {
    width: 32% !important;
  }
  .w-48 {
    width: 49% !important;
  }
  .w-21 {
    width: 25%;
  }
  .template-card {
    width: 220px;
    height: 300px;
  }
  .account-card {
    width: 50%;
  }

  .respImage {
    max-width: 35rem;
    border-radius: 33px 0px 0px 33px;
  }
  .bordered {
    border-radius: 33px;
    width: 100%;
  }
  .w-66 {
    width: 55%;
  }
  .w-70 {
    width: 70%;
  }
  .fs-13 {
    font-size: 16px;
  }
  .fs-43 {
    font-size: 40px;
  }
}
@media only screen and (min-width: 1200px) {
  bannerImage {
    width: 100%;
    height: 300px !important;
  }
  .width-76 {
    width: 76% !important;
  }
  .width-50 {
    width: 50% !important;
  }
  .w-32 {
    width: 32% !important;
  }
  .w-48 {
    width: 49% !important;
  }
  .w-21 {
    width: 21%;
  }
  .account-card {
    width: 490px;
  }

  .respImage {
    max-width: 35rem;
    border-radius: 33px 0px 0px 33px;
  }
  .bordered {
    border-radius: 33px;
    width: 100%;
  }
  .form-input {
    width: 100% !important;
  }
  .w-66 {
    width: 55%;
  }
  .w-70 {
    width: 70%;
  }
  .fs-13 {
    font-size: 16px;
  }
  .fs-43 {
    font-size: 43px;
  }
}
</style>