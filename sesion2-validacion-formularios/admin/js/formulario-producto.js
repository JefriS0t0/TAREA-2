// Se hizo una correcion en la linea 122 del archivo nuevoproducto.html , ya que el ID y Name no coincidian para hacer las validaciones
const formulario = document.getElementById("formulario-producto");
const inputs = document.querySelectorAll("#formulario-producto input");
const selects = document.querySelectorAll("#formulario-producto select");

const expresiones = {
  //Corregida la version principal (REPETIA inputProducto 2 veces)
  inputModelo: /^[0-9]{1,6}$/,
  inputProducto: /^.{4,40}$/,
  inputDetalle: /^.{10,100}$/,
  inputPeso: /^[0-9.]{1,6}$/,
  inputMaterial: /^.{1,15}$/,
  inputStock: /^[0-9]{1,6}$/,
};

const campos = {
  //Corregida la version principal (REPETIA inputProducto 2 veces)
  inputProducto: false,
  inputModelo: false,
  inputDetalle: false,
  inputPeso: false,
  inputMaterial: false,
  inputStock: false,
};

// const validarCampo = (expresion, input, campo) => {

//   //   if (expresion.test(input.value)) {
//   //     document.getElementById(`${campo}`).classList.add("is-valid");
//   //     document.getElementById(`${campo}`).classList.remove("is-invalid");
//   //     campos[campo] = true;
//   //   } else {
//   //     document.getElementById(`${campo}`).classList.add("is-invalid");
//   //     document.getElementById(`${campo}`).classList.remove("is-valid");
//   //     campos[campo] = false;
//   //   }
// };

// CONVIRITIENDO LA FUNCION "validarCampo" A SU FORMA DE FUNCION BASICA Y LA CONDICIONAL CONVIRTIENDOLO A SU FORMA EN TENARIA
function validarCampo(expresion, input, campo) {
  expresion.test(input.value)
    ? (document.getElementById(`${campo}`).classList.add("is-valid"),
      document.getElementById(`${campo}`).classList.remove("is-invalid"),
      campos[campo] == true)
    : (document.getElementById(`${campo}`).classList.add("is-invalid"),
      document.getElementById(`${campo}`).classList.remove("is-valid"),
      campos[campo] == false);
}

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "inputProducto":
      validarCampo(expresiones.inputProducto, e.target, "inputProducto");
      break;
    case "inputModelo":
      validarCampo(expresiones.inputModelo, e.target, "inputModelo");
      break;
    //Corregida la version principal (REPETIA el case "validarCampo" de inputProducto 2 veces )
    case "inputDetalle":
      validarCampo(expresiones.inputDetalle, e.target, "inputDetalle");
      break;
    case "inputPeso":
      validarCampo(expresiones.inputPeso, e.target, "inputPeso");
      break;
    case "inputMaterial":
      validarCampo(expresiones.inputMaterial, e.target, "inputMaterial");
      break;
    case "inputStock":
      validarCampo(expresiones.inputStock, e.target, "inputStock");
      break;
    case "inputTalla":
      //   if (e.target.value !== "") {
      //     document.getElementById("inputTalla").classList.remove("is-invalid");
      //     document.getElementById("inputTalla").classList.add("is-valid");
      //   } else {
      //     document.getElementById("inputTalla").classList.remove("is-valid");
      //     document.getElementById("inputTalla").classList.add("is-invalid");
      //   }
      // CONVIRTIENDO A SU FORMA TERNARIA
      e.target.value !== ""
        ? (document.getElementById("inputTalla").classList.remove("is-invalid"),
          document.getElementById("inputTalla").classList.add("is-valid"))
        : (document.getElementById("inputTalla").classList.remove("is-valid"),
          document.getElementById("inputTalla").classList.add("is-invalid"));
      break;

    
    case "inputImagen":
      // if (e.target.value !== "") {
      //     document.getElementById("entradaImagen").classList.remove("is-invalid");
      //     document.getElementById("entradaImagen").classList.add("is-valid");
      //   } else {
      //     document.getElementById("entradaImagen").classList.remove("is-valid");
      //     document.getElementById("entradaImagen").classList.add("is-invalid");
      //   }
      //   break;
      // CONVIRTIENDO A SU FORMA TERNARIA
      e.target.value !== ""
        ? (document.getElementById("inputImagen").classList.remove("is-invalid"),
          document.getElementById("inputImagen").classList.add("is-valid"))
        : (document.getElementById("inputImagen").classList.remove("is-valid"),
          document.getElementById("inputImagen").classList.add("is-invalid"));
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

selects.forEach((select) => {
  console.log(select);
  select.addEventListener("blur", validarFormulario);
});
