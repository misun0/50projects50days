const imageList = document.querySelectorAll("div.image");

/*
* 이미지를 클릭했을 때
* 사진 크기가 늘어나는 애니메이션 추가
* 사진 우측 하단에 사진 이름 추가
* 선택하지 않은 이미지의 경우, 사진 크기가 줄어듦
* */

function onClickImage(event) {
    const target = event.target;
    const prevTarget = document.querySelector("div.image.active");

    prevTarget.classList.remove("active");
    target.classList.add("active")
}

imageList.forEach(image=> image.addEventListener("click", onClickImage))