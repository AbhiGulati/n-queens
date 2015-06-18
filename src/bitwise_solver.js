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
      fillNextRow( (ld|bit)<<1, cols|bit, (rd|bit)>>>1 );
    }
  }

  fillNextRow(0, 0, 0);
  return count;
}
//24, 128+64+8+1, 4+8+16
