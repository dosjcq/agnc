<template>
  <div>
    <MainBlock />
    <AboutBlock />
    <CeoBlock />
    <ServicesBlock />
    <SmmBlock />
    <OurValuesBlock />
    <MassMediaBlock />
    <ClientsBlock />
    <ContactsBlock />
    <Footer />
  </div>
</template>

<script>
import MainBlock from "~/components/Blocks/MainBlock/MainBlock";
import AboutBlock from "~/components/Blocks/AboutBlock/AboutBlock";
import CeoBlock from "~/components/Blocks/CeoBlock/CeoBlock";
import ServicesBlock from "~/components/Blocks/ServicesBlock/ServicesBlock";
import SmmBlock from "~/components/Blocks/SmmBlock/SmmBlock";
import OurValuesBlock from "~/components/Blocks/OurValuesBlock/OurValuesBlock";
import MassMediaBlock from "~/components/Blocks/MassMediaBlock/MassMedia";
import ClientsBlock from "~/components/Blocks/ClientsBlock/ClientsBlock";
import ContactsBlock from "~/components/Blocks/ContactsBlock/ContactsBlock";
import Footer from "~/components/Footer/Footer";

export default {
  components: {
    MainBlock,
    AboutBlock,
    CeoBlock,
    ServicesBlock,
    SmmBlock,
    OurValuesBlock,
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
