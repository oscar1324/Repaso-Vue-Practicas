<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                  <form @submit.prevent="enviarFormulario">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                            <label>Nombre</label>
                            <input
                                v-model="persona.nombre"
                                type="text"
                                class="form-control"
                                :class="{ 'is-invalid': procesando && nombreInvalido }"
                                @focus="resetEstado"
                                
                            />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                            <label>Apellido</label>
                            <input
                                v-model="persona.apellido"
                                type="text"
                                class="form-control"
                                :class="{ 'is-invalid': procesando && apellidoInvalido }"
                                @focus="resetEstado"
                            
                            />
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                            <button class="btn btn-primary">Añadir persona</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                        <div class="col-md-12">
                            <div v-if="error && procesando" class="alert alert-danger" role="alert">
                            Debes rellenar todos los campos!
                            </div>
                            <div v-if="correcto" class="alert alert-success" role="alert">
                            La persona ha sido agregada correctamente!
                            </div>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>;
</template>

<script>
import NuevoContenido from '../components/NuevoContenido.vue';
import NuevoComponente from '../components/NuevoContenido.vue';
export default {
  components: { NuevoContenido },
    data(){
        return{
            procesado: false,
            correcto: false,
            error:false,
            persona: {
                nombre: '',
                apellido: '',
            }
        }
    },

    methods: {
       enviarFormulario() {
            this.procesando = true;
            this.resetEstado();
            
            // Comprobamos la presencia de errores
            
                if (this.nombreInvalido || this.apellidoInvalido || this.emailInvalido) {
            this.error = true;
            return;
            } 
            
            console.log("Simulación de petición");

            this.error = false;
            this.correcto = true;
            this.procesando = false;

            // Restablecemos el valor de la variables
            console.log("OBJETO: " , this.persona);
        },
        resetEstado() {
            this.correcto = false;
            this.error = false;
        }
    },
}
</script>