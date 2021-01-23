<template>
  <button
    class="dashboard-card d-flex justify-content-around align-items-center flex-column"
  >
    <h1 class="fs-24">{{ this.title }}</h1>

    <span v-html="this.icon"></span>
    <p class="mb-0">{{ this.footer }}</p>
  </button>
</template>
<script>
export default {
  name: "DashboardCard",
  props: {
    title: {
      type: String,
      default: "Dashboard",
    },
    icon: {
      type: String,
      default:
        "<svg width='40' height='52' viewBox='0 0 40 52' fill='none' xmlns='http://www.w3.org/2000'/svg><path d='M23.3333 13.8125V0H2.5C1.11458 0 0 1.08672 0 2.4375V49.5625C0 50.9133 1.11458 52 2.5 52H37.5C38.8854 52 40 50.9133 40 49.5625V16.25H25.8333C24.4583 16.25 23.3333 15.1531 23.3333 13.8125ZM30 37.7812C30 38.4516 29.4375 39 28.75 39H11.25C10.5625 39 10 38.4516 10 37.7812V36.9688C10 36.2984 10.5625 35.75 11.25 35.75H28.75C29.4375 35.75 30 36.2984 30 36.9688V37.7812ZM30 31.2812C30 31.9516 29.4375 32.5 28.75 32.5H11.25C10.5625 32.5 10 31.9516 10 31.2812V30.4688C10 29.7984 10.5625 29.25 11.25 29.25H28.75C29.4375 29.25 30 29.7984 30 30.4688V31.2812ZM30 23.9688V24.7812C30 25.4516 29.4375 26 28.75 26H11.25C10.5625 26 10 25.4516 10 24.7812V23.9688C10 23.2984 10.5625 22.75 11.25 22.75H28.75C29.4375 22.75 30 23.2984 30 23.9688ZM40 12.3805V13H26.6667V0H27.3021C27.9688 0 28.6042 0.253906 29.0729 0.710938L39.2708 10.6641C39.7396 11.1211 40 11.7406 40 12.3805Z' fill='#71A7EA'/></svg>",
    },
    footer: {
      type: String,
      default: "Click here",
    },
  },
};
</script>