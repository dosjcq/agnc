<template>
  <div class="mainBlock">
    <TheHeader @burger="toggleBurger" />
    <section class="basePadding" :class="{ readyShow: ready }">
      <div class="morePadding">
        <div class="mainItem">
          <div class="mainHeading">AGNC —</div>
          <p class="mainBlockText first">
            Помогаем нашим клиентам обрести лояльную аудиторию и широкую
            узнаваемость, популяризировать их экологические и благотворительные
            инициативы.
          </p>
        </div>
        <div class="mainItem">
          <div class="mainHeading">это</div>
          <div class="mainHeading">креативное</div>
        </div>
        <div class="mainItem">
          <div class="mainHeading">коммуникационное</div>
        </div>
        <div class="mainItem">
          <p class="mainBlockText second">
            Оказываем услуги по разработке креативных концепций для развития
            прогрессивных брендов.
          </p>
          <div class="mainHeading">агентство</div>
        </div>
      </div>
    </section>
    <transition name="toggleDropdown">
      <div class="burger-dropdown" v-show="activeBurger">
        <div class="header-burger">
          <div class="logo-burger">
            <svg
              width="80"
              height="30"
              viewBox="0 0 80 30"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.446 20.147H13.065L15.6 29H17.433L9.633 1.7H7.878L0.078 29H1.911L4.446 20.147ZM4.875 18.509L8.736 4.04L12.597 18.509H4.875ZM28.6074 15.311V16.949H35.2374C35.1984 20.108 34.8474 22.916 32.9754 25.49C31.8444 27.05 30.3624 28.142 28.2174 28.142C26.7354 28.142 25.1364 27.557 23.6934 25.841C21.2364 22.916 20.7684 18.236 20.7684 15.389C20.7684 12.893 21.1194 10.046 21.8604 7.901C23.0694 4.508 25.3314 2.519 28.5684 2.519C30.4014 2.519 32.0784 3.143 33.4824 5.249C34.2234 6.38 34.7304 7.862 34.8474 9.422H36.6024C36.4464 6.77 35.3544 4.04 33.4434 2.441C31.8834 1.154 30.3234 0.880999 28.6464 0.880999C26.0334 0.880999 22.6794 1.427 20.5734 6.341C19.5984 8.642 18.9744 11.528 18.9744 15.428C18.9744 17.729 19.1694 20.108 19.9884 22.643C20.4564 24.164 22.4064 29.78 27.7494 29.78C29.9334 29.78 31.6884 29.039 33.1314 27.401C34.1844 26.231 34.8084 24.827 35.1594 23.891H35.2764V29H36.9924V15.311H28.6074ZM43.3308 4.352L55.0308 29H57.0588V1.7H55.3428V26.348L43.6818 1.7H41.6148V29H43.3308V4.352ZM77.5018 20.342C77.4238 21.707 77.0338 23.462 76.1368 24.983C74.5768 27.635 72.4708 28.181 70.9108 28.181C68.0638 28.181 66.3088 26.075 65.2948 24.203C64.6708 23.033 63.5008 20.42 63.5008 15.077C63.5008 12.503 63.6958 9.5 65.0998 6.692C66.6598 3.572 68.8828 2.519 70.9888 2.519C73.3288 2.519 74.8888 3.728 75.7858 4.976C76.7218 6.263 77.2288 7.979 77.2678 9.578H79.0618C78.9838 8.018 78.5158 4.664 76.1758 2.636C75.2008 1.817 73.5238 0.880999 70.9498 0.880999C68.6098 0.880999 65.8018 1.7 63.7738 5.288C62.0188 8.447 61.7068 12.113 61.7068 14.999C61.7068 20.771 62.9938 23.696 63.5398 24.827C65.6848 29.117 68.6098 29.819 70.8718 29.819C73.6798 29.819 75.5518 28.844 77.0728 26.816C79.0618 24.164 79.2568 20.966 79.2958 20.342H77.5018Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="button-back" @click="closeBurger">
            <p class="back-text text">Назад</p>
            <svg
              width="31"
              height="21"
              viewBox="0 0 31 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10.5H30.5M30.5 10.5C22.5128 10.5221 20.3511 8.5133 21 1M30.5 10.5C22.5272 10.5079 20.1642 12.3511 21 20"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </div>
        <ul class="dropdown-content">
          <li>
            <a class="linkMenu" @click="scrollToAbout">Об агенстве</a>
          </li>
          <li>
            <a class="linkMenu" @click="scrollToServices">Услуги</a>
          </li>
          <li>
            <a class="linkMenu" @click="scrollToInfluencers">Инфлюенсеры</a>
          </li>
          <li>
            <a class="linkMenu" @click="scrollToClients">Партнеры</a>
          </li>
          <li>
            <a class="linkMenu" @click="scrollToContacts">Контакты</a>
          </li>
          <li class="ellipseButton linkMenu" @click="scrollToContacts">
            Оставить заявку
          </li>
          <!-- <base-button @activate="closeBurger">закрыть</base-button> -->
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import TheHeader from "~/components/Navigation/TheHeader";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";
// import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(ScrollToPlugin);
// gsap.registerPlugin(SplitText);
export default {
  name: "MainBlock",
  components: {
    TheHeader
  },
  data() {
    return {
      ready: true,
      activeBurger: false,
      tl: gsap.timeline({ repeat: 0 }),
      headerBurger: gsap.timeline({ repeat: 0 })
    };
  },
  mounted() {
    gsap.from(".mainHeading", {
      delay: 0.2,
      duration: 0.8,
      ease: "power2.out",
      y: 100,
      opacity: 0,
      stagger: 0.15
    });
    gsap.from(".mainBlockText", {
      delay: 1,
      duration: 0.8,
      ease: "power2.out",
      y: 50,
      opacity: 0,
      stagger: 0.15
    });

    this.ready = !this.ready;
  },
  methods: {
    toggleBurger() {
      this.activeBurger = !this.activeBurger;
      this.headerBurger.from(".header-burger", {
        delay: 0.7,
        duration: 0.5,
        ease: "power2.out",

        opacity: 0,
        stagger: 0.3
      });
      this.tl.from(".linkMenu", {
        delay: 1.2,
        duration: 0.5,
        ease: "power2.out",
        y: 200,
        opacity: 0,
        stagger: 0.3
      });
    },
    closeBurger() {
      this.activeBurger = !this.activeBurger;
      this.tl.clear();
      this.headerBurger.clear();
    },
    scrollToAbout() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#about", offsetY: 70 }
      });
      this.activeBurger = !this.activeBurger;
      this.tl.clear();
      this.headerBurger.clear();
    },
    scrollToServices() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#services", offsetY: 70 }
      });
      this.activeBurger = !this.activeBurger;
      this.tl.clear();
      this.headerBurger.clear();
    },
    scrollToInfluencers() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#influencers", offsetY: 70 }
      });
      this.activeBurger = !this.activeBurger;
      this.tl.clear();
      this.headerBurger.clear();
    },
    scrollToClients() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#massMedia", offsetY: 70 }
      });
      this.activeBurger = !this.activeBurger;
      this.tl.clear();
      this.headerBurger.clear();
    },
    scrollToContacts() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#contacts", offsetY: 70 }
      });
      this.activeBurger = !this.activeBurger;
      this.tl.clear();
      this.headerBurger.clear();
    }
  }
  // function() {
  //   gsap.from(".mainHeading", {
  //     scrollTrigger: {
  //       trigger: ".mainHeading",
  //       toggleActions: "restart pause resume reverse",
  //       start: "top 50%"
  //     },
  //     duration: 2,
  //     ease: "circ.out",
  //     y: 100,
  //     opacity: 0,
  //     stagger: 0.2
  //   });
  // },
};
</script>

<style scoped>
.readyShow {
  display: none;
}

.split-line {
  overflow: hidden;
}

.mainBlock {
  background-image: url("~/assets/images/BG.png");
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
}

section {
  margin: auto 0;
  padding-bottom: 40px;
}

.mainItem {
  display: flex;
  align-items: center;
}

.mainItem:nth-child(2) .mainHeading:first-child {
  margin-right: 45px;
}

.mainHeading {
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: 8.438vw;
  line-height: 1;
  color: #141414;
}

.mainBlockText {
  font-weight: 400;
  padding-top: 1.25vw;
  font-size: 1vw;
  line-height: 1;
  box-sizing: border-box;
  width: 22.938vw;
  vertical-align: bottom;
}

.first {
  width: 22.938vw;
  margin-left: 40px;
}

.second {
  width: 12.438vw;
  margin-right: 29px;
}

@media (max-width: 1100px) {
  .mainItem:nth-child(2) .mainHeading:first-child {
    margin-right: 15px;
  }

  /* section {
    margin-top: 144px;
  } */

  .mainHeading {
    font-size: 10.375vw;
  }

  .mainBlockText {
    display: none;
  }

  .mainItem:nth-child(4) {
    justify-content: center;
  }
}

@media (max-width: 800px) {
  .mainItem:nth-child(2) .mainHeading:first-child {
    margin-right: 17px;
  }

  .mainHeading {
    font-size: 11.875vw;
  }

  .linkMenu {
    font-style: normal;
    font-weight: normal;
    font-size: 10vw;
    line-height: 1;
    color: #ffffff;
    text-decoration: none;
  }

  .burger-dropdown {
    display: flex;
    flex-direction: column;
    position: absolute;
    background: #9389d2;
    width: 100%;
    z-index: 1;
    opacity: 1;
    top: 0;
    height: 100vh;
    align-items: center;
  }

  .dropdown-content {
    margin: auto 0;
    display: flex;
    flex-direction: column;
  }

  .toggleDropdown-enter-active,
  .toggleDropdown-leave-active {
    transition: 0.3s ease-in-out;
  }
  .toggleDropdown-enter,
  .toggleDropdown-leave-to {
    opacity: 0;
  }

  .dropdown-content li:not(:last-child) {
    /* display: block; */
    /* text-decoration: none; */
    margin-bottom: 2rem;
  }

  .dropdown-content li {
    align-self: center;
  }

  .logo-burger {
    position: absolute;
    left: 5%;
    top: 5%;
  }
  .button-back {
    display: flex;
    position: absolute;
    right: 5%;
    top: 6%;
  }

  .back-text {
    margin-right: 8px;
    color: white;
    line-height: 1;
    font-family: "Cormorant Garamond", serif;
    font-weight: 500;
    font-size: 22px;
  }

  li.ellipseButton {
    transform: translate(0px, 0px);
    opacity: 1;
    visibility: inherit;
    margin-left: 0;
    color: white;
    font-size: 9vw;
    line-height: 1;
    font-family: "Cormorant Garamond", serif;
    margin-top: 2rem;
  }

  li.ellipseButton::before {
    content: "";
    border: 1px solid white;
    left: 50%;
    height: 4.2rem;
    position: absolute;
    width: 120%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    top: 50%;
  }
}

@media (max-width: 550px) {
  .mainBlock {
    display: flex;
    flex-direction: column;
  }

  section {
    margin: auto 0;
    padding-bottom: 70px;
  }
}

@media (max-width: 640px) {
  .mainBlock {
    background-image: url("~/assets/images/lilBG.png");
  }
}
</style>
