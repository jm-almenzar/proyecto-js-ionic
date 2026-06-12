// vim: set ft=javascript noet ts=3 sw=3:

function validateTaskFunction (task) {

   const errores = [];

   const categoriasValidas = [
      "Película",
      "Videojuego",
      "Libro",
      "Disco"
   ];

   const generosValidos = [
      "Ciencia Ficción",
      "Acción-Aventura",
      "Fantasía",
      "Cyberpunk"
   ];

   if (
      !task.nombre ||
      task.nombre.trim().length < 3
   ) {
      errores.push(
         "El nombre debe tener al menos 3 caracteres."
      );
   }

   if (
      task.nombre &&
      task.nombre.length > 60
   ) {
      errores.push(
         "El nombre no puede superar los 60 caracteres."
      );
   }

   // if (
   //    task.nombre &&
   //    task.nombre.toLowerCase().includes("urgente")
   // ) {
   //    errores.push(
   //       "No escribas 'urgente' en el título. Usa la prioridad alta."
   //    );
   // }

   // if (
   //    task.descripcion &&
   //    task.descripcion.length > 300
   // ) {
   //    errores.push(
   //       "La descripción no puede superar los 300 caracteres."
   //    );
   // }

   // if (
   //    !/^TAR-[0-9]{3}$/.test(
   //       task.codigo ?? ""
   //    )
   // ) {
   //    errores.push(
   //       "El código debe tener formato TAR-001."
   //    );
   // }

   if (
      !categoriasValidas.includes(
         task.categoria
      )
   ) {
      errores.push(
         "La categoría no es válida."
      );
   }

   if (
      !generosValidos.includes(
         task.genero
      )
   ) {
      errores.push(
         "El genero no es válido."
      );
   }

   // const fechaLimite =
   //    new Date(
   //       task.fechaLimite
   //    );

   // const hoy = new Date();

   // hoy.setHours(
   //    0,
   //    0,
   //    0,
   //    0
   // );

   // if (
   //    Number.isNaN(
   //       fechaLimite.getTime()
   //    )
   // ) {
   //    errores.push(
   //       "La fecha límite no es válida."
   //    );
   // }
   // else if (
   //    fechaLimite < hoy
   // ) {
   //    errores.push(
   //       "La fecha límite no puede ser anterior a hoy."
   //    );
   // }

   const valoracion =
      Number(
         task.valoracion
      );

   if (
      Number.isNaN(
         valoracion
      ) ||
      valoracion < 1 ||
      valoracion > 5
   ) {
      errores.push(
         "La valoración debe estar entre 1 y 5."
      );
   }

   task.imagen = "img/" + task.imagen;

   // if (
   //    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
   //       task.responsableEmail ?? ""
   //    )
   // ) {
   //    errores.push(
   //       "El email del responsable no es válido."
   //    );
   // }

   // const etiquetasRecibidas =
   //    Array.isArray(
   //       task.etiquetas
   //    )
   //       ? task.etiquetas
   //       : task.etiquetas
   //          ? [
   //               task.etiquetas
   //            ]
   //          : [];

   // const hayEtiquetaInvalida =
   //    etiquetasRecibidas.some(
   //       etiqueta =>
   //          !etiquetasValidas.includes(
   //             etiqueta
   //          )
   //    );

   // if (
   //    hayEtiquetaInvalida
   // ) {
   //    errores.push(
   //       "Alguna etiqueta no es válida."
   //    );
   // }

   // if (
   //    task.confirmacion !== "on"
   // ) {
   //    errores.push(
   //       "Debes confirmar que los datos son correctos."
   //    );
   // }

   return errores;

}

export default validateTaskFunction; 