<template>
  <div
    class="d-flex align-items-center text-light text-center flex-column mt-5 mt-xl-8"
  >
    <h1 class="font-weight-normal w-30 fs-52">
      {{ $t("partners") }}
    </h1>
    <h4 class="font-weight-normal pt-2 w-60 fs-20">
      {{ $t("partnerText") }}
    </h4>
    <div
      class="mt-lg-11 d-none d-lg-flex w-56 justify-content-around align-items-center flex-column flex-lg-row"
    >
      <div class="mt-11 mt-lg-0">
        <img src="../../assets/logos_apple-app-storeapple.png" />
      </div>
      <div class="mt-5 mt-lg-0">
        <img src="../../assets/logos_apiaryapiary.png" />
      </div>
      <div class="mt-5 mt-lg-0">
        <img src="../../assets/logos_android-iconandroid.png" />
      </div>
      <div class="mt-5 mt-lg-0">
        <img src="../../assets/logos_basecampbasecamp.png" />
      </div>
      <div class="mt-5 mt-lg-0">
        <img src="../../assets/logos_airbnbairbnb.png" />
      </div>
      <div class="mt-5 mt-lg-0">
        <img src="../../assets/logos_ibmibm.png" />
      </div>
    </div>

    <div class="mt-11 d-lg-none w-56">
      <Carousel
        :scrollPerPage="false"
        :paginationEnabled="true"
        :navigationEnabled="true"
        paginationColor="white"
        paginationActiveColor="#99ff66"
        navigationNextLabel="<p class='font-24 font-weight-bold text-white'>></p>"
        navigationPrevLabel="<p class='font-24 font-weight-bold text-white'><</p>"
        :perPage="3"
        :isTouch="true"
      >
        <Slide>
          <img src="../../assets/logos_apple-app-storeapple.png" class="pt-11" />
        </Slide>
        <Slide>
          <img src="../../assets/logos_apiaryapiary.png" class="pt-11" />
        </Slide>
        <Slide>
          <img src="../../assets/logos_android-iconandroid.png" class="pt-11" />
        </Slide>
        <Slide>
          <img src="../../assets/logos_basecampbasecamp.png" class="pt-11" />
        </Slide>
        <Slide>
          <img src="../../assets/logos_apiaryapiary.png"  class="pt-11"/>
        </Slide>
        <Slide>
          <img src="../../assets/logos_ibmibm.png"  class="pt-11"/>
        </Slide>
      </Carousel>
    </div>
    <b-button
      class="ml-lg-3 mt-4 py-2 mt-lg-11 btn-width-135"
      squared
      variant="outline-light"
      >{{ $t("partnerBtn") }}</b-button
    >
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "Partners",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>