<template>
<div class="px-4">
  <DashboardTop
      :Heading="$t('orderHistoryHeading')"
      :Text="$t('orderHistoryDescription')"
      v-bind:checked="true"

    />
  <div class="my-11 d-flex justify-content-center flex-wrap"
  >
     <TemplateCard
        v-bind:name="`${$t('waitingBtn')}`"
        v-bind:color="'waiting'"
      />
      <TemplateCard v-bind:name="`${$t('doneBtn')}`" v-bind:color="'done'" />
        <TemplateCard
        v-bind:name="`${$t('inProgressBtn')}`"
        v-bind:color="'in-progress'"
      />
       <TemplateCard v-bind:name="`${$t('doneBtn')}`" v-bind:color="'done'" />
      <TemplateCard
        v-bind:name="`${$t('canceledBtn')}`"
        v-bind:color="'cancelled'"
      />
      <TemplateCard
        v-bind:name="`${$t('canceledBtn')}`"
        v-bind:color="'cancelled'"
      />
            <!-- <div class="d-flex justify-content-center  mt-11">
      <TemplateCard
        v-bind:name="`${$t('waitingBtn')}`"
        v-bind:color="'waiting'"
      />
      <TemplateCard v-bind:name="`${$t('doneBtn')}`" v-bind:color="'done'" />
      <TemplateCard
        v-bind:name="`${$t('inProgressBtn')}`"
        v-bind:color="'in-progress'"
      />
    </div>
    <div class="d-flex justify-content-center flex-column flex-lg-row mt-lg-11">
      <TemplateCard v-bind:name="`${$t('doneBtn')}`" v-bind:color="'done'" />
      <TemplateCard
        v-bind:name="`${$t('canceledBtn')}`"
        v-bind:color="'cancelled'"
      />
      <TemplateCard
        v-bind:name="`${$t('canceledBtn')}`"
        v-bind:color="'cancelled'"
      />
    </div> -->
  </div>
</div>
</template>
<script>
import TemplateCard from "../components/templateCard";
import DashboardTop from './dashboardTop';
export default {
  name: "OrderTemplate",
  components: {
    TemplateCard,
    DashboardTop
  },
};
</script>