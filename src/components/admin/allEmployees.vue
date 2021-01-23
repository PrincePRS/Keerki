<template>
  <div class="w-90 pt-9">
    <div class="w-90 border-bottom pb-4 border-dark">
      <h1 class="font-24 mb-0">{{$t('adminAllKeerkiEmployees')}}</h1>
    </div>
    <div
      class="w-90 d-flex justify-content-center flex-column mt-4 align-items-center"
    >
    <div class="w-90 d-flex justify-content-around align-items-center flex-column flex-lg-row">
        <EmployeeCard/>
        <EmployeeCard/>
        </div>
    </div>
  </div>
</template>
<script>
import EmployeeCard from './employeeCard'
export default {
  name: "AdminEmployees",
  components:{
      EmployeeCard
  }
};
</script>
