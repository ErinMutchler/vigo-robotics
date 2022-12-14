<template>
  <button class="toolbar-button">
    <span class="tooltip"> {{tooltipText}} </span>
    <img class="toolbar-icon" :src="src" />
  </button>
</template>

<script>
export default {
  name: "ToolbarButton",
  props: {
    src: {
      type: String,
      required: true,
    },
    tooltipText: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
.toolbar-button {
  background-color: transparent;
  border: none;
  border-left: 2px solid var(--vcpl-secondary);
  transition: ease-in-out 0.2s;
  position: relative;
}

.toolbar-icon {
  height: 80%;
  margin: 0 .3rem;
  transition: ease-in-out 0.2s;
}

.toolbar-button:hover {
  background-color: white;
  transition: ease-in-out 0.2s;
}

.toolbar-button:hover > .toolbar-icon {
  filter: invert(40%) sepia(22%) saturate(6033%) hue-rotate(341deg) brightness(96%) contrast(83%);
  transition: ease-in-out 0.2s;
}

.toolbar-button:hover > .tooltip {
  display: block;
}

.tooltip {
  display: none;
  background-color: var(--vcpl-secondary);
  color: white;
  position: absolute;
  z-index: 500;
  width: 120px;
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%);
  /*margin-left: -60px;*/
  font-size: 1rem;
  padding: .4rem;
  border-radius: 4px;
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--vcpl-secondary) transparent transparent transparent;
}
</style>