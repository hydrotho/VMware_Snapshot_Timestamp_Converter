<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="brief">
    <h1 class="green">VMware Snapshot Timestamp Converter</h1>
    <h3>{{ t('introduction') }}</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.brief h1,
.brief h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .brief h1,
  .brief h3 {
    text-align: left;
  }
}
</style>
