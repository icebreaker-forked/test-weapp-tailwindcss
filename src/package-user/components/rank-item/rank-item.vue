<template>
  <view class="flex items-center justify-between  rounded-xl shadow-sm p-3 mb-2">
    <!-- 左侧：头像 + 用户信息 -->
    <view class="flex items-center">
      <fui-avatar
        class="mr-3"
        :src="user.avatar ? 'https://static.juqingsong.cn/' + user.avatar : ''"
        background="#3B82F6"
        :text="user.name.charAt(0) ?? 'N'"
        bg-color="#2077BE"
      />
      <view>
        <text class="text-base font-medium text-gray-800 darkctext-white">{{ user.name }}</text>
        <view class="text-xs text-gray-500 mt-1">
          {{ formatGender(user.gender) }} ・ {{ user.age > 0 ? user.age : '--' }}岁
        </view>
      </view>
    </view>

    <!-- 右侧：排名信息 -->
    <view class="flex flex-col items-end">
      <text :class="'text-base font-bold text-blue-600 dark:text-blue-900'">#{{ user.ranking }}</text>
      <text class="text-xs text-gray-400 mt-1">{{ formatExtraInfo(user.extra_info) }}</text>
    </view>
  </view>
</template>



<script lang="ts">
  export default {
    name: 'RankItem',
    options: {
      virtualHost: true
    }
  }
</script>


<script setup lang="ts">
import {RankingItem} from '@/typings/system'

const props = defineProps<{
    user: RankingItem,
    type: 'EFFORT' | 'PERSISTENCE' | 'PEAK'
    subType: string
}>()

const genderMap: Record<number, string> = {
  0: '未知',
  1: '男',
  2: '女',
  3: '保密',
}

const formatGender = (gender: RankingItem['gender']): string => {
  return genderMap[gender] ?? '未知'
}

const formatExtraInfo = (value: string | number): string => {
  switch (props.type) {
    case 'EFFORT':
    {
      const n = Number(value)
      return `${n.toLocaleString('zh-CN')} 经验`
    }
    case 'PERSISTENCE':
      return `${value} 天`
    case 'PEAK':
      return formatValue(Number(value))
    default:
      return `${value}`
  }
}


function formatValue(value: number): string {
  const subType = props.subType
  const [baseType] =subType.split('_')

  if (baseType === 'rock-paper-scissors' || baseType === 'brain-games') {
    return `${value}岁`
  } else if (baseType === 'instant-memory' || baseType === 'working-memory') {
    return `${value}个`
  } else {
    // value 是秒数，转成 hh:mm:ss 格式
    const h = Math.floor(value / 3600)
    const m = Math.floor((value % 3600) / 60)
    const s = value % 60
    const hh = h > 0 ? `${h.toString().padStart(2, '0')}:` : ''
    return `${hh}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }
}

</script>
