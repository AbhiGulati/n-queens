var countQueenSolutions = function(n) {

  var all = Math.pow(2,n)-1;
  var count = 0;

  var fillNextRow = function(ld, cols, rd) {
    if( cols === all ) {
      count++;
      return;
    }

    var poss = ~(ld | cols | rd) & all;
    var bit;
    while(poss) {
      bit = poss & -poss;
      poss -= bit;
      // Utilized zero-fill right shift so '0' always
      // enters the board.
      fillNextRow( (ld|bit)<<1, cols|bit, (rd|bit)>>>1 );
    }
  }

  fillNextRow(0, 0, 0);
  return count;
}
//24, 128+64+8+1, 4+8+16
var countRookSolutions = function(n) {

  var all = Math.pow(2,n)-1;
  var count = 0;

  var fillNextRow = function(cols) {
    if( cols === all ) {
      count++;
      return;
    }

    var poss = ~(cols) & all;
    var bit;
    while(poss) {
      bit = poss & -poss;
      poss -= bit;
      fillNextRow(cols|bit);
    }
  }

  fillNextRow(0);
  return count;
}
