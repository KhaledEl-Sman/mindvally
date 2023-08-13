$(document).ready(function () {
  const stories = document.querySelectorAll(
    ".stories-page .stories .story .body"
  );
  stories.forEach((story) => {
    const hWords = story.children[1].children[0].innerText.trim().split(" ");
    const hTruncatedText = hWords.slice(0, 15).join(" ");
    if (hWords.length > 15) {
      story.children[1].children[0].innerText =
        "” " + hTruncatedText + " ... “";
    }
    const pWords = story.children[2].innerText.trim().split(" ");
    const pTruncatedText = pWords.slice(0, 35).join(" ");
    if (pWords.length > 35) {
      story.children[2].innerText = pTruncatedText + " ...\n";
      const linkElement = document.createElement("a");
      linkElement.setAttribute("href", "#");
      linkElement.textContent = "إقرأ المزيد";
      story.children[2].appendChild(linkElement);
    }
  });

  // close overlay from (x)

  $(".close_curtain").click(function () {
    $(".stories-page .curtain").css("display", "none");
    $(".stories-page .curtain .content video").attr("src", "");
  });

  // close when clicks on free space

  $(".stories-page .curtain").click(function (event) {
    if (event.target === document.querySelector(".stories-page .curtain")) {
      $(this).css("display", "none");
      $(".stories-page .curtain .content video").attr("src", "");
    }
  });

  let videos = document.querySelectorAll(".stories-page .overlay");
  videos.forEach(function (video) {
    video.addEventListener("click", function () {
      let video_src = $(this).attr("data-src");
      document.querySelector(".stories-page .curtain .content video").src =
        video_src;
      $(".stories-page .curtain").css("display", "flex");
    });
  });

  $(".show_more").click(function () {
    let hidden_stories = document.querySelectorAll(".hidden-story");
    if ($(this).html() == "مشاهدة قصص اقل") {
      hidden_stories.forEach(function (story) {
        story.style.display = "none";
        $(".show_more").html("تحميل المزيد من القصص");
      });
    } else {
      hidden_stories.forEach(function (story) {
        story.style.display = "block";
        $(".show_more").html("مشاهدة قصص اقل");
      });
    }
  });

  let icons = document.querySelectorAll(".accordion-icon");
  icons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      if ($(icon).parent().parent().hasClass("opened")) {
        $(icon).parent().parent().removeClass("opened");
      } else {
        $(icon).parent().parent().addClass("opened");
      }
    });
  });
});
