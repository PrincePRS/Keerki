<template>
  <div class="pt-9 w-95" dir="ltr">
    <div
      class="admin-chart d-flex flex-column flex-lg-row justify-content-around align-items-center"
    >
      <div class="py-4 d-flex justify-content-center align-items-center w-75">
        <div class="w-90">
          <div class="text-center text-lg-left">
            <p class="font-24 mb-0 font-weight-bolder">
              {{ $t("adminRecent") }}
            </p>
            <div
              class="d-flex justify-content-between flex-column flex-lg-row align-items-center"
            >
              <p class="w-75 fs-16 font-weight-lighter mb-0">
                as of 05 December 2020, 09:41 PM
              </p>
              <div
                class="d-flex w-50 flex-lg-row justify-content-around align-items-center flex-column"
              >
                <div
                  class="d-flex w-25 justify-content-between align-items-center"
                >
                  <span class="blue-border px-3"> </span>
                  <p class="mb-0 fs-12 font-weight-lighter">
                    {{ $t("adminToday") }}
                  </p>
                </div>
                <div
                  class="d-flex w-25 justify-content-between align-items-center"
                >
                  <span class="border-top px-3"> </span>
                  <p class="mb-0 fs-12 font-weight-lighter">
                    {{ $t("adminYesterday") }}
                  </p>
                </div>
              </div>
            </div>
            <!-- <img src="../../assets/graph.png" class="w-100 pt-5" /> -->
            <DashboardChart />
          </div>
        </div>
      </div>
      <div
        class="graph-side-cards right-border-graph d-none d-lg-flex flex-column justify-content-between align-items-center"
      >
        <div
          class="w-100 d-flex flex-column align-items-center graph-card justify-content-center border-bottom"
        >
          <p class="fs-16 font-weight-light">{{ $t("adminNoOfOrders") }}</p>
          <h1 class="font-24 font-weight-bold">449</h1>
        </div>
        <div
          class="w-100 d-flex flex-column align-items-center graph-card justify-content-center border-bottom"
        >
          <p class="fs-16 font-weight-light">{{ $t("adminNoOfOrders") }}</p>
          <h1 class="font-24 font-weight-bold">449</h1>
        </div>
        <div
          class="w-100 d-flex flex-column align-items-center graph-card justify-content-center border-bottom"
        >
          <p class="fs-16 font-weight-light">{{ $t("adminNoOfOrders") }}</p>
          <h1 class="font-24 font-weight-bold">449</h1>
        </div>
        <div
          class="w-100 d-flex flex-column align-items-center graph-card justify-content-center border-bottom"
        >
          <p class="fs-16 font-weight-light">{{ $t("adminNoOfOrders") }}</p>
          <h1 class="font-24 font-weight-bold">449</h1>
        </div>
        <div
          class="w-100 d-flex flex-column align-items-center graph-card justify-content-center border-bottom"
        >
          <p class="fs-16 font-weight-light">{{ $t("adminNoOfOrders") }}</p>
          <h1 class="font-24 font-weight-bold">449</h1>
        </div>
      </div>
      <div
        class="graph-side-cards right-border-graph d-flex d-lg-none flex-wrap justify-content-between align-items-center"
      >
        <div
          class="w-50 d-flex flex-column border-top align-items-center graph-card justify-content-center border-bottom"
        >
          <p class="fs-16 font-weight-light">{{ $t("adminNoOfOrders") }}</p>
          <h1 class="font-24 font-weight-bold">449</h1>
        </div>
        <div
          class="w-50 d-flex border-left border-top flex-column align-items-center graph-card justify-content-center border-bottom"
        >
          <p class="fs-16 font-weight-light">{{ $t("adminNoOfOrders") }}</p>
          <h1 class="font-24 font-weight-bold">449</h1>
        </div>
        <div
          class="w-50 d-flex flex-column align-items-center graph-card justify-content-center border-bottom"
        >
          <p class="fs-16 font-weight-light">{{ $t("adminNoOfOrders") }}</p>
          <h1 class="font-24 font-weight-bold">449</h1>
        </div>
        <div
          class="w-50 border-left d-flex flex-column align-items-center graph-card justify-content-center border-bottom"
        >
          <p class="fs-16 font-weight-light">{{ $t("adminNoOfOrders") }}</p>
          <h1 class="font-24 font-weight-bold">449</h1>
        </div>
        <div
          class="w-100 d-flex flex-column align-items-center graph-card justify-content-center border-bottom"
        >
          <p class="fs-16 font-weight-light">{{ $t("adminNoOfOrders") }}</p>
          <h1 class="font-24 font-weight-bold">449</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardChart from "./dashboardChart";
export default {
  name: "AdminChart",
  components: { DashboardChart },
};
</script>
<style scoped>
.graph-side-cards {
  width: 100% !important;
}
.graph-card {
  height: 120px !important;
}

.w-90 {
  width: 90% !important;
}
.blue-border {
  border-top: 2px solid #3751ff;
}
.admin-chart {
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
}
.w-95 {
  width: 95% !important;
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .right-border-graph {
    border-left: 1px solid #dfe0eb;
  }
  .graph-side-cards {
    width: 25% !important;
  }
}
@media only screen and (min-width: 1200px) {
  .right-border-graph {
    border-left: 1px solid #dfe0eb;
  }
  .graph-side-cards {
    width: 25% !important;
  }
}
</style>