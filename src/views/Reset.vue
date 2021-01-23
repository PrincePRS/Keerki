<template>
  <b-modal
    id="modal-center"
    @hide="handleClose('headerClose')"
    v-model="visible"
    hide-footer
    centered
    size="lg"
  >
    <div class="d-flex justify-content-center flex-column px-5" dir="auto">
      <h1 class="fs-28 ml-23">{{ $t("changePassword") }}</h1>
      <h3 class="fs-16 ml-23 font-weight-thin mt-4">
        {{ $t("changePasswordDescription") }}
      </h3>
      <div class="d-flex ml-23 mt-4 justify-content-between">
        <p class="font-weight-light w-50">{{ $t("lowercaseLetter") }}</p>
        <p class="font-weight-light w-50 ml-3 ml-sm-0">{{ $t("number") }}</p>
      </div>
      <div class="d-flex ml-23 justify-content-between text-left">
        <p class="font-weight-light w-50">{{ $t("uppercaseLetter") }}</p>
        <p class="font-weight-light w-50 ml-3 ml-sm-0">
          {{ $t("specialCharacter") }}
        </p>
      </div>
      <b-form class="mt-4">
        <b-form-group
          id="input-group-9"
          :label="`${$t('oldPassword')}`"
          label-for="input-9"
        >
          <input
            id="input-9"
            v-model="form.oldPassword"
            type="password"
            required
            class="modal-input w-100 outline-none border rounded-lg px-3"
          />
        </b-form-group>
        <b-form-group
          id="input-group-10"
          :label="`${$t('newPassword')}`"
          label-for="input-10"
          class="mt-3"
        >
          <input
            id="input-11"
            v-model="form.newPassword"
            type="password"
            required
            class="modal-input w-100 outline-none border rounded-lg px-3"
          />
        </b-form-group>
        <b-form-group
          id="input-group-12"
          :label="`${$t('confirmNewPassword')}`"
          label-for="input-12"
          class="mt-3"
        >
          <input
            id="input-12"
            v-model="form.confirmPassword"
            type="password"
            required
            class="modal-input w-100 outline-none border rounded-lg px-3"
          />
        </b-form-group>
        <router-link to="/login">
          <b-button
            size="sm"
            variant="primary"
            class="w-100 ml-23 border-0 bg-info mt-5 text-white py-3 mb-5"
            >{{ $t("changePasswordBtn") }}</b-button
          ></router-link
        >
      </b-form>
    </div>
  </b-modal>
</template>
<script>
export default {
  name: "Reset",
  methods: {
    handleClose() {
      this.$router.push({ path: "login" });
    },
  },
  data() {
    return {
      visible: true,
      form: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
};
</script>