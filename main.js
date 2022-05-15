// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

// 1. Creo un array che contiene le informazioni di ogni membro del teamMembers, ognuno in un oggetto
const teamMembers = [
    {
        name: "Wanye Barnett",
        proPic: "https://picsum.photos/400",
        role: "Founder & CEO"
    },
    {
        name: "Angela Caroll",
        proPic: "https://picsum.photos/400",
        role: "Chief Editor"
    },    
    {
        name: "Walter Gordon",
        proPic: "https://picsum.photos/400",
        role: "Office Manager"
    },    
    {
        name: "Angela Lopez",
        proPic: "https://picsum.photos/400",
        role: "Social Media Manager"
    },    
    {
        name: "Ivan Perisic",
        proPic: "https://picsum.photos/400",
        role: "Developer"
    },    
    {
        name: "Barbara Ramos",
        proPic: "https://picsum.photos/400",
        role: "Graphic Designer"
    },
]
// 2. Estrapolo dall'HTML il container in cui inserire le card dei membri del team
const teamMembersContainer = document.querySelector(".team-container")
// 3. Creo per ogni membro del team una card con le informazioni dinamiche da incollare nell'HTML 
for (let i = 0; i < teamMembers.length; i++) {
    const teamCard = `
    <div class="team-card">
    <div class="card-image">
      <img src=${teamMembers[i].proPic}/>
    </div>
    <div class="card-text">
      <h3>${teamMembers[i].name}</h3>
      <p>${teamMembers[i].role}</p>
    </div>
  </div>
  `
// 3b. Incollo le card nell'HTML
teamMembersContainer.innerHTML += teamCard
}
