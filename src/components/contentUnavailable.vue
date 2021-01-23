<template>
  <div class="d-flex justify-content-center py-5">
    <div
      class="dashboard-error p-2 px-3 d-flex justify-content-between align-items-center" 
    >
    <div class="dashboard-error d-flex justify-content-between align-items-center">
      <svg
        width="33"
        height="29"
        viewBox="0 0 33 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.1172 24.6172L18.9922 1.8125C18.0078 0.117188 15.4375 0.0625 14.4531 1.8125L1.32812 24.6172C0.34375 26.3125 1.60156 28.5 3.625 28.5H29.8203C31.8438 28.5 33.1016 26.3672 32.1172 24.6172ZM16.75 19.8594C18.1172 19.8594 19.2656 21.0078 19.2656 22.375C19.2656 23.7969 18.1172 24.8906 16.75 24.8906C15.3281 24.8906 14.2344 23.7969 14.2344 22.375C14.2344 21.0078 15.3281 19.8594 16.75 19.8594ZM14.3438 10.8359C14.2891 10.4531 14.6172 10.125 15 10.125H18.4453C18.8281 10.125 19.1562 10.4531 19.1016 10.8359L18.7188 18.2734C18.6641 18.6562 18.3906 18.875 18.0625 18.875H15.3828C15.0547 18.875 14.7812 18.6562 14.7266 18.2734L14.3438 10.8359Z"
          fill="#F8A72D"
        />
      </svg>
      <div  dir="auto" class="ml-2">
        <h5 class="fs-14 mb-0 font-weight-bold">
          {{ $t("contentError") }}
        </h5>
        <p class="mb-0 font-weight-light fs-14 mb-0">
          {{ $t("tryLater") }}
        </p>
      </div>
    </div>
      <router-link to="/dashboard"
        ><div class="align-self-start close-error btn p-0 outline-none">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.46875 5L10.8438 1.65625C11.0312 1.46875 11.0312 1.125 10.8438 0.9375L10.0625 0.15625C9.875 -0.03125 9.53125 -0.03125 9.34375 0.15625L6 3.53125L2.625 0.15625C2.4375 -0.03125 2.09375 -0.03125 1.90625 0.15625L1.125 0.9375C0.9375 1.125 0.9375 1.46875 1.125 1.65625L4.5 5L1.125 8.375C0.9375 8.5625 0.9375 8.90625 1.125 9.09375L1.90625 9.875C2.09375 10.0625 2.4375 10.0625 2.625 9.875L6 6.5L9.34375 9.875C9.53125 10.0625 9.875 10.0625 10.0625 9.875L10.8438 9.09375C11.0312 8.90625 11.0312 8.5625 10.8438 8.375L7.46875 5Z"
              fill="black"
              fill-opacity="0.55"
            />
          </svg>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContentUnavailable",
};
</script>