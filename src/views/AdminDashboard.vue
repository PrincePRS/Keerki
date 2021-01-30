<template>
  <div
    class="w-100 d-flex justify-content-center flex-column flex-lg-row bg-f7"
    dir="ltr"
  >
    <div
      class="w-18 d-none d-lg-block side-bar admin-side z-index-2 min-vh-100"
    >
      <div class="d-flex align-content-between flex-column text-white w-100">
        <div
          class="d-flex w-100 justify-content-center align-items-center flex-column text-white py-5"
        >
          <div>
            <h1 class="font-24">{{ $t("adminDashboardHeading") }}</h1>
          </div>
          <div class="w-100 pt-16">
            <div
              class="w-75 justify-content-around outline-none d-flex align-items-center"
            >
              <div
                class="w-50 d-flex justify-content-center align-items-center"
              >
                <img src="../assets/logoSign.png" width="30" height="30" />
              </div>
              <h1 class="fs-19 w-50 mb-0 text-left text-muted">
                {{ $t("adminDashboardKeerkiDashboard") }}
              </h1>
            </div>
            <div
              :class="'w-100  ' + (activeSideBar[0].isActive && ' active-tab')"
            >
              <button
                class="p-0 mt-16 admin-hover border-0 w-75 justify-content-around outline-none d-flex align-items-center h-56"
                @click="dashboard"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="w-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    v-if="!activeSideBar[0].isActive"
                    opacity="0.4"
                    d="M15.5232 8.94116H8.54412L13.1921 13.5891C13.3697 13.7667 13.6621 13.7812 13.8447 13.6091C14.9829 12.5367 15.7659 11.0912 15.9956 9.46616C16.035 9.18793 15.8041 8.94116 15.5232 8.94116ZM15.0576 7.03528C14.8153 3.52176 12.0076 0.714119 8.49412 0.471767C8.22589 0.453237 8 0.679413 8 0.948236V7.5294H14.5815C14.8503 7.5294 15.0762 7.30352 15.0576 7.03528ZM6.58824 8.94116V1.96206C6.58824 1.68118 6.34147 1.45029 6.06353 1.48971C2.55853 1.985 -0.120585 5.04705 0.00412089 8.71675C0.132356 12.4856 3.37736 15.5761 7.14794 15.5288C8.6303 15.5103 10 15.0326 11.1262 14.2338C11.3585 14.0691 11.3738 13.727 11.1724 13.5256L6.58824 8.94116Z"
                    fill="#C4C4C4"
                  />
                  <path
                    v-else
                    opacity="0.4"
                    d="M15.5232 8.94116H8.54412L13.1921 13.5891C13.3697 13.7667 13.6621 13.7812 13.8447 13.6091C14.9829 12.5367 15.7659 11.0912 15.9956 9.46616C16.035 9.18793 15.8041 8.94116 15.5232 8.94116ZM15.0576 7.03528C14.8153 3.52176 12.0076 0.714119 8.49412 0.471767C8.22589 0.453237 8 0.679413 8 0.948236V7.5294H14.5815C14.8503 7.5294 15.0762 7.30352 15.0576 7.03528ZM6.58824 8.94116V1.96206C6.58824 1.68118 6.34147 1.45029 6.06353 1.48971C2.55853 1.985 -0.120585 5.04705 0.00412089 8.71675C0.132356 12.4856 3.37736 15.5761 7.14794 15.5288C8.6303 15.5103 10 15.0326 11.1262 14.2338C11.3585 14.0691 11.3738 13.727 11.1724 13.5256L6.58824 8.94116Z"
                    fill="#FFB800"
                  />
                </svg>

                <span class="fs-19 mb-0 text-muted w-50 text-left">{{
                  $t("adminDashboardHeading")
                }}</span>
              </button>
            </div>
          </div>
          <span class="divider w-100"></span>
          <div class="w-100 d-flex align-items-center justify-content-between">
            <div
              :class="'w-100  ' + (activeSideBar[1].isActive && ' active-tab')"
            >
              <button
                class="bg-transparent admin-hover p-0 border-0 w-75 justify-content-around outline-none d-flex align-items-center h-56"
                @click="clients"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="w-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    v-if="!activeSideBar[1].isActive"
                    opacity="0.4"
                    d="M2.4 7.1999C3.2825 7.1999 4 6.4824 4 5.5999C4 4.7174 3.2825 3.9999 2.4 3.9999C1.5175 3.9999 0.8 4.7174 0.8 5.5999C0.8 6.4824 1.5175 7.1999 2.4 7.1999ZM13.6 7.1999C14.4825 7.1999 15.2 6.4824 15.2 5.5999C15.2 4.7174 14.4825 3.9999 13.6 3.9999C12.7175 3.9999 12 4.7174 12 5.5999C12 6.4824 12.7175 7.1999 13.6 7.1999ZM14.4 7.9999H12.8C12.36 7.9999 11.9625 8.1774 11.6725 8.4649C12.68 9.0174 13.395 10.0149 13.55 11.1999H15.2C15.6425 11.1999 16 10.8424 16 10.3999V9.5999C16 8.7174 15.2825 7.9999 14.4 7.9999ZM8 7.9999C9.5475 7.9999 10.8 6.7474 10.8 5.1999C10.8 3.6524 9.5475 2.3999 8 2.3999C6.4525 2.3999 5.2 3.6524 5.2 5.1999C5.2 6.7474 6.4525 7.9999 8 7.9999ZM9.92 8.7999H9.7125C9.1925 9.0499 8.615 9.1999 8 9.1999C7.385 9.1999 6.81 9.0499 6.2875 8.7999H6.08C4.49 8.7999 3.2 10.0899 3.2 11.6799V12.3999C3.2 13.0624 3.7375 13.5999 4.4 13.5999H11.6C12.2625 13.5999 12.8 13.0624 12.8 12.3999V11.6799C12.8 10.0899 11.51 8.7999 9.92 8.7999ZM4.3275 8.4649C4.0375 8.1774 3.64 7.9999 3.2 7.9999H1.6C0.7175 7.9999 0 8.7174 0 9.5999V10.3999C0 10.8424 0.3575 11.1999 0.8 11.1999H2.4475C2.605 10.0149 3.32 9.0174 4.3275 8.4649Z"
                    fill="#C1C1C2"
                  />
                  <path
                    v-else
                    opacity="0.4"
                    d="M2.4 7.1999C3.2825 7.1999 4 6.4824 4 5.5999C4 4.7174 3.2825 3.9999 2.4 3.9999C1.5175 3.9999 0.8 4.7174 0.8 5.5999C0.8 6.4824 1.5175 7.1999 2.4 7.1999ZM13.6 7.1999C14.4825 7.1999 15.2 6.4824 15.2 5.5999C15.2 4.7174 14.4825 3.9999 13.6 3.9999C12.7175 3.9999 12 4.7174 12 5.5999C12 6.4824 12.7175 7.1999 13.6 7.1999ZM14.4 7.9999H12.8C12.36 7.9999 11.9625 8.1774 11.6725 8.4649C12.68 9.0174 13.395 10.0149 13.55 11.1999H15.2C15.6425 11.1999 16 10.8424 16 10.3999V9.5999C16 8.7174 15.2825 7.9999 14.4 7.9999ZM8 7.9999C9.5475 7.9999 10.8 6.7474 10.8 5.1999C10.8 3.6524 9.5475 2.3999 8 2.3999C6.4525 2.3999 5.2 3.6524 5.2 5.1999C5.2 6.7474 6.4525 7.9999 8 7.9999ZM9.92 8.7999H9.7125C9.1925 9.0499 8.615 9.1999 8 9.1999C7.385 9.1999 6.81 9.0499 6.2875 8.7999H6.08C4.49 8.7999 3.2 10.0899 3.2 11.6799V12.3999C3.2 13.0624 3.7375 13.5999 4.4 13.5999H11.6C12.2625 13.5999 12.8 13.0624 12.8 12.3999V11.6799C12.8 10.0899 11.51 8.7999 9.92 8.7999ZM4.3275 8.4649C4.0375 8.1774 3.64 7.9999 3.2 7.9999H1.6C0.7175 7.9999 0 8.7174 0 9.5999V10.3999C0 10.8424 0.3575 11.1999 0.8 11.1999H2.4475C2.605 10.0149 3.32 9.0174 4.3275 8.4649Z"
                    fill="#FFB800"
                  />
                </svg>

                <span class="fs-19 mb-0 text-muted w-50 text-left">{{
                  $t("adminDashboardClientsBtn")
                }}</span>
              </button>
            </div>
            <!-- <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              class="btn p-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.20711 4.79289C4.81658 4.40237 4.18342 4.40237 3.79289 4.79289C3.40237 5.18342 3.40237 5.81658 3.79289 6.20711L8.29289 10.7071C8.68342 11.0976 9.31658 11.0976 9.70711 10.7071L14.2071 6.20711C14.5976 5.81658 14.5976 5.18342 14.2071 4.79289C13.8166 4.40237 13.1834 4.40237 12.7929 4.79289L9 8.58579L5.20711 4.79289Z"
                fill="#CCCCCE"
              />
            </svg> -->
          </div>
          <div class="w-100 d-flex align-items-center justify-content-between">
            <div
              :class="'w-100  ' + (activeSideBar[2].isActive && ' active-tab')"
            >
              <button
                class="bg-transparent p-0 admin-hover border-0 w-75 justify-content-around outline-none d-flex align-items-center h-56"
                @click="orders"
              >
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  class="w-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    v-if="!activeSideBar[2].isActive"
                    d="M3.55556 2.66667H12.4444V8H3.55556V2.66667ZM14.6667 5.33333C14.6667 6.06972 15.2636 6.66667 16 6.66667V9.33333C16 10.0697 15.4031 10.6667 14.6667 10.6667H1.33333C0.596944 10.6667 0 10.0697 0 9.33333V6.66667C0.736389 6.66667 1.33333 6.06972 1.33333 5.33333C1.33333 4.59694 0.736389 4 0 4V1.33333C0 0.596944 0.596944 0 1.33333 0H14.6667C15.4031 0 16 0.596944 16 1.33333V4C15.2636 4 14.6667 4.59694 14.6667 5.33333ZM13.3333 2.44444C13.3333 2.07625 13.0349 1.77778 12.6667 1.77778H3.33333C2.96514 1.77778 2.66667 2.07625 2.66667 2.44444V8.22222C2.66667 8.59042 2.96514 8.88889 3.33333 8.88889H12.6667C13.0349 8.88889 13.3333 8.59042 13.3333 8.22222V2.44444Z"
                    fill="#60626E"
                  />
                  <path
                    v-else
                    opacity="0.4"
                    d="M3.55556 2.66667H12.4444V8H3.55556V2.66667ZM14.6667 5.33333C14.6667 6.06972 15.2636 6.66667 16 6.66667V9.33333C16 10.0697 15.4031 10.6667 14.6667 10.6667H1.33333C0.596944 10.6667 0 10.0697 0 9.33333V6.66667C0.736389 6.66667 1.33333 6.06972 1.33333 5.33333C1.33333 4.59694 0.736389 4 0 4V1.33333C0 0.596944 0.596944 0 1.33333 0H14.6667C15.4031 0 16 0.596944 16 1.33333V4C15.2636 4 14.6667 4.59694 14.6667 5.33333ZM13.3333 2.44444C13.3333 2.07625 13.0349 1.77778 12.6667 1.77778H3.33333C2.96514 1.77778 2.66667 2.07625 2.66667 2.44444V8.22222C2.66667 8.59042 2.96514 8.88889 3.33333 8.88889H12.6667C13.0349 8.88889 13.3333 8.59042 13.3333 8.22222V2.44444Z"
                    fill="#FFB800"
                  />
                </svg>

                <span class="fs-19 mb-0 text-muted w-50 text-left">{{
                  $t("adminDashboardOrdersBtn")
                }}</span>
              </button>
            </div>
            <!-- <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              class="btn p-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.20711 4.79289C4.81658 4.40237 4.18342 4.40237 3.79289 4.79289C3.40237 5.18342 3.40237 5.81658 3.79289 6.20711L8.29289 10.7071C8.68342 11.0976 9.31658 11.0976 9.70711 10.7071L14.2071 6.20711C14.5976 5.81658 14.5976 5.18342 14.2071 4.79289C13.8166 4.40237 13.1834 4.40237 12.7929 4.79289L9 8.58579L5.20711 4.79289Z"
                fill="#CCCCCE"
              />
            </svg> -->
          </div>
          <div class="w-100 d-flex align-items-center justify-content-between">
            <div
              :class="'w-100  ' + (activeSideBar[3].isActive && ' active-tab')"
            >
              <button
                class="bg-transparent p-0 border-0 w-75 admin-hover justify-content-around outline-none d-flex align-items-center h-56"
                @click="toContact"
              >
                <svg
                  v-if="!activeSideBar[3].isActive"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="w-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      opacity="0.4"
                      d="M5.50187 14.1985C5.50219 14.395 5.56031 14.5875 5.66937 14.7513L6.20344 15.5541C6.29467 15.6913 6.41841 15.8039 6.56366 15.8817C6.7089 15.9596 6.87114 16.0003 7.03594 16.0003H8.96438C9.12917 16.0003 9.29141 15.9596 9.43665 15.8817C9.5819 15.8039 9.70564 15.6913 9.79688 15.5541L10.3309 14.7513C10.44 14.5875 10.4982 14.3952 10.4984 14.1985L10.4997 13H5.50031L5.50187 14.1985ZM2.5 5.50003C2.5 6.88659 3.01406 8.15159 3.86125 9.11815C4.3775 9.70721 5.185 10.9378 5.49281 11.976C5.49406 11.9841 5.495 11.9922 5.49625 12.0003H10.5037C10.505 11.9922 10.5059 11.9844 10.5072 11.976C10.815 10.9378 11.6225 9.70721 12.1388 9.11815C12.9859 8.15159 13.5 6.88659 13.5 5.50003C13.5 2.45659 11.0284 -0.00934836 7.98281 2.66431e-05C4.795 0.00971414 2.5 2.59284 2.5 5.50003ZM8 3.00003C6.62156 3.00003 5.5 4.12159 5.5 5.50003C5.5 5.77628 5.27625 6.00003 5 6.00003C4.72375 6.00003 4.5 5.77628 4.5 5.50003C4.5 3.57003 6.07 2.00003 8 2.00003C8.27625 2.00003 8.5 2.22378 8.5 2.50003C8.5 2.77628 8.27625 3.00003 8 3.00003Z"
                      fill="#9FA2B4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  v-else
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="w-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      opacity="0.4"
                      d="M5.50187 14.1985C5.50219 14.395 5.56031 14.5875 5.66937 14.7513L6.20344 15.5541C6.29467 15.6913 6.41841 15.8039 6.56366 15.8817C6.7089 15.9596 6.87114 16.0003 7.03594 16.0003H8.96438C9.12917 16.0003 9.29141 15.9596 9.43665 15.8817C9.5819 15.8039 9.70564 15.6913 9.79688 15.5541L10.3309 14.7513C10.44 14.5875 10.4982 14.3952 10.4984 14.1985L10.4997 13H5.50031L5.50187 14.1985ZM2.5 5.50003C2.5 6.88659 3.01406 8.15159 3.86125 9.11815C4.3775 9.70721 5.185 10.9378 5.49281 11.976C5.49406 11.9841 5.495 11.9922 5.49625 12.0003H10.5037C10.505 11.9922 10.5059 11.9844 10.5072 11.976C10.815 10.9378 11.6225 9.70721 12.1388 9.11815C12.9859 8.15159 13.5 6.88659 13.5 5.50003C13.5 2.45659 11.0284 -0.00934836 7.98281 2.66431e-05C4.795 0.00971414 2.5 2.59284 2.5 5.50003ZM8 3.00003C6.62156 3.00003 5.5 4.12159 5.5 5.50003C5.5 5.77628 5.27625 6.00003 5 6.00003C4.72375 6.00003 4.5 5.77628 4.5 5.50003C4.5 3.57003 6.07 2.00003 8 2.00003C8.27625 2.00003 8.5 2.22378 8.5 2.50003C8.5 2.77628 8.27625 3.00003 8 3.00003Z"
                      fill="#FFB800"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span class="fs-19 mb-0 text-muted w-50 text-left">{{
                  $t("adminDashboardContactBtn")
                }}</span>
              </button>
            </div>
            <!-- <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              class="btn p-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.20711 4.79289C4.81658 4.40237 4.18342 4.40237 3.79289 4.79289C3.40237 5.18342 3.40237 5.81658 3.79289 6.20711L8.29289 10.7071C8.68342 11.0976 9.31658 11.0976 9.70711 10.7071L14.2071 6.20711C14.5976 5.81658 14.5976 5.18342 14.2071 4.79289C13.8166 4.40237 13.1834 4.40237 12.7929 4.79289L9 8.58579L5.20711 4.79289Z"
                fill="#CCCCCE"
              />
            </svg> -->
          </div>
          <div class="w-100 d-flex align-items-center justify-content-between">
            <div
              :class="'w-100  ' + (activeSideBar[4].isActive && ' active-tab')"
            >
              <button
                class="bg-transparent p-0 border-0 w-75 admin-hover justify-content-around outline-none d-flex align-items-center h-56"
                @click="notifications"
              >
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  class="w-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    v-if="!activeSideBar[4].isActive"
                    d="M7.49996 14C8.53472 14 9.37408 13.2166 9.37408 12.25H5.62584C5.62584 13.2166 6.46519 14 7.49996 14ZM13.8102 9.90637C13.2442 9.33871 12.1851 8.48477 12.1851 5.6875C12.1851 3.56289 10.589 1.86211 8.43687 1.44484V0.875C8.43687 0.391836 8.01734 0 7.49996 0C6.98257 0 6.56304 0.391836 6.56304 0.875V1.44484C4.4109 1.86211 2.8148 3.56289 2.8148 5.6875C2.8148 8.48477 1.75572 9.33871 1.18971 9.90637C1.01392 10.0827 0.935994 10.2936 0.937459 10.5C0.940682 10.9484 1.31773 11.375 1.87789 11.375H13.122C13.6822 11.375 14.0595 10.9484 14.0625 10.5C14.0639 10.2936 13.986 10.0825 13.8102 9.90637Z"
                    fill="#60626E"
                  />
                  <path
                    v-else
                    opacity="0.4"
                    d="M7.49996 14C8.53472 14 9.37408 13.2166 9.37408 12.25H5.62584C5.62584 13.2166 6.46519 14 7.49996 14ZM13.8102 9.90637C13.2442 9.33871 12.1851 8.48477 12.1851 5.6875C12.1851 3.56289 10.589 1.86211 8.43687 1.44484V0.875C8.43687 0.391836 8.01734 0 7.49996 0C6.98257 0 6.56304 0.391836 6.56304 0.875V1.44484C4.4109 1.86211 2.8148 3.56289 2.8148 5.6875C2.8148 8.48477 1.75572 9.33871 1.18971 9.90637C1.01392 10.0827 0.935994 10.2936 0.937459 10.5C0.940682 10.9484 1.31773 11.375 1.87789 11.375H13.122C13.6822 11.375 14.0595 10.9484 14.0625 10.5C14.0639 10.2936 13.986 10.0825 13.8102 9.90637Z"
                    fill="#FFB800"
                  />
                </svg>

                <span class="fs-19 mb-0 text-muted w-50 text-left">{{
                  $t("adminDashboardNotificationsBtn")
                }}</span>
              </button>
            </div>
            <!-- <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              class="btn p-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.20711 4.79289C4.81658 4.40237 4.18342 4.40237 3.79289 4.79289C3.40237 5.18342 3.40237 5.81658 3.79289 6.20711L8.29289 10.7071C8.68342 11.0976 9.31658 11.0976 9.70711 10.7071L14.2071 6.20711C14.5976 5.81658 14.5976 5.18342 14.2071 4.79289C13.8166 4.40237 13.1834 4.40237 12.7929 4.79289L9 8.58579L5.20711 4.79289Z"
                fill="#CCCCCE"
              />
            </svg> -->
          </div>
          <div class="w-100 d-flex justify-content-between align-items-center">
            <div
              :class="'w-100  ' + (activeSideBar[5].isActive && ' active-tab')"
            >
              <button
                class="bg-transparent p-0 border-0 w-75 admin-hover justify-content-around outline-none d-flex align-items-center h-56"
                @click="messages"
              >
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  class="w-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    v-if="!activeSideBar[5].isActive"
                    d="M15.6969 3.9625C15.8187 3.86563 16 3.95625 16 4.10938V10.5C16 11.3281 15.3281 12 14.5 12H1.5C0.671875 12 0 11.3281 0 10.5V4.1125C0 3.95625 0.178125 3.86875 0.303125 3.96562C1.00312 4.50937 1.93125 5.2 5.11875 7.51562C5.77813 7.99687 6.89062 9.00938 8 9.00313C9.11563 9.0125 10.25 7.97813 10.8844 7.51562C14.0719 5.2 14.9969 4.50625 15.6969 3.9625ZM8 8C8.725 8.0125 9.76875 7.0875 10.2937 6.70625C14.4406 3.69688 14.7562 3.43437 15.7125 2.68437C15.8937 2.54375 16 2.325 16 2.09375V1.5C16 0.671875 15.3281 0 14.5 0H1.5C0.671875 0 0 0.671875 0 1.5V2.09375C0 2.325 0.10625 2.54062 0.2875 2.68437C1.24375 3.43125 1.55938 3.69688 5.70625 6.70625C6.23125 7.0875 7.275 8.0125 8 8Z"
                    fill="#60626E"
                  />
                  <path
                    v-else
                    opacity="0.4"
                    d="M15.6969 3.9625C15.8187 3.86563 16 3.95625 16 4.10938V10.5C16 11.3281 15.3281 12 14.5 12H1.5C0.671875 12 0 11.3281 0 10.5V4.1125C0 3.95625 0.178125 3.86875 0.303125 3.96562C1.00312 4.50937 1.93125 5.2 5.11875 7.51562C5.77813 7.99687 6.89062 9.00938 8 9.00313C9.11563 9.0125 10.25 7.97813 10.8844 7.51562C14.0719 5.2 14.9969 4.50625 15.6969 3.9625ZM8 8C8.725 8.0125 9.76875 7.0875 10.2937 6.70625C14.4406 3.69688 14.7562 3.43437 15.7125 2.68437C15.8937 2.54375 16 2.325 16 2.09375V1.5C16 0.671875 15.3281 0 14.5 0H1.5C0.671875 0 0 0.671875 0 1.5V2.09375C0 2.325 0.10625 2.54062 0.2875 2.68437C1.24375 3.43125 1.55938 3.69688 5.70625 6.70625C6.23125 7.0875 7.275 8.0125 8 8Z"
                    fill="#FFB800"
                  />
                </svg>

                <span class="fs-19 mb-0 text-muted w-50 text-left">{{
                  $t("adminDashboardMessagesBtn")
                }}</span>
              </button>
            </div>
            <!-- <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              class="btn p-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.20711 4.79289C4.81658 4.40237 4.18342 4.40237 3.79289 4.79289C3.40237 5.18342 3.40237 5.81658 3.79289 6.20711L8.29289 10.7071C8.68342 11.0976 9.31658 11.0976 9.70711 10.7071L14.2071 6.20711C14.5976 5.81658 14.5976 5.18342 14.2071 4.79289C13.8166 4.40237 13.1834 4.40237 12.7929 4.79289L9 8.58579L5.20711 4.79289Z"
                fill="#CCCCCE"
              />
            </svg> -->
          </div>
          <span class="divider w-100"></span>

          <div class="w-100 d-flex align-items-center justify-content-between">
            <div
              :class="'w-100  ' + (activeSideBar[6].isActive && ' active-tab')"
            >
              <button
                class="bg-transparent p-0 border-0 w-75 admin-hover justify-content-around outline-none d-flex align-items-center h-56"
                @click="settings"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="w-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    v-if="!activeSideBar[6].isActive"
                    opacity="0.4"
                    d="M15.2313 9.86546L13.9 9.09671C14.0344 8.37171 14.0344 7.62796 13.9 6.90296L15.2313 6.13421C15.3844 6.04671 15.4531 5.86546 15.4031 5.69671C15.0563 4.58421 14.4656 3.57796 13.6938 2.74046C13.575 2.61233 13.3813 2.58108 13.2313 2.66858L11.9 3.43733C11.3406 2.95608 10.6969 2.58421 10 2.34046V0.806084C10 0.631084 9.87814 0.477959 9.70627 0.440459C8.55939 0.184209 7.38439 0.196709 6.29377 0.440459C6.12189 0.477959 6.00002 0.631084 6.00002 0.806084V2.34358C5.30627 2.59046 4.66252 2.96233 4.10002 3.44046L2.77189 2.67171C2.61877 2.58421 2.42814 2.61233 2.30939 2.74358C1.53752 3.57796 0.946895 4.58421 0.60002 5.69983C0.546895 5.86858 0.61877 6.04983 0.771895 6.13733L2.10314 6.90608C1.96877 7.63108 1.96877 8.37483 2.10314 9.09983L0.771895 9.86858C0.61877 9.95608 0.55002 10.1373 0.60002 10.3061C0.946895 11.4186 1.53752 12.4248 2.30939 13.2623C2.42814 13.3905 2.62189 13.4217 2.77189 13.3342L4.10314 12.5655C4.66252 13.0467 5.30627 13.4186 6.00314 13.6623V15.1998C6.00314 15.3748 6.12502 15.528 6.29689 15.5655C7.44377 15.8217 8.61877 15.8092 9.70939 15.5655C9.88127 15.528 10.0031 15.3748 10.0031 15.1998V13.6623C10.6969 13.4155 11.3406 13.0436 11.9031 12.5655L13.2344 13.3342C13.3875 13.4217 13.5781 13.3936 13.6969 13.2623C14.4688 12.428 15.0594 11.4217 15.4063 10.3061C15.4531 10.1342 15.3844 9.95296 15.2313 9.86546ZM8.00002 10.4998C6.62189 10.4998 5.50002 9.37796 5.50002 7.99983C5.50002 6.62171 6.62189 5.49983 8.00002 5.49983C9.37814 5.49983 10.5 6.62171 10.5 7.99983C10.5 9.37796 9.37814 10.4998 8.00002 10.4998Z"
                    fill="#9FA2B4"
                  />
                  <path
                    v-else
                    opacity="0.4"
                    d="M15.2313 9.86546L13.9 9.09671C14.0344 8.37171 14.0344 7.62796 13.9 6.90296L15.2313 6.13421C15.3844 6.04671 15.4531 5.86546 15.4031 5.69671C15.0563 4.58421 14.4656 3.57796 13.6938 2.74046C13.575 2.61233 13.3813 2.58108 13.2313 2.66858L11.9 3.43733C11.3406 2.95608 10.6969 2.58421 10 2.34046V0.806084C10 0.631084 9.87814 0.477959 9.70627 0.440459C8.55939 0.184209 7.38439 0.196709 6.29377 0.440459C6.12189 0.477959 6.00002 0.631084 6.00002 0.806084V2.34358C5.30627 2.59046 4.66252 2.96233 4.10002 3.44046L2.77189 2.67171C2.61877 2.58421 2.42814 2.61233 2.30939 2.74358C1.53752 3.57796 0.946895 4.58421 0.60002 5.69983C0.546895 5.86858 0.61877 6.04983 0.771895 6.13733L2.10314 6.90608C1.96877 7.63108 1.96877 8.37483 2.10314 9.09983L0.771895 9.86858C0.61877 9.95608 0.55002 10.1373 0.60002 10.3061C0.946895 11.4186 1.53752 12.4248 2.30939 13.2623C2.42814 13.3905 2.62189 13.4217 2.77189 13.3342L4.10314 12.5655C4.66252 13.0467 5.30627 13.4186 6.00314 13.6623V15.1998C6.00314 15.3748 6.12502 15.528 6.29689 15.5655C7.44377 15.8217 8.61877 15.8092 9.70939 15.5655C9.88127 15.528 10.0031 15.3748 10.0031 15.1998V13.6623C10.6969 13.4155 11.3406 13.0436 11.9031 12.5655L13.2344 13.3342C13.3875 13.4217 13.5781 13.3936 13.6969 13.2623C14.4688 12.428 15.0594 11.4217 15.4063 10.3061C15.4531 10.1342 15.3844 9.95296 15.2313 9.86546ZM8.00002 10.4998C6.62189 10.4998 5.50002 9.37796 5.50002 7.99983C5.50002 6.62171 6.62189 5.49983 8.00002 5.49983C9.37814 5.49983 10.5 6.62171 10.5 7.99983C10.5 9.37796 9.37814 10.4998 8.00002 10.4998Z"
                    fill="#FFB800"
                  />
                </svg>

                <span class="fs-19 mb-0 text-muted w-50 text-left">{{
                  $t("adminDashboardSettingsBtn")
                }}</span>
              </button>
            </div>
            <!-- <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              class="btn p-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.20711 4.79289C4.81658 4.40237 4.18342 4.40237 3.79289 4.79289C3.40237 5.18342 3.40237 5.81658 3.79289 6.20711L8.29289 10.7071C8.68342 11.0976 9.31658 11.0976 9.70711 10.7071L14.2071 6.20711C14.5976 5.81658 14.5976 5.18342 14.2071 4.79289C13.8166 4.40237 13.1834 4.40237 12.7929 4.79289L9 8.58579L5.20711 4.79289Z"
                fill="#CCCCCE"
              />
            </svg> -->
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <b-modal
          id="log-out-modal2"
          centered
          hide-footer
          header-class="header-class"
          hide-header
          hide-header-close
        >
          <div
            class="d-flex flex-column w-100 justify-content-center align-items-center"
          >
            <div class="w-100">
              <h1 class="fs-16">{{ $t("automaticLogout") }}</h1>
              <h1 class="fs-18 text-primary">{{ $t("logoutTime") }}</h1>
            </div>
            <div class="d-flex justify-content-end w-100 mt-3">
              <button
                class="rounded-lg btn modal-logout bg-white color-c7 outline-none"
                @click="logout"
              >
                {{ $t("logout") }}
              </button>
              <button
                class="rounded-lg btn btn-primary outline-none ml-2"
                @click="$bvModal.hide('log-out-modal2')"
              >
                {{ $t("continueSession") }}
              </button>
            </div>
          </div>
        </b-modal>
        <button
          class="btn btn-outline-secondary mb-4 mb-lg-0 text-white border-radius-13 w-75 d-flex justify-content-around align-items-center"
          v-b-modal.log-out-modal2
        >
          <span class="w-75 text-right">{{
            $t("adminDashboardLogoutBtn")
          }}</span>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            class="w-50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.375 14.875H3.54167C3.16594 14.875 2.80561 14.7257 2.53993 14.4601C2.27426 14.1944 2.125 13.8341 2.125 13.4583V3.54167C2.125 3.16594 2.27426 2.80561 2.53993 2.53993C2.80561 2.27426 3.16594 2.125 3.54167 2.125H6.375"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.3334 12.0416L14.875 8.49998L11.3334 4.95831"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.875 8.5H6.375"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="w-82 d-flex flex-column align-items-center">
      <div
        class="d-flex flex-column pt-lg-15 justify-content-center w-100 align-items-center"
      >
        <div
          class="w-100 d-flex justify-content-around flex-column flex-lg-row align-items-center"
        >
          <div class="w-100 d-flex justify-content-center align-items-center order-1 order-lg-0">
            <div
              class="w-95 d-flex justify-content-between flex-column flex-lg-row align-items-center"
            >
              <div
                v-if="this.$route.fullPath != '/admin/dashboard'"
                class="width-75 pt-lg-0 pt-15"
              >
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none outline-none"
                  no-caret
                  menu-class="mt-11"
                >
                  <template #button-content>
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      class="position-absolute mt-19"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.25 17H29.75"
                        stroke="#C5C7CD"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.25 8.5H29.75"
                        stroke="#C5C7CD"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.25 25.5H29.75"
                        stroke="#C5C7CD"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </template>
                  <b-dropdown-item @click.native="searchHandler">{{
                    $t("adminDashboardSearchByUserName")
                  }}</b-dropdown-item>
                  <b-dropdown-item @click.native="searchHandler">{{
                    $t("adminDashboardSearchByFirstLastName")
                  }}</b-dropdown-item>
                  <b-dropdown-item @click.native="searchHandler">{{
                    $t("adminDashboardSearchByEmail")
                  }}</b-dropdown-item>
                  <b-dropdown-item @click.native="searchHandler">{{
                    $t("adminDashboardSearchByDate")
                  }}</b-dropdown-item>
                  <b-dropdown-item @click.native="searchHandler">{{
                    $t("adminDashboardSearchByOrderNumber")
                  }}</b-dropdown-item>
                  <b-dropdown-item @click.native="searchHandler">{{
                    $t("adminDashboardSearchByProductName")
                  }}</b-dropdown-item>
                  <b-dropdown-item @click.native="searchHandler">{{
                    $t("adminDashboardSearchByOrderStatus")
                  }}</b-dropdown-item>
                  <b-dropdown-item @click.native="searchHandler">{{
                    $t("adminDashboardSearchByClientAddress")
                  }}</b-dropdown-item>
                  <b-dropdown-item @click.native="searchHandler">{{
                    $t("adminDashboardSearchByClientPhone")
                  }}</b-dropdown-item>
                  <b-dropdown-item @click.native="searchHandler">{{
                    $t("adminDashboardSearchByClientCompanyName")
                  }}</b-dropdown-item>
                  <b-dropdown-item @click.native="searchHandler">{{
                    $t("adminDashboardSearchByClientMemberShip")
                  }}</b-dropdown-item>
                </b-dropdown>

                <input
                  class="w-100 px-5 search-field text-center outline-none"
                  :placeholder="quickSearch"
                />
                <svg
                  width="30"
                  height="40"
                  viewBox="0 0 28 28"
                  class="position-absolute mx-n5 mt-2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11.375"
                    cy="11.375"
                    r="10.625"
                    stroke="#C5C7CD"
                    stroke-width="1.5"
                  />
                  <path
                    d="M19.25 19.25L26.25 26.25"
                    stroke="#C5C7CD"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div
                v-else
                class="width-75 fs-24 font-weight-bolder pt-lg-3 pt-15"
              >
                {{ $t("adminDashboardHeading") }}
              </div>

              <div class="pt-3 d-flex align-items-start">
                <p class="d-flex pr-2 justify-content-center mb-0">
                  <img
                    v-if="this.$i18n.locale == 'en'"
                    src="../assets/enFlag.png"
                    width="24"
                    height="24"
                    class="rounded-circle"
                  />
                  <img
                    v-else-if="this.$i18n.locale == 'ar'"
                    src="../assets/arFlag.png"
                    width="24"
                    height="24"
                    class="rounded-circle"
                  />
                  <img
                    v-else
                    if="this.$i18n.locale == 'ch'"
                    src="../assets/chFlag.png"
                    width="24"
                    height="24"
                    class="rounded-circle"
                  />
                </p>

                <b-dropdown
                  :text="`${$t('setLanguage')}`"
                  variant="transparent"
                  toggle-class="p-0 d-flex align-items-center"
                >
                  <b-dropdown-item @click="switchLocale('en')">
                    <img
                      src="../assets/enFlag.png"
                      width="24"
                      height="24"
                      class="rounded-circle"
                    />
                    ENGLISH</b-dropdown-item
                  >
                  <b-dropdown-item @click="switchLocale('ar')">
                    <img
                      src="../assets/arFlag.png"
                      width="24"
                      height="24"
                      class="rounded-circle"
                    />
                    عربى</b-dropdown-item
                  >
                  <b-dropdown-item @click="switchLocale('ch')">
                    <img
                      src="../assets/chFlag.png"
                      width="24"
                      height="24"
                      class="rounded-circle"
                    />
                    中文</b-dropdown-item
                  >
                </b-dropdown>
              </div>
            </div>
          </div>
          <div
            class="width-50-resp d-flex flex-column flex-lg-row flex-wrap justify-content-between align-items-center pt-3"
          >
            <div
              class="w-100 d-flex justify-content-around align-items-center pt-15 pt-lg-0"
            >
              <button
                class="btn btn-transparent outline-none d-block d-lg-none p-0"
                v-on:click="handleSideBar"
              >
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.25 17H29.75"
                    stroke="#C5C7CD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.25 8.5H29.75"
                    stroke="#C5C7CD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.25 25.5H29.75"
                    stroke="#C5C7CD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <b-popover
                target="popover-messages"
                triggers="hover"
                placement="bottom"
                custom-class="pop-over p-0"
              >
                <div class="d-flex flex-column w-100 p-2" dir="auto">
                  <div class="px-2 py-2 border-bottom w-100">
                    <p class="mb-1 fs-20">{{ $t("popupMessages") }}</p>
                    <p class="fs-14 font-weight-light">
                      {{ $t("popupDaysAgo") }}
                    </p>
                  </div>
                  <div
                    class="d-flex w-100 justify-content-between align-items-center mt-3"
                  >
                    <p class="font-12 mb-0">{{ $t("popupNewMessages") }}</p>
                    <p class="font-11 mb-0">{{ $t("popupDismiss") }}</p>
                  </div>
                  <div
                    class="w-100 py-2 mt-3 d-flex justify-content-center align-items-center"
                  >
                    <button
                      class="btn noti-btn w-100 d-flex align-items-center justify-content-center py-3"
                      dir="ltr"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 8H15"
                          stroke="#625D5D"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 1L15 8L8 15"
                          stroke="#625D5D"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p class="fs-18 mb-0 ml-3">{{ $t("popupViewAll") }}</p>
                    </button>
                  </div>
                </div>
              </b-popover>
              <div class="d-none d-lg-block">
                <button
                  v-if="role == 'employee'"
                  class="btn py-0 employee-btn rounded-pill"
                >
                  Employee
                </button>

                <button v-else class="btn py-0 btn-245 text-white rounded-pill">
                  {{ $t("adminDashboardUserAdmin") }}
                </button>
              </div>
              <button
                class="outline-none"
                v-b-popover.hover.top
                id="popover-messages"
              >
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.625 6.4543C22.8007 6.3007 23.0619 6.44439 23.0619 6.68719V16.8201C23.0619 18.1332 22.0935 19.1985 20.8999 19.1985H2.16205C0.96842 19.1985 0 18.1332 0 16.8201V6.69214C0 6.44439 0.256744 6.30565 0.436915 6.45926C1.44587 7.32143 2.78364 8.41648 7.37801 12.0881C8.32841 12.8512 9.93194 14.4566 11.531 14.4467C13.139 14.4616 14.774 12.8215 15.6884 12.0881C20.2828 8.41648 21.616 7.31647 22.625 6.4543ZM11.531 12.8561C12.5759 12.876 14.0804 11.4093 14.8371 10.8048C20.8143 6.03313 21.2692 5.61691 22.6475 4.42772C22.9088 4.20474 23.0619 3.85789 23.0619 3.49122V2.54978C23.0619 1.23671 22.0935 0.171387 20.8999 0.171387H2.16205C0.96842 0.171387 0 1.23671 0 2.54978V3.49122C0 3.85789 0.153145 4.19979 0.414394 4.42772C1.7927 5.61196 2.24764 6.03313 8.22481 10.8048C8.98153 11.4093 10.486 12.876 11.531 12.8561Z"
                    fill="#C5C7CD"
                  />
                </svg>
                <span
                  class="rounded-circle fs-10 red-circle position-absolute text-center text-white d-flex justify-content-center align-content-center bg-red mt-n15 ml-3"
                  style="width: 15px; height: 14px"
                  >5</span
                >
              </button>
              <b-popover
                target="popover-target-2"
                triggers="hover"
                placement="bottom"
                custom-class="pop-over p-0"
              >
                <div class="d-flex flex-column w-100" dir="auto">
                  <div class="py-2 border-bottom w-100">
                    <p class="mb-1 fs-20">{{ $t("popupNotifications") }}</p>
                    <p class="fs-14 font-weight-light">
                      {{ $t("popupDaysAgo") }}
                    </p>
                  </div>
                  <div
                    class="d-flex w-100 justify-content-between align-items-center mt-3"
                  >
                    <p class="font-12 mb-0">
                      {{
                        $t("adminDashboardNotificationNumberOfNotifications")
                      }}
                    </p>
                    <p class="font-11 mb-0">{{ $t("popupDismiss") }}</p>
                  </div>
                  <div
                    class="w-100 py-2 mt-3 d-flex justify-content-center align-items-center"
                  >
                    <button
                      class="btn noti-btn w-100 d-flex align-items-center justify-content-around"
                      dir="ltr"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        class="w-50"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 8H15"
                          stroke="#625D5D"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 1L15 8L8 15"
                          stroke="#625D5D"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p class="fs-18 mb-0 w-75 text-left">
                        {{ $t("popupViewAll") }}
                      </p>
                    </button>
                  </div>
                </div>
              </b-popover>

              <button
                class="outline-none"
                v-b-popover.hover.top
                id="popover-target-2"
              >
                <svg
                  width="25"
                  height="26"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 26C14.3626 26 15.8734 24.5451 15.8734 22.75H9.12659C9.12659 24.5451 10.6374 26 12.5 26ZM23.8585 18.3975C22.8396 17.3433 20.9333 15.7574 20.9333 10.5625C20.9333 6.6168 18.0603 3.4582 14.1864 2.68328V1.625C14.1864 0.727695 13.4313 0 12.5 0C11.5687 0 10.8136 0.727695 10.8136 1.625V2.68328C6.93969 3.4582 4.06672 6.6168 4.06672 10.5625C4.06672 15.7574 2.16038 17.3433 1.14155 18.3975C0.825143 18.7251 0.684869 19.1166 0.687506 19.5C0.693307 20.3328 1.372 21.125 2.38028 21.125H22.6197C23.628 21.125 24.3072 20.3328 24.3125 19.5C24.3151 19.1166 24.1749 18.7246 23.8585 18.3975Z"
                    fill="#C5C7CD"
                  />
                </svg>

                <span
                  class="rounded-circle red-circle fs-10 position-absolute text-center text-white d-flex justify-content-center align-content-center bg-red mt-n15 ml-3"
                  style="width: 15px; height: 14px"
                  >5</span
                >
              </button>
              <h1 class="mb-0 fs-18 border-left p-2">{{user.f_name + " " + user.l_name}}</h1>
              <div class="d-flex align-center">
                <img
                  v-bind:src="avatar"
                  width="49"
                  height="49"
                />
                <div
                  class="text-center d-flex align-items-center justify-content-center p-0"
                >
                  <b-button
                    variant="transparent"
                    id="popover-button-variant"
                    class="outline-none"
                  >
                    <svg
                      width="15"
                      height="8"
                      viewBox="0 0 15 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L7.5 7L14 1"
                        stroke="#7D7D7D"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </b-button>
                  <b-popover
                    target="popover-button-variant"
                    variant="light"
                    placement="bottom"
                    triggers="focus"
                    custom-class="w-100"
                  >
                    <template #title>{{
                      $t("adminDashboardMyaccount")
                    }}</template>
                    <button
                      class="btn btn-transparent mb-2 rounded-0 w-100 d-flex justify-content-around align-items-center"
                      @click="account"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        class="w-25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.8333 9.16667H4.16667C3.24619 9.16667 2.5 9.91286 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91286 16.7538 9.16667 15.8333 9.16667Z"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.83334 9.16667V5.83334C5.83334 4.72827 6.27233 3.66846 7.05373 2.88706C7.83513 2.10566 8.89494 1.66667 10 1.66667C11.1051 1.66667 12.1649 2.10566 12.9463 2.88706C13.7277 3.66846 14.1667 4.72827 14.1667 5.83334V9.16667"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span class="flex-grow-1 text-left">{{
                        $t("adminDashboardAccountDetails")
                      }}</span>
                    </button>
                    <button
                      class="btn btn-transparent my-2 rounded-0 w-100 d-flex justify-content-center align-items-center"
                      @click="account"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        class="w-25"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66668C5.78262 12.5 4.93478 12.8512 4.30965 13.4763C3.68453 14.1014 3.33334 14.9493 3.33334 15.8333V17.5"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.99999 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99999 2.5C8.15904 2.5 6.66666 3.99238 6.66666 5.83333C6.66666 7.67428 8.15904 9.16667 9.99999 9.16667Z"
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span class="flex-grow-1 text-left">{{
                        $t("adminDashboardChangePassword")
                      }}</span>
                    </button>
                    <router-link to="/admin">
                      <button
                        class="btn btn-transparent my-2 rounded-0 bg-f7 w-100 d-flex justify-content-center align-items-center"
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          class="w-25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.375 14.875H3.54167C3.16594 14.875 2.80561 14.7257 2.53993 14.4601C2.27426 14.1944 2.125 13.8341 2.125 13.4583V3.54167C2.125 3.16594 2.27426 2.80561 2.53993 2.53993C2.80561 2.27426 3.16594 2.125 3.54167 2.125H6.375"
                            stroke="#5C5C5C"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M11.3335 12.0416L14.8752 8.49992L11.3335 4.95825"
                            stroke="#5C5C5C"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.875 8.5H6.375"
                            stroke="#5C5C5C"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <span class="flex-grow-1 text-left color-ff3">{{
                          $t("adminDashboardLogoutBtn")
                        }}</span>
                      </button>
                    </router-link>
                  </b-popover>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminDashboard",
  data() {
    return {
      user: JSON.parse(localStorage.getItem('userInfo')),
      avatar: localStorage.getItem('avatar'),
      role: localStorage.getItem("role"),
      quickSearch: this.$t("adminDashBoardQuickSearch"),
      activeSideBar: [
        { isActive: true },
        { isActive: false },
        { isActive: false },
        { isActive: false },
        { isActive: false },
        { isActive: false },
        { isActive: false },
      ],
    };
  },
  methods: {
    notifications() {
      this.activeSideBar.map((item) => {
        item.isActive = false;
      });
      this.activeSideBar[4].isActive = true;
      this.$router
        .push({ path: "/admin/dashboard/notifications" })
        .catch(() => {});
      document.getElementsByClassName("admin-side")[0].classList.add("d-none");
    },

    handleSideBar() {
      const sideBar = document.getElementsByClassName("admin-side")[0];
      if (sideBar.classList.contains("d-none"))
        sideBar.classList.remove("d-none");
      else sideBar.classList.add("d-none");
    },
    logout() {
      this.$router.push({ path: "/admin" });
    },
    dashboard() {
      this.activeSideBar.map((item) => {
        item.isActive = false;
      });
      this.activeSideBar[0].isActive = true;
      this.$router.push({ path: "/admin/dashboard" }).catch(() => {});
      document.getElementsByClassName("admin-side")[0].classList.add("d-none");
    },
    toContact() {
      this.activeSideBar.map((item) => {
        item.isActive = false;
      });
      this.activeSideBar[3].isActive = true;
      this.$router.push({ path: "/admin/dashboard" }).catch(() => {});
      document.getElementsByClassName("admin-side")[0].classList.add("d-none");
    },
    settings() {
      this.activeSideBar.map((item) => {
        item.isActive = false;
      });
      this.activeSideBar[6].isActive = true;
      this.$router.push({ path: "/admin/dashboard/settings" }).catch(() => {});
      document.getElementsByClassName("admin-side")[0].classList.add("d-none");
    },
    clients() {
      this.activeSideBar.map((item) => {
        item.isActive = false;
      });
      this.activeSideBar[1].isActive = true;
      this.$router.push({ path: "/admin/dashboard/clients" }).catch(() => {});
      document.getElementsByClassName("admin-side")[0].classList.add("d-none");
    },
    orders() {
      this.activeSideBar.map((item) => {
        item.isActive = false;
      });
      this.activeSideBar[2].isActive = true;
      this.$router.push({ path: "/admin/dashboard/orders" }).catch(() => {});
      document.getElementsByClassName("admin-side")[0].classList.add("d-none");
    },

    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        document.getElementById("app").classList.remove(this.$i18n.locale);
        localStorage.currentLanguage = locale;
        document.getElementById("app").classList.add(locale);
        this.$i18n.locale = locale;
                location.reload();
      }
    },

    messages() {
      this.activeSideBar.map((item) => {
        item.isActive = false;
      });
      this.activeSideBar[5].isActive = true;
      this.$router.push({ path: "/admin/dashboard/messages" }).catch(() => {});
      document.getElementsByClassName("admin-side")[0].classList.add("d-none");
    },
    account() {
      this.$router.push({ path: "/admin/dashboard/account" }).catch(() => {});
    },
    searchHandler(e) {
      this.quickSearch = e.target.innerText;
    },
  },
};
</script>
<style scoped>
.width-50-resp {
  width: 100%;
}

.btn-245 {
  background: #245aab;
}
.admin-hover:hover {
  transform: scale(1.1);
}

.employee-btn {
  background: #64bb9f;
  color: white !important;
}
.color-ff3 {
  color: #ff3737;
}
.width-75 {
  width: 100% !important;
}
.w-95 {
  width: 95% !important;
}
.red-circle {
  background: #ff3737;
}
.border-grey {
  border: 1px solid #dfe0eb;
}
.active-tab {
  border-left: 1px solid #ffe663;
  background: #40414d;
}
.search-field {
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  height: 55px !important;
}

.divider {
  border: 1px solid #dfe0eb;
  opacity: 0.05;
}
.h-56 {
  height: 56px !important;
}
.w-82 {
  width: 100%;
  background: #f7f8fc;
}
.bg-f7 {
  background: #f7f8fc;
}

.w-18 {
  width: 60%;
  background: #363740;
  top: 20% !important;
}
@media only screen and (max-width: 576px) {
  .w-82 {
    width: 100% !important;
  }
}
@media only screen and (min-width: 1200px) {
  .width-75 {
    width: 75% !important;
  }
  .w-18 {
    width: 18%;
  }
  .w-82 {
    width: 82 !important;
  }
  .width-50-resp {
    width: 53%;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .width-75 {
    width: 75% !important;
  }
  .w-18 {
    width: 25%;
  }
  .w-82 {
    width: 82 !important;
  }
  .width-50-resp {
    width: 67%;
  }
}
</style>