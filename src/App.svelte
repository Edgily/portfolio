<script lang="ts">
  function scrollTo(e) {
    const href = e.target.closest("a").getAttribute("href").slice(1);

    if (!href) return;

    document.getElementById(href).scrollIntoView({
      behavior: "smooth",
    });
  }

  history.scrollRestoration = "manual";
</script>

<nav class="nav-bar">
  <div id="nav-border">
    <img src="build/images/portfolio-navbar-edge-custom.svg" alt="" />
  </div>

  <div id="nav-content">
    <span class="nav-first">
      <span class="material-icons-round menu-icon"> menu_open </span>
      <h1>S. Edge</h1>
    </span>

    <a href="#top" on:click|preventDefault={scrollTo} class="nav-link">
      <span class="material-icons-round nav-icon"> contact_page </span>
      <span class="nav-text">Bio</span>
    </a>

    <a href="#content" on:click|preventDefault={scrollTo} class="nav-link">
      <span class="material-icons-round nav-icon"> task </span>
      <span class="nav-text">Projects</span>
    </a>
  </div>
</nav>

<main id="top">
  <div id="bio-wrapper">
    <div id="bio">
      <img src="build/images/apes.png" alt="ape" />
      <h1>Samuel Edge</h1>
      <p>This is some stuff about me</p>
    </div>
  </div>

  <div id="content">
    <h1>This is a title</h1>
    <!--  -->
    <p>
      I was part of something special. God creates dinosaurs. God destroys
      dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs. I was
      part of something special. Hey, you know how I'm, like, always trying to
      save the planet? Here's my chance. Must go faster. Forget the fat lady!
      You're obsessed with the fat lady! Drive us out of here! This thing comes
      fully loaded. AM/FM radio, reclining bucket seats, and... power windows.
      You know what? It is beets. I've crashed into a beet truck. Is this my
      espresso machine? Wh-what is-h-how did you get my espresso machine? You
      really think you can fly that thing? Forget the fat lady! You're obsessed
      with the fat lady! Drive us out of here! Jaguar shark! So tell me - does
      it really exist? Did he just throw my cat out of the window? God help us,
      we're in the hands of engineers. This thing comes fully loaded. AM/FM
      radio, reclining bucket seats, and... power windows. Hey, take a look at
      the earthlings. Goodbye! Do you have any idea how long it takes those cups
      to decompose. You're a very talented young man, with your own clever
      thoughts and ideas. Do you need a manager? So you two dig up, dig up
      dinosaurs? My dad once told me, laugh and the world laughs with you, Cry,
      and I'll give you something to cry about you little bastard! My dad once
      told me, laugh and the world laughs with you, Cry, and I'll give you
      something to cry about you little bastard!
    </p>
  </div>
</main>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Exo:wght@500;700&family=Josefin+Sans:wght@400;700&display=swap");

  :root {
    font-size: 16px;
    font-weight: 700;
    font-family: "Josefin Sans", "Verdana", "Geneva", "sans-serif";

    --text: #f5e2df;
    --text2: #f5e2df;
    --bg: #1f0512;
    --bg-trans: rgb(31, 5, 18, 0.7);
    --bg2: #094961;
    --bg2-trans: rgb(9, 73, 97, 0.7);
    --highlight: #02acc5;
    --highlight2: #d2186e;
    --transition-speed: 500ms;
  }

  :global(body) {
    margin: 0;
    padding: 0;

    color: var(--text);

    background: var(--bg);
    background-image: url("./images/pexels-irina-iriser-1083807.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }

  :global(body::-webkit-scrollbar) {
    width: 0.25rem;
  }

  :global(body::-webkit-scrollbar-track) {
    background: var(--bg);
  }

  :global(body::-webkit-scrollbar-thumb) {
    background: var(--highlight);
  }

  main {
    margin-left: 3rem;
    padding: 2rem;
  }

  .nav-bar {
    position: fixed;
    padding: 0.2rem;
    width: 2.5rem;
    height: 100%;
    background-color: var(--bg);

    transition: width var(--transition-speed) ease;
    z-index: 1;
  }

  .nav-bar:hover {
    width: 10rem;

    #nav-border {
      margin-left: 10rem;
    }

    .nav-first h1 {
      display: unset;
      opacity: 0;
      animation: var(--transition-speed) fadeIn linear var(--transition-speed)
        forwards;
    }

    .nav-link {
    filter: grayscale(0%);
    }

    .nav-text {
      display: unset;
      opacity: 0;
      margin-left: 1rem;
      animation: var(--transition-speed) fadeIn linear 100ms forwards;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  #nav-border {
    padding: 0;
    margin: 0;
    position: absolute;
    top: 0;
    width: 1rem;
    height: 100vh;
    z-index: -1;
    margin-left: 2.5rem;
    transition: margin-left var(--transition-speed) ease;
  }

  #nav-border img {
    height: 100vh;
  }

  .nav-first {
    border-bottom: 1px solid var(--highlight2);
    color: var(--highlight);
    display: flex;
    align-items: center;

    h1 {
      margin-left: 1rem;
      font-size: 1.5rem;
      display: none;
    }
  }

  .nav-link {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: center;

    text-decoration: none;

    margin-top: 0.5rem;

    color: var(--highlight);
    
    transition: var(--transition-speed) ease;
    filter: grayscale(70%);
  }

  .nav-link:hover {
    text-decoration: none;

    color: var(--highlight2);
  }

  .nav-text {
    display: none;
  }

  .material-icons-round.menu-icon {
    font-size: 2.5rem;
    transition: transform var(--transition-speed) ease;
  }

  .nav-bar:hover .material-icons-round.menu-icon {
    font-size: 2.5rem;
    transform: rotate(-180deg);
  }

  .material-icons-round.nav-icon {
    font-size: 2.5rem;
  }

  #bio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: min-content;
    height: min-content;
    margin: auto;
    text-align: center;

    background: var(--bg2-trans);
    padding: 2rem;
    border-radius: 2rem;

    animation: intro 1.5s ease-in-out 1 forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }

  @keyframes intro {
    from {
      transform: translateY(-6rem);
    }

    50% {
      transform: translateY(2rem);
    }

    to {
      transform: initial;
      opacity: 1;
    }
  }

  #bio img {
    width: 200px;
    border-radius: 50%;
    border: 0.2rem solid var(--highlight);
    box-shadow: 0 0 2rem var(--highlight2);
  }

  #content {
    margin-top: 100vh;
    height: 100vh;
  }
</style>
