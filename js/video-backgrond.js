window.addEventListener('resize', function () {
  var video = document.getElementById('video-background');
  var aspectRatio = video.videoWidth / video.videoHeight;

  if ((window.innerWidth / window.innerHeight) > aspectRatio) {
      video.style.width = '100%';
      video.style.height = 'auto';
  } else {
      video.style.width = 'auto';
      video.style.height = '100%';
  }
});
