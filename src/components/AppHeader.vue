<template>
  <header>
    <branding />

    <nav>
      <ul>
        <li><a href=".">home</a></li>
        <li><a href="./events">events</a></li>
        <li><a href="#">merch</a></li>
        <li><a href="./about">about</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
#app>header {
  font-weight: 400;
  font-size: 24px;

  padding: 24px 48px;
  height: 64px;

  display: flex;
  justify-content: space-between;

  >svg {
    padding: 8px 0;
  }

  >nav>ul {
    list-style: none;
    margin: 16px 0;

    >li {
      &:not(:first-child) {
        padding-left: 64px;
      }

      display: inline-block;
      vertical-align: middle;

      >a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
}
</style>

<script lang="ts">
import BrandingIcon from '@/components/icons/BrandingIcon.vue';

export default {
  components: { Branding: BrandingIcon },
};
</script>
