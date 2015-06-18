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
  var solution = new Board({ n : n });

  var fillRowWithRook = function(r, board) {
    for(var i = 0; i < n; i++) {
      board.togglePiece(r, i);
      if(!board.hasAnyRooksConflictsOn(r, i)) { // write hasAnyRooksConflictsOn(r,c) to optimize this
        if(r === n - 1) {
          return board;
        } else {
          return fillRowWithRook(r + 1, board);
        }
      } else {
        board.togglePiece(r, i);
      }
    }

    return undefined;
  }

  solution = fillRowWithRook(0, solution);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var solution = new Board({ n : n});

  var fillRowWithRook = function(r, board) {

    for(var i = 0; i < n; i++) {
      board.togglePiece(r, i);
      if(!board.hasAnyRooksConflictsOn(r,i)) { // write hasAnyRooksConflictsOn(r,c) to optimize this
        if(r === n - 1) {
          solutionCount++;
          board.togglePiece(r, i);
        } else {
          fillRowWithRook(r + 1, board);
          board.togglePiece(r, i);
        }
        //
      } else {
        board.togglePiece(r, i)
      }
    }
  }
  fillRowWithRook(0, solution);
  // var factorial = function(n) {
  //   if (n<=1) {
  //     return 1;
  //   } else {
  //     return n * factorial(n-1);
  //   }
  // }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({ n : n });

  var fillRowWithQueen = function(r, board) {
    var printBoard = function() {
      for(var i=0; i < n; i++) {
        console.log(board.get(i));
      }
    }

    for(var i = 0; i < n; i++) {
      board.togglePiece(r, i);
      if(!board.hasAnyQueenConflictsOn(r, i)) {
        if(r === n - 1) {
          return board;
        } else {
          var solvedBoard = fillRowWithQueen(r + 1, board);
          if(solvedBoard) {
            return solvedBoard;
          } else {
            board.togglePiece(r, i)
          }
        }
      } else {
        board.togglePiece(r, i)
      }
    }

    if(r === 0) {
      return new Board({ n : n });
    } else {
      return undefined;
    }
  }

  solution = fillRowWithQueen(0, solution);


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var solution = new Board({n : n});

  var fillRowWithQueen = function(r, board) {
    var printBoard = function() {
      for(var i=0; i < n; i++) {
        console.log(board.get(i));
      }
    }

    for(var i = 0; i < n; i++) {
      board.togglePiece(r,i);
      if(!board.hasAnyQueenConflictsOn(r, i)) {
        if(r === n - 1) {
          solutionCount++;
          board.togglePiece(r, i);
        } else {
          fillRowWithQueen(r + 1, board);
          board.togglePiece(r, i);
        }
      } else {
        board.togglePiece(r, i)
      }
    }
  }

  fillRowWithQueen(0, solution);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return (n === 0) ? 1 : solutionCount;
};





