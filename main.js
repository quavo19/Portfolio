const Dynamic = document.querySelector('.second-section');
const humburg = document.querySelector('.hamburger');
const popup = document.querySelector('#menupopup');
humburg.addEventListener('click', () => {
  popup.style.display = 'flex';
});
popup.addEventListener('click', () => {
  popup.style.display = 'none';
});

const Projects = [
  {
    name: 'Weather App',
    description: 'A simple app that allows users to search results of temperatures around the globe',
    description1: 'A simple app that allows users to search results of temperatures around the globe A weather app that pulls from the OpenWeatherMap API to allow users to search for and view the forecast in cities worldwide. Built with JavaScript. this project was made to help determine temperatures, wind speed and humidity of any given area. it makes you know upcomming conditions and how to prepare.',
    featuredImage: 'img/tonic4.png',
    details: {
      DName: 'Weather',
      dot1: ' ',
      skill: 'Front End Dev',
      dot2: ' ',
      year: '2022',
    },
    technologies: {
      first: 'Html',
      second: 'Css',
      third: 'JavaScript',
    },
    liveVersionLink: 'https://quavo19.github.io/WeatherApp/',
    source: 'https://github.com/quavo19/WeatherApp',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: 'img/tonic2.png',
    details: {
      DName: 'canopy',
      dot1: ' ',
      skill: 'Back End Dev',
      dot2: ' ',
      year: '2022',
    },
    technologies: {
      first: 'Html',
      second: 'Css',
      third: 'JavaScript',
    },
    liveVersionLink: 'none',
    source: 'none',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: 'img/tonic3.jpg',
    details: {
      DName: 'canopy',
      dot1: ' ',
      skill: 'Back End Dev',
      dot2: ' ',
      year: '2022',
    },
    technologies: {
      first: 'Html',
      second: 'Css',
      third: 'JavaScript',
    },
    liveVersionLink: 'none',
    source: 'none',
  },
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: 'img/tonic.png',
    details: {
      DName: 'canopy',
      dot1: ' ',
      skill: 'Back End Dev',
      dot2: ' ',
      year: '2022',
    },
    technologies: {
      first: 'Html',
      second: 'Css',
      third: 'JavaScript',
    },
    liveVersionLink: ' ',
    source: ' ',
  },
];
Projects.forEach((Project) => {
  const content = `
  <header class="tonic">
  <div class="col-1"> <img id = "img"src="${Project.featuredImage}" alt="image of card"></div>
  <div class="tonic-2">
      <div class="greet" id = "greet">
          <h1 class="name">${Project.name}</h1>
          <div class="line"><img id="closer1"  src="img/vector1.png" alt="icon-png"></div>
      </div>
      <div class="col-2">
          <div class="canopy">
              <h1>${Project.details.DName}</h1>
          </div>
          <div class="light">
              <span class="dot"></span>
          </div>
          <div class="light">
              <h1 class="row">${Project.details.skill}</h1>
          </div>
          <div class="light">
              <span class="dot"></span>
          </div>
          <div class="light">
              <h1 class="row">${Project.details.year}</h1>
          </div>
      </div>
      <div class="col-3">
          <p class="dos">${Project.description}
          </p>
          <p class="card-description">${Project.description1}</p>
      </div>
      <div class="col-4">
          <ul class="skill">
              <li><a href="">${Project.technologies.first}</a></li>
              <li><a href="">${Project.technologies.second}</a></li>
              <li><a href="">${Project.technologies.third}</a></li>
          </ul>

      </div> 
      <div class = "line-container"><span class = "liner"></span></div>
      <div class="col-5">
              <div class="two">
                  See Project
              </div>
      </div>
      <div class="card-actions">

      <div class = "view">
        <a  href=${
  Project.liveVersionLink
}><div class="actions">See Live<img src="img/card-live.png"/></div></a></div>
        <div class = "view"><a href=${
  Project.source
}><div class="actions">See Source<img src="img/github.png"/></div></a></div>
      </div>
  </div>

</header>
<div class="br">
</div>
  `;
  Dynamic.innerHTML += content;
});
const Display = document.querySelectorAll('.tonic');
Display.forEach((Element) => {
  const description1 = Element.children[1].children[2].children[1];
  const closeBTN = Element.children[1].children[0].children[1];
  const cardActionElement = Element.children[1].children[6];
  description1.style.display = 'none';
  closeBTN.style.display = 'none';
  cardActionElement.style.display = 'none';
});

// const seeProject = document.querySelectorAll('.two');
// seeProject.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     const card = e.path.filter((el) => el.classList?.contains('tonic')).at(0);

//     const Dos = card.children[1].children[2].children[0];
//     const description1 = card.children[1].children[2].children[1];
//     const cardActionElement = card.children[1].children[6];
//     const closeBTN = card.children[1].children[0].children[1];
//     const seeProject2 = card.children[1].children[5];
//     description1.style.display = 'flex';
//     seeProject2.style.display = 'none';
//     closeBTN.style.display = 'flex';
//     cardActionElement.style.display = 'flex';
//     Dos.style.display = 'none';
//   });
// });
// const lock = document.querySelectorAll('#closer1');
// lock.forEach((Element) => {
//   Element.addEventListener('click', () => {
//     window.location.reload();
//   });
// });

//  form validation
const form = document.getElementById('form');
const input = document.getElementById('mail');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = input.value.trim();
  const regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (!regex.test(email)) {
    errorElement.textContent = 'Email must be in lower case only';
  } else {
    form.submit();
  }
});

// store data for later
const NameData = document.querySelector('.name-input');
const EmailData = document.querySelector('#mail');
const TextData = document.querySelector('.msg-input');
form.addEventListener('submit', () => {
  const Data = {
    Name: NameData.value,
    Email: EmailData.value,
    Text: TextData.value,
  };
  localStorage.setItem('data', JSON.stringify(Data));
});

const AutoFiller = localStorage.getItem('data');
if (AutoFiller) {
  const DataStored = JSON.parse(localStorage.getItem('data'));
  NameData.value = DataStored.Name;
  EmailData.value = DataStored.Email;
  TextData.value = DataStored.Text;
}