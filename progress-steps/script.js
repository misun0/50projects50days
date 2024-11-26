const stepList = document.querySelectorAll(".step");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
let cntActive = 1;

const onClickNext = () => {
  cntActive++;

  if (stepList.length < cntActive) {
    cntActive = stepList.length;
  }

  updateProgress();
};

const onClickPrev = () => {
  cntActive--;

  if (cntActive < 1) {
    cntActive = 1;
  }

  updateProgress();
};

const updateProgress = () => {
  stepList.forEach((step, index) => {
    if (index < cntActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".step.active");
  progress.style.width =
    ((actives.length - 1) / (stepList.length - 1)) * 100 + "%";

  if (cntActive === 1) {
    prevBtn.classList.remove("active");
  } else if (cntActive === stepList.length) {
    nextBtn.classList.remove("active");
  } else {
    prevBtn.classList.add("active");
    nextBtn.classList.add("active");
  }
};

prevBtn.addEventListener("click", onClickPrev);
nextBtn.addEventListener("click", onClickNext);
