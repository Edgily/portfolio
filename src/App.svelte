<script lang="ts">
  import Navbar from "./components/Navbar.svelte";

  // history.scrollRestoration = "manual";
</script>

<section id="bg-container" />

<Navbar />

<main id="top">
  <section id="bio">
    <div class="link-wrapper">
      <button
        class="button"
        on:click={() => window.open("https://www.linkedin.com/in/edgily")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          ><path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          /></svg
        >
      </button>
      <button
        class="button"
        on:click={() => window.open("https://github.com/Edgily")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          ><path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
          /></svg
        >
      </button>
    </div>
    <div id="bar" />
    <h1>Samuel Edge</h1>
    <div id="bar" />
    <p>Junior Software Developer</p>
  </section>

  <section id="content" class="content">
    <h1>This is a title</h1>
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
  </section>
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
  }

  :global(body) {
    margin: 0;
    padding: 0;

    color: var(--text);
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

  :global(.button) {
    --button-font: 2.5rem;
    color: var(--bg);
    background-color: var(--highlight);
    border: 0;
    border-radius: 0.3rem;
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: var(--button-font);

    &:hover {
      background-color: var(--highlight2);
      animation: spin 600ms ease-in-out;
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }

      33% {
        transform: rotate(10deg);
      }

      66% {
        transform: rotate(-10deg);
      }

      to {
        transform: rotate(0deg);
      }
    }

    svg {
      fill: var(--bg);
    }
  }

  main {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    min-width: 360px;
    // background-color: blue;
  }

  #bg-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--bg);
    background-image: url("/images/pexels-irina-iriser-1083807.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;

    animation: flashy 10s linear infinite alternate;
  }

  @keyframes flashy {
    0% {
      filter: contrast(100%);
      filter: brightness(100%);
    }

    8% {
      filter: contrast(100%);
      filter: brightness(100%);
    }
    10% {
      filter: contrast(130%);
      filter: brightness(130%);
    }
    12% {
      filter: contrast(100%);
      filter: brightness(100%);
    }

    20% {
      filter: contrast(100%);
      filter: brightness(100%);
    }
    21% {
      filter: contrast(130%);
      filter: brightness(130%);
    }
    23% {
      filter: contrast(100%);
      filter: brightness(100%);
    }
    24% {
      filter: contrast(130%);
      filter: brightness(130%);
    }
    25% {
      filter: contrast(100%);
      filter: brightness(100%);
    }

    35% {
      filter: contrast(100%);
      filter: brightness(100%);
    }
    37% {
      filter: contrast(130%);
      filter: brightness(130%);
    }
    39% {
      filter: contrast(100%);
      filter: brightness(100%);
    }

    50% {
      filter: contrast(100%);
      filter: brightness(100%);
    }
    51% {
      filter: contrast(130%);
      filter: brightness(130%);
    }
    52% {
      filter: contrast(100%);
      filter: brightness(100%);
    }

    70% {
      filter: contrast(100%);
      filter: brightness(100%);
    }
    71% {
      filter: contrast(130%);
      filter: brightness(130%);
    }
    72% {
      filter: contrast(100%);
      filter: brightness(100%);
    }
    74% {
      filter: contrast(100%);
      filter: brightness(100%);
    }
    76% {
      filter: contrast(130%);
      filter: brightness(130%);
    }
    78% {
      filter: contrast(100%);
      filter: brightness(100%);
    }

    100% {
      filter: contrast(100%);
      filter: brightness(100%);
    }
  }

  #bio {
    margin: 0;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 30vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 3rem;

    font-size: 1.5rem;
    text-shadow: 0rem 0rem 0.5rem var(--highlight);

    opacity: 0;
    animation: intro 1.5s ease-in-out 1 forwards;
    animation-delay: 0.5s;

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

    #bar {
      width: 100%;
      height: 2px;
      background-color: var(--text);
      box-shadow: 0rem 0rem 0.5rem var(--highlight);
    }

    .link-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 3rem;
    }
  }

  .content {
    position: absolute;
    top: 100vh;
    padding: 5rem;
    background-color: var(--bg);
  }
</style>
