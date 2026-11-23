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
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundSvg = document.getElementById('sound-svg');
  const soundIconOnPath = 'M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-2.5 9.07L7.83 8.63H4v6.74h3.83l3.67 3.67V12.3zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z';
  const soundIconOffPath = 'M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27l4.73 4.73H4v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z';
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
  if (soundToggleBtn && soundSvg) {
    soundToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      const pathEl = soundSvg.querySelector('path');
      if (isSoundEnabled) {
        if (pathEl) pathEl.setAttribute('d', soundIconOnPath);
        soundToggleBtn.title = 'Efek Suara: Nyala';
        soundToggleBtn.setAttribute('aria-label', 'Matikan efek suara kartun');
        playCartoonPop(600);
        showToast('Efek suara kartun diaktifkan! 🔊');
      } else {
        if (pathEl) pathEl.setAttribute('d', soundIconOffPath);
        soundToggleBtn.title = 'Efek Suara: Mati';
        soundToggleBtn.setAttribute('aria-label', 'Nyalakan efek suara kartun');
        showToast('Efek suara kartun dimatikan! 🔇');
      }
    });
  }

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

  // Add click sound to interactive liquid glass buttons
  const liquidLinks = document.querySelectorAll('.liquid-glass-btn, .social-pill-btn');
  liquidLinks.forEach(link => {
    link.addEventListener('click', () => {
      playCartoonPop(550);
    });
  });

  // 4 Screen Corners Darwin Character Interaction & Slide-In Trigger
  const cornerContainer = document.querySelector('.corner-darwins-container');
  if (cornerContainer) {
    setTimeout(() => {
      cornerContainer.classList.add('corners-active');
    }, 150);
  }

  const cornerDarwinButtons = document.querySelectorAll('.corner-darwin-btn');
  const cornerSounds = {
    tl: 640,
    tr: 750,
    bl: 560,
    br: 480
  };
  const cornerReactions = {
    tl: 'Darwin: Halo dari sudut kiri atas! ✨',
    tr: 'Darwin: Mengintip ceria dari sudut kanan atas! 🐟',
    bl: 'Darwin: Menjaga sudut kiri bawah dengan sepatu hijau! 👟',
    br: 'Darwin: Melompat gembira dari sudut kanan bawah! 🌟'
  };

  cornerDarwinButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const corner = btn.getAttribute('data-corner') || 'tl';
      const freq = cornerSounds[corner] || 550;
      playCartoonPop(freq, 'triangle');

      btn.classList.remove('sticker-wobble');
      void btn.offsetWidth;
      btn.classList.add('sticker-wobble');

      if (typeof showToast === 'function' && cornerReactions[corner]) {
        showToast(cornerReactions[corner]);
      }
    });
  });

  // ==========================================================================
  // SERENE LIQUID GLASS MUSIC PLAYER CONTROLLER
  // ==========================================================================
  const musicCard = document.getElementById('darwin-music-player');
  const musicAudio = document.getElementById('darwin-spotify-audio');
  const playBtn = document.getElementById('music-play-btn');
  const playSvg = document.getElementById('play-svg');
  const pauseSvg = document.getElementById('pause-svg');
  const playText = document.getElementById('play-btn-text');
  const vinylDisc = document.getElementById('music-vinyl');
  const progressRail = document.getElementById('music-progress-rail');
  const progressFill = document.getElementById('music-progress-fill');
  const progressThumb = document.getElementById('music-progress-thumb');
  const currentTimeLabel = document.getElementById('music-current-time');
  const totalTimeLabel = document.getElementById('music-total-time');
  const replayBtn = document.getElementById('music-replay-btn');
  const volBtn = document.getElementById('music-vol-btn');

  if (musicAudio && playBtn) {
    function formatTime(seconds) {
      if (isNaN(seconds) || seconds < 0) return '0:00';
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updatePlayState(isPlaying) {
      if (!musicCard) return;
      if (isPlaying) {
        musicCard.classList.add('is-playing');
        if (vinylDisc) vinylDisc.classList.add('is-playing');
        if (playSvg) playSvg.style.display = 'none';
        if (pauseSvg) pauseSvg.style.display = 'block';
        if (playText) playText.textContent = 'Jeda Lagu';
        playBtn.setAttribute('title', 'Jeda lagu');
        playBtn.setAttribute('aria-label', 'Jeda lagu China Timur');
      } else {
        musicCard.classList.remove('is-playing');
        if (vinylDisc) vinylDisc.classList.remove('is-playing');
        if (playSvg) playSvg.style.display = 'block';
        if (pauseSvg) pauseSvg.style.display = 'none';
        if (playText) playText.textContent = 'Putar Lagu';
        playBtn.setAttribute('title', 'Putar lagu');
        playBtn.setAttribute('aria-label', 'Putar lagu China Timur');
      }
    }

    playBtn.addEventListener('click', () => {
      playCartoonPop(560);
      if (musicAudio.paused) {
        musicAudio.play().then(() => {
          updatePlayState(true);
        }).catch(err => {
          console.warn('Playback error:', err);
        });
      } else {
        musicAudio.pause();
        updatePlayState(false);
      }
    });

    musicAudio.addEventListener('loadedmetadata', () => {
      if (totalTimeLabel && !isNaN(musicAudio.duration)) {
        totalTimeLabel.textContent = formatTime(musicAudio.duration);
      }
    });

    musicAudio.addEventListener('timeupdate', () => {
      const cur = musicAudio.currentTime;
      const dur = musicAudio.duration || 30;
      if (currentTimeLabel) currentTimeLabel.textContent = formatTime(cur);
      const percent = (cur / dur) * 100;
      if (progressFill) progressFill.style.width = `${percent}%`;
      if (progressThumb) progressThumb.style.left = `${percent}%`;
      if (progressRail) progressRail.setAttribute('aria-valuenow', Math.round(percent));
    });

    musicAudio.addEventListener('ended', () => {
      updatePlayState(false);
      if (progressFill) progressFill.style.width = '0%';
      if (progressThumb) progressThumb.style.left = '0%';
      if (currentTimeLabel) currentTimeLabel.textContent = '0:00';
      if (playText) playText.textContent = 'Putar Lagi';
    });

    // Seeking on Progress Rail
    if (progressRail) {
      function seekAudio(e) {
        const rect = progressRail.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = clickX / rect.width;
        if (musicAudio.duration) {
          musicAudio.currentTime = percent * musicAudio.duration;
        }
      }

      progressRail.addEventListener('click', (e) => {
        playCartoonPop(620);
        seekAudio(e);
      });
    }

    // Replay Button
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        playCartoonPop(600);
        musicAudio.currentTime = 0;
        musicAudio.play().then(() => {
          updatePlayState(true);
        });
      });
    }

    // Volume / Mute Toggle
    if (volBtn) {
      volBtn.addEventListener('click', () => {
        musicAudio.muted = !musicAudio.muted;
        playCartoonPop(musicAudio.muted ? 420 : 680);
        volBtn.title = musicAudio.muted ? 'Bunyikan lagu' : 'Bisukan lagu';
        volBtn.style.opacity = musicAudio.muted ? '0.5' : '1';
        if (typeof showToast === 'function') {
          showToast(musicAudio.muted ? 'Lagu dibisukan 🔇' : 'Suara lagu aktif 🔊');
        }
      });
    }
  }
});
