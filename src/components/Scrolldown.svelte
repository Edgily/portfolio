<script lang="ts">
  import { scrollTo } from "../utils/scrollTo";
</script>

<div id="scrolldown">
  <a href="#content" on:click|preventDefault={scrollTo} class="nav-link">
    <button class="material-icons-round button"> expand_more </button>
  </a>
</div>

<style lang="scss">
  #scrolldown {
    position: absolute;
    top: 90vh;

    .button {
      font-size: 3rem;
    }
  }
</style>
