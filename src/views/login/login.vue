<template>
  <div class="layout">
    <div v-if="hasUser" :type="hasUser ? 'user' : 'noneUser'" class="user-info">
      {{user.name}}
      <br>
      {{user.email}}
      <div class="photo" :style="{backgroundImage : `url(${user.photoURL})`}"></div>
    </div>
    <div class="login-button" :type="hasUser ? 'user' : 'noneUser'" @click="clickLoginButton">login</div>
    <div
      class="logout-button"
      :type="hasUser ? 'user' : 'noneUser'"
      @click="clickLogoutButton"
    >logout</div>
  </div>
</template>

<style lang="scss" scoped>
@import './login.scss';
</style>

<script src="./login.ts">
</script>
