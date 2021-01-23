<template>
  <div class="d-flex flex-lg-row flex-column w-100 bg-white mt-15">
    <div class="w-15 admin-inbox-side border-right py-4">
      <button
        class="w-100 d-flex justify-content-between btn outline-none align-items-center font-weight-bold"
      >
        <span>{{ $t("adminMessagesHeading") }}</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.20711 4.79289C4.81658 4.40237 4.18342 4.40237 3.79289 4.79289C3.40237 5.18342 3.40237 5.81658 3.79289 6.20711L8.29289 10.7071C8.68342 11.0976 9.31658 11.0976 9.70711 10.7071L14.2071 6.20711C14.5976 5.81658 14.5976 5.18342 14.2071 4.79289C13.8166 4.40237 13.1834 4.40237 12.7929 4.79289L9 8.58579L5.20711 4.79289Z"
            fill="#191919"
          />
        </svg>
      </button>
      <div class="w-100 bg-white mt-15" dir="auto">
        <p class="d-none">{{ $t("rtlHelper") }}</p>
        <input
          class="w-100 outline-none search-admin-inbox fs-10 px-2"
          :placeholder="`${$t('adminMessagesSearch')}`"
        />
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          class="position-absolute mx-n5 mt-17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.63007 8.54774C2.63007 5.2733 5.2733 2.63007 8.54774 2.63007C11.8222 2.63007 14.4654 5.2733 14.4654 8.54774C14.4654 11.8222 11.8222 14.4654 8.54774 14.4654C5.2733 14.4654 2.63007 11.8222 2.63007 8.54774ZM16.438 14.4654H15.3991L15.0309 14.1103C16.3196 12.6112 17.0955 10.665 17.0955 8.54774C17.0955 3.82676 13.2687 0 8.54774 0C3.82676 0 0 3.82676 0 8.54774C0 13.2687 3.82676 17.0955 8.54774 17.0955C10.665 17.0955 12.6112 16.3196 14.1103 15.0309L14.4654 15.3991V16.438L21.0406 23L23 21.0406L16.774 14.8021L16.438 14.4654Z"
            fill="#747F8D"
          />
        </svg>
      </div>
      <div class="w-100 d-flex justify-content-between align-items-center pt-4">
        <div class="d-flex align-items-center">
          <button class="btn outline-none">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.295 4L6 6.2869L3.705 4L3 4.70403L6 7.7L9 4.70403L8.295 4Z"
                fill="#6A7480"
              />
            </svg>
          </button>
          <p class="mb-0 text-muted font-weight-bold">
            {{ $t("adminMessagesOrderMessages") }}
          </p>
        </div>
        <button class="btn outline-none">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 10H10V15H8V10H3V8H8V3H10V8H15V10Z" fill="#6A7480" />
          </svg>
        </button>
      </div>
      <button
        class="w-100 outline-none btn d-flex justify-content-between align-items-center mt-4"
      >
        <div class="d-flex align-items-center">
          <div class="btn outlin-none">
            <img src="../../assets/AvataradminInbox.png" />
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              class="align-self-end mt-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5" cy="5" r="5" fill="#43B581" />
            </svg>
          </div>
          <div class="d-flex flex-column align-items-center">
            <p class="mb-0">Customer Name</p>
            <p class="mb-0 font-weight-light">#order number</p>
          </div>
        </div>
        <div
          class="rounded-button-inbox rounded-circle d-flex justify-content-center align-items-center"
        >
          3
        </div>
      </button>
      <div
        class="w-100 d-flex justify-content-between align-items-center pt-lg-14 pt-4"
      >
        <div class="d-flex align-items-center">
          <button class="btn outline-none">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.295 4L6 6.2869L3.705 4L3 4.70403L6 7.7L9 4.70403L8.295 4Z"
                fill="#6A7480"
              />
            </svg>
          </button>
          <p class="mb-0 text-muted font-weight-bold">
            {{ $t("adminMessagesCompanyContact") }}
          </p>
        </div>
        <button class="btn outline-none">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 10H10V15H8V10H3V8H8V3H10V8H15V10Z" fill="#6A7480" />
          </svg>
        </button>
      </div>
      <div class="w-100 d-flex justify-content-center align-items-center pt-2">
        <p class="text-muted font-weight-bold">
          {{ $t("adminMessagesSubjects") }}
        </p>
      </div>
    </div>
    <div class="pb-4 order-1 order-lg-0 w-75-resp">
      <div class="w-100">
        <div
          class="d-flex justify-content-around flex-column flex-md-row align-items-center border-bottom py-15"
        >
          <div
            class="width-50 px-4 px-lg-0 d-flex justify-content-around align-items-center"
          >
            <div class="d-flex flex-column mx-3">
              <img src="../../assets/messageProfile.png" class="w-100" />
              <p class="btn btn-dark py-0 mt-2">VIP</p>
            </div>
            <div class="w-100">
              <p class="mb-1 text-inbox font-weight-bold">Customer Name</p>
              <p class="mb-0 text-inbox">
                Customer IP location + Device Type + Online status Date of
                Conversation
              </p>
            </div>
          </div>
          <div
            class="width-50 pt-4 pt-md-0 d-flex justify-content-around align-items-center flex-column flex-lg-row"
          >
            <button
              class="d-flex flex-column pt-2 px-2 d-lg-none align-items-center justify-content-center"
              v-on:click="sidebarToggle"
            >
              <span class="px-13 py-1 border-top border-dark"></span>
              <span class="px-13 py-1 border-top border-dark"></span>
              <span class="px-13 py-1 border-top border-dark"></span>
            </button>
            <div
              class="d-flex w-100 justify-content-around mt-4 mt-lg-0 flex-row flex-lg-column flex-xl-row"
            >
              <button
                class="btn btn-primary px-0 admin-inbox-button admin-btn-color d-flex justify-content-center align-items-center mt-lg-0 mt-2"
                v-b-modal.transfer-modal
              >
                {{ $t("adminMessagesTransferTheChat") }}
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
              <b-modal
                id="modal-rating"
                centered
                hide-footer
                content-class="content-class"
                header-class="rating-header"
                size="lg"
              >
                <div
                  class="d-flex flex-column flex-sm-row justify-content-around align-items-center pb-4"
                >
                  <div class="order-1 order-sm-0 mt-5 mt-sm-0">
                    <p class="text-center font-24 font-weight-bolder">
                      {{ $t("issueHasBeenResolved") }}
                    </p>
                    <div
                      class="d-flex w-100 justify-content-center flex-column align-items-center"
                    >
                      <div
                        class="d-flex w-75 justify-content-between align-items-center"
                      >
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.9271 0.62615L6.48599 5.28026L1.02432 6.029C0.0448775 6.16257 -0.347645 7.29798 0.362634 7.94829L4.31403 11.5689L3.37945 16.6835C3.21123 17.608 4.24674 18.3005 5.11403 17.8682L10 15.4532L14.886 17.8682C15.7533 18.297 16.7888 17.608 16.6206 16.6835L15.686 11.5689L19.6374 7.94829C20.3476 7.29798 19.9551 6.16257 18.9757 6.029L13.514 5.28026L11.0729 0.62615C10.6355 -0.203435 9.36823 -0.213981 8.9271 0.62615Z"
                            fill="#FFC145"
                          />
                        </svg>

                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.9271 0.62615L6.48599 5.28026L1.02432 6.029C0.0448775 6.16257 -0.347645 7.29798 0.362634 7.94829L4.31403 11.5689L3.37945 16.6835C3.21123 17.608 4.24674 18.3005 5.11403 17.8682L10 15.4532L14.886 17.8682C15.7533 18.297 16.7888 17.608 16.6206 16.6835L15.686 11.5689L19.6374 7.94829C20.3476 7.29798 19.9551 6.16257 18.9757 6.029L13.514 5.28026L11.0729 0.62615C10.6355 -0.203435 9.36823 -0.213981 8.9271 0.62615Z"
                            fill="#FFC145"
                          />
                        </svg>

                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.9271 0.62615L6.48599 5.28026L1.02432 6.029C0.0448775 6.16257 -0.347645 7.29798 0.362634 7.94829L4.31403 11.5689L3.37945 16.6835C3.21123 17.608 4.24674 18.3005 5.11403 17.8682L10 15.4532L14.886 17.8682C15.7533 18.297 16.7888 17.608 16.6206 16.6835L15.686 11.5689L19.6374 7.94829C20.3476 7.29798 19.9551 6.16257 18.9757 6.029L13.514 5.28026L11.0729 0.62615C10.6355 -0.203435 9.36823 -0.213981 8.9271 0.62615Z"
                            fill="#FFC145"
                          />
                        </svg>

                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.9271 0.62615L6.48599 5.28026L1.02432 6.029C0.0448775 6.16257 -0.347645 7.29798 0.362634 7.94829L4.31403 11.5689L3.37945 16.6835C3.21123 17.608 4.24674 18.3005 5.11403 17.8682L10 15.4532L14.886 17.8682C15.7533 18.297 16.7888 17.608 16.6206 16.6835L15.686 11.5689L19.6374 7.94829C20.3476 7.29798 19.9551 6.16257 18.9757 6.029L13.514 5.28026L11.0729 0.62615C10.6355 -0.203435 9.36823 -0.213981 8.9271 0.62615Z"
                            fill="#FFC145"
                          />
                        </svg>

                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.9271 0.62615L6.48599 5.28026L1.02432 6.029C0.0448775 6.16257 -0.347645 7.29798 0.362634 7.94829L4.31403 11.5689L3.37945 16.6835C3.21123 17.608 4.24674 18.3005 5.11403 17.8682L10 15.4532L14.886 17.8682C15.7533 18.297 16.7888 17.608 16.6206 16.6835L15.686 11.5689L19.6374 7.94829C20.3476 7.29798 19.9551 6.16257 18.9757 6.029L13.514 5.28026L11.0729 0.62615C10.6355 -0.203435 9.36823 -0.213981 8.9271 0.62615Z"
                            fill="#FFC145"
                          />
                        </svg>
                      </div>
                      <button class="d-flex justify-content-center align-items-center outline-none request-btn mt-5">
                        {{ $t("requestRatingFromClient") }}
                      </button>
                    </div>
                  </div>

                  <div>
                    <svg
                      width="143"
                      height="143"
                      viewBox="0 0 143 143"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M143 71.5C143 110.988 110.988 143 71.5 143C32.0115 143 0 110.988 0 71.5C0 32.0115 32.0115 0 71.5 0C110.988 0 143 32.0115 143 71.5ZM63.2296 109.359L116.278 56.3103C118.079 54.5089 118.079 51.5881 116.278 49.7868L109.755 43.2633C107.953 41.4616 105.032 41.4616 103.231 43.2633L59.9677 86.526L39.7693 66.3275C37.9679 64.5262 35.0471 64.5262 33.2455 66.3275L26.722 72.851C24.9206 74.6523 24.9206 77.5732 26.722 79.3745L56.7058 109.358C58.5075 111.16 61.428 111.16 63.2296 109.359Z"
                        fill="#46D68C"
                      />
                    </svg>
                  </div>
                </div>
              </b-modal>
              <button
                class="btn btn-color29 text-white px-0 admin-inbox-button d-flex justify-content-center align-items-center mt-2 mt-xl-0"
                v-b-modal.modal-rating
              >
                {{ $t("adminMessagesMarkAsResolved") }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 p-2">
        <div
          class="d-flex flex-column p-4 justify-content-between overflow-scroll"
          style="height: 500px !important"
        >
          <div class="d-flex flex-row-reverse my-3">
            <div class="d-flex">
              <div class="mx-3">
                <p class="messagesend text-right">Customer Name</p>
                <div
                  class="send d-flex justify-content-center align-items-center p-4"
                >
                  <p class="fs-16 mb-0 font-weight-normal">
                    Hello, I would like to ask about my order
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="../../assets/messageProfile.png"
                  width="35"
                  height="35"
                />
              </div>
            </div>
          </div>
          <div class="d-flex my-3">
            <div>
              <img
                src="../../assets/customerSupport.png"
                class="rounded-circle"
                width="35" height="35"
              />
            </div>
            <div class="d-flex">
              <div class="mx-3">
                <p class="messagesend">David - Customer Support</p>
                <div
                  class="receive d-flex justify-content-center align-items-center w-100 p-4"
                >
                  <p class="fs-16 mb-0 font-weight-normal">
                    Welcome, my name is David and I will be helping you today.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-row-reverse my-3">
            <div class="d-flex">
              <div class="mx-3">
                <p class="messagesend text-right">Customer Name</p>
                <div
                  class="send d-flex justify-content-center align-items-center p-4"
                >
                  <p class="fs-16 mb-0 font-weight-normal">
                    Hi david, Thank you, My order number is: #789789789
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="../../assets/messageProfile.png"
                  width="35"
                  height="35"
                />
              </div>
            </div>
          </div>
          <div class="d-flex flex-row-reverse my-3">
            <div class="d-flex">
              <div class="mx-3">
                <p class="messagesend text-right">Customer Name</p>
                <div
                  class="send d-flex justify-content-center align-items-center p-4"
                >
                  <p class="fs-16 mb-0 font-weight-normal">
                    I have sent an email as well.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="../../assets/messageProfile.png"
                  width="35"
                  height="35"
                />
              </div>
            </div>
          </div>
          <div class="d-flex my-3">
            <div>
              <img
                src="../../assets/customerSupport.png"
                class="rounded-circle"
                width="35" height="35"
              />
            </div>
            <div class="d-flex">
              <div class="mx-3">
                <p class="messagesend">David - Customer Support</p>
                <div
                  class="receive d-flex justify-content-center align-items-center w-100 p-4"
                >
                  <p class="fs-16 mb-0 font-weight-normal">
                    I’m checking your order right now and it’s in progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-100 p-2 send-bar d-flex justify-content-between align-items-center"
      >
        <b-modal
          id="edit-modal"
          centered
          hide-footer
          header-class="header-class"
          hide-header
          size="lg"
          hide-header-close
        >
          <div class="w-100">
            <textarea class="quick-resp-text w-100 outline-none p-4"></textarea>
            <div class="w-90 d-flex justify-content-between align-items-center">
              <div>
                <button class="btn outline-none">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                      fill="#CFCFCF"
                    />
                    <path
                      d="M7.59396 17.0598C7.62646 17.1891 8.43752 20.2224 12.9998 20.2224C17.5628 20.2224 18.3731 17.1891 18.4056 17.0598C18.4453 16.9031 18.3746 16.7406 18.2345 16.6597C18.0936 16.5795 17.9174 16.6034 17.8011 16.7153C17.7874 16.729 16.3899 18.0558 12.9998 18.0558C9.60968 18.0558 8.21146 16.7291 8.19846 16.7161C8.12913 16.6474 8.03668 16.6113 7.94424 16.6113C7.88357 16.6113 7.82218 16.6265 7.76657 16.6575C7.62501 16.7384 7.55424 16.9024 7.59396 17.0598Z"
                      fill="#4F5660"
                    />
                    <path
                      d="M8.66664 12.2777C9.66382 12.2777 10.4722 11.146 10.4722 9.74995C10.4722 8.35389 9.66382 7.22217 8.66664 7.22217C7.66946 7.22217 6.86108 8.35389 6.86108 9.74995C6.86108 11.146 7.66946 12.2777 8.66664 12.2777Z"
                      fill="#4F5660"
                    />
                    <path
                      d="M17.3334 12.2777C18.3306 12.2777 19.1389 11.146 19.1389 9.74995C19.1389 8.35389 18.3306 7.22217 17.3334 7.22217C16.3362 7.22217 15.5278 8.35389 15.5278 9.74995C15.5278 11.146 16.3362 12.2777 17.3334 12.2777Z"
                      fill="#4F5660"
                    />
                  </svg>
                </button>
                <button class="btn outline-none">
                  <svg
                    width="24"
                    height="26"
                    viewBox="0 0 24 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.31674 23.6713C-0.81344 20.6097 -0.755101 15.6727 2.39099 12.6222L13.6281 1.72659C16.0022 -0.575427 19.8612 -0.57563 22.2355 1.72659C24.5867 4.00636 24.5896 7.68469 22.2355 9.96715L12.44 19.4557C10.8406 21.0064 8.22754 20.9848 6.65527 19.405C5.14054 17.8831 5.18913 15.4709 6.73306 13.9738L14.4336 6.51738C14.7648 6.19675 15.3074 6.19127 15.6457 6.50515L16.8704 7.64158C17.2087 7.95551 17.2144 8.46992 16.8833 8.79055L9.18357 16.2463C8.91936 16.5025 8.90307 16.9282 9.14886 17.1752C9.38307 17.4105 9.75127 17.4144 9.98929 17.1836L19.7848 7.69505C20.8355 6.67628 20.8355 5.01761 19.7842 3.99828C18.7562 3.0016 17.1079 3.00109 16.0795 3.99828L4.84231 14.8939C2.98001 16.6997 2.95129 19.6226 4.7785 21.4098C6.60047 23.1918 9.54556 23.1941 11.3709 21.4243L20.5884 12.4869C20.9193 12.166 21.462 12.1602 21.8005 12.4739L23.0261 13.6095C23.3646 13.9232 23.3707 14.4376 23.0398 14.7585L13.8223 23.6959C10.6307 26.7904 5.46818 26.7537 2.31674 23.6713Z"
                      fill="#4F5660"
                    />
                  </svg>
                </button>
              </div>
              <div>
                <button
                  class="btn edit-button text-white"
                  @click="$bvModal.hide('edit-modal')"
                >
                  {{ $t("adminMessagesEdit") }}
                </button>
              </div>
            </div>
          </div>
        </b-modal>
        <b-modal
          id="delete-rating"
          centered
          hide-footer
          hide-header
          content-class="content-class"
          size="lg"
        >
          <div
            class="d-flex pt-5 justify-content-center align-items-center flex-column"
          >
            <h1 class="fs-30">{{ $t("adminMessageDeletePopup") }}</h1>
            <div
              class="w-100 d-flex justify-content-end align-items-center mt-9"
            >
              <div
                class="d-flex justify-content-around width-50 align-items-center"
              >
                <button
                  class="btn btn-67 mt-4 mt-lg-0 text-white"
                  @click="$bvModal.hide('delete-rating')"
                >
                  {{ $t("adminMessageDeleteNo") }}
                </button>
                <button
                  class="btn btn-ff mt-4 mt-lg-0 mx-2 mx-lg-0 text-white"
                  @click="$bvModal.hide('delete-rating')"
                >
                  {{ $t("adminMessageDeleteYes") }}
                </button>
              </div>
            </div>
          </div>
        </b-modal>
        <div class="d-flex justify-content-around align-items-center width-25">
          <b-dropdown
            size="lg"
            variant="link"
            toggle-class="text-decoration-none p-0 outline-none"
            dropup
            left
            no-caret
          >
            <template #button-content>
              <svg
                width="20"
                height="26"
                viewBox="0 0 20 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1L1 15.4H10L9 25L19 10.6H10L11 1Z"
                  stroke="#4F5660"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
            <b-dropdown-text>
              <p class="mb-0 font-weight-bolder">Use a quick response</p>
            </b-dropdown-text>
            <b-dropdown-divider />
            <div
              class="w-100 d-flex justify-content-center align-items-center flex-column"
            >
              <div class="w-100 px-2">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  class="position-absolute mt-3 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.48656 4.83133C1.48656 2.98056 2.98056 1.48656 4.83133 1.48656C6.6821 1.48656 8.1761 2.98056 8.1761 4.83133C8.1761 6.6821 6.6821 8.1761 4.83133 8.1761C2.98056 8.1761 1.48656 6.6821 1.48656 4.83133ZM9.29102 8.1761H8.70383L8.49571 7.97541C9.22413 7.12807 9.66266 6.02802 9.66266 4.83133C9.66266 2.16295 7.49971 0 4.83133 0C2.16295 0 0 2.16295 0 4.83133C0 7.49971 2.16295 9.66266 4.83133 9.66266C6.02802 9.66266 7.12807 9.22413 7.97541 8.49571L8.1761 8.70383V9.29102L11.8925 13L13 11.8925L9.48095 8.36641L9.29102 8.1761Z"
                    fill="#63656F"
                  />
                </svg>

                <input
                  placeholder="Search"
                  class="px-4 rounded-lg py-2 border outline-none"
                />
              </div>
              <div
                class="align-self-start w-100 px-2 mt-3 d-flex justify-content-between align-items-center"
              >
                <p class="mb-0">Sure, Let's get started</p>
                <div>
                  <button class="outline-none" v-b-modal.edit-modal>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3333 2.00004C11.5084 1.82494 11.7163 1.68605 11.9451 1.59129C12.1738 1.49653 12.419 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.617 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4087 2.61178C14.5035 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5035 3.82619 14.4087 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5 13.6667L1.33333 14.6667L2.33333 11L11.3333 2.00004Z"
                        stroke="#52575C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button class="outline-none">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="mx-1"
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
                  </button>
                  <button class="outline-none" v-b-modal.delete-rating>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4H2.33333H13"
                        stroke="#52575C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.33333 3.99992V2.66659C4.33333 2.31296 4.4738 1.97382 4.72385 1.72378C4.9739 1.47373 5.31304 1.33325 5.66666 1.33325H8.33333C8.68695 1.33325 9.02609 1.47373 9.27614 1.72378C9.52619 1.97382 9.66666 2.31296 9.66666 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2761 14.2761C11.0261 14.5261 10.687 14.6666 10.3333 14.6666H3.66666C3.31304 14.6666 2.9739 14.5261 2.72385 14.2761C2.4738 14.026 2.33333 13.6869 2.33333 13.3333V3.99992H11.6667Z"
                        stroke="#52575C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                class="align-self-start w-100 px-2 mt-3 d-flex justify-content-between align-items-center"
              >
                <p class="mb-0">I need info</p>
                <div>
                  <button class="outline-none" v-b-modal.edit-modal>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3333 2.00004C11.5084 1.82494 11.7163 1.68605 11.9451 1.59129C12.1738 1.49653 12.419 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.617 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4087 2.61178C14.5035 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5035 3.82619 14.4087 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5 13.6667L1.33333 14.6667L2.33333 11L11.3333 2.00004Z"
                        stroke="#52575C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button class="outline-none">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="mx-1"
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
                  </button>
                  <button class="outline-none" v-b-modal.delete-rating>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4H2.33333H13"
                        stroke="#52575C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.33333 3.99992V2.66659C4.33333 2.31296 4.4738 1.97382 4.72385 1.72378C4.9739 1.47373 5.31304 1.33325 5.66666 1.33325H8.33333C8.68695 1.33325 9.02609 1.47373 9.27614 1.72378C9.52619 1.97382 9.66666 2.31296 9.66666 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2761 14.2761C11.0261 14.5261 10.687 14.6666 10.3333 14.6666H3.66666C3.31304 14.6666 2.9739 14.5261 2.72385 14.2761C2.4738 14.026 2.33333 13.6869 2.33333 13.3333V3.99992H11.6667Z"
                        stroke="#52575C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                class="align-self-start pb-5 w-100 px-2 mt-3 d-flex justify-content-between align-items-center"
              >
                <p class="mb-0">I'm not able to do this</p>
                <div>
                  <button class="outline-none" v-b-modal.edit-modal>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.3333 2.00004C11.5084 1.82494 11.7163 1.68605 11.9451 1.59129C12.1738 1.49653 12.419 1.44775 12.6667 1.44775C12.9143 1.44775 13.1595 1.49653 13.3883 1.59129C13.617 1.68605 13.8249 1.82494 14 2.00004C14.1751 2.17513 14.314 2.383 14.4087 2.61178C14.5035 2.84055 14.5523 3.08575 14.5523 3.33337C14.5523 3.58099 14.5035 3.82619 14.4087 4.05497C14.314 4.28374 14.1751 4.49161 14 4.66671L5 13.6667L1.33333 14.6667L2.33333 11L11.3333 2.00004Z"
                        stroke="#52575C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button class="outline-none">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="mx-1"
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
                  </button>
                  <button class="outline-none" v-b-modal.delete-rating>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      class="mx-1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4H2.33333H13"
                        stroke="#52575C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.33333 3.99992V2.66659C4.33333 2.31296 4.4738 1.97382 4.72385 1.72378C4.9739 1.47373 5.31304 1.33325 5.66666 1.33325H8.33333C8.68695 1.33325 9.02609 1.47373 9.27614 1.72378C9.52619 1.97382 9.66666 2.31296 9.66666 2.66659V3.99992M11.6667 3.99992V13.3333C11.6667 13.6869 11.5262 14.026 11.2761 14.2761C11.0261 14.5261 10.687 14.6666 10.3333 14.6666H3.66666C3.31304 14.6666 2.9739 14.5261 2.72385 14.2761C2.4738 14.026 2.33333 13.6869 2.33333 13.3333V3.99992H11.6667Z"
                        stroke="#52575C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <b-dropdown-divider />
            <div class="w-100">
              <input
                class="outline-none w-100 px-3"
                placeholder="Create a new quick response"
              />
            </div>
          </b-dropdown>
          <label class="file-select mb-0">
            <div class="select-button d-flex flex-column">
                  <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 2.41699C7.82996 2.41699 2.41663 7.83033 2.41663 14.5003C2.41663 21.1703 7.82996 26.5837 14.5 26.5837C21.17 26.5837 26.5833 21.1703 26.5833 14.5003C26.5833 7.83033 21.17 2.41699 14.5 2.41699ZM20.5416 15.7087H15.7083V20.542H13.2916V15.7087H8.45829V13.292H13.2916V8.45866H15.7083V13.292H20.5416V15.7087Z"
                fill="#4F5660"
              />
            </svg>
            </div>
            <input type="file" @change="handleFileChange" />
          </label>
          <button class="outline-none position-relative">

          <emoji-picker @emoji="append" :search="search">
            <div
              class="emoji-invoker"
              slot="emoji-invoker"
              slot-scope="{ events: { click: clickEvent } }"
              @click.stop="clickEvent"
            >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
                fill="#CFCFCF"
              />
              <path
                d="M7.59402 17.0598C7.62652 17.1891 8.43758 20.2224 12.9999 20.2224C17.5629 20.2224 18.3732 17.1891 18.4057 17.0598C18.4454 16.9031 18.3746 16.7406 18.2345 16.6597C18.0937 16.5795 17.9175 16.6034 17.8012 16.7153C17.7875 16.729 16.39 18.0558 12.9999 18.0558C9.60974 18.0558 8.21152 16.7291 8.19852 16.7161C8.12919 16.6474 8.03674 16.6113 7.9443 16.6113C7.88363 16.6113 7.82224 16.6265 7.76663 16.6575C7.62508 16.7384 7.5543 16.9024 7.59402 17.0598Z"
                fill="#4F5660"
              />
              <path
                d="M8.66664 12.2782C9.66382 12.2782 10.4722 11.1465 10.4722 9.75043C10.4722 8.35438 9.66382 7.22266 8.66664 7.22266C7.66946 7.22266 6.86108 8.35438 6.86108 9.75043C6.86108 11.1465 7.66946 12.2782 8.66664 12.2782Z"
                fill="#4F5660"
              />
              <path
                d="M17.3333 12.2782C18.3304 12.2782 19.1388 11.1465 19.1388 9.75043C19.1388 8.35438 18.3304 7.22266 17.3333 7.22266C16.3361 7.22266 15.5277 8.35438 15.5277 9.75043C15.5277 11.1465 16.3361 12.2782 17.3333 12.2782Z"
                fill="#4F5660"
              />
            </svg>

            </div>
            <div slot="emoji-picker" slot-scope="{ emojis, insert}">

              <div
                class="emoji-picker"
              >
              
                <div>
                  <div v-for="(emojiGroup, category) in emojis" :key="category">
                    <h5>{{ category }}</h5>
                    <div class="emojis">
                      <span
                        v-for="(emoji, emojiName) in emojiGroup"
                        :key="emojiName"
                        @click="insert(emoji)"
                        :title="emojiName"
                        >{{ emoji }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </emoji-picker>

          </button>
          <label class="file-select mb-0">
            <div class="select-button d-flex flex-column">
                         <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.31674 23.6713C-0.81344 20.6097 -0.755101 15.6727 2.39099 12.6222L13.6281 1.72659C16.0022 -0.575427 19.8612 -0.57563 22.2355 1.72659C24.5867 4.00636 24.5896 7.68469 22.2355 9.96715L12.44 19.4557C10.8406 21.0064 8.22754 20.9848 6.65527 19.405C5.14054 17.8831 5.18913 15.4709 6.73306 13.9738L14.4336 6.51738C14.7648 6.19675 15.3074 6.19127 15.6457 6.50515L16.8704 7.64158C17.2087 7.95551 17.2144 8.46992 16.8833 8.79055L9.18357 16.2463C8.91936 16.5025 8.90307 16.9282 9.14886 17.1752C9.38307 17.4105 9.75127 17.4144 9.98929 17.1836L19.7848 7.69505C20.8355 6.67628 20.8355 5.01761 19.7842 3.99828C18.7562 3.0016 17.1079 3.00109 16.0795 3.99828L4.84231 14.8939C2.98001 16.6997 2.95129 19.6226 4.7785 21.4098C6.60047 23.1918 9.54556 23.1941 11.3709 21.4243L20.5884 12.4869C20.9193 12.166 21.462 12.1602 21.8005 12.4739L23.0261 13.6095C23.3646 13.9232 23.3707 14.4376 23.0398 14.7585L13.8223 23.6959C10.6307 26.7904 5.46818 26.7537 2.31674 23.6713Z"
                fill="#4F5660"
              />
            </svg>
            </div>
            <input type="file" @change="handleFileChange" />
          </label>
        </div>
        <div>
          <label class="file-select mb-0">
            <div class="select-button d-flex flex-column">
                           <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.8565 14.6928L21.7131 22.237C21.4685 22.8241 21.1182 23.3112 20.6973 23.6497C20.2763 23.9882 19.7993 24.1663 19.3138 24.1663H1.95421C1.15026 24.1663 0.649349 22.9454 1.05443 21.9732L4.19783 14.429C4.44246 13.8419 4.79273 13.3549 5.21372 13.0163C5.63471 12.6778 6.11173 12.4997 6.59722 12.4997H23.9568C24.7607 12.4997 25.2616 13.7206 24.8565 14.6928ZM6.59722 10.5552H20.8333V7.63856C20.8333 6.02771 19.9006 4.7219 18.75 4.7219H11.8056L9.02778 0.833008H2.08333C0.932726 0.833008 0 2.13882 0 3.74967V20.6448L2.99813 13.4493C3.74193 11.6642 5.12105 10.5552 6.59722 10.5552Z"
                fill="#4F5660"
              />
            </svg>
            </div>
            <input type="file" @change="handleFileChange" />
          </label>
        </div>
      </div>
      <div>
        <textarea
          v-if="this.$i18n.locale === 'ar'"
          class="w-100 text-right messagebox px-4 py-2 outline-none border-bottom"
          :placeholder="`${$t('adminMessagesPlaceholder')}`"
                    v-model="input"

        ></textarea>

        <textarea
          v-else
          class="w-100 messagebox px-4 py-2 outline-none border-bottom"
          :placeholder="`${$t('adminMessagesPlaceholder')}`"
                    v-model="input"

        ></textarea>
      </div>
      <div class="d-flex justify-content-end">
        <button
          class="btn btn-outline-primary border-0 outline-none font-weight-bold"
        >
          {{ $t("adminMessagesSend") }}
        </button>
      </div>
    </div>
    <div
      class="py-15 border-left d-flex flex-column w-xl-25 align-items-center"
    >
      <div class="d-flex justify-content-center align-items-center w-100">
        <div
          class="d-flex justify-content-around align-items-center w-100 flex-wrap"
        >
          <button class="fs-14 btn-inbox btn btn-primary">
            {{ $t("adminMessagesAll") }}
          </button>
          <button class="fs-14 btn-inbox btn btn-outline-primary mx-2">
            {{ $t("adminMessagesFile") }}
          </button>
          <button class="fs-14 btn-inbox btn btn-outline-primary">
            {{ $t("adminMessagesImages") }}
          </button>
          <button class="fs-14 btn-inbox btn btn-outline-primary">
            {{ $t("adminMessagesOrders") }}
          </button>
        </div>
      </div>

      <div class="w-100 bg-white mt-15" dir="auto">
        <p class="d-none">{{ $t("rtlHelper") }}</p>
        <input
          class="w-100 px-5 outline-none quick-search"
          :placeholder="`${$t('adminMessagesQuickSearch')}`"
        />
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          class="position-absolute mx-n5 mt-17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.63007 8.54774C2.63007 5.2733 5.2733 2.63007 8.54774 2.63007C11.8222 2.63007 14.4654 5.2733 14.4654 8.54774C14.4654 11.8222 11.8222 14.4654 8.54774 14.4654C5.2733 14.4654 2.63007 11.8222 2.63007 8.54774ZM16.438 14.4654H15.3991L15.0309 14.1103C16.3196 12.6112 17.0955 10.665 17.0955 8.54774C17.0955 3.82676 13.2687 0 8.54774 0C3.82676 0 0 3.82676 0 8.54774C0 13.2687 3.82676 17.0955 8.54774 17.0955C10.665 17.0955 12.6112 16.3196 14.1103 15.0309L14.4654 15.3991V16.438L21.0406 23L23 21.0406L16.774 14.8021L16.438 14.4654Z"
            fill="#747F8D"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import EmojiPicker from "vue-emoji-picker";
export default {
  name: "AdminInbox",
  data() {
    return {
      value: 3,
      input: "",
      search: "",
    };
  },
   components: {
    EmojiPicker,
  },
  methods: {
    sidebarToggle() {
      document.getElementsByClassName("admin-side")[0].classList.add("d-none");
    },
     append(emoji) {
      this.input += emoji;
    },
        handleFileChange(e) {
      this.$emit("input", e.target.files[0]);
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>
<style scoped>
.request-btn{
border: 3px solid #FFC145;
border-radius: 8px;
width: 224px;
height: 41px;
color:#ffc145
}
.request-btn:hover{
  background: #FFC145;
  color:#ffffff
}
.quick-resp-text {
  min-height: 221px;
  background: #f3f3f3;
  border-radius: 20px;
}
.done-button {
  background: #29cc97;
  border-radius: 5px;
  min-width: 154px;
  min-height: 40px;
}
.edit-button {
  background: #245aab;
  border-radius: 5px;
  min-width: 154px;
  min-height: 40px;
}
.btn-67 {
  background: #678aaa;
  min-width: 132px;
}

.btn-ff {
  background: #ff3737;
  min-width: 132px;
}

.rounded-button-inbox {
  background: #ff3737;
  width: 20px;
  height: 20px;
  color: white;
  border: 1.5px solid #f7f8fc;
}
.search-admin-inbox {
  height: 46px;
}
.admin-inbox-button {
  min-width: 150px;
  min-height: 46px;
}
.admin-btn-color {
  background: #8290a5;
}
.w-15 {
  min-width: 20%;
}
.text-inbox {
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
}
.admin-inbox-side {
  background: #f2f3f5;
}
.btn-color29 {
  background: #29cc97 !important;
}
.emoji-invoker {
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}
.emoji-invoker:hover {
  transform: scale(1.1);
}

.emoji-picker {
  position: absolute;
  z-index: 1;
  font-family: Montserrat;
  border: 1px solid #ccc;
  width: 15rem;
  height: 20rem;
  overflow-y: scroll;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: #fff;
  bottom:32px!important;
  right:-110px!important;
  box-shadow: 1px 1px 8px #c7dbe6;
}
.emoji-picker__search {
  display: flex;
}
.emoji-picker__search > input {
  flex: 1;
  border-radius: 10rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  outline: none;
}
.emoji-picker h5 {
  margin-bottom: 0;
  color: #b1b1b1;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: default;
}
.emoji-picker .emojis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.emoji-picker .emojis:after {
  content: "";
  flex: auto;
}
.emoji-picker .emojis span {
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 5px;
}
.emoji-picker .emojis span:hover {
  background: #ececec;
  cursor: pointer;
}
.file-select > .select-button {
  font-style: normal;
  font-weight: bold;
  font-size: 16.0564px;
  line-height: 18px;

  color: #aeaeae;

  cursor: pointer;
  border-radius: 0.3rem;
  text-align: center;
  font-weight: bold;
}

/* Don't forget to hide the original file input! */
.file-select > input[type="file"] {
  display: none;
}
</style>