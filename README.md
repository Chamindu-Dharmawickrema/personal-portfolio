# Chamindu Dharmawickrama - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my journey as a Software Engineering undergraduate and full-stack developer.

## 🌟 Features

### ✨ Interactive Elements

-   **Animated Loading Screen**: Custom typewriter animation with loading bar
-   **Dynamic Typing Effect**: Animated hero text with smooth transitions
-   **Scroll Animations**: Reveal-on-scroll animations for enhanced user experience
-   **Responsive Design**: Fully optimized for all device sizes

### 🎨 Modern UI/UX

-   **Dark Theme**: Professional dark color scheme with blue/cyan accents
-   **Gradient Effects**: Smooth gradient text and hover animations
-   **Glass Morphism**: Backdrop blur effects and translucent elements
-   **Mobile-First**: Responsive navigation with hamburger menu

### 📧 Contact Integration

-   **EmailJS Integration**: Direct email functionality through contact form
-   **Form Validation**: Real-time form validation with loading states
-   **Success Feedback**: Animated success messages for user confirmation

### 📱 Responsive Features

-   **Mobile Pagination**: Project pagination on smaller screens
-   **Adaptive Layouts**: Dynamic content arrangement based on screen size
-   **Touch-Friendly**: Optimized for mobile interactions

## 🛠️ Tech Stack

### Frontend

-   **React 19.1.0**: Modern React with hooks and functional components
-   **Vite 6.3.5**: Fast build tool and development server
-   **Tailwind CSS 4.1.5**: Utility-first CSS framework for styling

### Additional Libraries

-   **React Icons 5.5.0**: Icon library for consistent iconography
-   **EmailJS 3.2.0**: Client-side email service integration
-   **React GA4 2.1.0**: Google Analytics 4 integration for tracking

### Development Tools

-   **ESLint**: Code linting and formatting
-   **Vite Plugin React**: React support for Vite

## 🏗️ Project Structure

```
portfolio/
├── public/                          # Static assets
│   ├── Chamindu Dharmawickrama.pdf   # Resume/CV
│   ├── chamindu.jpg                  # Profile images
│   ├── chaminduNew.jpg
│   ├── logo/                        # Technology icons
│   │   ├── css.png
│   │   ├── django.png
│   │   ├── html.png
│   │   ├── java.png
│   │   ├── javascript.png
│   │   ├── mongodb.png
│   │   ├── mysql.png
│   │   ├── next.png
│   │   ├── node.png
│   │   ├── python.png
│   │   ├── react.png
│   │   └── tailwind.png
│   └── projects/                    # Project screenshots
│       ├── booking.png
│       ├── chroma.png
│       ├── coffee.png
│       ├── evergreen.png
│       ├── portfolio.png
│       ├── progression.png
│       ├── shutr.png
│       └── sms.png
├── src/
│   ├── components/
│   │   ├── sections/               # Main page sections
│   │   │   ├── Home.jsx           # Hero section with typing animation
│   │   │   ├── About.jsx          # About, skills, education, certifications
│   │   │   ├── Projects.jsx       # Project showcase with pagination
│   │   │   └── Contact.jsx        # Contact form with EmailJS
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx      # Animated loading screen
│   │   ├── MobileMenu.jsx         # Mobile navigation
│   │   ├── Navbar.jsx             # Desktop/mobile navigation
│   │   └── RevealOnScroll.jsx     # Scroll animation component
│   ├── assets/
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # Component-specific styles
│   ├── index.css                  # Global styles and animations
│   └── main.jsx                   # Application entry point
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn package manager

### Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd portfolio
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with your EmailJS credentials:

    ```env
    VITE_SERVICE_ID=your_emailjs_service_id
    VITE_TEMPLATE_ID=your_emailjs_template_id
    VITE_PUBLIC_KEY=your_emailjs_public_key
    ```

4. **Start development server**

    ```bash
    npm run dev
    ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📧 EmailJS Setup

This portfolio uses EmailJS for the contact form functionality. To set up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file


## 🔧 Key Components

### Home Section (`Home.jsx`)

-   Typewriter animation effect
-   Dynamic text display
-   Profile image with hover effects
-   Call-to-action buttons

### About Section (`About.jsx`)

-   Tabbed interface (Skills, Education, Certifications)
-   Technology stack icons
-   Interactive skill cards
-   Educational timeline

### Projects Section (`Projects.jsx`)

-   Project cards with hover effects
-   Technology badges
-   External links to live demos and repositories
-   Mobile pagination system

### Contact Section (`Contact.jsx`)

-   EmailJS integration
-   Form validation
-   Loading states and success feedback
-   Responsive form design

### Loading Screen (`LoadingScreen.jsx`)

-   Typewriter animation
-   Progress bar animation
-   Smooth transition to main content

### RevealOnScroll (`RevealOnScroll.jsx`)

-   Intersection Observer API
-   Smooth reveal animations
-   Configurable delay and threshold

## 📱 Responsive Design

The portfolio is built with a mobile-first approach:

-   **Mobile (< 640px)**: Single column layout, hamburger menu, project pagination
-   **Tablet (640px - 1024px)**: Two-column layouts, expanded navigation
-   **Desktop (> 1024px)**: Full multi-column layouts, all projects visible

## 🔍 SEO and Performance

-   **Fast Loading**: Vite build optimization
-   **Responsive Images**: Optimized image sizes
-   **Semantic HTML**: Proper heading structure and landmarks
-   **Analytics**: Google Analytics 4 integration
-   **Meta Tags**: Proper page titles and descriptions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Chamindu Dharmawickrama**

-   🌐 Portfolio: [Live Demo](https://chamindudharmawickrema.netlify.app/)
-   📧 Email: [Contact Form](#contact)
-   💼 LinkedIn: [Connect with me](https://linkedin.com/in/chamindu-dharmawickrama)
-   🐙 GitHub: [View my repositories](https://github.com/Chamindu-Dharmawickrema)

---