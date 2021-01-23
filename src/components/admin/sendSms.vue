<template>
  <div class="w-90 pt-9">
    <h1>{{$t('adminSendSms')}}</h1>
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
            <option value="All clients selected">{{$t('adminAllClients')}}</option>
            <option value="Search and Exclude Clients">{{$t('adminAllButExcluded')}}</option>
            <option value="Search VIP Clients">{{$t('adminVipClients')}}</option>
            <option value="Search New Users">{{$t('adminNoUsers')}}</option>
          </select>
          <button class="btn border sms-button text-white px-4">{{$t('adminSearch')}}</button>
        </div>
      </div>
      <div class="w-90 d-flex justify-content-center align-items-center my-3">
        <div class="w-90 d-flex">
          <div
          v-if="selectedType !== 'All clients selected'"
            class="btn excluded d-flex justify-content-around align-items-center"
          >
            <p class="mb-0">{{$t('adminExclueName')}}</p>
            <button class="btn outline-none p-0 d-flex justify-content-center align-items-center mx-2">
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
      <div class="w-90 sms-message-cont pt-4 mt-5">
        <textarea
          class="w-100 outline-none sms-text px-4"
          :placeholder="`${$t('adminEnterYourSms')}`"
           v-model="input"
        ></textarea>
      </div>
      <div class="d-flex justify-content-center sms-footer w-90">
        <div class="d-flex justify-content-end align-items-center w-90 position-relative">
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
        </div>
      </div>
      <div class="mt-5 d-flex justify-content-end align-items-center w-90">
        <div class="d-flex justify-content-center align-items-center">
          <button class="btn sms-send text-white">{{$t('adminSend')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EmojiPicker from "vue-emoji-picker";
export default {
  name: "AdminSMS",
   components: {
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
  right:0px!important;
  bottom:62px!important;
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
</style>