window.onload = function() {
      document.getElementById("copy-output").onclick = copy_output;
      document.getElementById("add-confirm").onclick = new_recipe;
      document.getElementById("add-ingredient-confirm").onclick = new_ingredient;
      document.getElementById("add-linked-confirm").onclick = new_linked;
      document.getElementById("add-unlock-confirm").onclick = new_unlock;
      document.getElementById("change-to-added").onclick = function() {change_mode(0)};
      document.getElementById("change-to-modified").onclick = function() {change_mode(1)};
      document.getElementById("change-to-alias").onclick = function() {change_mode(2)};
      change_mode(0);
      outputData();
}

function outputData() {
      var outp = document.getElementById("code-output");
      var strings = "";
      if (outputMode === 0) {
            var __o = new OutputData(_addedRecipes,1);
            strings = toCString(__o);
      }
      if (outputMode === 1) {
            var __o = new OutputData(_modifiedRecipes,2);
            strings = toCString(__o);
      }
      if (outputMode === 2) {
            var __o = new OutputData(_aliasRecipes,3);
            strings = toCString(__o);
      }
      outp.innerHTML = strings;
}

function copy_output() {
      clearSelection();
      document.getElementById("code-output").select();
      document.execCommand("copy");
      clearSelection();
}

function clearSelection()
{
      if (window.getSelection) {window.getSelection().removeAllRanges();}
      else if (document.selection) {document.selection.empty();}
}

function new_recipe() {
      var t_id = document.getElementById("add-id").value;
      var t_amount = document.getElementById("add-amount").value;
      var t_forceunlock = document.getElementById("add-forceunlock").checked;
      var t_forceunlockdefault = document.getElementById("add-forceunlock-default").checked;
      var t_path = document.getElementById("add-path").value;
      var t_displayname = document.getElementById("add-display").value;
      var t_tooltip = document.getElementById("add-tooltip").value;
      var _recipe = new Recipe(t_id,t_amount,temp_Ingredients,temp_Linked,t_forceunlock,t_forceunlockdefault,temp_Unlock,t_path,t_displayname,t_tooltip);
      if (outputMode === 0) {
            _addedRecipes.push(_recipe);
      }
      if (outputMode === 1) {
            _modifiedRecipes.push(_recipe);
      }
      if (outputMode === 2) {
            _aliasRecipes.push(_recipe);
      }
      temp_Ingredients = [];
      temp_Linked = [];
      temp_Unlock = [];
      document.getElementById("add-id").value = "";
      document.getElementById("add-amount").value = 0;
      document.getElementById("add-forceunlock").checked = true;
      document.getElementById("add-forceunlock-default").checked = true;
      document.getElementById("add-path").value = "";
      document.getElementById("add-display").value = "";
      document.getElementById("add-tooltip").value = "";
      outputData();
}

function new_ingredient() {
      var t_id = document.getElementById("add-ingredient-id").value;
      var t_amount = document.getElementById("add-ingredient-amount").value;
      var _ingredient = new Ingredient(t_id,t_amount);
      temp_Ingredients.push(_ingredient);
      document.getElementById("add-ingredient-id").value = "";
      document.getElementById("add-ingredient-amount").value = 1;
}

function new_linked() {
      var t_id = document.getElementById("add-linked-id").value;
      temp_Linked.push(t_id);
      document.getElementById("add-linked-id").value = "";
}

function new_unlock() {
      var t_id = document.getElementById("add-unlock-id").value;
      temp_Unlock.push(t_id);
      document.getElementById("add-unlock-id").value = "";
}

function change_mode(m) {
      outputMode = m;
      var el = document.getElementById("output-mode");
      if (outputMode === 0) {
            el.innerHTML = "Output - AddedRecipe";
      }
      if (outputMode === 1) {
            el.innerHTML = "Output - ModifiedRecipe";
      }
      if (outputMode === 2) {
            el.innerHTML = "Output - AliasRecipe";
      }
      outputData();
}

// VARS

var _addedRecipes = [];
var _modifiedRecipes = [];
var _aliasRecipes = [];

var temp_Ingredients = [];
var temp_Linked = [];
var temp_Unlock = [];

var outputMode = 0;