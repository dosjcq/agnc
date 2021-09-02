<template>
  <header>
    <div class="logo">
      <img src="~/assets/images/AGNC.svg" alt="AGNC" />
    </div>
    <div class="navigation">
      <ul class="textManrope">
        <li @click="scrollToAbout">Об агенстве</li>
        <li @click="scrollToServices">Услуги</li>
        <li @click="scrollToInfluencerst">Инфлюенсеры</li>
        <li @click="scrollToClients">Партнеры</li>
      </ul>
      <base-button class="wideDispaly">Оставить заявку</base-button>
      <base-button class="smallDisplay">Меню</base-button>
    </div>
  </header>
</template>

<script>
import BaseButton from "~/components/BaseComponents/BaseButton";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";

gsap.registerPlugin(ScrollToPlugin);

export default {
  name: "TheHeader",
  components: {
    BaseButton
  },
  methods: {
    scrollToAbout() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#about", offsetY: 70 },
        offsetY: -70
      });
    },
    scrollToServices() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#services", offsetY: 70 },
        offsetY: -70
      });
    },
    scrollToInfluencerst() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#influencers", offsetY: 70 },
        offsetY: -70
      });
    },
    scrollToClients() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#massMedia", offsetY: 70 }
      });
    }
  }
};
</script>

<style lang="css" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10.938vw;
  padding-top: 20px;
}

.navigation {
  display: flex;
  align-items: center;
}

ul {
  display: flex;
}

li {
  list-style: none;
  margin-right: 30px;
  font-weight: 400;
  line-height: 27px;
  font-size: 18;
  cursor: pointer;
}

.smallDisplay {
  display: none;
}

@media (max-width: 1100px) {
  header {
    margin: 0 30px;
  }

  li:nth-child(3) {
    display: none;
  }
}

@media (max-width: 800px) {
  header {
    margin: 0 15px;
  }

  ul {
    display: none;
  }

  .wideDispaly {
    display: none;
  }

  .smallDisplay {
    display: block;
  }
}

/* @media (max-width: 480px) {
  ul {
    display: none;
  }

  .wideDispaly {
    display: none;
  }

  .smallDisplay {
    display: block;
  }
} */
</style>
