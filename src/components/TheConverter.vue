<script setup>
import { computed, inject, ref, watch } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isDarkMode = inject('isDarkMode')

// Timestamp to Date
const inputCreateTimeHigh = ref()
const inputCreateTimeLow = ref()

const sanitizeInputValue = (value) => {
  return value.match(/^-?\d*/)[0]
}

watch(inputCreateTimeHigh, (newValue) => {
  inputCreateTimeHigh.value = sanitizeInputValue(newValue)
})

watch(inputCreateTimeLow, (newValue) => {
  inputCreateTimeLow.value = sanitizeInputValue(newValue)
})

const outputTimestamp = computed(() => {
  let timestamp = (inputCreateTimeHigh.value * 2 ** 32 + (inputCreateTimeLow.value >>> 0)) / 1000
  return timestamp ? new Date(timestamp) : new Date(0)
})

// Date to Timestamp
const inputTimestamp = ref()
const outputCreateTime = computed(() => {
  let timestamp = new Date(inputTimestamp.value).getTime()
  let low = (timestamp * 1000) % 2 ** 32
  let high = (timestamp * 1000 - low) / 2 ** 32
  return { high, low }
})
</script>

<template>
  <!-- Timestamp to Date -->
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
      {{ t('human_readable_format') }}{{ outputTimestamp.toLocaleString() }}
    </p>
  </div>
  <!-- Date to Timestamp -->
  <div>
    <div class="mb-4">
      <VueDatePicker
        ref="vueDatePicker"
        v-model="inputTimestamp"
        enable-seconds
        :dark="isDarkMode"
      />
    </div>
    <p v-show="inputTimestamp">createTimeHigh: {{ outputCreateTime.high }}</p>
    <p v-show="inputTimestamp">createTimeLow: {{ outputCreateTime.low }}</p>
  </div>
</template>
