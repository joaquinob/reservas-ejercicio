function toggleReservation(cell) {
    if (cell.classList.contains('available')) {
        cell.classList.remove('available');
        cell.classList.add('reserved');
        cell.textContent = 'Reservado';
    }
     else {
        cell.classList.remove('reserved');
        cell.classList.add('available');
        cell.textContent = 'Disponible';
    }
}

function hoverReservation(cell) {
    if (cell.classList.contains('available')) {
        cell.classList.add('hovering');
        cell.textContent = '¿Reservar?';
    } else{
        cell.classList.contains('reserved');
        cell.classList.add('hovering');
        cell.textContent = '¿Cancelar?'
    }
}

function unhoverReservation(cell) {
    if (cell.classList.contains('hovering')) {
        cell.classList.remove('hovering');
        if (cell.classList.contains('available')) {
            cell.textContent = 'Disponible';
        } else if (cell.classList.contains('reserved')) {
            cell.textContent = 'Reservado';
        }
    }
}
