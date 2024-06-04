<template>
  <BaseSection class="about-section" no-container>
    <h1>Flaggle</h1>
    <p>This is a fork of andydeforest's Flagle</p>
    <p>The following libraries are used:</p>
    <ul>
      <li>Fuse.js</li>
      <li>flagpedia.net</li>
    </ul>
    <p>
      <a href="https://github.com/khui0/flaggle-fix">khui0/flaggle-fix</a>
    </p>
  </BaseSection>
</template>

<style lang="scss">
.about-section {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: var(--base-container-padding) var(--base-container-margin);
  padding: var(--base-container-padding);

  a {
    color: var(--flagle-blue);
    text-decoration: underline;
  }

  h1 {
    margin-bottom: 2rem;
  }

  p {
    margin: 0.5rem 0;
  }

  ul {
    margin-left: var(--base-container-padding);
    list-style: disc;
  }

  @media (prefers-color-scheme: dark) {
    color: #fff;
    background-color: var(--dark-mode-light);

    h1 {
      color: #fff;
    }

    a {
      color: #ccc;
    }
  }
}
</style>
