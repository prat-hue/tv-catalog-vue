<template>
  <div class="wrapper">
    <div class="spin-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="css" scoped>

.wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background: var(--color-background-soft) , 0.3;
}

.spin-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.spin-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: spin-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}

.spin-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.spin-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.spin-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes spin-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
