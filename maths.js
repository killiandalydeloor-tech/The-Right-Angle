// =============================================
// THE RIGHT ANGLE — maths.js
// Tab switching + video modal
// =============================================

// ---- TAB SWITCHING ----
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.tab;

    // Update button states
    tabBtns.forEach(b => b.classList.remove('tab-active'));
    btn.classList.add('tab-active');

    // Show/hide panels
    tabPanels.forEach(panel => {
      if (panel.id === `tab-${target}`) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });

    // Scroll to tabs bar so content is visible
    document.querySelector('.tabs-bar').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});

// ---- VIDEO MODAL ----
// Map of video IDs to YouTube embed URLs
// When you upload your solutions, replace the '#' with the actual YouTube embed URL
// e.g. 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
const videoMap = {
  '2024P1': { title: '2024 LC Higher Maths — Paper 1 Solution', url: null },
  '2024P2': { title: '2024 LC Higher Maths — Paper 2 Solution', url: null },
  '2023P1': { title: '2023 LC Higher Maths — Paper 1 Solution', url: null },
  '2023P2': { title: '2023 LC Higher Maths — Paper 2 Solution', url: null },
  '2022P1': { title: '2022 LC Higher Maths — Paper 1 Solution', url: null },
  '2022P2': { title: '2022 LC Higher Maths — Paper 2 Solution', url: null },
  '2021P1': { title: '2021 LC Higher Maths — Paper 1 Solution', url: null },
  '2021P2': { title: '2021 LC Higher Maths — Paper 2 Solution', url: null },
  '2020P1': { title: '2020 LC Higher Maths — Paper 1 Solution', url: null },
  '2020P2': { title: '2020 LC Higher Maths — Paper 2 Solution', url: null },
  '2019P1': { title: '2019 LC Higher Maths — Paper 1 Solution', url: null },
  '2019P2': { title: '2019 LC Higher Maths — Paper 2 Solution', url: null },
  '2018P1': { title: '2018 LC Higher Maths — Paper 1 Solution', url: null },
  '2018P2': { title: '2018 LC Higher Maths — Paper 2 Solution', url: null },
  '2017P1': { title: '2017 LC Higher Maths — Paper 1 Solution', url: null },
  '2017P2': { title: '2017 LC Higher Maths — Paper 2 Solution', url: null },
  '2016P1': { title: '2016 LC Higher Maths — Paper 1 Solution', url: null },
  '2016P2': { title: '2016 LC Higher Maths — Paper 2 Solution', url: null },
  '2015P1': { title: '2015 LC Higher Maths — Paper 1 Solution', url: null },
  '2015P2': { title: '2015 LC Higher Maths — Paper 2 Solution', url: null },
  'lesson-01': { title: 'Lesson 01 — Algebraic Manipulation & Factorising', url: null },
};

const modal = document.getElementById('video-modal');
const modalLabel = document.getElementById('modal-label');
const modalVideo = document.getElementById('modal-video');

function openVideo(id) {
  const video = videoMap[id];
  if (!video) return;

  modalLabel.textContent = video.title;

  if (video.url) {
    // Real video — embed it
    modalVideo.innerHTML = `
      <iframe
        width="100%" height="100%"
        src="${video.url}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style="border-radius: 8px; aspect-ratio: 16/9; min-height: 300px;"
      ></iframe>
    `;
  } else {
    // Placeholder — solution not uploaded yet
    modalVideo.innerHTML = `
      <span style="font-size:2.5rem">▶</span>
      <p style="font-size:0.95rem; color:var(--text-muted)">Solution coming soon.</p>
      <p style="font-size:0.75rem; color:var(--text-dim); text-align:center; max-width:280px; margin-top:0.25rem;">
        Upload your solution to YouTube and add the embed URL to videoMap in maths.js.
      </p>
    `;
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeVideo() {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
  // Stop any playing video
  modalVideo.innerHTML = '';
}

// Close on overlay click
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeVideo();
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeVideo();
});

// ---- CERTLE TAB TIMER (demo) ----
const certleTabTimer = document.getElementById('certle-tab-timer');
if (certleTabTimer) {
  let secs = 5 * 60;
  const tick = setInterval(() => {
    secs--;
    if (secs <= 0) { clearInterval(tick); certleTabTimer.textContent = '0:00'; return; }
    const m = Math.floor(secs / 60);
    const s = String(secs % 60).padStart(2, '0');
    certleTabTimer.textContent = `${m}:${s}`;
  }, 1000);
}
