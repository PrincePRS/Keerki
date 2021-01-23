<template>
  <div class="w-90 pt-9">
    <h1>{{ $t("adminSendEmail") }}</h1>
    <div
      class="w-100 pt-5 d-flex flex-column align-items-center justify-content-center sms-cont"
    >
      <div
        class="w-90 d-flex justify-content-around flex-column flex-lg-row align-items-center"
      >
        <div class="w-48">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            class="position-absolute mt-4 mx-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5483 9.80256C16.5483 13.5677 13.5072 16.6051 9.77417 16.6051C6.0411 16.6051 3 13.5677 3 9.80256C3 6.0374 6.0411 3 9.77417 3C13.5072 3 16.5483 6.0374 16.5483 9.80256ZM15.0139 18.079C13.4996 19.0453 11.702 19.6051 9.77417 19.6051C4.37604 19.6051 0 15.2164 0 9.80256C0 4.38876 4.37604 0 9.77417 0C15.1723 0 19.5483 4.38876 19.5483 9.80256C19.5483 12.1971 18.6922 14.3912 17.2702 16.0936L23.4844 22.3511L21.3704 24.4797L15.0139 18.079Z"
              fill="#878787"
            />
          </svg>

          <input
            class="sms-search px-5 text-muted w-100 outline-none"
            :placeholder="`${$t('adminAllClientsSelected')}`"
          />
        </div>
        <div
          class="w-48 d-flex justify-content-around align-items-center mt-4 mt-lg-0"
        >
          <select
            class="border outline-none px-2 font-weight-bolder select-arrow w-48 sms-select"
            @change="selectHandler"
          >
            <option value="All clients selected">
              {{ $t("adminAllClients") }}
            </option>
            <option value="Search and Exclude Clients">
              {{ $t("adminAllButExcluded") }}
            </option>
            <option value="Search VIP Clients">
              {{ $t("adminVipClients") }}
            </option>
            <option value="Search New Users">{{ $t("adminNoUsers") }}</option>
          </select>
          <button class="btn border sms-button text-white px-4">
            {{ $t("adminSearch") }}
          </button>
        </div>
      </div>
      <div class="w-90 d-flex justify-content-center align-items-center my-3">
        <div class="w-90 d-flex">
          <div
            v-if="selectedType !== 'All clients selected'"
            class="btn excluded d-flex justify-content-center align-items-center"
          >
            {{ $t("adminExclueName") }}

            <button
              class="btn outline-none p-0 d-flex justify-content-center align-items-center mx-2"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5962 1.59634L8.18198 0.182129L5 3.36411L1.81802 0.182129L0.403809 1.59634L3.58579 4.77832L0.403809 7.9603L1.81802 9.37452L5 6.19254L8.18198 9.37452L9.5962 7.9603L6.41422 4.77832L9.5962 1.59634Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="w-90 sms-message-cont mt-5">
        <!-- <textarea
          class="w-100 outline-none sms-text px-4"
          :placeholder="`${$t('adminEnterYourSms')}`"
        ></textarea> -->
        <vue-editor
          :placeholder="`${$t('adminEnterYourSms')}`"
          class="w-100"
          id="editor1"
          v-model="input"
        ></vue-editor>
      </div>
      <div class="d-flex justify-content-between sms-footer w-90">
        <div class="d-flex align-items-center">
          <label class="file-select mb-0 mx-4">
            <div class="select-button d-flex flex-column">
              <svg
                width="40"
                height="30"
                viewBox="0 0 52 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.4489 2H7.30612C4.37563 2 2 3.89251 2 6.22704V35.8163C2 38.1508 4.37563 40.0433 7.30612 40.0433H44.4489C47.3794 40.0433 49.7551 38.1508 49.7551 35.8163V6.22704C49.7551 3.89251 47.3794 2 44.4489 2Z"
                  stroke="#4F5660"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.2978 16.7952C14.9993 16.7952 16.3787 15.3758 16.3787 13.6249C16.3787 11.874 14.9993 10.4546 13.2978 10.4546C11.5962 10.4546 10.2168 11.874 10.2168 13.6249C10.2168 15.3758 11.5962 16.7952 13.2978 16.7952Z"
                  stroke="#4F5660"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M49.7547 27.0738L36.2754 16.2661L6.62109 40.043"
                  stroke="#4F5660"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input type="file" accept="image/*" @change="handleFileChange" />
          </label>
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
        <button class="outline-none mx-2 position-relative">
          <emoji-picker @emoji="append" :search="search">
            <div
              class="emoji-invoker"
              slot="emoji-invoker"
              slot-scope="{ events: { click: clickEvent } }"
              @click.stop="clickEvent"
            >
              <svg
                width="47"
                height="46"
                viewBox="0 0 47 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.002 46C35.7045 46 46.002 35.7025 46.002 23C46.002 10.2975 35.7045 0 23.002 0C10.2994 0 0.00195312 10.2975 0.00195312 23C0.00195312 35.7025 10.2994 46 23.002 46Z"
                  fill="#FCD382"
                />
                <path
                  d="M13.4373 30.1822C13.4948 30.4109 14.9298 35.7776 23.0015 35.7776C31.0745 35.7776 32.5082 30.4109 32.5657 30.1822C32.636 29.9049 32.5107 29.6174 32.2628 29.4743C32.0137 29.3324 31.7019 29.3746 31.4962 29.5727C31.4719 29.5969 28.9994 31.9442 23.0015 31.9442C17.0036 31.9442 14.5298 29.597 14.5068 29.574C14.3842 29.4526 14.2206 29.3887 14.0571 29.3887C13.9497 29.3887 13.8411 29.4155 13.7427 29.4704C13.4923 29.6136 13.3671 29.9036 13.4373 30.1822Z"
                  fill="#4F5660"
                />
                <path
                  d="M15.3351 21.7223C17.0993 21.7223 18.5295 19.72 18.5295 17.2501C18.5295 14.7801 17.0993 12.7778 15.3351 12.7778C13.5708 12.7778 12.1406 14.7801 12.1406 17.2501C12.1406 19.72 13.5708 21.7223 15.3351 21.7223Z"
                  fill="#4F5660"
                />
                <path
                  d="M30.6686 21.7223C32.4328 21.7223 33.863 19.72 33.863 17.2501C33.863 14.7801 32.4328 12.7778 30.6686 12.7778C28.9043 12.7778 27.4741 14.7801 27.4741 17.2501C27.4741 19.72 28.9043 21.7223 30.6686 21.7223Z"
                  fill="#4F5660"
                />
              </svg>
            </div>
            <div slot="emoji-picker" slot-scope="{ emojis, insert }">
              <div class="emoji-picker">
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
      </div>
      <div class="mt-5 d-flex justify-content-end align-items-center w-90">
        <div class="d-flex justify-content-center align-items-center">
          <button class="btn sms-send text-white">{{ $t("adminSend") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EmojiPicker from "vue-emoji-picker";
import { VueEditor } from "vue2-editor";
export default {
  name: "AdminEmail",
  components: {
    VueEditor,
    EmojiPicker,
  },
  data() {
    return {
      selectedType: "All clients selected",
      input: "",
      search: "",
    };
  },
  methods: {
    selectHandler(e) {
      this.selectedType = e.target.value;
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
.excluded {
  background: #ffffff;
  border: 2px solid #fdca65;
  border-radius: 4px;
  min-width: 140px;
  height: 32px;
}
.sms-send {
  background: #245aab;
  box-shadow: 0px 8px 16px rgba(0, 126, 255, 0.16);
  border-radius: 8px;
  height: 55px;
  min-width: 175px;
}
.sms-footer {
  background: #e1e1e1;
  border: 1px solid #a3a3a3;
  border-top: 0;
  height: 76px;
}
.sms-text {
  min-height: 400px;
}
.sms-message-cont {
  background: #ffffff;
  border: 1px solid #878787;
  -webkit-border-top-left-radius: 20px;
  -webkit-border-top-right-radius: 20px;
  -moz-border-radius-topleft: 20px;
  -moz-border-radius-topright: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.sms-select {
  background: #ffffff;
  border-radius: 12px;
  height: 70px;
}
.sms-cont {
  background: #ffffff;
  border-radius: 20px;
}
.sms-search {
  background: #f2f4f8;
  border-radius: 12px;
  height: 70px;
}
.sms-button {
  background: #b4b4b4;
  border-radius: 12px;
  height: 74px;
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
  right: 0px !important;
  bottom: 62px !important;
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