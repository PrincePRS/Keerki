<template>
  <canvas id="my-chart" width="500" height="300"></canvas>
</template>
<script>
import Chart from "chart.js";

window.onload = function () {
  new Chart(document.getElementById("my-chart"), {
    type: "line",
    data: {
      datasets: [
        {
          borderColor: "rgba(5, 104, 195, 0.9)",
          backgroundColor: "rgba(50, 115, 220, 0.1)",
          data: [
            10,
            20,
            30,
            29,
            28,
            30,
            40,
            52,
            48,
            38,
            28,
            20,
            18,
            20,
            38,
            48,
            40,
            38,
          ],
        },
        {
          backgroundColor: "rgba(255,255,255, 0)",
          borderColor: "rgba(223, 224, 235, 1   )",
          data: [
            33,
            35,
            30,
            24,
            20,
            24,
            30,
            34,
            35,
            32,
            28,
            18,
            16,
            14,
            30,
            42,
            28,
            35,
          ],
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "category",
            labels: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
            ],
            gridLines: {
              display: false,
            },
          },
        ],
        yAxes: [
          {
            type: "linear",
            labels: [10, 20, 30, 40, 50, 60],
            position: "right",
            ticks: {
              beginAtZero: true,
              stepSize: 10,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
};
export default {
  name: "DashboardChart",
};
</script>