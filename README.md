# Decagon Website

A modern medical and health website template built with Next.js 14, featuring multiple homepage variants, responsive design, and interactive components.

## 🚀 Features

- **Multiple Homepage Variants**: 3 different homepage layouts (home1, home-v2, home-v3)
- **Responsive Design**: Fully responsive across all devices
- **Modern UI**: Built with Bootstrap 5 and custom SCSS
- **Interactive Components**: Slick carousel sliders, contact forms, and maps
- **SEO Optimized**: Meta tags, Open Graph support
- **Font Optimization**: Google Fonts (Rubik & Poppins) with Next.js font optimization

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js**: Version 18.0 or higher ([Download here](https://nodejs.org/))
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: For version control ([Download here](https://git-scm.com/))

## 🛠️ Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/stansL/decagon_website.git
cd decagon_website
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies including:
- Next.js 14.2.15
- React 18
- Bootstrap 5.3.3
- React Bootstrap 2.10.5
- Sass 1.79.5
- React Slick for carousels
- React Icons

### 3. Run the Development Server

```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### 4. Alternative Development Methods

You can also use other package managers:

```bash
# Using Yarn
yarn install
yarn dev

# Using pnpm
pnpm install
pnpm dev

# Using Bun
bun install
bun dev
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
decagon_website/
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   └── app/
│       ├── (home1)/       # Default homepage
│       ├── (innerpage)/   # Inner pages (about, contact, etc.)
│       ├── home-v2/       # Alternative homepage variant 2
│       ├── home-v3/       # Alternative homepage variant 3
│       ├── Components/    # Reusable React components
│       ├── sass/          # SCSS stylesheets
│       └── layout.js      # Root layout component
├── server.js              # Custom Next.js server (optional)
└── package.json
```

## 🌐 Homepage Variants

The website includes three different homepage designs:

1. **Default Home** (`/`) - Main homepage with hero slider and comprehensive sections
2. **Home V2** (`/home-v2`) - Alternative layout variant
3. **Home V3** (`/home-v3`) - Third homepage variant with different styling

## 📱 Key Pages

- **Home**: `/` - Main homepage
- **About**: `/about` - About us page
- **Services**: `/service` - Services overview
- **Doctors**: `/doctors` - Team/doctors page
- **Contact**: `/contact` - Contact form and location map
- **Blog**: `/blog` - Blog listing
- **Appointments**: `/appointments` - Appointment booking

## 🗺️ Location Configuration

The website is configured to display Karen Village, Nairobi, Kenya on maps. Map configurations can be found in:
- `src/app/home-v3/page.jsx`
- `src/app/(innerpage)/contact/page.jsx`

## 🎨 Styling

The project uses:
- **Bootstrap 5.3.3** for responsive grid and components
- **Custom SCSS** in `src/app/sass/style.scss`
- **Google Fonts**: Rubik and Poppins
- **React Slick** for carousel components

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `jsconfig.json` - JavaScript/TypeScript path configuration
- `package.json` - Dependencies and scripts

## 🚀 Building for Production

```bash
npm run build
npm start
```

## 🔍 Troubleshooting

### Common Issues

1. **Port already in use**: If port 3000 is occupied, Next.js will automatically use the next available port
2. **Module not found**: Run `npm install` to ensure all dependencies are installed
3. **Build errors**: Check that all dependencies are compatible and run `npm run lint`

### Performance Tips

- Images are automatically optimized by Next.js
- Fonts are optimized using `next/font`
- Use `npm run build` to check for any build-time errors

## 📞 Support

For support or questions about this project, please contact the development team or open an issue in the repository.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
