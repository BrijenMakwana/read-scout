# Read Scout (Book Management MacOS App)

## Table of contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Run the project](#run-the-project)
- [Built with](#built-with)

## Overview

### About the App

- **Platform**: macOS app built with `react-native-macos`.
- **Functionality**:
  - Users can search for any books.
  - Book details are fetched from the Google Books API.
  - Users can click on any book to get a detailed view.
  - Users can add books to one of the three bookshelves:
    - **Read**
    - **Currently Reading**
    - **Want to Read**
  - All bookshelves are stored in local storage to prevent data loss when reopening the app.

### Key Features

- **Search and Explore**:
  - Search for books using the Google Books API.
  - View detailed information about any book.

- **Bookshelves Management**:
  - Categorize books into "Read", "Currently Reading", and "Want to Read" shelves.
  - Bookshelves are stored locally, ensuring data persistence across app sessions.

- **AI-Powered Summaries**:
  - Generate book summaries using an AI feature.

- **State Management**:
  - The app uses `zustand` for efficient and simple state management.

- **Navigation**:
  - `React Navigation` is used to manage multiple screens and facilitate smooth navigation between them.

- **Data Fetching**:
  - `TanStack Query` is used for data fetching and caching, ensuring efficient and reliable data management.

- **TypeScript**:
  - The app is developed using `TypeScript` for type safety and better code maintainability.


## Screenshots

<img src="https://i.imgur.com/DfC8Xqh.png" alt="screenshot 1"/>
<img src="https://i.imgur.com/X8SRs3U.png" alt="screenshot 2"/>
<img src="https://i.imgur.com/75Qs2ao.png" alt="screenshot 3"/>
<img src="https://i.imgur.com/azlPqp0.png" alt="screenshot 4"/>
<img src="https://i.imgur.com/aHHqe3J.png" alt="screenshot 5"/>
<img src="https://i.imgur.com/SzLnUib.png" alt="screenshot 6"/>
<img src="https://i.imgur.com/nLzoyac.png" alt="screenshot 7"/>
<img src="https://i.imgur.com/6SK5iPp.png" alt="screenshot 8"/>

## Run the project

First you need to have node and XCode install in your machine to run this project.
Clone this project and open it on any Code Editor or IDE.

Now go to [Google AI Studio](https://aistudio.google.com/app/apikey) to get the API key for Gemini AI. Copy this API key and paste it in .env file.

```
API_KEY=
```

Now run this command. It will install all the dependencies in your project.

```
yarn install
```

Then run this commands to install pods.

```
cd macos
pod install
```

Then run this commands to start the project.

```
yarn mac
```

## Built with

- React Native
- Typescript
- React Navigation
- tanstack-query
- zustand
- async-storage
- Google generative-ai
