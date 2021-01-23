<template>
  <div
    class="employee-card py-3 w-48 d-flex flex-column justify-content-center align-items-center border mt-4 mt-lg-0"
  dir="auto"
  >
    <div class="profile-circle rounded-circle p-1">
      <img
        src="../../assets/employee.jpeg"
        class="rounded-circle"
        width="125"
        height="125"
      />
    </div>
    <p class="font-24 font-weight-bold py-4">Employee name</p>
    <div class="w-70 d-flex justify-content-center align-items-center">
      <div
        class="w-100 d-flex justify-content-around flex-xl-row flex-column align-items-center"
      >
        <p class="px-2 text-white employee-btn">Employee role</p>
        <p class="px-2 text-white department-btn">Name of the Department</p>
      </div>
    </div>
    <div class="w-100 d-flex justify-content-center align-items-center mt-4">
      <div class="d-flex justify-content-between align-items-center w-30">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          class="w-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 12.2216C15.5033 13.3991 14.7263 14.4367 13.7371 15.2437C12.7478 16.0507 11.5764 16.6025 10.3253 16.8509C9.07415 17.0992 7.78135 17.0366 6.55992 16.6685C5.33849 16.3004 4.22562 15.638 3.31861 14.7391C2.41159 13.8403 1.73805 12.7325 1.35687 11.5125C0.975684 10.2924 0.898465 8.99739 1.13196 7.74055C1.36546 6.48371 1.90256 5.30333 2.69631 4.30262C3.49006 3.30191 4.51629 2.51133 5.68528 2"
            stroke="#6E798C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 9C17 7.94943 16.7931 6.90914 16.391 5.93853C15.989 4.96793 15.3997 4.08601 14.6569 3.34315C13.914 2.60028 13.0321 2.011 12.0615 1.60896C11.0909 1.20693 10.0506 1 9 1V9H17Z"
            stroke="#6E798C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p class="mb-0 w-75">42 <span class="text-muted">{{$t('adminEmployeesReplies')}}</span></p>
      </div>
    </div>
    <div class="w-100 d-flex justify-content-center align-items-center mt-4">
      <div class="d-flex justify-content-between align-items-center w-30">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          class="w-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2222 3H2.77778C1.79594 3 1 3.79594 1 4.77778V17.2222C1 18.2041 1.79594 19 2.77778 19H15.2222C16.2041 19 17 18.2041 17 17.2222V4.77778C17 3.79594 16.2041 3 15.2222 3Z"
            stroke="#6E798C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 1V5"
            stroke="#6E798C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 1V5"
            stroke="#6E798C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 8H17"
            stroke="#6E798C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p class="mb-0 w-75">{{$t('adminEmployeeDate')}} <span class="text-muted">Last login</span></p>
      </div>
    </div>
    <div class="w-100 d-flex justify-content-center align-items-center mt-4">
      <div class="d-flex justify-content-between align-items-center w-30">
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          class="w-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="6.5" cy="6.5" r="6.5" fill="#46D68C" />
        </svg>

        <p class="mb-0 w-75">{{$t('adminEmployeeStatus')}} <span class="text-muted">{{$t('AdminEmployeesActive')}}</span></p>
      </div>
    </div>
    <div class="w-100 d-flex justify-content-center align-items-center mt-4">
      <button class="btn edit-btn text-white" @click="editEmployee">
        {{$t('AdminEmployeesEditAccountBtn')}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeCard",
  methods:{
      editEmployee(){
       this.$router.push({ path: "edit-permissions" });
      }
  }
};
</script>
<style scoped>

.edit-btn {
  background: #1b3564;
  border-radius: 8px;
  min-width: 240px;
  height: 48px;
}
.employee-btn {
  background: #2a4eaa;
  border-radius: 4px;
}
.department-btn {
  background: #007ae9;
  border-radius: 4px;
}
.profile-circle {
  border: 1.5px solid #dfe0eb;
}
.employee-card {
  background: #ffffff;
  border-radius: 16px;
}
</style>