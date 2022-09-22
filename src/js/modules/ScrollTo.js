//ScrollTo #1
const header = document.getElementById("sell");
header.onclick = () => {
  const goSection = document.querySelector(".header");
  window.scrollTo({
    top: goSection.offsetTop,
    behavior: "smooth",
  });
};