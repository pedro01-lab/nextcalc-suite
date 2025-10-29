# NextCalc - Free Online Calculators

A modern, fast, and mobile-friendly calculator website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Basic Calculator** - Standard math operations with history and copy functionality
- **Loan Calculator** - Calculate monthly payments, interest, and total costs
- **BMI Calculator** - Calculate Body Mass Index with health categories
- **Currency Converter** - Live exchange rates for 20+ currencies
- **Crypto Profit Calculator** - Calculate trading profits, losses, and ROI

## 📱 Key Highlights

- ✨ Clean, modern design with cyan blue accent (#00bcd4)
- 📱 Fully responsive - works perfectly on mobile and desktop
- ⚡ Lightning-fast performance
- 🎯 SEO optimized with proper meta tags
- 💾 Local calculations - your data stays private
- 📰 Newsletter signup integration
- 📊 Ad spaces ready for monetization

## 🛠️ Tech Stack

- **React 18** - Modern UI framework
- **TypeScript** - Type-safe code
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Shadcn/UI** - Beautiful component library
- **React Router** - Client-side routing
- **Exchange Rate API** - Live currency data

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd nextcalc

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

## 🔧 Configuration

### Adding New Calculators

1. Create a new page component in `src/pages/YourCalculator.tsx`
2. Use the `CalculatorLayout` wrapper for consistent design
3. Add your calculator logic and UI
4. Add the route in `src/App.tsx`:
   ```tsx
   <Route path="/your-calculator" element={<YourCalculator />} />
   ```
5. Add navigation link in `src/components/Navigation.tsx`

### Customizing Colors

Edit `src/index.css` to change the design system:
```css
--primary: 187 100% 42%; /* Main accent color */
--background: 0 0% 98%;   /* Background color */
```

### Adding Google AdSense

Replace the `AdSpace` component placeholders in `src/components/AdSpace.tsx` with your actual AdSense code.

### Newsletter Integration

Connect the newsletter form in `src/components/Newsletter.tsx` to your email service (Mailchimp, ConvertKit, etc.)

## 📄 Project Structure

```
src/
├── components/         # Reusable components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Newsletter.tsx
│   ├── AdSpace.tsx
│   └── CalculatorLayout.tsx
├── pages/             # Calculator pages
│   ├── BasicCalculator.tsx
│   ├── LoanCalculator.tsx
│   ├── BMICalculator.tsx
│   ├── CurrencyConverter.tsx
│   ├── CryptoCalculator.tsx
│   ├── Terms.tsx
│   ├── Privacy.tsx
│   └── Contact.tsx
├── App.tsx            # Main app with routing
└── index.css          # Design system
```

## 🎨 Design System

The site uses a semantic design system defined in `src/index.css`:
- Primary color: Cyan blue (#00bcd4)
- Clean typography with good hierarchy
- Smooth transitions and animations
- Card-based layouts
- Mobile-first responsive design

## 📝 SEO Best Practices

- Meta titles and descriptions on every page
- Semantic HTML structure
- Fast loading times
- Mobile-optimized
- Descriptive URLs
- Alt text for images (when added)

## 🔒 Privacy & Data

All calculator inputs are processed locally in the browser. No data is sent to servers except:
- Currency converter API calls (for exchange rates)
- Newsletter signups (when implemented)
- Contact form submissions (when implemented)

## 🤝 Contributing

Feel free to open issues or submit pull requests for improvements.

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For questions or issues, visit the Contact page or open a GitHub issue.

---

Built with ❤️ using React and Tailwind CSS
