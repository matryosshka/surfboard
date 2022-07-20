;(function() {
const findBlockByAlias = (alias) => {
  return $(".review__item").filter((ndx, item) => {
    return $(item).attr("data-linked-with") === alias;
  });
};

$(".interactive-avatar__link").click((e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const itemToShow = findBlockByAlias(target);
  const curItem = $this.closest(".review__switcher-item",".interactive-avatar");

  itemToShow.addClass("review__item--active").siblings().removeClass("review__item--active");
  curItem.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");
});
})()