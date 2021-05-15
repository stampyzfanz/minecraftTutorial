let craftTable = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let selectedCell;
let selectedIngredient = 0;
let newItem = 0;
let leafNodes = [];
let nodes = [];
let nodePopularity = {};
let inventory = [];
let invDiv;

let debug = false;

function addPic(i, idname, isunlocked) {
	let invitem = document.createElement('div')
	invDiv.insertAdjacentHTML('beforeend', `
      <div class='gridCell -pic' onClick="selectInventoryItem(${i});"
       id="inventory-${i}"><img id=${idname} src="${isunlocked ? textures[idname][0] : ""}" 
       alt="${isunlocked ? textures[idname][1] : ""}"></img></div>`);
	if (isunlocked) inventory.push(nodes[i]);
}

function unlockPic(idname) {
	document.getElementById(idname).setAttribute('src', textures[idname][0]);
	document.getElementById(idname).setAttribute('alt', textures[idname][1]);
	inventory.push(idname);
}

function getItemsFromTag(name) {
	let items = tags[name].values;
	for (let i = items.length - 1; i >= 0; i--) {
		if (items[i].includes('#')) {
			items = items.concat(getItemsFromTag(items[i].slice(1)));
			items.splice(i, 1);
		}
	}
	return items;
}

window.onload = async function() {
	invDiv = document.querySelector('#inventory');
	// every item thats used in a recipe
	for (let recipeName in recipes) {
		let recipe = recipes[recipeName]
		if (recipe.type == 'crafting_shaped') {
			nodes.push(recipe.result.item);
			for (let key in recipe.key) {
				let itemObj = recipe.key[key];
				if (itemObj.hasOwnProperty('item')) {
					nodes.push(recipe.key[key].item);
					nodePopularity[recipe.key[key].item] = (nodePopularity[recipe.key[key].item] || 0) + 1;
				} else if (itemObj.hasOwnProperty('tag')) {
					nodes = nodes.concat(items = getItemsFromTag(recipe.key[key].tag));
					for (let item of items) {
						nodePopularity[item] = (nodePopularity[item] || 0) + 1;
					}
				} else {
					for (let item of itemObj) {
						nodes.push(item.item);
						nodePopularity[item.item] = (nodePopularity[item.item] || 0) + 1;
					}
				}
			}
		} else if (recipe.type == 'crafting_shapeless') {
			nodes.push(recipe.result.item);
			for (let ingredient of recipe.ingredients) {
				if (ingredient.hasOwnProperty('item')) {
					nodes.push(ingredient.item);
					nodePopularity[ingredient.item] = (nodePopularity[ingredient.item] || 0) + 1;
				} else if (ingredient.hasOwnProperty('tag')) {
					nodes = nodes.concat(items = getItemsFromTag(ingredient.tag));
					for (let item of items) {
						nodePopularity[item] = (nodePopularity[item] || 0) + 1;
					}
				} else {
					for (let item of ingredient) {
						nodes.push(item.item);
						nodePopularity[item.item] = (nodePopularity[item.item] || 0) + 1;
					}
				}
			}
		}
		if (nodes.includes('#logs_that_burn')) debugger;
	}
	// remove duplicates from nodes
	nodes = [...new Set(nodes)];
	sortednodes = Object.entries(nodePopularity).sort((a, b) => b[1] - a[1]).map((v, i) => v[0]);

	// if its not a node dont leave it there (eg logs_that_burn)
	for (let i = sortednodes.length - 1; i >= 0; i--) {
		if (!nodes.includes(sortednodes[i])) {
			sortednodes.splice(i, 1);
		}
	}

	// if it isn't popular and isn't used in a recipe put it at the bottom
	for (let node of nodes) {
		if (!sortednodes.includes(node)) {
			sortednodes.push(node);
		}
	}
	nodes = sortednodes;

	// make leaf nodes any nodes that can't be the result of a craft
	/* 
		the day after developing this I thought about an edge case and imagined that the recipes
		didn't have leaf nodes like a tree but was a graph and had a circle between some items 
		that couldn't be craftable. I pondered this for a while then thought that the theory 
		doesn't matter and surely it wouldn't happen to me.... then i remembered iron blocks
		and other ores and even haybales. 

		There are many solutions to this problem although the easiest is to just hard code
		some of them. 
	*/
	leafNodes = [...nodes];
	for (let recipeName in recipes) {
		let recipe = recipes[recipeName]
		if ((recipe.type == 'crafting_shaped' || recipe.type == 'crafting_shapeless') &&
			leafNodes.includes(recipe.result.item)) {
			// remove leaf node if theres a recipe that creates the node
			leafNodes.splice(leafNodes.indexOf(recipe.result.item), 1)
		}
	}
	leafNodes = leafNodes.concat(['iron_ingot', 'gold_ingot', 'diamond', 'emerald',
		'coal', 'lapis_lazuli', 'redstone', 'wheat'
	])

	for (let i = 0; i < nodes.length; i++) {
		if (textures.hasOwnProperty(nodes[i])) {
			addPic(i, nodes[i], leafNodes.includes(nodes[i]));
		}
	}
}


//Add newly crafted item to the inventory (if it's not already there)
function addItemToInventory() {
	if (newItem != 0 && inventory.indexOf(newItem) == -1) {
		//First check if this item is not already in the inventory
		//Then find an empty location in the inventory

		unlockPic(newItem);

		// empty out crafting table
		for (let i = 0; i < 9; i++) {
			let craftTableCell = document.getElementById("craftTable-" + i);
			craftTableCell.innerHTML = "";
			craftTable[i] = 0;
		}
		craft()

		if (nodes.length == inventory.length) {
			// TODO DELETE the div and say you beat the game
			document.querySelector('#help').innerHTML = 'You have crafted every item!\
       	  	Well down. You can continue to use this educational game if you want to\
         	remember what a combination of items create';
		}
	}
}

//A function to compare a recipe with the content of the craft table
function checkRecipe(recipe) {
	recipe = JSON.parse(JSON.stringify(recipe));
	if (recipe.type == 'crafting_shaped') {
		// let pattern = recipe.pattern;
		// for (let i = 0; i < pattern.length; i++) {
		// 	pattern[i] = pattern[i].split('');
		// }


		for (let xoff = 0; xoff <= 3 - recipe.pattern[0].length; xoff++) {
			for (let yoff = 0; yoff <= 3 - recipe.pattern.length; yoff++) {
				let keeptrying = true;
				let lasty, lastx;
				for (let y = 0; y < recipe.pattern.length; y++) {
					lasty = y
					if (!keeptrying) break;
					for (let x = 0; x < recipe.pattern[0].length; x++) {
						lastx = x
						let index = (y + yoff) * 3 + x + xoff;
						// buggy as recipe.pattern is eg 'C' but the id is "cobblestone"
						// use the key provided
						// if (recipe.pattern[y][x] != craftTable[index]) {

						let keyInfo = recipe.key[recipe.pattern[y][x]];
						let recipeItems = [];
						if (keyInfo == undefined) {
							// it should be empty (a space like " ")
							recipeItems.push(0);
						} else if (Array.isArray(keyInfo)) {
							/*
								"pattern": [
									"###"
								],
								"key": {
									"#": [{	
										"item": "purpur_block"
									}, {
										"item": "purpur_pillar"
									}]
								},		
							*/
							for (let itemObj of keyInfo) {
								recipeItems.push(itemObj.item);
								if (itemObj.tag || itemObj == undefined) debugger;
								// lets hope theres no tags in a list of item objects...
							}
						} else if (keyInfo.tag) {
							// eg: "tag": "acacia_logs"
							recipeItems = getItemsFromTag(keyInfo.tag)
						} else if (keyInfo.item) {
							recipeItems = [keyInfo.item]
						} else {
							console.log("Keyinfo new format")
							debugger;
						}

						// if its an array check if any of the items are right
						// its an array if theres multiple examples or if its a tag
						let includes = false;
						for (let recipeItem of recipeItems) {
							if (recipeItem == craftTable[index]) {
								includes = true;
							}
						}
						if (!includes) {
							keeptrying = false;
							break;
						}
					}
				}
				// ensure nothing outside of it has any blocks

				if (keeptrying) {
					let isEmptyMatrix = [
						["", "", ""],
						["", "", ""],
						["", "", ""]
					];
					for (let y = 0; y < 3; y++) {
						for (let x = 0; x < 3; x++) {
							// if (x < lastx + xoff || x > lastx + xoff + recipe.pattern[0].length) {
							if ((x < xoff || x >= recipe.pattern[0].length + xoff) ||
								(y < yoff || y >= recipe.pattern.length + yoff)) {
								// if (y < lasty + yoff || y > lasty + yoff + recipe.pattern.length) {
								// make sure its empty
								let index = (y) * 3 + x;
								isEmptyMatrix[x][y] = 'x';
								if (craftTable[index] != 0) {
									return false;
								}
							}
						}
					}
					if (debug) console.table(isEmptyMatrix)
					return true;
				}
			}
		}
		return false;
	} else if (recipe.type == 'crafting_shapeless') {
		for (let value of craftTable) {
			if (value == 0) continue;
			let removed = false;
			for (let i = 0; i < recipe.ingredients.length; i++) {
				if (debug) debugger;
				if ((value == recipe.ingredients[i].item || (recipe.ingredients[i].tag &&
						getItemsFromTag(recipe.ingredients[i].tag).includes(value))) && !removed) {
					removed = true;
					recipe.ingredients.splice(i, 1);
				}
			}
			if (!removed) return false
		}

		if (recipe.ingredients.length == 0) return true;
	}
}

//A function to compare the craft table with all recipes to see if an item can be crafted
let hascrafted = false;

function craft() {
	//Check each recipe one at a time
	document.getElementById("result").innerHTML = "";
	newItem = "";
	for (let recipeKey in recipes) {
		if (checkRecipe(recipes[recipeKey])) {
			newItem = recipes[recipeKey].result.item;
			// Craft the new item!
			document.getElementById("result").innerHTML =
				`<img src="${textures[recipes[recipeKey].result.item][0]}" 
				alt=${textures[recipes[recipeKey].result.item][1]}>
				${hascrafted ? "" : "<br/><br/>Click item to add to inventory"}`;
			if (inventory.indexOf(recipes[recipeKey].result.item) !== -1) {
				// if its already in inventory tell user its already there by making it transparent
				document.getElementById("result").style.opacity = 0.5;
			} else {
				document.getElementById("result").style.opacity = 1;
			}
			// `<img src="${textures[recipeKey][0]}" alt="${textures[recipeKey][1]}"></img></div>`
		}
	}
}

//Highlight inventory item when user click on it
function selectInventoryItem(cell_ID) {
	if (selectedCell) {
		selectedCell.style.backgroundColor = "#8b8b8b";
	}
	selectedCell = document.getElementById("inventory-" + cell_ID);
	selectedCell.style.backgroundColor = "#88FF88";
	selectedIngredient = nodes[cell_ID];
}

//Replace ingredient on craft table when the user click on one of the 9 cells of the craft table
function selectCraftTable(cell_ID) {
	let craftTableCell = document.getElementById("craftTable-" + cell_ID);
	if (craftTableCell.innerHTML == "") {
		if (selectedCell) {
			craftTableCell.innerHTML = selectedCell.innerHTML;
			craftTable[cell_ID] = selectedIngredient;
		}
	} else {
		craftTableCell.innerHTML = "";
		craftTable[cell_ID] = 0;
	}
	craft();
}