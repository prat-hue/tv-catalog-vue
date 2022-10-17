<template>
  <div class="item">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="details">
      <h5>
        <slot name="heading"></slot>
      </h5>
    </div>
  </div>
</template>
<style scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;
}

.details {
  margin-top: 10px;
  color: var(--color-text);
}
</style>
