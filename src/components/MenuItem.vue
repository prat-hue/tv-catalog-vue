<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
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
