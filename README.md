# React Immersive Code Challenge: Bot Battlr  

Welcome to **Bot Battlr**, the ultimate React challenge where you get to build and manage your own custom Bot Army! Command your bots, discharge them, or send them to battle — all through a sleek, dynamic interface.

![Bot Battlr Demo](https://curriculum-content.s3.amazonaws.com/phase-2/phase-2-hooks-code-challenge-bot-battlr/checkpoint_demo.gif)

---

##  Setup Instructions

1. Run `npm install` to install dependencies.
2. Start the backend server with `npm run server` (runs on port `8002`).
3. Open a new terminal tab and run `npm start` to launch the frontend React app (runs on port `8000`).

👉 Verify the backend is running by visiting: [http://localhost:8002/bots](http://localhost:8002/bots)

**Base API URL:** `http://localhost:8002`

---

##  React Components Overview

- **`App`**: Root component wrapping the entire application.
- **`BotPage`**: Main layout below `App`, containing all key components.
- **`BotCollection`**: Displays the complete list of available bots.
- **`ArmyRoster` (YourBotArmy)**: Shows bots selected by the user.
- **`BotCard`**: Reusable card component for bot previews.
- **`BotDetail`**: Displays detailed information about a selected bot.
- **`SortControls` / `ClassFilter` / `FilterBar`**: Provide filtering and sorting functionality.

---

##  Core Features & Deliverables

As a user, you can:

-  View **all bot profiles** in the collection.
-  **Add a bot** to your army by clicking on it (only once).
-  View your **bot army** at the top of the screen.
-  **Release a bot** from your army by clicking on it.
-  **Discharge a bot forever** using the red “X” — removes it from both frontend and backend.

---

##  Backend API Routes

### `GET /bots`

Returns all bots:

```json
[
    {
        "id": 101,
        "name": "wHz-93",
        "health": 94,
        "damage": 20,
        "armor": 63,
        "bot_class": "Support",
        "catchphrase": "1010010101001101100011000111101",
        "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1"
    },
    ...
]
```

### `DELETE /bots/:id`

Deletes a specific bot:

```json
{}
```

---

## Technologies Used

- React
- React Hooks (`useState`, `useEffect`)
- JSON Server
- JavaScript (ES6+)
- HTML & CSS

---

##  Challenges Faced

- Managing state across multiple components (e.g., army vs. collection).
- Implementing full CRUD operations (GET, POST, DELETE).
- Handling conditional rendering and event bubbling.

---

## 🏁 Final Thoughts

This project was a great way to practice full CRUD in React with a JSON server backend. It demonstrates effective state management, component reusability, and interactive UI design.

Made with 💙 by Michael Ouma
