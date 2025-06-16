<template>
  <view
    v-if="show"
    class="dark:text-white text-black bg-white dark:bg-black text-6xl font-bold absolute h-screen w-screen flex items-center justify-center z-50"
  >
    <view class="flex  items-center justify-center" :class="parseInt(displayText) > 0 ? 'w-28 h-28 rounded-full border-8 border-black dark:border-white border-solid': ''">{{ displayText }}</view>
  </view>


<!--  <view-->
<!--    v-if="show"-->
<!--    class="dark:text-white text-black bg-white dark:bg-black text-6xl font-bold absolute h-screen w-screen flex items-center justify-center z-50"-->
<!--  >-->
<!--    <view class="flex  items-center justify-center" :class="parseInt(displayText) > 0 ? 'w-28 h-28 rounded-full border-8 border-black dark:border-white border-solid': ''">{{ displayText }}</view>-->
<!--  </view>-->
</template>

<script>
export default {
  options: {
    virtualHost: true
  }
}
</script>

<script setup>
import { ref, onMounted } from 'vue'

defineOptions({
  name: 'CountDown'
})


const props = defineProps({
  // max: { default: 0, type: Number },
  max: { default: 4, type: Number },
})

const show = defineModel('show',  { required: true,  default: true, type: Boolean })

let countdown = props.max
const displayText = ref('')

const emit = defineEmits(['go'])
onMounted(() => {
  const timer = setInterval(() => {
    countdown -= 1
    if (countdown > 0) {
      displayText.value = countdown
    } else {
      displayText.value = '开始'
      if (countdown === -1) {
        show.value = false
        emit('go', Math.floor(Date.now() / 1000))
        clearInterval(timer)
      }
    }
  }, 1000)
})
</script>
