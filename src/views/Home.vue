<template>
  <section>
    <h1>Titulo Bonito</h1>
    <Buscar />
    <Lista />
  </section>
</template>

<script>
import Buscar from "@/components/Buscar.vue";
import Lista from "@/components/Lista.vue";

export default {
  name: "Home",
  components: {
    Buscar,
    Lista,
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: #84f;
  margin-top: 40px;
  text-align: center;
}
</style>