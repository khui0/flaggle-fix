<template>
  <div
    ref="menu"
    class="ui-mobile-menu"
  >
    <ul class="ui-mobile-menu__links">
      <li>
        <NuxtLink
          to="/"
          @click="$emit('hide-menu')"
        >
          <BaseIcon icon="fa fa-globe" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/states"
          @click="$emit('hide-menu')"
        >
          <BaseIcon icon="fa fa-flag-usa" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/about"
          @click="$emit('hide-menu')"
        >
          <BaseIcon icon="fa-solid fa-question" />
        </NuxtLink>
      </li>
      <li>
        <UIStatisticsButton />
      </li>
      <li>
        <a
          href="https://github.com/khui0/flaggle-fix"
          target="_blank"
          @click="$emit('hide-menu')"
        >
          <BaseIcon icon="fab fa-github" />
        </a>
      </li>
      <li>
        <UIUnitToggle />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.ui-mobile-menu {
  z-index: 9001;
  background-color: var(--flagle-blue);
  border-top: 1px solid rgba(255, 255, 255, 35%);
  position: absolute;
  top: var(--base-header-height);
  right: 0;
  bottom: 0;
  color: #fff;
  padding: 1rem;

  &__links {
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: var(--base-large-gap);
    align-items: center;

    a {
      color: #fff;
    }

    a,
    svg {
      font-size: 4rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--dark-mode-light);
  }
}
</style>
