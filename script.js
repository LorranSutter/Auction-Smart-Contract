// Register button

function newBidder() {
    document.querySelector('#new-bidder-msg').style.opacity = 1;
}

document.querySelector('#register-button').addEventListener('click', newBidder);

// Place new bid button

function newBid() {
    document.querySelector('.bid-inputs > select').value = 'Address 1';
    document.querySelectorAll('.bid-inputs > input').forEach(x => x.value = '');
    document.querySelector('#new-bid-msg').style.opacity = 1;
}

document.querySelector('#bid-button').addEventListener('click', newBid);

// Reveal Winners button

function showWinners() {
    document.querySelector('.winners-list').style.opacity = 1;
}

document.querySelector('#revealWinners-button').addEventListener('click', showWinners);