<template>
    <h1 style="align-self: center;">测试</h1>
    <br>
    <video></video>
</template>

<script setup lang="ts">
// 想要获取一个最接近 1280x720 的相机分辨率
var constraints = { audio: true, video: { width: 1280, height: 720 } };

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function (mediaStream) {
    var video = document.querySelector("video");
    video.srcObject = mediaStream;
    video.onloadedmetadata = function (e) {
      video.play();
    };
  })
  .catch(function (err) {
    console.log(err.name + ": " + err.message);
  }); // 总是在最后检查错误

  var enumeratorPromise = navigator.mediaDevices.enumerateDevices();
enumeratorPromise.then((c) => {
    console.log(c);
})


</script>