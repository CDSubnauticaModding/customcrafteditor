window.onload = function() {
      document.getElementById("input-confirm").onclick = checkInput;
      document.getElementById("output-copy").onclick = copyOutput;
}

function copyOutput() {
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

function checkInput() {
      var output = "";
      var input = document.getElementById("code-input").value;
      var input_array = input.split("");

      var canceled = false;
      var input_mode = 0; // 1 = Added : 2 = Modified : 3 = Alias
      var openBrackets = 0;

      var addedRecipes = [];
      var modifiedRecipes = [];
      var aliasRecipes = [];

      var currentFieldCheck = "";
      var currentFieldGetValueNow = false;
      var currentFieldValue = "";
      var currentInnerField = "";
      var currentInnerFieldGetValueNow = false;
      var currentInnerFieldValue = "";
      var currentlineComment = false;

      var currentObject;

      input_array.forEach((c,i) => {
            if (!canceled) {
                  if (c !== "#" && !currentlineComment) {
                        if (input_mode !== 1 && input_mode !== 2 && input_mode !== 3) {
                              if (c == " " || c == "\r\n") {
      
                              } else if (c == ":") {
                                    if (currentFieldCheck == "AddedRecipes") {
                                          currentFieldCheck = "";
                                          currentFieldGetValueNow = false;
                                          currentFieldValue = "";
                                          currentInnerField = "";
                                          currentInnerFieldGetValueNow = false;
                                          currentInnerFieldValue = "";
                                          input_mode = 1;
                                    } else if (currentFieldCheck == "ModifiedRecipes") {
                                          currentFieldCheck = "";
                                          currentFieldGetValueNow = false;
                                          currentFieldValue = "";
                                          currentInnerField = "";
                                          currentInnerFieldGetValueNow = false;
                                          currentInnerFieldValue = "";
                                          input_mode = 2;
                                    } else if (currentFieldCheck == "AliasRecipes") {
                                          currentFieldCheck = "";
                                          currentFieldGetValueNow = false;
                                          currentFieldValue = "";
                                          currentInnerField = "";
                                          currentInnerFieldGetValueNow = false;
                                          currentInnerFieldValue = "";
                                          input_mode = 3;
                                    } else {
                                          currentFieldCheck = "";
                                          currentFieldGetValueNow = false;
                                          currentFieldValue = "";
                                          currentInnerField = "";
                                          currentInnerFieldGetValueNow = false;
                                          currentInnerFieldValue = "";
                                          output += "CANCELED";
                                          canceled = true;
                                    }
                              } else {
                                    currentFieldCheck += c;
                              }
                        } else {
                              if (openBrackets == 0) {
                                    if (c == " " || c == "\n") {

                                    } else if (c == "(") {
                                          currentObject = new Recipe("",0,[],[],true,true,[],"","","");
                                          openBrackets ++;
                                    } else {

                                    }
                              } else if (openBrackets == 1 || openBrackets == 2) {
                                    if (openBrackets == 1 && c == ")") {
                                          openBrackets --;
                                          if (input_mode == 1) {
                                                addedRecipes.push(currentObject);
                                          } else if (input_mode == 2) {
                                                modifiedRecipes.push(currentObject);
                                          } else if (input_mode == 3) {
                                                aliasRecipes.push(currentObject);
                                          }
                                          currentObject = "";
                                          currentFieldCheck = "";
                                          currentFieldGetValueNow = false;
                                          currentFieldValue = "";
                                          currentInnerField = "";
                                          currentInnerFieldGetValueNow = false;
                                          currentInnerFieldValue = "";
                                    } else {
                                          if (currentFieldCheck == "") {
                                                if (c == " " || c == "\n" || c == ":" || c == ";") {
                                                      if (c == ":" || c == ";") {

                                                      }
                                                } else {
                                                      currentFieldCheck += c;
                                                }
                                          } else {
                                                if (!currentFieldGetValueNow) {
                                                      if (c == " " || c == "\n") {
                                                            currentFieldCheck = "";
                                                            currentFieldGetValueNow = false;
                                                            currentFieldValue = "";
                                                            currentInnerField = "";
                                                            currentInnerFieldGetValueNow = false;
                                                            currentInnerFieldValue = "";
                                                      } else if (c == ";") {
                                                            currentFieldCheck = "";
                                                            currentFieldGetValueNow = false;
                                                            currentFieldValue = "";
                                                            currentInnerField = "";
                                                            currentInnerFieldGetValueNow = false;
                                                            currentInnerFieldValue = "";
                                                      } else if (c == ":") {
                                                            if (currentFieldCheck == "ItemID" || currentFieldCheck == "DisplayName" || currentFieldCheck == "Tooltip" || currentFieldCheck == "AmountCrafted" || currentFieldCheck == "Ingredients" || currentFieldCheck == "LinkedItemIDs" || currentFieldCheck == "Unlocks" || currentFieldCheck == "Path" || currentFieldCheck == "ForceUnlockAtStart") {
                                                                  currentFieldGetValueNow = true;
                                                            } else {
                                                                  currentFieldCheck = "";
                                                                  currentFieldGetValueNow = false;
                                                                  currentFieldValue = "";
                                                                  currentInnerField = "";
                                                                  currentInnerFieldGetValueNow = false;
                                                                  currentInnerFieldValue = "";
                                                            }
                                                      } else {
                                                            currentFieldCheck += c;
                                                      }
                                                } else {
                                                      if (currentFieldValue === "") {
                                                            if (c == " " || c == "\n" || c == ":" || c == ";") {
                                                                  if (c == ";") {
                                                                        currentFieldCheck = "";
                                                                        currentFieldGetValueNow = false;
                                                                        currentFieldValue = "";
                                                                        currentInnerField = "";
                                                                        currentInnerFieldGetValueNow = false;
                                                                        currentInnerFieldValue = "";
                                                                  }
                                                            } else {
                                                                  if (currentFieldCheck == "Ingredients") {
                                                                  
                                                                  } else if (currentFieldCheck == "LinkedItemIDs" || currentFieldCheck == "Unlocks") {
                                                                              currentFieldValue = [];
                                                                              if (c == "\"") {
                                                                                    currentFieldCheck = "";
                                                                                    currentFieldGetValueNow = false;
                                                                                    currentFieldValue = "";
                                                                                    currentInnerField = "";
                                                                                    currentInnerFieldGetValueNow = false;
                                                                                    currentInnerFieldValue = "";
                                                                              } else if (c == ",") {
                                                                                    if  (currentInnerField == "") {

                                                                                    } else {
                                                                                          currentFieldValue.push(currentInnerField);
                                                                                          currentInnerField = "";
                                                                                    }
                                                                              } else {
                                                                                    currentInnerField += c;
                                                                              }
                                                                  } else if (currentFieldCheck == "DisplayName" || currentFieldCheck == "Tooltip") {
                                                                        currentFieldValue = "";
                                                                        if (c == "\"") {
                                                                              
                                                                        } else {
                                                                              currentFieldValue += c;
                                                                        }
                                                                  } else {
                                                                        currentFieldValue += c;
                                                                  }
                                                            }
                                                      } else {
                                                            if (currentFieldCheck == "Ingredients") {
                                                                  
                                                            } else if (currentFieldCheck == "LinkedItemIDs" || currentFieldCheck == "Unlocks") {
                                                                  if (c == " " || c == "\n") {
                                                                        currentFieldCheck = "";
                                                                        currentFieldGetValueNow = false;
                                                                        currentFieldValue = "";
                                                                        currentInnerField = "";
                                                                        currentInnerFieldGetValueNow = false;
                                                                        currentInnerFieldValue = "";
                                                                  } else if (c == ";") {
                                                                        if (currentFieldCheck == "LinkedItemIDs") {
                                                                              currentObject.linkeditems = currentFieldValue;
                                                                        } else if (currentFieldCheck == "Unlocks") {
                                                                              currentObject.unlocks = currentFieldValue;
                                                                        }
                                                                        currentFieldCheck = "";
                                                                        currentFieldGetValueNow = false;
                                                                        currentFieldValue = "";
                                                                        currentInnerField = "";
                                                                        currentInnerFieldGetValueNow = false;
                                                                        currentInnerFieldValue = "";
                                                                  } else if (c == "\"") {
                                                                        currentFieldCheck = "";
                                                                        currentFieldGetValueNow = false;
                                                                        currentFieldValue = "";
                                                                        currentInnerField = "";
                                                                        currentInnerFieldGetValueNow = false;
                                                                        currentInnerFieldValue = "";
                                                                  } else if (c == ",") {
                                                                        if  (currentInnerField == "") {

                                                                        } else {
                                                                              currentFieldValue.push(currentInnerField);
                                                                              currentInnerField = "";
                                                                        }
                                                                  } else {
                                                                        currentInnerField += c;
                                                                  }
                                                            } else if (currentFieldCheck == "DisplayName" || currentFieldCheck == "Tooltip") {
                                                                  if (c == ";") {
                                                                        if (currentFieldCheck == "DisplayName") {
                                                                              currentObject.displayname = currentFieldValue;
                                                                        } else if (currentFieldCheck == "Tooltip") {
                                                                              currentObject.tooltip = currentFieldValue;
                                                                        }
                                                                        currentFieldCheck = "";
                                                                        currentFieldGetValueNow = false;
                                                                        currentFieldValue = "";
                                                                        currentInnerField = "";
                                                                        currentInnerFieldGetValueNow = false;
                                                                        currentInnerFieldValue = "";
                                                                  } else if (c == "\"") {
                                                                        
                                                                  } else {
                                                                        currentFieldValue += c;
                                                                  }
                                                            } else {
                                                                  if (c == " " || c == "\n" || c == "," || c == ";") {
                                                                        if (c == ";") {
                                                                              if (currentFieldCheck == "ItemID") {
                                                                                    currentObject.id = currentFieldValue;
                                                                              } else if (currentFieldCheck == "AmountCrafted") {
                                                                                    currentObject.amount = currentFieldValue;
                                                                              } else if (currentFieldCheck == "Path") {
                                                                                    currentObject.path = currentFieldValue;
                                                                              } else if (currentFieldCheck == "ForceUnlockAtStart") {
                                                                                    if (currentFieldValue == "true") {
                                                                                          currentObject.forceunlockdefault = false;
                                                                                          currentObject.forceunlock = true;
                                                                                    } else if (currentFieldValue == "false") {
                                                                                          currentObject.forceunlockdefault = false;
                                                                                          currentObject.forceunlock = false;
                                                                                    }
                                                                              }
                                                                        }
                                                                        currentFieldCheck = "";
                                                                        currentFieldGetValueNow = false;
                                                                        currentFieldValue = "";
                                                                        currentInnerField = "";
                                                                        currentInnerFieldGetValueNow = false;
                                                                        currentInnerFieldValue = "";
                                                                  } else {
                                                                        currentFieldValue += c;
                                                                  }
                                                            }
                                                      }
                                                }
                                          }
                                    }
                              } else {

                              }
                        }
                  } else {
                        if (c == "#") {
                              currentlineComment = true;
                        } else if (c == "\n") {
                              currentlineComment = false;
                        } else {
                              
                        }
                  }
            }
      });

      if (input_mode == 1) {
            output += "ADDED RECIPE\n\n";
      }
      if (input_mode == 2) {
            output += "MODIFIED RECIPE\n\n";
      }
      if (input_mode == 3) {
            output += "ALIAS RECIPE\n\n";
      }

      aliasRecipes.forEach((v) => {
            output += "ID: " + v.id + "\n";
            output += "Amount: " + v.amount + "\n";
            output += "DisplayName: " + v.displayname + "\n";
            output += "Tooltip: " + v.tooltip + "\n";
            output += "Path: " + v.path + "\n";
            output += "ForceUnlockAtStart: " + v.forceunlock + "\n";
            output += "\n";
      });

      document.getElementById("code-output").value = output;
}



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