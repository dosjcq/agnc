<template>
  <header>
    <div class="logo">
      <img src="~/assets/images/AGNC.svg" alt="AGNC" />
    </div>
    <div class="navigation">
      <ul class="textManrope">
        <li @click="scrollToAbout">Об агентстве</li>
        <li @click="scrollToServices">Услуги</li>
        <li @click="scrollToInfluencers">Инфлюенсеры</li>
        <li @click="scrollToClients">Партнеры</li>
        <li class="ellipseButton" @click="scrollToContacts">Оставить заявку</li>
      </ul>
      <li class="ellipseButton smallDisplay" @click="toggleBurger">Меню</li>
      <!-- <base-button class="wideDispaly">Оставить заявку</base-button>
      <base-button class="smallDisplay" @activate="toggleBurger"
        >Меню</base-button
      > -->
    </div>
  </header>
</template>

<script>
// import BaseButton from "~/components/BaseComponents/BaseButton";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin.js";

gsap.registerPlugin(ScrollToPlugin);

export default {
  name: "TheHeader",
  components: {
    // BaseButton
  },
  data() {
    return {
      activeBurger: false
    };
  },
  methods: {
    toggleBurger() {
      this.$emit("burger");
    },
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
    scrollToInfluencers() {
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
    },
    scrollToContacts() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#contacts", offsetY: 70 }
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

.textManrope {
  display: flex;
}

li {
  list-style: none;
  margin-right: 30px;
  font-weight: 400;
  line-height: 27px;
  font-size: 18px;
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

  .textManrope {
    display: none;
  }

  .wideDispaly {
    display: none;
  }

  .smallDisplay {
    display: inline-block;
  }

  li.ellipseButton::before {
    width: 250%;
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
