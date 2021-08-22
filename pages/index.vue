<template>
  <div>
    <MainBlock />
    <AboutBlock />
    <CeoBlock />
    <ServicesBlock />
    </div>
</template>

<script>
import MainBlock from "~/components/Blocks/MainBlock/MainBlock";
import AboutBlock from "~/components/Blocks/AboutBlock/AboutBlock";
import CeoBlock from "~/components/Blocks/CeoBlock/CeoBlock";
import ServicesBlock from "~/components/Blocks/ServicesBlock/ServicesBlock";

export default {
  components: {
    MainBlock,
    AboutBlock,
    CeoBlock,
    ServicesBlock
  }
}
</script>


<style >
  body {
    
    margin: 0;
  }
</style>