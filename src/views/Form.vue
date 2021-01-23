<template>
    <div class="form" dir="auto">  
        <p class="d-none">{{$t('rtlHelper')}}</p>
        <FormHeader/>
        <router-view></router-view>
    </div>
</template>
<script>
import FormHeader from '../components/formHeader'
export default {
    name:"Form",
    components:{
        FormHeader
    }
}
</script>