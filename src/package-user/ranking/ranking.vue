<template>
  <view class="container pb-safe-bottom">
  </view>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

defineOptions({
  name: 'UserRanking'
})

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')


</script>


