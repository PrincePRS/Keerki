<template>
  <div
    class="w-100 admin-clients-cont py-4 mt-5 d-flex align-items-center flex-column"
  >
    <div
      class="w-90 d-flex justify-content-between flex-column flex-lg-row align-items-center"
    >
      <p class="fs-19">{{ $t("adminOrdersAllOrders") }}</p>
      <div
        class="d-flex justify-content-around align-items-center flex-column flex-lg-row w-50"
      >
        <div class="d-flex align-items-center" dir="auto">
          <p class="d-none">{{ $t("rtlHelper") }}</p>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.79167 12.4583C9.92128 12.4583 12.4583 9.92128 12.4583 6.79167C12.4583 3.66205 9.92128 1.125 6.79167 1.125C3.66205 1.125 1.125 3.66205 1.125 6.79167C1.125 9.92128 3.66205 12.4583 6.79167 12.4583Z"
              stroke="#718096"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.875 13.875L10.7938 10.7937"
              stroke="#718096"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input
            class="border-bottom outline-none px-2"
            :placeholder="`${$t('adminOrdersSearchOrders')}`"
          />
        </div>
        <div
          class="d-flex justify-content-between align-items-center w-25-resp pt-4 pt-lg-0"
        >
          <button
            class="outline-none d-flex align-items-center justify-content-between"
          >
            <b-dropdown
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template #button-content>
                <div class="d-flex align-items-center text-dark">
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    class="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.128568 2.26839L2.31563 0.125478C2.48647 -0.0418526 2.7636 -0.0417991 2.93434 0.125478L5.12132 2.26839C5.39667 2.53812 5.20059 3.00001 4.81195 3.00001H3.5V11.5714C3.5 11.8081 3.30414 12 3.0625 12H2.1875C1.94586 12 1.75 11.8081 1.75 11.5714V3.00001H0.437935C0.0485329 3.00001 -0.146209 2.53758 0.128568 2.26839ZM6.5625 1.7143H13.5625C13.8041 1.7143 14 1.52243 14 1.28573V0.428584C14 0.191879 13.8041 1.34454e-05 13.5625 1.34454e-05H6.5625C6.32086 1.34454e-05 6.125 0.191879 6.125 0.428584V1.28573C6.125 1.52243 6.32086 1.7143 6.5625 1.7143ZM6.125 4.71429V3.85715C6.125 3.62045 6.32086 3.42858 6.5625 3.42858H11.8125C12.0541 3.42858 12.25 3.62045 12.25 3.85715V4.71429C12.25 4.951 12.0541 5.14287 11.8125 5.14287H6.5625C6.32086 5.14287 6.125 4.951 6.125 4.71429ZM6.125 11.5714V10.7143C6.125 10.4776 6.32086 10.2857 6.5625 10.2857H8.3125C8.55414 10.2857 8.75 10.4776 8.75 10.7143V11.5714C8.75 11.8081 8.55414 12 8.3125 12H6.5625C6.32086 12 6.125 11.8081 6.125 11.5714ZM6.125 8.14286V7.28572C6.125 7.04901 6.32086 6.85715 6.5625 6.85715H10.0625C10.3041 6.85715 10.5 7.04901 10.5 7.28572V8.14286C10.5 8.37957 10.3041 8.57143 10.0625 8.57143H6.5625C6.32086 8.57143 6.125 8.37957 6.125 8.14286Z"
                      fill="#C5C7CD"
                    />
                  </svg>

                  <p class="mb-0">{{ $t("clientsSort") }}</p>
                </div>
              </template>
              <b-dropdown-item href="#">{{
                $t("sortNewToOld")
              }}</b-dropdown-item>
              <b-dropdown-item href="#">{{
                $t("sortOldToNew")
              }}</b-dropdown-item>
              <b-dropdown-item href="#">{{
                $t("sortHighToLow")
              }}</b-dropdown-item>
              <b-dropdown-item href="#">{{
                $t("sortLowToHigh")
              }}</b-dropdown-item>
            </b-dropdown>
          </button>
          <button
            class="outline-none d-flex align-items-center justify-content-between"
          >
            <b-dropdown
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template #button-content>
                <div class="d-flex align-items-center text-dark">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    class="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4369 0H0.563154C0.0635131 0 -0.188604 0.606234 0.165419 0.960258L4.5 5.29549V10.125C4.5 10.3085 4.58955 10.4805 4.73993 10.5858L6.61493 11.8979C6.98484 12.1568 7.5 11.8944 7.5 11.437V5.29549L11.8347 0.960258C12.188 0.606937 11.9376 0 11.4369 0Z"
                      fill="#C5C7CD"
                    />
                  </svg>
                  <p class="mb-0">{{ $t("adminOrdersFilter") }}</p>
                </div>
              </template>
              <div class="px-3">
                <b-form-checkbox
                  id="checkbox-ct1"
                  name="checkbox-ct1"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  {{ $t("filterInProgress") }}
                </b-form-checkbox>
              </div>

              <div class="px-3 mt-1">
                <b-form-checkbox
                  id="checkbox-ct2"
                  name="checkbox-ct2"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  {{ $t("filterShipped") }}
                </b-form-checkbox>
              </div>

              <div class="px-3 mt-1">
                <b-form-checkbox
                  id="checkbox-ct3"
                  name="checkbox-ct3"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  {{ $t("filterDelivered") }}
                </b-form-checkbox>
              </div>

              <div class="px-3 mt-1">
                <b-form-checkbox
                  id="checkbox-ct4"
                  name="checkbox-ct4"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  {{ $t("filterWaiting") }}
                </b-form-checkbox>
              </div>
              <div class="px-3 mt-1">
                <b-form-checkbox
                  id="checkbox-ct5"
                  name="checkbox-ct5"
                  value="accepted"
                  unchecked-value="not_accepted"
                >
                  {{ $t("filterCancelled") }}
                </b-form-checkbox>
              </div>
            </b-dropdown>
          </button>
        </div>
      </div>
    </div>

    <table
      class="table table-borderless table-responsive-lg table-hover border-bottom clients-table mt-4"
    >
      <thead class="pt-0 text-center">
        <tr class="border-bottom">
          <th class="pt-0" scope="col"></th>
          <th class="pt-0 text-left fs-18" scope="col">
            {{ $t("adminOrdersStatus") }}
          </th>
          <th class="pt-0  fs-18" scope="col">
            {{ $t("adminOrdersDate") }}
          </th>
          <th class="pt-0 fs-18" scope="col">
            {{ $t("adminOrdersPhone") }}
          </th>
          <th class="pt-0 fs-18" scope="col">
            {{ $t("adminOrdersTotal") }}
          </th>
          <th class="pt-0 fs-18" scope="col">
            {{ $t("adminOrdersNumber") }}
          </th>
          <th class="pt-0  fs-18" scope="col">
            {{ $t("adminOrdersCountry") }}
          </th>
          <th class="pt-0  fs-18" scope="col">
            {{ $t("adminOrdersCompany") }}
          </th>
          <th class="pt-0">
            <div class="d-flex align-items-center justify-content-around">
              <button
                class="btn-select-all outline-none btn-primary d-flex justify-content-center align-items-center"
                @click="selectAllChecks"
              >
                -
              </button>
              <p class="mb-0 text-primary">(2)</p>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr @click="rowClicked" class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersEdit") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersCopy") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersDelete") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersInvoice") }}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert
              :alert="200"
              :type="`${$t('adminOrdersNewBtn')}`"
              :color="'cancelled'"
            />
          </td>
          <td><pre>May 26, 2019</pre></td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td><pre>Shudi international...</pre></td>
          <td @click="stopDefault">
            <b-form-checkbox
              id="checkbox-c2"
              name="checkbox-c2"
              v-model="select1"
              value="true"
              unchecked-value="false"
            >
            </b-form-checkbox>
          </td>
        </tr>
        <tr @click="rowClicked" class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersEdit") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersCopy") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersDelete") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersInvoice") }}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert
              :alert="200"
              :type="`${$t('adminOrdersDeliveredBtn')}`"
              :color="'done'"
            />
            <p class="mb-0 text-status text-left">By Liyong</p>
          </td>
          <td><pre>May 26, 2019</pre></td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td><pre>Shudi international...</pre></td>
          <td @click="stopDefault">
            <b-form-checkbox
              id="checkbox-c3"
              name="checkbox-c3"
              v-model="select2"
              value="true"
              unchecked-value="false"
            >
            </b-form-checkbox>
          </td>
        </tr>
        <tr @click="rowClicked" class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersEdit") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersCopy") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersDelete") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersInvoice") }}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert
              :alert="200"
              :type="`${$t('adminOrdersDeliveredBtn')}`"
              :color="'done'"
            />
            <p class="mb-0 text-status text-left">By Liyong</p>
          </td>
          <td><pre>May 26, 2019</pre></td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td><pre>Shudi international...</pre></td>
          <td @click="stopDefault">
            <b-form-checkbox
              id="checkbox-c4"
              name="checkbox-c4"
              v-model="select3"
              value="true"
              unchecked-value="false"
            >
            </b-form-checkbox>
          </td>
        </tr>
        <tr @click="rowClicked" class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersEdit") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersCopy") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersDelete") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersInvoice") }}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert
              :alert="200"
              :type="`${$t('adminOrdersCancelledBtn')}`"
              :color="'clientCancel'"
            />
            <p class="mb-0 text-status text-left">By Smith</p>
          </td>
          <td><pre>May 26, 2019</pre></td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td><pre>Shudi international...</pre></td>
          <td @click="stopDefault">
            <b-form-checkbox
              id="checkbox-c5"
              name="checkbox-c5"
              v-model="select4"
              value="true"
              unchecked-value="false"
            >
            </b-form-checkbox>
          </td>
        </tr>
        <tr @click="rowClicked" class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersEdit") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersCopy") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersDelete") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersInvoice") }}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert
              :alert="200"
              :type="`${$t('adminOrdersInprogressBtn')}`"
              :color="'in-progress'"
            />
            <p class="mb-0 text-status text-left">By Sara</p>
          </td>
          <td><pre>May 26, 2019</pre></td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td><pre>Shudi international...</pre></td>
          <td @click="stopDefault">
            <b-form-checkbox
              id="checkbox-c6"
              name="checkbox-c6"
              v-model="select5"
              value="true"
              unchecked-value="false"
            >
            </b-form-checkbox>
          </td>
        </tr>
        <tr @click="rowClicked" class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersEdit") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersCopy") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersDelete") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersInvoice") }}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert
              :alert="200"
              :type="`${$t('adminOrdersShippedBtn')}`"
              :color="'shipped'"
            />
            <p class="mb-0 text-status text-left">By Hedi</p>
          </td>
          <td><pre>May 26, 2019</pre></td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td><pre>Shudi international...</pre></td>
          <td @click="stopDefault">
            <b-form-checkbox
              id="checkbox-c7"
              name="checkbox-c7"
              v-model="select6"
              value="true"
              unchecked-value="false"
            >
            </b-form-checkbox>
          </td>
        </tr>
        <tr @click="rowClicked" class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersEdit") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersCopy") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersDelete") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersInvoice") }}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert
              :alert="200"
              :type="`${$t('adminOrdersInprogressBtn')}`"
              :color="'in-progress'"
            />
            <p class="mb-0 text-status text-left">By David</p>
          </td>
          <td><pre>May 26, 2019</pre></td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td><pre>Shudi international...</pre></td>
          <td @click="stopDefault">
            <b-form-checkbox
              id="checkbox-c8"
              name="checkbox-c8"
              v-model="select7"
              value="true"
              unchecked-value="false"
            >
            </b-form-checkbox>
          </td>
        </tr>
        <tr @click="rowClicked" class="text-center">
          <th class="pt-0" scope="row">
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="outline-none p-0 text-decoration-none"
              no-caret
            >
              <template #button-content>
                <svg
                  width="4"
                  height="16"
                  viewBox="0 0 4 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </template>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3334 2.00004C11.5085 1.82494 11.7163 1.68605 11.9451 1.59129C12.1739 1.49653 12.4191 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.6171 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4088 2.61178C14.5036 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5036 3.82619 14.4088 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5.00004 13.6667L1.33337 14.6667L2.33337 11L11.3334 2.00004Z"
                      stroke="#007EFF"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersEdit") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 9.99992H2.66666C2.31304 9.99992 1.9739 9.85944 1.72385 9.60939C1.4738 9.35935 1.33333 9.02021 1.33333 8.66659V2.66659C1.33333 2.31296 1.4738 1.97382 1.72385 1.72378C1.9739 1.47373 2.31304 1.33325 2.66666 1.33325H8.66666C9.02028 1.33325 9.35942 1.47373 9.60947 1.72378C9.85952 1.97382 10 2.31296 10 2.66659V3.33325"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersCopy") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4H2.33333H13"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.33337 3.99992V2.66659C4.33337 2.31296 4.47385 1.97382 4.7239 1.72378C4.97395 1.47373 5.31309 1.33325 5.66671 1.33325H8.33337C8.687 1.33325 9.02613 1.47373 9.27618 1.72378C9.52623 1.97382 9.66671 2.31296 9.66671 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2762 14.2761C11.0261 14.5261 10.687 14.6666 10.3334 14.6666H3.66671C3.31309 14.6666 2.97395 14.5261 2.7239 14.2761C2.47385 14.026 2.33337 13.6869 2.33337 13.3333V3.99992H11.6667Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersDelete") }}</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div
                  class="w-75 d-flex justify-content-around align-items-center"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9L8.5 12L11 9"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.5 6V11"
                      stroke="#52575C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="w-50">{{ $t("adminOrdersInvoice") }}</span>
                </div>
              </b-dropdown-item>
            </b-dropdown>
          </th>
          <td>
            <CustomAlert
              :alert="200"
              :type="`${$t('adminOrdersCancelledBtn')}`"
              :color="'clientCancel'"
            />
            <p class="mb-0 text-status text-left">By Jane</p>
          </td>
          <td><pre>May 26, 2019</pre></td>
          <td>18999897899</td>
          <td>£2550,30</td>
          <td>
            <p class="mb-0">#645468468</p>
            <p class="mb-0 updated-client">Updated 1 day ago</p>
          </td>
          <td>China</td>
          <td><pre>Shudi international...</pre></td>
          <td @click="stopDefault">
            <b-form-checkbox
              id="checkbox-c9"
              name="checkbox-c9"
              v-model="select8"
              value="true"
              unchecked-value="false"
            >
            </b-form-checkbox>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-md-end align-items-center w-90">
      <div class="w-50 d-flex flex-column flex-lg-row justify-content-between">
        <div
          class="d-flex align-items-center width-25 justify-content-lg-around justify-content-between"
        >
          <p class="mb-0 text-muted">{{ $t("adminOrdersRowsPerPage") }}</p>
          <select class="outline-none select-arrow">
            <option>8</option>
            <option>10</option>
          </select>
        </div>
        <div
          class="width-25 d-flex justify-content-between align-items-center pt-4 pt-lg-0"
        >
          <p class="mb-0 text-muted">1-8 of 1240</p>
          <button class="outline-none">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1.07071 7.07071C1.03166 7.03166 1.03166 6.96834 1.07071 6.92929L7 1"
                stroke="#9FA2B4"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button class="outlne-none">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L6.92929 7.07071C6.96834 7.03166 6.96834 6.96834 6.92929 6.92929L1 1"
                stroke="#9FA2B4"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomAlert from "../customAlert";
export default {
  name: "OrdersTable",
  components: {
    CustomAlert,
  },
  data() {
    return {
      select1: false,
      select2: false,
      select3: false,
      select4: false,
      select5: false,
      select6: false,
      select7: false,
      select8: false,
    };
  },
  methods: {
    selectAllChecks() {
      this.select1 = !this.select1;
      this.select2 = !this.select2;
      this.select3 = !this.select3;
      this.select4 = !this.select4;
      this.select5 = !this.select5;
      this.select6 = !this.select6;
      this.select7 = !this.select7;
      this.select8 = !this.select8;
    },
    rowClicked() {
      this.$router
        .push({ path: "/admin/dashboard/orders-detailed" })
        .catch(() => {});
    },
    stopDefault(event) {
      event.stopPropagation();
    },
  },
};
</script>
<style scoped>
pre{
      margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
}
.text-status {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: #c5c7cd;
  padding-top: 10px;
}
.btn-select-all {
  width: 20px;
  height: 20px;

  background: #0074bd;
  border-radius: 3px;
}
.updated-client {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.1px;
  color: #c5c7cd;
}
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
  .w-25-resp {
    width: 100%;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  .width-18 {
    width: 50% !important;
  }
  .w-25-resp {
    width: 100%;
  }
}
@media only screen and (max-width: 991px) and (min-width: 768px) {
  .width-18 {
    width: 30% !important;
  }
  .w-25-resp {
    width: 50%;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .width-18 {
    width: 30% !important;
  }
  .w-25-resp {
    width: 35%;
  }
}
@media only screen and (min-width: 1200px) {
  .w-25-resp {
    width: 25%;
  }
}
.admin-clients-cont {
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
}
</style>