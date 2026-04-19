@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 10%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 10%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 10%;
    --primary: 4 63% 46%;
    --primary-foreground: 0 0% 100%;
    --secondary: 40 6% 97%;
    --secondary-foreground: 0 0% 10%;
    --muted: 40 6% 97%;
    --muted-foreground: 0 0% 45%;
    --accent: 40 6% 97%;
    --accent-foreground: 0 0% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 91%;
    --input: 0 0% 91%;
    --ring: 4 63% 46%;
    --chart-1: 4 63% 46%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;

    --font-bebas: 'Bebas Neue', cursive;
    --font-inter: 'Inter', sans-serif;
    --anarchy-black: #111111;
    --anarchy-red: #c0392b;
    --anarchy-slate: #f7f7f5;
    --anarchy-border: #e8e8e8;
  }

  .dark {
    --background: 0 0% 7%;
    --foreground: 0 0% 98%;
    --card: 0 0% 7%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 7%;
    --popover-foreground: 0 0% 98%;
    --primary: 4 63% 46%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 4 63% 46%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
    font-family: var(--font-inter);
    scroll-behavior: smooth;
  }
}

/* Custom scrollbar - The Razor Scroll */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #111111;
}
::-webkit-scrollbar-thumb {
  background: #c0392b;
  border-radius: 3px;
}

/* Noona pulse animation */
@keyframes noona-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(192, 57, 43, 0.4); }
  50% { box-shadow: 0 0 0 6px rgba(192, 57, 43, 0); }
}
.noona-pulse {
  animation: noona-pulse 3s ease-in-out infinite;
}

/* Contact card hover */
.contact-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-top 0.3s ease;
  border-top: 3px solid transparent;
}
.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  border-top-color: #c0392b;
}

/* Instagram pill slide-in fill */
.instagram-pill {
  background: #f7f7f5;
}
.instagram-pill::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #c0392b;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  border-radius: inherit;
}
.instagram-pill:hover::before {
  transform: translateX(0);
}

/* Nav underline animation */
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #c0392b;
  transition: width 0.3s ease;
}
.nav-link:hover::after {
  width: 100%;
}
