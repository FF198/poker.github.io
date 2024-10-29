const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck() {
    let deck = [];
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ rank: rank, suit: suit });
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealHand(deck, numCards) {
    return deck.splice(0, numCards);
}

function showHand(hand) {
    return hand.map(card => `${card.rank} of ${card.suit}`).join(', ');
}

function playPoker() {
    const deck = createDeck();
    shuffleDeck(deck);
    
    const playerHand = dealHand(deck, 5);
    const computerHand = dealHand(deck, 5);

    console.log('Your hand:');
    console.log(showHand(playerHand));

    console.log('Computer hand:');
    console.log(showHand(computerHand));

    // Here you can implement more game logic, like comparing hands, etc.
}

console.log('Starting Poker Game...');
playPoker();
