<template>
  <scroll-view
    type="list"
    class="flex-1 pb-2"
    scroll-y="true"
    :show-scrollbar="false"
    enable-passive
    :enable-back-to-top="true"
    @scrolltolower="onScrolltolower"
  >
    <rank-item
      v-for="u in users"
      :key="u.ranking"
      :type="props.selectedTab"
      :sub-type="props.selectedCategory"
      :user="u"
    />
  </scroll-view>
</template>

<script lang="ts">
  export default {
    name: 'RankList',
    options: {
      virtualHost: true
    }
  }
</script>

<script setup lang="ts">
import rankItem from '../rank-item/rank-item.vue'
import {RankingItem} from '@/typings/system'

const props = defineProps<{
  users: RankingItem[]
  selectedTab: 'EFFORT' | 'PERSISTENCE' | 'PEAK'
  selectedCategory: string
}>()

const emit = defineEmits(['onscrolltolower'])
const onScrolltolower = () => {
  emit('onscrolltolower')
}
</script>
