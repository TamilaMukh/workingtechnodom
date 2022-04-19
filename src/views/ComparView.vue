<template>
    <div>
        <div class="container mx-auto">
            <div class="flex items-center justify-between bg-orangee p-3 rounded-lg my-3">
                <p>Сравниваемые товары</p>
                <div v-for="item of allTovary" :key="item">
                    {{ item.title }}
                    {{ item.images[0].first }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "ComparView",
    computed: mapGetters(['allTovary'])
}
</script>