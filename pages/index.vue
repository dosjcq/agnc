<template>
  <div>
    <MainBlock />
    <AboutBlock />
    <CeoBlock />
    <ServicesBlock />
    <SmmBlock />
    <OurValuesBlock />
    <SwiperBlock />

    <MassMediaBlock />
    <ClientsBlock />
    <ContactsBlock />
    <Footer />
  </div>
</template>

<script>
import "reseter.css";
import MainBlock from "~/components/Blocks/MainBlock/MainBlock";
import AboutBlock from "~/components/Blocks/AboutBlock/AboutBlock";
import CeoBlock from "~/components/Blocks/CeoBlock/CeoBlock";
import ServicesBlock from "~/components/Blocks/ServicesBlock/ServicesBlock";
import SmmBlock from "~/components/Blocks/SmmBlock/SmmBlock";
import OurValuesBlock from "~/components/Blocks/OurValuesBlock/OurValuesBlock";
import SwiperBlock from "~/components/Blocks/SwiperBlock/SwiperBlock";
import MassMediaBlock from "~/components/Blocks/MassMediaBlock/MassMedia";
import ClientsBlock from "~/components/Blocks/ClientsBlock/ClientsBlock";
import ContactsBlock from "~/components/Blocks/ContactsBlock/ContactsBlock";
import Footer from "~/components/Footer/Footer";

// import "swiper/css";

export default {
  components: {
    MainBlock,
    AboutBlock,
    CeoBlock,
    ServicesBlock,
    SmmBlock,
    OurValuesBlock,
    SwiperBlock,

    MassMediaBlock,
    ClientsBlock,
    ContactsBlock,
    Footer
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
