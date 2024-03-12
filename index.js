/* sidebar link */
const sideBar = document.querySelector('.sidebar-links');
const closeBtn = document.querySelector('.close');


function showSidebar () {
    sideBar.style.display = 'flex';
}
function hideSidebar(){    
    sideBar.style.display = 'none';
}

/* skillset */
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

