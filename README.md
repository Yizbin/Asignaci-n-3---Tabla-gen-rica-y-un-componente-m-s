## Preguntas de la Asignación 3

### Parte A: Tabla Genérica
* **¿Por qué esta tabla se puede llamar «genérica»?**  
  Porque no está acoplada a ningún tipo de dato en particular. Funciona de manera agnóstica recibiendo un esquema de columnas (`clave` y `titulo`) y una lista de objetos.
* **¿Qué tendría que cambiar para mostrar alumnos en lugar de productos?**  
  Únicamente la propiedad `columnas` que se le pasa al componente (por ejemplo: `[{clave: 'matricula', titulo: 'Matrícula'}, {clave: 'nombre', titulo: 'Alumno'}]`) y el arreglo de objetos pasados a `filas`. El código interno del componente no requiere modificación alguna.

### Parte B: Componente `<contador-cantidad>`
* **Contrato del componente:**
  * **Qué recibe:** Atributos/Propiedades `valor` (cantidad actual), `min` (límite inferior) y `max` (límite superior).
  * **Qué avisa:** Emite un evento personalizado de DOM llamado `cambio-cantidad` que incluye en su propiedad `detail` la nueva cantidad (`{ cantidad: number }`).
  * **Qué guarda adentro:** Mantiene en su estado interno y atributos la cantidad seleccionada y las restricciones de rango de incremento/decremento.
