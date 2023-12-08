<script setup>
import { computed, reactive, ref, watch } from 'vue'

import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const inputCreateTimeHigh = ref()
const inputCreateTimeLow = ref()
const outputTimestamp = computed(() => {
  let timestamp = (inputCreateTimeHigh.value * 2 ** 32 + (inputCreateTimeLow.value >>> 0)) / 1000
  return timestamp ? new Date(timestamp) : new Date(0)
})
watch(inputCreateTimeHigh, (newValue) => {
  if (newValue.startsWith('-')) {
    inputCreateTimeHigh.value = '-'
  } else {
    inputCreateTimeHigh.value = ''
  }
  if (/\d/g.test(newValue)) {
    inputCreateTimeHigh.value += newValue.match(/\d+/g)
  }
})
watch(inputCreateTimeLow, (newValue) => {
  if (newValue.startsWith('-')) {
    inputCreateTimeLow.value = '-'
  } else {
    inputCreateTimeLow.value = ''
  }
  if (/\d/g.test(newValue)) {
    inputCreateTimeLow.value += newValue.match(/\d+/g)
  }
})

const inputTimestamp = ref()
const outputCreateTime = reactive({ high: 0, low: 0 })
watch(inputTimestamp, () => {
  let timestamp = new Date(inputTimestamp.value)
  outputCreateTime.low = (timestamp.getTime() * 1000) % 2 ** 32
  outputCreateTime.high = (timestamp.getTime() * 1000 - outputCreateTime.low) / 2 ** 32
})
</script>

<template>
  <div>
    <div>
      <div class="input-group mb-3">
        <span class="input-group-text">createTimeHigh</span>
        <input
          class="form-control"
          placeholder="createTimeHigh"
          aria-label="createTimeHigh"
          v-model="inputCreateTimeHigh"
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">createTimeLow&nbsp;</span>
        <input
          class="form-control"
          placeholder="createTimeLow"
          aria-label="createTimeLow"
          v-model="inputCreateTimeLow"
        />
      </div>
      <p :style="{ visibility: inputCreateTimeHigh || inputCreateTimeLow ? 'visible' : 'hidden' }">
        {{ $t('human_readable_format') }}{{ outputTimestamp.toLocaleString() }}
      </p>
    </div>
    <div>
      <div class="mb-3">
        <Datepicker ref="datepicker" v-model="inputTimestamp" enable-seconds />
      </div>
      <p v-show="inputTimestamp">createTimeHigh: {{ outputCreateTime.high }}</p>
      <p v-show="inputTimestamp">createTimeLow: {{ outputCreateTime.low }}</p>
    </div>
  </div>
</template>
