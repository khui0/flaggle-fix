<template>
  <div v-if="gameStore.selected" class="game">
    <div class="game__flag">
      <GameFlag :image="`images/flags/${gameStore.selected.flag}`" />
    </div>
    <div v-if="!gameOver || !displayAnswer" class="game__guess-input">
      <GameGuessInput
        :game-over="gameOver"
        :game-mode="gameMode"
        @answer="answer"
      />
    </div>
    <div v-else class="game__answer">
      <h3>Correct Answer: {{ gameStore.selected.name }}</h3>
    </div>
    <div class="game__guesses">
      <GameGuessDisplay
        v-for="(result, x) in gameStore.results"
        :key="x"
        :result="result"
      />
      <GameGuessDisplay
        v-for="remaining in 6 - gameStore.results.length"
        :key="remaining"
      />
    </div>
    <!-- GIVE UP -->
    <div v-if="!displayAnswer && !gameOver" class="game__give-up-menu">
      <button class="game__button" @click="giveUp">Give Up</button>
    </div>
    <!-- PLAY AGAIN -->ƒ
    <div v-if="gameOver">
      <button class="game__button" @click="playAgain">Play Again</button>
    </div>
  </div>
</template>

<script>
import Flagle from "@/utils/flagle";

export default {
  props: {
    states: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      gameStore: gameStore(),
      gameOver: false,
      displayAnswer: false,
    };
  },
  computed: {
    gameMode() {
      return this.states ? "states" : "countries";
    },
  },
  mounted() {
    // the user exited without starting a new game, so we start one
    if (this.gameStore.results.length) {
      const last = this.gameStore.results[this.gameStore.results.length - 1];
      if (this.gameStore.selected.name === last.guess) {
        this.gameOver = true;
        this.resetGame();
      }
    }
    this.startGame();
    document.addEventListener("keydown", this.handleKeyDown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    answer(guess) {
      const result = Flagle.getResult(guess, this.gameStore.selected);
      this.gameStore.results.push(result);

      if (result.success || this.gameStore.results.length >= 6) {
        this.gameOver = true;

        if (result.success) {
          this.gameStore.handleResult(true, this.gameStore.results.length);
        } else {
          this.gameStore.handleResult(false, this.gameStore.results.length);
          this.displayAnswer = true;
        }
      }
    },
    startGame(reload = false) {
      if (this.gameStore.selected === null || reload) {
        this.gameStore.generateRandom(this.gameMode);
      }
    },
    giveUp() {
      // GIVE UP
      this.gameStore.statistics.winStreak = 0;
      this.gameStore.handleResult(false, this.gameStore.results.length);
      this.displayAnswer = true;
      this.gameOver = true;
      this.resetGame();
    },
    playAgain() {
      // PLAY AGAIN
      this.gameOver = false;
      this.displayAnswer = false;
      this.gameStore.results = [];
      this.startGame(true);
      this.resetGame();
    },
    resetGame() {
      // Focus input, but give it 0.5s to render
      setTimeout(() => {
        const input = document.querySelector('input[type="text"]');
        if (input) {
          input.focus();
        }
      }, 500);
    },
  },
};
</script>

<style lang="scss">
.game {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--base-small-gap);

  &__guesses {
    display: flex;
    flex-direction: column;
    gap: var(--guess-gap);
  }

  &__button {
    background-color: var(--flagle-blue);
    color: #fff;
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    text-align: center;
  }

  &__answer {
    text-align: center;

    @media (prefers-color-scheme: dark) {
      h3 {
        color: #fff;
      }
    }
  }

  &__give-up-menu {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
