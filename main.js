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
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: 'img/tonic.png',
    details: {
      DName: '1canopy',
      dot1: ' ',
      skill: 'Back End Dev',
      dot2: ' ',
      year: '2015',
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
    featuredImage: 'img/tonic4.png',
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
];
Projects.forEach((Project) => {
  const content = `
  <header class="tonic">
  <div class="col-1"> <img src="${Project.featuredImage}" alt="image of card"></div>
  <div class="tonic-2">
      <div class="greet">
          <h1 class="name">${Project.name}</h1>
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
      </div>
      <div class="col-4">
          <ul class="skill">
              <li><a href="">${Project.technologies.first}</a></li>
              <li><a href="">${Project.technologies.second}</a></li>
              <li><a href="">${Project.technologies.third}</a></li>
          </ul>

      </div> <br>
      <div class="col-5">
          <a href="#">
              <div class="two">
                  See Project
              </div>
          </a>
      </div>
  </div>

</header>
  `;
  Dynamic.innerHTML += content;
});
