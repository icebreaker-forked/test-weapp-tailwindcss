<template>
  <view class="flex flex-wrap p-3">
    <view
      v-for="(tab, index) in tabs"
      :key="tab.value"
      :class="[
        'px-4 py-1.5 rounded-full text-sm font-medium mb-2',
        selectedTab === tab.label ? 'bg-blue-500 text-white shadow dark:bg-blue-900' : 'bg-gray-100 text-gray-700',
        index !== tabs.length - 1 ? 'mr-2' : ''
      ]"
      @tap="onTabChange(tab)"
    >
      {{ tab.label }}
    </view>
  </view>

  <!-- 巅峰榜分类 -->
  <view v-if="selectedTab === '巅峰榜'" class="px-3">
    <picker mode="multiSelector" :range="gameCategories" range-key="label" @change="onCategoryChange">
      <view class="px-4 py-2 bg-white rounded-xl border border-gray-200 shadow-sm text-sm text-gray-800 flex items-center justify-between">
        <text>{{ selectedCategory || '请选择游戏类目' }}</text>
        <text class="text-gray-400 text-xs">▼</text>
      </view>
    </picker>
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
import { ref } from 'vue'

const emit = defineEmits(['update:tab', 'update:category'])
const tabs = [
  { value: 'EFFORT', label: '努力榜' },
  { value: 'PERSISTENCE', label: '毅力榜' },
  { value: 'PEAK', label: '巅峰榜' },
]

const gameCategories = [
  [
    { label: '猜拳测验', value: 'rock-paper-scissors' },
    { label: '舒尔克方格', value: 'schulte-grid' },
    { label: '计算 25', value: 'twenty-five-calculation' },
    { label: '数字拼图', value: 'number-puzzle' },
    { label: '猜旗问答', value: 'flag-to-country' },
    { label: '奇数出局', value: 'odd-one-out' },
    { label: '前刻照片', value: 'memory-snapshot' },
    { label: '高速数数测验', value: 'count-out-loud' },
    { label: '快速减法', value: 'quick-subtraction' },
    { label: '最大数测验', value: 'maximum-number-test' },
    { label: '手指体操', value: 'finger-exercise' },
    { label: '手指计算', value: 'finger-calculation' },
    { label: '脑年龄检查', value: 'brain-games' },
    { label: '照顺序连连看测验', value: 'link-link' },
    { label: '瞬间记忆', value: 'instant-memory' },
    { label: '工作记忆锻炼', value: 'working-memory' }
  ],
  [
    { label: '简单', value: 1 },
    { label: '标准', value: 2 },
    { label: '困难', value: 3 },
    { label: '地狱', value: 100 },
  ]
]


const selectedTab = ref('努力榜')
const selectedCategory = ref('')

function onTabChange(tab: { value: string; label: string }) {
  selectedTab.value = tab.label
  emit('update:tab', tab.value)
  if (tab.label !== '巅峰榜') {
    selectedCategory.value = ''
    emit('update:category', '')
  } else {
    emit('update:category', selectedCategory.value)
  }
}

function onCategoryChange(e) {
  selectedCategory.value = gameCategories[0][e.detail.value[0]].label + '_' +  gameCategories[1][e.detail.value[1]].label
  emit('update:category',  gameCategories[0][e.detail.value[0]].value + '_' +  gameCategories[1][e.detail.value[1]].value)
}
</script>
