


//=============================================

/* Parameters you cannot change */

const SCORE_TABLE_ID = "score_table";
const BLUE_NAME_ID = "blue_name";
const RED_NAME_ID = "red_name";
const BLUE_SCORE_ID = "blue_score";
const RED_SCORE_ID = "red_score";

const TABLE_ID = "app_table";
const MODAL_ID = "app_modal";
const MODAL_TITLE_ID = "app_modal_title";
const MODAL_Q_ID = "app_modal_question";
const MODAL_A_ID = "app_modal_answer";

const MODAL_BUTTON_IDS = [
    "btn_blue_right",
    "btn_blue_wrong",
    "btn_red_right",
    "btn_red_wrong"
];

const VISIBLE_CLASS = "is_visible";
const HIDDEN_CLASS = "not_visible";

let BLUE_TEAM = CONFIG.blue_team_name;
let RED_TEAM = CONFIG.red_team_name;

//=================================

let selected_cat = "";
let selected_amt = 0;

function set_selected(cat, amt){
    selected_cat = cat;
    selected_amt = amt;
}

function reset_selected() {
    selected_cat = "";
    selected_amt = 0;
}

//==============================================

let waiting_for_key_press = false;

document.onkeypress = (e) => {
  if (!waiting_for_key_press)
    return;

  e = e || window.event;
  current_key_code = e.keyCode;

  let team = "";

  if(CONFIG.blue_key_codes.includes(e.keyCode))
    team = BLUE_TEAM;
  else if (CONFIG.red_key_codes.includes(e.keyCode))
    team = RED_TEAM;
  else
    return;

  waiting_for_key_press = false;
  alert(team);
};


//==============================================


function update_scores() {
  document.getElementById(BLUE_SCORE_ID).innerText = gd_get_score(BLUE_TEAM);
  document.getElementById(RED_SCORE_ID).innerText = gd_get_score(RED_TEAM);
}

//=================================================

function setup_scoreboard() {
  document.getElementById(BLUE_NAME_ID).innerText = BLUE_TEAM;
  document.getElementById(RED_NAME_ID).innerText = RED_TEAM;
}

// Builds the table
function build_table(){
  let table = document.getElementById(TABLE_ID);

  // categories as headers
  let table_head = document.createElement("thead");
  //table_head.classList.add("thead-dark");
  let head_row = document.createElement("tr");

  for(let cat of GAME_DATA.category_list) {
    let cell = document.createElement("th");
    cell.classList.add("text-center");
    cell.classList.add("no_select");
    cell.innerText = cat;
    head_row.appendChild(cell);
  }  

  table_head.appendChild(head_row);
  table.appendChild(table_head);

  let table_body = document.createElement("tbody");

  for(let amt of GAME_DATA.amount_list) {

    let row = document.createElement("tr");

    for (let cat of GAME_DATA.category_list) {
      let cell = build_table_cell(cat, amt);
      row.appendChild(cell);
    }

    table_body.appendChild(row);

  }  

  table.appendChild(table_body);
}

//--------------------------------

// builds a cell with the image in the table
function build_table_cell(category, amount) {

  let cell_id = `table_cell_${category}_${amount}`;

  let ele = document.createElement("td");
  ele.classList = ["text-center table_cell"];
  ele.setAttribute("data-toggle", "modal");
  ele.setAttribute("data-target", `#${MODAL_ID}`);

  let div = document.createElement("div");
  div.id = cell_id;

  let span = document.createElement("span");
  span.innerText = amount;

  div.appendChild(span);

  ele.appendChild(div);

  ele.onclick = () => {

    set_selected(category, amount);

    // set up modal
    document.getElementById(MODAL_TITLE_ID).innerText = `${category}: ${amount}`;
    document.getElementById(MODAL_Q_ID).innerText = GAME_DATA[category][amount][GD_QUESTION_KEY];
    document.getElementById(MODAL_A_ID).innerText = GAME_DATA[category][amount][GD_ANSWER_KEY];
    hide_answer();
    reset_buttons();
    waiting_for_key_press = true;
    
  };

  return ele;
}

//------------------------------------

function hide_answer() {
    let que = document.getElementById(MODAL_Q_ID);
    let ans = document.getElementById(MODAL_A_ID);

    if (que.classList.contains(HIDDEN_CLASS))
        que.classList.remove(HIDDEN_CLASS);

    if(!que.classList.contains(VISIBLE_CLASS))
        que.classList.add(VISIBLE_CLASS);
    
    if (ans.classList.contains(VISIBLE_CLASS))
        ans.classList.remove(VISIBLE_CLASS);

    if (!ans.classList.contains(HIDDEN_CLASS))
        ans.classList.add(HIDDEN_CLASS);
}

//--------------------------

function show_answer() {
    let que = document.getElementById(MODAL_Q_ID);
    let ans = document.getElementById(MODAL_A_ID);

    if (ans.classList.contains(HIDDEN_CLASS))
        ans.classList.remove(HIDDEN_CLASS);

    if (!ans.classList.contains(VISIBLE_CLASS))
        ans.classList.add(VISIBLE_CLASS);

    if (que.classList.contains(VISIBLE_CLASS))
        que.classList.remove(VISIBLE_CLASS);

    if (!que.classList.contains(HIDDEN_CLASS))
        que.classList.add(HIDDEN_CLASS);
}

//-------------------------------

function reset_buttons() {

    for(let id of MODAL_BUTTON_IDS){
        let btn = document.getElementById(id);
        if(btn.classList.contains("active"))
            btn.classList.remove("active");
    }

}

//---------------------------

function hide_amount(cat, amt) {
    let cell_id = `table_cell_${cat}_${amt}`;
    let cell = document.getElementById(cell_id);
    if(!cell.classList.contains(HIDDEN_CLASS))
        cell.classList.add(HIDDEN_CLASS);
}

//==========================================

function blue_right() {
    gd_increase_score(selected_cat, selected_amt, BLUE_TEAM);
    console.log(`${BLUE_TEAM}: ${gd_get_score(BLUE_TEAM)}`, `${RED_TEAM}: ${gd_get_score(RED_TEAM)}`);
    update_scores();
    hide_amount(selected_cat, selected_amt);
}

function blue_wrong() {
    gd_decrease_score(selected_cat, selected_amt, BLUE_TEAM);
    console.log(`${BLUE_TEAM}: ${gd_get_score(BLUE_TEAM)}`, `${RED_TEAM}: ${gd_get_score(RED_TEAM)}`);
    update_scores();
    hide_amount(selected_cat, selected_amt);
}

function red_right() {
    gd_increase_score(selected_cat, selected_amt, RED_TEAM);
    console.log(`${BLUE_TEAM}: ${gd_get_score(BLUE_TEAM)}`, `${RED_TEAM}: ${gd_get_score(RED_TEAM)}`);
    update_scores();
    hide_amount(selected_cat, selected_amt);
}

function red_wrong() {
    gd_decrease_score(selected_cat, selected_amt, RED_TEAM);
    console.log(`${BLUE_TEAM}: ${gd_get_score(BLUE_TEAM)}`, `${RED_TEAM}: ${gd_get_score(RED_TEAM)}`);
    update_scores();
    hide_amount(selected_cat, selected_amt);
}

//==============================================

setup_scoreboard();
build_table();
update_scores();