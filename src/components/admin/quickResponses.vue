<template>
  <div class="d-flex justify-content-center align-items-center pt-9 w-100">
    <div
      class="w-90 quick-resp-cont d-flex flex-column justify-content-center align-items-center py-2"
    >
      <div
        class="w-100 d-flex justify-content-center align-items-center py-4 border-bottom"
      >
        <div
          class="w-90 d-flex justify-content-between align-items-center flex-lg-row flex-column"
        >
          <div
            class="d-flex align-items-center justify-content-center flex-column flex-lg-row"
          >
            <p class="mb-0 font-weight-bold font-24">
              {{ $t("adminMessagesCustomQuickResponse") }}
            </p>
            <button class="btn outline-none" v-b-modal.add-modal>
              <b-modal
                id="add-modal"
                centered
                hide-footer
                header-class="header-class"
                hide-header
                size="lg"
                hide-header-close
              >
                <div class="w-100">
                  <textarea
                    class="quick-resp-text w-100 outline-none p-4"
                  ></textarea>
                  <div
                    class="w-90 d-flex justify-content-between align-items-center"
                  >
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
                        class="btn done-button text-white"
                        @click="$bvModal.hide('add-modal')"
                      >
                        {{ $t("adminMessagesAdd") }}
                      </button>
                    </div>
                  </div>
                </div>
              </b-modal>
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5 3.9165C12.69 3.9165 3.91663 12.6898 3.91663 23.4998C3.91663 34.3098 12.69 43.0832 23.5 43.0832C34.31 43.0832 43.0833 34.3098 43.0833 23.4998C43.0833 12.6898 34.31 3.9165 23.5 3.9165ZM33.2916 25.4582H25.4583V33.2915H21.5416V25.4582H13.7083V21.5415H21.5416V13.7082H25.4583V21.5415H33.2916V25.4582Z"
                  fill="#29CC97"
                />
              </svg>
            </button>
          </div>
          <div
            class="width-50 d-flex justify-content-around align-items-center flex-column flex-lg-row"
          >
            <button
              class="btn btn-67 mt-4 mt-lg-0 text-white"
              v-b-modal.edit-modal
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
                  <textarea
                    class="quick-resp-text w-100 outline-none p-4"
                  ></textarea>
                  <div
                    class="w-90 d-flex justify-content-between align-items-center"
                  >
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

              {{ $t("adminMessagesEdit") }}
            </button>

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
                    <button class="btn btn-67 mt-4 mt-lg-0 text-white">
                      {{ $t("adminMessageDeleteNo") }}
                    </button>
                    <button class="btn btn-ff mt-4 mt-lg-0 text-white">
                      {{ $t("adminMessageDeleteYes") }}
                    </button>
                  </div>
                </div>
              </div>
            </b-modal>

            <button
              class="btn btn-ff mt-4 mt-lg-0 text-white"
              v-b-modal.delete-rating
            >
              {{ $t("adminMessagesDelete") }}
            </button>
            <button class="btn btn-7d mt-4 mt-lg-0 text-white">
              {{ $t("adminMessagesSelectAll") }}
            </button>
          </div>
        </div>
      </div>
      <div class="py-5 w-90">
        <div class="d-flex justify-content-end align-items-center">
          <div
            class="w-90 d-flex justify-content-between flex-column flex-lg-row align-items-center"
          >
            <div class="w-90 d-flex justify-content-center align-items-center">
              <div
                class="resp-cont d-flex justify-content-center align-items-center w-90 fs-18"
              >
                <div class="w-90 py-3">
                  <p class="fs-18 font-weight-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>
            <div
              class="d-flex mt-2 mt-lg-0 w-90-resp justify-content-around flex-row flex-lg-column align-items-center"
            >
              <b-form-checkbox></b-form-checkbox>
              <button
                class="btn outline-none mt-lg-2 bg-primary rounded-circle px-2 py-2 d-flex justify-content-center align-items-center"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.97437 2.17236H2.10542C1.81224 2.17236 1.53107 2.28883 1.32377 2.49613C1.11646 2.70344 1 2.98461 1 3.27778V11.0157C1 11.3089 1.11646 11.59 1.32377 11.7973C1.53107 12.0046 1.81224 12.1211 2.10542 12.1211H9.84333C10.1365 12.1211 10.4177 12.0046 10.625 11.7973C10.8323 11.59 10.9487 11.3089 10.9487 11.0157V7.14674"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.1197 1.34341C10.3396 1.12353 10.6378 1 10.9488 1C11.2597 1 11.558 1.12353 11.7778 1.34341C11.9977 1.56329 12.1213 1.86151 12.1213 2.17247C12.1213 2.48343 11.9977 2.78165 11.7778 3.00153L6.52712 8.25226L4.31628 8.80497L4.86899 6.59414L10.1197 1.34341Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                class="btn outline-none mt-lg-2 delete-btn rounded-circle px-2 py-2 d-flex justify-content-center align-items-center"
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3H2.11111H11"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.71429 3.2V2.1C3.71429 1.80826 3.83469 1.52847 4.04902 1.32218C4.26335 1.11589 4.55404 1 4.85714 1H7.14286C7.44596 1 7.73665 1.11589 7.95098 1.32218C8.16531 1.52847 8.28571 1.80826 8.28571 2.1V3.2M10 3.2V10.9C10 11.1917 9.87959 11.4715 9.66527 11.6778C9.45094 11.8841 9.16025 12 8.85714 12H3.14286C2.83975 12 2.54906 11.8841 2.33474 11.6778C2.12041 11.4715 2 11.1917 2 10.9V3.2H10Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 6V9"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 6V9"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="d-flex pt-5 justify-content-end align-items-center">
          <div
            class="w-90 d-flex justify-content-between flex-column flex-lg-row align-items-center"
          >
            <div class="w-90 d-flex justify-content-center align-items-center">
              <div
                class="resp-cont d-flex justify-content-center align-items-center w-90 fs-18"
              >
                <div class="w-90 py-3">
                  <p class="fs-18 font-weight-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborumLorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum
                  </p>
                </div>
              </div>
            </div>
            <div
              class="d-flex mt-2 mt-lg-0 w-90-resp justify-content-around flex-row flex-lg-column align-items-center"
            >
              <b-form-checkbox></b-form-checkbox>
              <button
                class="btn outline-none mt-lg-2 bg-primary rounded-circle px-2 py-2 d-flex justify-content-center align-items-center"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.97437 2.17236H2.10542C1.81224 2.17236 1.53107 2.28883 1.32377 2.49613C1.11646 2.70344 1 2.98461 1 3.27778V11.0157C1 11.3089 1.11646 11.59 1.32377 11.7973C1.53107 12.0046 1.81224 12.1211 2.10542 12.1211H9.84333C10.1365 12.1211 10.4177 12.0046 10.625 11.7973C10.8323 11.59 10.9487 11.3089 10.9487 11.0157V7.14674"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.1197 1.34341C10.3396 1.12353 10.6378 1 10.9488 1C11.2597 1 11.558 1.12353 11.7778 1.34341C11.9977 1.56329 12.1213 1.86151 12.1213 2.17247C12.1213 2.48343 11.9977 2.78165 11.7778 3.00153L6.52712 8.25226L4.31628 8.80497L4.86899 6.59414L10.1197 1.34341Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                class="btn outline-none mt-lg-2 delete-btn rounded-circle px-2 py-2 d-flex justify-content-center align-items-center"
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3H2.11111H11"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.71429 3.2V2.1C3.71429 1.80826 3.83469 1.52847 4.04902 1.32218C4.26335 1.11589 4.55404 1 4.85714 1H7.14286C7.44596 1 7.73665 1.11589 7.95098 1.32218C8.16531 1.52847 8.28571 1.80826 8.28571 2.1V3.2M10 3.2V10.9C10 11.1917 9.87959 11.4715 9.66527 11.6778C9.45094 11.8841 9.16025 12 8.85714 12H3.14286C2.83975 12 2.54906 11.8841 2.33474 11.6778C2.12041 11.4715 2 11.1917 2 10.9V3.2H10Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 6V9"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 6V9"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="d-flex pt-5 justify-content-end align-items-center">
          <div
            class="w-90 d-flex justify-content-between flex-column flex-lg-row align-items-center"
          >
            <div class="w-90 d-flex justify-content-center align-items-center">
              <div
                class="resp-cont d-flex justify-content-center align-items-center w-90 fs-18"
              >
                <div class="w-90 py-3">
                  <p class="fs-18 font-weight-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>
            <div
              class="d-flex mt-2 mt-lg-0 w-90-resp justify-content-around flex-row flex-lg-column align-items-center"
            >
              <b-form-checkbox></b-form-checkbox>
              <button
                class="btn outline-none mt-lg-2 bg-primary rounded-circle px-2 py-2 d-flex justify-content-center align-items-center"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.97437 2.17236H2.10542C1.81224 2.17236 1.53107 2.28883 1.32377 2.49613C1.11646 2.70344 1 2.98461 1 3.27778V11.0157C1 11.3089 1.11646 11.59 1.32377 11.7973C1.53107 12.0046 1.81224 12.1211 2.10542 12.1211H9.84333C10.1365 12.1211 10.4177 12.0046 10.625 11.7973C10.8323 11.59 10.9487 11.3089 10.9487 11.0157V7.14674"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.1197 1.34341C10.3396 1.12353 10.6378 1 10.9488 1C11.2597 1 11.558 1.12353 11.7778 1.34341C11.9977 1.56329 12.1213 1.86151 12.1213 2.17247C12.1213 2.48343 11.9977 2.78165 11.7778 3.00153L6.52712 8.25226L4.31628 8.80497L4.86899 6.59414L10.1197 1.34341Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button
                class="btn outline-none mt-lg-2 delete-btn rounded-circle px-2 py-2 d-flex justify-content-center align-items-center"
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3H2.11111H11"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.71429 3.2V2.1C3.71429 1.80826 3.83469 1.52847 4.04902 1.32218C4.26335 1.11589 4.55404 1 4.85714 1H7.14286C7.44596 1 7.73665 1.11589 7.95098 1.32218C8.16531 1.52847 8.28571 1.80826 8.28571 2.1V3.2M10 3.2V10.9C10 11.1917 9.87959 11.4715 9.66527 11.6778C9.45094 11.8841 9.16025 12 8.85714 12H3.14286C2.83975 12 2.54906 11.8841 2.33474 11.6778C2.12041 11.4715 2 11.1917 2 10.9V3.2H10Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 6V9"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 6V9"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuickResponses",
};
</script>
<style scoped>
@media (max-width: 992px) {
  .w-90-resp {
    width: 90%;
  }
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
.quick-resp-text {
  min-height: 221px;
  background: #f3f3f3;
  border-radius: 20px;
}
.resp-cont {
  background: #e3e6ea;
  border-radius: 20px;
}
.btn-67 {
  background: #678aaa;
  min-width: 132px;
}
.delete-btn {
  background: #ff3737;
}
.btn-ff {
  background: #ff3737;
  min-width: 132px;
}
.btn-7d {
  background: #7d7d7d;
  min-width: 132px;
}
.quick-resp-cont {
  background: #ffffff;
  border-radius: 10px;
}
</style>