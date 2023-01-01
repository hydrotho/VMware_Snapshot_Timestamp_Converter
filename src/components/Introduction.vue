<template>
  <div class="message">
    <h1 class="green">VMware Snapshot Timestamp Converter</h1>
    <h3>
      VMware Snapshot Timestamp Converter 是一个用于将 VMware 快照时间戳和人类可读格式相互转换的工具。
    </h3>
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
