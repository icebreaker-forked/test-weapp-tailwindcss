<template>
  <!-- 我的排名信息 -->
  <view
    v-show="myRank !== null"
    class="my-rank-box"
    :class="{'slide-in': show, 'slide-out': !show }"
  >
    <view class="mr-3">
      <fui-avatar
        :src="avatar ? avatar :''"
        background="#bee3f8"
        :text="nick.charAt(0) ?? 'N'"
        bg-color="#2077BE"
      />
    </view>

    <view class="flex-1">
      <view class="flex items-center space-x-2">
        <text class="font-medium text-base text-gray-800">{{ nick }}</text>
        <text v-if="sex === 1">👦</text>
        <text v-else-if="sex === 2">👧</text>
        <text v-else>❓</text>
      </view>
      <text class="text-sm  pt-0.5" :class="'text-blue-600 dark:text-blue-900'">
        当前排名：{{ myRank <= 0 ? '未上榜' : `第 ${myRank} 名` }}
      </text>
    </view>
    <text class="ml-2 text-gray-400 text-lg font-bold" @click="show = false">✖</text>
  </view>

  <!-- 显示按钮 -->
  <view
    v-if="!show && myRank !== null"
    class="show-button"
    :class="'bg-blue-600 dark:bg-blue-900'"
    @click="show = true"
  >
    我的
  </view>
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
import {ref} from 'vue'

defineProps<{
  myRank: number | null
  nick: string
  avatar: string
  sex: number | null
}>()

const show = ref(true)
</script>

<style scoped>
.my-rank-box {
  position: fixed;
  bottom: 60rpx;
  left: 30rpx;
  right: 30rpx;
  z-index: 999;
  background-color: #ebf5ff;
  border: 1px solid #bee3f8;
  border-radius: 16rpx;
  padding: 20rpx;
  display: flex;
  align-items: center;
  box-shadow: 0 4rpx 10rpx rgba(0, 0, 0, 0.1);
  transform-origin: right bottom;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.slide-in {
  transform: scale(1) translate(0, 0);
  opacity: 1;
}

.slide-out {
  transform: scale(0.3) translate(100%, 100%);
  opacity: 0;
}

.show-button {
  position: fixed;
  bottom: 60rpx;
  right: 30rpx;
  z-index: 998;
  color: white;
  padding: 16rpx 24rpx;
  border-radius: 999rpx;
  font-size: 24rpx;
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
}
</style>
