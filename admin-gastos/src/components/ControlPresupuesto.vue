<template>
  <div class="dos-columnas">
    <div class="contenedor-grafico">
      <img :src="imagen" alt="Gráfico de gastos">
    </div>
    <div class="contenedor-presupuesto">
      <button class="reset-app">Resetear app</button>
      <p>Presupuesto: <span>{{ formatearPrecio(presupuesto) }}</span></p>
      <p>Disponible: <span>{{ formatearPrecio(disponible) }}</span></p>
      <p>Gastado: <span>{{ formatearPrecio(gastado) }}</span></p>
    </div>
  </div>
</template>

<script>
import imagen from '../assets/grafico.jpg'
import { formatearPrecio } from '../helpers'

export default {
  name: 'ControlPresupuesto',
  props: {
    presupuesto: {
      type: Number,
      required: true
    },
    disponible: {
      type: Number,
      required: true
    },
    gastado: {
      type: Number,
      required: true
    }
  },
  setup() {
    return {
      imagen,
      formatearPrecio
    }
  }
}
</script>

<style scoped>
.dos-columnas{
  display: flex; 
  flex-direction: column;
}

.dos-columnas > :first-child{
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .dos-columnas {
    flex-direction: row;
    gap: 4rem;
    align-items: center;
  }
  .dos-columnas > :first-child{
    margin-bottom: 0;
  }
}

.reset-app {
  background-color: #DB2777;
  border: none;
  padding: 1rem;
  width: 100%;
  color: var(--blanco);
  font-weight: 900;
  text-transform: uppercase;
  border-radius: 1rem;
  transition-property: background-color;
  transition-duration: 300ms;
}

.reset-app:hover {
  cursor: pointer;
  background-color: #c11d67;
}

.contenedor-presupuesto {
  width: 100%;
}

.contenedor-presupuesto p {
  font-size: 2.4rem;
  text-align:center;
  color: var(--gris-oscuro);
}

@media (min-width: 768px){
  .contenedor-presupuesto p {
    text-align:left;
  } 
}

.contenedor-presupuesto span {
  font-weight: 900;
  color: var(--azul);
}
</style>