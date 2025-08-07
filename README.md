# 🎮 Tic Tac Toe Game

A simple, interactive Tic Tac Toe game built with HTML, CSS, and JavaScript. This game features a clean, modern interface with smooth page transitions and a complete game flow from welcome screen to gameplay.

## 🌟 Features

- **Multi-Page Flow**: Welcome screen → Player setup → Game board
- **Player Customization**: 
  - Choose X or O
  - Enter custom player names
- **Smart Gameplay**:
  - Random turn assignment after reset
  - Win detection for all possible combinations
  - Draw detection when board is full
  - Visual feedback for moves and wins
- **Interactive UI**:
  - Hover effects on buttons
  - Smooth transitions between screens
  - Responsive design
  - Clean, modern styling

## 🚀 How to Play

1. **Start Game**: Click "VS Player" on the welcome screen
2. **Player 1 Setup**: 
   - Choose X or O
   - Enter Player 1's name
3. **Player 2 Setup**: Enter Player 2's name
4. **Play**: Take turns clicking on the grid squares
5. **Reset**: Click "Reset" button to start a new game

## 📁 Project Structure

```
tic-tac-toe/
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── script.js           # Game logic and interactions
└── README.md           # Project documentation
```

## 🛠️ Technical Implementation

### HTML Structure
- Semantic HTML with proper form handling
- Multiple page sections controlled by CSS display properties
- Accessible form inputs with proper labels and placeholders

### CSS Features
- **Flexbox & Grid**: Modern layout techniques
- **Transitions**: Smooth hover effects and scaling
- **Box Shadows**: Professional depth and styling
- **Responsive Design**: Centered layout with max-width containers

### JavaScript Logic
- **State Management**: Page transitions using display properties
- **Event Handling**: Form submissions, button clicks, game moves
- **Game Logic**: Win detection using predefined winning combinations
- **Random Features**: Random turn assignment on game start/reset

## 🎯 Game Logic

### Win Detection
The game checks for wins using these combinations:
```javascript
winArray = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns  
  [0, 4, 8], [2, 4, 6]              // Diagonals
];
```

### Turn Management
- Random starting player selection
- Turn alternation after each move
- Turn display updates in real-time

## 🚀 Getting Started

1. **Clone/Download** the project files
2. **Open** `index.html` in any modern web browser
3. **Play** the game!

No server setup or dependencies required - it's a pure client-side application.

## 🎨 Customization

### Styling
- Modify colors in `style.css`
- Adjust button sizes and spacing
- Change fonts and typography

### Game Rules
- Add new winning combinations
- Implement different board sizes
- Add computer AI opponent

### Features to Add
- Score tracking across multiple games
- Sound effects
- Animations for wins
- Local storage for player names
- Timer for moves

## 🐛 Known Issues

- None currently reported

## 🤝 Contributing

Feel free to fork this project and submit improvements! Some ideas:
- Add computer AI opponent
- Implement score tracking
- Add animations and sound effects
- Make it mobile-responsive

## 👨‍💻 Author

Created with ❤️ for learning web development fundamentals.

---

**Enjoy playing Tic Tac Toe! 🎉**