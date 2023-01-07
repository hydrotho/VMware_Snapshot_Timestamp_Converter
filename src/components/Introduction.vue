<template>
  <div class="message">
    <h1 class="green">VMware Snapshot Timestamp Converter</h1>
    <h3>{{ $t('introduction') }}</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.message h1,
.message h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .message h1,
  .message h3 {
    text-align: left;
  }
}

.message h1,
.message h3 {
  position: relative;
}
</style>
