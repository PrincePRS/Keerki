<template>
  <div
    class="d-flex justify-content-center w-90 flex-column pt-9 align-items-center"
  >
    <div class="w-90 d-flex justify-content-end align-items-center">
      <button
        class="outline-none justify-content-center d-flex align-items-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          class="mx-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12"
            stroke="#6E7F97"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 6L12 2L8 6"
            stroke="#6E7F97"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 2V15"
            stroke="#6E7F97"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="mb-0">{{$t('exportCsv')}}</p>
      </button>
    </div>
    <ClientsTable/>
  </div>
</template>
<script>
import ClientsTable from './clientsTable'
export default {
  name: "AdminClients",
  components:{
    ClientsTable
  },
  
};
</script>
<style scoped>
.clients-table tr {
  cursor: pointer !important;
}
.object-cover {
  object-fit: cover !important;
}
.admin-btn-active {
  background: #29cc97;
}
.admin-btn-inactive {
  background: #c4c4c4;
}
.width-18 {
  width: 20% !important;
}
@media only screen and (max-width: 576px) {
  .width-18 {
    width: 100% !important;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .width-18 {
    width: 50% !important;
  }
}
@media only screen and (max-width: 991px) and (min-width: 768px) {
  .width-18 {
    width: 30% !important;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .width-18 {
    width: 30% !important;
  }
}
.admin-clients-cont {
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
}
</style>