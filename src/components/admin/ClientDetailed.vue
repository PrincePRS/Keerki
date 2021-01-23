<template>
  <div
    class="w-90 d-flex justify-content-center align-items-center flex-column pt-5"
  >
    <div
      class="w-100 client-details-card pb-1 d-flex flex-column justify-content-center align-items-center"
    >
      <div
        class="w-100 d-flex justify-content-center flex-column align-items-center"
        dir="auto"
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
                <p class="font-weight-bold">
                  <span class="font-weight-light text-muted">{{
                    $t("clientDetailsWhatsapp")
                  }}</span>

                  <input
                    value="1123232323"
                    class="outline-none px-2 font-weight-bold"
                    type="number"
                    :disabled="isDisabled"
                  />
                </p>
              </td>
            </tr>
            <tr class="border-bottom">
              <td class="border-right p-lg-4">
                <p class="font-weight-bold">
                  <span class="font-weight-light text-muted">{{
                    $t("clientDetailsBalance")
                  }}</span>

                  <input
                    value="$1873"
                    class="outline-none px-2 font-weight-bold"
                    type="text"
                    :disabled="isDisabled"
                  />
                </p>
              </td>
              <td class="p-lg-4">
                <p class="font-weight-bold">
                  <span class="font-weight-light text-muted"
                    >{{ $t("clientDetailsMemberShip") }}&nbsp;</span
                  >
                  <button
                    v-if="isDisabled"
                    class="btn btn-dark px-4 outline-none py-0"
                  >
                    {{memberShip}}
                  </button>
                  <input v-else class="px-2 outline-none" v-model="memberShip" :placeholder="`${$t('clientMemberShipVip')}`" />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-90 d-flex mt-2 justify-content-end align-items-center">
        <div
          class="d-flex width-25-resp justify-content-between align-items-center"
        >
          <p class="mb-0 text-muted">{{ $t("adminOrdersDetailsTags") }}:</p>
          <div
            class="d-flex justify-content-around align-items-center flex-wrap w-75-resp"
          >
            <button
              v-for="item in tags"
              :class="
                'font-11 tag-btn outline-none text-dark px-2 ' + item.color
              "
              :key="item.id"
            >
              {{ item.text }}
            </button>
          </div>

          <button
            class="d-flex justify-content-center align-items-center tags-add-btn outline-none text-white"
            v-b-modal.add-modal
            @click="addNewItem"
          >
            +
          </button>

          <b-modal
            id="add-modal"
            centered
            hide-footer
            header-class="pt-4 pb-0 border-0 outline-none"
            content-class="rounded-lg"
            body-class="p-0"
            no-stacking
          >
            <div
              class="d-flex justify-content-center align-items-center pt-4 pb-15"
            >
              <div class="w-100">
                <div
                  class="px-4 d-flex justify-content-between align-items-center pb-15 border-bottom"
                >
                  <h1 class="fs-18 mb-0 text-dark font-weight-bold">
                    Clients Tag and Classification
                  </h1>
                  <button
                    class="d-flex justify-content-center align-items-center tags-add-btn outline-none text-white"
                    @click="addNewItem"
                  >
                    +
                  </button>
                </div>
                <div
                  v-for="(item, index) in tags"
                  :key="item.id"
                  class="w-100 py-4 border-bottom d-flex align-items-center justify-content-center"
                >
                  <div
                    class="w-90 px-1 d-flex justify-content-between align-items-center"
                  >
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <button
                        class="color-select rounded-circle tagYellow"
                        @click="changeColor('tagYellow', index)"
                      ></button>
                      <button
                        class="color-select rounded-circle tagGreen"
                        @click="changeColor('tagGreen', index)"
                      ></button>
                      <button
                        class="color-select rounded-circle tagBlue"
                        @click="changeColor('tagBlue', index)"
                      ></button>
                    </div>
                    <div
                      v-if="!item.dropDown"
                      class="tags-container d-flex justify-content-between align-items-center"
                    >
                      <div
                        class="border h-36 w-100 d-flex align-items-center justify-content-center"
                      >
                        <div
                          class="w-90 px-md-2 d-flex justify-content-between align-items-center"
                        >
                          <button
                            :class="
                              'font-11 tag-btn outline-none text-dark px-2 ' +
                              item.color
                            "
                          >
                            {{ item.text }}
                          </button>
                          <button
                            class="outline-none"
                            @click="dropHandler(index)"
                          >
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

                      <button
                        class="px-2 outline-none"
                        @click="deleteHandler(index)"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="8.5" cy="8.5" r="8.5" fill="#FF3737" />
                          <path
                            d="M4.76001 6.12012H5.51557H11.56"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.60572 6.25601V5.50801C6.60572 5.30963 6.68759 5.11937 6.83334 4.97909C6.97908 4.83882 7.17675 4.76001 7.38286 4.76001H8.93715C9.14326 4.76001 9.34093 4.83882 9.48667 4.97909C9.63241 5.11937 9.71429 5.30963 9.71429 5.50801V6.25601M10.88 6.25601V11.492C10.88 11.6904 10.7981 11.8806 10.6524 12.0209C10.5066 12.1612 10.309 12.24 10.1029 12.24H6.21715C6.01103 12.24 5.81336 12.1612 5.66762 12.0209C5.52188 11.8806 5.44 11.6904 5.44 11.492V6.25601H10.88Z"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.47998 8.15991V10.1999"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.84003 8.15991V10.1999"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      v-else
                      class="tags-container d-flex justify-content-between align-items-center"
                    >
                      <div
                        class="border h-139 w-100 d-flex justify-content-center"
                      >
                        <div
                          class="w-100 px-md-2 px-1 d-flex justify-content-between"
                        >
                          <div
                            class="d-flex flex-column justify-content-end pb-2"
                          >
                            <input
                              class="font-11 tag-btn outline-none width-110 text-dark px-2"
                              @keypress="
                                (e) => {
                                  inputHandler(e, index);
                                }
                              "
                            />
                            <button
                              class="font-11 tag-btn outline-none text-dark width-110 px-2 mt-3 tagGreen"
                              @click="
                                changeTag($t('intClient'), index, 'tagGreen')
                              "
                            >
                              {{ $t("intClient") }}
                            </button>
                            <button
                              class="font-11 tag-btn outline-none text-dark width-110 px-2 tagYellow mt-2"
                              @click="
                                changeTag($t('localClient'), index, 'tagYellow')
                              "
                            >
                              {{ $t("localClient") }}
                            </button>
                          </div>
                          <button
                            class="outline-none border-left pl-2"
                            @click="dropHandler(index)"
                          >
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

                      <button
                        class="px-2 outline-none"
                        @click="deleteHandler(index)"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="8.5" cy="8.5" r="8.5" fill="#FF3737" />
                          <path
                            d="M4.76001 6.12012H5.51557H11.56"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.60572 6.25601V5.50801C6.60572 5.30963 6.68759 5.11937 6.83334 4.97909C6.97908 4.83882 7.17675 4.76001 7.38286 4.76001H8.93715C9.14326 4.76001 9.34093 4.83882 9.48667 4.97909C9.63241 5.11937 9.71429 5.30963 9.71429 5.50801V6.25601M10.88 6.25601V11.492C10.88 11.6904 10.7981 11.8806 10.6524 12.0209C10.5066 12.1612 10.309 12.24 10.1029 12.24H6.21715C6.01103 12.24 5.81336 12.1612 5.66762 12.0209C5.52188 11.8806 5.44 11.6904 5.44 11.492V6.25601H10.88Z"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.47998 8.15991V10.1999"
                            stroke="white"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.84003 8.15991V10.1999"
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
          </b-modal>
        </div>
      </div>
      <div class="w-90 d-flex my-4 align-items-center">
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
                @click="
                  $bvModal.hide('reset-modal');
                  isDisabled = true;
                "
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
          <p class="mb-0 w-100">{{ $t("clientDetailsEdit") }}</p>
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
    <div class="w-90 d-flex justify-content-end align-items-center pt-9">
      <button
        class="outline-none justify-content-center d-flex align-items-center"
        dir="auto"
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
        <p class="mb-0">{{ $t("clientDetailsExportToCsv") }}</p>
      </button>
    </div>
    <DetailedClientsTable />
  </div>
</template>
<script>
import Vue from "vue";
import DetailedClientsTable from "./detailedClientTable";
export default {
  name: "ClientDetailed",
  components: {
    DetailedClientsTable,
  },
  data() {
    return {
      memberShip:"General",
      currentColor1: "tagGreen",
      text: this.$t("intClient"),
      dropDown: false,
      tags: [
        {
          color: "tagYellow",
          text: this.$t("localClient"),
          dropDown: false,
          id: 1,
        },
        {
          color: "tagGreen",
          text: this.$t("intClient"),
          dropDown: false,
          id: 2,
        },
      ],
      isDisabled: true,
    };
  },
  methods: {
    changeColor(color, index) {
      let d = this.tags[index];
      d.color = color;
      Vue.set(this.tags, index, d);
    },
    editHandler() {
      this.isDisabled = false;
    },
    saveHandler() {
      this.$bvModal.show("reset-modal");
    },
    dropHandler(index) {
      let d = this.tags[index];
      d.dropDown = !d.dropDown;
      Vue.set(this.tags, index, d);
    },
    changeTag(tag, index, color) {
      let d = this.tags[index];
      d.text = tag;
      d.color = color;
      Vue.set(this.tags, index, d);
      this.dropHandler(index);
    },
    inputHandler(e, index) {
      if (e.keyCode === 13) {
        let d = this.tags[index];
        d.text = e.target.value;
        Vue.set(this.tags, index, d);
        this.dropHandler(index);
      }
    },
    deleteHandler(index) {
      this.tags.splice(index, 1);
    },
    addNewItem() {
      let d = this.tags;
      d.push({
        color: "tagBlue",
        text: "",
        dropDown: true,
        id: 3,
      });
      this.tags = d;
    },
  },
};
</script>
<style scoped>
.width-110 {
  width: 109px;
}
.tags-container {
  width: 50% !important;
}
.delete-btn {
  background: #ff3737;
  width: 17px;
  height: 17px;
}
.color-select {
  width: 24px;
  height: 24px;
  outline: none !important;
  margin: 0 5px;
}
.color-select:hover {
  border: 2px solid #000000;
}
.h-36 {
  height: 36px;
  border: 1px solid #dbdde0 !important;
  border-radius: 8px;
}
.h-139 {
  height: 120px;
  border: 1px solid #48a3ff !important;
  border-radius: 8px;
}
.tagYellow {
  background: #ffdc89;
}
.tagGreen {
  background: #87f5b3;
}

.tagBlue {
  background: #80bfff;
}
.width-25-resp {
  width: 100%;
}
.tag-btn {
  height: 23px;
  border-radius: 5px;
}
.btn-ffd {
  background: #ffdc89;
  border: 1px solid #efac0f;
}
.btn-87 {
  background: #87f5b3;
}
.btn-80 {
  background: #80bfff;
}
.tags-add-btn {
  width: 24px;
  height: 19px;
  background: #6e7f97;
  border-radius: 2px;
}
.client-details-card {
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
}
.w-75-resp {
  width: 100%;
}
@media (max-width: 576px) {
  .tags-container {
    width: 63% !important;
  }
}
@media only screen and (min-width: 576px) and (max-width: 768px) {
  .width-25-resp {
    width: 50%;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .width-25-resp {
    width: 38%;
  }
}

@media (max-width: 1200px) and (min-width: 992px) {
  .w-75-resp {
    width: 75%;
  }
  .width-25-resp {
    width: 37%;
  }
}
@media (min-width: 1200px) {
  .w-75-resp {
    width: 75%;
  }
  .width-25-resp {
    width: 30%;
  }
}
</style>