# Thea Marketing Website

This is the marketing website for Thea, a professional light meter app for iOS. The website is built with Next.js, Tailwind CSS, and Radix UI.

## Features

- Modern, responsive design
- Blog section with photography tips and tutorials
- FAQ section
- SEO optimized
- Accessible components
- Beautiful animations and transitions

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Open Runde](https://www.typewolf.com/open-runde) - Custom typeface

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/thea.git
   cd thea
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
thea/
├── public/
│   ├── fonts/          # Open Runde font files
│   └── images/         # Images and SVGs
├── src/
│   ├── app/           # Next.js app directory
│   │   ├── blog/      # Blog pages
│   │   ├── faq/       # FAQ page
│   │   └── layout.tsx # Root layout
│   └── components/    # React components
│       └── layout/    # Layout components
├── tailwind.config.ts # Tailwind configuration
└── package.json       # Project dependencies
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Font Installation

This website uses Open Runde, a soft, rounded variant of the Inter typeface. To properly display the fonts, you need to install them on your system:

1. Download the Open Runde font files from [GitHub](https://github.com/lauridskern/open-runde)
2. Install the font files on your system
3. The website will automatically use the locally installed fonts

Open Runde is available in 4 weights:
- Regular (400)
- Medium (500)
- Semi Bold (600)
- Bold (700) 