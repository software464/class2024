(async function () {
    "use strict";
    const videoHolders = document.querySelectorAll(".videoHolder");
    console.log(videoHolders);
    const videoElement = document.querySelector('.videoPlayer');
    ///fetching item
    const response = await fetch('videos.json');
    const videoList = await response.json();
    ///setting img to each element

    for (let index = 0; index < videoHolders.length; index++) {

        videoHolders[index].children.item(0).src = `${videoList[index].img||"media/video.png"}` ;

        videoHolders[index].children.item(1).innerText = `${videoList[index].title||"N/A"} `;

        videoHolders[index].children.item(0).addEventListener('click', e => {
            playVideo(`${videoList[index].src}`);

        });




    }
    /// video function
    function playVideo(source) {
        console.log("playing video",source);
        videoElement.src = source;
        videoElement.scrollIntoView(false);
        videoElement.play();
    }




}());