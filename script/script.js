function mostrarAlerta() {
    Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: '¡Gracias por contactarnos!',
        confirmButtonText: 'Aceptar'
    });

    setTimeout(() => {
        document.querySelector("form").submit();
    }, 5000); 
    return false; 
}

