<template>
  <div
    class="w-90 d-flex justify-content-center align-items-center flex-column pt-5"
    dir="auto"
  >
    <div
      class="w-100 client-details-card pb-1 d-flex flex-column justify-content-center align-items-center"
    >
      <div
        class="w-100 d-flex justify-content-center flex-column align-items-center"
      >
        <table class="table table-borderless table-responsive-sm">
          <tbody>
            <tr class="border-bottom">
              <td class="border-right p-lg-4">
                <div class="font-weight-bold">
                  <span class="text-muted font-weight-light">{{
                    $t("clientDetailsName")
                  }}</span>
                  <input
                    value="David Smith Will"
                    class="outline-none px-2 font-weight-bold"
                    type="text"
                    :disabled="isDisabled"
                  />
                </div>
              </td>
              <td class="p-lg-4">
                <div class="font-weight-bold">
                  <span class="font-weight-light text-muted">{{
                    $t("clientDetailsAddress")
                  }}</span>
                  <input
                    value="Guangzhou, street no 15"
                    class="outline-none px-2 font-weight-bold"
                    type="text"
                    :disabled="isDisabled"
                  />
                </div>
              </td>
            </tr>
            <tr class="border-bottom">
              <td class="border-right p-lg-4">
                <div class="font-weight-bold">
                  <span class="font-weight-light text-muted">{{
                    $t("clientDetailsCompanyName")
                  }}</span>
                  <input
                    value="Shudi"
                    class="outline-none px-2 font-weight-bold"
                    type="text"
                    :disabled="isDisabled"
                  />
                </div>
              </td>
              <td class="p-lg-4">
                <div class="font-weight-bold">
                  <span class="font-weight-light text-muted">{{
                    $t("clientDetailsEmail")
                  }}</span>
                  <input
                    value="david@email.com"
                    class="outline-none px-2 font-weight-bold"
                    type="email"
                    :disabled="isDisabled"
                  />
                </div>
              </td>
            </tr>
            <tr class="border-bottom">
              <td class="border-right p-lg-4">
                <div class="font-weight-bold">
                  <span class="text-muted font-weight-light">{{
                    $t("clientDetailsPhone")
                  }}</span>
                  <input
                    value="187171717"
                    class="outline-none px-2 font-weight-bold"
                    type="number"
                    :disabled="isDisabled"
                  />
                </div>
              </td>
              <td class="p-lg-4">
                <div class="font-weight-bold">
                  <span class="font-weight-light text-muted">{{
                    $t("clientDetailsWhatsapp")
                  }}</span>
                  <input
                    value="1123232323"
                    class="outline-none px-2 font-weight-bold"
                    type="number"
                    :disabled="isDisabled"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-90 d-flex align-items-center my-4">

        <b-modal
          id="reset-modal"
          centered
          hide-footer
          header-class="header-class"
          hide-header
          hide-header-close
        >
          <div
            class="d-flex flex-column w-100 justify-content-center align-items-center p-3"
          >
            <div class="w-100">
              <h1 class="fs-16">{{ $t("updateData") }}</h1>
            </div>
            <div class="d-flex justify-content-end w-100 mt-3">
              <button
                class="rounded-lg btn modal-logout bg-white color-c7 outline-none"
                @click="$bvModal.hide('reset-modal')"
              >
                {{ $t("companyInfoReset") }}
              </button>
              <button
                class="rounded-lg btn btn-primary outline-none ml-2"
                @click="$bvModal.hide('reset-modal');isDisabled = true;"
              >
                {{ $t("companySave") }}
              </button>
            </div>
          </div>
        </b-modal>
        <button
          v-if="isDisabled"
          class="btn p-0 mb-0 outline-none d-flex align-items-center justify-content-around"
          @click="editHandler"
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4H3C2.46957 4 1.96086 4.21071 1.58579 4.58579C1.21071 4.96086 1 5.46957 1 6V20C1 20.5304 1.21071 21.0391 1.58579 21.4142C1.96086 21.7893 2.46957 22 3 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V13"
              stroke="#FFB800"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 2.49998C17.8978 2.10216 18.4374 1.87866 19 1.87866C19.5626 1.87866 20.1022 2.10216 20.5 2.49998C20.8978 2.89781 21.1213 3.43737 21.1213 3.99998C21.1213 4.56259 20.8978 5.10216 20.5 5.49998L11 15L7 16L8 12L17.5 2.49998Z"
              stroke="#FFB800"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="mb-0 w-100">{{ $t("adminOrdersDetailsEdit") }}</p>
        </button>
        <button
          v-else
          class="btn btn-primary mb-0 outline-none d-flex align-items-center justify-content-around"
          @click="saveHandler"
        >
          {{ $t("companySave") }}
        </button>
      </div>
    </div>
    <div
      class="d-flex justify-content-center w-100 flex-column align-items-center mt-5"
    >
      <div
        class="w-90 d-flex justify-content-between flex-column flex-lg-row py-4"
      >
        <div class="mt-5 w-25">
          <div class="width-50">
            <p class="border-bottom mb-15 fs-22 text-muted">
              {{ $t("adminOrdersDetailsStatus") }}
            </p>
            <CustomAlert
              :type="`${$t('adminOrdersInprogressBtn')}`"
              :alert="200"
            />
          </div>
        </div>
        <div
          class="width-50 flex-column d-flex justify-content-center align-items-center pt-5 pt-lg-0"
        >
          <p class="font-24">
            <span class="font-weight-light">{{
              $t("adminOrdersDetailsOrderNumber")
            }}</span>
            <u>893943</u>
          </p>
          <div
            class="file-cont w-100 d-flex justify-content-center align-items-center"
          >
            <svg
              width="242"
              height="242"
              viewBox="0 0 242 242"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M181.5 221.832H60.5C49.3622 221.832 40.3333 212.803 40.3333 201.666V40.3324C40.3333 29.1946 49.3622 20.1657 60.5 20.1657H131.083C131.174 20.154 131.265 20.154 131.356 20.1657H131.416C131.511 20.1955 131.609 20.2158 131.708 20.2262C132.598 20.2832 133.476 20.4561 134.32 20.7405H134.471H134.623H134.744C134.93 20.8708 135.105 21.0158 135.268 21.174C136.366 21.6623 137.367 22.3456 138.222 23.1907L198.722 83.6907C199.567 84.5456 200.251 85.5466 200.739 86.6451C200.83 86.867 200.9 87.0787 200.971 87.3106L201.072 87.593C201.353 88.4338 201.519 89.309 201.566 90.1945C201.575 90.2949 201.598 90.3935 201.636 90.4869V90.5474C201.653 90.6135 201.663 90.681 201.667 90.749V201.666C201.667 207.014 199.542 212.144 195.76 215.926C191.978 219.708 186.848 221.832 181.5 221.832ZM145.442 141.166V191.582H154.92V171.012H169.642V162.563H154.92V149.646H171.417V141.166H145.442ZM108.134 141.166V191.582H120.294C125.396 191.833 130.335 189.756 133.725 185.936C137.203 181.498 138.945 175.946 138.626 170.317V162.149C138.859 156.579 137.068 151.113 133.584 146.762C130.303 143.027 125.513 140.971 120.546 141.166H108.134ZM70.5833 141.166V191.582H80.0616V173.846H86.3738C90.5888 174.079 94.7059 172.519 97.7075 169.55C100.572 166.348 102.058 162.145 101.842 157.854C102.029 153.46 100.544 149.158 97.6873 145.814C94.8612 142.68 90.7811 140.975 86.5654 141.166H70.5833ZM131.083 40.3324V90.749H181.5L131.083 40.3324ZM120.455 183.133H117.612V149.646H121.06C123.509 149.501 125.864 150.61 127.312 152.59C128.79 155.648 129.424 159.046 129.147 162.431V171.194C129.369 174.418 128.669 177.639 127.131 180.481C125.478 182.41 122.981 183.402 120.455 183.133ZM86.5654 165.366H80.0516V149.646H86.6561C88.305 149.664 89.8287 150.528 90.6895 151.935C91.7807 153.735 92.3075 155.821 92.202 157.924C92.3284 159.885 91.8077 161.834 90.7197 163.47C89.7169 164.729 88.1734 165.433 86.5654 165.366Z"
                fill="#2E3A59"
                fill-opacity="0.35"
              />
            </svg>
          </div>
          <div
            class="w-100 d-flex justify-content-around pt-4 align-items-center"
          >
            <div class="d-flex">
              <p class="mb-0 text-muted">{{ $t("adminOrdersDetailsEdit") }}</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="mx-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16663 3.33336H3.33329C2.89127 3.33336 2.46734 3.50895 2.15478 3.82151C1.84222 4.13407 1.66663 4.558 1.66663 5.00003V16.6667C1.66663 17.1087 1.84222 17.5326 2.15478 17.8452C2.46734 18.1578 2.89127 18.3334 3.33329 18.3334H15C15.442 18.3334 15.8659 18.1578 16.1785 17.8452C16.491 17.5326 16.6666 17.1087 16.6666 16.6667V10.8334"
                  stroke="#678AAA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.4166 2.08333C15.7481 1.75181 16.1978 1.56557 16.6666 1.56557C17.1355 1.56557 17.5851 1.75181 17.9166 2.08333C18.2481 2.41485 18.4344 2.86449 18.4344 3.33333C18.4344 3.80218 18.2481 4.25181 17.9166 4.58333L9.99996 12.5L6.66663 13.3333L7.49996 10L15.4166 2.08333Z"
                  stroke="#678AAA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="d-flex">
              <p class="mb-0 text-muted">
                {{ $t("adminOrdersDetailsDownload") }}
              </p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="mx-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
                  stroke="#678AAA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.83337 8.33336L10 12.5L14.1667 8.33336"
                  stroke="#678AAA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 12.5V2.5"
                  stroke="#678AAA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="d-flex align-items-center">
              <p class="mb-0 text-muted">{{ $t("adminOrdersDetailsView") }}</p>
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                class="mx-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.833313 8.00003C0.833313 8.00003 4.16665 1.33336 9.99998 1.33336C15.8333 1.33336 19.1666 8.00003 19.1666 8.00003C19.1666 8.00003 15.8333 14.6667 9.99998 14.6667C4.16665 14.6667 0.833313 8.00003 0.833313 8.00003Z"
                  stroke="#678AAA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 10.5C11.3807 10.5 12.5 9.38071 12.5 8C12.5 6.61929 11.3807 5.5 10 5.5C8.61929 5.5 7.5 6.61929 7.5 8C7.5 9.38071 8.61929 10.5 10 10.5Z"
                  stroke="#678AAA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="mt-5 w-xl-25">
          <div class="w-100 d-flex justify-content-end">
            <div
              class="border-bottom mb-15 fs-22 text-muted d-flex align-items-center pb-2"
            >
              <button class="outline-none">
                <svg
                  width="6"
                  height="23"
                  viewBox="0 0 6 23"
                  fill="none"
                  class="mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.83333 5.66667C4.39167 5.66667 5.66667 4.39167 5.66667 2.83333C5.66667 1.275 4.39167 0 2.83333 0C1.275 0 0 1.275 0 2.83333C0 4.39167 1.275 5.66667 2.83333 5.66667ZM2.83333 8.5C1.275 8.5 0 9.775 0 11.3333C0 12.8917 1.275 14.1667 2.83333 14.1667C4.39167 14.1667 5.66667 12.8917 5.66667 11.3333C5.66667 9.775 4.39167 8.5 2.83333 8.5ZM2.83333 17C1.275 17 0 18.275 0 19.8333C0 21.3917 1.275 22.6667 2.83333 22.6667C4.39167 22.6667 5.66667 21.3917 5.66667 19.8333C5.66667 18.275 4.39167 17 2.83333 17Z"
                    fill="#C5C7CD"
                  />
                </svg>
              </button>
              <p class="mb-0">{{ $t("adminOrdersDetailsTags") }}</p>
            </div>
          </div>
          <div class="w-100 px-2 d-flex justify-content-end align-item-center">
            <div
              class="bg-white px-4 w-100 rounded-lg border py-2 d-flex justify-content-between"
            >
              <div v-if="tags.length > 0" class="d-flex flex-wrap">
                <button
                  v-for="(item, index) in tags"
                  :key="item.id"
                  class="tags-btn px-2 mx-1 outline-none mt-2"
                >
                  {{ item.name }}
                  <button
                    class="px-1 text-muted opacity-50 outline-none"
                    @click="deleteTag(index)"
                  >
                    X
                  </button>
                </button>
                <input
                  class="outline-none mt-2 px-2 w-50"
                  placeholder="Add new tag"
                  @keypress="tagsInputHandler"
                />
              </div>
              <div v-else>
                <p class="mb-0">Categories</p>
              </div>

              <button class="outline-none" @click="addData">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="#A0A4A8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="w-100 d-flex justify-content-end">
            <div
              class="border-bottom mt-15 fs-22 text-muted d-flex align-items-center pb-2"
            >
              <p class="mb-0">{{ $t("adminOrdersDetailsRating") }}</p>
            </div>
          </div>
          <div class="w-100 d-flex justify-content-end">
            <b-form-rating
              id="rating-lg-no-border"
              color="#FFB800"
              v-model="ratingValue"
              no-border
              size="lg"
            ></b-form-rating>
          </div>
        </div>
      </div>
    </div>
    <div
      class="buttons-cont d-flex justify-content-center py-5 align-items-center flex-row flex-xl-column w-75-resp mt-5"
    >
      <div
        class="w-90 d-flex flex-column flex-xl-row justify-content-around align-items-center"
      >
        <button class="btn box-buttons button-color2C text-white rounded-pill">
          {{ $t("adminOrdersDetailsRecived") }}
        </button>
        <b-modal
          id="transfer-modal"
          centered
          hide-footer
          header-class="header-class2"
          no-stacking
          dir="auto"
        >
          <div class="w-100">
            <div dir="auto">
              <p class="d-none">{{ $t("clientsSearchFor") }}</p>
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                class="position-absolute mt-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8906 13.5742L10.582 10.2656C10.5 10.2109 10.418 10.1562 10.3359 10.1562H9.98047C10.8281 9.17188 11.375 7.85938 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7.10938 12.125 8.39453 11.6055 9.40625 10.7578V11.1133C9.40625 11.1953 9.43359 11.2773 9.48828 11.3594L12.7969 14.668C12.9336 14.8047 13.1523 14.8047 13.2617 14.668L13.8906 14.0391C14.0273 13.9297 14.0273 13.7109 13.8906 13.5742ZM5.6875 10.8125C3.25391 10.8125 1.3125 8.87109 1.3125 6.4375C1.3125 4.03125 3.25391 2.0625 5.6875 2.0625C8.09375 2.0625 10.0625 4.03125 10.0625 6.4375C10.0625 8.87109 8.09375 10.8125 5.6875 10.8125Z"
                  fill="#747474"
                />
              </svg>

              <input
                class="w-100 pt-4 pb-2 px-15 border-bottom outline-none"
                :placeholder="`${$t('clientsSearchFor')}`"
              />
            </div>
            <div class="overflow-scroll h-300 mt-3">
              <div
                class="d-flex justify-content-around w-75 align-items-center"
              >
                <div class="p-1 rounded-circle border">
                  <img
                    src="../../assets/ordersModal.jpeg"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  />
                </div>

                <div class="mx-2">
                  <p class="mb-0">First Last Name (Employee)</p>
                  <p
                    class="mb-0 font-weight-light d-flex justify-content-center align-items-center w-75 text-white button-color2A4"
                  >
                    Employee role
                  </p>
                </div>
              </div>
              <div
                class="d-flex justify-content-around w-75 align-items-center mt-4"
              >
                <div class="p-1 rounded-circle border">
                  <img
                    src="../../assets/ordersModal.jpeg"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  />
                </div>

                <div class="mx-2">
                  <p class="mb-0">First Last Name (Employee)</p>
                  <p
                    class="mb-0 font-weight-light d-flex justify-content-center align-items-center w-75 text-white button-color2A4"
                  >
                    Employee role
                  </p>
                </div>
              </div>
              <div
                class="d-flex justify-content-around w-75 align-items-center mt-4"
              >
                <div class="p-1 rounded-circle border">
                  <img
                    src="../../assets/ordersModal.jpeg"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  />
                </div>

                <div class="mx-2">
                  <p class="mb-0">First Last Name (Employee)</p>
                  <p
                    class="mb-0 font-weight-light d-flex justify-content-center align-items-center w-75 text-white button-color2A4"
                  >
                    Employee role
                  </p>
                </div>
              </div>
              <div
                class="d-flex justify-content-around w-75 align-items-center mt-4"
              >
                <div class="p-1 rounded-circle border">
                  <img
                    src="../../assets/ordersModal.jpeg"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  />
                </div>

                <div class="mx-2">
                  <p class="mb-0">First Last Name (Employee)</p>
                  <p
                    class="mb-0 font-weight-light d-flex justify-content-center align-items-center w-75 text-white button-color2A4"
                  >
                    Employee role
                  </p>
                </div>
              </div>
              <div
                class="d-flex justify-content-around w-75 align-items-center mt-4"
              >
                <div class="p-1 rounded-circle border">
                  <img
                    src="../../assets/ordersModal.jpeg"
                    class="rounded-circle"
                    width="50"
                    height="50"
                  />
                </div>

                <div class="mx-2">
                  <p class="mb-0">First Last Name (Employee)</p>
                  <p
                    class="mb-0 font-weight-light d-flex justify-content-center align-items-center w-75 text-white button-color2A4"
                  >
                    Employee role
                  </p>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
        <button
          class="btn box-buttons button-color2C mt-4 mt-xl-0 text-white rounded-pill"
          v-b-modal.transfer-modal
        >
          {{ $t("adminOrdersDetailsTransfer") }}
        </button>
        <button
          class="btn box-buttons button-color2C mt-4 mt-xl-0 text-white rounded-pill"
        >
          {{ $t("adminOrdersDetailsPayNow") }}
        </button>

        <b-modal
          id="question-modal"
          centered
          hide-footer
          content-class="content-class"
          header-class="header-class"
          hide-header
          size="lg"
          hide-header-close
        >
          <div dir="auto">
            <p>
              {{ $t("adminOrdersDetailsYourEnquiry") }}
            </p>
            <div class="modal-orders p-2">
              <input
                class="bg-transparent w-100 outline-none"
                :placeholder="`${$t('adminOrdersDetailsWriteYourQuestion')}`"
              />
              <div
                class="d-flex justify-content-end align-items-center pt-9 pt-lg-5"
              >
                <div
                  class="d-flex justify-content-around align-items-center w-xl-35"
                >
                  <button
                    class="order-color-c7 btn outline-none border rounded-pill modal-order-btn"
                    @click="$bvModal.hide('question-modal')"
                  >
                    {{ $t("adminOrdersDetailsIgnore") }}
                  </button>

                  <button
                    class="btn-primary btn outline-none border rounded-pill modal-order-btn"
                    @click="$bvModal.hide('question-modal')"
                  >
                    {{ $t("adminOrdersDetailsSubmit") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
        <button
          class="btn box-buttons button-color2C mt-4 mt-xl-0 text-white rounded-pill"
          v-b-modal.question-modal
        >
          {{ $t("adminOrdersDetailsQuestion") }}
        </button>
        <button
          class="btn box-buttons button-color29 mt-4 mt-xl-0 text-white rounded-pill"
        >
          {{ $t("adminOrdersDetailsDone") }}
        </button>
      </div>
      <div
        class="w-90 d-flex flex-column pt-xl-5 flex-xl-row justify-content-around align-items-center"
      >
        <b-modal
          id="cancel-modal"
          centered
          hide-footer
          content-class="content-class"
          header-class="header-class"
          hide-header
          size="lg"
          hide-header-close
        >
          <div dir="auto">
            <p>
              {{ $t("adminOrdersDetailsReasonForCancelling") }}
              <span class="text-muted">{{
                $t("adminOrdersDetailsMustProvideReason")
              }}</span>
            </p>
            <div class="modal-orders p-2">
              <input
                class="bg-transparent w-100 outline-none"
                :placeholder="`${$t('adminOrdersDetailsWriteYourText')}`"
              />
              <div
                class="d-flex justify-content-end align-items-center pt-9 pt-lg-5"
              >
                <div
                  class="d-flex justify-content-around align-items-center w-xl-35"
                >
                  <button
                    class="order-color-c7 btn outline-none border rounded-pill modal-order-btn"
                    @click="$bvModal.hide('cancel-modal')"
                  >
                    {{ $t("adminOrdersDetailsIgnore") }}
                  </button>

                  <button
                    class="btn-primary btn outline-none border rounded-pill modal-order-btn"
                    @click="$bvModal.hide('cancel-modal')"
                  >
                    {{ $t("adminOrdersDetailsSubmit") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
        <button
          class="btn box-buttons button-colorf1 text-white rounded-pill"
          v-b-modal.cancel-modal
        >
          {{ $t("adminOrdersDetailsCancel") }}
        </button>
        <button
          class="btn box-buttons button-color2C mt-4 mt-xl-0 text-white rounded-pill"
        >
          {{ $t("adminOrdersDetailsSendSms") }}
        </button>
        <button
          class="btn box-buttons button-color6f mt-4 mt-xl-0 text-white rounded-pill"
        >
          {{ $t("adminOrdersDetailsWaiting") }}
        </button>
        <button
          class="btn box-buttons button-color2C mt-4 mt-xl-0 text-white rounded-pill"
        >
          {{ $t("adminOrdersDetailsShipped") }}
        </button>
        <button
          class="btn box-buttons button-colorfe mt-4 mt-xl-0 text-white rounded-pill"
        >
          {{ $t("adminOrdersDetailsInprogress") }}
        </button>
      </div>
    </div>
    <div class="w-100 d-flex justify-content-end align-items-center mt-11 mb-5">
      <button
        class="pop-over-message outline-none rounded-circle d-flex justify-content-center align-items-center"
        id="popover-order-message"
      >
        <b-popover
          target="popover-order-message"
          triggers="hover"
          placement="top"
        >
          <p class="w-100 font-weight-bold">
            {{ $t("adminOrdersDetailsInregardWithThisOrder")
            }}<u class="text-primary">893943</u>
          </p>
          <p>
            {{ $t("adminOrdersDetailsAnyIssue") }}
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <button class="btn rounded-pill btn-transparent border">
              {{ $t("adminOrdersDetailsCancel") }}
            </button>
            <button
              class="btn rounded-pill button-color2C text-white border ml-0"
              v-b-modal.send-message-modal
            >
              {{ $t("adminOrdersDetailsSendAMessage") }}
            </button>
          </div>
        </b-popover>
        <b-modal
          id="send-message-modal"
          centered
          hide-footer
          content-class="content-class"
          header-class="header-class"
          hide-header
          size="lg"
          hide-header-close
        >
          <div>
            <p>{{ $t("adminOrdersEnquiry") }}</p>
            <div class="modal-orders p-2">
              <input
                class="bg-transparent w-100 outline-none"
                :placeholder="`${$t('adminOrdersDetailsWriteQuestion')}`"
              />
              <div
                class="d-flex justify-content-end align-items-center pt-9 pt-lg-5"
              >
                <div
                  class="d-flex justify-content-around align-items-center w-xl-35"
                >
                  <button
                    class="order-color-c7 btn outline-none border rounded-pill modal-order-btn"
                    @click="$bvModal.hide('send-message-modal')"
                  >
                    {{ $t("adminOrdersDetailsCancel") }}
                  </button>

                  <button
                    class="btn-primary btn outline-none border rounded-pill modal-order-btn"
                    @click="$bvModal.hide('send-message-modal')"
                  >
                    {{ $t("adminOrdersDetailsSubmit") }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 0C8.73239 0 0 8.25363 0 19.4007C0 25.2317 2.39034 30.27 6.28169 33.7509C6.60765 34.0447 6.80483 34.4511 6.82093 34.8898L6.92958 38.4472C6.9658 39.582 8.13682 40.3184 9.17505 39.8637L13.1429 38.1132C13.4809 37.9643 13.8551 37.9361 14.2093 38.0327C16.0322 38.5357 17.9759 38.8013 20 38.8013C31.2676 38.8013 40 30.5477 40 19.4007C40 8.25363 31.2676 0 20 0Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="20"
              y1="0"
              x2="20"
              y2="40.0005"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#2C5282" />
              <stop offset="1" stop-color="#2C5282" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import CustomAlert from "../customAlert";
export default {
  name: "AdminOrdersDetailed",
  components: {
    CustomAlert,
  },
  methods: {
    editHandler() {
      this.isDisabled = false;
    },
    saveHandler() {
      this.$bvModal.show('reset-modal')
          },
    tagsInputHandler(e) {
      this.id++;
      if (e.keyCode === 13) {
        let d = this.tags;
        d.push({
          name: e.target.value,
          id: this.id,
        });
        e.target.value = "";
        this.tags = d;
      }
    },
    addData() {
      if (this.tags.length == 0) {
        let d = this.tags;
        d.push({
          name: "Chair",
          id: this.id,
        });
        this.tags = d;
      }
    },
    deleteTag(index) {
      this.tags.splice(index, 1);
    },
  },
  data() {
    return {
      ratingValue: 0,
      id: 3,
      isDisabled: true,
      tags: [
        {
          name: "Electronics",
          id: 1,
        },
        {
          name: "Chairs",
          id: 2,
        },
        {
          name: "Doors",
          id: 3,
        },
      ],
    };
  },
};
</script>

<style>
.w-xl-35 {
  width: 100%;
}
.order-color-c7 {
  background: #c7c9ca;
}
.modal-order-btn {
  min-width: 85px !important;
}
.modal-orders {
  min-height: 100px;

  background: #f2f3f7;
  border-radius: 6px;
}
.pop-over-message {
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
  width: 62px;
  height: 62px;
}
.w-xl-25 {
  width: 100%;
}

.button-colorfe {
  background: #fec400 !important;
}
.button-color6f {
  background: #6fa6f6 !important;
}
.box-buttons {
  min-width: 144px !important;
  height: 45px !important;
}
.button-color29 {
  background: #29cc97 !important;
}
.button-color2C {
  background: #2c5282 !important;
}
.button-color2A4 {
  background: #2a4eaa !important;
  border-radius: 4px;
}
.button-colorf1 {
  background: #f12b2c !important;
}
.buttons-cont {
  min-height: 191px;
  background: #f7fafc;
  border: 2px solid #bee3f8;
  border-radius: 16px;
}
#rating-lg-no-border {
  background: transparent !important;
}
.tags-btn {
  background: #f3f3f3;
  border: 1.5px solid #a2a2a2;
  border-radius: 5px;
  height: 32px !important;
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #616161;
}
.file-cont {
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  height: 624px;
}
.fs-22 {
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0.4px;
}
.client-details-card {
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
}
.w-75-resp {
  width: 100%;
}
@media (max-width: 1200px) and (min-width: 992px) {
  .w-75-resp {
    width: 75%;
  }
  .w-xl-25 {
    width: 25%;
  }
  .w-xl-35 {
    width: 33%;
  }
}
@media (min-width: 1200px) {
  .w-75-resp {
    width: 75%;
  }
  .w-xl-25 {
    width: 25%;
  }
  .w-xl-35 {
    width: 33%;
  }
}
</style>