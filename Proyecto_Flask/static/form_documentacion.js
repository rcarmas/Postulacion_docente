document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los campos de archivo
    const fileInputs = document.querySelectorAll('input[type="file"]');

    // Agregar un evento change a cada campo de archivo
    fileInputs.forEach(function (input) {
        input.addEventListener("change", function () {
            // Obtener el número de archivos seleccionados para este campo de archivo
            const filesCount = input.files.length;

            // Obtener el span correspondiente al contador para este campo de archivo
            const countSpan = document.getElementById(input.id + "Count");

            // Actualizar el contador con la cantidad de archivos seleccionados
            countSpan.textContent = filesCount;
        });
    });
});