<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  background: hsl(228, 33%, 97%);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  margin: auto;
}
</style>
