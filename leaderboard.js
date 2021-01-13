// Your code goes here. Feel free to make helper classes if needed
class Player {
    constructor() {
        this.scores = [];
        this.average = 0;
    }
    getAverage() {
        let value = 0;
        for (let i = 0; i < this.scores.length; i++) {
            value += this.scores[i];
        }
        this.average = value / this.scores.length;
        return this.average;
    }
}
class LeaderBoard {
    constructor() {
        this.players = {};
    }
    add_score = (player_id, score) => {
        // create new player if not in players -- fill out players obj
        // add score to that player
        if (this.players[player_id]) {
            this.players[player_id].scores.push(score);
        } else {
            const player = new Player();
            player.scores.push(score);
            this.players[player_id] = player; // this.players = { player_id: player }
        }
        // get the average
        return this.players[player_id].getAverage();
    };
    top = (num_players) => {
        // return array of top players that is num_players long
        // find players with the top average scores
        const scores = [];
        for (let id in this.players) {
            scores.push([id, this.players[id].average]);
        }
        const sorted_scores = quickSort(scores);
        // take the num_players long slice from the front
        let top_players = [];
        for (let player of sorted_scores.slice(0, num_players)) {
            top_players.push(parseInt(player[0]));
        }
        return top_players;
    };
    reset = (player_id) => {
        //set player scores to empty and average to 0
        if (this.players[player_id]) {
            this.players[player_id].scores = [];
            this.players[player_id].average = 0;
        } else {
            return 'Player does not exist';
        }
    };
}
quickSort = (arr) => {
    //arr is array of arrays [id, score]
    // reverse sort the array of arrays by second index of each inner array
    // input: [[id4, score4], [id1, score1]....]
    // output: [[id1, score1], [id2, score2]....]
    // quick sort splits the array with a pivot by getting everything lower into one group and everyhitng higher into another
    // moving until we have what we know are sorted units
    if (arr.length <= 1) {
        return arr;
    } // basecase
    let pivot = arr[arr.length - 1];
    let lower = [];
    let higher = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][1] < pivot[1]) {
            lower.push(arr[i]);
        } else {
            higher.push(arr[i]);
        }
    }
    return quickSort(higher).concat([pivot], quickSort(lower)); // recursive call
};
// Test code here
function array_equals(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function testSort() {
    let arr = [
        [1, 4],
        [7, 2],
        [9, 5],
        [6, 3],
        [8, 1]
    ];
    let sortedArr = quickSort(arr);
    console.log('Sort works?', sortedArr, '=?', [
        [9, 5],
        [1, 4],
        [6, 3],
        [7, 2],
        [8, 1]
    ]);
}
testSort();
var leader_board = new LeaderBoard();
console.log('Add score should return the average.');
leader_board.add_score(1, 50);
console.log(leader_board.add_score(2, 80) == 80);
console.log(leader_board.add_score(2, 70) == 75);
console.log(leader_board.add_score(2, 60) == 70);
console.log('Add score should return the average. test with 1 score');
console.log(leader_board.add_score(3, 90) == 90);
console.log('Add score should return the average. test with 2 scores');
console.log(leader_board.add_score(3, 85) == 87.5);
console.log('Top 3 [' + leader_board.top(3) + '] should equal [3, 2, 1]:');
console.log(array_equals(leader_board.top(3), [3, 2, 1]));
console.log('Top 2 [' + leader_board.top(2) + '] should equal [3, 2]:');
console.log(array_equals(leader_board.top(2), [3, 2]));
leader_board.reset(3);
console.log('After reset top 3 [' + leader_board.top(3) + '] should equal [2, 1, 3]');
console.log(array_equals(leader_board.top(3), [2, 1, 3]));