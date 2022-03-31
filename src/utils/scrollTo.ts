export function scrollTo(e) {
  const href = e.target.closest("a").getAttribute("href").slice(1);

  // history.pushState(state, unused)

  if (!href) return;

  document.getElementById(href).scrollIntoView({
    behavior: "smooth",
  });
}