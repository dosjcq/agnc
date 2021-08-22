<template>
  <div class="clientsBlock">
    <div class="basePadding">
      <div class="morePadding">
        <div class="clientsContent">
          <div class="clientsHeading">
            <h2>Клиенты</h2>
            <p class="text">
              Также AGNC планирует развивать диджитальную pop-up галерею для
              артистов разных жанров
            </p>
          </div>
          <div class="clientsAgencies">
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/Exalter-1 1.png"
                alt="EXALTER"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/perface.png"
                alt="perface"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/sibolle.png"
                alt="sibolle"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/MAISON_SYBARITE.png"
                alt="MAISON SYBARITE"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/DN.png"
                alt="Дари Надежду"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/RosesLace.png"
                alt="Roces Lace"
              />
            </div>
            <div class="clientsLogos">
              <img
                src="~/assets/images/Logo/Клиенты/apeiron.png"
                alt="apeiron"
              />
            </div>
            <div class="clientsLogos">
              <img src="~/assets/images/Logo/Клиенты/almond.png" alt="almond" />
            </div>
            <div class="clientsLogos">
              <img src="~/assets/images/Logo/Клиенты/sculpt.png" alt="sculpt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clientsBlock {
  margin-top: 250px;
}

.clientsContent {
  display: flex;
  align-items: flex-start;
}

.clientsHeading {
  width: 50%;
}

p.text {
  max-width: 24.125vw;
}

.clientsAgencies {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 65px;
  align-items: center;
}
</style>
