const tablaCarrito = document.querySelector('tabla-generica') as any;

tablaCarrito.columnas = [
  { clave: 'nombre', titulo: 'Producto' },
  { clave: 'precio', titulo: 'Precio' },
  { clave: 'cantidad', titulo: 'Cantidad' }
];

function actualizarCarritoHTML(productosCarrito: Array<{nombre: string, precio: number, cantidad: number}>) {
  tablaCarrito.filas = productosCarrito.map(item => ({
    nombre: item.nombre,
    precio: `$${item.precio.toFixed(2)}`,
    cantidad: item.cantidad
  }));
}

document.addEventListener('cambio-cantidad', (e: Event) => {
  const customEv = e as CustomEvent<{ cantidad: number }>;
  console.log('Nueva cantidad seleccionada:', customEv.detail.cantidad);
});
