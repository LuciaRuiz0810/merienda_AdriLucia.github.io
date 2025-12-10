<template>
  <header>
    <h1>Planificador de Gastos</h1>
  </header>
  
  <div class="contenedor-header contenedor sombra" v-if="presupuesto === 0">
    <Presupuesto @definir-presupuesto="definirPresupuesto" />
  </div>
  
  <div v-else class="contenedor sombra contenedor">
    <ControlPresupuesto 
      :presupuesto="presupuesto" 
      :disponible="disponible" 
      :gastado="gastado" 
    />
  </div>
  
  <main v-if="presupuesto > 0">
    <div class="crear-gasto">
      <img src="./assets/nuevo-gasto.svg" alt="icono nuevo gasto">
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import Presupuesto from './components/Presupuesto.vue'
import ControlPresupuesto from './components/ControlPresupuesto.vue'

export default {
  name: 'App',
  components: {
    Presupuesto,
    ControlPresupuesto
  },
  setup() {
    const presupuesto = ref(0)
    const disponible = ref(0)
    const gastado = ref(0)
    
    const definirPresupuesto = (cantidad) => {
      presupuesto.value = cantidad
      disponible.value = cantidad
    }
    
    return {
      presupuesto,
      disponible,
      gastado,
      definirPresupuesto
    }
  }
}
</script>

<style>
:root{
  --azul: #3b82f6;
  --blanco: #FFF;
  --gris-claro: #F5F5F5;
  --gris: #94a3b8;
  --gris-oscuro: #64748b;
  --negro: #000;
}

html{
  font-size: 62.5%;
  box-sizing: border-box;
}

*,
*:before,
*:after{
  box-sizing: inherit;
}

body{
  font-size: 1.6rem;
  font-family: "Lato", sans-serif;
  background-color: var(--gris-claro);
}

h1{
  font-size: 4rem;
}

h2{
  font-size: 3rem;
}

header{
  background-color: var(--azul);
}

header h1{
  padding: 3rem 0;
  margin: 0;
  color: var(--blanco);
  text-align: center;
}

.contenedor{
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
}

.contenedor-header{
  margin-top: -5rem;
  transform: translateY(5rem);
  padding: 5rem;
}

.sombra{
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  background-color: var(--blanco);
  border-radius: 1.2rem;
  padding: 5rem;
}

.crear-gasto{
  position:fixed;
  bottom: 5rem;
  right: 5rem;
}

.crear-gasto img {
  width: 5rem;
  cursor:pointer;
}
</style>