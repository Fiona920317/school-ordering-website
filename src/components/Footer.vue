<template>
  <footer class="mt-auto">
    <ul class="mediaLinksGroup d-flex gap-3 justify-content-center">
      <li>
        <a
          href="https://www.facebook.com/?locale=zh_TW"
          target="_blank"
          class="mediaLink"
          ><i class="bi bi-facebook"></i
        ></a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank" class="mediaLink"
          ><i class="bi bi-instagram"></i
        ></a>
      </li>
      <li>
        <a href="https://x.com/" target="_blank" class="mediaLink"
          ><i class="bi bi-twitter-x"></i
        ></a>
      </li>
    </ul>
    <ul class="otherLinksGroup d-flex gap-3 justify-content-center">
      <li>
        <a href="" target="_blank" class="otherLink">隱私權政策</a>
      </li>
      <li>
        <a href="" target="_blank" class="otherLink">使用者條款</a>
      </li>
      <li>
        <a href="" target="_blank" class="otherLink">Line官方申訴</a>
      </li>
    </ul>
  </footer>
</template>
<script></script>
<style lang="scss">
.mediaLinksGroup li {
  display: block;

  width: 50px;
  height: 50px;
}
.mediaLink {
  background-color: $light;
  width: 100%;
  height: 100%;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.mediaLink:hover {
  background-color: $primary;
  color: $secondary;
}
.otherLink:hover {
  color: $light;
}
</style>
