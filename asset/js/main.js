let team = [
    {
        'Nome' : 'Wayne Barnett',
        'Ruolo' : 'Founder & CEO',
        'Img' : 'founderCeo.jpg'
    },
    {
        'Nome' : 'Angela Carrol',
        'Ruolo' : 'Chief Editor',
        'Img' : 'chiefEditor.jpg'
    },
    {
        'Nome' : 'Walter Gordon',
        'Ruolo' : 'Office Manager',
        'Img' : 'officeManager.jpg'
    },
    {
        'Nome' : 'Angela Lopez',
        'Ruolo' : 'Social Media Manager',
        'Img' : 'socialMM.jpg'
    },
    {
        'Nome' : 'Scott Estrada',
        'Ruolo' : 'Developer',
        'Img' : 'developer.jpg'
    },
    {
        'Nome' : 'Barbara Ramos',
        'Ruolo' : 'Graphic Designer',
        'Img' : 'graphicDesigner.jpg'
    },
    {
        'Nome' : 'John Tish',
        'Ruolo' : 'Chief Marketing Officer',
        'Img' : 'chiefMarketingOfficer.jpg'
    },
    {
        'Nome' : 'Margaret White',
        'Ruolo' : 'Project Manager',
        'Img' : 'projectManager.jpg'
    },
    {
        'Nome' : 'Steven Miller',
        'Ruolo' : 'R&D Manager',
        'Img' : 'R&DManager.jpg'
    },
    {
        'Nome' : 'Natasha Taylor',
        'Ruolo' : 'HR Manager',
        'Img' : 'HRManager.jpg'
    }
]

// tag HTML per stampare le cards
let containerCards = document.getElementById('containerCards');

for (let i = 0; i < team.length; i++) {
    
    containerCards.innerHTML += 
    `
    <div class="card p-0 text-center">
        <img src="./asset/img/${team[i]['Img']}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 id="titolo" class="card-title">${team[i]['Nome']}</h4>
            <p class="card-text">
                ${team[i]['Ruolo']}
            </p>
        </div>
    </div>
`
    
}