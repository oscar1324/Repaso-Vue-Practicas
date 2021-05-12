<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h1>Galeria de rutas:</h1>

                <router-link :to="{ name: 'rutas', params: {id: cadaRuta}}"
                v-for="cadaRuta, index of RutasArreglo" :key="index">
                    <button type="button" class="btn btn-success">Boton {{cadaRuta}}</button>
                </router-link>


                <!-- -------------------------------------------- -->
                <Ruta />

                <hr>
                <h3>Peticiones:</h3>
                <button type="button" class="btn btn-success" @click="listar()">Listar</button> -
                <button type="button" class="btn btn-primary" @click="agregar()">agregar</button> -
                <button type="button" class="btn btn-success" @click="actualizar()">actualizar</button> -
                <button type="button" class="btn btn-danger" @click="borrar()">borrar</button>
                <hr>
                
                <!-- ----------------------------------------------- -->
                <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationCustom01">First name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom02">Last name</label>
      <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustomUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
        </div>
        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
    <div class="form-row">
        <div class="col-md-6 mb-3">
        <label for="validationCustom03">City</label>
        <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
        <div class="invalid-feedback">
            Please provide a valid city.
        </div>
        </div>
        <div class="col-md-3 mb-3">
        <label for="validationCustom04">State</label>
        <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
        <div class="invalid-feedback">
            Please provide a valid state.
        </div>
        </div>
        <div class="col-md-3 mb-3">
        <label for="validationCustom05">Zip</label>
        <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
        <div class="invalid-feedback">
            Please provide a valid zip.
        </div>
        </div>
    </div>
    <div class="form-group">
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
        <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
        </label>
        <div class="invalid-feedback">
            You must agree before submitting.
        </div>
        </div>
    </div>
    <button class="btn btn-primary" type="submit" @click="comprobar()">Submit form</button>
    </form>
            </div>
        </div>
    </div> <hr>


okokko

    <form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationServer01">First name</label>
      <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServer02">Last name</label>
      <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationServerUsername">Username</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required>
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationServer03">City</label>
      <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="City" required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer04">State</label>
      <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="State" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationServer05">Zip</label>
      <input type="text" class="form-control is-invalid" id="validationServer05" placeholder="Zip" required>
      <div class="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>

  <hr>


    <div class="custom-control custom-radio">
    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio1">MÁS DE 100 METROS</label>
    </div>
    <div class="custom-control custom-radio">
    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="customRadio2">MÁS DE 200 METROS</label>
    </div>

    <div class="custom-control custom-radio">
        <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
        <label class="custom-control-label" for="customRadio2">MÁS DE 300 METROS</label>
    </div>


    <hr>
    <a href="download/acme-doc-2.0.1.txt" download="Acme Documentation (ver. 2.0.1).txt">Download Text</a>
    <hr>

    <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip01">First name</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltip02">Last name</label>
      <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>

  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>

</form>
</template>

<script>
import axios from 'axios';
import Ruta from '../components/Rutita';
export default {
    name: 'rutas',
    data(){
        return{
            mostrar: false,
             activeName: 'first',
            RutasArreglo: [1,2,3,4],
            persona: {
                nombre: '',
                apellido: '',
                email: '',
            }
        }
    },
 
    components: {
        Ruta
    },

    methods: {
        comprobar(){
            
        },



        // ODS Components
        handleClick(tab, event) {
            console.log("Click aquí")
            console.log(tab, event)
        },

        listar(){
         axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
         console.log(result.data);
         })

        },

        agregar(){

        },

        actualizar(){
              let post = {
                title: 'OSCAR',
                body: 'IZQUIERDO',
                userId: 1
            };
            axios.put("https://jsonplaceholder.typicode.com/posts/1", post).then((result) => {
                console.log(result);
            });

        },

        borrar(){
            axios.delete("https://jsonplaceholder.typicode.com/todos/1");
            console.log("Borrado");
        }

        }
}
</script>

<style scoped>
.probar{
    background-color: red;
}
</style>