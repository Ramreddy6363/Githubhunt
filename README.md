# GitHub Hunt 🔍

A modern, responsive GitHub user search application built with React, TypeScript, and Tailwind CSS. Search for GitHub users, view their profiles, and keep track of your recent searches with a beautiful, intuitive interface.

## ✨ Features

- 🔍 **Smart Search** - Search GitHub users with real-time suggestions
- ⚡ **Instant Results** - Fast and responsive user profile display
- 💾 **Recent Searches** - Automatically saves your last 5 searches
- 🎨 **Modern UI** - Beautiful glass-morphism design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop and mobile devices
- 🌙 **Dark Theme** - Easy on the eyes with a sleek dark interface
- ⌨️ **Debounced Input** - Optimized search with debouncing to reduce API calls
- 🚀 **Performance** - Query caching and prefetching with React Query

## 🛠️ Tech Stack

- **React 19** - Latest React with modern hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Query (@tanstack/react-query)** - Powerful data fetching and caching
- **React Icons** - Beautiful icon library
- **use-debounce** - Debouncing for optimized search

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/github-hunt.git
cd github-hunt
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
VITE_API_URL=https://api.github.com
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 📦 Build

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🎯 Usage

1. **Search for Users**: Type a GitHub username in the search bar
2. **View Suggestions**: See real-time suggestions as you type
3. **View Profile**: Click on a suggestion or press "Search" to view full profile details
4. **Recent Searches**: Access your recent searches below the search results
5. **Clear History**: Remove all recent searches with the clear button

## 📁 Project Structure

```
github-hunt/
├── src/
│   ├── api/           # API functions
│   ├── components/    # React components
│   │   ├── UserCard.tsx
│   │   ├── UsersSearch.tsx
│   │   ├── RecentSearch.tsx
│   │   └── Suggestion.tsx
│   ├── types.ts       # TypeScript type definitions
│   ├── App.tsx        # Main app component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── public/            # Static assets
└── README.md
```

## 🎨 Features in Detail

### User Profile Display

- Avatar with styled border
- Name and username
- Bio (if available)
- Statistics: Repositories, Followers, Following
- Direct link to GitHub profile

### Smart Suggestions

- Debounced search to minimize API calls
- Dropdown with user avatars and usernames
- Click to instantly view profile
- Hover prefetching for better performance

### Recent Searches

- Automatically stores last 5 searches in localStorage
- Quick access to previously searched users
- Clear all history option
- Hover prefetching for instant loading

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- GitHub API for providing user data
- Tailwind CSS for the beautiful styling system
- TanStack Query for excellent data management

---

Built with ❤️ using React + TypeScript + Vite
