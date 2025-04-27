<template>
  <div class="is-bakgrund">
    <div class="gradient-sfar is-sfar-1"></div>
    <div class="gradient-sfar is-sfar-2"></div>
    <div class="gradient-sfar is-sfar-3"></div>
    <div class="is-rutnät"></div>
    <div class="is-partiklar"></div>
  </div>
</template>

<style>
.is-bakgrund {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.gradient-sfar {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  transition: all 3s cubic-bezier(0.4, 0, 0.2, 1);
}

.is-sfar-1 {
  background: radial-gradient(circle at center, #76c7ef 0%, rgba(118, 199, 239, 0) 70%);
  width: 70vh;
  height: 70vh;
  top: -35vh;
  right: -10vw;
  animation: flyter1 25s infinite alternate ease-in-out;
}

.is-sfar-2 {
  background: radial-gradient(circle at center, #a5d8ff 0%, rgba(165, 216, 255, 0) 70%);
  width: 50vh;
  height: 50vh;
  bottom: -25vh;
  left: 10vw;
  animation: flyter2 30s infinite alternate ease-in-out;
}

.is-sfar-3 {
  background: radial-gradient(circle at center, #0284c7 0%, rgba(2, 132, 199, 0) 70%);
  width: 40vh;
  height: 40vh;
  top: 30vh;
  left: 60vw;
  animation: flyter3 28s infinite alternate ease-in-out;
}

.is-rutnät {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.2;
}

.is-partiklar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.2;
  animation: glittrar 20s infinite linear;
}

@keyframes flyter1 {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-50px, 50px); }
}

@keyframes flyter2 {
  0% { transform: translate(0, 0); }
  100% { transform: translate(80px, -80px); }
}

@keyframes flyter3 {
  0% { transform: translate(0, 0); }
  100% { transform: translate(-70px, -40px); }
}

@keyframes glittrar {
  0% { opacity: 0.1; }
  50% { opacity: 0.3; }
  100% { opacity: 0.1; }
}

/* Dark mode adjustments */
.dark-mode .gradient-sfar {
  opacity: 0.1;
}

.dark-mode .is-sfar-1 {
  background: radial-gradient(circle at center, #0369a1 0%, rgba(3, 105, 161, 0) 70%);
}

.dark-mode .is-sfar-2 {
  background: radial-gradient(circle at center, #0284c7 0%, rgba(2, 132, 199, 0) 70%);
}

.dark-mode .is-sfar-3 {
  background: radial-gradient(circle at center, #0ea5e9 0%, rgba(14, 165, 233, 0) 70%);
}

.dark-mode .is-rutnät {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
}

.dark-mode .is-partiklar {
  background-image: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
}
</style> 