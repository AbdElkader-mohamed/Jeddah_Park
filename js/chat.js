$(document).ready(function () {
  $(function () {
    window.emojiPicker = new EmojiPicker({
      emojiable_selector: "[data-emojiable=true]",
      assetsPath: "../images/emoji",
      popupButtonClasses: "fa-regular fa-face-smile"
    });
    window.emojiPicker.discover();
  });
  $("#searchForm").click(function () {
    $(".hidden-form").slideDown();
    $("#searchChat").focus();
  });
  $("#close-form").click(function () {
    $(".hidden-form").slideUp();
    $("#searchChat").val("");
  });
  if (window.innerWidth < 767) {
    $(".conversation__user").click(function () {
      $(".conversation__chat").css({ transform: "translateX(0)" });
    });
    $("#backToConversationsList").click(function () {
      $(".conversation__chat").css({ transform: "translateX(100%)" });
    });
  }

  window.addEventListener("load", function () {
    window.scrollTo({
      top: document.querySelector(".conversation__wrapper").offsetTop - 30,
      behavior: "smooth"
    });
  });
});
