<script lang="ts">
  import { scrollTo } from "../utils/scrollTo";

  let dropdownToggle = "";

  function manageDropdown() {
    dropdownToggle === "" || dropdownToggle === "hide"
      ? (dropdownToggle = "show")
      : (dropdownToggle = "hide");
  }

  const menuItems = [['#top', 'Samuel Edge'], ['#projects', 'Projects']];

</script>

<nav>
  <button
    id="menu-button"
    class="material-icons-round button"
    on:click={() => manageDropdown()}
    aria-label="menu"
  >
    menu
  </button>

  <div id="menu" class="menu {dropdownToggle}">
    <button
      id="close-menu"
      class="material-icons-round button"
      on:click={() => manageDropdown()}
      aria-label="close menu"
    >
      close
    </button>

    {menuItems.forEach((item) => {
      const href = item[0];
      const itemName = item[1];
      console.log(href, itemName);

      // const link = <a href={href}>{itemName}</a>;
      
      // return link;
      // return <a href={href}>{itemName}</a>
    })}

    <hr style="width: 100%" />
    <a
      href="#top"
      on:click|preventDefault={(e) => {
        scrollTo(e);
        manageDropdown();
      }}
      class="nav-link"
    >
      <span class="nav-text">Bio</span>
    </a>

    <a
      href="#content"
      on:click|preventDefault={(e) => {
        scrollTo(e);
        manageDropdown();
      }}
      class="nav-link"
    >
      <span class="nav-text">Projects</span>
    </a>
  </div>
</nav>

<style lang="scss">
  nav {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 99;
  }

  .button {
    font-size: var(--button-font);
  }

  #menu {
    position: fixed;
    top: 0;
    left: -100vw;
    width: 100vw;
    height: 100vh;

    background-color: var(--bg);

    display: none;
    opacity: 0%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 2rem;

    &.show {
      display: flex;
      animation: showMenu 300ms ease-out forwards;

      @keyframes showMenu {
        to {
          left: 0;
          opacity: 100%;
        }
      }
    }

    &.hide {
      display: flex;
      left: 0;
      opacity: 100%;
      animation: hideMenu 300ms ease-out forwards;

      @keyframes hideMenu {
        to {
          left: -100vw;
          opacity: 50%;
          display: none;
        }
      }
    }

    #close-menu {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }

    a {
      color: var(--text);
      text-decoration: none;
      &:hover {
        color: var(--highlight);
      }
    }
  }
</style>
