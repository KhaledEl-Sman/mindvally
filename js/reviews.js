document.addEventListener("DOMContentLoaded", function () {
  let popups = document.querySelectorAll(".review-body .pic .overlay");
  let content = document.querySelector(".review_popup .content");
  let overlay = document.querySelector(".review_popup");
  let currentPopup = "0";
  for (let i = 0; i < popups.length; i++) {
    popups[i].addEventListener("click", function (event, index) {
      currentPopup = i;
      if (event.target.classList != "") {
        let contentVar = ``;
        if (!this.hasChildNodes()) {
          contentVar += `
            <div class="pic">
              <img height="100" src="${event.target.previousElementSibling.src}" alt="" />
            </div>
            `;
        } else {
          contentVar += `
            <div class="pic">
              <video controls preload="auto">
                <source src="${event.target.previousElementSibling.getAttribute(
                  "video-path"
                )}" type="video/mp4">
              </video>
            </div>
            `;
        }
        contentVar += `
          <div class="review-card">
            <button type="button" class="rev-close-modal"></button>
            <div class="user-title">
              <h3>${event.target.parentElement.parentElement.previousElementSibling.children[1].children[0].innerHTML}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 256 256"
              >
                <path
                  d="M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69-1.52-13.94-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52-3.56-1.47-7.63-5.37-11.57-9.14C146.28,23.51,138.44,16,128,16s-18.27,7.51-25.18,14.14c-3.94,3.77-8,7.67-11.57,9.14C88,40.64,82.56,40.72,77.31,40.8c-9.76.15-20.82.31-28.51,8S41,67.55,40.8,77.31c-.08,5.25-.16,10.67-1.52,13.94-1.47,3.56-5.37,7.63-9.14,11.57C23.51,109.72,16,117.56,16,128s7.51,18.27,14.14,25.18c3.77,3.94,7.67,8,9.14,11.57,1.36,3.27,1.44,8.69,1.52,13.94.15,9.76.31,20.82,8,28.51s18.75,7.85,28.51,8c5.25.08,10.67.16,13.94,1.52,3.56,1.47,7.63,5.37,11.57,9.14C109.72,232.49,117.56,240,128,240s18.27-7.51,25.18-14.14c3.94-3.77,8-7.67,11.57-9.14,3.27-1.36,8.69-1.44,13.94-1.52,9.76-.15,20.82-.31,28.51-8s7.85-18.75,8-28.51c.08-5.25.16-10.67,1.52-13.94,1.47-3.56,5.37-7.63,9.14-11.57C232.49,146.28,240,138.44,240,128S232.49,109.73,225.86,102.82Zm-52.2,6.84-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"
                ></path>
              </svg>
            </div>
            <div class="rate">
              ${event.target.parentElement.parentElement.previousElementSibling.innerHTML}
            </div>
            <h4>${event.target.parentElement.parentElement.children[0].innerHTML}</h4>
            <p>${event.target.parentElement.parentElement.children[1].innerHTML}</p>
            <div class="give-rate">
            ${event.target.parentElement.parentElement.nextElementSibling.innerHTML}
            </div>
          </div>
          `;
        content.innerHTML = contentVar;
        overlay.style.display = "flex";

        let closeButton = document.querySelector(".rev-close-modal");
        closeButton.addEventListener("click", function () {
          overlay.style.display = "none";
        });
        vote();
      }
    });
  }

  function vote() {
    const voteElements = document.querySelectorAll(".vote-actions svg");
    voteElements.forEach((element) => {
      element.addEventListener("click", () => {
        const parentElementVar = element.parentElement;
        const grandParentElement = parentElementVar.parentElement;
        const chosenAttribute = grandParentElement.getAttribute("chosen");
        const classAttribute = parentElementVar.getAttribute("class");
        const voteCountElement = element.nextElementSibling;
        const incrementVoteCount = () => {
          voteCountElement.innerHTML = parseInt(voteCountElement.innerHTML) + 1;
        };
        const decrementVoteCount = () => {
          voteCountElement.innerHTML = parseInt(voteCountElement.innerHTML) - 1;
        };

        if (chosenAttribute == "none") {
          grandParentElement.setAttribute("chosen", classAttribute);
          incrementVoteCount();
          element.classList.add("active");
        } else {
          if (
            (classAttribute === "up-vote" && chosenAttribute === "up-vote") ||
            (classAttribute === "down-vote" && chosenAttribute === "down-vote")
          ) {
            decrementVoteCount();
            grandParentElement.setAttribute("chosen", "none");
            element.classList.remove("active");
          } else {
            if (classAttribute == "up-vote") {
              incrementVoteCount();
              const siblingVoteCountElement =
                parentElementVar.nextElementSibling.children[1];
              siblingVoteCountElement.innerHTML =
                parseInt(siblingVoteCountElement.innerHTML) - 1;
              grandParentElement.setAttribute("chosen", "up-vote");
              const siblingElement =
                parentElementVar.nextElementSibling.children[0];
              siblingElement.classList.remove("active");
              element.classList.add("active");
            } else if (classAttribute == "down-vote") {
              incrementVoteCount();
              const siblingVoteCountElement =
                parentElementVar.previousElementSibling.children[1];
              siblingVoteCountElement.innerHTML =
                parseInt(siblingVoteCountElement.innerHTML) - 1;
              grandParentElement.setAttribute("chosen", "down-vote");
              const siblingElement =
                parentElementVar.previousElementSibling.children[0];
              siblingElement.classList.remove("active");
              element.classList.add("active");
            }
          }
        }
      });
    });
  }
  vote();

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      const reviews = document.querySelectorAll(".user-review");
      reviews[currentPopup].querySelector(".give-rate").innerHTML =
        document.querySelector(".review_popup .give-rate").innerHTML;
      vote();
      overlay.style.display = "none";
    }
  });

  const myTextarea = document.getElementById("myTextarea");
  myTextarea.addEventListener("keyup", function () {
    if (this.value.trim().length) {
      myTextarea.parentElement.nextElementSibling.children[0].children[0].disabled = false;
    } else {
      myTextarea.parentElement.nextElementSibling.children[0].children[0].disabled = true;
    }
  });

  const myTitle = document.getElementById("myTitle");
  myTitle.addEventListener("keyup", function () {
    if (this.value.trim().length) {
      myTitle.nextElementSibling.children[0].children[0].disabled = false;
    } else {
      myTitle.nextElementSibling.children[0].children[0].disabled = true;
    }
  });

  const review_form = document.getElementById("review_form");
  let finished = false;
  review_form.addEventListener("submit", function (e) {
    e.preventDefault();
    const submitButton = document.querySelector(
      '#review_form button[type="submit"]'
    );
    finished = true;
    go_next(submitButton);
  });

  let next_condition = true;
  go_next = (element) => {
    if (next_condition) {
      if (finished) {
        const currentStep =
          element.parentElement.parentElement.parentElement.parentElement;
        const nextStep =
          element.parentElement.parentElement.parentElement.parentElement
            .nextElementSibling;
        currentStep.style.opacity = 0;
        setTimeout(function () {
          currentStep.style.display = "none";
          nextStep.style.display = "block";
          setTimeout(function () {
            nextStep.style.opacity = 1;
          }, 500);
        }, 500);
        finished = false;
      } else {
        const currentStep = element.parentElement.parentElement.parentElement;
        const nextStep =
          element.parentElement.parentElement.parentElement.nextElementSibling;
        currentStep.style.opacity = 0;
        setTimeout(function () {
          currentStep.style.display = "none";
          nextStep.style.display = "block";
          setTimeout(function () {
            nextStep.style.opacity = 1;
          }, 500);
        }, 500);
      }
    }
  };

  close_review = () => {
    document.querySelector(".add_review").style.display = "none";
  };

  addReviewFun = () => {
    document.querySelector(".add_review").style.display = "flex";
  };
});
