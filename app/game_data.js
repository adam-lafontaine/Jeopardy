
let GAME_DATA = {};
const GD_QUESTION_KEY = "gd_question";
const GD_ANSWER_KEY = "gd_answer";

function build_game_data() {

  // categories
  let cat_1 = "Syntax";
  let cat_2 = "Week 1";
  let cat_3 = "Week 2";
  let cat_4 = "Potpourri";
  let cat_5 = "Sakila";

  // add the categories
  let category_list = [
      cat_1, cat_2, cat_3, cat_4, cat_5
  ];

  // amounts
  let amt_1 = 100;
  let amt_2 = 200;
  let amt_3 = 300;
  let amt_4 = 400;
  let amt_5 = 500;

  // add the amounts
  let amount_list = [
      amt_1, amt_2, amt_3, amt_4, amt_5
  ];

  // initialize
  for(let cat of category_list) {
      GAME_DATA[cat] = {};
      
      for(let amt of amount_list) {
          GAME_DATA[cat][amt] = {};
          GAME_DATA[cat][amt][GD_QUESTION_KEY] = `Question ${cat} - ${amt}`;
          GAME_DATA[cat][amt][GD_ANSWER_KEY] = `Answer ${cat} - ${amt}`;
      }
  }

  // initialize score records
  let score_records = [];
  for (let cat of category_list) {
      for (let amt of amount_list)
          score_records.push({ category: cat, amount: parseInt(amt), team_win: "", team_loss: [] });
  }

  // add properties
  GAME_DATA.category_list = category_list;
  GAME_DATA.amount_list = amount_list;
  GAME_DATA.score_records = score_records;

  // Set questions and answers

  //============== Syntax =============================
  
  GAME_DATA[cat_1][amt_1][GD_QUESTION_KEY] = "How do you return a value from a stored procedure?";
  GAME_DATA[cat_1][amt_1][GD_ANSWER_KEY] = "OUT or INOUT parameters";

  GAME_DATA[cat_1][amt_2][GD_QUESTION_KEY] = "Declare variables within a stored proc, function etc.?";
  GAME_DATA[cat_1][amt_2][GD_ANSWER_KEY] = "DECLARE var_name datatype [DEFAULT default_val]";

  GAME_DATA[cat_1][amt_3][GD_QUESTION_KEY] = "What is the keyword used to continue in a loop?";
  GAME_DATA[cat_1][amt_3][GD_ANSWER_KEY] = "ITERATE";  
  
  GAME_DATA[cat_1][amt_4][GD_QUESTION_KEY] = "The number of rows where a column is null";
  GAME_DATA[cat_1][amt_4][GD_ANSWER_KEY] = "COUNT(*) - COUNT(column)";
  
  GAME_DATA[cat_1][amt_5][GD_QUESTION_KEY] = "Keywords used for creating a stored function";
  GAME_DATA[cat_1][amt_5][GD_ANSWER_KEY] = "DELIMITER, CREATE, FUNCTION, RETURNS, NOT, DETERMINISTIC, READS SQL DATA, BEGIN, END, RETURN";


  //============  Week 1  ===================================

  GAME_DATA[cat_2][amt_1][GD_QUESTION_KEY] = "What is the difference between WHERE and HAVING?";
  GAME_DATA[cat_2][amt_1][GD_ANSWER_KEY] = "HAVING is used for filtering grouped results";

  GAME_DATA[cat_2][amt_2][GD_QUESTION_KEY] = "True or False: Tables with foreign keys must be created after the tables they reference are created";
  GAME_DATA[cat_2][amt_2][GD_ANSWER_KEY] = "True";

  GAME_DATA[cat_2][amt_3][GD_QUESTION_KEY] = "How do you insert multiple records at once?";
  GAME_DATA[cat_2][amt_3][GD_ANSWER_KEY] = "Using mulple sets after the VALUES keyword or a SELECT statement";

  GAME_DATA[cat_2][amt_4][GD_QUESTION_KEY] = "How do you return the last record of a result set?";
  GAME_DATA[cat_2][amt_4][GD_ANSWER_KEY] = "...ORDER BY DESC ... LIMIT 1";

  GAME_DATA[cat_2][amt_5][GD_QUESTION_KEY] = "Normalize until it _____. Denormalize until it _____";
  GAME_DATA[cat_2][amt_5][GD_ANSWER_KEY] = "Normalize until it hurts. Denormalize until it works";


  //============= Week 2 =======================================

  GAME_DATA[cat_3][amt_1][GD_QUESTION_KEY] = "Give 3 cases where you would need to change the MySQL delimiter";
  GAME_DATA[cat_3][amt_1][GD_ANSWER_KEY] = "Stored Procedures, Triggers, Stored Functions";

  GAME_DATA[cat_3][amt_2][GD_QUESTION_KEY] = "What are two ways to delete a temporary table?";
  GAME_DATA[cat_3][amt_2][GD_ANSWER_KEY] = "DROP TABLE, close connection";

  GAME_DATA[cat_3][amt_3][GD_QUESTION_KEY] = "How do you make a view updatable?";
  GAME_DATA[cat_3][amt_3][GD_ANSWER_KEY] = "Do not any use any of the forbidden keywords";

  GAME_DATA[cat_3][amt_4][GD_QUESTION_KEY] = "What will happen when a stored function is declared DETERMINISTIC in error?";
  GAME_DATA[cat_3][amt_4][GD_ANSWER_KEY] = "Unexpected results, decreased performance";

  GAME_DATA[cat_3][amt_5][GD_QUESTION_KEY] = "When can a trigger be triggered (times/events)?";
  GAME_DATA[cat_3][amt_5][GD_ANSWER_KEY] = "BEFORE INSERT, BEFORE UPDATE, BEFORE DELETE, AFTER INSERT, AFTER UPDATE, AFTER DELETE";   


  //======= Potpourri =======================================

  GAME_DATA[cat_4][amt_1][GD_QUESTION_KEY] = "What is Pam's first name?";
  GAME_DATA[cat_4][amt_1][GD_ANSWER_KEY] = "Pam-Marie";

  GAME_DATA[cat_4][amt_2][GD_QUESTION_KEY] = "What is the proper name for 'Genius'?";
  GAME_DATA[cat_4][amt_2][GD_ANSWER_KEY] = "'Adam' or 'Nope'";

  GAME_DATA[cat_4][amt_3][GD_QUESTION_KEY] = "You get these points for free!";
  GAME_DATA[cat_4][amt_3][GD_ANSWER_KEY] = "yay!";  

  GAME_DATA[cat_4][amt_4][GD_QUESTION_KEY] = "Adam's course slides contains...";
  GAME_DATA[cat_4][amt_4][GD_ANSWER_KEY] = "Useful information and typos";  

  GAME_DATA[cat_4][amt_5][GD_QUESTION_KEY] = "What did Sakila violate with its primary key naming convention?";
  GAME_DATA[cat_4][amt_5][GD_ANSWER_KEY] = "The gentlemen's agreement";


  // ======= Sakila / Homework ==========================================

  GAME_DATA[cat_5][amt_1][GD_QUESTION_KEY] = "How many countries end with the letter 'a'?";
  GAME_DATA[cat_5][amt_1][GD_ANSWER_KEY] = "40";

  GAME_DATA[cat_5][amt_2][GD_QUESTION_KEY] = "An ENUM is used for this column";
  GAME_DATA[cat_5][amt_2][GD_ANSWER_KEY] = "rating (film table)";

  GAME_DATA[cat_5][amt_3][GD_QUESTION_KEY] = "Which film category has an average sale amount of $3.99?";
  GAME_DATA[cat_5][amt_3][GD_ANSWER_KEY] = "Animation";

  GAME_DATA[cat_5][amt_4][GD_QUESTION_KEY] = "A SET is used for this column";
  GAME_DATA[cat_5][amt_4][GD_ANSWER_KEY] = "special_features (film table)";

  GAME_DATA[cat_5][amt_5][GD_QUESTION_KEY] = "Which staff member made the most sales by volume?";
  GAME_DATA[cat_5][amt_5][GD_ANSWER_KEY] = "Mike Hillyer";

}

build_game_data();

//===========================================

function gd_increase_score(cat, amt, team) {

    let record = GAME_DATA.score_records.filter((x) => { return x.category == cat && x.amount == parseInt(amt); })[0];
    record.team_win = team;

    if(record.team_loss.includes(team))
        record.team_loss = record.team_loss.filter((x) => { return x != team; });

    console.log(GAME_DATA.score_records);
}

//------------------

function gd_decrease_score(cat, amt, team) {

    let record = GAME_DATA.score_records.filter((x) => { return x.category == cat && x.amount == parseInt(amt); })[0];
    if (!record.team_loss.includes(team))
        record.team_loss.push(team);

    if(record.team_win == team)
        record.team_win = "";

    console.log(GAME_DATA.score_records);
}

//------------------

function gd_get_score(team) {

    let amounts = GAME_DATA.score_records.filter((x) => { return x.team_win == team; })
        .map((x) => { return x.amount; });

    let wins = amounts.length > 0 ? amounts.reduce((total, val) => { return total + val; }) : 0;

    amounts = GAME_DATA.score_records.filter((x) => { return x.team_loss.includes(team); })
        .map((x) => { return x.amount; });

    let losses = amounts.length > 0 ? amounts.reduce((total, val) => { return total + val; }) : 0;

    return wins - losses;
}