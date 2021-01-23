<template>
    <Orders :heading="$t('serviceHistory')"/>
</template>
<script>
import Orders from './orders'
export default {
    name:"ServiceOrders",
    components:{
        Orders
    }
}
</script>