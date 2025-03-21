module.exports = {
    MAX_THREADS: 5,  // Maximum simultaneous accounts running
    TAP_COUNT: 900,   // Tap limit per session
    DELAY_BETWEEN_BATCHES: 60 * 1000,  // Delay after batch completion
    CYCLE_RESET_DELAY: 2 * 60 * 1000,  // Delay before restarting processed tokens
    TOKEN_FILE: 'tokens.txt',  // File where tokens are stored
};
