/* ==========================================================================
   Mohamed & Shahd — Dual Language Wedding App Logic (Mobile-Optimized)
   ========================================================================== */

let currentLang = 'ar';

const translations = {
  ar: {
    nav_story: "قصتنا",
    nav_details: "تفاصيل الفرح",
    nav_schedule: "جدول المواعيد",
    nav_gallery: "معرض الصور",
    nav_wishes: "تهاني ومباركات",
    nav_save_date: "احفظ التاريخ",
    hero_date_tag: "١٣ – ١٥ أكتوبر ٢٠٢٦ • الحدادي، سيدي سالم، كفر الشيخ",
    hero_subtitle: "يتشرفون بدعوة سيادتكم وحضوركم الكريم لمشاركتنا فرحتنا بأيام الحنة والزفاف المبارك",
    countdown_subtag: "العداد التنازلي لليلة الزفاف (عقب صلاة العشاء)",
    label_days: "يوم",
    label_hours: "ساعة",
    label_mins: "دقيقة",
    label_secs: "ثانية",
    btn_add_calendar: "أضف إلى التقويم",
    btn_share_insta: "مشاركة على الانستجرام",
    audio_label: "موسيقى الزفة والعود",
    story_tag: "قصتنا",
    story_subtitle: "\"وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً\"",
    couple_title: "العريس والعروسة",
    couple_quote: "\"من أول لقاء ومحبتنا بتكبر كل يوم.. يسعدنا ويشرفنا حضوركم ومشاركتكم ليالي فرحتنا وحنتنا.\"",
    timeline_met_date: "أغسطس ٢٠٢٥",
    timeline_met: "اللقاء الأول",
    timeline_met_desc: "بداية التعارف والود الشريف المبارك.",
    timeline_engaged_date: "سبتمبر ٢٠٢٥",
    timeline_engaged: "الخطوبة والشبكة",
    timeline_engaged_desc: "وعد الزواج المبارك وسط فرحة الأهل والأحباب.",
    timeline_wedding_date: "١٣ – ١٥ أكتوبر ٢٠٢٦",
    timeline_wedding: "ليالي الفرح والزفاف",
    timeline_wedding_desc: "ثلاث ليالٍ من البهجة والسرور بحضوركم الكريم.",
    details_tag: "يشرفنا حضوركم",
    details_title: "أيام ومواعيد الفرح",
    hennah_girls_title: "حنة البنات",
    hennah_girls_date: "الثلاثاء ١٣ أكتوبر ٢٠٢٦",
    hennah_girls_desc: "ليلة احتفالية خاصة بالسيدات والبنات",
    hennah_mens_title: "حنة الشباب ووليمة العشاء",
    hennah_mens_date: "الأربعاء ١٤ أكتوبر ٢٠٢٦",
    hennah_mens_desc: "توزيع وليمة العشاء عقب صلاة المغرب مباشرة",
    wedding_title: "حفل الزفاف الكبير",
    wedding_date: "الخميس ١٥ أكتوبر ٢٠٢٦",
    wedding_desc: "بدء مراسم الفرح والزفاف عقب صلاة العشاء مباشرة",
    map_btn: "افتح موقع الفرح على الخريطة ←",
    map_tag: "موقع الفرح",
    map_location_name: "الحدادي، سيدي سالم",
    schedule_tag: "جدول المواعيد",
    schedule_title: "برنامج ليالي الفرح",
    sch_1_time: "١٣ أكتوبر",
    sch_1_title: "ليلة حنة البنات",
    sch_1_desc: "الثلاثاء • سهرة واحتفال الحنة الخاص بالسيدات والبنات",
    sch_2_time: "١٤ أكتوبر",
    sch_2_title: "تقديم وليمة العشاء المبارك",
    sch_2_desc: "الأربعاء • بدء تقديم طعام العشاء عقب صلاة المغرب مباشرة",
    sch_3_time: "١٤ أكتوبر",
    sch_3_title: "سهرة حنة الشباب",
    sch_3_desc: "مساء الأربعاء • سهرة الحنة البلدي للشباب والأحباب",
    sch_4_time: "١٥ أكتوبر",
    sch_4_title: "حفل الزفاف والزفة الكبرى",
    sch_4_desc: "الخميس • بدء مراسم الفرح والزفاف عقب صلاة العشاء مباشرة",
    gallery_tag: "معرض الصور",
    gallery_title: "أجمل الذكريات",
    wishes_tag: "دعوات طيبة",
    wishes_title: "تهاني ومباركات الأهل والخلان",
    wish_1_body: "\"بارَكَ اللَّهُ لَكُما وَبارَكَ عَلَيْكُما وَجَمَعَ بَيْنَكُما فِي خَيْرٍ.. الف مبروك لمحمد وشهد!\"",
    wish_1_author: "— طارق وليلى",
    wish_2_body: "\"ألف مبروك لأجمل عرسان! ربنا يتمملكم على خير ويسعدكم ويرزقكم الحياة الهنيئة.\"",
    wish_2_author: "— المهندس محمود السيد",
    wish_3_body: "\"فرحانين ليكم جداً ومنتظرين نكون معاكم في ليالي الفرح والسرور بالحدادي!\"",
    wish_3_author: "— نوران وكريم",
    save_date_tag: "احفظ التاريخ",
    save_date_title: "١٣ . ١٤ . ١٥ أكتوبر ٢٠٢٦",
    save_date_sub: "الحدادي، سيدي سالم، محافظة كفر الشيخ",
    footer_date: "١٣–١٥ أكتوبر ٢٠٢٦ • الحدادي، كفر الشيخ",
    footer_share: "مشاركة الدعوة على الانستجرام",
    footer_copy: "© ٢٠٢٦ أفراح آل محمد وشهد",
    groom_name: "محمد",
    bride_name: "شهد",
    story_names: "محمد & شهد",
    monogram: "م & ش"
  },
  en: {
    nav_story: "Story",
    nav_details: "Details",
    nav_schedule: "Schedule",
    nav_gallery: "Gallery",
    nav_wishes: "Wishes",
    nav_save_date: "Save Date",
    hero_date_tag: "OCTOBER 13 – 15, 2026 • AL HADDADI, KAFR EL-SHEIKH",
    hero_subtitle: "Together with their families, invite you to celebrate their Hennah & Wedding days",
    countdown_subtag: "COUNTDOWN TO WEDDING NIGHT (AFTER ESHAA PRAYERS)",
    label_days: "Days",
    label_hours: "Hours",
    label_mins: "Mins",
    label_secs: "Secs",
    btn_add_calendar: "Add to Calendar",
    btn_share_insta: "Share on Instagram",
    audio_label: "Arab Wedding Music",
    story_tag: "OUR STORY",
    story_subtitle: "\"Two souls with but a single thought, two hearts that beat as one.\"",
    couple_title: "The Groom & Bride",
    couple_quote: "\"From our first meeting to this milestone, every moment together has been a blessing. We look forward to celebrating our Hennah and Wedding with you.\"",
    timeline_met_date: "SPRING 2023",
    timeline_met: "First Met",
    timeline_met_desc: "A simple introduction that sparked an unbreakable connection.",
    timeline_engaged_date: "AUTUMN 2024",
    timeline_engaged: "The Proposal",
    timeline_engaged_desc: "A moment of love that set our future together.",
    timeline_wedding_date: "OCTOBER 13 – 15, 2026",
    timeline_wedding: "Hennah & Wedding",
    timeline_wedding_desc: "Celebrating three memorable days of joy with family & friends.",
    details_tag: "JOIN US",
    details_title: "Event Days",
    hennah_girls_title: "Girls' Hennah",
    hennah_girls_date: "Tuesday, October 13, 2026",
    hennah_girls_desc: "Ladies' Hennah celebration & gathering",
    hennah_mens_title: "Men's Hennah & Dinner",
    hennah_mens_date: "Wednesday, October 14, 2026",
    hennah_mens_desc: "Dinner served After Maghreb Prayers",
    wedding_title: "The Wedding Night",
    wedding_date: "Thursday, October 15, 2026",
    wedding_desc: "Ceremony starts After Eshaa Prayers",
    map_btn: "Open Google Maps →",
    map_tag: "LOCATION MAP",
    map_location_name: "Al Haddadi, Sidi Salem",
    schedule_tag: "FULL ITINERARY",
    schedule_title: "The Celebration Schedule",
    sch_1_time: "OCT 13",
    sch_1_title: "Girls' Hennah Night",
    sch_1_desc: "Tuesday • Special celebration & gathering for women",
    sch_2_time: "OCT 14",
    sch_2_title: "Wedding Dinner Banquet",
    sch_2_desc: "Wednesday • Dinner served After Maghreb Prayers",
    sch_3_time: "OCT 14",
    sch_3_title: "Men's Hennah Night",
    sch_3_desc: "Wednesday Evening • Traditional Men's Hennah celebration",
    sch_4_time: "OCT 15",
    sch_4_title: "Main Wedding Ceremony",
    sch_4_desc: "Thursday • Wedding Celebration starts After Eshaa Prayers",
    gallery_tag: "GALLERY",
    gallery_title: "Moments",
    wishes_tag: "BLESSINGS",
    wishes_title: "Warm Wishes",
    wish_1_body: "\"Wishing Mohamed and Shahd a lifetime filled with love, laughter, and endless peace.\"",
    wish_1_author: "— Tarek & Layla",
    wish_2_body: "\"Alf Mabrouk! May Allah bless your union and grant you happiness forever.\"",
    wish_2_author: "— Eng. Mahmoud Al-Sayed",
    wish_3_body: "\"So thrilled to celebrate with you both! You make a wonderful couple.\"",
    wish_3_author: "— Nouran & Karim",
    save_date_tag: "SAVE THE DATES",
    save_date_title: "13 . 14 . 15 OCTOBER 2026",
    save_date_sub: "Al Haddadi, Sidi Salem, Kafr El-Sheikh Governorate",
    footer_date: "13–15.10.2026 • Al Haddadi, Kafr El-Sheikh",
    footer_share: "Share Invitation on Instagram",
    footer_copy: "© 2026 Mohamed & Shahd",
    groom_name: "Mohamed",
    bride_name: "Shahd",
    story_names: "Mohamed & Shahd",
    monogram: "M & S"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Setup Language Preference & Toggle
  const savedLang = localStorage.getItem('wedding_lang') || 'ar';
  initLanguageToggle(savedLang);

  // 3. Setup Mobile-Friendly Header & Nav Toggle
  setupHeaderNav();

  // 4. Setup Countdown Timer to Oct 15, 2026 (After Eshaa)
  initCountdownTimer();

  // 5. Setup Lightbox Photo Gallery
  initGalleryLightbox();

  // 6. Setup Add to Calendar (.ics Generator)
  initCalendarGenerator();

  // 7. Setup Instagram Share Buttons
  initInstagramShare();

  // 8. Setup Traditional Arab Wedding Music Synthesizer (Oud & Zaffa)
  initArabAudioPlayer();
});

/* --------------------------------------------------------------------------
   Language Toggle & Internationalization Engine
   -------------------------------------------------------------------------- */
function initLanguageToggle(initialLang) {
  const toggleBtn = document.getElementById('lang-toggle-btn');
  const toggleText = document.getElementById('lang-toggle-text');

  setLanguage(initialLang);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const nextLang = currentLang === 'ar' ? 'en' : 'ar';
      setLanguage(nextLang);
    });
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('wedding_lang', lang);

    const body = document.body;
    const html = document.documentElement;

    if (lang === 'ar') {
      html.setAttribute('lang', 'ar');
      html.setAttribute('dir', 'rtl');
      body.classList.add('rtl-theme');
      body.classList.remove('ltr-theme');
      if (toggleText) toggleText.textContent = 'English';
    } else {
      html.setAttribute('lang', 'en');
      html.setAttribute('dir', 'ltr');
      body.classList.add('ltr-theme');
      body.classList.remove('rtl-theme');
      if (toggleText) toggleText.textContent = 'العربية';
    }

    // Update names & monogram
    const dict = translations[lang];
    document.getElementById('groom-name').textContent = dict.groom_name;
    document.getElementById('bride-name').textContent = dict.bride_name;
    document.getElementById('story-title').textContent = dict.story_names;
    document.getElementById('footer-names').textContent = dict.story_names;
    document.getElementById('nav-monogram').textContent = dict.monogram;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    if (window.lucide) lucide.createIcons();
  }
}

/* --------------------------------------------------------------------------
   Header & Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function setupHeaderNav() {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }
}

/* --------------------------------------------------------------------------
   Countdown Timer (Target: October 15, 2026 18:30:00 - Wedding Night After Eshaa)
   -------------------------------------------------------------------------- */
function initCountdownTimer() {
  const targetDate = new Date('2026-10-15T18:30:00').getTime();

  const elDays = document.getElementById('cd-days');
  const elHours = document.getElementById('cd-hours');
  const elMinutes = document.getElementById('cd-minutes');
  const elSeconds = document.getElementById('cd-seconds');

  if (!elDays) return;

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      elDays.textContent = currentLang === 'ar' ? '٠٠' : '00';
      elHours.textContent = currentLang === 'ar' ? '٠٠' : '00';
      elMinutes.textContent = currentLang === 'ar' ? '٠٠' : '00';
      elSeconds.textContent = currentLang === 'ar' ? '٠٠' : '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (currentLang === 'ar') {
      elDays.textContent = toArabicNumerals(days);
      elHours.textContent = toArabicNumerals(hours);
      elMinutes.textContent = toArabicNumerals(minutes);
      elSeconds.textContent = toArabicNumerals(seconds);
    } else {
      elDays.textContent = String(days).padStart(3, '0');
      elHours.textContent = String(hours).padStart(2, '0');
      elMinutes.textContent = String(minutes).padStart(2, '0');
      elSeconds.textContent = String(seconds).padStart(2, '0');
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

function toArabicNumerals(num) {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return String(num).padStart(2, '0').replace(/\d/g, d => arabicDigits[d]);
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
SUMMARY:Mohamed & Shahd's Wedding & Hennah Celebrations
DESCRIPTION:Schedule:\\nOct 13: Girls' Hennah Night\\nOct 14: Men's Hennah & Dinner Banquet (Served After Maghreb Prayers)\\nOct 15: Main Wedding Ceremony & Party (Starts After Eshaa Prayers)
LOCATION:Al Haddadi, Sidi Salem, Kafr El-Sheikh Governorate, Egypt
DTSTART:20261013T160000Z
DTEND:20261015T220000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', currentLang === 'ar' ? 'حفل_زفاف_محمد_وشهد.ics' : 'Mohamed_and_Shahd_Wedding.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
}

/* --------------------------------------------------------------------------
   Instagram Sharing Feature (Native Mobile Web Share + Desktop Fallback)
   -------------------------------------------------------------------------- */
function initInstagramShare() {
  const shareBtns = document.querySelectorAll('.insta-share-btn');
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');

  function showToast(text) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = text;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 3500);
  }

  shareBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isAr = currentLang === 'ar';
      const shareData = {
        title: isAr ? "دعوة حفل زفاف محمد وشهد" : "Mohamed & Shahd's Hennah & Wedding Invitation",
        text: isAr 
          ? "يتشرفون بدعوة سيادتكم لحضور حفل الزفاف وليالي الحنة والعشاء! 💍✨\n١٣ أكتوبر: حنة البنات\n١٤ أكتوبر: وليمة العشاء (بعد المغرب) وحنة الشباب\n١٥ أكتوبر: حفل الزفاف (بعد العشاء)\nالمكان: الحدادي، سيدي سالم، كفر الشيخ"
          : "You are invited to Mohamed & Shahd's Hennah & Wedding! 💍✨\nOct 13: Girls' Hennah\nOct 14: Men's Hennah & Dinner (After Maghreb)\nOct 15: Wedding Ceremony (After Eshaa)\nLocation: Al Haddadi, Sidi Salem, Kafr El-Sheikh",
        url: window.location.href
      };

      if (navigator.share) {
        navigator.share(shareData).catch(() => {});
      } else {
        const copyText = `${shareData.title}\n${shareData.text}\nLink: ${shareData.url}`;
        navigator.clipboard.writeText(copyText).then(() => {
          showToast(isAr ? "تم نسخ تفاصيل الدعوة والرابط! جاري فتح انستجرام..." : "Invitation text & link copied! Opening Instagram...");
          setTimeout(() => {
            window.open("https://www.instagram.com", "_blank");
          }, 1200);
        }).catch(() => {
          window.open("https://www.instagram.com", "_blank");
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Traditional Arab Wedding Music Synthesizer (Oud & Zaffa Rhythm)
   -------------------------------------------------------------------------- */
function initArabAudioPlayer() {
  const toggleBtn = document.getElementById('audio-toggle-btn');
  const label = document.getElementById('audio-label');
  if (!toggleBtn) return;

  let isPlaying = false;
  let audioCtx = null;
  let timerId = null;
  let stepIndex = 0;

  const oudScale = [293.66, 311.13, 369.99, 392.00, 440.00, 466.16, 523.25, 587.33];
  const melodyPattern = [0, 2, 4, 3, 2, 4, 5, 7, 6, 4, 3, 2, 1, 0];

  function playOudPluck(freq) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.4);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 1.5);
  }

  function playDrumBeat(isDum) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    if (isDum) {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(35, audioCtx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.35);
    } else {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(950, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);
    }

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.36);
  }

  function playZaffaTick() {
    if (!isPlaying || !audioCtx) return;
    try {
      const noteIdx = melodyPattern[stepIndex % melodyPattern.length];
      const freq = oudScale[noteIdx];
      playOudPluck(freq);

      const rhythmBeat = stepIndex % 4;
      if (rhythmBeat === 0) {
        playDrumBeat(true);
      } else if (rhythmBeat === 1 || rhythmBeat === 3) {
        playDrumBeat(false);
      }

      stepIndex++;
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
      label.textContent = currentLang === 'ar' ? "جاري تشغيل الزفة والعود" : "Playing Arab Zaffa & Oud";
      toggleBtn.style.background = "#1a1a1a";
      toggleBtn.style.color = "#ffffff";

      stepIndex = 0;
      playZaffaTick();
      timerId = setInterval(playZaffaTick, 450);
    } else {
      label.textContent = currentLang === 'ar' ? "موسيقى الزفة والعود" : "Arab Wedding Music";
      toggleBtn.style.background = "#faf9f6";
      toggleBtn.style.color = "#1a1a1a";
      if (timerId) clearInterval(timerId);
    }
  });
}
