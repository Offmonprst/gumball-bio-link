/**
 * The Amazing World of Gumball: Elmore Bio Link Interactivity
 * Built with vanilla JavaScript, Web Audio API, and full accessibility.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Character Data & Themes ---
  const characters = {
    gumball: {
      name: 'Gumball Watterson',
      subtitle: 'Warga Elmore Paling Santai • Juara 1 Kabur dari Masalah',
      status: 'Status: Menghindari detensi Miss Simian',
      statusDotColor: '#10B981',
      avatarClass: 'svg-gumball',
      soundFreq: 440
    },
    darwin: {
      name: 'Darwin Watterson',
      subtitle: 'Ikan Mas Berkaki • Duta Kebaikan & Sahabat Sejati',
      status: 'Status: Sedang memuji semua orang di Elmore',
      statusDotColor: '#34D399',
      avatarClass: 'svg-darwin',
      soundFreq: 587
    },
    anais: {
      name: 'Anais Watterson',
      subtitle: 'Anak Jenius Keluarga • Satu-satunya yang Punya Akal Sehat',
      status: 'Status: Mengerjakan PR kalkulus tingkat universitas',
      statusDotColor: '#F59E0B',
      avatarClass: 'svg-anais',
      soundFreq: 784
    }
  };

  // --- Quotes Collection ---
  const elmoreQuotes = [
    {
      text: 'Kalau kamu gagal di percobaan pertama, ya sudah berarti kamu memang tidak ditakdirkan untuk itu.',
      author: 'Gumball Watterson'
    },
    {
      text: 'Terkadang hal terbaik yang bisa kita lakukan adalah tidak melakukan apa-apa dan makan sosis.',
      author: 'Richard Watterson'
    },
    {
      text: 'Dunia ini mungkin aneh, tapi setidaknya kita menghadapinya bersama-sama!',
      author: 'Darwin Watterson'
    },
    {
      text: 'Aku dikelilingi oleh orang-orang yang membuatku mempertanyakan teori evolusi.',
      author: 'Anais Watterson'
    },
    {
      text: 'Kenapa harus lari pagi kalau kamu bisa lari dari tanggung jawab?',
      author: 'Gumball Watterson'
    },
    {
      text: 'Hari yang buruk bukan berarti hidupmu buruk. Tapi kalau setiap hari buruk, mungkin kamu ada di Elmore.',
      author: 'Gumball Watterson'
    },
    {
      text: 'Kenyataan itu terlalu keras, makanya aku lebih memilih berada di dunia kartun.',
      author: 'Darwin Watterson'
    }
  ];

  let currentQuoteIndex = 0;
  let isSoundEnabled = true;

  // --- Elements ---
  const charButtons = document.querySelectorAll('.char-btn');
  const characterTitle = document.getElementById('character-name-title');
  const characterSubtitle = document.getElementById('character-subtitle');
  const statusText = document.getElementById('status-text');
  const svgs = document.querySelectorAll('.character-svg');
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');
  const nextQuoteBtn = document.getElementById('next-quote-btn');
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const shareBtn = document.getElementById('share-btn');
  const shareModal = document.getElementById('share-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const copyUrlBtn = document.getElementById('copy-url-btn');
  const shareUrlInput = document.getElementById('share-url-input');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  // Set default share URL input
  if (shareUrlInput) {
    shareUrlInput.value = window.location.href.split('#')[0];
  }

  // --- Cartoon Audio Synthesizer (Web Audio API) ---
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
  }

  function playCartoonPop(frequency = 500, type = 'sine') {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(frequency * 1.8, audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch (e) {
      // Audio fallback silent
    }
  }

  function playBoingSound() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      const now = audioCtx.currentTime;
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(660, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(330, now + 0.25);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(now + 0.28);
    } catch (e) {
      // Audio fallback silent
    }
  }

  // --- Sound Toggle Handler ---
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      if (isSoundEnabled) {
        soundIcon.textContent = '🔊';
        soundToggleBtn.title = 'Efek Suara: Nyala';
        soundToggleBtn.setAttribute('aria-label', 'Matikan efek suara kartun');
        playCartoonPop(600);
        showToast('Efek suara kartun diaktifkan! 🔊');
      } else {
        soundIcon.textContent = '🔇';
        soundToggleBtn.title = 'Efek Suara: Mati';
        soundToggleBtn.setAttribute('aria-label', 'Nyalakan efek suara kartun');
        showToast('Efek suara kartun dimatikan! 🔇');
      }
    });
  }

  // --- Character Switcher Handler ---
  charButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const charKey = btn.getAttribute('data-char');
      const data = characters[charKey];
      if (!data) return;

      // Update Body Theme Attribute
      document.body.setAttribute('data-character', charKey);

      // Update Buttons Active State
      charButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-checked', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-checked', 'true');

      // Update Profile Details
      if (characterTitle) characterTitle.textContent = data.name;
      if (characterSubtitle) characterSubtitle.textContent = data.subtitle;
      if (statusText) statusText.textContent = data.status;

      // Update SVG Avatar
      svgs.forEach(svg => {
        if (svg.classList.contains(data.avatarClass)) {
          svg.classList.remove('hidden');
        } else {
          svg.classList.add('hidden');
        }
      });

      playBoingSound();
    });
  });

  // --- Quote Generator Handler ---
  if (nextQuoteBtn) {
    nextQuoteBtn.addEventListener('click', () => {
      playCartoonPop(520, 'triangle');
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * elmoreQuotes.length);
      } while (newIndex === currentQuoteIndex && elmoreQuotes.length > 1);

      currentQuoteIndex = newIndex;
      const quote = elmoreQuotes[currentQuoteIndex];

      if (quoteText && quoteAuthor) {
        quoteText.style.opacity = '0';
        setTimeout(() => {
          quoteText.textContent = `"${quote.text}"`;
          quoteAuthor.textContent = quote.author;
          quoteText.style.opacity = '1';
        }, 120);
      }
    });
  }

  // --- Toast Notification Helper ---
  let toastTimeout = null;
  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.removeAttribute('hidden');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.setAttribute('hidden', '');
    }, 2800);
  }

  // --- Share Modal Handler ---
  if (shareBtn && shareModal) {
    shareBtn.addEventListener('click', () => {
      playCartoonPop(480);
      if (typeof shareModal.showModal === 'function') {
        shareModal.showModal();
      } else {
        // Fallback for browsers without native dialog support
        shareModal.setAttribute('open', '');
      }
    });
  }

  if (closeModalBtn && shareModal) {
    closeModalBtn.addEventListener('click', () => {
      playCartoonPop(320);
      if (typeof shareModal.close === 'function') {
        shareModal.close();
      } else {
        shareModal.removeAttribute('open');
      }
    });
  }

  // Close modal when clicking backdrop
  if (shareModal) {
    shareModal.addEventListener('click', (event) => {
      const rect = shareModal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        shareModal.close();
      }
    });
  }

  // Copy URL Button Handler
  if (copyUrlBtn && shareUrlInput) {
    copyUrlBtn.addEventListener('click', async () => {
      playCartoonPop(700);
      const urlToCopy = shareUrlInput.value || window.location.href;
      let copied = false;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(urlToCopy);
          copied = true;
        }
      } catch (err) {
        // Fallback to execCommand
      }

      if (!copied) {
        try {
          shareUrlInput.focus();
          shareUrlInput.select();
          copied = document.execCommand('copy');
        } catch (e) {
          copied = false;
        }
      }

      if (copied) {
        showToast('Link bio berhasil disalin ke papan klip! 📋');
      } else {
        shareUrlInput.focus();
        shareUrlInput.select();
        showToast('Teks link telah ditandai, silakan tekan Salin / Ctrl+C! 📋');
      }

      if (shareModal && typeof shareModal.close === 'function') {
        setTimeout(() => shareModal.close(), 600);
      }
    });
  }

  // Add click sound to interactive comic buttons
  const comicLinks = document.querySelectorAll('.comic-link-btn');
  comicLinks.forEach(link => {
    link.addEventListener('click', () => {
      playCartoonPop(550);
    });
  });
});
