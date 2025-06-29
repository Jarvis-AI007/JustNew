# 💐 Digital Flower Bouquet 💌

A beautiful, romantic single-page web application created with love for your special someone. This interactive digital flower bouquet features clickable flowers with sweet messages, floating petals animation, and a message form.

## 🌸 Features

- **Interactive Flower Bouquet**: Click on any flower to see a sweet, personalized message
- **Random Bouquet Generator**: "Pick another bouquet!" button shuffles the flower arrangement
- **Message Form**: Send sweet messages with a beautiful form interface
- **Floating Petals Animation**: Romantic background animation with falling flower petals
- **Background Music**: Toggle romantic background music
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Beautiful Animations**: Smooth transitions, hover effects, and floating animations
- **Easter Eggs**: Special hidden messages for the curious explorer

## 🚀 Quick Deploy to GitHub Pages

### Method 1: Direct Upload (Easiest)

1. **Create a new repository** on GitHub:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `digital-flower-bouquet` (or any name you prefer)
   - Make it **Public**
   - Don't initialize with README (we already have one)

2. **Upload the files**:
   - Click "uploading an existing file"
   - Drag and drop these files:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md`

3. **Enable GitHub Pages**:
   - Go to your repository's **Settings** tab
   - Scroll down to **Pages** section
   - Under "Source", select **Deploy from a branch**
   - Choose **main** branch and **/(root)** folder
   - Click **Save**

4. **Your website is live!** 🎉
   - GitHub will provide you with a URL like: `https://yourusername.github.io/digital-flower-bouquet`

### Method 2: Using Git (For Developers)

```bash
# Clone this repository or create a new one
git init
git add .
git commit -m "Initial commit: Digital Flower Bouquet"
git branch -M main
git remote add origin https://github.com/yourusername/digital-flower-bouquet.git
git push -u origin main

# Then enable GitHub Pages in repository settings
```

## 🎨 Customization

### Changing the Title
Edit the title in `index.html`:
```html
<h1 class="text-4xl md:text-6xl font-dancing font-bold text-pink-600 mb-4 animate-fade-in">
    💐 For You, My DNC 💌
</h1>
```

### Adding More Flowers
Edit the `flowers` array in `script.js`:
```javascript
const flowers = [
    {
        icon: '🌷',
        name: 'Tulip',
        message: 'Your custom sweet message here! 💕'
    },
    // Add more flowers...
];
```

### Changing Colors
Modify the color classes in `index.html` and `styles.css`:
- Pink theme: `text-pink-600`, `bg-pink-100`, etc.
- Purple theme: `text-purple-600`, `bg-purple-100`, etc.

### Adding Real Email Functionality
Uncomment and configure the email service in `script.js`:

#### Option 1: Formspree (Free)
1. Go to [formspree.io](https://formspree.io)
2. Create an account and get your endpoint
3. Replace `YOUR_FORMSPREE_ENDPOINT` in the code

#### Option 2: EmailJS (Free tier available)
1. Go to [emailjs.com](https://emailjs.com)
2. Set up your email service
3. Add EmailJS SDK and configure

## 🎵 Background Music

The website includes a background music feature. You can:
- Replace the music URL in `index.html`
- Upload your own romantic music file
- Use a different music service

## 📱 Mobile Optimization

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎭 Easter Eggs

- Click 10 times anywhere on the page to discover a special hidden message
- Click on flowers to see heart particle effects
- Try different combinations of interactions

## 🛠️ Technical Details

- **HTML5**: Semantic markup with modern structure
- **CSS3**: Tailwind CSS with custom animations
- **JavaScript**: Vanilla JS with modern ES6+ features
- **Fonts**: Google Fonts (Dancing Script, Poppins)
- **Icons**: Unicode emoji flowers
- **Animations**: CSS keyframes and JavaScript animations

## 🌟 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📄 License

This project is created with love and is free to use and modify for personal purposes.

## 💝 Special Thanks

Created with 💕 for that special someone who makes every day feel like spring! 🌸

---

**Note**: This is a frontend-only application. For email functionality, you'll need to set up a service like Formspree or EmailJS as mentioned above.

**Happy Deploying!** 🚀💐 