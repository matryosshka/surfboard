//jquery
const mesureWidth = item => {
  let reqItemWidth = 0;

  const screenWidth = $(window).width();
  const container = item.closest(".menu-acco__list");
  const titlesBlocks = container.find(".menu-acco__button");
  const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

  const textContainer = item.find(".menu-acco__desc");
  const paddingLeft = parseInt(textContainer.css("padding-left"));
  const paddingRight = parseInt(textContainer.css("padding-right"));

  const isMobile = window.matchMedia("(max-width: 786px)").matches;

  if (isMobile) {
    reqItemWidth = screenWidth - titlesWidth;
  } else {
    reqItemWidth = 500;
  }

  return {
    container: reqItemWidth,
    textContainer: reqItemWidth - paddingRight - paddingLeft
  }
};

const closeEveryItemInContainer = container => {
  const items = container.find(".menu-acco__item");
  const content = container.find(".menu-acco__content");

  items.removeClass("active");
  content.width(0);
}

const openItem = (item) => {
  const hiddenContent = item.find(".menu-acco__content");
  const reqWidth = mesureWidth(item);
  const textBlock = item.find(".menu-acco__desc");

  item.addClass("active");
  hiddenContent.width(reqWidth.container);
  textBlock.width(reqWidth.textContainer);
}

$(".menu-acco__button").on("click", e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".menu-acco__item");
  const itemOpened = item.hasClass("active");
  const container = $this.closest(".menu-acco__list");

  if (itemOpened) {
    closeEveryItemInContainer(container)
  } else {
    closeEveryItemInContainer(container)
    openItem(item);
  }
});


//js 
// const menu = document.querySelector("#horizontalMenu");
// const items = document.querySelectorAll(".menu-acco__item");

// const getItemWidth = (item) => {
//   let resultWidth = 524;
//   const windowWidth = window.innerWidth;
//   const itemWidth = item.offsetWidth;

//   const isTablet = window.matchMedia("(max-width: 768px)").matches;
//   const isMobile = window.matchMedia("(max-width: 480px)").matches;

//   if (isTablet) {
//     resultWidth = windowWidth - itemWidth * items.length;
//   }

//   if (isMobile) {
//     resultWidth = windowWidth - itemWidth;
//   }

//   return resultWidth;
// };

// const setItemWidth = (item, width) => {
//   const itemContent = item.nextElementSibling;
//   const itemText = itemContent.firstElementChild;
//   itemContent.style.width = `${width}px`;
//   itemText.style.width = `${width}px`;
// };

// const closeItem = (item) => {
//   const itemParent = item.parentElement;
//   itemParent.classList.remove("menu-acco__item--active");
//   item.classList.remove("menu-acco__button--active");
//   setItemWidth(item, 0);
// };

// const openItem = (item) => {
//   const itemParent = item.parentElement;
//   itemParent.classList.add("menu-acco__item--active");
//   item.classList.add("menu-acco__button--active");
//   const width = getItemWidth(item);
//   setItemWidth(item, width);
// };

// menu.addEventListener("click", (e) => {
//   e.preventDefault();
//   const target = e.target;
//   const isActive = target.classList.contains("menu-acco__button--active");
//   const activeElement = document.querySelector(".menu-acco__button--active");

//   if (target.classList.contains("menu-acco__button") && isActive) {
//     if (activeElement) {
//       closeItem(activeElement);
//     }
//   }
//   if (target.classList.contains("menu-acco__button") && !isActive) {
//     if (activeElement) {
//       closeItem(activeElement);
//     }
//     openItem(target);
//   }
// });

// window.addEventListener("resize", () => {
//   const activeButton = document.querySelector(".menu-acco__button--active");
//   if (activeButton) {
//     closeItem(activeButton);
//   }
// });

