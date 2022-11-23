<template>
  <div>
    <slot name="header">
      <header class="bg-white dark:bg-gray-200">
        <LayoutsPartialsNav />
        <LayoutsPartialsHero />
      </header>
    </slot>
  </div>
</template>

<style lang="sass" scoped>
h1
  color: crimson
</style>
