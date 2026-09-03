/* ==========================================================================
   Mohamed & Shahd — Form-Free Minimalist Wedding App Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Setup Sticky Header & Mobile Nav Toggle
  setupHeaderNav();

  // 3. Setup Countdown Timer to Oct 15, 2026
  initCountdownTimer();

  // 4. Setup Lightbox Photo Gallery
  initGalleryLightbox();

  // 5. Setup Add to Calendar (.ics Generator)
  initCalendarGenerator();

  // 6. Setup Soft Ambient Piano Synthesizer
  initMinimalAudioPlayer();
});

/* --------------------------------------------------------------------------
   Header & Mobile Navigation
   -------------------------------------------------------------------------- */
function setupHeaderNav() {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   Countdown Timer (Target: October 15, 2026 18:00:00)
   -------------------------------------------------------------------------- */
function initCountdownTimer() {
  const targetDate = new Date('2026-10-15T18:00:00').getTime();

  const elDays = document.getElementById('cd-days');
  const elHours = document.getElementById('cd-hours');
  const elMinutes = document.getElementById('cd-minutes');
  const elSeconds = document.getElementById('cd-seconds');

  if (!elDays) return;

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      elDays.textContent = '00';
      elHours.textContent = '00';
      elMinutes.textContent = '00';
      elSeconds.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    elDays.textContent = String(days).padStart(3, '0');
    elHours.textContent = String(hours).padStart(2, '0');
    elMinutes.textContent = String(minutes).padStart(2, '0');
    elSeconds.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* --------------------------------------------------------------------------
   Photo Gallery Lightbox
   -------------------------------------------------------------------------- */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal) return;

  galleryItems.forEach(item => {
    const img = item.querySelector('img');
    item.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   Add to Calendar (.ics Generator)
   -------------------------------------------------------------------------- */
function initCalendarGenerator() {
  const calBtns = [
    document.getElementById('calendar-btn'),
    document.getElementById('save-date-cal-btn')
  ];

  calBtns.forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      const icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Mohamed and Shahd Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:Mohamed & Shahd's Wedding
DESCRIPTION:Join Mohamed & Shahd in celebrating their wedding day. Ceremony at 6:00 PM followed by Reception & Dinner.
LOCATION:The Royal Palace & Gardens, Kornish Al Nile, Maadi, Cairo, Egypt
DTSTART:20261015T150000Z
DTEND:20261015T220000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', 'Mohamed_and_Shahd_Wedding.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
}

/* --------------------------------------------------------------------------
   Soft Ambient Piano Synthesizer
   -------------------------------------------------------------------------- */
function initMinimalAudioPlayer() {
  const toggleBtn = document.getElementById('audio-toggle-btn');
  const label = document.getElementById('audio-label');
  if (!toggleBtn) return;

  let isPlaying = false;
  let audioCtx = null;
  let timerId = null;

  // Gentle acoustic piano notes
  const pianoNotes = [220.00, 261.63, 329.63, 392.00, 440.00, 523.25];

  function playSoftPianoNote() {
    if (!isPlaying || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      const note = pianoNotes[Math.floor(Math.random() * pianoNotes.length)];
      osc.type = 'sine';
      osc.frequency.setValueAtTime(note, audioCtx.currentTime);

      gain.gain.setValueAtTime(0, audioCtx.currentTime);
      gain.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.6);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 3.0);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 3.1);
    } catch (e) {}
  }

  toggleBtn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isPlaying = !isPlaying;

    if (isPlaying) {
      label.textContent = "Music Playing";
      toggleBtn.style.background = "#1a1a1a";
      toggleBtn.style.color = "#ffffff";

      playSoftPianoNote();
      timerId = setInterval(playSoftPianoNote, 1800);
    } else {
      label.textContent = "Background Music";
      toggleBtn.style.background = "#faf9f6";
      toggleBtn.style.color = "#1a1a1a";
      if (timerId) clearInterval(timerId);
    }
  });
}
