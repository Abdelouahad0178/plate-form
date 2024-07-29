

  // Données d'exemple pour les espaces disponibles
  const spaces = [
    { name: "Salle Polyvalente", capacity: 100, availability: "Disponible", period: "2/8/2024 à 10/8/2024" },
    { name: "Salle de Conférence", capacity: 50, availability: "Occupée", period: "31/7/2024 à 10/8/2024" },
    { name: "Salle de Réunion", capacity: 20, availability: "Disponible", period: "12/8/2024 à 31/8/2024" },
  ];

  // Fonction pour peupler le tableau avec les données des espaces
  function populateSpacesTable() {
    const tableBody = document.querySelector('#spaces-table tbody');
    spaces.forEach(space => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${space.name}</td>
        <td>${space.capacity}</td>
        <td>${space.availability}</td>
        <td>${space.period}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  // Appeler la fonction pour peupler le tableau lorsque la page est chargée
  populateSpacesTable();
;
