<template>
    <Orders :heading="$t('shippingHistory')"/>
</template>
<script>
import Orders from './orders'
export default {
    name:"ShippingOrders",
    components:{
        Orders
    }
}
</script>