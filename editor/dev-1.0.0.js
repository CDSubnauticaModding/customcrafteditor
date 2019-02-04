window.onload = function() {
      document.getElementById("copy-output").onclick = copy_output;
      document.getElementById("add-confirm").onclick = new_recipe;
      document.getElementById("add-ingredient-confirm").onclick = new_ingredient;
      document.getElementById("add-linked-confirm").onclick = new_linked;
      document.getElementById("add-unlock-confirm").onclick = new_unlock;
      document.getElementById("editor-input-toggle").onclick = toggle_input;
      document.getElementById("load-input").onclick = loadInput;
      document.getElementById("change-to-nothing").onclick = function() {change_mode(0)};
      document.getElementById("change-to-added").onclick = function() {change_mode(1)};
      document.getElementById("change-to-modified").onclick = function() {change_mode(2)};
      document.getElementById("change-to-alias").onclick = function() {change_mode(3)};
      document.getElementById("change-to-customtab").onclick = function() {change_mode(4)};
      change_mode(0);
      update_input_visibility();
      outputData();
}

function outputData() {
      var outp = document.getElementById("code-output");
      var strings = "";
      if (outputMode === 1) {
            var __o = new OutputData(_addedRecipes,1);
            strings = toCString(__o);
      }
      if (outputMode === 2) {
            var __o = new OutputData(_modifiedRecipes,2);
            strings = toCString(__o);
      }
      if (outputMode === 3) {
            var __o = new OutputData(_aliasRecipes,3);
            strings = toCString(__o);
      }
      if (outputMode === 4) {
            var __o = new OutputData(_customCraftingTabs,4);
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
      if (outputMode === 1) {
            _addedRecipes.push(_recipe);
      }
      if (outputMode === 2) {
            _modifiedRecipes.push(_recipe);
      }
      if (outputMode === 3) {
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
      update_ingredientList();
      outputData();
}

function new_ingredient() {
      var t_id = document.getElementById("add-ingredient-id").value;
      var t_amount = document.getElementById("add-ingredient-amount").value;
      var _ingredient = new Ingredient(t_id,t_amount);
      temp_Ingredients.push(_ingredient);
      document.getElementById("add-ingredient-id").value = "";
      document.getElementById("add-ingredient-amount").value = 1;
      update_ingredientList();
}

function update_ingredientList() {
      document.getElementById("ingredient-list").innerHTML = "";
      var template = document.getElementById("ingredient-list-template");
      temp_Ingredients.forEach((v,i) => {
            var clone = document.importNode(template.content, true);
            clone.querySelectorAll(".ingredient-list-id")[0].value = v.id;
            clone.querySelectorAll(".ingredient-list-id")[0].onchange = function() {edit_ingredient(i,"id",this.value);};
            clone.querySelectorAll(".ingredient-list-amount")[0].value = v.amount;
            clone.querySelectorAll(".ingredient-list-amount")[0].onchange = function() {edit_ingredient(i,"amount",this.value);};
            clone.querySelectorAll(".ingredient-list-remove")[0].onclick = function() {remove_ingredient(i);};
            document.getElementById("ingredient-list").appendChild(clone);
      });
}

function edit_ingredient(index,field,newvalue) {
      if (index >= 0 && temp_Ingredients.length > index) {
            if (field === "id") {
                  temp_Ingredients[index].id = newvalue;
            } else if (field === "amount") {
                  temp_Ingredients[index].amount = newvalue;
            }
      }
      update_ingredientList();
}

function remove_ingredient(index) {
      temp_Ingredients.splice(index,1);
      update_ingredientList();
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
      var el_recipes = document.getElementById("editor-recipe");
      var el_customtabs = document.getElementById("editor-customtab");
      if (outputMode === 0) {
            el.innerHTML = "Output - Nothing selected";
            el_recipes.hidden = "hidden";
            el_customtabs.hidden = "hidden";
      } else if (outputMode === 1) {
            el.innerHTML = "Output - AddedRecipe";
            el_recipes.hidden = "";
            el_customtabs.hidden = "hidden";
      } else if (outputMode === 2) {
            el.innerHTML = "Output - ModifiedRecipe";
            el_recipes.hidden = "";
            el_customtabs.hidden = "hidden";
      } else if (outputMode === 3) {
            el.innerHTML = "Output - AliasRecipe";
            el_recipes.hidden = "";
            el_customtabs.hidden = "hidden";
      } else if (outputMode === 4) {
            el.innerHTML = "Output - CustomCraftingTab";
            el_recipes.hidden = "hidden";
            el_customtabs.hidden = "";
      }
      outputData();
}

function loadInput() {
      var elIn = document.getElementById("code-input");
      var stringIn = elIn.value;
      elIn.value = "";
      var parsed = parseString(stringIn);
      _addedRecipes = [];
      _modifiedRecipes = [];
      _aliasRecipes = [];
      _customCraftingTabs = [];
      if (parsed.mode === 1) {
            _addedRecipes = parsed.data;
            change_mode(1);
      } else if (parsed.mode === 2) {
            _modifiedRecipes = parsed.data;
            change_mode(2);
      } else if (parsed.mode === 3) {
            _aliasRecipes = parsed.data;
            change_mode(3);
      } else if (parsed.mode === 4) {
            _customCraftingTabs = parsed.data;
            change_mode(4);
      }
      change_input_visibility(false);
      outputData();
}

function toggle_input() {
      change_input_visibility(!showInput);
}

function change_input_visibility(visible) {
      showInput = visible;
      update_input_visibility();
}

function update_input_visibility() {
      var el = document.getElementById("editor-input");
      if (showInput) {
            el.hidden = "";
      } else {
            el.hidden = "hidden";
      }
}

// VARS

var _addedRecipes = [];
var _modifiedRecipes = [];
var _aliasRecipes = [];
var _customCraftingTabs = [];

var temp_Ingredients = [];
var temp_Linked = [];
var temp_Unlock = [];

var outputMode = 0;
var showInput = false;