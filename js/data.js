document.addEventListener('DOMContentLoaded', () => {
    const showData = document.getElementById('data');
    
    // Obtener el dato almacenado
    const dato = localStorage.getItem('dato');
    
    // Mostrar el dato o un mensaje alternativo si no hay dato
    showData.innerText = dato ? dato : 'No hay datos disponibles';
});