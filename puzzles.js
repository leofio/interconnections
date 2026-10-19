// ==========================================================================
//  Interconnections - the puzzle list
//
//  Add a new puzzle by copying an entry and pasting it just before the closing ];
//  Each day shows the next puzzle in the list and wraps back to the first at the end.
//
//    words  - the 9 words, row by row.  words 0-2 are row 1, 3-5 are row 2, 6-8 are row 3,
//             and word i belongs to column i % 3  (so words 0, 3, 6 share a column, etc.)
//    rows   - the clue for each row, top to bottom
//    cols   - the clue for each column, left to right
//
//  Before adding a puzzle, check each word fits exactly ONE row clue and ONE column clue,
//  and that no word could reasonably belong to two groups at once.
// ==========================================================================

const PUZZLES=[
  {words:['Devil','God','Cross','Meat','Chicken','Egg','Tape','Dough','Toffee'],
   rows:['Religious symbols','Animal proteins','Sticky'],
   cols:['Red __','Play __','Ends in double letter']},

  {words:['Snow','Fire','Foot','Star','Head','Paper','Base','Sky','Pipe'],
   rows:['__ball','__board','__line'],
   cols:['__man','__light','__work']},

  {words:['Gold','Green','Black','Cat','Dog','Moth','Sword','Club','Cannon'],
   rows:['Colours','Animals','Weapons'],
   cols:['__fish','__house','__ball']},

  {words:['Bird','Lion','Bull','Jack','Horse','Doll','Berry','Weed','Moss'],
   rows:['Animals','Toys','Plants'],
   cols:['Black __','Sea __','Ends in double letter']},

  {words:['Story','Bio','DM','Ledger','Crypto','NFT','Picture','Photo','JPG'],
   rows:['Bit of social platform','Relating to Blockchain','Pic'],
   cols:['Types of books','__graphy','Acronyms']},

  {words:['Turkey','Dog','Sheep','Shoulder','Head','Eye','Brew','Chocolate','Coffee'],
   rows:['Animals','Body parts','Drinks'],
   cols:['Cold __','Hot __','Black __']},

  {words:['Chicken','Kite','Jay','Onion','Pepper','Pea','Water','Wine','Tea'],
   rows:['Birds','Vegetables','Drinks'],
   cols:['Spring __','Red __','Homophones of letters']},

  {words:['Lamb','Rabbit','Whale','Wrist','Cheek','Tooth','Raspberry','Apple','Berry'],
   rows:['Animals','Body parts','Fruit'],
   cols:['Contains silent letter','Contains double letter','Blue __']},

  // add the next puzzle here, e.g.
  // {words:['','','','','','','','',''],
  //  rows:['','',''],
  //  cols:['','','']},
];

// Puzzle #1 is shown on this date (year, month, day). Set it to the day you go live.
const LAUNCH=[2026,10,19];
