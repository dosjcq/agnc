<template>
  <li class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
      <svg
        width="31"
        height="21"
        viewBox="0 0 31 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="{ rotateArrow: toggleArrow }"
      >
        <path
          d="M0 10.5H30.5M30.5 10.5C22.5128 10.5221 20.3511 8.5133 21 1M30.5 10.5C22.5272 10.5079 20.1642 12.3511 21 20"
          stroke="#414141"
          stroke-width="1.5"
        />
      </svg>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion__content" v-show="visible">
        <ul>
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null,
      toggleArrow: false
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    }
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
        this.toggleArrow = false;
      } else {
        this.Accordion.active = this.index;
        this.toggleArrow = true;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    }
  },
  created() {
    this.index = this.Accordion.count++;
  }
};
</script>

<style lang="css" scoped>
.accordion__item {
  cursor: pointer;
  padding: 10px 0 10px 0;
  border-bottom: 1px solid #333333;
  position: relative;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.rotateArrow {
  transform: rotate(90deg);
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
