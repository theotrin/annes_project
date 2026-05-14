function renderPage(name) {
  const page = pages[name] || pages.index;

  document.getElementById("page-title").textContent = page.title;
  document.getElementById("page-intro").textContent = page.intro;

  const videoArea = document.getElementById("video-area");
  if (page.video) {
    videoArea.style.display = 'flex';
    videoArea.innerHTML = `<iframe src="${page.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    videoArea.classList.remove('empty-video');
  } else {
    videoArea.style.display = 'none';
    videoArea.innerHTML = '';
  }

  const actions = document.getElementById("actions");
  actions.innerHTML = "";
  
  // Animation effect
  const container = document.querySelector('.container');
  container.classList.remove('fade-in');
  void container.offsetWidth; // trigger reflow
  container.classList.add('fade-in');

  page.next.forEach(btn => {
    const b = document.createElement("button");
    b.className = "button" + (btn.klass ? " " + btn.klass : "");
    
    // Add icons based on klass or target
    let icon = '';
    if (btn.klass === 'back') {
      icon = '<i class="fas fa-arrow-left"></i> ';
    } else if (btn.target === 'index') {
      icon = '<i class="fas fa-home"></i> ';
    } else {
      icon = '<i class="fas fa-chevron-right"></i> ';
    }
    
    b.innerHTML = btn.klass === 'back' ? `${icon}<span>${btn.text}</span>` : `<span>${btn.text}</span>${icon}`;
    
    b.onclick = () => {
      window.location.hash = btn.target;
    };
    actions.appendChild(b);
  });
}

function handleNavigation() {
  const name = location.hash.replace("#", "") || "index";
  renderPage(name);
}

window.addEventListener('hashchange', handleNavigation);

window.onload = () => {
  handleNavigation();
};
