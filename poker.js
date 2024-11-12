// Define global variables
let playerChips = 1000;
let playerHand = [];
let communityCards = [];
let opponentHand = [];

// Initialize game
function initGame() {
    playerHand = dealHand();
    opponentHand = dealHand();
    communityCards = [];

    // Show initial cards
    displayPlayerHand();
    displayCommunityCards();
    displayOpponentHand();
}

// Deal two cards to the player
function dealHand() {
    const suits = ['♠', '♣', '♦', '♥'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let hand = [];
    for (let i = 0; i < 2; i++) {
        let value = values[Math.floor(Math.random() * values.length)];
        let suit = suits[Math.floor(Math.random() * suits.length)];
        hand.push(value + suit);
    }
    return hand;
}

// Display player hand
function displayPlayerHand() {
    document.getElementById('yourCard1').innerText = playerHand[0];
    document.getElementById('yourCard2').innerText = playerHand[1];
}

// Display opponent hand (hidden)
function displayOpponentHand() {
    document.getElementById('opponentCard1').innerText = "??";
    document.getElementById('opponentCard2').innerText = "??";
}

// Display community cards
function displayCommunityCards() {
    communityCards.forEach((card, index) => {
        document.getElementById('card' + (index + 1)).innerText = card;
    });
}

// Button for dealing flop, turn, and river
document.getElementById('betButton').addEventListener('click', () => {
    // Placeholder for betting and dealing community cards
    if (communityCards.length < 5) {
        dealCommunityCard();
    }
});

// Deal community card (Flop, Turn, River)
function dealCommunityCard() {
    const suits = ['♠', '♣', '♦', '♥'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let value = values[Math.floor(Math.random() * values.length)];
    let suit = suits[Math.floor(Math.random() * suits.length)];
    let card = value + suit;
    communityCards.push(card);
    displayCommunityCards();
}

// Initialize the game when the page loads
initGame();
