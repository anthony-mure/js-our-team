const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//recupero gli elementi dal dom che mi servono

const teamContainer = document.getElementById('team-members');

//creare funzione che genera la struttura delle card
//creare dentro la funzione una variabile con dentro l'html delle informazioni delle card

const generateCard = (members) => {
    
  const membersCard = ` <div class="col-12 col-md-4">
        <div class="card mb-3" >
          <div class="row g-0">
              <div class="col-md-4">
                 <img src= "./${members.img}" alt="" class="img-fluid">
              </div>
              <div class="col-md-8 bg-dark text-white">
               <div class="card-body">
                 <h5 class="card-title"><strong> ${members.name}</strong></h5>
                 <p class="card-text"> ${members.role}</p>
                 <p class="card-text text-primary"> ${members.email}</p>
               </div>
             </div>
          </div>
        </div>
      </div> `

      return membersCard;

}

//ciclare l'array di oggetti 
//richiamre dentro il ciclo la funzione che genere le card 
//e iniettare nell'html le card generate

for(let i=0 ; i < teamMembers.length ; i++){

   let card = generateCard(teamMembers[i]);

   teamContainer.innerHTML += card;
}