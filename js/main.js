document.addEventListener('DOMContentLoaded', function () {

  populateProjects();
  populateTimeline();
  populateWriting();

});

// Inject project cards into #projects-container
function populateProjects() {
  const container = document.getElementById('projects-container');
  if (!container || !siteConfig.projects.length) return;

  siteConfig.projects.forEach(function (project) {
    const tagsHTML = project.tags
      ? project.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('')
      : '';

    const linkHTML = project.link
      ? '<a href="' + project.link + '" class="card-link" target="_blank" rel="noopener">View project &rarr;</a>'
      : '';

    const card = document.createElement('div');
    card.className = 'card fade-in';
    card.innerHTML =
      '<div class="card-title">' + project.title + '</div>' +
      '<div class="card-body"><p>' + project.description + '</p></div>' +
      (tagsHTML ? '<div class="card-tags">' + tagsHTML + '</div>' : '') +
      linkHTML;

    container.appendChild(card);
  });
}

// Inject experience cards into #experience-container
function populateTimeline() {
  const container = document.getElementById('experience-container');
  if (!container || !siteConfig.timeline.length) return;

  siteConfig.timeline.forEach(function (entry) {
    const pointsHTML = entry.points
      ? '<ul>' + entry.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>'
      : '';

    const card = document.createElement('div');
    card.className = 'card fade-in';
    card.innerHTML =
      '<div class="card-title">' + entry.role + '</div>' +
      '<div class="card-meta">' + entry.organization + ' &nbsp;·&nbsp; ' + entry.location + ' &nbsp;·&nbsp; ' + entry.date + '</div>' +
      '<div class="card-body">' + pointsHTML + '</div>';

    container.appendChild(card);
  });
}

// Inject writing post cards into #writing-container
function populateWriting() {
  const container = document.getElementById('writing-container');
  if (!container || !siteConfig.writing || !siteConfig.writing.length) return;

  // Hide the "coming soon" message if there are real posts
  const comingSoon = document.querySelector('.coming-soon');
  if (comingSoon) comingSoon.style.display = 'none';

  siteConfig.writing.forEach(function (post) {
    const card = document.createElement('div');
    card.className = 'card fade-in';
    card.innerHTML =
      '<div class="card-title"><a href="' + post.link + '">' + post.title + '</a></div>' +
      '<div class="card-meta">' + post.date + '</div>' +
      '<div class="card-body"><p>' + post.excerpt + '</p></div>' +
      '<a href="' + post.link + '" class="card-link">Read &rarr;</a>';

    container.appendChild(card);
  });
}
