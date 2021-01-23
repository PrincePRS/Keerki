<template>
  <div class="w-100 d-flex justify-content-center py-11 align-items-center">
    <div class="d-flex flex-column w-100 align-items-center">
      <label class="file-select align-self-center">
        <div class="select-button d-flex flex-column">
          <img
            src="../../assets/adminSettings.png"
            width="130"
            height="130"
            class="rounded-circle p-1 border-select-file rounded-circle"
            id="adminImage"
          />

          <span class="pt-3 fs-16 font-weight-lighter outline-none">
            {{ $t("adminAccountSetNewPhoto") }}
          </span>
        </div>
        <input type="file" @change="handleFileChange" />
      </label>
      <div
        class="width-85 pb-11 flex-column admin-settings-form d-flex justify-content-center align-items-center"
      >
        <b-modal
          id="admin-name-modal"
          centered
          hide-footer
          content-class="content-class"
          header-class="header-class"
          hide-header
          hide-header-close
        >
          <div
            class="d-flex w-100 justify-content-center align-items-center pt-5 pb-4"
          >
            <input
              class="border-bottom outline-none w-100 pb-4"
              :placeholder="`${$t('adminAccountFullName')}`"
              v-model="name"
            />
          </div>
          <div class="d-flex justify-content-end">
            <button
              class="rounded-pill modal-button color-c7 outline-none"
              @click="$bvModal.hide('admin-name-modal')"
            >
              {{ $t("adminAccountCancel") }}
            </button>
            <button
              class="rounded-pill color-ff modal-button outline-none ml-2"
              @click="$bvModal.hide('admin-name-modal')"
            >
              {{ $t("adminAccountSave") }}
            </button>
          </div>
        </b-modal>
        <div
          class="w-90 border-a9a9 py-4 d-flex justify-content-between align-items-center"
        >
          <p class="mb-0 font-weight-bold">
            {{ $t("adminAccountName") }} {{ name }}
          </p>
          <button class="outline-none" v-b-modal.admin-name-modal>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                stroke="#696F79"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
                stroke="#696F79"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          class="w-90 border-a9a9 py-4 d-flex justify-content-between align-items-center"
        >
          <p class="mb-0 text-muted font-italic">{{ $t("adminAccountEmail") }} HEDI@MAIL.COM</p>
          <p class="mb-0 text-muted font-italic">{{ $t("adminAccountCannotEdit") }}</p>
        </div>

        <b-modal
          id="admin-phone-modal"
          centered
          hide-footer
          content-class="content-class"
          header-class="header-class"
          hide-header
          hide-header-close
        >
          <div
            class="d-flex w-100 justify-content-center align-items-center pt-5 pb-4"
          >
            <input
              class="border-bottom outline-none w-100 pb-4"
              :placeholder="`${$t('adminAccountPhoneNumber')}`"
              v-model="number"
              type="number"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxlength="15"
            />
          </div>
          <div class="d-flex justify-content-end">
            <button
              class="rounded-pill modal-button color-c7 outline-none"
              @click="$bvModal.hide('admin-phone-modal')"
            >
              {{ $t("adminAccountCancel") }}
            </button>
            <button
              class="rounded-pill color-ff modal-button outline-none ml-2"
              @click="$bvModal.hide('admin-phone-modal')"
            >
              {{ $t("adminAccountSave") }}
            </button>
          </div>
        </b-modal>

        <div
          class="w-90 border-a9a9 py-4 d-flex justify-content-between align-items-center"
        >
          <p class="mb-0 font-weight-bold">{{ $t("adminAccountPhone") }} {{ number }}</p>
          <button class="outline-none" v-b-modal.admin-phone-modal>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                stroke="#696F79"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
                stroke="#696F79"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>


<b-modal
              id="admin-password-modal"
              centered
              hide-footer
              content-class="content-class"
              header-class="header-class"
              hide-header
              hide-header-close
            >
              <div
                class="d-flex w-100 justify-content-center align-items-center py-4"
              >
                <input
                  class="border-bottom outline-none w-100 pb-4"
                  :placeholder="`${$t('adminAccountOldPassword')}`"
                  v-modal="password"
                />
              </div>
              <div
                class="d-flex w-100 justify-content-center align-items-center py-4"
              >
                <input
                  class="border-bottom outline-none w-100 pb-4"
                  :placeholder="`${$t('adminAccountNewPassword')}`"
                />
              </div>
              <div
                class="d-flex w-100 justify-content-center align-items-center py-4"
              >
                <input
                  class="border-bottom outline-none w-100 pb-4"
                  :placeholder="`${$t('adminAccountConfirmPassword')}`"
                />
              </div>
              <div class="d-flex justify-content-end">
                <button
                  class="rounded-pill modal-button color-c7 outline-none"
                  @click="$bvModal.hide('admin-password-modal')"
                >
                  {{ $t("adminAccountCancel") }}
                </button>
                <button
                  class="rounded-pill color-ff modal-button outline-none ml-2"
                  @click="$bvModal.hide('admin-password-modal')"
                >
                  {{ $t("adminAccountSave") }}
                </button>
              </div>
            </b-modal>

        <div
          class="w-90 border-a9a9 py-4 d-flex justify-content-between align-items-center"
        >
          <p class="mb-0 font-weight-bold">Password: {{ password }}</p>
          <button class="outline-none" v-b-modal.admin-password-modal>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                stroke="#696F79"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
                stroke="#696F79"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          class="w-90 border-a9a9 py-4 d-flex justify-content-between align-items-center"
        >
          <p class="mb-0 text-muted font-italic">{{ $t("adminAccountUserName") }} HEDI_NASIR</p>
          <p class="mb-0 text-muted font-italic">{{ $t("adminAccountCannotEdit") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdminAccount",
  data() {
    return {
      name: "HEDI",
      number: 212312312312,
      password: "************************",
    };
  },
  methods: {
    handleFileChange(e) {
      this.$emit("input", e.target.files[0]);
      var output = document.getElementById("adminImage");
      output.src = URL.createObjectURL(event.target.files[0]);
      this.profile = true;
      output.onload = function () {
        URL.revokeObjectURL(output.src);
      };
    },
  },
};
</script>
<style scoped>
.width-85 {
  width: 85% !important;
}
.border-a9a9 {
  border-bottom: 0.5px solid #a9a9a9;
  opacity: 0.8;
}
.admin-settings-form {
  background: #ffffff;
  border-radius: 10px;
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

.file-select > input[type="file"] {
  display: none;
}
.border-select-file {
  border: 1.5px solid #dfe0eb !important;
}
</style>