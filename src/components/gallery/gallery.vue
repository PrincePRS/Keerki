<template>
  <div
    class="d-flex mt-5 mt-lg-6 flex-column justify-content-center text-white text-center align-items-center"
    dir="ltr"
  >
    <h1 class="font-weight-normal w-60 fs-46">
      {{ $t("gallery") }}
    </h1>
    <h4 class="font-weight-normal pt-4 w-30 fs-20">
      {{ $t("galleryText") }}
    </h4>
    <div
      class="d-flex flex-column flex-lg-row w-100 justify-content-center align-items-center mt-11"
    >
      <div>
        <img
          src="../../assets/Rectang1.png"
          width="225"
          height="285"
          class="border-primary galleryImage"
        />
      </div>
      <div class="ml-lg-3 mt-5 mt-lg-0">
        <img
          src="../../assets/r2.png"
          width="225"
          height="285"
          class="border-primary galleryImage"
        />
      </div>
      <div class="ml-lg-3 mt-5 mt-lg-0">
        <img
          src="../../assets/r3.png"
          width="225"
          height="285"
          class="border-primary galleryImage"
        />
      </div>
      <div class="ml-lg-3 mt-5 mt-lg-0">
        <img
          src="../../assets/r4.png"
          width="225"
          height="285"
          class="border-primary galleryImage"
        />
      </div>
    </div>
    <div
      class="d-flex justify-content-center align-items-center flex-column flex-lg-row mt-5 w-100"
    >
      <div>
        <img
          src="../../assets/r5.png"
          width="350px"
          height="285px"
          class="border-primary galleryImage"
        />
      </div>
      <div class="ml-lg-4 mt-5 mt-lg-0">
        <img
          src="../../assets/r6.png"
          width="225px"
          height="285px"
          class="border-primary galleryImage"
        />
      </div>
      <div class="ml-lg-4 mt-5 mt-lg-0">
        <img
          src="../../assets/r7.png"
          width="350px"
          height="285px"
          class="border-primary galleryImage"
        />
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center w-100 mt-5">
      <b-button class="py-3 w-152" squared variant="outline-light">{{
        $t("seeMore")
      }}</b-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gallery",
};
</script>