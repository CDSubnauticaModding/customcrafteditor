function test() {
      var el = document.getElementById("code-output");
      var output = "";


      if (outputMode === 0) {
            var addedcount = addedRecipes.length;
            addedRecipes.forEach((v,i) => {
                  if (i === 0) {
                        output += "AddedRecipes: (" + newline;
                  } else {
                        output += "," + newline + "(" + newline;
                  }
                  output += tab + "ItemID: " + v.id + ";" + newline;
                  if (v.amount >= 0) {
                        output += tab + "AmountCrafted: " + v.amount + ";" + newline;
                  }
                  var ingredientscount = v.ingredients.length;
                  v.ingredients.forEach((vv,ii) => {
                        if (ii === 0) {
                              output += tab + "Ingredients: " + newline + tab + "(" + newline;
                        } else {
                              output += "," + newline + tab + "(" + newline;
                        }
                        output += tab + tab + "ItemID: " + vv.id + ";" + newline;
                        output += tab + tab + "Required: " + vv.amount + ";" + newline;
                        output += tab + ")";
                        if (ii+1 >= ingredientscount) {
                              output += ";"+newline;
                        }
                  });
                  var linkeditemscount = v.linkeditems.length;
                  v.linkeditems.forEach((vv,ii) => {
                        if (ii === 0) {
                              output += tab + "LinkedItemIDs: ";
                        } else {
                              output += ",";
                        }
                        output += vv;
                        if (ii+1 >= linkeditemscount) {
                              output += ";" + newline;
                        }
                  });
                  var unlocksitemscount = v.unlocks.length;
                  v.unlocks.forEach((vv,ii) => {
                        if (ii === 0) {
                              output += tab + "Unlocks: ";
                        } else {
                              output += ",";
                        }
                        output += vv;
                        if (ii+1 >= unlocksitemscount) {
                              output += ";" + newline;
                        }
                  });
                  if (v.path !== "") {
                        output += tab + "Path: " + v.path + ";" + newline;
                  }
                  if (v.forceunlockdefault !== true) {
                        output += tab + "ForceUnlockAtStart: " + v.forceunlock + ";" + newline;
                  }
                  output += ")";
                  if (i+1 >= addedcount) {
                        output += ";" + newline;
                  }
            });
      }


      if (outputMode === 1) {
            var modifiedcount = modifiedRecipes.length;
            modifiedRecipes.forEach((v,i) => {
                  if (i === 0) {
                        output += "ModifiedRecipes: (" + newline;
                  } else {
                        output += "," + newline + "(" + newline;
                  }
                  output += tab + "ItemID: " + v.id + ";" + newline;
                  if (v.amount >= 0) {
                        output += tab + "AmountCrafted: " + v.amount + ";" + newline;
                  }
                  var ingredientscount = v.ingredients.length;
                  v.ingredients.forEach((vv,ii) => {
                        if (ii === 0) {
                              output += tab + "Ingredients: " + newline + tab + "(" + newline;
                        } else {
                              output += "," + newline + tab + "(" + newline;
                        }
                        output += tab + tab + "ItemID: " + vv.id + ";" + newline;
                        output += tab + tab + "Required: " + vv.amount + ";" + newline;
                        output += tab + ")";
                        if (ii+1 >= ingredientscount) {
                              output += ";"+newline;
                        }
                  });
                  var linkeditemscount = v.linkeditems.length;
                  v.linkeditems.forEach((vv,ii) => {
                        if (ii === 0) {
                              output += tab + "LinkedItemIDs: ";
                        } else {
                              output += ",";
                        }
                        output += vv;
                        if (ii+1 >= linkeditemscount) {
                              output += ";" + newline;
                        }
                  });
                  var unlocksitemscount = v.unlocks.length;
                  v.unlocks.forEach((vv,ii) => {
                        if (ii === 0) {
                              output += tab + "Unlocks: ";
                        } else {
                              output += ",";
                        }
                        output += vv;
                        if (ii+1 >= unlocksitemscount) {
                              output += ";" + newline;
                        }
                  });
                  if (v.forceunlockdefault !== true) {
                        output += tab + "ForceUnlockAtStart: " + v.forceunlock + ";" + newline;
                  }
                  output += ")";
                  if (i+1 >= modifiedcount) {
                        output += ";" + newline;
                  }
            });
      }

      
      if (outputMode === 2) {
            var aliascount = aliasRecipes.length;
            aliasRecipes.forEach((v,i) => {
                  if (i === 0) {
                        output += "AliasRecipes: (" + newline;
                  } else {
                        output += "," + newline + "(" + newline;
                  }
                  output += tab + "ItemID: " + v.id + ";" + newline;
                  if (v.displayname !== "") {
                        output += tab + "DisplayName: " + "\"" + v.displayname + "\"" + ";" + newline;
                  }
                  if (v.tooltip !== "") {
                        output += tab + "Tooltip: " + "\"" + v.tooltip + "\"" + ";" + newline;
                  }
                  if (v.amount >= 0) {
                        output += tab + "AmountCrafted: " + v.amount + ";" + newline;
                  }
                  var ingredientscount = v.ingredients.length;
                  v.ingredients.forEach((vv,ii) => {
                        if (ii === 0) {
                              output += tab + "Ingredients: " + newline + tab + "(" + newline;
                        } else {
                              output += "," + newline + tab + "(" + newline;
                        }
                        output += tab + tab + "ItemID: " + vv.id + ";" + newline;
                        output += tab + tab + "Required: " + vv.amount + ";" + newline;
                        output += tab + ")";
                        if (ii+1 >= ingredientscount) {
                              output += ";"+newline;
                        }
                  });
                  var linkeditemscount = v.linkeditems.length;
                  v.linkeditems.forEach((vv,ii) => {
                        if (ii === 0) {
                              output += tab + "LinkedItemIDs: ";
                        } else {
                              output += ",";
                        }
                        output += vv;
                        if (ii+1 >= linkeditemscount) {
                              output += ";" + newline;
                        }
                  });
                  var unlocksitemscount = v.unlocks.length;
                  v.unlocks.forEach((vv,ii) => {
                        if (ii === 0) {
                              output += tab + "Unlocks: ";
                        } else {
                              output += ",";
                        }
                        output += vv;
                        if (ii+1 >= unlocksitemscount) {
                              output += ";" + newline;
                        }
                  });
                  if (v.path !== "") {
                        output += tab + "Path: " + v.path + ";" + newline;
                  }
                  if (v.forceunlockdefault !== true) {
                        output += tab + "ForceUnlockAtStart: " + v.forceunlock + ";" + newline;
                  }
                  output += ")";
                  if (i+1 >= aliascount) {
                        output += ";" + newline;
                  }
            });
      }


      el.innerHTML = output;
}

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
      test();
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
            addedRecipes.push(_recipe);
      }
      if (outputMode === 1) {
            modifiedRecipes.push(_recipe);
      }
      if (outputMode === 2) {
            aliasRecipes.push(_recipe);
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
      test();
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
      test();
}

// VARS

var addedRecipes = [];
var modifiedRecipes = [];
var aliasRecipes = [];

var temp_Ingredients = [];
var temp_Linked = [];
var temp_Unlock = [];

var outputMode = 0;

const newline = "\r\n";
const tab = "    ";

// CLASSES

class Recipe {
      constructor(id,amount,ingredients,linkeditems,forceunlock,forceunlockdefault,unlocks,path,displayname,tooltip) {
            this.id = id;
            this.amount = amount;
            this.ingredients = ingredients;
            this.linkeditems = linkeditems;
            this.forceunlock = forceunlock;
            this.forceunlockdefault = forceunlockdefault;
            this.unlocks = unlocks; // MODIFIED END
            this.path = path; // ADDED END
            this.displayname = displayname;
            this.tooltip = tooltip; // ALIAS END
      }
}

class Ingredient {
      constructor(id,amount) {
            this.id = id;
            this.amount = amount;
      }
}