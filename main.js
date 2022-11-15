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
          <p class="card-description">${`${Project.description.substring(
    0,
    150,
  )}.`}</p>
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
      <div class="card-actions">
        <a  href=${
  Project.live
}><button type="submit" class="actions">See Live<img src="img/card-live.png"/></button></a>
        <a href=${
  Project.source
}><button type="submit" class="actions">See Source<img src="img/card-github.png"/></button></a>
      </div>
  </div>

</header>
  `;
  Dynamic.innerHTML += content;
});

const Display = document.querySelectorAll('.tonic');
Display.forEach((Element) => {
  const description1 = Element.children[1].children[2].children[1];
  const cardActionElement = Element.children[1].children[6];

  description1.style.display = 'none';
  cardActionElement.style.display = 'none';
});