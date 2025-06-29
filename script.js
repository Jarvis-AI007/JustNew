const bouquets = [
    {
        image: 'assets/flowers1.webp',
        message: 'For you, a bouquet of sunshine and smiles to brighten your day! ☀️'
    },
    {
        image: 'assets/flowers2.webp',
        message: 'Like these flowers, my thoughts of you are always blooming. You are so special! 💖'
    },
    {
        image: 'assets/flowers3.jpg',
        message: 'A bouquet of flowers to tell you how much I admire your grace and strength. 🌹'
    },
    {
        image: 'assets/flowers4.avif',
        message: 'Each petal is a reminder of how much you mean to me. You are cherished! 🌸'
    },
    {
        image: 'assets/flowers5.avif',
        message: 'A garden of excitement blooms in my heart whenever I think of you! 🌺'
    },
    {
        image: 'assets/flowers6.jpg',
        message: 'These flowers whisper the sweet words my heart wants to say to you! 💕'
    },
    {
        image: 'assets/flowers7.jpg',
        message: 'Every flower here represents a reason why you make my world beautiful! 🌷'
    },
    {
        image: 'assets/flowers8.webp',
        message: 'Like these blossoms, you also look more beautiful each day! 🌼'
    },
    {
        image: 'assets/flowers10.png',
        message: 'These flowers are as rare and precious as you are for me! 💎'
    },
    {
        image: 'assets/flowers11.jpg',
        message: 'Each bloom tells a story of love, just like every moment with you! 📖'
    },
    {
        image: 'assets/flowers12.avif',
        message: 'Like these flowers reaching for the sun, my heart reaches for you! ☀️'
    },
    {
        image: 'assets/flowers13.avif',
        message: 'A bouquet of dreams and wishes, all wrapped in petals of kisses! ✨'
    },
    {
        image: 'assets/flowers14.avif',
        message: 'These flowers dance in the breeze, just like my heart dances when I think of you! 💃'
    },
    {
        image: 'assets/flowers15.avif',
        message: 'Every petal is a celebration of you! 🎉'
    },
    {
        image: 'assets/flowers16.jpg',
        message: 'Like these flowers, my Dnc you are beautiful, and everlasting! 🌸'
    },
    {
        image: 'assets/flowers17.jpg',
        message: 'A garden of emotions, where every flower blooms with thoughts of you! 🌺'
    },
    {
        image: 'assets/flowers18.webp',
        message: 'These flowers are as vibrant as the joy you bring to my life! 🌈'
    },
    {
        image: 'assets/flowers19.png',
        message: 'Like these blossoms, you are so beautiful and delicate yet strong! 🌹'
    },
    {
        image: 'assets/flowers20.jpg',
        message: 'Every flower here is a testament to the beauty you bring to my world! 🌷'
    },
    {
        image: 'assets/flowers21.avif',
        message: 'These flowers are as unique and special like we are! 💝'
    },
    {
        image: 'assets/flowers22.jpg',
        message: 'Like these petals, you are so beautiful! 💕'
    },
    {
        image: 'assets/flowers23.avif',
        message: 'A bouquet of memories, each flower a moment I cherish with you! 📸'
    },
    {
        image: 'assets/flowers24.avif',
        message: 'These flowers are as sweet as the memories we\'re writing together! 📖'
    },
    {
        image: 'assets/flowers25.jpg',
        message: 'Like these blooms, my DNC for you grows stronger with each passing day! 🌱'
    },
    {
        image: 'assets/flowers26.avif',
        message: 'Every flower here is a reflection of the beauty I see in you! 👑'
    },
    {
        image: 'assets/flowers27.jpg',
        message: 'These flowers are as magical as you are! ✨'
    },
    {
        image: 'assets/flowers28.jpg',
        message: 'Like these blossoms, my heart is full of kisses and gratitude for you! 💋'
    },
    {
        image: 'assets/flowers29.jpg',
        message: 'A bouquet of dreams come true, because you are my greatest dream! 💫'
    },
    {
        image: 'assets/flowers30.jpg',
        message: 'These flowers are as perfect as you are, my DNC! 💖'
    }
];

const songs = [
    {
        file: 'assets/hale-dil.mp3',
        title: 'Hale Dil',
        artist: 'Harshit Saxena',
        duration: '5:48'
    },
    {
        file: 'assets/tuHiHaqeeqat.mp3',
        title: 'Tum Hi Haqeeqat',
        artist: 'Pritam, Javed Ali',
        duration: '5:02'
    },
    {
        file: 'assets/hanTuHain.mp3',
        title: 'Han Tu Hai',
        artist: 'KK',
        duration: '5:24'
    },
    {
        file: 'assets/DilIbaadat.mp3',
        title: 'Dil Ibaadat',
        artist: 'KK',
        duration: '5:29'
    },
    {
        file: 'assets/deewanaKar.mp3',
        title: 'Deewana kar raha hai',
        artist: 'Javed Ali',
        duration: '5:40'
    }
];

let currentBouquetIndex = 0;
let currentSongIndex = 0;
let isMusicPlaying = false;

const sexyPopup = document.getElementById('sexyPopup');
const pleasePopup = document.getElementById('pleasePopup');
const noAnimation = document.getElementById('noAnimation');
const noButton = document.getElementById('noButton');
const successPopup = document.getElementById('successPopup');
const continueBtn = document.getElementById('continueBtn');
const bouquetContainer = document.getElementById('bouquetContainer');
const bouquetImage = document.getElementById('bouquetImage');
const bouquetMessage = document.querySelector('#bouquetMessage p');
const newBouquetBtn = document.getElementById('newBouquetBtn');
const messageBtn = document.getElementById('messageBtn');
const musicToggle = document.getElementById('musicToggle');
const messageModal = document.getElementById('messageModal');
const loadingModal = document.getElementById('loadingModal');
const successModal = document.getElementById('successModal');
const messageForm = document.getElementById('messageForm');
const messageText = document.getElementById('messageText');
const bgMusic = document.getElementById('bgMusic');
const petals = document.getElementById('petals');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const pleaseYesBtn = document.getElementById('pleaseYesBtn');
const downloadBouquetBtn = document.getElementById('downloadBouquetBtn');

const splashScreen = document.getElementById('splashScreen');
const babyImage = document.getElementById('babyImage');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init("Qr8Y-1CpeAbWiS1cT");
    
    setupEventListeners();
    createFloatingPetals();
    initializeMusicAnimations();
});

// Initialize music-triggered animations
function initializeMusicAnimations() {
    const musicAnimations = document.getElementById('musicAnimations');
    const floatingHearts = document.getElementById('floatingHearts');
    const musicWaves = document.getElementById('musicWaves');
    const glowingOrbs = document.getElementById('glowingOrbs');
    const sparkles = document.getElementById('sparkles');
    const rainbowTrails = document.getElementById('rainbowTrails');
    const floatingRoses = document.getElementById('floatingRoses');
    const loveBubbles = document.getElementById('loveBubbles');
    const shootingStars = document.getElementById('shootingStars');
    const musicNotes = document.getElementById('musicNotes');
    const auroraEffect = document.getElementById('auroraEffect');
    
    // Create music waves
    for (let i = 0; i < 20; i++) {
        const wave = document.createElement('div');
        wave.className = 'music-wave';
        wave.style.left = (i * 5) + '%';
        wave.style.animationDelay = (i * 0.1) + 's';
        musicWaves.appendChild(wave);
    }
    
    // Create glowing orbs
    for (let i = 0; i < 8; i++) {
        const orb = document.createElement('div');
        orb.className = 'glowing-orb';
        orb.style.left = Math.random() * 100 + '%';
        orb.style.top = Math.random() * 100 + '%';
        orb.style.animationDelay = (i * 0.8) + 's';
        glowingOrbs.appendChild(orb);
    }
    
    // Create aurora effect layers
    for (let i = 0; i < 3; i++) {
        const auroraLayer = document.createElement('div');
        auroraLayer.className = 'aurora-layer';
        auroraLayer.style.animationDelay = (i * 2) + 's';
        auroraLayer.style.animationDuration = (8 + i * 2) + 's';
        auroraEffect.appendChild(auroraLayer);
    }
}

// Start music animations
function startMusicAnimations() {
    const musicAnimations = document.getElementById('musicAnimations');
    const floatingHearts = document.getElementById('floatingHearts');
    const sparkles = document.getElementById('sparkles');
    const musicWaves = document.getElementById('musicWaves');
    
    // Show animation container
    musicAnimations.classList.remove('hidden');
    musicAnimations.classList.add('music-animation-active');
    
    // Start floating hearts
    startFloatingHearts();
    
    // Start sparkles
    startSparkles();
    
    // Start rainbow trails
    startRainbowTrails();
    
    // Start floating roses
    startFloatingRoses();
    
    // Start love bubbles
    startLoveBubbles();
    
    // Start shooting stars
    startShootingStars();
    
    // Start music notes
    startMusicNotes();
    
    // Start floating butterflies
    startFloatingButterflies();
    
    // Enhance existing petals
    enhancePetals();
    
    // Enhance music waves
    enhanceMusicWaves();
}

// Stop music animations
function stopMusicAnimations() {
    const musicAnimations = document.getElementById('musicAnimations');
    const floatingHearts = document.getElementById('floatingHearts');
    const sparkles = document.getElementById('sparkles');
    const rainbowTrails = document.getElementById('rainbowTrails');
    const floatingRoses = document.getElementById('floatingRoses');
    const loveBubbles = document.getElementById('loveBubbles');
    const shootingStars = document.getElementById('shootingStars');
    const musicNotes = document.getElementById('musicNotes');
    const musicWaves = document.getElementById('musicWaves');
    
    // Hide animation container
    musicAnimations.classList.add('hidden');
    musicAnimations.classList.remove('music-animation-active');
    
    // Clear all animation containers
    floatingHearts.innerHTML = '';
    sparkles.innerHTML = '';
    rainbowTrails.innerHTML = '';
    floatingRoses.innerHTML = '';
    loveBubbles.innerHTML = '';
    shootingStars.innerHTML = '';
    musicNotes.innerHTML = '';
    
    // Remove enhanced petals
    removeEnhancedPetals();
    
    // Remove enhanced music waves
    removeEnhancedMusicWaves();
}

// Create floating hearts
function startFloatingHearts() {
    const floatingHearts = document.getElementById('floatingHearts');
    const heartEmojis = ['💖', '💕', '💗', '💓', '💝', '💘', '💞', '💟'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        
        floatingHearts.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 10000);
    }, 600);
}

// Create sparkles
function startSparkles() {
    const sparkles = document.getElementById('sparkles');
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        sparkles.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 4000);
    }, 200);
}

// Create rainbow trails
function startRainbowTrails() {
    const rainbowTrails = document.getElementById('rainbowTrails');
    
    setInterval(() => {
        const trail = document.createElement('div');
        trail.className = 'rainbow-trail';
        trail.style.left = Math.random() * 100 + 'vw';
        trail.style.animationDuration = (Math.random() * 2 + 3) + 's';
        
        rainbowTrails.appendChild(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
            }
        }, 5000);
    }, 1000);
}

// Create floating roses
function startFloatingRoses() {
    const floatingRoses = document.getElementById('floatingRoses');
    const roseEmojis = ['🌹', '🌺', '🌷', '🌸', '🌼', '🌻'];
    
    setInterval(() => {
        const rose = document.createElement('div');
        rose.className = 'floating-rose';
        rose.textContent = roseEmojis[Math.floor(Math.random() * roseEmojis.length)];
        rose.style.left = Math.random() * 100 + 'vw';
        rose.style.animationDuration = (Math.random() * 3 + 8) + 's';
        
        floatingRoses.appendChild(rose);
        
        setTimeout(() => {
            if (rose.parentNode) {
                rose.parentNode.removeChild(rose);
            }
        }, 12000);
    }, 1500);
}

// Create love bubbles
function startLoveBubbles() {
    const loveBubbles = document.getElementById('loveBubbles');
    
    setInterval(() => {
        const bubble = document.createElement('div');
        bubble.className = 'love-bubble';
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDuration = (Math.random() * 2 + 6) + 's';
        
        loveBubbles.appendChild(bubble);
        
        setTimeout(() => {
            if (bubble.parentNode) {
                bubble.parentNode.removeChild(bubble);
            }
        }, 10000);
    }, 1200);
}

// Create shooting stars
function startShootingStars() {
    const shootingStars = document.getElementById('shootingStars');
    
    setInterval(() => {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.top = Math.random() * 50 + 'vh';
        star.style.animationDuration = (Math.random() * 1 + 2) + 's';
        
        shootingStars.appendChild(star);
        
        setTimeout(() => {
            if (star.parentNode) {
                star.parentNode.removeChild(star);
            }
        }, 4000);
    }, 2000);
}

// Create music notes
function startMusicNotes() {
    const musicNotes = document.getElementById('musicNotes');
    const noteEmojis = ['🎵', '🎶', '🎼', '🎤', '🎧', '🎹', '🎸', '🎻'];
    
    setInterval(() => {
        const note = document.createElement('div');
        note.className = 'music-note';
        note.textContent = noteEmojis[Math.floor(Math.random() * noteEmojis.length)];
        note.style.left = Math.random() * 100 + 'vw';
        note.style.animationDuration = (Math.random() * 2 + 4) + 's';
        
        musicNotes.appendChild(note);
        
        setTimeout(() => {
            if (note.parentNode) {
                note.parentNode.removeChild(note);
            }
        }, 8000);
    }, 1000);
}

// Create floating butterflies
function startFloatingButterflies() {
    const floatingHearts = document.getElementById('floatingHearts');
    const butterflyEmojis = ['🦋', '✨', '💫', '⭐'];
    
    setInterval(() => {
        const butterfly = document.createElement('div');
        butterfly.className = 'floating-butterfly';
        butterfly.textContent = butterflyEmojis[Math.floor(Math.random() * butterflyEmojis.length)];
        butterfly.style.left = Math.random() * 100 + 'vw';
        butterfly.style.animationDuration = (Math.random() * 4 + 8) + 's';
        
        floatingHearts.appendChild(butterfly);
        
        setTimeout(() => {
            if (butterfly.parentNode) {
                butterfly.parentNode.removeChild(butterfly);
            }
        }, 15000);
    }, 2000);
}

// Enhance existing petals with music effects
function enhancePetals() {
    const existingPetals = document.querySelectorAll('.petal');
    existingPetals.forEach(petal => {
        petal.classList.add('music-enhanced');
    });
}

// Remove enhanced petals
function removeEnhancedPetals() {
    const enhancedPetals = document.querySelectorAll('.petal.music-enhanced');
    enhancedPetals.forEach(petal => {
        petal.classList.remove('music-enhanced');
    });
}

// Enhance music waves
function enhanceMusicWaves() {
    const musicWaves = document.querySelectorAll('.music-wave');
    musicWaves.forEach(wave => {
        wave.classList.add('enhanced');
    });
}

// Remove enhanced music waves
function removeEnhancedMusicWaves() {
    const enhancedWaves = document.querySelectorAll('.music-wave.enhanced');
    enhancedWaves.forEach(wave => {
        wave.classList.remove('enhanced');
    });
}

// Enhanced toggle music function
function toggleMusic() {
    if (bgMusic.paused) {
        // Play random song
        playRandomSong();
        musicToggle.innerHTML = '🔇 Stop Music';
        startMusicAnimations();
    } else {
        bgMusic.pause();
        musicToggle.innerHTML = '🎵 Toggle Music';
        stopMusicAnimations();
    }
}

// Play random song from the songs array
function playRandomSong() {
    // Get a random song index
    const randomIndex = Math.floor(Math.random() * songs.length);
    const song = songs[randomIndex];
    
    // Update audio source
    bgMusic.src = song.file;
    
    // Play the song
    bgMusic.play().then(() => {
        console.log(`Now playing: ${song.title} by ${song.artist}`);
        showNowPlayingMessage(song);
        currentSongIndex = randomIndex;
        isMusicPlaying = true;
        
        // Set up next song when current one ends
        bgMusic.onended = () => {
            if (isMusicPlaying) {
                playRandomSong();
            }
        };
    }).catch(error => {
        console.error('Error playing song:', error);
        // Try another song if this one fails
        setTimeout(() => {
            if (isMusicPlaying) {
                playRandomSong();
            }
        }, 1000);
    });
}

// Show now playing message
function showNowPlayingMessage(song) {
    const nowPlayingMsg = document.createElement('div');
    nowPlayingMsg.innerHTML = `🎵 Now Playing: ${song.title} 🎵`;
    nowPlayingMsg.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background: linear-gradient(45deg, #25D366, #128C7E);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-family: 'Dancing Script', cursive;
        font-weight: bold;
        font-size: 16px;
        z-index: 10000;
        box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
        animation: slideInLeft 0.5s ease-out;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    document.body.appendChild(nowPlayingMsg);
    
    // Remove after 4 seconds
    setTimeout(() => {
        nowPlayingMsg.style.animation = 'slideOutLeft 0.5s ease-in';
        setTimeout(() => {
            if (nowPlayingMsg.parentNode) {
                nowPlayingMsg.parentNode.removeChild(nowPlayingMsg);
            }
        }, 500);
    }, 4000);
}

// Show the main content
function showMainContent() {
    successPopup.classList.add('hidden');
    document.querySelector('.main-container').classList.remove('hidden');
    updateBouquet();
}

// Show the baby image
function showBabyImage() {
    splashScreen.classList.add('hidden');
    babyImage.classList.remove('hidden');
}

// Update bouquet image and message
function updateBouquet() {
    const bouquet = bouquets[currentBouquetIndex];
    
    // Update counter display
    const bouquetCounter = document.getElementById('bouquetCounter');
    const totalBouquets = document.getElementById('totalBouquets');
    if (bouquetCounter) {
        bouquetCounter.textContent = currentBouquetIndex + 1;
    }
    if (totalBouquets) {
        totalBouquets.textContent = bouquets.length;
    }
    
    // Add error handling for image loading
    const img = new Image();
    img.onload = () => {
        bouquetImage.src = bouquet.image;
        bouquetMessage.textContent = bouquet.message;
        console.log(`Bouquet ${currentBouquetIndex + 1} loaded successfully: ${bouquet.image}`);
    };
    
    img.onerror = () => {
        console.error(`Failed to load bouquet ${currentBouquetIndex + 1}: ${bouquet.image}`);
        // Try to load the next bouquet if this one fails
        currentBouquetIndex = (currentBouquetIndex + 1) % bouquets.length;
        updateBouquet();
        return;
    };
    
    img.src = bouquet.image;

    // Preload next image
    const nextIndex = (currentBouquetIndex + 1) % bouquets.length;
    const nextBouquet = bouquets[nextIndex];
    const nextImg = new Image();
    nextImg.src = nextBouquet.image;
}

// Update bouquet thumbnails
function updateBouquetThumbnails() {
    const thumbnails = document.querySelectorAll('.bouquet-thumbnail');
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.remove('active');
        if (index === currentBouquetIndex) {
            thumbnail.classList.add('active');
        }
    });
}

// Download current bouquet image
function downloadBouquetImage() {
    const bouquet = bouquets[currentBouquetIndex];
    const imageUrl = bouquet.image;
    
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        // Convert canvas to JPG blob
        canvas.toBlob((blob) => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'Yours_Only.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);

            // Add success animation
            downloadBouquetBtn.classList.add('download-success');
            setTimeout(() => {
                downloadBouquetBtn.classList.remove('download-success');
            }, 600);

            // Extra effects
            createHeartParticles();
            showDownloadSuccess();
        }, 'image/jpeg', 0.95); // Quality: 0.0 (lowest) to 1.0 (best)
    };

    img.onerror = () => {
        alert('Image failed to load for download.');
    };
}

// Show download success message
function showDownloadSuccess() {
    // Create a temporary success message
    const successMsg = document.createElement('div');
    successMsg.innerHTML = '💐 Bouquet downloaded! 💐';
    successMsg.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ff6b9d, #ff8e53);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-family: 'Dancing Script', cursive;
        font-weight: bold;
        font-size: 16px;
        z-index: 10000;
        box-shadow: 0 8px 25px rgba(255, 107, 157, 0.4);
        animation: slideInRight 0.5s ease-out;
    `;
    
    document.body.appendChild(successMsg);
    
    // Remove after 3 seconds
    setTimeout(() => {
        successMsg.style.animation = 'slideOutRight 0.5s ease-in';
        setTimeout(() => {
            if (successMsg.parentNode) {
                successMsg.parentNode.removeChild(successMsg);
            }
        }, 500);
    }, 3000);
}

// Create floating petals animation
function createFloatingPetals() {
    const petalEmojis = ['🌸', '🌺', '🌼', '🌷', '🌹'];
    
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 5 + 5) + 's';
        petal.style.opacity = Math.random() * 0.5 + 0.3;
        
        petals.appendChild(petal);
        
        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }, 10000);
    }, 2000);
}

// Handle Yes button click
function handleYesClick() {
    sexyPopup.classList.add('hidden');
    successPopup.classList.remove('hidden');
    
    // Add celebration effects
    createHeartParticles();
    playCelebrationSound();
}

// Handle No button click - show please popup instead of animation
function handleNoClick() {
    sexyPopup.classList.add('hidden');
    pleasePopup.classList.remove('hidden');
    
    // Add some romantic effects
    createHeartParticles();
}

// Handle Please Yes button click
function handlePleaseYesClick() {
    pleasePopup.classList.add('hidden');
    successPopup.classList.remove('hidden');
    
    // Add celebration effects
    createHeartParticles();
    playCelebrationSound();
}

// Start the moving "No" animation (kept for backup)
function startNoAnimation() {
    const positions = [
        { x: 20, y: 20 },
        { x: 80, y: 30 },
        { x: 50, y: 70 },
        { x: 10, y: 60 },
        { x: 90, y: 80 },
        { x: 30, y: 40 },
        { x: 70, y: 10 },
        { x: 40, y: 90 }
    ];
    
    let positionIndex = 0;
    
    const moveInterval = setInterval(() => {
        if (positionIndex >= positions.length) {
            clearInterval(moveInterval);
            return;
        }
        
        const pos = positions[positionIndex];
        noButton.style.left = pos.x + '%';
        noButton.style.top = pos.y + '%';
        positionIndex++;
    }, 300);
}

// Create heart particles for celebration
function createHeartParticles() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '100vh';
            heart.style.fontSize = '2rem';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.animation = 'heartFloat 3s ease-out forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 100);
    }
}

// Play celebration sound
function playCelebrationSound() {
    // Create a simple celebration sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Handle message form submission using EmailJS
function handleMessageSubmit(e) {
    e.preventDefault();
    
    const message = messageText.value.trim();
    if (!message) {
        alert('Please enter a message! 💕');
        return;
    }
    
    // Close the modal
    messageModal.classList.add('hidden');
    
    // Show loading modal
    loadingModal.classList.remove('hidden');
    addModalAnimation(loadingModal);
    
    // EmailJS configuration
    const serviceID = 'service_xcecnpj';
    const templateID = 'template_iwrwj5o'; // You'll need to create a template
    const publicKey = 'Qr8Y-1CpeAbWiS1cT'; // You'll need to add your public key
    
    const templateParams = {
        to_email: 'pankajsharma9055362628@gmail.com', // Your email
        message: message,
        from_name: 'DNC Lover',
        subject: 'Message from DNC'
    };
    
    emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(() => {
            loadingModal.classList.add('hidden');
            successModal.classList.remove('hidden');
            addModalAnimation(successModal);
            
            // Clear the form
            messageText.value = '';
            
            // Add celebration effects
            createHeartParticles();
        }, (error) => {
            loadingModal.classList.add('hidden');
            alert(`Oh no, something went wrong and the message could not be sent. 😢\n\nError: ${JSON.stringify(error)}`);
            messageModal.classList.remove('hidden');
        });
}

// Setup event listeners
function setupEventListeners() {
    yesBtn.addEventListener('click', handleYesClick);
    noBtn.addEventListener('click', handleNoClick);
    pleaseYesBtn.addEventListener('click', handlePleaseYesClick);
    continueBtn.addEventListener('click', showMainContent);
    downloadBouquetBtn.addEventListener('click', downloadBouquetImage);
    
    newBouquetBtn.addEventListener('click', () => {
        currentBouquetIndex = (currentBouquetIndex + 1) % bouquets.length;
        updateBouquet();
        addButtonClickEffect(newBouquetBtn);
    });
    
    messageBtn.addEventListener('click', () => {
        messageModal.classList.remove('hidden');
        addModalAnimation(messageModal);
    });
    
    musicToggle.addEventListener('click', toggleMusic);
    
    // Modal event listeners - Enhanced close button handling
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event bubbling
            closeAllModals();
        });
    });
    
    messageForm.addEventListener('submit', handleMessageSubmit);
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeAllModals();
        }
    });
    
    // Add romantic effects to bouquet container
    bouquetContainer.addEventListener('click', () => {
        addRomanticEffects();
    });
    
    // Hide bouquet message when clicking outside
    document.addEventListener('click', (e) => {
        const bouquetContainer = document.getElementById('bouquetContainer');
        const bouquetMessage = document.getElementById('bouquetMessage');
        
        // If click is outside the bouquet container and message is visible
        if (!bouquetContainer.contains(e.target) && bouquetMessage.style.opacity === '1') {
            bouquetMessage.style.opacity = '0';
        }
    });
    
    // Success modal close button
    const closeSuccess = document.getElementById('closeSuccess');
    if (closeSuccess) {
        closeSuccess.addEventListener('click', () => {
            successModal.classList.add('hidden');
        });
    }
    
    // Prevent modal content clicks from closing the modal
    const modalContents = document.querySelectorAll('.modal-content');
    modalContents.forEach(content => {
        content.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.add('hidden');
    });
}

function addModalAnimation(modal) {
    modal.style.animation = 'none';
    modal.offsetHeight; // Trigger reflow
    modal.style.animation = 'fadeIn 0.3s ease-out';
}

function addButtonClickEffect(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = '';
    }, 150);
}

function addRomanticEffects() {
    // Add sparkle effects
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.fontSize = '1.5rem';
        sparkle.style.zIndex = '1';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.animation = 'sparkle 2s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 2000);
    }, 3000);
}

function createHeartParticle(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '1.5rem';
    heart.style.zIndex = '9999';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'heartFloat 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 2000);
}

function showSpecialMessage() {
    const messages = [
        "You're absolutely amazing! 💖",
        "Every moment with you is magical! ✨",
        "You make my world complete! 🌍",
        "You're the best thing that ever happened to me! 🎉",
        "I love you more than words can express! 💕"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    const messageDiv = document.createElement('div');
    messageDiv.textContent = randomMessage;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.background = 'linear-gradient(45deg, #ff6b9d, #ff8e53)';
    messageDiv.style.color = 'white';
    messageDiv.style.padding = '20px 40px';
    messageDiv.style.borderRadius = '25px';
    messageDiv.style.fontSize = '1.5rem';
    messageDiv.style.fontWeight = 'bold';
    messageDiv.style.zIndex = '9999';
    messageDiv.style.animation = 'fadeInOut 3s ease-in-out forwards';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 3000);
}

// Add CSS for heart float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes heartFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
        }
    }
    
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    }
`;
document.head.appendChild(style);
