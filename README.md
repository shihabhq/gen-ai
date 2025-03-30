# Gen AI Analytics Dashboard

A react and Redux built analytics chat application UI that enables not technical users to write complex business queries in natural human language and the App shows a visual representation using charts and graphs. This app has a modern UI with AI loading simulation, query history persistence and structured code. It took sometime to research and prepare system design and then the functional application became live.

![GEN AI Preview](/public/image.png)

## Live Demo

[ View Live Demo](https://growth-genai.netlify.app/)

## Key Features

- **Modern and Responsive UI**: The UI is modern with a blend of color and component structure design
- **Responsive Dashboard**: The dashboard is totally responsive and becomes a floating dashboard in smaller devices.
- **AI chatbot simulating Chat Input**: The chat input component is designed as if it was a real world application and attention to detail was apparant
- **AI generated simulated loading**: The loading component is simulated in a way as if an AI is responding withing a while. This enhances user experience.
- **Industry standard folder structure**: A proper folder structure is maintained to make a scalable application.

## System Design

It took sometime to prepare the system design and after that the whole process became easy
![GEN AI Preview](/public/gen%20ai.png)

## Tech Stack:

- **Frontend**: React, Redux, TailwindCSS
- **Visualization**: MUI X Charts
- **Hosting**: Netlify

## Project Structure

```
src/
App.jsx
assets
components
   ├── chat
   ├── chatboard
   ├── dashboard
   └── loading
index.css
layout
   └── HomeLayout.jsx
main.jsx
pages
   ├── HistoryPage.jsx
   ├── HomePage.jsx
   └── NotFound.jsx
 store
   ├── slices
    └── store.js
```

## Getting Started:

1. Clone the repository:
   ```bash
   git clone git@github.com:shihabhq/gen-ai.git
   ```
2. Install Dependencies:
   ```bash
   yarn
   ```
3. Start the development server:
   ```bash
   yarn dev
   ```

## Credit

desing credit: [Link](https://dribbble.com/shots/25024222-Chatbot-Report-UI-Design)
