# 🖥️ VighneshOS - Terminal Portfolio

![VighneshOS](https://img.shields.io/badge/VighneshOS-v1.0.0-blueviolet)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Gemini AI](https://img.shields.io/badge/Gemini-AI--Powered-ff6f00)

A revolutionary terminal-based portfolio experience powered by AI. Not just a portfolio with a terminal aesthetic — this **IS** a terminal with embedded Gemini AI.

## ✨ Features

### 🎯 Core Experience
- **Real Terminal OS**: Boot sequence, command system, shell simulation
- **AI Chat Integration**: Talk to an AI version of Vighnesh via Gemini API
- **Full Command Suite**: 20+ interactive commands with autocomplete
- **Dual Chat Modes**: Inline terminal queries or full split-screen chat panel
- **Theme System**: 4 beautiful color schemes (Midnight, Hacker, Dracula, Nord)

### ⚡ Technical Features
- Built with **Next.js 14+** and **TypeScript**
- **Gemini 2.0 Flash** for AI responses
- Real-time **streaming responses**
- Command history with ↑↓ navigation
- Tab autocomplete system
- Mobile-optimized with virtual keyboard
- Contact form via **Resend API**
- Resume preview with PDF rendering

### 🎨 Design
- **Premium dark terminal** aesthetic (not retro green)
- macOS-style window chrome
- Blinking block cursor animation
- Matrix rain background effect (toggleable)
- Smooth typewriter output streaming
- Glassmorphism UI elements

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))
- Resend API key ([Get one here](https://resend.com/api-keys))

### Installation

```bash
# Clone the repository
git clone https://github.com/saivighnesh2190/terminal-portfolio.git
cd terminal-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and watch the magic unfold.

## 📋 Available Commands

| Command | Description |
|---------|-------------|
| `help` | Show all available commands |
| `whoami` | Learn about Vighnesh |
| `skills` | View technical skills |
| `ls projects/` | List all projects |
| `cat <project>` | Read project details |
| `experience` | Work & internship history |
| `education` | Academic background |
| `certifications` | View all certifications |
| `contact` | Open contact form |
| `resume` | Download or preview resume |
| `social` | Show social links |
| `ask [question]` | Chat with AI Vighnesh |
| `github` | Open GitHub profile |
| `neofetch` | System info with ASCII art |
| `theme <name>` | Change color theme |
| `clear` | Clear terminal |
| `history` | Show command history |
| `matrix` | Toggle matrix effect |

## 🤖 AI Integration

The portfolio features two AI interaction modes:

### Inline Mode
```bash
vighnesh@portfolio:~$ ask What projects have you built?
🤖 AI Vighnesh: I've built several exciting projects...
```

### Chat Panel Mode
```bash
vighnesh@portfolio:~$ ask
# Opens split-screen chat interface
```

The AI is powered by **Gemini 2.0 Flash** and responds as Vighnesh based on his actual portfolio data.

## 🎨 Themes

- **Midnight** (default): Purple/violet accent on deep black
- **Hacker**: Classic green terminal
- **Dracula**: Popular dark theme
- **Nord**: Cool blue palette

Switch themes with: `theme <name>`

## 📱 Mobile Support

Fully responsive with:
- Virtual keyboard trigger
- Quick-command buttons
- Vertical chat panel layout
- Touch-optimized controls

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS Variables
- **AI**: Google Gemini 2.0 Flash
- **Email**: Resend API
- **PDF**: react-pdf
- **Fonts**: JetBrains Mono, Inter
- **Deployment**: Vercel

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main terminal page
│   ├── globals.css         # Theme CSS variables
│   └── api/
│       ├── chat/route.ts   # Gemini streaming endpoint
│       └── contact/route.ts # Email endpoint
├── components/
│   ├── Terminal.tsx        # Main terminal
│   ├── BootSequence.tsx    # Boot animation
│   ├── AIChatPanel.tsx     # Chat interface
│   └── ...
├── lib/
│   ├── commands.ts         # Command handlers
│   ├── ai.ts              # AI logic
│   ├── themes.ts          # Theme definitions
│   └── portfolio-data.ts  # Static content
└── hooks/
    ├── useTerminal.ts     # Terminal state
    └── ...
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel --prod
```

Set environment variables in Vercel dashboard:
- `GEMINI_API_KEY`
- `RESEND_API_KEY`
- `CONTACT_EMAIL`

## 🎁 Easter Eggs

Try these hidden commands:
- `sudo rm -rf /`
- `vim`
- `coffee`
- `ping google.com`
- `ls -la ~/secrets/`

## 📈 Performance

- Lighthouse Score: 98+ Performance
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Zero external image dependencies
- Optimized font loading

## 📄 License

MIT License - feel free to use this as inspiration for your own terminal portfolio!

## 👨‍💻 Author

**N. Sai Vighnesh**
- GitHub: [@saivighnesh2190](https://github.com/saivighnesh2190)
- LinkedIn: [nekkanti-sai-vighnesh](https://linkedin.com/in/nekkanti-sai-vighnesh-2a86b0372)
- Email: nsv2190@gmail.com

---

**Built with 💜 by Vighnesh** • *"Building at the Intersection of Web & Intelligence"*
