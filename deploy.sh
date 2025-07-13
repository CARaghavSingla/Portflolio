#!/bin/bash

# Portfolio Deployment Script

echo "🚀 Starting deployment process..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update portfolio with email functionality"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No remote repository found."
    echo "Please add your GitHub repository as remote:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
    exit 1
fi

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push origin main

echo "✅ Deployment completed!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Connect to Vercel for automatic deployment"
echo "3. Set environment variables in Vercel dashboard"
echo "4. Your portfolio will be live at your Vercel URL" 