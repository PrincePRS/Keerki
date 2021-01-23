<template>
  <div
    class="pt-9 w-95 d-flex flex-colum justify-content-center align-items-center"
    dir="auto"
  >
    <div class="w-100 d-flex flex-column align-items-center">
      <div class="resp-search" dir="ltr">
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
              class="position-absolute mt-20"
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
          class="w-100 px-5 text-center outline-none quick-search1"
          :placeholder="quickSearch"
        />
        <svg
          width="30"
          height="40"
          viewBox="0 0 28 28"
          class="position-absolute mx-n5 mt-3"
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
        class="d-flex pt-9 justify-content-between flex-column flex-lg-row align-items-center w-100"
      >
        <button
          class="admin-card btn btn-transparent d-flex flex-column justify-content-around align-items-center align-content-around"
          v-b-modal.contact-modal
        >
          <svg
            width="37"
            height="53"
            viewBox="0 0 37 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M10.2251 47.0329C10.2261 47.684 10.4187 48.3217 10.7799 48.8641L12.549 51.5234C12.8512 51.978 13.2611 52.3508 13.7422 52.6087C14.2234 52.8666 14.7608 53.0016 15.3067 53.0016H21.6946C22.2405 53.0016 22.7779 52.8666 23.259 52.6087C23.7402 52.3508 24.1501 51.978 24.4523 51.5234L26.2214 48.8641C26.5825 48.3216 26.7755 47.6846 26.7762 47.0329L26.7803 43.0631H10.2199L10.2251 47.0329ZM0.281372 18.2193C0.281372 22.8123 1.9842 27.0026 4.79051 30.2044C6.50059 32.1556 9.17543 36.2321 10.1951 39.6709C10.1992 39.6978 10.2023 39.7247 10.2064 39.7516H26.7938C26.7979 39.7247 26.801 39.6988 26.8052 39.6709C27.8248 36.2321 30.4997 32.1556 32.2097 30.2044C35.016 27.0026 36.7189 22.8123 36.7189 18.2193C36.7189 8.13794 28.5318 -0.0304781 18.4432 0.000576536C7.88356 0.0326664 0.281372 8.58927 0.281372 18.2193ZM18.5001 9.93808C13.934 9.93808 10.2189 13.6533 10.2189 18.2193C10.2189 19.1344 9.4777 19.8756 8.56262 19.8756C7.64754 19.8756 6.90637 19.1344 6.90637 18.2193C6.90637 11.8262 12.107 6.62558 18.5001 6.62558C19.4152 6.62558 20.1564 7.36675 20.1564 8.28183C20.1564 9.1969 19.4152 9.93808 18.5001 9.93808Z"
              fill="#9FA2B4"
            />
          </svg>
          <p class="font-24 mb-0">{{ $t("adminContact") }}</p>
        </button>

        <b-modal
          id="contact-modal"
          centered
          hide-footer
          header-class="header-class"
          hide-header
          size="lg"
          hide-header-close
          no-stacking
        >
          <div class="d-flex justify-content-center align-items-center py-15">
            <div class="w-100">
              <p class="font-24 text-center font-weight-bolder">
                {{ $t("adminContactPopUpHeading") }}
              </p>
              <div
                class="d-flex w-100 pt-4 justify-content-center align-items-center"
              >
                <div
                  class="d-flex w-75 justify-content-around align-items-center"
                >
                  <button class="outline-none" v-b-modal.contact-admin>
                    <div
                      class="bg-light rounded-circle d-flex justify-content-center align-items-center"
                      style="width: 110px; height: 110px"
                    >
                      <svg
                        width="47"
                        height="51"
                        viewBox="0 0 47 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M47 49.0078V51H0V49.0078C0 48.3477 0.563685 47.8125 1.25893 47.8125H3.35714V11.9531C3.35714 10.6328 4.48441 9.5625 5.875 9.5625H15.1071V2.39062C15.1071 1.0703 16.2344 0 17.625 0H29.375C30.7656 0 31.8929 1.0703 31.8929 2.39062V9.5625H41.125C42.5156 9.5625 43.6429 10.6328 43.6429 11.9531V47.8125H45.7411C46.4363 47.8125 47 48.3477 47 49.0078ZM32.3125 19.125H28.1161C27.4208 19.125 26.8571 19.6602 26.8571 20.3203V24.3047C26.8571 24.9648 27.4208 25.5 28.1161 25.5H32.3125C33.0077 25.5 33.5714 24.9648 33.5714 24.3047V20.3203C33.5714 19.6602 33.0077 19.125 32.3125 19.125ZM14.6875 25.5H18.8839C19.5792 25.5 20.1429 24.9648 20.1429 24.3047V20.3203C20.1429 19.6602 19.5792 19.125 18.8839 19.125H14.6875C13.9923 19.125 13.4286 19.6602 13.4286 20.3203V24.3047C13.4286 24.9648 13.9923 25.5 14.6875 25.5ZM25.5982 38.25H21.4018C20.7065 38.25 20.1429 38.7852 20.1429 39.4453V47.8125H26.8571V39.4453C26.8571 38.7852 26.2935 38.25 25.5982 38.25ZM32.3125 28.6875H28.1161C27.4208 28.6875 26.8571 29.2227 26.8571 29.8828V33.8672C26.8571 34.5273 27.4208 35.0625 28.1161 35.0625H32.3125C33.0077 35.0625 33.5714 34.5273 33.5714 33.8672V29.8828C33.5714 29.2227 33.0077 28.6875 32.3125 28.6875ZM20.1429 29.8828C20.1429 29.2227 19.5792 28.6875 18.8839 28.6875H14.6875C13.9923 28.6875 13.4286 29.2227 13.4286 29.8828V33.8672C13.4286 34.5273 13.9923 35.0625 14.6875 35.0625H18.8839C19.5792 35.0625 20.1429 34.5273 20.1429 33.8672V29.8828ZM19.0938 9.5625H21.8214V12.1523C21.8214 12.3109 21.8877 12.4629 22.0058 12.575C22.1238 12.687 22.2839 12.75 22.4509 12.75H24.5491C24.7161 12.75 24.8762 12.687 24.9942 12.575C25.1123 12.4629 25.1786 12.3109 25.1786 12.1523V9.5625H27.9062C28.0732 9.5625 28.2333 9.49953 28.3513 9.38745C28.4694 9.27537 28.5357 9.12335 28.5357 8.96484V6.97266C28.5357 6.81415 28.4694 6.66213 28.3513 6.55005C28.2333 6.43797 28.0732 6.375 27.9062 6.375H25.1786V3.78516C25.1786 3.62665 25.1123 3.47463 24.9942 3.36255C24.8762 3.25047 24.7161 3.1875 24.5491 3.1875H22.4509C22.2839 3.1875 22.1238 3.25047 22.0058 3.36255C21.8877 3.47463 21.8214 3.62665 21.8214 3.78516V6.375H19.0938C18.9268 6.375 18.7667 6.43797 18.6487 6.55005C18.5306 6.66213 18.4643 6.81415 18.4643 6.97266V8.96484C18.4643 9.12335 18.5306 9.27537 18.6487 9.38745C18.7667 9.49953 18.9268 9.5625 19.0938 9.5625Z"
                          fill="#FFB800"
                        />
                      </svg>
                    </div>
                    <p class="fs-19 pt-4">
                      {{ $t("adminContactPopUpAdministrators") }}
                    </p>
                  </button>
                  <button class="outline-none" v-b-modal.contact-client>
                    <div
                      class="bg-light rounded-circle d-flex justify-content-center align-items-center"
                      style="width: 110px; height: 110px"
                    >
                      <svg
                        width="50"
                        height="55"
                        viewBox="0 0 50 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M25 30.9375C32.7637 30.9375 39.0625 24.0088 39.0625 15.4688C39.0625 6.92871 32.7637 0 25 0C17.2363 0 10.9375 6.92871 10.9375 15.4688C10.9375 24.0088 17.2363 30.9375 25 30.9375ZM37.5 34.375H32.1191C29.9512 35.4707 27.5391 36.0938 25 36.0938C22.4609 36.0938 20.0586 35.4707 17.8809 34.375H12.5C5.5957 34.375 0 40.5303 0 48.125V49.8438C0 52.6904 2.09961 55 4.6875 55H45.3125C47.9004 55 50 52.6904 50 49.8438V48.125C50 40.5303 44.4043 34.375 37.5 34.375Z"
                          fill="#08689F"
                        />
                      </svg>
                    </div>
                    <p class="fs-19 pt-4">
                      {{ $t("adminContactPopUpClient") }}
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </b-modal>
        <b-modal
          id="contact-client"
          centered
          hide-footer
          content-class="client-class"
          header-class="rating-header"
          hide-header
        >
          <form
            class="d-flex w-100 justify-content-center"
            @submit="submitHandler"
          >
            <div
              class="d-flex flex-column w-90 justify-content-start"
              dir="auto"
            >
              <h1 class="fs-19">{{ $t("contactClient") }}</h1>
              <div class="w-100 pt-3">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  class="position-absolute mt-17 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8906 13.5742L10.582 10.2656C10.5 10.2109 10.418 10.1562 10.3359 10.1562H9.98047C10.8281 9.17188 11.375 7.85938 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7.10938 12.125 8.39453 11.6055 9.40625 10.7578V11.1133C9.40625 11.1953 9.43359 11.2773 9.48828 11.3594L12.7969 14.668C12.9336 14.8047 13.1523 14.8047 13.2617 14.668L13.8906 14.0391C14.0273 13.9297 14.0273 13.7109 13.8906 13.5742ZM5.6875 10.8125C3.25391 10.8125 1.3125 8.87109 1.3125 6.4375C1.3125 4.03125 3.25391 2.0625 5.6875 2.0625C8.09375 2.0625 10.0625 4.03125 10.0625 6.4375C10.0625 8.87109 8.09375 10.8125 5.6875 10.8125Z"
                    fill="#DBDCDE"
                  />
                </svg>

                <input
                  class="w-100 contact-input outline-none px-15 font-weight-light"
                  :placeholder="`${$t('searchForClientName')}`"
                  required
                />
              </div>
              <div class="w-100 pt-3">
                <input
                  class="w-100 contact-input outline-none px-15 font-weight-light"
                  :placeholder="`${$t('clientMessageSubject')}`"
                  required
                />
              </div>
              <div class="w-100 pt-3">
                <textarea
                  class="w-100 contact-text-area py-2 outline-none px-15 font-weight-light"
                  :placeholder="`${$t('clientMessage')}`"
                />
              </div>
              <div class="w-100" dir="ltr">
                <div @dragover.prevent @drop.prevent>
                  <div
                    class="d-flex justify-content-center align-items-center mt-3 w-100 form-file-input px-2 flex-column"
                    @dragleave="fileDragOut"
                    @dragover="fileDragIn"
                    @drop="handleFileDrop"
                  >
                    <div
                      class="w-100 file-wrapper d-flex justify-content-center align-items-center flex-column flex-lg-row"
                    >
                      <input
                        type="file"
                        name="file-input"
                        multiple="True"
                        required
                        @change="handleFileInput"
                      />
                      <h1 class="fs-14 text-center mb-0 mx-lg-4">
                        {{ $t("clientDragAndDrop") }}

                        <span class="text-primary">{{
                          $t("clientBrowse")
                        }}</span>
                      </h1>
                    </div>
                    <ul class="file-list">
                      <li v-for="(file, index) in files" :key="index">
                        {{ file.name }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-blue-color text-white rounded-pill mt-4"
              >
                {{ $t("clientSubmit") }}
              </button>
            </div>
          </form>
        </b-modal>
        <b-modal
          id="contact-admin"
          centered
          hide-footer
          content-class="client-class"
          header-class="rating-header"
          hide-header
        >
          <form
            class="d-flex w-100 justify-content-center"
            @submit="submitHandler"
          >
            <div
              class="d-flex flex-column w-90 justify-content-start"
              dir="auto"
            >
              <h1 class="fs-19">{{ $t("contactEmployAdministrator") }}</h1>
              <div class="w-100 pt-3">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  class="position-absolute mt-17 mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8906 13.5742L10.582 10.2656C10.5 10.2109 10.418 10.1562 10.3359 10.1562H9.98047C10.8281 9.17188 11.375 7.85938 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7.10938 12.125 8.39453 11.6055 9.40625 10.7578V11.1133C9.40625 11.1953 9.43359 11.2773 9.48828 11.3594L12.7969 14.668C12.9336 14.8047 13.1523 14.8047 13.2617 14.668L13.8906 14.0391C14.0273 13.9297 14.0273 13.7109 13.8906 13.5742ZM5.6875 10.8125C3.25391 10.8125 1.3125 8.87109 1.3125 6.4375C1.3125 4.03125 3.25391 2.0625 5.6875 2.0625C8.09375 2.0625 10.0625 4.03125 10.0625 6.4375C10.0625 8.87109 8.09375 10.8125 5.6875 10.8125Z"
                    fill="#DBDCDE"
                  />
                </svg>

                <input
                  class="w-100 contact-input outline-none px-15 font-weight-light"
                  :placeholder="`${$t('searchForEmployName')}`"
                  required
                />
              </div>
              <div class="w-100 pt-3 d-flex">
                <select
                  class="w-100 contact-input outline-none select-arrow px-15 font-weight-lighter"
                  required
                >
                  <option class="font-weight-light">
                    {{ $t("selectDepartment") }}
                  </option>
                </select>
              </div>
              <div class="w-100 pt-3">
                <input
                  class="w-100 contact-input outline-none px-15 font-weight-light"
                  :placeholder="`${$t('administratorOrderNo')}`"
                  required
                />
              </div>
              <div class="w-100 pt-3">
                <input
                  class="w-100 contact-input outline-none px-15 font-weight-light"
                  :placeholder="`${$t('administratorMessageSubject')}`"
                  required
                />
              </div>
              <div class="w-100 pt-3">
                <textarea
                  class="w-100 contact-text-area py-2 outline-none px-15 font-weight-light"
                  :placeholder="`${$t('administratorMessage')}`"
                />
              </div>
              <div class="w-100" dir="ltr">
                <div @dragover.prevent @drop.prevent>
                  <div
                    class="d-flex justify-content-center align-items-center mt-3 w-100 form-file-input px-2 flex-column"
                    @dragleave="fileDragOut"
                    @dragover="fileDragIn"
                    @drop="handleFileDrop"
                  >
                    <div
                      class="w-100 file-wrapper d-flex justify-content-center align-items-center flex-column flex-lg-row"
                    >
                      <input
                        type="file"
                        name="file-input"
                        multiple="True"
                        required
                        @change="handleFileInput"
                      />
                      <h1 class="fs-14 text-center mb-0 mx-lg-4">
                        {{ $t("administratorDragAndDrop") }}

                        <span class="text-primary">{{
                          $t("administratorBrowse")
                        }}</span>
                      </h1>
                    </div>
                    <p class="mb-0 pt-4 fs-10 font-weight-light text-center">
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.8125 6.5C11.8125 3.3125 9.1875 0.6875 6 0.6875C2.78906 0.6875 0.1875 3.3125 0.1875 6.5C0.1875 9.71094 2.78906 12.3125 6 12.3125C9.1875 12.3125 11.8125 9.71094 11.8125 6.5ZM6 7.67188C6.58594 7.67188 7.07812 8.16406 7.07812 8.75C7.07812 9.35938 6.58594 9.82812 6 9.82812C5.39062 9.82812 4.92188 9.35938 4.92188 8.75C4.92188 8.16406 5.39062 7.67188 6 7.67188ZM4.96875 3.80469C4.94531 3.64062 5.08594 3.5 5.25 3.5H6.72656C6.89062 3.5 7.03125 3.64062 7.00781 3.80469L6.84375 6.99219C6.82031 7.15625 6.70312 7.25 6.5625 7.25H5.41406C5.27344 7.25 5.15625 7.15625 5.13281 6.99219L4.96875 3.80469Z"
                          fill="#FF3A67"
                        />
                      </svg>

                      {{ $t("administratorUploadFileTypes") }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="d-flex flex-lg w-100 justify-content-end py-4 align-items-center"
                dir="ltr"
              >
                <div
                  class="d-flex align-items-center w-25 justify-content-around"
                  dir="auto"
                >
                  <p
                    class="mb-0 fs-14 font-weight-light pt-lg-2 pt-1 mr-2 mr-lg-0"
                  >
                    {{ $t("administratorUrgent") }}
                  </p>
                  <b-form-checkbox
                    v-model="urgent"
                    switch
                    size="lg"
                  ></b-form-checkbox>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-blue-color text-white rounded-pill mt-4"
              >
                {{ $t("administratorSubmit") }}
              </button>
            </div>
          </form>
        </b-modal>
        <button
          class="admin-card btn mt-5 mt-lg-0 btn-transparent d-flex flex-column justify-content-around align-items-center align-content-around"
          v-b-modal.client-modal
          @click="clients"
        >
          <svg
            width="53"
            height="39"
            viewBox="0 0 53 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M7.94976 16.8504C10.873 16.8504 13.2498 14.4737 13.2498 11.5504C13.2498 8.62716 10.873 6.25044 7.94976 6.25044C5.02647 6.25044 2.64976 8.62716 2.64976 11.5504C2.64976 14.4737 5.02647 16.8504 7.94976 16.8504ZM45.0498 16.8504C47.973 16.8504 50.3498 14.4737 50.3498 11.5504C50.3498 8.62716 47.973 6.25044 45.0498 6.25044C42.1265 6.25044 39.7498 8.62716 39.7498 11.5504C39.7498 14.4737 42.1265 16.8504 45.0498 16.8504ZM47.6998 19.5004H42.3998C40.9423 19.5004 39.6255 20.0884 38.6649 21.0408C42.0023 22.8709 44.3707 26.1751 44.8841 30.1004H50.3498C51.8155 30.1004 52.9998 28.9162 52.9998 27.4504V24.8004C52.9998 21.8772 50.623 19.5004 47.6998 19.5004ZM26.4998 19.5004C31.6259 19.5004 35.7748 15.3515 35.7748 10.2254C35.7748 5.09935 31.6259 0.950439 26.4998 0.950439C21.3737 0.950439 17.2248 5.09935 17.2248 10.2254C17.2248 15.3515 21.3737 19.5004 26.4998 19.5004ZM32.8598 22.1504H32.1724C30.4499 22.9786 28.5369 23.4754 26.4998 23.4754C24.4626 23.4754 22.5579 22.9786 20.8271 22.1504H20.1398C14.8729 22.1504 10.5998 26.4236 10.5998 31.6904V34.0754C10.5998 36.27 12.3802 38.0504 14.5748 38.0504H38.4248C40.6193 38.0504 42.3998 36.27 42.3998 34.0754V31.6904C42.3998 26.4236 38.1266 22.1504 32.8598 22.1504ZM14.3346 21.0408C13.374 20.0884 12.0573 19.5004 10.5998 19.5004H5.29976C2.37647 19.5004 -0.000244141 21.8772 -0.000244141 24.8004V27.4504C-0.000244141 28.9162 1.18397 30.1004 2.64976 30.1004H8.1071C8.62882 26.1751 10.9973 22.8709 14.3346 21.0408Z"
              fill="#9FA2B4"
            />
          </svg>

          <p class="font-24 mb-0">{{ $t("adminClients") }}</p>
        </button>

        <!-- <b-modal
          id="client-modal"
          centered
          hide-footer
          body-class="client-drop-modal"
          header-class="header-class2"
          no-stacking
          size="sm"
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
                class="position-absolute mt-20 mx-15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8906 13.5742L10.582 10.2656C10.5 10.2109 10.418 10.1562 10.3359 10.1562H9.98047C10.8281 9.17188 11.375 7.85938 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7.10938 12.125 8.39453 11.6055 9.40625 10.7578V11.1133C9.40625 11.1953 9.43359 11.2773 9.48828 11.3594L12.7969 14.668C12.9336 14.8047 13.1523 14.8047 13.2617 14.668L13.8906 14.0391C14.0273 13.9297 14.0273 13.7109 13.8906 13.5742ZM5.6875 10.8125C3.25391 10.8125 1.3125 8.87109 1.3125 6.4375C1.3125 4.03125 3.25391 2.0625 5.6875 2.0625C8.09375 2.0625 10.0625 4.03125 10.0625 6.4375C10.0625 8.87109 8.09375 10.8125 5.6875 10.8125Z"
                  fill="#747474"
                />
              </svg>

              <input
                class="w-100 py-4 px-11 outline-none"
                :placeholder="`${$t('clientsSearchFor')}`"
              />
            </div>
            <div
              class="w-100 d-flex justify-content-center align-items-center flex-column overflow-scroll pt-11 h-300"
            >
              <div class="w-100">
                <div
                  class="d-flex justify-content-around w-100 align-items-center mt-4"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.78125 9.5C8.875 9.5 8.46875 10 7 10C5.5 10 5.09375 9.5 4.1875 9.5C1.875 9.5 0 11.4062 0 13.7188V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V13.7188C14 11.4062 12.0938 9.5 9.78125 9.5ZM12.5 14.5H1.5V13.7188C1.5 12.2188 2.6875 11 4.1875 11C4.65625 11 5.375 11.5 7 11.5C8.59375 11.5 9.3125 11 9.78125 11C11.2812 11 12.5 12.2188 12.5 13.7188V14.5ZM7 9C9.46875 9 11.5 7 11.5 4.5C11.5 2.03125 9.46875 0 7 0C4.5 0 2.5 2.03125 2.5 4.5C2.5 7 4.5 9 7 9ZM7 1.5C8.625 1.5 10 2.875 10 4.5C10 6.15625 8.625 7.5 7 7.5C5.34375 7.5 4 6.15625 4 4.5C4 2.875 5.34375 1.5 7 1.5Z"
                      fill="black"
                      fill-opacity="0.55"
                    />
                  </svg>
                  <div class="w-75">
                    <p class="mb-0">First Last Name (client)</p>
                    <p class="mb-0 font-weight-light">first.last@email.com</p>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-around w-100 align-items-center mt-4"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.78125 9.5C8.875 9.5 8.46875 10 7 10C5.5 10 5.09375 9.5 4.1875 9.5C1.875 9.5 0 11.4062 0 13.7188V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V13.7188C14 11.4062 12.0938 9.5 9.78125 9.5ZM12.5 14.5H1.5V13.7188C1.5 12.2188 2.6875 11 4.1875 11C4.65625 11 5.375 11.5 7 11.5C8.59375 11.5 9.3125 11 9.78125 11C11.2812 11 12.5 12.2188 12.5 13.7188V14.5ZM7 9C9.46875 9 11.5 7 11.5 4.5C11.5 2.03125 9.46875 0 7 0C4.5 0 2.5 2.03125 2.5 4.5C2.5 7 4.5 9 7 9ZM7 1.5C8.625 1.5 10 2.875 10 4.5C10 6.15625 8.625 7.5 7 7.5C5.34375 7.5 4 6.15625 4 4.5C4 2.875 5.34375 1.5 7 1.5Z"
                      fill="black"
                      fill-opacity="0.55"
                    />
                  </svg>
                  <div class="w-75">
                    <p class="mb-0">First Last Name (client)</p>
                    <p class="mb-0 font-weight-light">first.last@email.com</p>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-around w-100 align-items-center mt-4"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.78125 9.5C8.875 9.5 8.46875 10 7 10C5.5 10 5.09375 9.5 4.1875 9.5C1.875 9.5 0 11.4062 0 13.7188V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V13.7188C14 11.4062 12.0938 9.5 9.78125 9.5ZM12.5 14.5H1.5V13.7188C1.5 12.2188 2.6875 11 4.1875 11C4.65625 11 5.375 11.5 7 11.5C8.59375 11.5 9.3125 11 9.78125 11C11.2812 11 12.5 12.2188 12.5 13.7188V14.5ZM7 9C9.46875 9 11.5 7 11.5 4.5C11.5 2.03125 9.46875 0 7 0C4.5 0 2.5 2.03125 2.5 4.5C2.5 7 4.5 9 7 9ZM7 1.5C8.625 1.5 10 2.875 10 4.5C10 6.15625 8.625 7.5 7 7.5C5.34375 7.5 4 6.15625 4 4.5C4 2.875 5.34375 1.5 7 1.5Z"
                      fill="black"
                      fill-opacity="0.55"
                    />
                  </svg>
                  <div class="w-75">
                    <p class="mb-0">First Last Name (client)</p>
                    <p class="mb-0 font-weight-light">first.last@email.com</p>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-around w-100 align-items-center mt-4"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.78125 9.5C8.875 9.5 8.46875 10 7 10C5.5 10 5.09375 9.5 4.1875 9.5C1.875 9.5 0 11.4062 0 13.7188V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V13.7188C14 11.4062 12.0938 9.5 9.78125 9.5ZM12.5 14.5H1.5V13.7188C1.5 12.2188 2.6875 11 4.1875 11C4.65625 11 5.375 11.5 7 11.5C8.59375 11.5 9.3125 11 9.78125 11C11.2812 11 12.5 12.2188 12.5 13.7188V14.5ZM7 9C9.46875 9 11.5 7 11.5 4.5C11.5 2.03125 9.46875 0 7 0C4.5 0 2.5 2.03125 2.5 4.5C2.5 7 4.5 9 7 9ZM7 1.5C8.625 1.5 10 2.875 10 4.5C10 6.15625 8.625 7.5 7 7.5C5.34375 7.5 4 6.15625 4 4.5C4 2.875 5.34375 1.5 7 1.5Z"
                      fill="black"
                      fill-opacity="0.55"
                    />
                  </svg>
                  <div class="w-75">
                    <p class="mb-0">First Last Name (client)</p>
                    <p class="mb-0 font-weight-light">first.last@email.com</p>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-around w-100 align-items-center mt-4"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.78125 9.5C8.875 9.5 8.46875 10 7 10C5.5 10 5.09375 9.5 4.1875 9.5C1.875 9.5 0 11.4062 0 13.7188V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V13.7188C14 11.4062 12.0938 9.5 9.78125 9.5ZM12.5 14.5H1.5V13.7188C1.5 12.2188 2.6875 11 4.1875 11C4.65625 11 5.375 11.5 7 11.5C8.59375 11.5 9.3125 11 9.78125 11C11.2812 11 12.5 12.2188 12.5 13.7188V14.5ZM7 9C9.46875 9 11.5 7 11.5 4.5C11.5 2.03125 9.46875 0 7 0C4.5 0 2.5 2.03125 2.5 4.5C2.5 7 4.5 9 7 9ZM7 1.5C8.625 1.5 10 2.875 10 4.5C10 6.15625 8.625 7.5 7 7.5C5.34375 7.5 4 6.15625 4 4.5C4 2.875 5.34375 1.5 7 1.5Z"
                      fill="black"
                      fill-opacity="0.55"
                    />
                  </svg>
                  <div class="w-75">
                    <p class="mb-0">First Last Name (client)</p>
                    <p class="mb-0 font-weight-light">first.last@email.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-modal> -->
        <button
          class="admin-card btn mt-5 mt-lg-0 btn-transparent d-flex flex-column justify-content-around align-items-center align-content-around"
          @click="orders"
        >
          <svg
            width="53"
            height="37"
            viewBox="0 0 53 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M11.7781 9.66707H41.2226V27.3337H11.7781V9.66707ZM48.5837 18.5004C48.5837 20.9397 50.5611 22.9171 53.0004 22.9171V31.7504C53.0004 34.1897 51.023 36.1671 48.5837 36.1671H4.41703C1.97774 36.1671 0.000366211 34.1897 0.000366211 31.7504V22.9171C2.43965 22.9171 4.41703 20.9397 4.41703 18.5004C4.41703 16.0611 2.43965 14.0837 0.000366211 14.0837V5.25041C0.000366211 2.81112 1.97774 0.83374 4.41703 0.83374H48.5837C51.023 0.83374 53.0004 2.81112 53.0004 5.25041V14.0837C50.5611 14.0837 48.5837 16.0611 48.5837 18.5004ZM44.167 8.93096C44.167 7.71132 43.1783 6.72263 41.9587 6.72263H11.042C9.82239 6.72263 8.8337 7.71132 8.8337 8.93096V28.0698C8.8337 29.2895 9.82239 30.2782 11.042 30.2782H41.9587C43.1783 30.2782 44.167 29.2895 44.167 28.0698V8.93096Z"
              fill="#9FA2B4"
            />
          </svg>

          <p class="font-24 mb-0">{{ $t("adminOrders") }}</p>
        </button>
      </div>
      <AdminChart />
    </div>
  </div>
</template>
<script>
import AdminChart from "./adminChart";
export default {
  name: "DashboardHome",
  components: {
    AdminChart,
  },
  data() {
    return {
      currentLanguage: localStorage.currentLanguage,
      files: [],
      color: "#444444",
      urgent: false,
      quickSearch: this.$t("adminDashBoardQuickSearch"),
    };
  },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      this.$bvModal.hide("contact-client");
      this.$bvModal.hide("contact-admin");
    },
    orders() {
      this.$router.push({ path: "/admin/dashboard/orders" }).catch(() => {});
      document.getElementsByClassName("admin-side")[0].classList.add("d-none");
    },
    clients() {
      this.$router.push({ path: "/admin/dashboard/clients" }).catch(() => {});
      document.getElementsByClassName("admin-side")[0].classList.add("d-none");
    },
    handleFileDrop(e) {
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      [...droppedFiles].forEach((f) => {
        this.files.push(f);
      });
      this.color = "#444444";
    },
    handleFileInput(e) {
      let files = e.target.files;
      files = e.target.files;
      if (!files) return;
      [...files].forEach((f) => {
        this.files.push(f);
      });
    },
    removeFile(fileKey) {
      this.files.splice(fileKey, 1);
    },
    fileDragIn() {
      this.color = "white";
    },
    fileDragOut() {
      this.color = "#444444";
    },
    searchHandler(e) {
      this.quickSearch = e.target.innerText;
    },
  },
};
</script>
<style>
.btn-blue-color {
  background: #2c5282 !important;
}
.h-300 {
  height: 300px;
}
.client-drop-menu {
  width: 300px !important;
  height: 200px !important;
  overflow-y: scroll !important;
}
.client-drop-modal {
  padding: 0px !important;
}
.fs-10 {
  font-size: 10px;
}
.select-arrow {
  -webkit-appearance: button !important;
}
.file-list {
  list-style: none;
}
.container {
  min-height: 150px;
}

.file-wrapper {
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  overflow: hidden;
  display: flex;
}

.file-wrapper input {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
  font-size: 300px;
  height: 200px;
}
.contact-text-area {
  background: #f2f3f7;
  border-radius: 6px;
  height: 100px !important;
}
.contact-input {
  background: #f2f3f7;
  border-radius: 6px;
  height: 40px !important;
}
.w-90 {
  width: 95% !important;
}
.client-class {
  border-radius: 12px !important;
  border: 1px solid #e3e3e3 !important;
}

.admin-card {
  background: #ffffff !important;
  width: 90% !important;
  border: 1px solid #dfe0eb !important;
  height: 175px !important;
  border-radius: 10px !important;
}
.admin-card:hover {
  background: #f7f7f7 !important;
  transform: scale(1.1);
}
.resp-search {
  width: 90% !important;
}
.quick-search1 {
  height: 65px !important;

  background: #ffffff !important;

  border: 1px solid #dfe0eb !important;
  border-radius: 8px !important;
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .resp-search {
    width: 100% !important;
  }
  .admin-card {
    width: 30% !important;
  }
}
@media only screen and (min-width: 1200px) {
  .resp-search {
    width: 62% !important;
  }
  .admin-card {
    width: 30% !important;
  }
}
</style>