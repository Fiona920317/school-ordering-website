<script>
export default{
  data(){
    return{
      menuOpen:false,
    }
  },
  methods:{
    toggleMenu(){
      this.menuOpen=!this.menuOpen;
    }
  }
}
</script>
<template>
  <header>
    <nav class="navbar bg-light text-primary">
      <div class="container">
        <router-link to="/" class="navbar-brand text-primary">
          <i class="bi bi-fork-knife"></i>校園點餐
        </router-link>
        <div class="nav-icons d-flex align-items-center">
          <div class="nav-link">
            <router-link to="/member">
            <i class="bi bi-person-circle"></i>
          </router-link>
          </div>
          <div class="nav-link">
            <router-link to="/cart" class="nav-link">
            <i class="bi bi-cart position-relative">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                9
              <span class="visually-hidden">unread messages</span>
            </span>
            </i>
          </router-link>
          </div>
          <div class="nav-link" @click="toggleMenu()">
            <i class="bi bi-list"></i>
        </div>
          
          <ul class="nav-menu container" @click="toggleMenu()" :class=" menuOpen ?'active':''">
            <div class="nav-link" >
              <i class="bi bi-x"></i>
            </div>
            
            <li class="nav-item">
              <router-link to="/" class="nav-link">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/member" class="nav-link">會員專區</router-link to="/member">
            </li>
          </ul>
          <div class="overlay" @click="toggleMenu()" :class="menuOpen? 'd-block':'d-none'"></div>
        </div>
      </div>
    </nav>
  </header>

  <router-view />
</template>

<style lang="scss">
*{
  box-sizing: border-box;
  font-family: "Roboto", sans-serif
}
ul{
  list-style: none;
}
//////////////////////////////////
header{
  position: fixed;
  z-index: 1000;
  width: 100%;
  top:0;
}
.navbar-brand{
  font-size: 30px;
  font-weight: bold;
}
.nav-icons{
  font-size: 24px;
  // background-color: black;//檢查排版用
  width: 15%;
}
.nav-link{
  border-radius: 20px;
  flex: 1;
  text-align: center;
  cursor:pointer;
}
.nav-link:hover{
  background-color: $secondary;
}

////////////////////////////////////
.nav-menu{
  position: fixed;
  z-index: 1002;
  right:-100%;
  top:0;
  transition: 0.3s all ease;

  background-color: $light;
  height: 100vh;
}
.nav-menu.active{
  right:0;
}
.overlay{
  position: fixed;
  top:0;
  left:0;
  z-index: 1001;
  width: 100%;
  height: 100%;
  background-color: rgba($color: black, $alpha: 0.5);
}
</style>