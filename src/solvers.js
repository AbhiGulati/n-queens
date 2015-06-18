/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({ n : n });
  var solution;

  var fillRowWithRook = function(r) {
    for(var i = 0; i < n; i++) {
      board.togglePiece(r, i);
      if(!board.hasAnyRooksConflictsOn(r, i)) {
        // if we have put a rook in the last row, save the solution
        if(r === n - 1) {
          solution = _.map(board.rows(), function(row) {
            return row.slice()
          });
          return;
        }
        // if we are not in the last row, find a place for a rook in the next row
        else {
          fillRowWithRook(r + 1);
          if(solution) {
            return;
          }
        }
      }
      board.togglePiece(r, i);

    }
  }

  fillRowWithRook(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({ n : n});

  var fillRowWithRook = function(r) {
    for(var i = 0; i < n; i++) {
      board.togglePiece(r, i);
      if(!board.hasAnyRooksConflictsOn(r,i)) {
        if(r === n - 1) {
          solutionCount++;
        } else {
          fillRowWithRook(r + 1, board);
        }
      }
      board.togglePiece(r, i);
    }
  }
  fillRowWithRook(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({ n : n });
  var solution;

  var fillRowWithQueen = function(r) {

    for(var i = 0; i < n; i++) {
      board.togglePiece(r, i);
      if(!board.hasAnyQueenConflictsOn(r, i)) {
        if(r === n - 1) {
          solution = _.map(board.rows(), function(row) {
            return row.slice()
          });
          return;
        }
        else {
          fillRowWithQueen(r + 1, board);
          if(solution) {
            return;
          }
        }
      }
      board.togglePiece(r, i);
    }
  }

  fillRowWithQueen(0);
  if(!solution) {
    solution = (new Board({ n : n })).rows();
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n : n});

  var fillRowWithQueen = function(r) {
    for(var i = 0; i < n; i++) {
      board.togglePiece(r,i);
      if(!board.hasAnyQueenConflictsOn(r, i)) {
        if(r === n - 1) {
          solutionCount++;
        } else {
          fillRowWithQueen(r + 1);
        }
      }
      board.togglePiece(r, i)
    }
  }

  fillRowWithQueen(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return (n === 0) ? 1 : solutionCount;
};





