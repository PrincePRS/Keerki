<template>
  <div class="d-flex flex-lg-row flex-column w-100">
    <div class="w-100 pb-4 order-1 order-lg-0">
      <div class="w-100">
        <div
          class="d-flex justify-content-between flex-column flex-md-row align-items-center border-bottom pt-lg-11 py-4"
        >
          <div
            class="width-50 d-flex justify-content-around align-items-center"
          >
            <div class="d-flex justify-content-between align-items-center">
              <svg
                width="27"
                height="34"
                viewBox="0 0 27 34"
                fill="none"
                class="mx-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 19.1109C17.6924 19.1109 21.0938 15.0041 21.0938 9.94219C21.0938 4.88027 17.6924 0.773438 13.5 0.773438C9.30762 0.773438 5.90625 4.88027 5.90625 9.94219C5.90625 15.0041 9.30762 19.1109 13.5 19.1109ZM20.25 21.1484H17.3443C16.1736 21.7979 14.8711 22.1672 13.5 22.1672C12.1289 22.1672 10.8316 21.7979 9.65566 21.1484H6.75C3.02168 21.1484 0 24.7968 0 29.2984V30.3172C0 32.0045 1.13379 33.3734 2.53125 33.3734H24.4688C25.8662 33.3734 27 32.0045 27 30.3172V29.2984C27 24.7968 23.9783 21.1484 20.25 21.1484Z"
                  fill="#267CB2"
                />
              </svg>
              <p class="mb-0">David - Customer Support</p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                class="mx-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.7916 19.853C3.4805 19.853 3.24493 19.5475 3.2993 19.2147L3.90504 15.5063H0.500139C0.189519 15.5063 -0.045921 15.2018 0.00761897 14.8693L0.182619 13.7826C0.224489 13.5227 0.432249 13.333 0.675139 13.333H4.25504L5.31504 6.81297H1.91014C1.59952 6.81297 1.36408 6.50845 1.41762 6.17598L1.59262 5.08931C1.63449 4.82932 1.84225 4.63964 2.08514 4.63964H5.66504L6.3018 0.741349C6.34417 0.481951 6.55167 0.292969 6.7941 0.292969H7.77847C8.08953 0.292969 8.32513 0.598398 8.27073 0.931255L7.66504 4.63964H13.665L14.3018 0.741349C14.3441 0.481951 14.5516 0.292969 14.7941 0.292969H15.7784C16.0895 0.292969 16.3251 0.598398 16.2707 0.931255L15.665 4.63964H19.0699C19.3805 4.63964 19.616 4.94415 19.5624 5.27663L19.3874 6.3633C19.3456 6.62328 19.1378 6.81297 18.8949 6.81297H15.315L14.255 13.333H17.6599C17.9705 13.333 18.206 13.6375 18.1524 13.97L17.9774 15.0566C17.9356 15.3166 17.7278 15.5063 17.4849 15.5063H13.905L13.2682 19.4046C13.2259 19.664 13.0184 19.853 12.7759 19.853H11.7916C11.4805 19.853 11.2449 19.5475 11.2993 19.2147L11.905 15.5063H5.90504L5.26828 19.4046C5.22591 19.664 5.0184 19.853 4.77597 19.853H3.7916ZM7.31548 6.81297L6.25548 13.333H12.2554L13.3154 6.81297H7.31548Z"
                  fill="#747F8D"
                />
              </svg>
              <p class="mb-0">Order: KER18798471313</p>
            </div>
          </div>
          <div
            class="width-25 pt-4 pt-md-0 d-flex justify-content-around align-items-center"
          >
            <button
              class="d-flex flex-column pt-2 px-2 d-lg-none align-items-center justify-content-center"
              v-on:click="sidebarToggle"
            >
              <span class="px-13 py-1 border-top border-dark"></span>
              <span class="px-13 py-1 border-top border-dark"></span>
              <span class="px-13 py-1 border-top border-dark"></span>
            </button>

            <svg
              width="25"
              height="28"
              viewBox="0 0 25 28"
              fill="none"
              class="btn p-0 outline-none"
              v-b-modal.modal-rating
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.8333 9.6952V17.2415C20.8333 19.7423 22.7 21.7693 25 21.7693V23.2785H0V21.7693C2.3 21.7693 4.16667 19.7423 4.16667 17.2415V9.6952C4.16667 4.69352 7.89722 0.639648 12.5 0.639648C17.1028 0.639648 20.8333 4.69352 20.8333 9.6952ZM12.4999 27.8063C10.4499 27.8063 8.67768 26.5838 7.71518 24.7878H17.2846C16.3221 26.5838 14.5499 27.8063 12.4999 27.8063Z"
                fill="#267CB2"
              />
            </svg>
            <b-modal
              id="modal-rating"
              centered
              hide-footer
              content-class="content-class"
              header-class="rating-header"
            >
              <p class="text-center font-24 font-weight-bolder">
                {{ $t("inboxRating") }}
              </p>
              <div
                class="d-flex w-100 justify-content-center align-items-center"
              >
                <b-form-rating
                  id="rating-lg-no-border"
                  color="#FFC145"
                  class="outline-none"
                  v-model="value"
                  no-border
                  size="lg"
                ></b-form-rating>
              </div>
              <div
                v-if="this.value < 5 && this.value"
                class="d-flex flex-column justify-content-center align-items-center w-100 pt-5"
              >
                <p class="font-weight-light">
                  {{ $t("inboxImprove") }}
                </p>
                <textarea
                  v-if="this.$i18n.locale === 'ar'"
                  class="w-100 bg-light outline-none text-right rating-text-area p-3"
                ></textarea>
                <textarea
                  v-else
                  class="w-100 bg-light outline-none rating-text-area p-3"
                ></textarea>
                <button
                  class="btn btn-primary rounded-pill px-4 py-0 position-absolute mt-9 mr-sm-18 mr-11"
                  @click="$bvModal.hide('modal-rating')"
                >
                  {{ $t("inboxSend") }}
                </button>
              </div>
              <div
                v-else-if="this.value == 5"
                class="d-flex w-100 justify-content-center align-items-center pt-5"
              >
                <p>{{ $t("inboxThanks") }}</p>
              </div>
            </b-modal>
            <svg
              width="26"
              height="33"
              viewBox="0 0 26 33"
              fill="none"
              class="btn p-0 outline-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 17.1107L12.5193 0.207031L10.5923 2.61989L12.5193 5.03616L5.77822 13.4871V13.4905L3.85124 11.0743L1.92562 13.4905L7.70384 20.7342L0 30.3925L1.92562 32.807L9.62946 23.1488L15.4077 30.3925L17.3334 27.9779L15.4077 25.5633L22.1474 17.1107H22.1488L24.0744 19.5252L26 17.1107Z"
                fill="#267CB2"
              />
            </svg>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              class="btn p-0 outline-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 0C6.2804 0 0 6.2818 0 14C0 21.721 6.2804 28 14 28C21.7196 28 28 21.721 28 14C28 6.2818 21.7196 0 14 0ZM14 22.75C13.034 22.75 12.25 21.9674 12.25 21C12.25 20.034 13.034 19.25 14 19.25C14.966 19.25 15.75 20.034 15.75 21C15.75 21.9674 14.966 22.75 14 22.75ZM15.4 16.625V18.2H12.6V14H14C15.5456 14 16.8 12.7442 16.8 11.2C16.8 9.6544 15.5456 8.4 14 8.4C12.4544 8.4 11.2 9.6544 11.2 11.2H8.4C8.4 8.113 10.913 5.6 14 5.6C17.087 5.6 19.6 8.113 19.6 11.2C19.6 13.8054 17.8122 16.0006 15.4 16.625Z"
                fill="#267CB2"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="w-100 p-2">
        <div
          class="d-flex flex-column p-4 justify-content-between overflow-scroll"
          style="height: 500px !important"
        >
          <div class="d-flex flex-row-reverse">
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
                  src="../assets/messageProfile.png"
                  width="35"
                  height="35"
                />
              </div>
            </div>
          </div>
          <div class="d-flex">
            <div>
              <img
                src="../assets/customerSupport.png"
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
          <div class="d-flex flex-row-reverse">
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
                  src="../assets/messageProfile.png"
                  width="35"
                  height="35"
                />
              </div>
            </div>
          </div>
          <div class="d-flex flex-row-reverse pt-lg-4">
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
                  src="../assets/messageProfile.png"
                  width="35"
                  height="35"
                />
              </div>
            </div>
          </div>
          <div class="d-flex">
            <div>
              <img
                src="../assets/customerSupport.png"
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
        <div class="d-flex justify-content-around align-items-center width-25">
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
              <div slot="emoji-picker" slot-scope="{ emojis, insert }">
                <div class="emoji-picker">
                  <div>
                    <div
                      v-for="(emojiGroup, category) in emojis"
                      :key="category"
                    >
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
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0C5.8318 0 0 5.8318 0 13C0 20.1695 5.8318 26 13 26C15.6507 26 18.1909 25.2174 20.3476 23.7367L18.8773 21.5943C17.1535 22.7747 15.1229 23.4 13 23.4C7.2657 23.4 2.6 18.7343 2.6 13C2.6 7.2657 7.2657 2.6 13 2.6C18.7343 2.6 23.4 7.2657 23.4 13V14.0166C23.4 15.821 22.6226 16.9 21.32 16.9L21.3174 16.9234C21.2394 16.9065 21.1549 16.9 21.0717 16.9H20.8C20.0681 16.9 18.98 15.8366 18.98 15.1203V13C18.98 9.7032 16.2981 7.02 13 7.02C9.7019 7.02 7.02 9.7019 7.02 13C7.02 16.2981 9.7019 18.98 13 18.98C14.6042 18.98 16.055 18.3378 17.1301 17.3069C17.9738 18.5497 19.409 19.5 20.8 19.5L20.8026 19.4753C20.8832 19.4922 20.9677 19.5 21.0535 19.5H21.32C24.1176 19.5 26 17.2978 26 14.0166V13C26 5.8318 20.1682 0 13 0ZM13 16.3787C11.1358 16.3787 9.62 14.8629 9.62 12.9987C9.62 11.1345 11.1358 9.6187 13 9.6187C14.8642 9.6187 16.38 11.1345 16.38 12.9987C16.38 14.8629 14.8642 16.3787 13 16.3787Z"
                  fill="#4F5659"
                />
              </svg>
            </div>
            <input type="file" @change="handleFileChange" />
          </label>
          <label class="file-select mb-0">
            <div class="select-button d-flex flex-column">
              <svg
                width="29"
                height="24"
                viewBox="0 0 29 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.2812 24H2.71875C1.21721 24 0 22.6569 0 21V3C0 1.34312 1.21721 0 2.71875 0H26.2812C27.7828 0 29 1.34312 29 3V21C29 22.6569 27.7828 24 26.2812 24ZM6.34375 3.5C4.59197 3.5 3.17188 5.067 3.17188 7C3.17188 8.933 4.59197 10.5 6.34375 10.5C8.09553 10.5 9.51562 8.933 9.51562 7C9.51562 5.067 8.09553 3.5 6.34375 3.5ZM3.625 20H25.375V13L20.4181 7.53031C20.1527 7.23744 19.7223 7.23744 19.4568 7.53031L11.7812 16L8.63685 12.5303C8.37143 12.2374 7.94107 12.2374 7.6756 12.5303L3.625 17V20Z"
                  fill="#4F5660"
                />
              </svg>
            </div>
            <input type="file" accept="image/*" @change="handleFileChange" />
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
          :placeholder="`${$t('inboxMessage')}`"
          v-model="input"
        ></textarea>
        <textarea
          v-else
          class="w-100 messagebox px-4 py-2 outline-none border-bottom"
          :placeholder="`${$t('inboxMessage')}`"
          v-model="input"
        ></textarea>
      </div>
      <div class="d-flex justify-content-end">
        <button
          class="btn btn-outline-primary border-0 outline-none font-weight-bold"
        >
          {{ $t("inboxSend") }}
        </button>
      </div>
    </div>
    <div class="py-15 border-left d-flex flex-column align-items-center">
      <div class="d-flex justify-content-center align-items-center w-75">
        <div class="d-flex justify-content-around align-items-center w-100">
          <button class="fs-14 btn-inbox btn btn-primary">
            {{ $t("inboxAll") }}
          </button>
          <button class="fs-14 btn-inbox btn btn-outline-primary mx-2">
            {{ $t("inboxFile") }}
          </button>
          <button class="fs-14 btn-inbox btn btn-outline-primary">
            {{ $t("inboxImages") }}
          </button>
        </div>
      </div>

      <div class="w-100 bg-white pt-15">
        <input
          class="w-100 px-5 outline-none quick-search"
          :placeholder="`${$t('inboxSearch')}`"
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
  name: "Inbox",
  data() {
    return {
      value: null,
      input: "",
      search: "",
    };
  },
  components: {
    EmojiPicker,
  },
  methods: {
    sidebarToggle() {
      document.getElementsByClassName("side-bar")[0].classList.toggle("d-none");
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
  bottom: 32px !important;
  right: -110px !important;
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