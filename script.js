
// Array of character data (updated with new data)
const mockCharacters = [
    {
        "_id": "5cf5679a915ecad153ab6903",
        "allies": ["Aang"],
        "enemies": [],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/f/f8/Chong.png/revision/latest?cb=20140127210142",
        "name": "Chong"
    },
    {
        "_id": "5cf5679a915ecad153ab68d6",
        "allies": ["Aang"],
        "enemies": ["Zhao"],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/0/0c/Chief.png/revision/latest?cb=20140122221730",
        "name": "Arnook",
        "affiliation": "Northern Water Tribe"
    },
    {
        "_id": "5cf5679a915ecad153ab68d4",
        "allies": ["Appa"],
        "enemies": ["Fire Nation"],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/b/be/Appa%27s_mother.png/revision/latest?cb=20130705194428",
        "name": "Appa's mother",
        "affiliation": "Air Nomads"
    },
    {
        "_id": "5cf5679a915ecad153ab68cd",
        "allies": ["Tenzin"],
        "enemies": ["Equalists"],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/c/cd/Air_Acolyte_woman.png/revision/latest?cb=20140421100225",
        "name": "Air Acolyte woman",
        "affiliation": "Air Acoltes Air Temple Island"
    },
    {
        "_id": "5cf5679a915ecad153ab68cb",
        "allies": ["Kya"],
        "enemies": ["Zuko"],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235",
        "name": "Aang (pilot)",
        "affiliation": "Air Nomads Team Avatar"
    },
    {
        "_id": "5cf5679a915ecad153ab68f7",
        "allies": ["Cabbage Corp"],
        "enemies": ["The "],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/2/2f/Cabbage_merchant.png/revision/latest?cb=20140112200908",
        "name": "Cabbage merchant",
        "affiliation": "Cabbage Corp Earth Kingdom"
    },
    {
        "_id": "5cf5679a915ecad153ab68f2",
        "allies": ["Aang"],
        "enemies": ["Fire Nation"],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/e/e8/King_Bumi.png/revision/latest?cb=20140106141303",
        "name": "Bumi (King of Omashu)",
        "affiliation": "Earth Kingdom Order of the White Lotus"
    },
    {
        "_id": "5cf5679a915ecad153ab68ef",
        "allies": ["Azula"],
        "enemies": ["Sokka"],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/0/02/Bully_guard.png/revision/latest?cb=20120702232626",
        "name": "Bully guard",
        "affiliation": "Fire Nation"
    },
    {
        "_id": "5cf5679a915ecad153ab6905",
        "allies": ["Avatar"],
        "enemies": ["Triple Threat Triad"],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/9/94/Chung.png/revision/latest?cb=20121107115729",
        "name": "Chung"
    },
    {
        "_id": "5cf5679a915ecad153ab6934",
        "allies": ["Earth Kingdom"],
        "enemies": ["Fire Nation"],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/0/08/Fong.png/revision/latest?cb=20130625120143",
        "name": "Fong",
        "affiliation": "Earth Kingdom Military"
    },
    {
        "_id": "5cf5679a915ecad153ab693b",
        "allies": ["Gan Jin"],
        "enemies": ["Zhang "],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/5/53/Gan_Jin_tribesman.png/revision/latest?cb=20130311212707",
        "name": "Gan Jin tribesman",
        "affiliation": "Gan Jin Zhang"
    },
    {
        "_id": "5cf5679a915ecad153ab690a",
        "allies": ["Earth Kingdom"],
        "enemies": [],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/c/ce/Corncob_guy.png/revision/latest?cb=20140422090141",
        "name": "Corncob guy"
    },
    {
        "_id": "5cf5679a915ecad153ab694f",
        "allies": ["Earth Queen"],
        "enemies": [],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/3/32/Gun.png/revision/latest?cb=20140730160152",
        "name": "Gun",
        "affiliation": "Earth Kingdom government"
    },
    {
        "_id": "5cf5679a915ecad153ab694c",
        "allies": ["Fire Nation"],
        "enemies": ["Aang"],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/e/ea/Guard_captain.png/revision/latest?cb=20140116105725",
        "name": "Guard captain",
        "affiliation": "Fire Nation"
    },
    {
        "_id": "5cf5679a915ecad153ab69a0",
        "allies": ["Mayor "],
        "enemies": ["Fire Lord Zuko "],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/8/85/Kori_Morishita.png/revision/latest?cb=20160330212637",
        "name": "Kori Morishita",
        "affiliation": "Fire Nation Fire Nation colonies Yu Dao Yu Dao Resistance (formerly)"
    },
    {
        "_id": "5cf5679a915ecad153ab696e",
        "allies": ["Baatar"],
        "enemies": ["Kuvira"],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/a/a9/Huan.png/revision/latest?cb=20150407233429",
        "name": "Huan",
        "affiliation": "Beifong family Metal Clan"
    },
    {
        "_id": "5cf5679a915ecad153ab697a",
        "allies": ["His mother", ""],
        "enemies": ["General"],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/0/04/Little_boy.png/revision/latest?cb=20140613143543",
        "name": "Jang Hui boy",
        "affiliation": "Fire Nation"
    },
    {
        "_id": "5cf5679a915ecad153ab6990",
        "allies": ["Southern Water Tribe"],
        "enemies": ["Fire Nation"],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/4/47/Kanna.png/revision/latest?cb=20130822224809",
        "name": "Kanna",
        "affiliation": "Northern Water Tribe (formerly) Southern Water Tribe"
    },
    {
        "_id": "5cf5679a915ecad153ab6984",
        "allies": ["Tenzin"],
        "enemies": ["Amon"],
        "photoUrl": "https://vignette.wikia.nocookie.net/avatar/images/0/01/Jinora.png/revision/latest?cb=20150131225800",
        "name": "Jinora",
        "affiliation": "Air Nation Air Temple Island Tenzin's family"
    },
    {
        "_id": "5cf5679a915ecad153ab6966",
        "allies": ["Team Avatar"],
        "enemies": ["Zhao"],
        "name": "Hiryu",
        "affiliation": "Northern Water"
    }
]
    
function getCharacter() {
  // Select a random character from the mock data
  const randomCharacter = mockCharacters[Math.floor(Math.random() * mockCharacters.length)];
  displayCharacterInfo(randomCharacter);
}

function displayCharacterInfo(character) {
  document.getElementById('name').innerText = `Name: ${character.name || 'N/A'}`;
  document.getElementById('photo').src = character.photoUrl || 'default-image-url'; // Provide a default image URL if photoUrl is missing
  document.getElementById('photo').alt = `Photo of ${character.name || 'Unknown'}`; // Add alt text for accessibility
  
  // Check if optional fields exist before trying to display them
  toggleVisibility('affiliation', character.affiliation);
  toggleVisibility('profession', character.profession);
  toggleVisibility('gender', character.gender);
  toggleVisibility('hair', character.hair);
  toggleVisibility('weapon', character.weapon);
  toggleVisibility('love', character.love);
  
  // Handle allies and enemies arrays
  document.getElementById('allies').innerText = `Allies: ${character.allies && character.allies.length > 0 ? character.allies.join(", ") : 'N/A'}`;
  document.getElementById('enemies').innerText = `Enemies: ${character.enemies && character.enemies.length > 0 ? character.enemies.join(", ") : 'N/A'}`;
}

function toggleVisibility(elementId, content) {
  const element = document.getElementById(elementId);
  if (content) {
    element.innerText = `${elementId.charAt(0).toUpperCase() + elementId.slice(1)}: ${content}`;
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
}

// Add event listener to the button
document.getElementById('generate-button').addEventListener('click', getCharacter);

// Load a character when the page loads
window.onload = getCharacter;