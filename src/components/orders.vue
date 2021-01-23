<template>
  <div class="px-4 px-lg-15">
    <DashboardTop
      :Heading="$t('orderHistoryHeading')"
      :Text="$t('orderHistoryDescription')"
      v-bind:checked="false"
    />
    <div class="orders w-100 p-15 my-5" dir="auto">
      <div
        class="d-flex flex-column flex-lg-row justify-content-between w-100 align-items-sm-center"
      >
        <p class="fs-20 mb-0 font-weight-bold">{{ this.heading }}</p>
        <div class="d-flex flex-column flex-lg-row mt-3 mt-lg-0">
          <div class="d-flex flex-column flex-lg-row rounded-lg p-0">
            <div
              class="btn outline-none d-flex align-items-center justify-content-center border border-right-0 px-2 py-1 color-f5 ml-0"
            >
              <div class="border-0 outline-none color-f5">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  class="position-absolute ml-n1 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8906 13.5742L10.582 10.2656C10.5 10.2109 10.418 10.1562 10.3359 10.1562H9.98047C10.8281 9.17188 11.375 7.85938 11.375 6.4375C11.375 3.32031 8.80469 0.75 5.6875 0.75C2.54297 0.75 0 3.32031 0 6.4375C0 9.58203 2.54297 12.125 5.6875 12.125C7.10938 12.125 8.39453 11.6055 9.40625 10.7578V11.1133C9.40625 11.1953 9.43359 11.2773 9.48828 11.3594L12.7969 14.668C12.9336 14.8047 13.1523 14.8047 13.2617 14.668L13.8906 14.0391C14.0273 13.9297 14.0273 13.7109 13.8906 13.5742ZM5.6875 10.8125C3.25391 10.8125 1.3125 8.87109 1.3125 6.4375C1.3125 4.03125 3.25391 2.0625 5.6875 2.0625C8.09375 2.0625 10.0625 4.03125 10.0625 6.4375C10.0625 8.87109 8.09375 10.8125 5.6875 10.8125Z"
                    fill="black"
                    fill-opacity="0.55"
                  />
                </svg>
                <select
                  class="outline-none select-arrow px-2"
                  @change="searchHandler"
                >
                  <option value="number">
                    {{ $t("orderSearchByNumber") }}
                  </option>
                  <option value="name">{{ $t("orderSearchByName") }}</option>
                  <option value="date">{{ $t("orderSearchByDate") }}</option>
                </select>
              </div>
            </div>
            <VueBootstrapTypeahead
              v-if="!search || search == 'number'"
              :data="[
                {
                  orderNo: '123',
                  dateCompleted: '22-07',
                  status: `${$t('inProgressBtn')}`,
                  color: 'in-progress',
                },
                {
                  orderNo: '456',
                  dateCompleted: '09-02',
                  status: `${$t('doneBtn')}`,
                  color: 'done',
                },
                {
                  orderNo: '789',
                  dateCompleted: '01-04',
                  status: `${$t('canceledBtn')}`,
                  color: 'cancelled',
                },
              ]"
              :serializer="(item) => item.orderNo"
              :placeholder="`${$t('clientsSearchFor')}`"
              :minMatchingChars="1"
            >
              <template slot="suggestion" slot-scope="{ data, htmlText }">
                <div class="d-flex align-items-center flex-lg-column flex-xl-row">
                  <CustomAlert
                    v-bind:alert="200"
                    v-bind:type="data.status"
                    v-bind:color="data.color"
                  />
                  <div class="d-flex flex-column">
                    <span class="ml-4 ml-lg-0 ml-xl-4 mt-2 mt-lg-2 mt-xl-0" v-html="htmlText"></span>
                    <span class="ml-4 ml-lg-0 ml-xl-4" v-html="data.dateCompleted"></span>
                  </div>
                </div>
              </template>
            </VueBootstrapTypeahead>
            <VueBootstrapTypeahead
              v-else-if="search == 'name'"
              :data="[
                { productName: 'Chairs', dateUpdated: '22-07' },
                { productName: 'Cup', dateUpdated: '22-07' },
                { productName: 'Tables', dateUpdated: '22-07' },
              ]"
              :serializer="(item) => item.productName"
              :placeholder="`${$t('orderSearchByName')}`"
              :minMatchingChars="1"
            >
              <template slot="suggestion" slot-scope="{ data, htmlText }">
                <div class="d-flex align-items-center">
                  <div class="d-flex flex-column">
                    <span class="font-weight-bold" v-html="htmlText"></span>
                    <span
                      class="font-weight-light"
                      v-html="data.dateUpdated"
                    ></span>
                  </div>
                </div>
              </template>
            </VueBootstrapTypeahead>
            <input
              type="date"
              v-else
              class="border rounded-lg outline-none text-muted px-20 h-38"
            />
          </div>
          <button
            v-if="
              checkbox1 &&
              checkbox2 &&
              checkbox3 &&
              checkbox4 &&
              checkbox5 &&
              checkbox6
            "
            @click="deselectAll"
            class="ml-lg-4 btn-primary rounded-lg py-2 py-lg-0 width-117 mt-3 mt-lg-0 d-flex justify-content-center align-items-center"
          >
            {{ $t("orderDeselect") }}
          </button>
          <button
            v-else
            @click="selectAll"
            class="ml-lg-4 btn-primary rounded-lg width-117 py-2 py-lg-0 mt-3 mt-lg-0 d-flex justify-content-center align-items-center"
          >
            {{ $t("orderSelectAll") }}
          </button>

          <p
            class="text-primary mb-0 d-flex justify-content-center align-items-center ml-3 mt-3 mt-lg-0"
          >
            (2)
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              class="ml-3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.75 5.875H4.71875C4.78125 5.9375 4.875 5.96875 5 5.96875C5.09375 5.96875 5.1875 5.9375 5.28125 5.875L9.90625 1.28125C9.96875 1.21875 10 1.125 10 1.03125C10 0.9375 9.96875 0.84375 9.90625 0.75L9.28125 0.125C9.1875 0.0625 9.09375 0.03125 9 0.03125C8.875 0.03125 8.8125 0.0625 8.75 0.125L5 3.84375L1.25 0.125C1.1875 0.0625 1.09375 0.03125 1 0.03125C0.875 0.03125 0.78125 0.0625 0.71875 0.125L0.09375 0.75C0.03125 0.84375 0 0.9375 0 1.03125C0 1.125 0.03125 1.21875 0.125 1.28125L4.75 5.875Z"
                fill="#267CB2"
              />
            </svg>
          </p>
          <button
            class="d-flex justify-content-center align-items-center outline-none mt-3 mt-lg-0 width-145"
          >
            {{ $t("orderDownloadAll") }}
          </button>
        </div>
      </div>
      <div class="mt-4">
        <table
          class="table table-responsive-md table-borderless text-center table-hover"
        >
          <thead class="border-top border-bottom">
            <tr>
              <th scope="col" class="font-weight-bolder fs-18 py-lg-15">
                {{ $t("orderStatus") }}
              </th>
              <th scope="col" class="fs-18 font-weight-bolder py-lg-15">
                {{ $t("orderDate") }}
              </th>
              <th scope="col" class="fs-18 font-weight-bolder py-lg-15">
                {{ $t("orderPrice") }}
              </th>
              <th scope="col" class="fs-18 font-weight-bolder py-lg-15">
                {{ $t("orderCategories") }}
              </th>
              <th scope="col" class="fs-18 font-weight-bolder py-lg-15"></th>
              <th scope="col" class="fs-18 font-weight-bolder py-lg-15">
                {{ $t("orderProducts") }}
              </th>
              <th scope="col" class="font-weight-normal py-lg-15">
                <button
                  @click="deselectAll"
                  class="btn-primary p-0 btn-select-table outline-none"
                >
                  &#10003;
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-bottom">
              <th
                class="d-flex justify-content-center align-items-center mt-md-0 py-lg-15"
              >
                <CustomAlert
                  v-bind:alert="200"
                  v-bind:type="`${$t('inProgressBtn')}`"
                />
              </th>
              <td class="py-lg-15"><pre>{{ this.data }} </pre></td>
              <td class="py-lg-15">{{ this.price }}</td>
              <td class="py-lg-15"></td>
              <td
                class="d-flex justify-content-center align-items-center px-0 py-lg-15"
              >
                <button class="outline-none fs-14 d-flex align-items-center">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    class="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.125 8.75V11.0833C13.125 11.3928 12.9933 11.6895 12.7589 11.9083C12.5245 12.1271 12.2065 12.25 11.875 12.25H3.125C2.79348 12.25 2.47554 12.1271 2.24112 11.9083C2.0067 11.6895 1.875 11.3928 1.875 11.0833V8.75"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.375 5.83333L7.5 8.75L10.625 5.83333"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5 8.75V1.75"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {{ $t("orderDownload") }}
                </button>
              </td>
              <td class="py-lg-15">{{ this.text }}</td>
              <td class="py-lg-15">
                <b-form-checkbox
                  id="checkbox-5"
                  name="checkbox-5"
                  value="true"
                  v-model="checkbox2"
                  unchecked-value="false"
                >
                </b-form-checkbox>
              </td>
            </tr>
            <tr class="border-bottom">
              <th
                class="d-flex justify-content-center align-items-center mt-1 py-lg-15"
              >
                <CustomAlert
                  v-bind:alert="200"
                  v-bind:type="`${$t('doneBtn')}`"
                  v-bind:color="'done'"
                />
              </th>
              <td class="py-lg-15"><pre>{{ this.data }} </pre></td>
              <td class="py-lg-15">{{ this.price }}</td>
              <td class="py-lg-15"></td>
              <td
                class="d-flex justify-content-center align-items-center px-0 py-lg-15"
              >
                <button class="outline-none fs-14 d-flex align-items-center">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    class="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.125 8.75V11.0833C13.125 11.3928 12.9933 11.6895 12.7589 11.9083C12.5245 12.1271 12.2065 12.25 11.875 12.25H3.125C2.79348 12.25 2.47554 12.1271 2.24112 11.9083C2.0067 11.6895 1.875 11.3928 1.875 11.0833V8.75"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.375 5.83333L7.5 8.75L10.625 5.83333"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5 8.75V1.75"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {{ $t("orderDownload") }}
                </button>
              </td>
              <td class="py-lg-15">{{ this.text }}</td>
              <td class="py-lg-15">
                <b-form-checkbox
                  id="checkbox-1"
                  name="checkbox-1"
                  value="true"
                  v-model="checkbox3"
                  unchecked-value="false"
                >
                </b-form-checkbox>
              </td>
            </tr>
            <tr class="border-bottom">
              <th class="d-flex justify-content-center align-items-center mt-1">
                <CustomAlert
                  v-bind:alert="200"
                  v-bind:type="`${$t('waitingBtn')}`"
                  v-bind:color="'waiting'"
                />
              </th>
              <td class="py-lg-15"><pre>{{ this.data }} </pre></td>
              <td class="py-lg-15">{{ this.price }}</td>
              <td></td>
              <td
                class="py-lg-15 d-flex justify-content-center align-items-center p-0"
              >
                <button class="outline-none fs-14 d-flex align-items-center">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    class="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.125 8.75V11.0833C13.125 11.3928 12.9933 11.6895 12.7589 11.9083C12.5245 12.1271 12.2065 12.25 11.875 12.25H3.125C2.79348 12.25 2.47554 12.1271 2.24112 11.9083C2.0067 11.6895 1.875 11.3928 1.875 11.0833V8.75"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.375 5.83333L7.5 8.75L10.625 5.83333"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5 8.75V1.75"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {{ $t("orderDownload") }}
                </button>
              </td>
              <td class="py-lg-15">{{ this.text }}</td>
              <td class="py-lg-15">
                <b-form-checkbox
                  id="checkbox-2"
                  name="checkbox-2"
                  value="true"
                  v-model="checkbox4"
                  unchecked-value="false"
                >
                </b-form-checkbox>
              </td>
            </tr>
            <tr class="border-bottom">
              <th class="d-flex justify-content-center align-items-center mt-1">
                <CustomAlert
                  v-bind:alert="200"
                  v-bind:type="`${$t('canceledBtn')}`"
                  v-bind:color="'cancelled'"
                />
              </th>
              <td class="py-lg-15"><pre>{{ this.data }} </pre></td>
              <td class="py-lg-15">{{ this.price }}</td>
              <td></td>
              <td
                class="py-lg-15 d-flex justify-content-center align-items-center p-0"
              >
                <button class="outline-none fs-14 d-flex align-items-center">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    class="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.125 8.75V11.0833C13.125 11.3928 12.9933 11.6895 12.7589 11.9083C12.5245 12.1271 12.2065 12.25 11.875 12.25H3.125C2.79348 12.25 2.47554 12.1271 2.24112 11.9083C2.0067 11.6895 1.875 11.3928 1.875 11.0833V8.75"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.375 5.83333L7.5 8.75L10.625 5.83333"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5 8.75V1.75"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  {{ $t("orderDownload") }}
                </button>
              </td>
              <td class="py-lg-15">{{ this.text }}</td>
              <td class="py-lg-15">
                <b-form-checkbox
                  id="checkbox-3"
                  name="checkbox-3"
                  value="true"
                  v-model="checkbox5"
                  unchecked-value="false"
                >
                </b-form-checkbox>
              </td>
            </tr>
            <tr class="border-bottom">
              <th class="d-flex justify-content-center align-items-center mt-1">
                <CustomAlert
                  v-bind:alert="200"
                  v-bind:type="`${$t('inProgressBtn')}`"
                />
              </th>
              <td class="py-lg-15"><pre>{{ this.data }} </pre></td>
              <td class="py-lg-15">{{ this.price }}</td>
              <td></td>
              <td
                class="py-lg-15 d-flex justify-content-center align-items-center p-0"
              >
                <button class="outline-none fs-14 d-flex align-items-center">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    class="mx-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.125 8.75V11.0833C13.125 11.3928 12.9933 11.6895 12.7589 11.9083C12.5245 12.1271 12.2065 12.25 11.875 12.25H3.125C2.79348 12.25 2.47554 12.1271 2.24112 11.9083C2.0067 11.6895 1.875 11.3928 1.875 11.0833V8.75"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.375 5.83333L7.5 8.75L10.625 5.83333"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.5 8.75V1.75"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {{ $t("orderDownload") }}
                </button>
              </td>
              <td class="py-lg-15">{{ this.text }}</td>
              <td class="py-lg-15">
                <b-form-checkbox
                  id="checkbox-4"
                  name="checkbox-4"
                  value="true"
                  v-model="checkbox6"
                  unchecked-value="false"
                >
                </b-form-checkbox>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-md-end align-items-center w-90">
          <div
            class="width-50 d-flex flex-column flex-sm-row justify-content-between"
          >
            <div
              class="d-flex align-items-center width-25 justify-content-lg-around justify-content-center"
            >
              <p class="mb-0 text-muted">{{ $t("clientsTableRowsPerPage") }}</p>
              <select class="outline-none select-arrow">
                <option>8</option>
                <option>10</option>
              </select>
            </div>
            <div
              class="width-25 d-flex justify-content-lg-between mt-4 mt-sm-0 justify-content-center align-items-center"
            >
              <p class="mb-0 text-muted">1-8 of 1240</p>
              <button class="outline-none">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  class="mx-2 mx-lg-0"
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
              <button class="outline-none">
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
    </div>
  </div>
</template>
<script>
import CustomAlert from "../components/customAlert";
import DashboardTop from "./dashboardTop";
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
export default {
  name: "Orders",
  components: {
    CustomAlert,
    DashboardTop,
    VueBootstrapTypeahead,
  },
  data() {
    return {
      selected: null,
      data: "13 Dec 2020",
      price: "$75.67",
      text: "Chairs",
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      search: null,
      buttons: ["inprogress", "done", "cancel", "waiting"],
    };
  },
  props: {
    heading: {
      type: String,
    },
  },
  methods: {
    deselectAll() {
      this.checkbox1 = false;
      this.checkbox2 = false;
      this.checkbox3 = false;
      this.checkbox4 = false;
      this.checkbox5 = false;
      this.checkbox6 = false;
    },
    selectAll() {
      this.checkbox1 = true;
      this.checkbox2 = true;
      this.checkbox3 = true;
      this.checkbox4 = true;
      this.checkbox5 = true;
      this.checkbox6 = true;
    },
    searchHandler(e) {
      this.search = e.target.value;
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

</style>