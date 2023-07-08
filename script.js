const players = [
    {
        id: 1,
        name: 'David De Gea',
        image: 'degea.jpg',
        position: 'Goalkeeper',
        country: 'Spain',
        summary: 'I don’t know who is the best goalkeeper in the world at the moment, but I want to be the best'
    },
    {
        id: 2,
        name: 'Tom Heaton',
        image: 'to-heaton.jpg',
        position: 'Goalkeeper',
        country: 'England',
        summary: 'I still feel I’ve got an awful lot to give and I’ve got the bit between my teeth'
    },
    {
        id: 3,
        name: 'Dean Henderson',
        image: 'dean.jpeg',
        position: 'Goalkeeper',
        country: 'England',
        summary: 'I work hard every single day to be a better version of myself. At the end of the day, the only competition I’ve got is myself'
    },
    {
        id: 4,
        name: 'Victor Lindelof',
        image: 'lindelof.jpg',
        position: 'Defender',
        country: 'Sweden',
        summary: 'United are one of the biggest clubs in the world and always want to win titles. That’s also my goal'
    },
    {
        id: 5,
        name: 'Eric Bailly',
        image: 'bailly.jpg',
        position: 'Defender',
        country: 'Ivory Coast',
        summary: 'To play football at the highest level is all I have ever wanted to do'
    },
    {
        id: 6,
        name: 'Harry Maguire',
        image: 'maguire.jpg',
        position: 'Defender',
        country: 'England',
        summary: "It's an amazing club. It's a club I've always watched and I always looked up to when I was younger"
    },
    {
        id: 7,
        name: 'Lisandro Martinez',
        image: 'lisandro.jpg',
        position: 'Defender',
        country: 'Argentina',
        summary: "I’ve worked so hard to get to this moment and, now that I’m here, I’m going to push myself even further"
    },
    {
        id: 8,
        name: 'Tyrell Malacia',
        image: 'tyrel.jpg',
        position: 'Defender',
        country: 'Netherlands',
        summary: 'Whilst I know that I am still young and will continue to develop, I can promise the United fans that I will leave everything on'
    },
    {
        id: 9,
        name: 'Raphael Varane',
        image: 'varane.jpg',
        position: 'Defender',
        country: 'France',
        summary: 'I came here because I wanted new emotions and it was exactly what I expected and bigger'
    },
    {
        id: 10,
        name: 'Diogo Dalot',
        image: 'dalot.jpg',
        position: 'Defender',
        country: 'Portugal',
        summary: 'I will give everything for this club, for this shirt and, hopefully, help the club to win. That’s the most important'
    },
    {
        id: 11,
        name: 'Luke Shaw',
        image: 'shaw.jpg',
        position: 'Defender',
        country: 'England',
        summary: "I’ve got the freedom to play and that gives me the confidence in what I want to do to help the team"
    },
    {
        id: 12,
        name: 'Alex Telles',
        image: 'telles.jpg',
        position: 'Defender',
        country: 'Brazil',
        summary: "This is a once-in-a-lifetime opportunity. I’m going to give everything to fight for the club"
    },
    {
        id: 13,
        name: 'Mason Mount',
        image: 'mount.jpg',
        position: 'Midfielder',
        country: 'England',
        summary: "I couldn’t be more excited for the seasons ahead and am ready for the hard work expected here"
    },
    {
        id: 14,
        name: 'Bruno Fernandes',
        image: 'bruno.jpg',
        position: 'Midfielder',
        country: 'Portugal',
        summary: "To play for United feels incredible. I can promise the fans I will give everything to help bring us success"
    },
    {
        id: 15,
        name: 'Anthony Martial',
        image: 'martial.jpg',
        position: 'Forward',
        country: 'France',
        summary: "I love Manchester United, I love the fans, they give me a lot of joy"
    },
    {
        id: 16,
        name: 'Marcus Rashford',
        image: 'rashford.jpg',
        position: 'Forward',
        country: 'England',
        summary: "I have always been a United fan, so to be playing in the first team really is a dream come true"
    }
];
console.log(players);
const playerContainer = document.querySelector('.player-container');
players.forEach(function(player) {
    const singlePlayer = document.createElement('div');
    singlePlayer.classList = 'player';
    playerContainer.appendChild(singlePlayer);
    
    const img = document.createElement('img');
    img.classList = 'player-image';
    img.setAttribute('src', player.image);
    singlePlayer.appendChild(img);
    
    const name = document.createElement('h3');
    name.classList = 'player-name';
    name.textContent = player.name;
    singlePlayer.appendChild(name);

    const position = document.createElement('p');
    position.classList = 'player-position';
    position.textContent = 'Position: '+player.position;
    singlePlayer.appendChild(position);

    const country = document.createElement('p');
    country.classList = 'player-country';
    country.textContent = 'Country: '+player.country;
    singlePlayer.appendChild(country);   
})

let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

    });
});