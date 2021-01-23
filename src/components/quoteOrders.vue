<template>
    <Orders :heading="$t('quotesHistory')"/>
</template>
<script>
import Orders from './orders'
export default {
    name:"QuoteOrders",
    components:{
        Orders
    }
}
</script>