<template>
  <div
    class="w-90 d-flex justify-content-center flex-column align-items-center pt-9"
    dir="auto"
  >
    <div
      class="setting-cont w-100 py-4 d-flex justify-content-center align-items-center"
    >
      <div class="w-75"  dir="ltr">
        <div class="d-flex justify-content-center align-items-center w-75-resp">
          <div
            class="w-100 d-flex justify-content-around align-items-center flex-column flex-md-row"
          >
            <p class="fs-14 font-weight-bold mb-0 width-25">
              {{ $t("adminSettingsSessionTimeOut") }}
            </p>
            <div
              class="d-flex justify-content-between width-25 flex-column flex-md-row"
            >
              <div class="border rounded-lg d-flex mt-15 mt-md-0">
                <select class="select-arrow setting-select outline-none">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <div
                  class="grey-bg border-left d-flex justify-content-center align-items-center"
                >
                  <p class="mb-0">{{ $t("adminSettingsHours") }}</p>
                </div>
              </div>
              <div class="border rounded-lg d-flex mt-15 mt-md-0">
                <select class="select-arrow setting-select outline-none">
                  <option>15</option>
                  <option>30</option>
                  <option>45</option>
                </select>
                <div
                  class="grey-bg border-left d-flex justify-content-center align-items-center"
                >
                  <p class="mb-0">{{ $t("adminSettingsMinutes") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-center w-75-resp mt-15"
        >
          <div
            class="w-100 d-flex justify-content-around align-items-center flex-column flex-md-row"
          >
            <p class="fs-14 font-weight-bold mb-0 width-25">
              {{ $t("adminSettingsAutoSendSms") }}
            </p>
            <div
              class="d-flex justify-content-between width-25 flex-column flex-md-row"
            >
              <div class="border rounded-lg d-flex mt-15 mt-md-0">
                <select class="select-arrow setting-select outline-none">
                  <option>7</option>
                  <option>14</option>
                  <option>21</option>
                </select>
                <div
                  class="grey-bg border-left d-flex justify-content-center align-items-center"
                >
                  <p class="mb-0">{{ $t("adminSettingsDays") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-center w-75-resp mt-15"
        >
          <div
            class="w-100 d-flex justify-content-around align-items-center flex-column flex-md-row"
          >
            <p class="fs-14 font-weight-bold mb-0 width-25">
              {{ $t("adminSettingsDeactivateEmployee") }}
            </p>
            <div
              class="d-flex justify-content-between width-25 flex-column flex-md-row"
            >
              <div class="border rounded-lg d-flex mt-15 mt-md-0">
                <select class="select-arrow setting-select outline-none">
                  <option>90</option>
                  <option>30</option>
                  <option>60</option>
                </select>
                <div
                  class="grey-bg border-left d-flex justify-content-center align-items-center"
                >
                  <p class="mb-0">{{ $t("adminSettingsDays") }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-center w-75-resp mt-15"
        >
          <div
            class="w-100 d-flex justify-content-around align-items-center flex-column flex-md-row"
          >
            <p class="fs-14 font-weight-bold mb-0 width-25">
              {{ $t("adminSettingsDeactivateUser") }}
            </p>
            <div
              class="d-flex justify-content-between width-25 flex-column flex-md-row"
            >
              <div class="border rounded-lg d-flex mt-15 mt-md-0 w-75">
                <select class="select-arrow setting-select w-100 outline-none">
                  <option>-- Select --</option>
                  <option>David - Employee</option>
                  <option>Wang - Employee</option>
                  <option>Lina - Employee</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-center align-items-center w-75-resp mt-15"
        >
          <div
            class="w-100 d-flex justify-content-around align-items-center flex-column flex-md-row"
          >
            <p class="fs-14 font-weight-bold mb-0 width-25">
              {{ $t("adminSettingsRemoveUser") }}
            </p>
            <div
              class="d-flex justify-content-between width-25 flex-column flex-md-row"
            >
              <div class="border rounded-lg d-flex mt-15 mt-md-0 w-75">
                <select class="select-arrow setting-select w-100 outline-none">
                  <option>-- Select --</option>
                  <option>David - Admin</option>
                  <option>Wang - Admin</option>
                  <option>Lina - Admin</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 pt-5">
      <p class="mb-0 font-24 font-weight-bold">
        {{ $t("adminSettingsEmployeeSetting") }}
      </p>
      <div
        class="setting-cont w-100 py-5 d-flex justify-content-center flex-column align-items-center mt-2"
      >
        <div
          class="d-flex justify-content-around flex-column flex-md-row w-100 align-items-center"
        >
          <button
            class="settings-btn text-white width-25 btn"
            v-b-modal.new-employee-modal
          >
            {{ $t("adminSettingsAddNewEmploy") }}

            <b-modal
              id="new-employee-modal"
              centered
              hide-footer
              header-class="border-0"
              no-stacking
              size="xl"
            >
              <div
                class="w-100 d-flex justify-content-between align-items-center"
              >
                <form
                  class="w-90 d-flex justify-content-center flex-column align-items-center"
                  @submit="submitHandler"
                >
                  <div
                    class="w-100 d-flex justify-content-around flex-column flex-lg-row"
                    dir="auto"
                  >
                    <div class="d-flex pb-4 flex-column w-35">
                      <h1 class="fs-28 mb-0">
                        {{ $t("adminSettingsRegisterEmployee") }}
                      </h1>
                      <div class="w-100 pt-5">
                        <p class="mb-1">{{ $t("adminSettingsName") }}</p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <p class="mb-0 d-none">
                            {{ $t("adminSettingsMinutes") }}
                          </p>
                          <input
                            class="settings-input w-48 px-1 outline-none"
                            :placeholder="`${$t('adminSettingsFirstName')}`"
                            type="text"
                            required
                          />
                          <input
                            class="settings-input w-48 px-1 outline-none"
                            :placeholder="`${$t('adminSettingsLastName')}`"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">{{ $t("adminSettingsUsername") }}</p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsUsernamePlaceholder'
                            )}`"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">{{ $t("adminSettingsPassword") }}</p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsPassowordPlaceholder'
                            )}`"
                            :type="passwordType1"
                            required
                          />
                          <button
                            class="outline-none"
                            type="button"
                            @click="showPassword(1)"
                          >
                            <svg
                              width="21"
                              height="16"
                              class="position-relative mx-n4 mx-lg-0 mx-lg-n15 float-right"
                              viewBox="0 0 21 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.8125 14.7188L2.125 0.125C2.03125 0.0625 1.90625 0 1.8125 0C1.65625 0 1.5 0.09375 1.40625 0.1875L1.09375 0.59375C1.03125 0.65625 0.96875 0.8125 0.96875 0.90625C0.96875 1.03125 1.0625 1.21875 1.1875 1.28125L19.875 15.9062C19.9375 15.9688 20.0625 16 20.1875 16C20.3125 16 20.4688 15.9375 20.5625 15.8125L20.875 15.4375C20.9375 15.375 21 15.2188 21 15.125C21 15 20.9062 14.8125 20.8125 14.7188ZM10.25 4.59375L14.4688 7.875C14.4062 6 12.875 4.5 11 4.5C10.7812 4.53125 10.4688 4.5625 10.25 4.59375ZM11.7188 11.4375L7.5 8.15625C7.5625 10.0312 9.09375 11.5 11 11.5C11.1875 11.5 11.5 11.4688 11.7188 11.4375ZM11 3.5C14.0625 3.5 16.9062 5.21875 18.4062 8C18.0938 8.59375 17.5 9.4375 17.0312 9.90625L18.2188 10.8125C18.7812 10.2188 19.5 9.1875 19.875 8.46875C19.9375 8.34375 20 8.15625 20 8C20 7.875 19.9375 7.6875 19.875 7.5625C18.1875 4.25 14.8125 2 11 2C9.84375 2 8.75 2.21875 7.71875 2.59375L9.15625 3.75C9.75 3.59375 10.375 3.5 11 3.5ZM11 12.5C7.90625 12.5 5.0625 10.7812 3.5625 8C3.875 7.4375 4.46875 6.59375 4.9375 6.125L3.75 5.21875C3.1875 5.8125 2.46875 6.84375 2.09375 7.5625C2.03125 7.6875 2 7.875 2 8.03125C2 8.15625 2.03125 8.34375 2.09375 8.46875C3.78125 11.7812 7.15625 14 11 14C12.125 14 13.2188 13.7812 14.25 13.4375L12.8125 12.2812C12.2188 12.4375 11.5938 12.5 11 12.5Z"
                                fill="#747474"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">
                          {{ $t("adminSettingsConfirmPassword") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsConfirmPasswordPlaceholder'
                            )}`"
                            :type="passwordType2"
                            required
                          />
                          <button
                            class="outline-none"
                            type="button"
                            @click="showPassword(2)"
                          >
                            <svg
                              width="21"
                              height="16"
                              class="position-relative mx-n4 mx-lg-0 mx-lg-n15 float-right"
                              viewBox="0 0 21 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.8125 14.7188L2.125 0.125C2.03125 0.0625 1.90625 0 1.8125 0C1.65625 0 1.5 0.09375 1.40625 0.1875L1.09375 0.59375C1.03125 0.65625 0.96875 0.8125 0.96875 0.90625C0.96875 1.03125 1.0625 1.21875 1.1875 1.28125L19.875 15.9062C19.9375 15.9688 20.0625 16 20.1875 16C20.3125 16 20.4688 15.9375 20.5625 15.8125L20.875 15.4375C20.9375 15.375 21 15.2188 21 15.125C21 15 20.9062 14.8125 20.8125 14.7188ZM10.25 4.59375L14.4688 7.875C14.4062 6 12.875 4.5 11 4.5C10.7812 4.53125 10.4688 4.5625 10.25 4.59375ZM11.7188 11.4375L7.5 8.15625C7.5625 10.0312 9.09375 11.5 11 11.5C11.1875 11.5 11.5 11.4688 11.7188 11.4375ZM11 3.5C14.0625 3.5 16.9062 5.21875 18.4062 8C18.0938 8.59375 17.5 9.4375 17.0312 9.90625L18.2188 10.8125C18.7812 10.2188 19.5 9.1875 19.875 8.46875C19.9375 8.34375 20 8.15625 20 8C20 7.875 19.9375 7.6875 19.875 7.5625C18.1875 4.25 14.8125 2 11 2C9.84375 2 8.75 2.21875 7.71875 2.59375L9.15625 3.75C9.75 3.59375 10.375 3.5 11 3.5ZM11 12.5C7.90625 12.5 5.0625 10.7812 3.5625 8C3.875 7.4375 4.46875 6.59375 4.9375 6.125L3.75 5.21875C3.1875 5.8125 2.46875 6.84375 2.09375 7.5625C2.03125 7.6875 2 7.875 2 8.03125C2 8.15625 2.03125 8.34375 2.09375 8.46875C3.78125 11.7812 7.15625 14 11 14C12.125 14 13.2188 13.7812 14.25 13.4375L12.8125 12.2812C12.2188 12.4375 11.5938 12.5 11 12.5Z"
                                fill="#747474"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex pb-4 flex-column w-35">
                      <div class="w-100">
                        <p class="mb-1">{{ $t("adminSettingsEmail") }}</p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsEmailPlaceholder'
                            )}`"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-3">
                        <p class="mb-1">
                          {{ $t("adminSettingsConfirmEmail") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsEmailPlaceholder'
                            )}`"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">{{ $t("adminSettingsWorkPhone") }}</p>
                        <div
                          class="d-flex w-100 justify-content-center border-dede align-items-center"
                        >
                          <b-dropdown
                            :text="selectedCode"
                            toggle-class="border-left-0 border-top-0 border-bottom-0 border-right color-f5 p-2 outline-none select-arrow"
                            menu-class="h-select-200"
                          >
                            <b-dropdown-item
                              href="#"
                              v-for="(options, index) in countryCodes"
                              :key="options.value"
                              @click="(e) => itemSelected(e, index)"
                              >{{ options.value + " " + options.text }}</b-dropdown-item
                            >
                          </b-dropdown>
                          <input
                            class="settings-input border-0 w-100 px-1 outline-none"
                            :placeholder="`${$t('adminSettingsEnterPhone')}`"
                            type="number"
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">
                          {{ $t("adminSettingsUserTimeZone") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-center align-items-center"
                        >
                          <select
                            class="border p-2 w-100 outline-none select-arrow"
                          >
                            <option>Select</option>
                            <option>+5</option>
                          </select>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">{{ $t("adminSettingsRole") }}</p>
                        <div
                          class="d-flex w-100 justify-content-center align-items-center"
                        >
                          <select
                            class="border p-2 w-100 outline-none select-arrow"
                          >
                            <option>Select</option>
                            <option>{{ $t("adminSettingsRoleAdmin") }}</option>
                          </select>
                        </div>
                      </div>
                      <div class="w-100 py-15">
                        <p class="mb-1">{{ $t("adminSettingsDepartment") }}</p>
                        <div
                          class="d-flex w-100 justify-content-center align-items-center"
                        >
                          <select
                            class="border p-2 w-100 outline-none select-arrow"
                          >
                            <option>Select</option>
                            <option>Department</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-100 d-flex justify-content-between align-items-center flex-column flex-lg-row"
                  >
                    <div class="d-flex">
                      <button class="btn">
                        <svg
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 0.6875C2.78906 0.6875 0.1875 3.3125 0.1875 6.5C0.1875 9.71094 2.78906 12.3125 6 12.3125C9.1875 12.3125 11.8125 9.71094 11.8125 6.5C11.8125 3.3125 9.1875 0.6875 6 0.6875ZM6 3.26562C6.53906 3.26562 6.98438 3.71094 6.98438 4.25C6.98438 4.8125 6.53906 5.23438 6 5.23438C5.4375 5.23438 5.01562 4.8125 5.01562 4.25C5.01562 3.71094 5.4375 3.26562 6 3.26562ZM7.3125 9.21875C7.3125 9.38281 7.17188 9.5 7.03125 9.5H4.96875C4.80469 9.5 4.6875 9.38281 4.6875 9.21875V8.65625C4.6875 8.51562 4.80469 8.375 4.96875 8.375H5.25V6.875H4.96875C4.80469 6.875 4.6875 6.75781 4.6875 6.59375V6.03125C4.6875 5.89062 4.80469 5.75 4.96875 5.75H6.46875C6.60938 5.75 6.75 5.89062 6.75 6.03125V8.375H7.03125C7.17188 8.375 7.3125 8.51562 7.3125 8.65625V9.21875Z"
                            fill="#0074BD"
                          />
                        </svg>
                      </button>
                      <p class="fs-12 font-weight-lighter">
                        {{ $t("adminSettingsPassowordDescription") }}
                      </p>
                    </div>
                    <div
                      class="d-flex justify-content-between width-25 align-items-center"
                    >
                      <button
                        class="btn border"
                        type="button"
                        @click="$bvModal.hide('new-employee-modal')"
                      >
                        {{ $t("adminSettingsCancel") }}
                      </button>
                      <button class="btn btn-primary" type="submit">
                        {{ $t("adminSettingsSubmit") }}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </b-modal>
          </button>
          <button
            class="settings-btn text-white width-25 btn mt-4 mt-md-0"
            @click="allEmployees"
          >
            {{ $t("adminSettingsViewAllEmployees") }}
          </button>
        </div>
        <div
          class="d-flex justify-content-around flex-column flex-md-row pt-5 w-100 align-items-center"
        >
          <button
            class="settings-btn text-white width-25 btn"
            v-b-modal.edit-modal
          >
            <b-modal
              id="edit-modal"
              centered
              hide-footer
              header-class="border-0"
              size="xl"
            >
              <div
                class="w-100 d-flex justify-content-between align-items-center"
              >
                <form
                  class="w-90 d-flex justify-content-center flex-column align-items-center"
                  @submit="submitHandler"
                >
                  <div
                    class="w-100 d-flex justify-content-around flex-column flex-lg-row"
                    dir="auto"
                  >
                    <div class="d-flex pb-4 flex-column">
                      <h1 class="fs-28 mb-0">
                        {{ $t("adminSettingsEditEmployee") }}
                      </h1>
                      <div class="w-100 pt-5">
                        <p class="mb-1">
                          {{ $t("adminSettingsEditEmployeeName") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="first-name-input border-right-0 w-50 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsEditEmployeeFirst'
                            )}`"
                            type="text"
                            required
                          />
                          <input
                            class="last-name-input w-50 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsEditEmployeeLast'
                            )}`"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <p class="mb-0">
                            {{ $t("adminSettingsEditEmployeePassword") }}
                          </p>
                          <button
                            class="change-pass outline-none"
                            type="button"
                            v-b-modal.pass-modal
                          >
                            {{ $t("adminSettingsEditEmployeeChangePassword") }}
                            <b-modal
                              id="pass-modal"
                              centered
                              hide-footer
                              header-class="border-0"
                              hide-header
                              size="xl"
                            >
                              <div
                                class="w-100 d-flex justify-content-center align-items-center flex-column"
                                dir="auto"
                              >
                                <div class="d-flex flex-column w-90">
                                  <h1 class="fs-28">
                                    {{
                                      $t(
                                        "adminSettingsEditEmployeeChangePassword"
                                      )
                                    }}
                                  </h1>
                                  <p class="py-4">
                                    {{
                                      $t(
                                        "adminSettingsEditEmployeeChangePasswordDescription"
                                      )
                                    }}
                                  </p>

                                  <div
                                    class="d-flex mt-4 justify-content-between"
                                  >
                                    <p class="font-weight-light w-50">
                                      {{ $t("lowercaseLetter") }}
                                    </p>
                                    <p
                                      class="font-weight-light w-50 ml-3 ml-sm-0"
                                    >
                                      {{ $t("number") }}
                                    </p>
                                  </div>
                                  <div
                                    class="d-flex justify-content-between text-left"
                                  >
                                    <p class="font-weight-light w-50">
                                      {{ $t("uppercaseLetter") }}
                                    </p>
                                    <p
                                      class="font-weight-light w-50 ml-3 ml-sm-0"
                                    >
                                      {{ $t("specialCharacter") }}
                                    </p>
                                  </div>
                                  <div class="w-100 pt-15">
                                    <p class="mb-1">
                                      {{ $t("adminSettingsPassword") }}
                                    </p>
                                    <div
                                      class="d-flex w-100 justify-content-between align-items-center"
                                    >
                                      <input
                                        class="settings-input width-50 px-1 outline-none"
                                        :placeholder="`${$t(
                                          'adminSettingsPassowordPlaceholder'
                                        )}`"
                                        type="password"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class="w-100 pt-15">
                                    <p class="mb-1">
                                      {{ $t("adminSettingsConfirmPassword") }}
                                    </p>
                                    <div
                                      class="d-flex w-100 justify-content-between align-items-center"
                                    >
                                      <input
                                        class="settings-input width-50 px-1 outline-none"
                                        :placeholder="`${$t(
                                          'adminSettingsConfirmPasswordPlaceholder'
                                        )}`"
                                        type="password"
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div
                                    class="w-100 d-flex justify-content-end mt-4 align-items-center flex-column flex-lg-row"
                                  >
                                    <div
                                      class="d-flex justify-content-around width-25 align-items-center"
                                    >
                                      <button
                                        class="btn border"
                                        type="button"
                                        @click="$bvModal.hide('pass-modal')"
                                      >
                                        {{ $t("adminSettingsCancel") }}
                                      </button>
                                      <button
                                        class="btn btn-primary"
                                        type="submit"
                                        @click="$bvModal.hide('pass-modal')"
                                      >
                                        {{ $t("adminSettingsSubmit") }}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </b-modal>
                          </button>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <div
                          class="d-flex w-100 justify-content-between align-items-center text-left"
                        >
                          <p class="mb-0">{{ $t("adminSettingsLastLogin") }}</p>
                          <p class="mb-0 font-weight-light">
                            Yesterday at 3:18pm
                          </p>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <p class="mb-0">
                            {{ $t("adminSettingsAccountCreated") }}
                          </p>
                          <p class="mb-0 font-weight-light">
                            Yesterday at 3:18pm
                          </p>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <p class="mb-0">
                            {{ $t("adminSettingsLastModified") }}
                          </p>
                          <p class="mb-0 font-weight-light">
                            Yesterday at 3:18pm by Hedi
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex pb-4 flex-column">
                      <div class="w-100">
                        <p class="mb-1">
                          {{ $t("adminSettingsEditEmployeeEmail") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-between align-items-center"
                        >
                          <input
                            class="settings-input w-100 px-1 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsEditEmployeeEmailPlaceHolder'
                            )}`"
                            type="email"
                            required
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">
                          {{ $t("adminSettingsEditEmployeeWorkPone") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-center border-dede align-items-center"
                        >
                          <b-dropdown
                            :text="selectedCode"
                            toggle-class="border-left-0 border-top-0 border-bottom-0 border-right color-f5 p-2 outline-none select-arrow"
                            menu-class="h-select-200"
                          >
                            <b-dropdown-item
                              href="#"
                              v-for="(options, index) in countryCodes"
                              :key="options.value"
                              @click="(e) => itemSelected(e, index)"
                              >{{ options.value + " " + options.text }}</b-dropdown-item
                            >
                          </b-dropdown>
                          <input
                            class="settings-input w-100 px-1 border-0 outline-none"
                            :placeholder="`${$t(
                              'adminSettingsEditEmployeeEnterPhone'
                            )}`"
                            type="number"
                          />
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">
                          {{ $t("adminSettingsEditEmployeeUserTimeZone") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-center align-items-center"
                        >
                          <select
                            class="border p-2 w-100 outline-none select-arrow"
                          >
                            <option>Select</option>
                            <option>+5</option>
                          </select>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">
                          {{ $t("adminSettingsEditEmployeeRole") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-center align-items-center"
                        >
                          <select
                            class="border p-2 w-100 outline-none select-arrow"
                          >
                            <option>Select</option>
                            <option>{{ $t("adminSettingsRoleAdmin") }}</option>
                          </select>
                        </div>
                      </div>
                      <div class="w-100 pt-15">
                        <p class="mb-1">
                          {{ $t("adminSettingsEditEmployeeAccountStatus") }}
                        </p>
                        <div
                          class="d-flex w-100 justify-content-center align-items-center"
                        >
                          <select
                            class="border p-2 w-100 outline-none select-arrow"
                          >
                            <option>
                              {{ $t("adminSettingsEditEmployeeActve") }}
                            </option>
                            <option>
                              {{ $t("adminSettingsEditEmployeeInactive") }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-100 d-flex justify-content-end mt-4 align-items-center flex-column flex-lg-row"
                  >
                    <div
                      class="d-flex justify-content-between width-25 align-items-center"
                    >
                      <button
                        class="btn border"
                        type="button"
                        @click="$bvModal.hide('edit-modal')"
                      >
                        {{ $t("adminSettingsCancel") }}
                      </button>
                      <button class="btn btn-primary" type="submit">
                        {{ $t("adminSettingsSubmit") }}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </b-modal>
            {{ $t("adminSettingsEditEmployee") }}
          </button>
          <button
            class="settings-btn text-white width-25 btn mt-4 mt-md-0"
            @click="notifyAll"
          >
            {{ $t("adminSettingNotifyAllEMployees") }}
          </button>
        </div>
      </div>
    </div>
    <div class="w-100 pt-5">
      <p class="mb-0 font-24 font-weight-bold">
        {{ $t("adminSettingClientSettings") }}
      </p>
      <div
        class="setting-cont w-100 py-5 d-flex justify-content-center flex-column align-items-center mt-2"
      >
        <div
          class="d-flex justify-content-around flex-column flex-md-row w-100 align-items-center"
        >
          <b-modal
            id="new-client-modal"
            centered
            hide-footer
            header-class="border-0"
            no-stacking
            size="xl"
          >
            <div
              class="w-100 d-flex justify-content-between align-items-center"
            >
              <form
                class="w-90 d-flex justify-content-center flex-column align-items-center"
                @submit="submitHandler2"
              >
                <div
                  class="w-100 d-flex justify-content-around flex-column flex-lg-row"
                  dir="auto"
                >
                  <div class="d-flex pb-4 flex-column w-35">
                    <h1 class="fs-28 mb-0">
                      {{ $t("adminSettingsRegisterClient") }}
                    </h1>
                    <div class="w-100 pt-5">
                      <p class="mb-1">{{ $t("adminSettingsName") }}</p>
                      <div
                        class="d-flex w-100 justify-content-between align-items-center"
                      >
                        <p class="mb-0 d-none">
                          {{ $t("adminSettingsMinutes") }}
                        </p>
                        <input
                          class="settings-input w-100 px-1 outline-none"
                          :placeholder="`${$t('adminSettingsFirstName')}`"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div class="w-100 pt-15">
                      <p class="mb-1">{{ $t("adminSettingsUsername") }}</p>
                      <div
                        class="d-flex w-100 justify-content-between align-items-center"
                      >
                        <input
                          class="settings-input w-100 px-1 outline-none"
                          :placeholder="`${$t(
                            'adminSettingsUsernamePlaceholder'
                          )}`"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div class="w-100 pt-15">
                      <p class="mb-1">{{ $t("adminSettingsPassword") }}</p>
                      <div
                        class="d-flex w-100 justify-content-between align-items-center"
                      >
                        <input
                          class="settings-input w-100 px-1 outline-none"
                          :placeholder="`${$t(
                            'adminSettingsPassowordPlaceholder'
                          )}`"
                          :type="passwordType1"
                          required
                        />
                        <button
                          class="outline-none"
                          type="button"
                          @click="showPassword(1)"
                        >
                          <svg
                            width="21"
                            height="16"
                            class="position-relative mx-n4 mx-lg-0 mx-lg-n15 float-right"
                            viewBox="0 0 21 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.8125 14.7188L2.125 0.125C2.03125 0.0625 1.90625 0 1.8125 0C1.65625 0 1.5 0.09375 1.40625 0.1875L1.09375 0.59375C1.03125 0.65625 0.96875 0.8125 0.96875 0.90625C0.96875 1.03125 1.0625 1.21875 1.1875 1.28125L19.875 15.9062C19.9375 15.9688 20.0625 16 20.1875 16C20.3125 16 20.4688 15.9375 20.5625 15.8125L20.875 15.4375C20.9375 15.375 21 15.2188 21 15.125C21 15 20.9062 14.8125 20.8125 14.7188ZM10.25 4.59375L14.4688 7.875C14.4062 6 12.875 4.5 11 4.5C10.7812 4.53125 10.4688 4.5625 10.25 4.59375ZM11.7188 11.4375L7.5 8.15625C7.5625 10.0312 9.09375 11.5 11 11.5C11.1875 11.5 11.5 11.4688 11.7188 11.4375ZM11 3.5C14.0625 3.5 16.9062 5.21875 18.4062 8C18.0938 8.59375 17.5 9.4375 17.0312 9.90625L18.2188 10.8125C18.7812 10.2188 19.5 9.1875 19.875 8.46875C19.9375 8.34375 20 8.15625 20 8C20 7.875 19.9375 7.6875 19.875 7.5625C18.1875 4.25 14.8125 2 11 2C9.84375 2 8.75 2.21875 7.71875 2.59375L9.15625 3.75C9.75 3.59375 10.375 3.5 11 3.5ZM11 12.5C7.90625 12.5 5.0625 10.7812 3.5625 8C3.875 7.4375 4.46875 6.59375 4.9375 6.125L3.75 5.21875C3.1875 5.8125 2.46875 6.84375 2.09375 7.5625C2.03125 7.6875 2 7.875 2 8.03125C2 8.15625 2.03125 8.34375 2.09375 8.46875C3.78125 11.7812 7.15625 14 11 14C12.125 14 13.2188 13.7812 14.25 13.4375L12.8125 12.2812C12.2188 12.4375 11.5938 12.5 11 12.5Z"
                              fill="#747474"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="w-100 pt-15">
                      <p class="mb-1">
                        {{ $t("adminSettingsConfirmPassword") }}
                      </p>
                      <div
                        class="d-flex w-100 justify-content-between align-items-center"
                      >
                        <input
                          class="settings-input w-100 px-1 outline-none"
                          :placeholder="`${$t(
                            'adminSettingsConfirmPasswordPlaceholder'
                          )}`"
                          :type="passwordType2"
                          required
                        />
                        <button
                          class="outline-none"
                          type="button"
                          @click="showPassword(2)"
                        >
                          <svg
                            width="21"
                            height="16"
                            class="position-relative mx-n4 mx-lg-0 mx-lg-n15 float-right"
                            viewBox="0 0 21 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.8125 14.7188L2.125 0.125C2.03125 0.0625 1.90625 0 1.8125 0C1.65625 0 1.5 0.09375 1.40625 0.1875L1.09375 0.59375C1.03125 0.65625 0.96875 0.8125 0.96875 0.90625C0.96875 1.03125 1.0625 1.21875 1.1875 1.28125L19.875 15.9062C19.9375 15.9688 20.0625 16 20.1875 16C20.3125 16 20.4688 15.9375 20.5625 15.8125L20.875 15.4375C20.9375 15.375 21 15.2188 21 15.125C21 15 20.9062 14.8125 20.8125 14.7188ZM10.25 4.59375L14.4688 7.875C14.4062 6 12.875 4.5 11 4.5C10.7812 4.53125 10.4688 4.5625 10.25 4.59375ZM11.7188 11.4375L7.5 8.15625C7.5625 10.0312 9.09375 11.5 11 11.5C11.1875 11.5 11.5 11.4688 11.7188 11.4375ZM11 3.5C14.0625 3.5 16.9062 5.21875 18.4062 8C18.0938 8.59375 17.5 9.4375 17.0312 9.90625L18.2188 10.8125C18.7812 10.2188 19.5 9.1875 19.875 8.46875C19.9375 8.34375 20 8.15625 20 8C20 7.875 19.9375 7.6875 19.875 7.5625C18.1875 4.25 14.8125 2 11 2C9.84375 2 8.75 2.21875 7.71875 2.59375L9.15625 3.75C9.75 3.59375 10.375 3.5 11 3.5ZM11 12.5C7.90625 12.5 5.0625 10.7812 3.5625 8C3.875 7.4375 4.46875 6.59375 4.9375 6.125L3.75 5.21875C3.1875 5.8125 2.46875 6.84375 2.09375 7.5625C2.03125 7.6875 2 7.875 2 8.03125C2 8.15625 2.03125 8.34375 2.09375 8.46875C3.78125 11.7812 7.15625 14 11 14C12.125 14 13.2188 13.7812 14.25 13.4375L12.8125 12.2812C12.2188 12.4375 11.5938 12.5 11 12.5Z"
                              fill="#747474"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="w-100 pt-15">
                      <p class="mb-1">
                        {{ $t("adminSettingsBalance") }}
                      </p>
                      <div
                        class="d-flex w-100 justify-content-between align-items-center"
                      >
                        <input
                          class="settings-input w-100 px-1 outline-none"
                          :placeholder="`${$t(
                            'adminSettingsBalancePlaceHolder'
                          )}`"
                          :type="passwordType3"
                          required
                        />
                        <button
                          class="outline-none"
                          type="button"
                          @click="showPassword(3)"
                        >
                          <svg
                            width="21"
                            height="16"
                            class="position-relative mx-n4 mx-lg-0 mx-lg-n15 float-right"
                            viewBox="0 0 21 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.8125 14.7188L2.125 0.125C2.03125 0.0625 1.90625 0 1.8125 0C1.65625 0 1.5 0.09375 1.40625 0.1875L1.09375 0.59375C1.03125 0.65625 0.96875 0.8125 0.96875 0.90625C0.96875 1.03125 1.0625 1.21875 1.1875 1.28125L19.875 15.9062C19.9375 15.9688 20.0625 16 20.1875 16C20.3125 16 20.4688 15.9375 20.5625 15.8125L20.875 15.4375C20.9375 15.375 21 15.2188 21 15.125C21 15 20.9062 14.8125 20.8125 14.7188ZM10.25 4.59375L14.4688 7.875C14.4062 6 12.875 4.5 11 4.5C10.7812 4.53125 10.4688 4.5625 10.25 4.59375ZM11.7188 11.4375L7.5 8.15625C7.5625 10.0312 9.09375 11.5 11 11.5C11.1875 11.5 11.5 11.4688 11.7188 11.4375ZM11 3.5C14.0625 3.5 16.9062 5.21875 18.4062 8C18.0938 8.59375 17.5 9.4375 17.0312 9.90625L18.2188 10.8125C18.7812 10.2188 19.5 9.1875 19.875 8.46875C19.9375 8.34375 20 8.15625 20 8C20 7.875 19.9375 7.6875 19.875 7.5625C18.1875 4.25 14.8125 2 11 2C9.84375 2 8.75 2.21875 7.71875 2.59375L9.15625 3.75C9.75 3.59375 10.375 3.5 11 3.5ZM11 12.5C7.90625 12.5 5.0625 10.7812 3.5625 8C3.875 7.4375 4.46875 6.59375 4.9375 6.125L3.75 5.21875C3.1875 5.8125 2.46875 6.84375 2.09375 7.5625C2.03125 7.6875 2 7.875 2 8.03125C2 8.15625 2.03125 8.34375 2.09375 8.46875C3.78125 11.7812 7.15625 14 11 14C12.125 14 13.2188 13.7812 14.25 13.4375L12.8125 12.2812C12.2188 12.4375 11.5938 12.5 11 12.5Z"
                              fill="#747474"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex pb-4 flex-column w-35">
                    <div class="w-100">
                      <p class="mb-1">{{ $t("adminSettingsEmail") }}</p>
                      <div
                        class="d-flex w-100 justify-content-between align-items-center"
                      >
                        <input
                          class="settings-input w-100 px-1 outline-none"
                          :placeholder="`${$t(
                            'adminSettingsEmailPlaceholder'
                          )}`"
                          type="email"
                          required
                        />
                      </div>
                    </div>
                    <div class="w-100 pt-3">
                      <p class="mb-1">
                        {{ $t("adminSettingsAddress") }}
                      </p>
                      <div
                        class="d-flex w-100 justify-content-between align-items-center"
                      >
                        <input
                          class="settings-input w-100 px-1 outline-none"
                          :placeholder="`${$t(
                            'adminSettingsAddressPlaceHolder'
                          )}`"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div class="w-100 pt-15">
                      <p class="mb-1">{{ $t("adminSettingsPhone") }}</p>
                      <div
                        class="d-flex w-100 justify-content-center border-dede align-items-center"
                      >
                      <b-dropdown
                            :text="selectedCode"
                            toggle-class="border-left-0 border-top-0 border-bottom-0 border-right color-f5 p-2 outline-none select-arrow"
                            menu-class="h-select-200"
                          >
                            <b-dropdown-item
                              href="#"
                              v-for="(options, index) in countryCodes"
                              :key="options.value"
                              @click="(e) => itemSelected(e, index)"
                              >{{ options.value + " " + options.text }}</b-dropdown-item
                            >
                          </b-dropdown>
                        <input
                          class="settings-input w-100 px-1 border-0 outline-none"
                          :placeholder="`${$t('adminSettingsEnterPhone')}`"
                          type="number"
                        />
                      </div>
                    </div>
                    <div class="w-100 pt-15">
                      <p class="mb-1">
                        {{ $t("adminSettingsUserTimeZone") }}
                      </p>
                      <div
                        class="d-flex w-100 justify-content-center align-items-center"
                      >
                        <select
                          class="border p-2 w-100 outline-none select-arrow"
                        >
                          <option>Select</option>
                          <option>+5</option>
                        </select>
                      </div>
                    </div>
                    <div class="w-100 pt-15">
                      <p class="mb-1">{{ $t("adminSettingsCompany") }}</p>
                      <div
                        class="d-flex w-100 justify-content-center align-items-center"
                      >
                        <input
                          class="settings-input w-100 px-1 outline-none"
                          :placeholder="`${$t(
                            'adminSettingsCompanyPlaceHolder'
                          )}`"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                    <div class="w-100 py-15">
                      <p class="mb-1">{{ $t("adminSettingsMemberShip") }}</p>
                      <div
                        class="d-flex w-100 justify-content-center align-items-center"
                      >
                        <select
                          class="border p-2 w-100 outline-none select-arrow"
                        >
                          <option>VIP</option>
                          <option>General</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="w-100 d-flex justify-content-between align-items-center flex-column flex-lg-row"
                >
                  <div class="d-flex">
                    <button class="btn">
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 0.6875C2.78906 0.6875 0.1875 3.3125 0.1875 6.5C0.1875 9.71094 2.78906 12.3125 6 12.3125C9.1875 12.3125 11.8125 9.71094 11.8125 6.5C11.8125 3.3125 9.1875 0.6875 6 0.6875ZM6 3.26562C6.53906 3.26562 6.98438 3.71094 6.98438 4.25C6.98438 4.8125 6.53906 5.23438 6 5.23438C5.4375 5.23438 5.01562 4.8125 5.01562 4.25C5.01562 3.71094 5.4375 3.26562 6 3.26562ZM7.3125 9.21875C7.3125 9.38281 7.17188 9.5 7.03125 9.5H4.96875C4.80469 9.5 4.6875 9.38281 4.6875 9.21875V8.65625C4.6875 8.51562 4.80469 8.375 4.96875 8.375H5.25V6.875H4.96875C4.80469 6.875 4.6875 6.75781 4.6875 6.59375V6.03125C4.6875 5.89062 4.80469 5.75 4.96875 5.75H6.46875C6.60938 5.75 6.75 5.89062 6.75 6.03125V8.375H7.03125C7.17188 8.375 7.3125 8.51562 7.3125 8.65625V9.21875Z"
                          fill="#0074BD"
                        />
                      </svg>
                    </button>
                    <p class="fs-12 font-weight-lighter">
                      {{ $t("adminSettingsPassowordDescription") }}
                    </p>
                  </div>
                  <div
                    class="d-flex justify-content-between width-25 align-items-center"
                  >
                    <button
                      class="btn border"
                      type="button"
                      @click="$bvModal.hide('new-client-modal')"
                    >
                      {{ $t("adminSettingsCancel") }}
                    </button>
                    <button class="btn btn-primary" type="submit">
                      {{ $t("adminSettingsSubmit") }}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </b-modal>
          <b-modal
            id="client-success-modal"
            centered
            hide-footer
            header-class="border-0"
            hide-header
            body-class="py-5"
            content-class="rounded-lg"
            hide-header-close
            no-stacking
          >
            <div
              class="w-100 d-flex justify-content-center align-items-center flex-column"
            >
              <svg
                width="174"
                height="174"
                viewBox="0 0 174 174"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M174 87C174 135.049 135.049 174 87 174C38.9511 174 0 135.049 0 87C0 38.9511 38.9511 0 87 0C135.049 0 174 38.9511 174 87ZM76.9368 133.066L141.485 68.5174C143.677 66.3256 143.677 62.7715 141.485 60.5797L133.547 52.642C131.356 50.4498 127.802 50.4498 125.609 52.642L72.9677 105.283L48.3906 80.7062C46.1987 78.5143 42.6447 78.5143 40.4525 80.7062L32.5148 88.6439C30.323 90.8357 30.323 94.3897 32.5148 96.5816L68.9987 133.065C71.1909 135.258 74.7446 135.258 76.9368 133.066Z"
                  fill="#46D68C"
                />
              </svg>
              <div class="w-100">
                <h1 class="font-24 text-center mt-15">
                  Succesfully Registered a New Client
                </h1>
              </div>
              <div
                class="w-80 mt-15 d-flex flex-column flex-sm-row justify-content-around align-items-center"
              >
                <button
                  class="success-button"
                  @click="$bvModal.hide('client-success-modal')"
                >
                  Login as {client-name}
                </button>
                <button
                  class="success-button mt-4 mt-sm-0"
                  @click="$bvModal.hide('client-success-modal')"
                >
                  Send client login email
                </button>
              </div>
            </div>
          </b-modal>
          <button
            class="settings-btn text-white width-25 btn"
            v-b-modal.new-client-modal
          >
            {{ $t("adminSettingAddNewClient") }}
          </button>
          <button
            class="settings-btn text-white width-25 btn mt-4 mt-md-0"
            @click="notifyAllClients"
          >
            {{ $t("adminSettingsNofifyAllClients") }}
          </button>
        </div>
        <div
          class="d-flex justify-content-around flex-column flex-md-row pt-5 w-100 align-items-center"
        >
          <button class="settings-btn text-white width-25 btn" @click="sendSms">
            {{ $t("adminSettingsSendSms") }}
          </button>
          <b-modal
            id="client-activate-modal"
            centered
            hide-footer
            header-class="border-0"
            content-class="rounded-lg"
            no-stacking
          >
            <div class="w-100 d-flex flex-column align-items-center">
              <div id="alertSuccess" class="w-100 d-none">
                <SettingsAlert
                  type="Success"
                  title="Account was activated it successfully"
                  text="Account has been reactivated"
                />
              </div>
              <div id="alertWarning" class="w-100 d-none">
                <SettingsAlert
                  type="Warning"
                  title="Warning! Account is already deactivated"
                  text="Please check again the account selected"
                />
              </div>
              <div>
                <img
                  src="../../assets/tableEntry1.png"
                  width="107"
                  height="107"
                  class="rounded-circle"
                />
              </div>
              <div
                :class="
                  'status-btn rounded-pill mt-3 d-flex justify-content-center align-items-center text-white ' +
                  selectedClient.status
                "
              >
                {{ selectedClient.status }}
              </div>
              <p class="mb-0 fs-18 text-dark mt-3">{{ selectedClient.name }}</p>
              <div class="d-flex mt-3">
                <p class="font-13 px-1 mb-0">
                  <span class="text-primary">Email:</span>
                  {{ selectedClient.email }}
                </p>
                <p class="font-13 border-left mb-0 border-primary px-1">
                  <span class="text-primary">Phone:</span> 188886564
                </p>
              </div>
              <div class="d-flex mt-1">
                <p class="font-13">
                  <span class="text-primary">Date joined /deactivated:</span>
                  12/12/2020
                </p>
              </div>
              <div
                class="d-flex justify-content-around w-100 my-15 flex-column flex-sm-row align-items-center"
              >
                <button
                  class="activate-buttons deactive-btn d-flex justify-content-center align-items-center outline-none"
                  @click="warningDisplay"
                >
                  Deactivate Account
                </button>
                <button
                  class="activate-buttons activate-btn mt-2 mt-sm-0 d-flex justify-content-center align-items-center outline-none"
                  @click="successDisplay"
                >
                  Activate Account
                </button>
              </div>
            </div>
          </b-modal>
          <b-modal
            id="activate-modal"
            centered
            hide-footer
            header-class="border-0"
            body-class="pb-10"
            content-class="rounded-lg"
            no-stacking
          >
            <div class="w-100">
              <VueBootstrapTypeahead
                :data="[
                  {
                    name: 'Ariana Santi',
                    email: 'ariana@abc.com',
                    status: 'ACTIVE',
                  },
                  {
                    name: 'Rossana Nagy',
                    email: 'rossana@abc.com',
                    status: 'INACTIVE',
                  },
                  {
                    name: 'Amy Polston',
                    email: 'amy@abc.com',
                    status: 'ACTIVE',
                  },
                  ,
                  {
                    name: 'Sebrina Golding',
                    email: 'sebrina@abc.com',
                    status: 'ACTIVE',
                  },
                  ,
                  {
                    name: 'Leonora Zayac',
                    email: 'leonora@abc.com',
                    status: 'ACTIVE',
                  },
                ]"
                :serializer="(item) => item.name"
                :placeholder="`${$t('clientsSearchFor')}`"
                size="sm"
                :minMatchingChars="1"
                @hit="(data) => clientHandler(data)"
              >
                <template slot="suggestion" slot-scope="{ data, htmlText }">
                  <div
                    class="d-flex align-items-center justify-content-between"
                    style="height: 50px !important"
                  >
                    <div class="d-flex">
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

                      <div class="d-flex flex-column">
                        <span class="ml-4 fs-14" v-html="htmlText"></span>
                        <span
                          class="ml-4 font-12 font-weight-light"
                          v-html="data.email"
                        ></span>
                      </div>
                    </div>
                    <div
                      :class="
                        'status-btn rounded-pill d-flex justify-content-center align-items-center text-white ' +
                        data.status
                      "
                      v-html="data.status"
                    ></div>
                  </div>
                </template>
              </VueBootstrapTypeahead>
            </div>
          </b-modal>
          <b-modal
            id="suspend-modal"
            centered
            hide-footer
            header-class="border-0"
            body-class="pb-10"
            content-class="rounded-lg"
            no-stacking
          >
            <div class="w-100">
              <VueBootstrapTypeahead
                :data="[
                  {
                    name: 'Ariana Santi',
                    email: 'ariana@abc.com',
                    status: 'ACTIVE',
                  },
                  {
                    name: 'Rossana Nagy',
                    email: 'rossana@abc.com',
                    status: 'INACTIVE',
                  },
                  {
                    name: 'Amy Polston',
                    email: 'amy@abc.com',
                    status: 'ACTIVE',
                  },
                  ,
                  {
                    name: 'Sebrina Golding',
                    email: 'sebrina@abc.com',
                    status: 'ACTIVE',
                  },
                  ,
                  {
                    name: 'Leonora Zayac',
                    email: 'leonora@abc.com',
                    status: 'ACTIVE',
                  },
                ]"
                :serializer="(item) => item.name"
                :placeholder="`${$t('clientsSearchFor')}`"
                size="sm"
                :minMatchingChars="1"
                @hit="(data) => clientHandler2(data)"
              >
                <template slot="suggestion" slot-scope="{ data, htmlText }">
                  <div
                    class="d-flex align-items-center justify-content-between"
                    style="height: 50px !important"
                  >
                    <div class="d-flex">
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

                      <div class="d-flex flex-column">
                        <span class="ml-4 fs-14" v-html="htmlText"></span>
                        <span
                          class="ml-4 font-12 font-weight-light"
                          v-html="data.email"
                        ></span>
                      </div>
                    </div>
                    <div
                      :class="
                        'status-btn rounded-pill d-flex justify-content-center align-items-center text-white ' +
                        data.status
                      "
                      v-html="data.status"
                    ></div>
                  </div>
                </template>
              </VueBootstrapTypeahead>
            </div>
          </b-modal>
          <b-modal
            id="client-suspend-modal"
            centered
            hide-footer
            header-class="border-0"
            content-class="rounded-lg"
            no-stacking
          >
            <div class="w-100 d-flex flex-column align-items-center">
              <div id="alertSuccess" class="w-100 d-none">
                <SettingsAlert
                  type="Success"
                  title="Account was activated it successfully"
                  text="Account has been reactivated"
                />
              </div>
              <div id="alertWarning" class="w-100 d-none">
                <SettingsAlert
                  type="Warning"
                  title="Warning! Account is already suspended"
                  text="Please check again the account selected"
                />
              </div>
              <div>
                <img
                  src="../../assets/tableEntry1.png"
                  width="107"
                  height="107"
                  class="rounded-circle"
                />
              </div>
              <div
                :class="
                  'status-btn rounded-pill mt-3 d-flex justify-content-center align-items-center text-white ' +
                  selectedClient.status
                "
              >
                {{ selectedClient.status }}
              </div>
              <p class="mb-0 fs-18 text-dark mt-3">{{ selectedClient.name }}</p>
              <div class="d-flex mt-3">
                <p class="font-13 px-1 mb-0">
                  <span class="text-primary">Email:</span>
                  {{ selectedClient.email }}
                </p>
                <p class="font-13 border-left mb-0 border-primary px-1">
                  <span class="text-primary">Phone:</span> 188886564
                </p>
              </div>
              <div class="d-flex mt-1">
                <p class="font-13">
                  <span class="text-primary">Date joined /deactivated:</span>
                  12/12/2020
                </p>
              </div>
              <div
                class="d-flex justify-content-around w-100 my-15 flex-column flex-sm-row align-items-center"
              >
                <button
                  class="activate-buttons deactive-btn d-flex justify-content-center align-items-center outline-none"
                  @click="warningDisplay"
                >
                  Suspend Account
                </button>
                <button
                  class="activate-buttons activate-btn mt-2 mt-sm-0 d-flex justify-content-center align-items-center outline-none"
                  @click="successDisplay"
                >
                  Activate Account
                </button>
              </div>
            </div>
          </b-modal>
          <button
            class="settings-btn text-white width-25 btn mt-4 mt-md-0"
            v-b-modal.activate-modal
          >
            {{ $t("adminSettingActivateClient") }}
          </button>
        </div>
        <div
          class="d-flex justify-content-around flex-column flex-md-row pt-5 w-100 align-items-center"
        >
          <button
            class="settings-btn text-white width-25 btn"
            @click="sendEmail"
          >
            {{ $t("adminSettingSendEmail") }}
          </button>
          <button
            class="settings-btn text-white width-25 btn mt-4 mt-md-0"
            v-b-modal.suspend-modal
          >
            {{ $t("adminSettingSuspendAccount") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
import SettingsAlert from "./settingsAlert";
export default {
  name: "AdminSettings",
  components: {
    VueBootstrapTypeahead,
    SettingsAlert,
  },
  data() {
    return {
      passwordType1: "password",
      passwordType2: "password",
      passwordType3: "password",
      selectedClient: {},
      countryCodes: [
        { value: "+986", text: this.$t("ksa") },
        { value: "+971", text: this.$t("uae") },
        { value: "+974", text: this.$t("qatar") },
        { value: "+973", text: this.$t("bahrain") },
        { value: "+978", text: this.$t("oman") },
        { value: "+961", text: this.$t("lebanon") },
        { value: "+962", text: this.$t("jordan") },
        { value: "+963", text: this.$t("egypt") },
        { value: "+376", text: this.$t("germany") },
        { value: "+004", text: this.$t("Afghanistan") },
        { value: "+007", text: this.$t("Albania") },
        { value: "+012", text: this.$t("Algeria") },
        { value: "+016", text: this.$t("AmericanSamoa") },
        { value: "+020", text: this.$t("Andorra") },
        { value: "+024", text: this.$t("Angola") },
        { value: "+660", text: this.$t("Anguilla") },
        { value: "+010", text: this.$t("Antarctica") },
        { value: "+028", text: this.$t("AntiguaBarbuda") },
        { value: "+032", text: this.$t("Argentina") },
        { value: "+051", text: this.$t("Armenia") },
        { value: "+533", text: this.$t("Aruba") },
        { value: "+036", text: this.$t("Australia") },
        { value: "+040", text: this.$t("Austria") },
        { value: "+031", text: this.$t("Azerbaijan") },
        { value: "+044", text: this.$t("Bahamas") },
        { value: "+048", text: this.$t("Bahrain") },
        { value: "+050", text: this.$t("Bangladesh") },
        { value: "+052", text: this.$t("Barbados") },
        { value: "+112", text: this.$t("Belarus") },
        { value: "+056", text: this.$t("Belgium") },
        { value: "+084", text: this.$t("Belize") },
        { value: "+204", text: this.$t("Benin") },
        { value: "+060", text: this.$t("Bermuda") },
        { value: "+064", text: this.$t("Bhutan") },
        { value: "+068", text: this.$t("Bolivia") },
        { value: "+535", text: this.$t("Bonaire") },
        { value: "+070", text: this.$t("Bosnia") },
        { value: "+072", text: this.$t("Botswana") },
        { value: "+074", text: this.$t("Bouvet") },
        { value: "+076", text: this.$t("Brazil") },
        { value: "+086", text: this.$t("BritishIndian") },
        { value: "+096", text: this.$t("Brunei") },
        { value: "+100", text: this.$t("Bulgaria") },
        { value: "+854", text: this.$t("Burkina") },
        { value: "+108", text: this.$t("Burundi") },
        { value: "+132", text: this.$t("Burundi") },
        { value: "+116", text: this.$t("Cambodia") },
        { value: "+120", text: this.$t("Cameroon") },
        { value: "+124", text: this.$t("Canada") },
        { value: "+136", text: this.$t("Cayman") },
        { value: "+140", text: this.$t("Africa") },
        { value: "+148", text: this.$t("Chad") },
        { value: "+152", text: this.$t("Chile") },
        { value: "+156", text: this.$t("China") },
        { value: "+162", text: this.$t("Christmas") },
        { value: "+166", text: this.$t("Cocos") },
        { value: "+170", text: this.$t("Colombia") },
        { value: "+174", text: this.$t("Comoros") },
        { value: "+180", text: this.$t("Congo") },
        { value: "+178", text: this.$t("CongoThe") },
        { value: "+184", text: this.$t("Cook") },
        { value: "+188", text: this.$t("Costa") },
        { value: "+191", text: this.$t("Croatia") },
        { value: "+192", text: this.$t("Cuba") },
        { value: "+531", text: this.$t("Curaçao") },
        { value: "+196", text: this.$t("Cyprus") },
        { value: "+203", text: this.$t("Czechia") },
        { value: "+384", text: this.$t("Côte") },
        { value: "+208", text: this.$t("CôteDE") },
        { value: "+262", text: this.$t("Djibouti") },
        { value: "+212", text: this.$t("Dominica") },
        { value: "+214", text: this.$t("Dominican") },
        { value: "+818", text: this.$t("Egypt") },
        { value: "+222", text: this.$t("Salvador") },
        { value: "+226", text: this.$t("Equatorial") },
        { value: "+232", text: this.$t("Eritrea") },
        { value: "+233", text: this.$t("Estonia") },
        { value: "+748", text: this.$t("Eswatini") },
        { value: "+231", text: this.$t("Ethiopia") },
        { value: "+238", text: this.$t("Falkland") },
        { value: "+234", text: this.$t("Faroe") },
        { value: "+242", text: this.$t("Fiji") },
       
        
      ],
      selectedCode: "+986",
    };
  },
  methods: {
    itemSelected(e, index) {
      this.selectedCode = this.countryCodes[index].value;
    },
    successDisplay() {
      document.getElementById("alertSuccess").classList.toggle("d-none");
    },
    warningDisplay() {
      document.getElementById("alertWarning").classList.toggle("d-none");
    },
    showPassword(e) {
      if (e == 1) {
        if (this.passwordType1 == "password") this.passwordType1 = "text";
        else this.passwordType1 = "password";
      } else if (e == 2) {
        if (this.passwordType2 == "password") this.passwordType2 = "text";
        else this.passwordType2 = "password";
      } else {
        if (this.passwordType3 == "password") this.passwordType3 = "text";
        else this.passwordType3 = "password";
      }
    },
    submitHandler(e) {
      e.preventDefault();
      this.$bvModal.hide("new-employee-modal");
    },
    clientHandler(e) {
      this.$bvModal.show("client-activate-modal");
      this.selectedClient = e;
    },
    clientHandler2(e) {
      this.$bvModal.show("client-suspend-modal");
      this.selectedClient = e;
    },
    submitHandler2(e) {
      e.preventDefault();
      this.$bvModal.hide("new-client-modal");
      this.$bvModal.show("client-success-modal");
    },
    sendSms() {
      this.$router.push({ path: "sms" }).catch(() => {});
    },
    sendEmail() {
      this.$router.push({ path: "email" }).catch(() => {});
    },
    allEmployees() {
      this.$router.push({ path: "employees" }).catch(() => {});
    },
    notifyAll() {
      this.$router.push({ path: "notify-employees" }).catch(() => {});
    },
    notifyAllClients() {
      this.$router.push({ path: "notify-clients" }).catch(() => {});
    },
  },
};
</script>
<style scoped>
.w-35 {
  width: 35% !important;
}
@media (max-width: 991px) {
  .w-35 {
    width: 100% !important;
  }
}
@media (min-width: 992px) and (max-width: 1200px) {
  .w-35 {
    width: 40% !important;
  }
}

.deactive-btn {
  border: 2px solid #ff0000;
  color: #ff0000;
}
.deactive-btn:hover {
  background: #ff0000;
  color: white;
}
.activate-btn {
  background: #29cc97;
  color: white;
}
.activate-btn:hover {
  background: white;
  border: 2px solid #29cc97;
  color: #29cc97;
}

.activate-buttons {
  width: 182px;
  height: 41px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 25px;
}
.font-13 {
  font-size: 13px;
}
.rounded-20 {
  border-radius: 20px !important;
  display: none !important;
}
.status-btn {
  height: 18px;
  width: 66px;
  font-size: 11px;
}
.INACTIVE {
  background: #a9a9a9;
}
.ACTIVE {
  background: #66cc66;
}
.w-80 {
  width: 80%;
}
.success-button {
  width: 177px;
  height: 41px;
  border: 2px solid #245aab;
  border-radius: 8px;
  outline: none !important;
  color: #245aab;
  font-size: 14px;
  line-height: 25px;
}
.success-button:hover {
  background: #245aab;
  color: #ffffff;
}
.change-pass {
  color: #ff3a67;
}
.border-dede {
  border: 1px solid #dedede !important;
  border-radius: 4px !important;
}
.settings-input {
  background: #ffffff;
  border: 1px solid #dedede;
  border-radius: 4px;
  height: 36px;
}
.first-name-input {
  height: 36px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px 0px 0px 6px;
}
.last-name-input {
  height: 36px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0px 6px 6px 0px;
}
.settings-btn {
  background: #245aab !important;
  border-radius: 10px !important;
}
.setting-select {
  height: 36px;
  background: #ffffff;
  width: 66px;

  border-radius: 4px;
}
.grey-bg {
  background: #f5f5f5;
  width: 100%;
}
.color-f5 {
  background: #f5f5f5;
}
.setting-cont {
  background: #ffffff;
  border-radius: 10px;
}
</style>

