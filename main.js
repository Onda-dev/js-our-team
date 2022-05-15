// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.

// 1. Creo un array che contiene le informazioni di ogni membro del teamMembers, ognuno in un oggetto
const teamMembers = [
    {
        name: "Wanye Barnett",
        proPic: "https://i.picsum.photos/id/548/200/200.jpg?hmac=OSCQ-YL2a-5iYm7-5vVwigtt78bNIZFxNRaWP8pZ_bw",
        role: "Founder & CEO"
    },
    {
        name: "Angela Caroll",
        proPic: "https://i.picsum.photos/id/548/200/200.jpg?hmac=OSCQ-YL2a-5iYm7-5vVwigtt78bNIZFxNRaWP8pZ_bw",
        role: "Chief Editor"
    },    
    {
        name: "Walter Gordon",
        proPic: "https://i.picsum.photos/id/548/200/200.jpg?hmac=OSCQ-YL2a-5iYm7-5vVwigtt78bNIZFxNRaWP8pZ_bw",
        role: "Office Manager"
    },    
    {
        name: "Angela Lopez",
        proPic: "https://i.picsum.photos/id/548/200/200.jpg?hmac=OSCQ-YL2a-5iYm7-5vVwigtt78bNIZFxNRaWP8pZ_bw",
        role: "Social Media Manager"
    },    
    {
        name: "Ivan Perisic",
        proPic: "https://i.picsum.photos/id/548/200/200.jpg?hmac=OSCQ-YL2a-5iYm7-5vVwigtt78bNIZFxNRaWP8pZ_bw",
        role: "Developer"
    },    
    {
        name: "Barbara Ramos",
        proPic: "https://i.picsum.photos/id/548/200/200.jpg?hmac=OSCQ-YL2a-5iYm7-5vVwigtt78bNIZFxNRaWP8pZ_bw",
        role: "Graphic Designer"
    },
]