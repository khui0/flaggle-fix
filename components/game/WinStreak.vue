<template>
  <div v-if="gameStore.statistics.winStreak > 0" class="game-win-streak">
    <small class="game-win-streak__label">Streak</small>
    <h3 class="game-win-streak__streak">
      {{ gameStore.statistics.winStreak }}
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameStore: gameStore(),
    };
  },
};
</script>

<style lang="scss">
.game-win-streak {
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 0.5rem 1.25rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px #0003, 0 6px 20px #00000030;
  top: calc(var(--base-header-height) + 2rem);
  left: 2rem;
  bottom: auto;

  // @include up-till-breakpoint(medium) {
  //   top: calc(var(--base-header-height) / 2);
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  // }

  // @include breakpoint(medium) {
  //   top: calc(var(--base-header-height) + 2rem);
  //   left: 2rem;
  //   bottom: auto;
  // }

  small {
    font-size: 1rem;
  }

  &__label {
    color: hsl(0, 0%, 50%);
    text-transform: uppercase;
    font-weight: bold;
  }

  &__streak {
    font-size: 3em;
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--dark-mode-secondary-bg);
    color: #fff;

    h3 {
      color: #fff;
    }

    &__label {
      color: hsl(0, 0%, 65%);
    }
  }
}
</style>
