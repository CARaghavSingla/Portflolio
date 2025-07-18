# Portfolio Website with Email Functionality

A modern portfolio website with contact form email functionality using Vercel serverless functions.

## Features

- Responsive portfolio design
- Contact form with email functionality
- Gmail SMTP integration
- Vercel deployment ready
- GitHub Pages compatible

## Email Configuration

The email functionality uses Gmail SMTP. For security, use environment variables:

### Environment Variables (Optional)
Create a `.env` file in the root directory:
```
EMAIL_USER=singlaraghav200@gmail.com
EMAIL_PASS=koktjekphbrlojuj
RECIPIENT_EMAIL=singlaraghav200@gmail.com
```

**Note**: If environment variables are not set, the default credentials will be used.

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```

3. **Set Environment Variables in Vercel Dashboard**:
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add the email configuration variables

### Option 2: GitHub Pages + Vercel Functions

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy Vercel Functions**:
   - Connect your GitHub repository to Vercel
   - Vercel will automatically deploy the API functions

3. **Update API URL**:
   - After deployment, update the API URL in `main.js` to your Vercel domain

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create environment file** (optional):
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

3. **Run locally**:
   ```bash
   vercel dev
   ```

## File Structure

```
├── index.html              # Main HTML file
├── packages/               # Static assets
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   └── images/            # Images
├── api/                   # Vercel serverless functions
│   └── send-email.js      # Email API endpoint
├── package.json           # Dependencies
├── vercel.json           # Vercel configuration
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## Email API

The `/api/send-email` endpoint accepts POST requests with:
- `name`: Sender's name
- `email`: Sender's email
- `subject`: Email subject
- `message`: Email message

## Security Notes

- Environment variables are used for email credentials
- Fallback to default credentials if env vars not set
- The app-specific password should be kept secure
- Consider using Vercel's environment variable feature for production

## Technologies Used

- HTML5, CSS3, JavaScript
- Nodemailer for email sending
- Vercel for serverless functions
- Gmail SMTP for email delivery
- GitHub for version control

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this template for your own portfolio!
