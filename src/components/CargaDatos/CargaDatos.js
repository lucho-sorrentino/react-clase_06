// Agregar los props necesarios, junto con las proptypes
//
const CargaDatos = (props) => {
  // En caso que el usuario presione el botón "Agregar al carrito"
  // Valida lo siguiente:
  //    La Herramienta no puede ser vacía
  //    El precio unitario no puede:
  //        Ni estar vacío
  //        Ni ser cero
  //    La cantidad no puede:
  //        Ni estar vacía
  //        Ni estar en cero
  // Si ocurre alguna de éstas, mostrá el error SOLO en la ubicación pertinente.
  // Si había un error pero se solucionó entonces no debe quedar ninguna advertencia

  return (
    <>
      <span>Herramienta: </span>
      <input placeholder="Llave de tubo" />
      <span>Precio Unitario: </span>
      <input placeholder="2500" />
      <span>Cantidad: </span>
      <input placeholder="1" />
      <button> Agregar al carrito</button>
    </>
  );
};

export default CargaDatos;
