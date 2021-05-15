let recipes = {
	"acacia_boat": {
		"type": "crafting_shaped",
		"group": "boat",
		"pattern": [
			"# #",
			"###"
		],
		"key": {
			"#": {
				"item": "acacia_planks"
			}
		},
		"result": {
			"item": "acacia_boat"
		}
	},
	"acacia_button": {
		"type": "crafting_shapeless",
		"group": "wooden_button",
		"ingredients": [{
			"item": "acacia_planks"
		}],
		"result": {
			"item": "acacia_button"
		}
	},
	"acacia_door": {
		"type": "crafting_shaped",
		"group": "wooden_door",
		"pattern": [
			"##",
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "acacia_planks"
			}
		},
		"result": {
			"item": "acacia_door",
			"count": 3
		}
	},
	"acacia_fence": {
		"type": "crafting_shaped",
		"group": "wooden_fence",
		"pattern": [
			"W#W",
			"W#W"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "acacia_planks"
			}
		},
		"result": {
			"item": "acacia_fence",
			"count": 3
		}
	},
	"acacia_fence_gate": {
		"type": "crafting_shaped",
		"group": "wooden_fence_gate",
		"pattern": [
			"#W#",
			"#W#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "acacia_planks"
			}
		},
		"result": {
			"item": "acacia_fence_gate"
		}
	},
	"acacia_planks": {
		"type": "crafting_shapeless",
		"group": "planks",
		"ingredients": [{
			"tag": "acacia_logs"
		}],
		"result": {
			"item": "acacia_planks",
			"count": 4
		}
	},
	"acacia_pressure_plate": {
		"type": "crafting_shaped",
		"group": "wooden_pressure_plate",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "acacia_planks"
			}
		},
		"result": {
			"item": "acacia_pressure_plate"
		}
	},
	"acacia_sign": {
		"type": "crafting_shaped",
		"group": "sign",
		"pattern": [
			"###",
			"###",
			" X "
		],
		"key": {
			"#": {
				"item": "acacia_planks"
			},
			"X": {
				"item": "stick"
			}
		},
		"result": {
			"item": "acacia_sign",
			"count": 3
		}
	},
	"acacia_slab": {
		"type": "crafting_shaped",
		"group": "wooden_slab",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "acacia_planks"
			}
		},
		"result": {
			"item": "acacia_slab",
			"count": 6
		}
	},
	"acacia_stairs": {
		"type": "crafting_shaped",
		"group": "wooden_stairs",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "acacia_planks"
			}
		},
		"result": {
			"item": "acacia_stairs",
			"count": 4
		}
	},
	"acacia_trapdoor": {
		"type": "crafting_shaped",
		"group": "wooden_trapdoor",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "acacia_planks"
			}
		},
		"result": {
			"item": "acacia_trapdoor",
			"count": 2
		}
	},
	"acacia_wood": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "acacia_log"
			}
		},
		"result": {
			"item": "acacia_wood",
			"count": 3
		}
	},
	"activator_rail": {
		"type": "crafting_shaped",
		"pattern": [
			"XSX",
			"X#X",
			"XSX"
		],
		"key": {
			"#": {
				"item": "redstone_torch"
			},
			"S": {
				"item": "stick"
			},
			"X": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "activator_rail",
			"count": 6
		}
	},
	"andesite": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "diorite"
		}, {
			"item": "cobblestone"
		}],
		"result": {
			"item": "andesite",
			"count": 2
		}
	},
	"andesite_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "andesite"
			}
		},
		"result": {
			"item": "andesite_slab",
			"count": 6
		}
	},
	"andesite_slab_from_andesite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "andesite"
		},
		"result": "andesite_slab",
		"count": 2
	},
	"andesite_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "andesite"
			}
		},
		"result": {
			"item": "andesite_stairs",
			"count": 4
		}
	},
	"andesite_stairs_from_andesite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "andesite"
		},
		"result": "andesite_stairs",
		"count": 1
	},
	"andesite_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "andesite"
			}
		},
		"result": {
			"item": "andesite_wall",
			"count": 6
		}
	},
	"andesite_wall_from_andesite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "andesite"
		},
		"result": "andesite_wall",
		"count": 1
	},
	"anvil": {
		"type": "crafting_shaped",
		"pattern": [
			"III",
			" i ",
			"iii"
		],
		"key": {
			"I": {
				"item": "iron_block"
			},
			"i": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "anvil"
		}
	},
	"armor_stand": {
		"type": "crafting_shaped",
		"pattern": [
			"///",
			" / ",
			"/_/"
		],
		"key": {
			"/": {
				"item": "stick"
			},
			"_": {
				"item": "smooth_stone_slab"
			}
		},
		"result": {
			"item": "armor_stand"
		}
	},
	"arrow": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"#",
			"Y"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "flint"
			},
			"Y": {
				"item": "feather"
			}
		},
		"result": {
			"item": "arrow",
			"count": 4
		}
	},
	"baked_potato": {
		"type": "smelting",
		"ingredient": {
			"item": "potato"
		},
		"result": "baked_potato",
		"experience": 0.35,
		"cookingtime": 200
	},
	"baked_potato_from_campfire_cooking": {
		"type": "campfire_cooking",
		"ingredient": {
			"item": "potato"
		},
		"result": "baked_potato",
		"experience": 0.35,
		"cookingtime": 600
	},
	"baked_potato_from_smoking": {
		"type": "smoking",
		"ingredient": {
			"item": "potato"
		},
		"result": "baked_potato",
		"experience": 0.35,
		"cookingtime": 100
	},
	"banner_duplicate": {
		"type": "crafting_special_bannerduplicate"
	},
	"barrel": {
		"type": "crafting_shaped",
		"pattern": [
			"PSP",
			"P P",
			"PSP"
		],
		"key": {
			"P": {
				"tag": "planks"
			},
			"S": {
				"tag": "wooden_slabs"
			}
		},
		"result": {
			"item": "barrel"
		}
	},
	"beacon": {
		"type": "crafting_shaped",
		"pattern": [
			"GGG",
			"GSG",
			"OOO"
		],
		"key": {
			"S": {
				"item": "nether_star"
			},
			"G": {
				"item": "glass"
			},
			"O": {
				"item": "obsidian"
			}
		},
		"result": {
			"item": "beacon"
		}
	},
	"beehive": {
		"type": "crafting_shaped",
		"pattern": [
			"PPP",
			"HHH",
			"PPP"
		],
		"key": {
			"P": {
				"tag": "planks"
			},
			"H": {
				"item": "honeycomb"
			}
		},
		"result": {
			"item": "beehive"
		}
	},
	"beetroot_soup": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "bowl"
		}, {
			"item": "beetroot"
		}, {
			"item": "beetroot"
		}, {
			"item": "beetroot"
		}, {
			"item": "beetroot"
		}, {
			"item": "beetroot"
		}, {
			"item": "beetroot"
		}],
		"result": {
			"item": "beetroot_soup"
		}
	},
	"birch_boat": {
		"type": "crafting_shaped",
		"group": "boat",
		"pattern": [
			"# #",
			"###"
		],
		"key": {
			"#": {
				"item": "birch_planks"
			}
		},
		"result": {
			"item": "birch_boat"
		}
	},
	"birch_button": {
		"type": "crafting_shapeless",
		"group": "wooden_button",
		"ingredients": [{
			"item": "birch_planks"
		}],
		"result": {
			"item": "birch_button"
		}
	},
	"birch_door": {
		"type": "crafting_shaped",
		"group": "wooden_door",
		"pattern": [
			"##",
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "birch_planks"
			}
		},
		"result": {
			"item": "birch_door",
			"count": 3
		}
	},
	"birch_fence": {
		"type": "crafting_shaped",
		"group": "wooden_fence",
		"pattern": [
			"W#W",
			"W#W"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "birch_planks"
			}
		},
		"result": {
			"item": "birch_fence",
			"count": 3
		}
	},
	"birch_fence_gate": {
		"type": "crafting_shaped",
		"group": "wooden_fence_gate",
		"pattern": [
			"#W#",
			"#W#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "birch_planks"
			}
		},
		"result": {
			"item": "birch_fence_gate"
		}
	},
	"birch_planks": {
		"type": "crafting_shapeless",
		"group": "planks",
		"ingredients": [{
			"tag": "birch_logs"
		}],
		"result": {
			"item": "birch_planks",
			"count": 4
		}
	},
	"birch_pressure_plate": {
		"type": "crafting_shaped",
		"group": "wooden_pressure_plate",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "birch_planks"
			}
		},
		"result": {
			"item": "birch_pressure_plate"
		}
	},
	"birch_sign": {
		"type": "crafting_shaped",
		"group": "sign",
		"pattern": [
			"###",
			"###",
			" X "
		],
		"key": {
			"#": {
				"item": "birch_planks"
			},
			"X": {
				"item": "stick"
			}
		},
		"result": {
			"item": "birch_sign",
			"count": 3
		}
	},
	"birch_slab": {
		"type": "crafting_shaped",
		"group": "wooden_slab",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "birch_planks"
			}
		},
		"result": {
			"item": "birch_slab",
			"count": 6
		}
	},
	"birch_stairs": {
		"type": "crafting_shaped",
		"group": "wooden_stairs",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "birch_planks"
			}
		},
		"result": {
			"item": "birch_stairs",
			"count": 4
		}
	},
	"birch_trapdoor": {
		"type": "crafting_shaped",
		"group": "wooden_trapdoor",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "birch_planks"
			}
		},
		"result": {
			"item": "birch_trapdoor",
			"count": 2
		}
	},
	"birch_wood": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "birch_log"
			}
		},
		"result": {
			"item": "birch_wood",
			"count": 3
		}
	},
	"blackstone_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "blackstone"
			}
		},
		"result": {
			"item": "blackstone_slab",
			"count": 6
		}
	},
	"blackstone_slab_from_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "blackstone"
		},
		"result": "blackstone_slab",
		"count": 2
	},
	"blackstone_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "blackstone"
			}
		},
		"result": {
			"item": "blackstone_stairs",
			"count": 4
		}
	},
	"blackstone_stairs_from_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "blackstone"
		},
		"result": "blackstone_stairs",
		"count": 1
	},
	"blackstone_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "blackstone"
			}
		},
		"result": {
			"item": "blackstone_wall",
			"count": 6
		}
	},
	"blackstone_wall_from_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "blackstone"
		},
		"result": "blackstone_wall",
		"count": 1
	},
	"black_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "black_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "black_banner"
		}
	},
	"black_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "black_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "black_bed"
		}
	},
	"black_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "black_dye"
		}],
		"result": {
			"item": "black_bed"
		}
	},
	"black_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "black_wool"
			}
		},
		"result": {
			"item": "black_carpet",
			"count": 3
		}
	},
	"black_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "black_dye"
			}
		},
		"result": {
			"item": "black_carpet",
			"count": 8
		}
	},
	"black_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "black_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "black_concrete_powder",
			"count": 8
		}
	},
	"black_dye": {
		"type": "crafting_shapeless",
		"group": "black_dye",
		"ingredients": [{
			"item": "ink_sac"
		}],
		"result": {
			"item": "black_dye"
		}
	},
	"black_dye_from_wither_rose": {
		"type": "crafting_shapeless",
		"group": "black_dye",
		"ingredients": [{
			"item": "wither_rose"
		}],
		"result": {
			"item": "black_dye"
		}
	},
	"black_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "black_terracotta"
		},
		"result": "black_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"black_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "black_dye"
			}
		},
		"result": {
			"item": "black_stained_glass",
			"count": 8
		}
	},
	"black_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "black_stained_glass"
			}
		},
		"result": {
			"item": "black_stained_glass_pane",
			"count": 16
		}
	},
	"black_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "black_dye"
			}
		},
		"result": {
			"item": "black_stained_glass_pane",
			"count": 8
		}
	},
	"black_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "black_dye"
			}
		},
		"result": {
			"item": "black_terracotta",
			"count": 8
		}
	},
	"black_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "black_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "black_wool"
		}
	},
	"blast_furnace": {
		"type": "crafting_shaped",
		"pattern": [
			"III",
			"IXI",
			"###"
		],
		"key": {
			"#": {
				"item": "smooth_stone"
			},
			"X": {
				"item": "furnace"
			},
			"I": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "blast_furnace"
		}
	},
	"blaze_powder": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "blaze_rod"
		}],
		"result": {
			"item": "blaze_powder",
			"count": 2
		}
	},
	"blue_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "blue_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "blue_banner"
		}
	},
	"blue_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "blue_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "blue_bed"
		}
	},
	"blue_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "blue_dye"
		}],
		"result": {
			"item": "blue_bed"
		}
	},
	"blue_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "blue_wool"
			}
		},
		"result": {
			"item": "blue_carpet",
			"count": 3
		}
	},
	"blue_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "blue_dye"
			}
		},
		"result": {
			"item": "blue_carpet",
			"count": 8
		}
	},
	"blue_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "blue_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "blue_concrete_powder",
			"count": 8
		}
	},
	"blue_dye": {
		"type": "crafting_shapeless",
		"group": "blue_dye",
		"ingredients": [{
			"item": "lapis_lazuli"
		}],
		"result": {
			"item": "blue_dye"
		}
	},
	"blue_dye_from_cornflower": {
		"type": "crafting_shapeless",
		"group": "blue_dye",
		"ingredients": [{
			"item": "cornflower"
		}],
		"result": {
			"item": "blue_dye"
		}
	},
	"blue_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "blue_terracotta"
		},
		"result": "blue_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"blue_ice": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "packed_ice"
			}
		},
		"result": {
			"item": "blue_ice"
		}
	},
	"blue_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "blue_dye"
			}
		},
		"result": {
			"item": "blue_stained_glass",
			"count": 8
		}
	},
	"blue_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "blue_stained_glass"
			}
		},
		"result": {
			"item": "blue_stained_glass_pane",
			"count": 16
		}
	},
	"blue_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "blue_dye"
			}
		},
		"result": {
			"item": "blue_stained_glass_pane",
			"count": 8
		}
	},
	"blue_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "blue_dye"
			}
		},
		"result": {
			"item": "blue_terracotta",
			"count": 8
		}
	},
	"blue_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "blue_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "blue_wool"
		}
	},
	"bone_block": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			"XXX",
			"XXX"
		],
		"key": {
			"X": {
				"item": "bone_meal"
			}
		},
		"result": {
			"item": "bone_block"
		}
	},
	"bone_meal": {
		"type": "crafting_shapeless",
		"group": "bonemeal",
		"ingredients": [{
			"item": "bone"
		}],
		"result": {
			"item": "bone_meal",
			"count": 3
		}
	},
	"bone_meal_from_bone_block": {
		"type": "crafting_shapeless",
		"group": "bonemeal",
		"ingredients": [{
			"item": "bone_block"
		}],
		"result": {
			"item": "bone_meal",
			"count": 9
		}
	},
	"book": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "paper"
		}, {
			"item": "paper"
		}, {
			"item": "paper"
		}, {
			"item": "leather"
		}],
		"result": {
			"item": "book"
		}
	},
	"bookshelf": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"XXX",
			"###"
		],
		"key": {
			"#": {
				"tag": "planks"
			},
			"X": {
				"item": "book"
			}
		},
		"result": {
			"item": "bookshelf"
		}
	},
	"book_cloning": {
		"type": "crafting_special_bookcloning"
	},
	"bow": {
		"type": "crafting_shaped",
		"pattern": [
			" #X",
			"# X",
			" #X"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "string"
			}
		},
		"result": {
			"item": "bow"
		}
	},
	"bowl": {
		"type": "crafting_shaped",
		"pattern": [
			"# #",
			" # "
		],
		"key": {
			"#": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "bowl",
			"count": 4
		}
	},
	"bread": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "wheat"
			}
		},
		"result": {
			"item": "bread"
		}
	},
	"brewing_stand": {
		"type": "crafting_shaped",
		"pattern": [
			" B ",
			"###"
		],
		"key": {
			"B": {
				"item": "blaze_rod"
			},
			"#": {
				"tag": "stone_crafting_materials"
			}
		},
		"result": {
			"item": "brewing_stand"
		}
	},
	"brick": {
		"type": "smelting",
		"ingredient": {
			"item": "clay_ball"
		},
		"result": "brick",
		"experience": 0.3,
		"cookingtime": 200
	},
	"bricks": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "brick"
			}
		},
		"result": {
			"item": "bricks"
		}
	},
	"brick_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "bricks"
			}
		},
		"result": {
			"item": "brick_slab",
			"count": 6
		}
	},
	"brick_slab_from_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "bricks"
		},
		"result": "brick_slab",
		"count": 2
	},
	"brick_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "bricks"
			}
		},
		"result": {
			"item": "brick_stairs",
			"count": 4
		}
	},
	"brick_stairs_from_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "bricks"
		},
		"result": "brick_stairs",
		"count": 1
	},
	"brick_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "bricks"
			}
		},
		"result": {
			"item": "brick_wall",
			"count": 6
		}
	},
	"brick_wall_from_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "bricks"
		},
		"result": "brick_wall",
		"count": 1
	},
	"brown_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "brown_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "brown_banner"
		}
	},
	"brown_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "brown_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "brown_bed"
		}
	},
	"brown_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "brown_dye"
		}],
		"result": {
			"item": "brown_bed"
		}
	},
	"brown_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "brown_wool"
			}
		},
		"result": {
			"item": "brown_carpet",
			"count": 3
		}
	},
	"brown_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "brown_dye"
			}
		},
		"result": {
			"item": "brown_carpet",
			"count": 8
		}
	},
	"brown_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "brown_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "brown_concrete_powder",
			"count": 8
		}
	},
	"brown_dye": {
		"type": "crafting_shapeless",
		"group": "brown_dye",
		"ingredients": [{
			"item": "cocoa_beans"
		}],
		"result": {
			"item": "brown_dye"
		}
	},
	"brown_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "brown_terracotta"
		},
		"result": "brown_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"brown_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "brown_dye"
			}
		},
		"result": {
			"item": "brown_stained_glass",
			"count": 8
		}
	},
	"brown_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "brown_stained_glass"
			}
		},
		"result": {
			"item": "brown_stained_glass_pane",
			"count": 16
		}
	},
	"brown_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "brown_dye"
			}
		},
		"result": {
			"item": "brown_stained_glass_pane",
			"count": 8
		}
	},
	"brown_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "brown_dye"
			}
		},
		"result": {
			"item": "brown_terracotta",
			"count": 8
		}
	},
	"brown_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "brown_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "brown_wool"
		}
	},
	"bucket": {
		"type": "crafting_shaped",
		"pattern": [
			"# #",
			" # "
		],
		"key": {
			"#": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "bucket"
		}
	},
	"cake": {
		"type": "crafting_shaped",
		"pattern": [
			"AAA",
			"BEB",
			"CCC"
		],
		"key": {
			"A": {
				"item": "milk_bucket"
			},
			"B": {
				"item": "sugar"
			},
			"C": {
				"item": "wheat"
			},
			"E": {
				"item": "egg"
			}
		},
		"result": {
			"item": "cake"
		}
	},
	"campfire": {
		"type": "crafting_shaped",
		"pattern": [
			" S ",
			"SCS",
			"LLL"
		],
		"key": {
			"L": {
				"tag": "logs"
			},
			"S": {
				"item": "stick"
			},
			"C": {
				"tag": "coals"
			}
		},
		"result": {
			"item": "campfire"
		}
	},
	"carrot_on_a_stick": {
		"type": "crafting_shaped",
		"pattern": [
			"# ",
			" X"
		],
		"key": {
			"#": {
				"item": "fishing_rod"
			},
			"X": {
				"item": "carrot"
			}
		},
		"result": {
			"item": "carrot_on_a_stick"
		}
	},
	"cartography_table": {
		"type": "crafting_shaped",
		"pattern": [
			"@@",
			"##",
			"##"
		],
		"key": {
			"#": {
				"tag": "planks"
			},
			"@": {
				"item": "paper"
			}
		},
		"result": {
			"item": "cartography_table"
		}
	},
	"cauldron": {
		"type": "crafting_shaped",
		"pattern": [
			"# #",
			"# #",
			"###"
		],
		"key": {
			"#": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "cauldron"
		}
	},
	"chain": {
		"type": "crafting_shaped",
		"pattern": [
			"N",
			"I",
			"N"
		],
		"key": {
			"I": {
				"item": "iron_ingot"
			},
			"N": {
				"item": "iron_nugget"
			}
		},
		"result": {
			"item": "chain"
		}
	},
	"charcoal": {
		"type": "smelting",
		"ingredient": {
			"tag": "logs_that_burn"
		},
		"result": "charcoal",
		"experience": 0.15,
		"cookingtime": 200
	},
	"chest": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"# #",
			"###"
		],
		"key": {
			"#": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "chest"
		}
	},
	"chest_minecart": {
		"type": "crafting_shaped",
		"pattern": [
			"A",
			"B"
		],
		"key": {
			"A": {
				"item": "chest"
			},
			"B": {
				"item": "minecart"
			}
		},
		"result": {
			"item": "chest_minecart"
		}
	},
	"chiseled_nether_bricks": {
		"type": "crafting_shaped",
		"pattern": [
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "nether_brick_slab"
			}
		},
		"result": {
			"item": "chiseled_nether_bricks"
		}
	},
	"chiseled_nether_bricks_from_nether_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "nether_bricks"
		},
		"result": "chiseled_nether_bricks",
		"count": 1
	},
	"chiseled_polished_blackstone": {
		"type": "crafting_shaped",
		"pattern": [
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "polished_blackstone_slab"
			}
		},
		"result": {
			"item": "chiseled_polished_blackstone"
		}
	},
	"chiseled_polished_blackstone_from_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "blackstone"
		},
		"result": "chiseled_polished_blackstone",
		"count": 1
	},
	"chiseled_polished_blackstone_from_polished_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_blackstone"
		},
		"result": "chiseled_polished_blackstone",
		"count": 1
	},
	"chiseled_quartz_block": {
		"type": "crafting_shaped",
		"pattern": [
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "quartz_slab"
			}
		},
		"result": {
			"item": "chiseled_quartz_block"
		}
	},
	"chiseled_quartz_block_from_quartz_block_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "quartz_block"
		},
		"result": "chiseled_quartz_block",
		"count": 1
	},
	"chiseled_red_sandstone": {
		"type": "crafting_shaped",
		"pattern": [
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "red_sandstone_slab"
			}
		},
		"result": {
			"item": "chiseled_red_sandstone"
		}
	},
	"chiseled_red_sandstone_from_red_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "red_sandstone"
		},
		"result": "chiseled_red_sandstone",
		"count": 1
	},
	"chiseled_sandstone": {
		"type": "crafting_shaped",
		"pattern": [
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "sandstone_slab"
			}
		},
		"result": {
			"item": "chiseled_sandstone"
		}
	},
	"chiseled_sandstone_from_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "sandstone"
		},
		"result": "chiseled_sandstone",
		"count": 1
	},
	"chiseled_stone_bricks": {
		"type": "crafting_shaped",
		"pattern": [
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "stone_brick_slab"
			}
		},
		"result": {
			"item": "chiseled_stone_bricks"
		}
	},
	"chiseled_stone_bricks_from_stone_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "stone_bricks"
		},
		"result": "chiseled_stone_bricks",
		"count": 1
	},
	"chiseled_stone_bricks_stone_from_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "stone"
		},
		"result": "chiseled_stone_bricks",
		"count": 1
	},
	"clay": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "clay_ball"
			}
		},
		"result": {
			"item": "clay"
		}
	},
	"clock": {
		"type": "crafting_shaped",
		"pattern": [
			" # ",
			"#X#",
			" # "
		],
		"key": {
			"#": {
				"item": "gold_ingot"
			},
			"X": {
				"item": "redstone"
			}
		},
		"result": {
			"item": "clock"
		}
	},
	"coal": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "coal_block"
		}],
		"result": {
			"item": "coal",
			"count": 9
		}
	},
	"coal_block": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "coal"
			}
		},
		"result": {
			"item": "coal_block"
		}
	},
	"coal_from_blasting": {
		"type": "blasting",
		"ingredient": {
			"item": "coal_ore"
		},
		"result": "coal",
		"experience": 0.1,
		"cookingtime": 100
	},
	"coal_from_smelting": {
		"type": "smelting",
		"ingredient": {
			"item": "coal_ore"
		},
		"result": "coal",
		"experience": 0.1,
		"cookingtime": 200
	},
	"coarse_dirt": {
		"type": "crafting_shaped",
		"pattern": [
			"DG",
			"GD"
		],
		"key": {
			"D": {
				"item": "dirt"
			},
			"G": {
				"item": "gravel"
			}
		},
		"result": {
			"item": "coarse_dirt",
			"count": 4
		}
	},
	"cobblestone_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "cobblestone"
			}
		},
		"result": {
			"item": "cobblestone_slab",
			"count": 6
		}
	},
	"cobblestone_slab_from_cobblestone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "cobblestone"
		},
		"result": "cobblestone_slab",
		"count": 2
	},
	"cobblestone_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "cobblestone"
			}
		},
		"result": {
			"item": "cobblestone_stairs",
			"count": 4
		}
	},
	"cobblestone_stairs_from_cobblestone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "cobblestone"
		},
		"result": "cobblestone_stairs",
		"count": 1
	},
	"cobblestone_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "cobblestone"
			}
		},
		"result": {
			"item": "cobblestone_wall",
			"count": 6
		}
	},
	"cobblestone_wall_from_cobblestone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "cobblestone"
		},
		"result": "cobblestone_wall",
		"count": 1
	},
	"comparator": {
		"type": "crafting_shaped",
		"pattern": [
			" # ",
			"#X#",
			"III"
		],
		"key": {
			"#": {
				"item": "redstone_torch"
			},
			"X": {
				"item": "quartz"
			},
			"I": {
				"item": "stone"
			}
		},
		"result": {
			"item": "comparator"
		}
	},
	"compass": {
		"type": "crafting_shaped",
		"pattern": [
			" # ",
			"#X#",
			" # "
		],
		"key": {
			"#": {
				"item": "iron_ingot"
			},
			"X": {
				"item": "redstone"
			}
		},
		"result": {
			"item": "compass"
		}
	},
	"composter": {
		"type": "crafting_shaped",
		"pattern": [
			"# #",
			"# #",
			"###"
		],
		"key": {
			"#": {
				"tag": "wooden_slabs"
			}
		},
		"result": {
			"item": "composter"
		}
	},
	"conduit": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "nautilus_shell"
			},
			"X": {
				"item": "heart_of_the_sea"
			}
		},
		"result": {
			"item": "conduit"
		}
	},
	"cooked_beef": {
		"type": "smelting",
		"ingredient": {
			"item": "beef"
		},
		"result": "cooked_beef",
		"experience": 0.35,
		"cookingtime": 200
	},
	"cooked_beef_from_campfire_cooking": {
		"type": "campfire_cooking",
		"ingredient": {
			"item": "beef"
		},
		"result": "cooked_beef",
		"experience": 0.35,
		"cookingtime": 600
	},
	"cooked_beef_from_smoking": {
		"type": "smoking",
		"ingredient": {
			"item": "beef"
		},
		"result": "cooked_beef",
		"experience": 0.35,
		"cookingtime": 100
	},
	"cooked_chicken": {
		"type": "smelting",
		"ingredient": {
			"item": "chicken"
		},
		"result": "cooked_chicken",
		"experience": 0.35,
		"cookingtime": 200
	},
	"cooked_chicken_from_campfire_cooking": {
		"type": "campfire_cooking",
		"ingredient": {
			"item": "chicken"
		},
		"result": "cooked_chicken",
		"experience": 0.35,
		"cookingtime": 600
	},
	"cooked_chicken_from_smoking": {
		"type": "smoking",
		"ingredient": {
			"item": "chicken"
		},
		"result": "cooked_chicken",
		"experience": 0.35,
		"cookingtime": 100
	},
	"cooked_cod": {
		"type": "smelting",
		"ingredient": {
			"item": "cod"
		},
		"result": "cooked_cod",
		"experience": 0.35,
		"cookingtime": 200
	},
	"cooked_cod_from_campfire_cooking": {
		"type": "campfire_cooking",
		"ingredient": {
			"item": "cod"
		},
		"result": "cooked_cod",
		"experience": 0.35,
		"cookingtime": 600
	},
	"cooked_cod_from_smoking": {
		"type": "smoking",
		"ingredient": {
			"item": "cod"
		},
		"result": "cooked_cod",
		"experience": 0.35,
		"cookingtime": 100
	},
	"cooked_mutton": {
		"type": "smelting",
		"ingredient": {
			"item": "mutton"
		},
		"result": "cooked_mutton",
		"experience": 0.35,
		"cookingtime": 200
	},
	"cooked_mutton_from_campfire_cooking": {
		"type": "campfire_cooking",
		"ingredient": {
			"item": "mutton"
		},
		"result": "cooked_mutton",
		"experience": 0.35,
		"cookingtime": 600
	},
	"cooked_mutton_from_smoking": {
		"type": "smoking",
		"ingredient": {
			"item": "mutton"
		},
		"result": "cooked_mutton",
		"experience": 0.35,
		"cookingtime": 100
	},
	"cooked_porkchop": {
		"type": "smelting",
		"ingredient": {
			"item": "porkchop"
		},
		"result": "cooked_porkchop",
		"experience": 0.35,
		"cookingtime": 200
	},
	"cooked_porkchop_from_campfire_cooking": {
		"type": "campfire_cooking",
		"ingredient": {
			"item": "porkchop"
		},
		"result": "cooked_porkchop",
		"experience": 0.35,
		"cookingtime": 600
	},
	"cooked_porkchop_from_smoking": {
		"type": "smoking",
		"ingredient": {
			"item": "porkchop"
		},
		"result": "cooked_porkchop",
		"experience": 0.35,
		"cookingtime": 100
	},
	"cooked_rabbit": {
		"type": "smelting",
		"ingredient": {
			"item": "rabbit"
		},
		"result": "cooked_rabbit",
		"experience": 0.35,
		"cookingtime": 200
	},
	"cooked_rabbit_from_campfire_cooking": {
		"type": "campfire_cooking",
		"ingredient": {
			"item": "rabbit"
		},
		"result": "cooked_rabbit",
		"experience": 0.35,
		"cookingtime": 600
	},
	"cooked_rabbit_from_smoking": {
		"type": "smoking",
		"ingredient": {
			"item": "rabbit"
		},
		"result": "cooked_rabbit",
		"experience": 0.35,
		"cookingtime": 100
	},
	"cooked_salmon": {
		"type": "smelting",
		"ingredient": {
			"item": "salmon"
		},
		"result": "cooked_salmon",
		"experience": 0.35,
		"cookingtime": 200
	},
	"cooked_salmon_from_campfire_cooking": {
		"type": "campfire_cooking",
		"ingredient": {
			"item": "salmon"
		},
		"result": "cooked_salmon",
		"experience": 0.35,
		"cookingtime": 600
	},
	"cooked_salmon_from_smoking": {
		"type": "smoking",
		"ingredient": {
			"item": "salmon"
		},
		"result": "cooked_salmon",
		"experience": 0.35,
		"cookingtime": 100
	},
	"cookie": {
		"type": "crafting_shaped",
		"pattern": [
			"#X#"
		],
		"key": {
			"#": {
				"item": "wheat"
			},
			"X": {
				"item": "cocoa_beans"
			}
		},
		"result": {
			"item": "cookie",
			"count": 8
		}
	},
	"cracked_nether_bricks": {
		"type": "smelting",
		"ingredient": {
			"item": "nether_bricks"
		},
		"result": "cracked_nether_bricks",
		"experience": 0.1,
		"cookingtime": 200
	},
	"cracked_polished_blackstone_bricks": {
		"type": "smelting",
		"ingredient": {
			"item": "polished_blackstone_bricks"
		},
		"result": "cracked_polished_blackstone_bricks",
		"experience": 0.1,
		"cookingtime": 200
	},
	"cracked_stone_bricks": {
		"type": "smelting",
		"ingredient": {
			"item": "stone_bricks"
		},
		"result": "cracked_stone_bricks",
		"experience": 0.1,
		"cookingtime": 200
	},
	"crafting_table": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "crafting_table"
		}
	},
	"creeper_banner_pattern": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "paper"
		}, {
			"item": "creeper_head"
		}],
		"result": {
			"item": "creeper_banner_pattern"
		}
	},
	"crimson_button": {
		"type": "crafting_shapeless",
		"group": "wooden_button",
		"ingredients": [{
			"item": "crimson_planks"
		}],
		"result": {
			"item": "crimson_button"
		}
	},
	"crimson_door": {
		"type": "crafting_shaped",
		"group": "wooden_door",
		"pattern": [
			"##",
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "crimson_planks"
			}
		},
		"result": {
			"item": "crimson_door",
			"count": 3
		}
	},
	"crimson_fence": {
		"type": "crafting_shaped",
		"group": "wooden_fence",
		"pattern": [
			"W#W",
			"W#W"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "crimson_planks"
			}
		},
		"result": {
			"item": "crimson_fence",
			"count": 3
		}
	},
	"crimson_fence_gate": {
		"type": "crafting_shaped",
		"group": "wooden_fence_gate",
		"pattern": [
			"#W#",
			"#W#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "crimson_planks"
			}
		},
		"result": {
			"item": "crimson_fence_gate"
		}
	},
	"crimson_hyphae": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "crimson_stem"
			}
		},
		"result": {
			"item": "crimson_hyphae",
			"count": 3
		}
	},
	"crimson_planks": {
		"type": "crafting_shapeless",
		"group": "planks",
		"ingredients": [{
			"tag": "crimson_stems"
		}],
		"result": {
			"item": "crimson_planks",
			"count": 4
		}
	},
	"crimson_pressure_plate": {
		"type": "crafting_shaped",
		"group": "wooden_pressure_plate",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "crimson_planks"
			}
		},
		"result": {
			"item": "crimson_pressure_plate"
		}
	},
	"crimson_sign": {
		"type": "crafting_shaped",
		"group": "sign",
		"pattern": [
			"###",
			"###",
			" X "
		],
		"key": {
			"#": {
				"item": "crimson_planks"
			},
			"X": {
				"item": "stick"
			}
		},
		"result": {
			"item": "crimson_sign",
			"count": 3
		}
	},
	"crimson_slab": {
		"type": "crafting_shaped",
		"group": "wooden_slab",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "crimson_planks"
			}
		},
		"result": {
			"item": "crimson_slab",
			"count": 6
		}
	},
	"crimson_stairs": {
		"type": "crafting_shaped",
		"group": "wooden_stairs",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "crimson_planks"
			}
		},
		"result": {
			"item": "crimson_stairs",
			"count": 4
		}
	},
	"crimson_trapdoor": {
		"type": "crafting_shaped",
		"group": "wooden_trapdoor",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "crimson_planks"
			}
		},
		"result": {
			"item": "crimson_trapdoor",
			"count": 2
		}
	},
	"crossbow": {
		"type": "crafting_shaped",
		"pattern": [
			"#&#",
			"~$~",
			" # "
		],
		"key": {
			"~": {
				"item": "string"
			},
			"#": {
				"item": "stick"
			},
			"&": {
				"item": "iron_ingot"
			},
			"$": {
				"item": "tripwire_hook"
			}
		},
		"result": {
			"item": "crossbow"
		}
	},
	"cut_red_sandstone": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "red_sandstone"
			}
		},
		"result": {
			"item": "cut_red_sandstone",
			"count": 4
		}
	},
	"cut_red_sandstone_from_red_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "red_sandstone"
		},
		"result": "cut_red_sandstone",
		"count": 1
	},
	"cut_red_sandstone_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "cut_red_sandstone"
			}
		},
		"result": {
			"item": "cut_red_sandstone_slab",
			"count": 6
		}
	},
	"cut_red_sandstone_slab_from_cut_red_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "cut_red_sandstone"
		},
		"result": "cut_red_sandstone_slab",
		"count": 2
	},
	"cut_red_sandstone_slab_from_red_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "red_sandstone"
		},
		"result": "cut_red_sandstone_slab",
		"count": 2
	},
	"cut_sandstone": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "sandstone"
			}
		},
		"result": {
			"item": "cut_sandstone",
			"count": 4
		}
	},
	"cut_sandstone_from_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "sandstone"
		},
		"result": "cut_sandstone",
		"count": 1
	},
	"cut_sandstone_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "cut_sandstone"
			}
		},
		"result": {
			"item": "cut_sandstone_slab",
			"count": 6
		}
	},
	"cut_sandstone_slab_from_cut_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "cut_sandstone"
		},
		"result": "cut_sandstone_slab",
		"count": 2
	},
	"cut_sandstone_slab_from_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "sandstone"
		},
		"result": "cut_sandstone_slab",
		"count": 2
	},
	"cyan_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "cyan_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "cyan_banner"
		}
	},
	"cyan_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "cyan_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "cyan_bed"
		}
	},
	"cyan_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "cyan_dye"
		}],
		"result": {
			"item": "cyan_bed"
		}
	},
	"cyan_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "cyan_wool"
			}
		},
		"result": {
			"item": "cyan_carpet",
			"count": 3
		}
	},
	"cyan_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "cyan_dye"
			}
		},
		"result": {
			"item": "cyan_carpet",
			"count": 8
		}
	},
	"cyan_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "cyan_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "cyan_concrete_powder",
			"count": 8
		}
	},
	"cyan_dye": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "blue_dye"
		}, {
			"item": "green_dye"
		}],
		"result": {
			"item": "cyan_dye",
			"count": 2
		}
	},
	"cyan_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "cyan_terracotta"
		},
		"result": "cyan_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"cyan_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "cyan_dye"
			}
		},
		"result": {
			"item": "cyan_stained_glass",
			"count": 8
		}
	},
	"cyan_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "cyan_stained_glass"
			}
		},
		"result": {
			"item": "cyan_stained_glass_pane",
			"count": 16
		}
	},
	"cyan_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "cyan_dye"
			}
		},
		"result": {
			"item": "cyan_stained_glass_pane",
			"count": 8
		}
	},
	"cyan_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "cyan_dye"
			}
		},
		"result": {
			"item": "cyan_terracotta",
			"count": 8
		}
	},
	"cyan_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "cyan_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "cyan_wool"
		}
	},
	"dark_oak_boat": {
		"type": "crafting_shaped",
		"group": "boat",
		"pattern": [
			"# #",
			"###"
		],
		"key": {
			"#": {
				"item": "dark_oak_planks"
			}
		},
		"result": {
			"item": "dark_oak_boat"
		}
	},
	"dark_oak_button": {
		"type": "crafting_shapeless",
		"group": "wooden_button",
		"ingredients": [{
			"item": "dark_oak_planks"
		}],
		"result": {
			"item": "dark_oak_button"
		}
	},
	"dark_oak_door": {
		"type": "crafting_shaped",
		"group": "wooden_door",
		"pattern": [
			"##",
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "dark_oak_planks"
			}
		},
		"result": {
			"item": "dark_oak_door",
			"count": 3
		}
	},
	"dark_oak_fence": {
		"type": "crafting_shaped",
		"group": "wooden_fence",
		"pattern": [
			"W#W",
			"W#W"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "dark_oak_planks"
			}
		},
		"result": {
			"item": "dark_oak_fence",
			"count": 3
		}
	},
	"dark_oak_fence_gate": {
		"type": "crafting_shaped",
		"group": "wooden_fence_gate",
		"pattern": [
			"#W#",
			"#W#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "dark_oak_planks"
			}
		},
		"result": {
			"item": "dark_oak_fence_gate"
		}
	},
	"dark_oak_planks": {
		"type": "crafting_shapeless",
		"group": "planks",
		"ingredients": [{
			"tag": "dark_oak_logs"
		}],
		"result": {
			"item": "dark_oak_planks",
			"count": 4
		}
	},
	"dark_oak_pressure_plate": {
		"type": "crafting_shaped",
		"group": "wooden_pressure_plate",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "dark_oak_planks"
			}
		},
		"result": {
			"item": "dark_oak_pressure_plate"
		}
	},
	"dark_oak_sign": {
		"type": "crafting_shaped",
		"group": "sign",
		"pattern": [
			"###",
			"###",
			" X "
		],
		"key": {
			"#": {
				"item": "dark_oak_planks"
			},
			"X": {
				"item": "stick"
			}
		},
		"result": {
			"item": "dark_oak_sign",
			"count": 3
		}
	},
	"dark_oak_slab": {
		"type": "crafting_shaped",
		"group": "wooden_slab",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "dark_oak_planks"
			}
		},
		"result": {
			"item": "dark_oak_slab",
			"count": 6
		}
	},
	"dark_oak_stairs": {
		"type": "crafting_shaped",
		"group": "wooden_stairs",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "dark_oak_planks"
			}
		},
		"result": {
			"item": "dark_oak_stairs",
			"count": 4
		}
	},
	"dark_oak_trapdoor": {
		"type": "crafting_shaped",
		"group": "wooden_trapdoor",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "dark_oak_planks"
			}
		},
		"result": {
			"item": "dark_oak_trapdoor",
			"count": 2
		}
	},
	"dark_oak_wood": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "dark_oak_log"
			}
		},
		"result": {
			"item": "dark_oak_wood",
			"count": 3
		}
	},
	"dark_prismarine": {
		"type": "crafting_shaped",
		"pattern": [
			"SSS",
			"SIS",
			"SSS"
		],
		"key": {
			"S": {
				"item": "prismarine_shard"
			},
			"I": {
				"item": "black_dye"
			}
		},
		"result": {
			"item": "dark_prismarine"
		}
	},
	"dark_prismarine_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "dark_prismarine"
			}
		},
		"result": {
			"item": "dark_prismarine_slab",
			"count": 6
		}
	},
	"dark_prismarine_slab_from_dark_prismarine_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "dark_prismarine"
		},
		"result": "dark_prismarine_slab",
		"count": 2
	},
	"dark_prismarine_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "dark_prismarine"
			}
		},
		"result": {
			"item": "dark_prismarine_stairs",
			"count": 4
		}
	},
	"dark_prismarine_stairs_from_dark_prismarine_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "dark_prismarine"
		},
		"result": "dark_prismarine_stairs",
		"count": 1
	},
	"daylight_detector": {
		"type": "crafting_shaped",
		"pattern": [
			"GGG",
			"QQQ",
			"WWW"
		],
		"key": {
			"Q": {
				"item": "quartz"
			},
			"G": {
				"item": "glass"
			},
			"W": {
				"tag": "wooden_slabs"
			}
		},
		"result": {
			"item": "daylight_detector"
		}
	},
	"detector_rail": {
		"type": "crafting_shaped",
		"pattern": [
			"X X",
			"X#X",
			"XRX"
		],
		"key": {
			"R": {
				"item": "redstone"
			},
			"#": {
				"item": "stone_pressure_plate"
			},
			"X": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "detector_rail",
			"count": 6
		}
	},
	"diamond": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "diamond_block"
		}],
		"result": {
			"item": "diamond",
			"count": 9
		}
	},
	"diamond_axe": {
		"type": "crafting_shaped",
		"pattern": [
			"XX",
			"X#",
			" #"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "diamond"
			}
		},
		"result": {
			"item": "diamond_axe"
		}
	},
	"diamond_block": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "diamond"
			}
		},
		"result": {
			"item": "diamond_block"
		}
	},
	"diamond_boots": {
		"type": "crafting_shaped",
		"pattern": [
			"X X",
			"X X"
		],
		"key": {
			"X": {
				"item": "diamond"
			}
		},
		"result": {
			"item": "diamond_boots"
		}
	},
	"diamond_chestplate": {
		"type": "crafting_shaped",
		"pattern": [
			"X X",
			"XXX",
			"XXX"
		],
		"key": {
			"X": {
				"item": "diamond"
			}
		},
		"result": {
			"item": "diamond_chestplate"
		}
	},
	"diamond_from_blasting": {
		"type": "blasting",
		"ingredient": {
			"item": "diamond_ore"
		},
		"result": "diamond",
		"experience": 1.0,
		"cookingtime": 100
	},
	"diamond_from_smelting": {
		"type": "smelting",
		"ingredient": {
			"item": "diamond_ore"
		},
		"result": "diamond",
		"experience": 1.0,
		"cookingtime": 200
	},
	"diamond_helmet": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			"X X"
		],
		"key": {
			"X": {
				"item": "diamond"
			}
		},
		"result": {
			"item": "diamond_helmet"
		}
	},
	"diamond_hoe": {
		"type": "crafting_shaped",
		"pattern": [
			"XX",
			" #",
			" #"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "diamond"
			}
		},
		"result": {
			"item": "diamond_hoe"
		}
	},
	"diamond_leggings": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			"X X",
			"X X"
		],
		"key": {
			"X": {
				"item": "diamond"
			}
		},
		"result": {
			"item": "diamond_leggings"
		}
	},
	"diamond_pickaxe": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			" # ",
			" # "
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "diamond"
			}
		},
		"result": {
			"item": "diamond_pickaxe"
		}
	},
	"diamond_shovel": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "diamond"
			}
		},
		"result": {
			"item": "diamond_shovel"
		}
	},
	"diamond_sword": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"X",
			"#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "diamond"
			}
		},
		"result": {
			"item": "diamond_sword"
		}
	},
	"diorite": {
		"type": "crafting_shaped",
		"pattern": [
			"CQ",
			"QC"
		],
		"key": {
			"Q": {
				"item": "quartz"
			},
			"C": {
				"item": "cobblestone"
			}
		},
		"result": {
			"item": "diorite",
			"count": 2
		}
	},
	"diorite_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "diorite"
			}
		},
		"result": {
			"item": "diorite_slab",
			"count": 6
		}
	},
	"diorite_slab_from_diorite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "diorite"
		},
		"result": "diorite_slab",
		"count": 2
	},
	"diorite_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "diorite"
			}
		},
		"result": {
			"item": "diorite_stairs",
			"count": 4
		}
	},
	"diorite_stairs_from_diorite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "diorite"
		},
		"result": "diorite_stairs",
		"count": 1
	},
	"diorite_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "diorite"
			}
		},
		"result": {
			"item": "diorite_wall",
			"count": 6
		}
	},
	"diorite_wall_from_diorite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "diorite"
		},
		"result": "diorite_wall",
		"count": 1
	},
	"dispenser": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"#X#",
			"#R#"
		],
		"key": {
			"R": {
				"item": "redstone"
			},
			"#": {
				"item": "cobblestone"
			},
			"X": {
				"item": "bow"
			}
		},
		"result": {
			"item": "dispenser"
		}
	},
	"dried_kelp": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "dried_kelp_block"
		}],
		"result": {
			"item": "dried_kelp",
			"count": 9
		}
	},
	"dried_kelp_block": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "dried_kelp"
		}, {
			"item": "dried_kelp"
		}, {
			"item": "dried_kelp"
		}, {
			"item": "dried_kelp"
		}, {
			"item": "dried_kelp"
		}, {
			"item": "dried_kelp"
		}, {
			"item": "dried_kelp"
		}, {
			"item": "dried_kelp"
		}, {
			"item": "dried_kelp"
		}],
		"result": {
			"item": "dried_kelp_block"
		}
	},
	"dried_kelp_from_campfire_cooking": {
		"type": "campfire_cooking",
		"ingredient": {
			"item": "kelp"
		},
		"result": "dried_kelp",
		"experience": 0.1,
		"cookingtime": 600
	},
	"dried_kelp_from_smelting": {
		"type": "smelting",
		"ingredient": {
			"item": "kelp"
		},
		"result": "dried_kelp",
		"experience": 0.1,
		"cookingtime": 200
	},
	"dried_kelp_from_smoking": {
		"type": "smoking",
		"ingredient": {
			"item": "kelp"
		},
		"result": "dried_kelp",
		"experience": 0.1,
		"cookingtime": 100
	},
	"dropper": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"# #",
			"#R#"
		],
		"key": {
			"R": {
				"item": "redstone"
			},
			"#": {
				"item": "cobblestone"
			}
		},
		"result": {
			"item": "dropper"
		}
	},
	"emerald": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "emerald_block"
		}],
		"result": {
			"item": "emerald",
			"count": 9
		}
	},
	"emerald_block": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "emerald"
			}
		},
		"result": {
			"item": "emerald_block"
		}
	},
	"emerald_from_blasting": {
		"type": "blasting",
		"ingredient": {
			"item": "emerald_ore"
		},
		"result": "emerald",
		"experience": 1.0,
		"cookingtime": 100
	},
	"emerald_from_smelting": {
		"type": "smelting",
		"ingredient": {
			"item": "emerald_ore"
		},
		"result": "emerald",
		"experience": 1.0,
		"cookingtime": 200
	},
	"enchanting_table": {
		"type": "crafting_shaped",
		"pattern": [
			" B ",
			"D#D",
			"###"
		],
		"key": {
			"B": {
				"item": "book"
			},
			"#": {
				"item": "obsidian"
			},
			"D": {
				"item": "diamond"
			}
		},
		"result": {
			"item": "enchanting_table"
		}
	},
	"ender_chest": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"#E#",
			"###"
		],
		"key": {
			"#": {
				"item": "obsidian"
			},
			"E": {
				"item": "ender_eye"
			}
		},
		"result": {
			"item": "ender_chest"
		}
	},
	"ender_eye": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "ender_pearl"
		}, {
			"item": "blaze_powder"
		}],
		"result": {
			"item": "ender_eye"
		}
	},
	"end_crystal": {
		"type": "crafting_shaped",
		"pattern": [
			"GGG",
			"GEG",
			"GTG"
		],
		"key": {
			"T": {
				"item": "ghast_tear"
			},
			"E": {
				"item": "ender_eye"
			},
			"G": {
				"item": "glass"
			}
		},
		"result": {
			"item": "end_crystal"
		}
	},
	"end_rod": {
		"type": "crafting_shaped",
		"pattern": [
			"/",
			"#"
		],
		"key": {
			"#": {
				"item": "popped_chorus_fruit"
			},
			"/": {
				"item": "blaze_rod"
			}
		},
		"result": {
			"item": "end_rod",
			"count": 4
		}
	},
	"end_stone_bricks": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "end_stone"
			}
		},
		"result": {
			"item": "end_stone_bricks",
			"count": 4
		}
	},
	"end_stone_bricks_from_end_stone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "end_stone"
		},
		"result": "end_stone_bricks",
		"count": 1
	},
	"end_stone_brick_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "end_stone_bricks"
			}
		},
		"result": {
			"item": "end_stone_brick_slab",
			"count": 6
		}
	},
	"end_stone_brick_slab_from_end_stone_brick_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "end_stone_bricks"
		},
		"result": "end_stone_brick_slab",
		"count": 2
	},
	"end_stone_brick_slab_from_end_stone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "end_stone"
		},
		"result": "end_stone_brick_slab",
		"count": 2
	},
	"end_stone_brick_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "end_stone_bricks"
			}
		},
		"result": {
			"item": "end_stone_brick_stairs",
			"count": 4
		}
	},
	"end_stone_brick_stairs_from_end_stone_brick_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "end_stone_bricks"
		},
		"result": "end_stone_brick_stairs",
		"count": 1
	},
	"end_stone_brick_stairs_from_end_stone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "end_stone"
		},
		"result": "end_stone_brick_stairs",
		"count": 1
	},
	"end_stone_brick_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "end_stone_bricks"
			}
		},
		"result": {
			"item": "end_stone_brick_wall",
			"count": 6
		}
	},
	"end_stone_brick_wall_from_end_stone_brick_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "end_stone_bricks"
		},
		"result": "end_stone_brick_wall",
		"count": 1
	},
	"end_stone_brick_wall_from_end_stone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "end_stone"
		},
		"result": "end_stone_brick_wall",
		"count": 1
	},
	"fermented_spider_eye": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "spider_eye"
		}, {
			"item": "brown_mushroom"
		}, {
			"item": "sugar"
		}],
		"result": {
			"item": "fermented_spider_eye"
		}
	},
	"firework_rocket": {
		"type": "crafting_special_firework_rocket"
	},
	"firework_star": {
		"type": "crafting_special_firework_star"
	},
	"firework_star_fade": {
		"type": "crafting_special_firework_star_fade"
	},
	"fire_charge": {
		"type": "crafting_shapeless",
		"ingredients": [{
				"item": "gunpowder"
			}, {
				"item": "blaze_powder"
			},
			[{
				"item": "coal"
			}, {
				"item": "charcoal"
			}]
		],
		"result": {
			"item": "fire_charge",
			"count": 3
		}
	},
	"fishing_rod": {
		"type": "crafting_shaped",
		"pattern": [
			"  #",
			" #X",
			"# X"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "string"
			}
		},
		"result": {
			"item": "fishing_rod"
		}
	},
	"fletching_table": {
		"type": "crafting_shaped",
		"pattern": [
			"@@",
			"##",
			"##"
		],
		"key": {
			"#": {
				"tag": "planks"
			},
			"@": {
				"item": "flint"
			}
		},
		"result": {
			"item": "fletching_table"
		}
	},
	"flint_and_steel": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "iron_ingot"
		}, {
			"item": "flint"
		}],
		"result": {
			"item": "flint_and_steel"
		}
	},
	"flower_banner_pattern": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "paper"
		}, {
			"item": "oxeye_daisy"
		}],
		"result": {
			"item": "flower_banner_pattern"
		}
	},
	"flower_pot": {
		"type": "crafting_shaped",
		"pattern": [
			"# #",
			" # "
		],
		"key": {
			"#": {
				"item": "brick"
			}
		},
		"result": {
			"item": "flower_pot"
		}
	},
	"furnace": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"# #",
			"###"
		],
		"key": {
			"#": {
				"tag": "stone_crafting_materials"
			}
		},
		"result": {
			"item": "furnace"
		}
	},
	"furnace_minecart": {
		"type": "crafting_shaped",
		"pattern": [
			"A",
			"B"
		],
		"key": {
			"A": {
				"item": "furnace"
			},
			"B": {
				"item": "minecart"
			}
		},
		"result": {
			"item": "furnace_minecart"
		}
	},
	"glass": {
		"type": "smelting",
		"ingredient": {
			"tag": "sand"
		},
		"result": "glass",
		"experience": 0.1,
		"cookingtime": 200
	},
	"glass_bottle": {
		"type": "crafting_shaped",
		"pattern": [
			"# #",
			" # "
		],
		"key": {
			"#": {
				"item": "glass"
			}
		},
		"result": {
			"item": "glass_bottle",
			"count": 3
		}
	},
	"glass_pane": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			}
		},
		"result": {
			"item": "glass_pane",
			"count": 16
		}
	},
	"glistering_melon_slice": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "gold_nugget"
			},
			"X": {
				"item": "melon_slice"
			}
		},
		"result": {
			"item": "glistering_melon_slice"
		}
	},
	"glowstone": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "glowstone_dust"
			}
		},
		"result": {
			"item": "glowstone"
		}
	},
	"golden_apple": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "gold_ingot"
			},
			"X": {
				"item": "apple"
			}
		},
		"result": {
			"item": "golden_apple"
		}
	},
	"golden_axe": {
		"type": "crafting_shaped",
		"pattern": [
			"XX",
			"X#",
			" #"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "gold_ingot"
			}
		},
		"result": {
			"item": "golden_axe"
		}
	},
	"golden_boots": {
		"type": "crafting_shaped",
		"pattern": [
			"X X",
			"X X"
		],
		"key": {
			"X": {
				"item": "gold_ingot"
			}
		},
		"result": {
			"item": "golden_boots"
		}
	},
	"golden_carrot": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "gold_nugget"
			},
			"X": {
				"item": "carrot"
			}
		},
		"result": {
			"item": "golden_carrot"
		}
	},
	"golden_chestplate": {
		"type": "crafting_shaped",
		"pattern": [
			"X X",
			"XXX",
			"XXX"
		],
		"key": {
			"X": {
				"item": "gold_ingot"
			}
		},
		"result": {
			"item": "golden_chestplate"
		}
	},
	"golden_helmet": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			"X X"
		],
		"key": {
			"X": {
				"item": "gold_ingot"
			}
		},
		"result": {
			"item": "golden_helmet"
		}
	},
	"golden_hoe": {
		"type": "crafting_shaped",
		"pattern": [
			"XX",
			" #",
			" #"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "gold_ingot"
			}
		},
		"result": {
			"item": "golden_hoe"
		}
	},
	"golden_leggings": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			"X X",
			"X X"
		],
		"key": {
			"X": {
				"item": "gold_ingot"
			}
		},
		"result": {
			"item": "golden_leggings"
		}
	},
	"golden_pickaxe": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			" # ",
			" # "
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "gold_ingot"
			}
		},
		"result": {
			"item": "golden_pickaxe"
		}
	},
	"golden_shovel": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "gold_ingot"
			}
		},
		"result": {
			"item": "golden_shovel"
		}
	},
	"golden_sword": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"X",
			"#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "gold_ingot"
			}
		},
		"result": {
			"item": "golden_sword"
		}
	},
	"gold_block": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "gold_ingot"
			}
		},
		"result": {
			"item": "gold_block"
		}
	},
	"gold_ingot": {
		"type": "smelting",
		"ingredient": {
			"tag": "gold_ores"
		},
		"result": "gold_ingot",
		"experience": 1.0,
		"cookingtime": 200
	},
	"gold_ingot_from_blasting": {
		"type": "blasting",
		"ingredient": {
			"tag": "gold_ores"
		},
		"result": "gold_ingot",
		"experience": 1.0,
		"cookingtime": 100
	},
	"gold_ingot_from_gold_block": {
		"type": "crafting_shapeless",
		"group": "gold_ingot",
		"ingredients": [{
			"item": "gold_block"
		}],
		"result": {
			"item": "gold_ingot",
			"count": 9
		}
	},
	"gold_ingot_from_nuggets": {
		"type": "crafting_shaped",
		"group": "gold_ingot",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "gold_nugget"
			}
		},
		"result": {
			"item": "gold_ingot"
		}
	},
	"gold_nugget": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "gold_ingot"
		}],
		"result": {
			"item": "gold_nugget",
			"count": 9
		}
	},
	"gold_nugget_from_blasting": {
		"type": "blasting",
		"ingredient": [{
			"item": "golden_pickaxe"
		}, {
			"item": "golden_shovel"
		}, {
			"item": "golden_axe"
		}, {
			"item": "golden_hoe"
		}, {
			"item": "golden_sword"
		}, {
			"item": "golden_helmet"
		}, {
			"item": "golden_chestplate"
		}, {
			"item": "golden_leggings"
		}, {
			"item": "golden_boots"
		}, {
			"item": "golden_horse_armor"
		}],
		"result": "gold_nugget",
		"experience": 0.1,
		"cookingtime": 100
	},
	"gold_nugget_from_smelting": {
		"type": "smelting",
		"ingredient": [{
			"item": "golden_pickaxe"
		}, {
			"item": "golden_shovel"
		}, {
			"item": "golden_axe"
		}, {
			"item": "golden_hoe"
		}, {
			"item": "golden_sword"
		}, {
			"item": "golden_helmet"
		}, {
			"item": "golden_chestplate"
		}, {
			"item": "golden_leggings"
		}, {
			"item": "golden_boots"
		}, {
			"item": "golden_horse_armor"
		}],
		"result": "gold_nugget",
		"experience": 0.1,
		"cookingtime": 200
	},
	"granite": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "diorite"
		}, {
			"item": "quartz"
		}],
		"result": {
			"item": "granite"
		}
	},
	"granite_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "granite"
			}
		},
		"result": {
			"item": "granite_slab",
			"count": 6
		}
	},
	"granite_slab_from_granite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "granite"
		},
		"result": "granite_slab",
		"count": 2
	},
	"granite_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "granite"
			}
		},
		"result": {
			"item": "granite_stairs",
			"count": 4
		}
	},
	"granite_stairs_from_granite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "granite"
		},
		"result": "granite_stairs",
		"count": 1
	},
	"granite_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "granite"
			}
		},
		"result": {
			"item": "granite_wall",
			"count": 6
		}
	},
	"granite_wall_from_granite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "granite"
		},
		"result": "granite_wall",
		"count": 1
	},
	"gray_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "gray_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "gray_banner"
		}
	},
	"gray_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "gray_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "gray_bed"
		}
	},
	"gray_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "gray_dye"
		}],
		"result": {
			"item": "gray_bed"
		}
	},
	"gray_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "gray_wool"
			}
		},
		"result": {
			"item": "gray_carpet",
			"count": 3
		}
	},
	"gray_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "gray_dye"
			}
		},
		"result": {
			"item": "gray_carpet",
			"count": 8
		}
	},
	"gray_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "gray_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "gray_concrete_powder",
			"count": 8
		}
	},
	"gray_dye": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "black_dye"
		}, {
			"item": "white_dye"
		}],
		"result": {
			"item": "gray_dye",
			"count": 2
		}
	},
	"gray_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "gray_terracotta"
		},
		"result": "gray_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"gray_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "gray_dye"
			}
		},
		"result": {
			"item": "gray_stained_glass",
			"count": 8
		}
	},
	"gray_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "gray_stained_glass"
			}
		},
		"result": {
			"item": "gray_stained_glass_pane",
			"count": 16
		}
	},
	"gray_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "gray_dye"
			}
		},
		"result": {
			"item": "gray_stained_glass_pane",
			"count": 8
		}
	},
	"gray_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "gray_dye"
			}
		},
		"result": {
			"item": "gray_terracotta",
			"count": 8
		}
	},
	"gray_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "gray_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "gray_wool"
		}
	},
	"green_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "green_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "green_banner"
		}
	},
	"green_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "green_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "green_bed"
		}
	},
	"green_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "green_dye"
		}],
		"result": {
			"item": "green_bed"
		}
	},
	"green_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "green_wool"
			}
		},
		"result": {
			"item": "green_carpet",
			"count": 3
		}
	},
	"green_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "green_dye"
			}
		},
		"result": {
			"item": "green_carpet",
			"count": 8
		}
	},
	"green_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "green_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "green_concrete_powder",
			"count": 8
		}
	},
	"green_dye": {
		"type": "smelting",
		"ingredient": {
			"item": "cactus"
		},
		"result": "green_dye",
		"experience": 1.0,
		"cookingtime": 200
	},
	"green_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "green_terracotta"
		},
		"result": "green_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"green_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "green_dye"
			}
		},
		"result": {
			"item": "green_stained_glass",
			"count": 8
		}
	},
	"green_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "green_stained_glass"
			}
		},
		"result": {
			"item": "green_stained_glass_pane",
			"count": 16
		}
	},
	"green_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "green_dye"
			}
		},
		"result": {
			"item": "green_stained_glass_pane",
			"count": 8
		}
	},
	"green_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "green_dye"
			}
		},
		"result": {
			"item": "green_terracotta",
			"count": 8
		}
	},
	"green_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "green_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "green_wool"
		}
	},
	"grindstone": {
		"type": "crafting_shaped",
		"pattern": [
			"I-I",
			"# #"
		],
		"key": {
			"I": {
				"item": "stick"
			},
			"-": {
				"item": "stone_slab"
			},
			"#": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "grindstone"
		}
	},
	"hay_block": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "wheat"
			}
		},
		"result": {
			"item": "hay_block"
		}
	},
	"heavy_weighted_pressure_plate": {
		"type": "crafting_shaped",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "heavy_weighted_pressure_plate"
		}
	},
	"honeycomb_block": {
		"type": "crafting_shaped",
		"pattern": [
			"HH",
			"HH"
		],
		"key": {
			"H": {
				"item": "honeycomb"
			}
		},
		"result": {
			"item": "honeycomb_block"
		}
	},
	"honey_block": {
		"type": "crafting_shaped",
		"pattern": [
			"SS",
			"SS"
		],
		"key": {
			"S": {
				"item": "honey_bottle"
			}
		},
		"result": {
			"item": "honey_block"
		}
	},
	"honey_bottle": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "honey_block"
		}, {
			"item": "glass_bottle"
		}, {
			"item": "glass_bottle"
		}, {
			"item": "glass_bottle"
		}, {
			"item": "glass_bottle"
		}],
		"result": {
			"item": "honey_bottle",
			"count": 4
		}
	},
	"hopper": {
		"type": "crafting_shaped",
		"pattern": [
			"I I",
			"ICI",
			" I "
		],
		"key": {
			"C": {
				"item": "chest"
			},
			"I": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "hopper"
		}
	},
	"hopper_minecart": {
		"type": "crafting_shaped",
		"pattern": [
			"A",
			"B"
		],
		"key": {
			"A": {
				"item": "hopper"
			},
			"B": {
				"item": "minecart"
			}
		},
		"result": {
			"item": "hopper_minecart"
		}
	},
	"iron_axe": {
		"type": "crafting_shaped",
		"pattern": [
			"XX",
			"X#",
			" #"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "iron_axe"
		}
	},
	"iron_bars": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "iron_bars",
			"count": 16
		}
	},
	"iron_block": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "iron_block"
		}
	},
	"iron_boots": {
		"type": "crafting_shaped",
		"pattern": [
			"X X",
			"X X"
		],
		"key": {
			"X": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "iron_boots"
		}
	},
	"iron_chestplate": {
		"type": "crafting_shaped",
		"pattern": [
			"X X",
			"XXX",
			"XXX"
		],
		"key": {
			"X": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "iron_chestplate"
		}
	},
	"iron_door": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "iron_door",
			"count": 3
		}
	},
	"iron_helmet": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			"X X"
		],
		"key": {
			"X": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "iron_helmet"
		}
	},
	"iron_hoe": {
		"type": "crafting_shaped",
		"pattern": [
			"XX",
			" #",
			" #"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "iron_hoe"
		}
	},
	"iron_ingot": {
		"type": "smelting",
		"ingredient": {
			"item": "iron_ore"
		},
		"result": "iron_ingot",
		"experience": 0.7,
		"cookingtime": 200
	},
	"iron_ingot_from_blasting": {
		"type": "blasting",
		"ingredient": {
			"item": "iron_ore"
		},
		"result": "iron_ingot",
		"experience": 0.7,
		"cookingtime": 100
	},
	"iron_ingot_from_iron_block": {
		"type": "crafting_shapeless",
		"group": "iron_ingot",
		"ingredients": [{
			"item": "iron_block"
		}],
		"result": {
			"item": "iron_ingot",
			"count": 9
		}
	},
	"iron_ingot_from_nuggets": {
		"type": "crafting_shaped",
		"group": "iron_ingot",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "iron_nugget"
			}
		},
		"result": {
			"item": "iron_ingot"
		}
	},
	"iron_leggings": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			"X X",
			"X X"
		],
		"key": {
			"X": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "iron_leggings"
		}
	},
	"iron_nugget": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "iron_ingot"
		}],
		"result": {
			"item": "iron_nugget",
			"count": 9
		}
	},
	"iron_nugget_from_blasting": {
		"type": "blasting",
		"ingredient": [{
			"item": "iron_pickaxe"
		}, {
			"item": "iron_shovel"
		}, {
			"item": "iron_axe"
		}, {
			"item": "iron_hoe"
		}, {
			"item": "iron_sword"
		}, {
			"item": "iron_helmet"
		}, {
			"item": "iron_chestplate"
		}, {
			"item": "iron_leggings"
		}, {
			"item": "iron_boots"
		}, {
			"item": "iron_horse_armor"
		}, {
			"item": "chainmail_helmet"
		}, {
			"item": "chainmail_chestplate"
		}, {
			"item": "chainmail_leggings"
		}, {
			"item": "chainmail_boots"
		}],
		"result": "iron_nugget",
		"experience": 0.1,
		"cookingtime": 100
	},
	"iron_nugget_from_smelting": {
		"type": "smelting",
		"ingredient": [{
			"item": "iron_pickaxe"
		}, {
			"item": "iron_shovel"
		}, {
			"item": "iron_axe"
		}, {
			"item": "iron_hoe"
		}, {
			"item": "iron_sword"
		}, {
			"item": "iron_helmet"
		}, {
			"item": "iron_chestplate"
		}, {
			"item": "iron_leggings"
		}, {
			"item": "iron_boots"
		}, {
			"item": "iron_horse_armor"
		}, {
			"item": "chainmail_helmet"
		}, {
			"item": "chainmail_chestplate"
		}, {
			"item": "chainmail_leggings"
		}, {
			"item": "chainmail_boots"
		}],
		"result": "iron_nugget",
		"experience": 0.1,
		"cookingtime": 200
	},
	"iron_pickaxe": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			" # ",
			" # "
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "iron_pickaxe"
		}
	},
	"iron_shovel": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "iron_shovel"
		}
	},
	"iron_sword": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"X",
			"#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "iron_sword"
		}
	},
	"iron_trapdoor": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "iron_trapdoor"
		}
	},
	"item_frame": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "leather"
			}
		},
		"result": {
			"item": "item_frame"
		}
	},
	"jack_o_lantern": {
		"type": "crafting_shaped",
		"pattern": [
			"A",
			"B"
		],
		"key": {
			"A": {
				"item": "carved_pumpkin"
			},
			"B": {
				"item": "torch"
			}
		},
		"result": {
			"item": "jack_o_lantern"
		}
	},
	"jukebox": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"tag": "planks"
			},
			"X": {
				"item": "diamond"
			}
		},
		"result": {
			"item": "jukebox"
		}
	},
	"jungle_boat": {
		"type": "crafting_shaped",
		"group": "boat",
		"pattern": [
			"# #",
			"###"
		],
		"key": {
			"#": {
				"item": "jungle_planks"
			}
		},
		"result": {
			"item": "jungle_boat"
		}
	},
	"jungle_button": {
		"type": "crafting_shapeless",
		"group": "wooden_button",
		"ingredients": [{
			"item": "jungle_planks"
		}],
		"result": {
			"item": "jungle_button"
		}
	},
	"jungle_door": {
		"type": "crafting_shaped",
		"group": "wooden_door",
		"pattern": [
			"##",
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "jungle_planks"
			}
		},
		"result": {
			"item": "jungle_door",
			"count": 3
		}
	},
	"jungle_fence": {
		"type": "crafting_shaped",
		"group": "wooden_fence",
		"pattern": [
			"W#W",
			"W#W"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "jungle_planks"
			}
		},
		"result": {
			"item": "jungle_fence",
			"count": 3
		}
	},
	"jungle_fence_gate": {
		"type": "crafting_shaped",
		"group": "wooden_fence_gate",
		"pattern": [
			"#W#",
			"#W#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "jungle_planks"
			}
		},
		"result": {
			"item": "jungle_fence_gate"
		}
	},
	"jungle_planks": {
		"type": "crafting_shapeless",
		"group": "planks",
		"ingredients": [{
			"tag": "jungle_logs"
		}],
		"result": {
			"item": "jungle_planks",
			"count": 4
		}
	},
	"jungle_pressure_plate": {
		"type": "crafting_shaped",
		"group": "wooden_pressure_plate",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "jungle_planks"
			}
		},
		"result": {
			"item": "jungle_pressure_plate"
		}
	},
	"jungle_sign": {
		"type": "crafting_shaped",
		"group": "sign",
		"pattern": [
			"###",
			"###",
			" X "
		],
		"key": {
			"#": {
				"item": "jungle_planks"
			},
			"X": {
				"item": "stick"
			}
		},
		"result": {
			"item": "jungle_sign",
			"count": 3
		}
	},
	"jungle_slab": {
		"type": "crafting_shaped",
		"group": "wooden_slab",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "jungle_planks"
			}
		},
		"result": {
			"item": "jungle_slab",
			"count": 6
		}
	},
	"jungle_stairs": {
		"type": "crafting_shaped",
		"group": "wooden_stairs",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "jungle_planks"
			}
		},
		"result": {
			"item": "jungle_stairs",
			"count": 4
		}
	},
	"jungle_trapdoor": {
		"type": "crafting_shaped",
		"group": "wooden_trapdoor",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "jungle_planks"
			}
		},
		"result": {
			"item": "jungle_trapdoor",
			"count": 2
		}
	},
	"jungle_wood": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "jungle_log"
			}
		},
		"result": {
			"item": "jungle_wood",
			"count": 3
		}
	},
	"ladder": {
		"type": "crafting_shaped",
		"pattern": [
			"# #",
			"###",
			"# #"
		],
		"key": {
			"#": {
				"item": "stick"
			}
		},
		"result": {
			"item": "ladder",
			"count": 3
		}
	},
	"lantern": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			"X#X",
			"XXX"
		],
		"key": {
			"#": {
				"item": "torch"
			},
			"X": {
				"item": "iron_nugget"
			}
		},
		"result": {
			"item": "lantern"
		}
	},
	"lapis_block": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "lapis_lazuli"
			}
		},
		"result": {
			"item": "lapis_block"
		}
	},
	"lapis_from_blasting": {
		"type": "blasting",
		"ingredient": {
			"item": "lapis_ore"
		},
		"result": "lapis_lazuli",
		"experience": 0.2,
		"cookingtime": 100
	},
	"lapis_from_smelting": {
		"type": "smelting",
		"ingredient": {
			"item": "lapis_ore"
		},
		"result": "lapis_lazuli",
		"experience": 0.2,
		"cookingtime": 200
	},
	"lapis_lazuli": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "lapis_block"
		}],
		"result": {
			"item": "lapis_lazuli",
			"count": 9
		}
	},
	"lead": {
		"type": "crafting_shaped",
		"pattern": [
			"~~ ",
			"~O ",
			"  ~"
		],
		"key": {
			"~": {
				"item": "string"
			},
			"O": {
				"item": "slime_ball"
			}
		},
		"result": {
			"item": "lead",
			"count": 2
		}
	},
	"leather": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "rabbit_hide"
			}
		},
		"result": {
			"item": "leather"
		}
	},
	"leather_boots": {
		"type": "crafting_shaped",
		"pattern": [
			"X X",
			"X X"
		],
		"key": {
			"X": {
				"item": "leather"
			}
		},
		"result": {
			"item": "leather_boots"
		}
	},
	"leather_chestplate": {
		"type": "crafting_shaped",
		"pattern": [
			"X X",
			"XXX",
			"XXX"
		],
		"key": {
			"X": {
				"item": "leather"
			}
		},
		"result": {
			"item": "leather_chestplate"
		}
	},
	"leather_helmet": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			"X X"
		],
		"key": {
			"X": {
				"item": "leather"
			}
		},
		"result": {
			"item": "leather_helmet"
		}
	},
	"leather_horse_armor": {
		"type": "crafting_shaped",
		"pattern": [
			"X X",
			"XXX",
			"X X"
		],
		"key": {
			"X": {
				"item": "leather"
			}
		},
		"result": {
			"item": "leather_horse_armor"
		}
	},
	"leather_leggings": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			"X X",
			"X X"
		],
		"key": {
			"X": {
				"item": "leather"
			}
		},
		"result": {
			"item": "leather_leggings"
		}
	},
	"lectern": {
		"type": "crafting_shaped",
		"pattern": [
			"SSS",
			" B ",
			" S "
		],
		"key": {
			"S": {
				"tag": "wooden_slabs"
			},
			"B": {
				"item": "bookshelf"
			}
		},
		"result": {
			"item": "lectern"
		}
	},
	"lever": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"#"
		],
		"key": {
			"#": {
				"item": "cobblestone"
			},
			"X": {
				"item": "stick"
			}
		},
		"result": {
			"item": "lever"
		}
	},
	"light_blue_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "light_blue_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "light_blue_banner"
		}
	},
	"light_blue_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "light_blue_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "light_blue_bed"
		}
	},
	"light_blue_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "light_blue_dye"
		}],
		"result": {
			"item": "light_blue_bed"
		}
	},
	"light_blue_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "light_blue_wool"
			}
		},
		"result": {
			"item": "light_blue_carpet",
			"count": 3
		}
	},
	"light_blue_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "light_blue_dye"
			}
		},
		"result": {
			"item": "light_blue_carpet",
			"count": 8
		}
	},
	"light_blue_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "light_blue_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "light_blue_concrete_powder",
			"count": 8
		}
	},
	"light_blue_dye_from_blue_orchid": {
		"type": "crafting_shapeless",
		"group": "light_blue_dye",
		"ingredients": [{
			"item": "blue_orchid"
		}],
		"result": {
			"item": "light_blue_dye"
		}
	},
	"light_blue_dye_from_blue_white_dye": {
		"type": "crafting_shapeless",
		"group": "light_blue_dye",
		"ingredients": [{
			"item": "blue_dye"
		}, {
			"item": "white_dye"
		}],
		"result": {
			"item": "light_blue_dye",
			"count": 2
		}
	},
	"light_blue_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "light_blue_terracotta"
		},
		"result": "light_blue_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"light_blue_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "light_blue_dye"
			}
		},
		"result": {
			"item": "light_blue_stained_glass",
			"count": 8
		}
	},
	"light_blue_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "light_blue_stained_glass"
			}
		},
		"result": {
			"item": "light_blue_stained_glass_pane",
			"count": 16
		}
	},
	"light_blue_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "light_blue_dye"
			}
		},
		"result": {
			"item": "light_blue_stained_glass_pane",
			"count": 8
		}
	},
	"light_blue_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "light_blue_dye"
			}
		},
		"result": {
			"item": "light_blue_terracotta",
			"count": 8
		}
	},
	"light_blue_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "light_blue_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "light_blue_wool"
		}
	},
	"light_gray_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "light_gray_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "light_gray_banner"
		}
	},
	"light_gray_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "light_gray_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "light_gray_bed"
		}
	},
	"light_gray_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "light_gray_dye"
		}],
		"result": {
			"item": "light_gray_bed"
		}
	},
	"light_gray_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "light_gray_wool"
			}
		},
		"result": {
			"item": "light_gray_carpet",
			"count": 3
		}
	},
	"light_gray_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "light_gray_dye"
			}
		},
		"result": {
			"item": "light_gray_carpet",
			"count": 8
		}
	},
	"light_gray_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "light_gray_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "light_gray_concrete_powder",
			"count": 8
		}
	},
	"light_gray_dye_from_azure_bluet": {
		"type": "crafting_shapeless",
		"group": "light_gray_dye",
		"ingredients": [{
			"item": "azure_bluet"
		}],
		"result": {
			"item": "light_gray_dye"
		}
	},
	"light_gray_dye_from_black_white_dye": {
		"type": "crafting_shapeless",
		"group": "light_gray_dye",
		"ingredients": [{
			"item": "black_dye"
		}, {
			"item": "white_dye"
		}, {
			"item": "white_dye"
		}],
		"result": {
			"item": "light_gray_dye",
			"count": 3
		}
	},
	"light_gray_dye_from_gray_white_dye": {
		"type": "crafting_shapeless",
		"group": "light_gray_dye",
		"ingredients": [{
			"item": "gray_dye"
		}, {
			"item": "white_dye"
		}],
		"result": {
			"item": "light_gray_dye",
			"count": 2
		}
	},
	"light_gray_dye_from_oxeye_daisy": {
		"type": "crafting_shapeless",
		"group": "light_gray_dye",
		"ingredients": [{
			"item": "oxeye_daisy"
		}],
		"result": {
			"item": "light_gray_dye"
		}
	},
	"light_gray_dye_from_white_tulip": {
		"type": "crafting_shapeless",
		"group": "light_gray_dye",
		"ingredients": [{
			"item": "white_tulip"
		}],
		"result": {
			"item": "light_gray_dye"
		}
	},
	"light_gray_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "light_gray_terracotta"
		},
		"result": "light_gray_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"light_gray_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "light_gray_dye"
			}
		},
		"result": {
			"item": "light_gray_stained_glass",
			"count": 8
		}
	},
	"light_gray_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "light_gray_stained_glass"
			}
		},
		"result": {
			"item": "light_gray_stained_glass_pane",
			"count": 16
		}
	},
	"light_gray_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "light_gray_dye"
			}
		},
		"result": {
			"item": "light_gray_stained_glass_pane",
			"count": 8
		}
	},
	"light_gray_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "light_gray_dye"
			}
		},
		"result": {
			"item": "light_gray_terracotta",
			"count": 8
		}
	},
	"light_gray_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "light_gray_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "light_gray_wool"
		}
	},
	"light_weighted_pressure_plate": {
		"type": "crafting_shaped",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "gold_ingot"
			}
		},
		"result": {
			"item": "light_weighted_pressure_plate"
		}
	},
	"lime_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "lime_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "lime_banner"
		}
	},
	"lime_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "lime_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "lime_bed"
		}
	},
	"lime_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "lime_dye"
		}],
		"result": {
			"item": "lime_bed"
		}
	},
	"lime_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "lime_wool"
			}
		},
		"result": {
			"item": "lime_carpet",
			"count": 3
		}
	},
	"lime_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "lime_dye"
			}
		},
		"result": {
			"item": "lime_carpet",
			"count": 8
		}
	},
	"lime_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "lime_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "lime_concrete_powder",
			"count": 8
		}
	},
	"lime_dye": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "green_dye"
		}, {
			"item": "white_dye"
		}],
		"result": {
			"item": "lime_dye",
			"count": 2
		}
	},
	"lime_dye_from_smelting": {
		"type": "smelting",
		"ingredient": {
			"item": "sea_pickle"
		},
		"result": "lime_dye",
		"experience": 0.1,
		"cookingtime": 200
	},
	"lime_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "lime_terracotta"
		},
		"result": "lime_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"lime_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "lime_dye"
			}
		},
		"result": {
			"item": "lime_stained_glass",
			"count": 8
		}
	},
	"lime_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "lime_stained_glass"
			}
		},
		"result": {
			"item": "lime_stained_glass_pane",
			"count": 16
		}
	},
	"lime_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "lime_dye"
			}
		},
		"result": {
			"item": "lime_stained_glass_pane",
			"count": 8
		}
	},
	"lime_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "lime_dye"
			}
		},
		"result": {
			"item": "lime_terracotta",
			"count": 8
		}
	},
	"lime_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "lime_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "lime_wool"
		}
	},
	"lodestone": {
		"type": "crafting_shaped",
		"pattern": [
			"SSS",
			"S#S",
			"SSS"
		],
		"key": {
			"S": {
				"item": "chiseled_stone_bricks"
			},
			"#": {
				"item": "netherite_ingot"
			}
		},
		"result": {
			"item": "lodestone"
		}
	},
	"loom": {
		"type": "crafting_shaped",
		"pattern": [
			"@@",
			"##"
		],
		"key": {
			"#": {
				"tag": "planks"
			},
			"@": {
				"item": "string"
			}
		},
		"result": {
			"item": "loom"
		}
	},
	"magenta_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "magenta_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "magenta_banner"
		}
	},
	"magenta_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "magenta_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "magenta_bed"
		}
	},
	"magenta_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "magenta_dye"
		}],
		"result": {
			"item": "magenta_bed"
		}
	},
	"magenta_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "magenta_wool"
			}
		},
		"result": {
			"item": "magenta_carpet",
			"count": 3
		}
	},
	"magenta_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "magenta_dye"
			}
		},
		"result": {
			"item": "magenta_carpet",
			"count": 8
		}
	},
	"magenta_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "magenta_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "magenta_concrete_powder",
			"count": 8
		}
	},
	"magenta_dye_from_allium": {
		"type": "crafting_shapeless",
		"group": "magenta_dye",
		"ingredients": [{
			"item": "allium"
		}],
		"result": {
			"item": "magenta_dye"
		}
	},
	"magenta_dye_from_blue_red_pink": {
		"type": "crafting_shapeless",
		"group": "magenta_dye",
		"ingredients": [{
			"item": "blue_dye"
		}, {
			"item": "red_dye"
		}, {
			"item": "pink_dye"
		}],
		"result": {
			"item": "magenta_dye",
			"count": 3
		}
	},
	"magenta_dye_from_blue_red_white_dye": {
		"type": "crafting_shapeless",
		"group": "magenta_dye",
		"ingredients": [{
			"item": "blue_dye"
		}, {
			"item": "red_dye"
		}, {
			"item": "red_dye"
		}, {
			"item": "white_dye"
		}],
		"result": {
			"item": "magenta_dye",
			"count": 4
		}
	},
	"magenta_dye_from_lilac": {
		"type": "crafting_shapeless",
		"group": "magenta_dye",
		"ingredients": [{
			"item": "lilac"
		}],
		"result": {
			"item": "magenta_dye",
			"count": 2
		}
	},
	"magenta_dye_from_purple_and_pink": {
		"type": "crafting_shapeless",
		"group": "magenta_dye",
		"ingredients": [{
			"item": "purple_dye"
		}, {
			"item": "pink_dye"
		}],
		"result": {
			"item": "magenta_dye",
			"count": 2
		}
	},
	"magenta_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "magenta_terracotta"
		},
		"result": "magenta_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"magenta_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "magenta_dye"
			}
		},
		"result": {
			"item": "magenta_stained_glass",
			"count": 8
		}
	},
	"magenta_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "magenta_stained_glass"
			}
		},
		"result": {
			"item": "magenta_stained_glass_pane",
			"count": 16
		}
	},
	"magenta_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "magenta_dye"
			}
		},
		"result": {
			"item": "magenta_stained_glass_pane",
			"count": 8
		}
	},
	"magenta_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "magenta_dye"
			}
		},
		"result": {
			"item": "magenta_terracotta",
			"count": 8
		}
	},
	"magenta_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "magenta_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "magenta_wool"
		}
	},
	"magma_block": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "magma_cream"
			}
		},
		"result": {
			"item": "magma_block"
		}
	},
	"magma_cream": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "blaze_powder"
		}, {
			"item": "slime_ball"
		}],
		"result": {
			"item": "magma_cream"
		}
	},
	"map": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "paper"
			},
			"X": {
				"item": "compass"
			}
		},
		"result": {
			"item": "map"
		}
	},
	"map_cloning": {
		"type": "crafting_special_mapcloning"
	},
	"map_extending": {
		"type": "crafting_special_mapextending"
	},
	"melon": {
		"type": "crafting_shaped",
		"pattern": [
			"MMM",
			"MMM",
			"MMM"
		],
		"key": {
			"M": {
				"item": "melon_slice"
			}
		},
		"result": {
			"item": "melon"
		}
	},
	"melon_seeds": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "melon_slice"
		}],
		"result": {
			"item": "melon_seeds"
		}
	},
	"minecart": {
		"type": "crafting_shaped",
		"pattern": [
			"# #",
			"###"
		],
		"key": {
			"#": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "minecart"
		}
	},
	"mojang_banner_pattern": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "paper"
		}, {
			"item": "enchanted_golden_apple"
		}],
		"result": {
			"item": "mojang_banner_pattern"
		}
	},
	"mossy_cobblestone": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "cobblestone"
		}, {
			"item": "vine"
		}],
		"result": {
			"item": "mossy_cobblestone"
		}
	},
	"mossy_cobblestone_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "mossy_cobblestone"
			}
		},
		"result": {
			"item": "mossy_cobblestone_slab",
			"count": 6
		}
	},
	"mossy_cobblestone_slab_from_mossy_cobblestone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "mossy_cobblestone"
		},
		"result": "mossy_cobblestone_slab",
		"count": 2
	},
	"mossy_cobblestone_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "mossy_cobblestone"
			}
		},
		"result": {
			"item": "mossy_cobblestone_stairs",
			"count": 4
		}
	},
	"mossy_cobblestone_stairs_from_mossy_cobblestone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "mossy_cobblestone"
		},
		"result": "mossy_cobblestone_stairs",
		"count": 1
	},
	"mossy_cobblestone_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "mossy_cobblestone"
			}
		},
		"result": {
			"item": "mossy_cobblestone_wall",
			"count": 6
		}
	},
	"mossy_cobblestone_wall_from_mossy_cobblestone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "mossy_cobblestone"
		},
		"result": "mossy_cobblestone_wall",
		"count": 1
	},
	"mossy_stone_bricks": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "stone_bricks"
		}, {
			"item": "vine"
		}],
		"result": {
			"item": "mossy_stone_bricks"
		}
	},
	"mossy_stone_brick_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "mossy_stone_bricks"
			}
		},
		"result": {
			"item": "mossy_stone_brick_slab",
			"count": 6
		}
	},
	"mossy_stone_brick_slab_from_mossy_stone_brick_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "mossy_stone_bricks"
		},
		"result": "mossy_stone_brick_slab",
		"count": 2
	},
	"mossy_stone_brick_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "mossy_stone_bricks"
			}
		},
		"result": {
			"item": "mossy_stone_brick_stairs",
			"count": 4
		}
	},
	"mossy_stone_brick_stairs_from_mossy_stone_brick_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "mossy_stone_bricks"
		},
		"result": "mossy_stone_brick_stairs",
		"count": 1
	},
	"mossy_stone_brick_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "mossy_stone_bricks"
			}
		},
		"result": {
			"item": "mossy_stone_brick_wall",
			"count": 6
		}
	},
	"mossy_stone_brick_wall_from_mossy_stone_brick_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "mossy_stone_bricks"
		},
		"result": "mossy_stone_brick_wall",
		"count": 1
	},
	"mushroom_stew": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "brown_mushroom"
		}, {
			"item": "red_mushroom"
		}, {
			"item": "bowl"
		}],
		"result": {
			"item": "mushroom_stew"
		}
	},
	"netherite_axe_smithing": {
		"type": "smithing",
		"base": {
			"item": "diamond_axe"
		},
		"addition": {
			"item": "netherite_ingot"
		},
		"result": {
			"item": "netherite_axe"
		}
	},
	"netherite_block": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "netherite_ingot"
			}
		},
		"result": {
			"item": "netherite_block"
		}
	},
	"netherite_boots_smithing": {
		"type": "smithing",
		"base": {
			"item": "diamond_boots"
		},
		"addition": {
			"item": "netherite_ingot"
		},
		"result": {
			"item": "netherite_boots"
		}
	},
	"netherite_chestplate_smithing": {
		"type": "smithing",
		"base": {
			"item": "diamond_chestplate"
		},
		"addition": {
			"item": "netherite_ingot"
		},
		"result": {
			"item": "netherite_chestplate"
		}
	},
	"netherite_helmet_smithing": {
		"type": "smithing",
		"base": {
			"item": "diamond_helmet"
		},
		"addition": {
			"item": "netherite_ingot"
		},
		"result": {
			"item": "netherite_helmet"
		}
	},
	"netherite_hoe_smithing": {
		"type": "smithing",
		"base": {
			"item": "diamond_hoe"
		},
		"addition": {
			"item": "netherite_ingot"
		},
		"result": {
			"item": "netherite_hoe"
		}
	},
	"netherite_ingot": {
		"type": "crafting_shapeless",
		"group": "netherite_ingot",
		"ingredients": [{
			"item": "netherite_scrap"
		}, {
			"item": "netherite_scrap"
		}, {
			"item": "netherite_scrap"
		}, {
			"item": "netherite_scrap"
		}, {
			"item": "gold_ingot"
		}, {
			"item": "gold_ingot"
		}, {
			"item": "gold_ingot"
		}, {
			"item": "gold_ingot"
		}],
		"result": {
			"item": "netherite_ingot"
		}
	},
	"netherite_ingot_from_netherite_block": {
		"type": "crafting_shapeless",
		"group": "netherite_ingot",
		"ingredients": [{
			"item": "netherite_block"
		}],
		"result": {
			"item": "netherite_ingot",
			"count": 9
		}
	},
	"netherite_leggings_smithing": {
		"type": "smithing",
		"base": {
			"item": "diamond_leggings"
		},
		"addition": {
			"item": "netherite_ingot"
		},
		"result": {
			"item": "netherite_leggings"
		}
	},
	"netherite_pickaxe_smithing": {
		"type": "smithing",
		"base": {
			"item": "diamond_pickaxe"
		},
		"addition": {
			"item": "netherite_ingot"
		},
		"result": {
			"item": "netherite_pickaxe"
		}
	},
	"netherite_scrap": {
		"type": "smelting",
		"ingredient": {
			"item": "ancient_debris"
		},
		"result": "netherite_scrap",
		"experience": 2.0,
		"cookingtime": 200
	},
	"netherite_scrap_from_blasting": {
		"type": "blasting",
		"ingredient": {
			"item": "ancient_debris"
		},
		"result": "netherite_scrap",
		"experience": 2.0,
		"cookingtime": 100
	},
	"netherite_shovel_smithing": {
		"type": "smithing",
		"base": {
			"item": "diamond_shovel"
		},
		"addition": {
			"item": "netherite_ingot"
		},
		"result": {
			"item": "netherite_shovel"
		}
	},
	"netherite_sword_smithing": {
		"type": "smithing",
		"base": {
			"item": "diamond_sword"
		},
		"addition": {
			"item": "netherite_ingot"
		},
		"result": {
			"item": "netherite_sword"
		}
	},
	"nether_brick": {
		"type": "smelting",
		"ingredient": {
			"item": "netherrack"
		},
		"result": "nether_brick",
		"experience": 0.1,
		"cookingtime": 200
	},
	"nether_bricks": {
		"type": "crafting_shaped",
		"pattern": [
			"NN",
			"NN"
		],
		"key": {
			"N": {
				"item": "nether_brick"
			}
		},
		"result": {
			"item": "nether_bricks"
		}
	},
	"nether_brick_fence": {
		"type": "crafting_shaped",
		"pattern": [
			"#-#",
			"#-#"
		],
		"key": {
			"#": {
				"item": "nether_bricks"
			},
			"-": {
				"item": "nether_brick"
			}
		},
		"result": {
			"item": "nether_brick_fence",
			"count": 6
		}
	},
	"nether_brick_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "nether_bricks"
			}
		},
		"result": {
			"item": "nether_brick_slab",
			"count": 6
		}
	},
	"nether_brick_slab_from_nether_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "nether_bricks"
		},
		"result": "nether_brick_slab",
		"count": 2
	},
	"nether_brick_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "nether_bricks"
			}
		},
		"result": {
			"item": "nether_brick_stairs",
			"count": 4
		}
	},
	"nether_brick_stairs_from_nether_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "nether_bricks"
		},
		"result": "nether_brick_stairs",
		"count": 1
	},
	"nether_brick_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "nether_bricks"
			}
		},
		"result": {
			"item": "nether_brick_wall",
			"count": 6
		}
	},
	"nether_brick_wall_from_nether_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "nether_bricks"
		},
		"result": "nether_brick_wall",
		"count": 1
	},
	"nether_wart_block": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "nether_wart"
			}
		},
		"result": {
			"item": "nether_wart_block"
		}
	},
	"note_block": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"tag": "planks"
			},
			"X": {
				"item": "redstone"
			}
		},
		"result": {
			"item": "note_block"
		}
	},
	"oak_boat": {
		"type": "crafting_shaped",
		"group": "boat",
		"pattern": [
			"# #",
			"###"
		],
		"key": {
			"#": {
				"item": "oak_planks"
			}
		},
		"result": {
			"item": "oak_boat"
		}
	},
	"oak_button": {
		"type": "crafting_shapeless",
		"group": "wooden_button",
		"ingredients": [{
			"item": "oak_planks"
		}],
		"result": {
			"item": "oak_button"
		}
	},
	"oak_door": {
		"type": "crafting_shaped",
		"group": "wooden_door",
		"pattern": [
			"##",
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "oak_planks"
			}
		},
		"result": {
			"item": "oak_door",
			"count": 3
		}
	},
	"oak_fence": {
		"type": "crafting_shaped",
		"group": "wooden_fence",
		"pattern": [
			"W#W",
			"W#W"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "oak_planks"
			}
		},
		"result": {
			"item": "oak_fence",
			"count": 3
		}
	},
	"oak_fence_gate": {
		"type": "crafting_shaped",
		"group": "wooden_fence_gate",
		"pattern": [
			"#W#",
			"#W#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "oak_planks"
			}
		},
		"result": {
			"item": "oak_fence_gate"
		}
	},
	"oak_planks": {
		"type": "crafting_shapeless",
		"group": "planks",
		"ingredients": [{
			"tag": "oak_logs"
		}],
		"result": {
			"item": "oak_planks",
			"count": 4
		}
	},
	"oak_pressure_plate": {
		"type": "crafting_shaped",
		"group": "wooden_pressure_plate",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "oak_planks"
			}
		},
		"result": {
			"item": "oak_pressure_plate"
		}
	},
	"oak_sign": {
		"type": "crafting_shaped",
		"group": "sign",
		"pattern": [
			"###",
			"###",
			" X "
		],
		"key": {
			"#": {
				"item": "oak_planks"
			},
			"X": {
				"item": "stick"
			}
		},
		"result": {
			"item": "oak_sign",
			"count": 3
		}
	},
	"oak_slab": {
		"type": "crafting_shaped",
		"group": "wooden_slab",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "oak_planks"
			}
		},
		"result": {
			"item": "oak_slab",
			"count": 6
		}
	},
	"oak_stairs": {
		"type": "crafting_shaped",
		"group": "wooden_stairs",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "oak_planks"
			}
		},
		"result": {
			"item": "oak_stairs",
			"count": 4
		}
	},
	"oak_trapdoor": {
		"type": "crafting_shaped",
		"group": "wooden_trapdoor",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "oak_planks"
			}
		},
		"result": {
			"item": "oak_trapdoor",
			"count": 2
		}
	},
	"oak_wood": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "oak_log"
			}
		},
		"result": {
			"item": "oak_wood",
			"count": 3
		}
	},
	"observer": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"RRQ",
			"###"
		],
		"key": {
			"Q": {
				"item": "quartz"
			},
			"R": {
				"item": "redstone"
			},
			"#": {
				"item": "cobblestone"
			}
		},
		"result": {
			"item": "observer"
		}
	},
	"orange_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "orange_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "orange_banner"
		}
	},
	"orange_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "orange_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "orange_bed"
		}
	},
	"orange_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "orange_dye"
		}],
		"result": {
			"item": "orange_bed"
		}
	},
	"orange_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "orange_wool"
			}
		},
		"result": {
			"item": "orange_carpet",
			"count": 3
		}
	},
	"orange_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "orange_dye"
			}
		},
		"result": {
			"item": "orange_carpet",
			"count": 8
		}
	},
	"orange_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "orange_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "orange_concrete_powder",
			"count": 8
		}
	},
	"orange_dye_from_orange_tulip": {
		"type": "crafting_shapeless",
		"group": "orange_dye",
		"ingredients": [{
			"item": "orange_tulip"
		}],
		"result": {
			"item": "orange_dye"
		}
	},
	"orange_dye_from_red_yellow": {
		"type": "crafting_shapeless",
		"group": "orange_dye",
		"ingredients": [{
			"item": "red_dye"
		}, {
			"item": "yellow_dye"
		}],
		"result": {
			"item": "orange_dye",
			"count": 2
		}
	},
	"orange_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "orange_terracotta"
		},
		"result": "orange_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"orange_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "orange_dye"
			}
		},
		"result": {
			"item": "orange_stained_glass",
			"count": 8
		}
	},
	"orange_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "orange_stained_glass"
			}
		},
		"result": {
			"item": "orange_stained_glass_pane",
			"count": 16
		}
	},
	"orange_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "orange_dye"
			}
		},
		"result": {
			"item": "orange_stained_glass_pane",
			"count": 8
		}
	},
	"orange_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "orange_dye"
			}
		},
		"result": {
			"item": "orange_terracotta",
			"count": 8
		}
	},
	"orange_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "orange_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "orange_wool"
		}
	},
	"packed_ice": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "ice"
		}, {
			"item": "ice"
		}, {
			"item": "ice"
		}, {
			"item": "ice"
		}, {
			"item": "ice"
		}, {
			"item": "ice"
		}, {
			"item": "ice"
		}, {
			"item": "ice"
		}, {
			"item": "ice"
		}],
		"result": {
			"item": "packed_ice"
		}
	},
	"painting": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"tag": "wool"
			}
		},
		"result": {
			"item": "painting"
		}
	},
	"paper": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "sugar_cane"
			}
		},
		"result": {
			"item": "paper",
			"count": 3
		}
	},
	"pink_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "pink_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "pink_banner"
		}
	},
	"pink_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "pink_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "pink_bed"
		}
	},
	"pink_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "pink_dye"
		}],
		"result": {
			"item": "pink_bed"
		}
	},
	"pink_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "pink_wool"
			}
		},
		"result": {
			"item": "pink_carpet",
			"count": 3
		}
	},
	"pink_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "pink_dye"
			}
		},
		"result": {
			"item": "pink_carpet",
			"count": 8
		}
	},
	"pink_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "pink_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "pink_concrete_powder",
			"count": 8
		}
	},
	"pink_dye_from_peony": {
		"type": "crafting_shapeless",
		"group": "pink_dye",
		"ingredients": [{
			"item": "peony"
		}],
		"result": {
			"item": "pink_dye",
			"count": 2
		}
	},
	"pink_dye_from_pink_tulip": {
		"type": "crafting_shapeless",
		"group": "pink_dye",
		"ingredients": [{
			"item": "pink_tulip"
		}],
		"result": {
			"item": "pink_dye"
		}
	},
	"pink_dye_from_red_white_dye": {
		"type": "crafting_shapeless",
		"group": "pink_dye",
		"ingredients": [{
			"item": "red_dye"
		}, {
			"item": "white_dye"
		}],
		"result": {
			"item": "pink_dye",
			"count": 2
		}
	},
	"pink_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "pink_terracotta"
		},
		"result": "pink_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"pink_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "pink_dye"
			}
		},
		"result": {
			"item": "pink_stained_glass",
			"count": 8
		}
	},
	"pink_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "pink_stained_glass"
			}
		},
		"result": {
			"item": "pink_stained_glass_pane",
			"count": 16
		}
	},
	"pink_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "pink_dye"
			}
		},
		"result": {
			"item": "pink_stained_glass_pane",
			"count": 8
		}
	},
	"pink_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "pink_dye"
			}
		},
		"result": {
			"item": "pink_terracotta",
			"count": 8
		}
	},
	"pink_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "pink_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "pink_wool"
		}
	},
	"piston": {
		"type": "crafting_shaped",
		"pattern": [
			"TTT",
			"#X#",
			"#R#"
		],
		"key": {
			"R": {
				"item": "redstone"
			},
			"#": {
				"item": "cobblestone"
			},
			"T": {
				"tag": "planks"
			},
			"X": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "piston"
		}
	},
	"polished_andesite": {
		"type": "crafting_shaped",
		"pattern": [
			"SS",
			"SS"
		],
		"key": {
			"S": {
				"item": "andesite"
			}
		},
		"result": {
			"item": "polished_andesite",
			"count": 4
		}
	},
	"polished_andesite_from_andesite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "andesite"
		},
		"result": "polished_andesite",
		"count": 1
	},
	"polished_andesite_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "polished_andesite"
			}
		},
		"result": {
			"item": "polished_andesite_slab",
			"count": 6
		}
	},
	"polished_andesite_slab_from_andesite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "andesite"
		},
		"result": "polished_andesite_slab",
		"count": 2
	},
	"polished_andesite_slab_from_polished_andesite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_andesite"
		},
		"result": "polished_andesite_slab",
		"count": 2
	},
	"polished_andesite_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "polished_andesite"
			}
		},
		"result": {
			"item": "polished_andesite_stairs",
			"count": 4
		}
	},
	"polished_andesite_stairs_from_andesite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "andesite"
		},
		"result": "polished_andesite_stairs",
		"count": 1
	},
	"polished_andesite_stairs_from_polished_andesite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_andesite"
		},
		"result": "polished_andesite_stairs",
		"count": 1
	},
	"polished_basalt": {
		"type": "crafting_shaped",
		"pattern": [
			"SS",
			"SS"
		],
		"key": {
			"S": {
				"item": "basalt"
			}
		},
		"result": {
			"item": "polished_basalt",
			"count": 4
		}
	},
	"polished_basalt_from_basalt_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "basalt"
		},
		"result": "polished_basalt",
		"count": 1
	},
	"polished_blackstone": {
		"type": "crafting_shaped",
		"pattern": [
			"SS",
			"SS"
		],
		"key": {
			"S": {
				"item": "blackstone"
			}
		},
		"result": {
			"item": "polished_blackstone",
			"count": 4
		}
	},
	"polished_blackstone_bricks": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "polished_blackstone"
			}
		},
		"result": {
			"item": "polished_blackstone_bricks",
			"count": 4
		}
	},
	"polished_blackstone_bricks_from_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "blackstone"
		},
		"result": "polished_blackstone_bricks",
		"count": 1
	},
	"polished_blackstone_bricks_from_polished_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_blackstone"
		},
		"result": "polished_blackstone_bricks",
		"count": 1
	},
	"polished_blackstone_brick_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "polished_blackstone_bricks"
			}
		},
		"result": {
			"item": "polished_blackstone_brick_slab",
			"count": 6
		}
	},
	"polished_blackstone_brick_slab_from_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "blackstone"
		},
		"result": "polished_blackstone_brick_slab",
		"count": 2
	},
	"polished_blackstone_brick_slab_from_polished_blackstone_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_blackstone_bricks"
		},
		"result": "polished_blackstone_brick_slab",
		"count": 2
	},
	"polished_blackstone_brick_slab_from_polished_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_blackstone"
		},
		"result": "polished_blackstone_brick_slab",
		"count": 2
	},
	"polished_blackstone_brick_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "polished_blackstone_bricks"
			}
		},
		"result": {
			"item": "polished_blackstone_brick_stairs",
			"count": 4
		}
	},
	"polished_blackstone_brick_stairs_from_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "blackstone"
		},
		"result": "polished_blackstone_brick_stairs",
		"count": 1
	},
	"polished_blackstone_brick_stairs_from_polished_blackstone_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_blackstone_bricks"
		},
		"result": "polished_blackstone_brick_stairs",
		"count": 1
	},
	"polished_blackstone_brick_stairs_from_polished_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_blackstone"
		},
		"result": "polished_blackstone_brick_stairs",
		"count": 1
	},
	"polished_blackstone_brick_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "polished_blackstone_bricks"
			}
		},
		"result": {
			"item": "polished_blackstone_brick_wall",
			"count": 6
		}
	},
	"polished_blackstone_brick_wall_from_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "blackstone"
		},
		"result": "polished_blackstone_brick_wall",
		"count": 1
	},
	"polished_blackstone_brick_wall_from_polished_blackstone_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_blackstone_bricks"
		},
		"result": "polished_blackstone_brick_wall",
		"count": 1
	},
	"polished_blackstone_brick_wall_from_polished_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_blackstone"
		},
		"result": "polished_blackstone_brick_wall",
		"count": 1
	},
	"polished_blackstone_button": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "polished_blackstone"
		}],
		"result": {
			"item": "polished_blackstone_button"
		}
	},
	"polished_blackstone_from_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "blackstone"
		},
		"result": "polished_blackstone",
		"count": 1
	},
	"polished_blackstone_pressure_plate": {
		"type": "crafting_shaped",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "polished_blackstone"
			}
		},
		"result": {
			"item": "polished_blackstone_pressure_plate"
		}
	},
	"polished_blackstone_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "polished_blackstone"
			}
		},
		"result": {
			"item": "polished_blackstone_slab",
			"count": 6
		}
	},
	"polished_blackstone_slab_from_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "blackstone"
		},
		"result": "polished_blackstone_slab",
		"count": 2
	},
	"polished_blackstone_slab_from_polished_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_blackstone"
		},
		"result": "polished_blackstone_slab",
		"count": 2
	},
	"polished_blackstone_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "polished_blackstone"
			}
		},
		"result": {
			"item": "polished_blackstone_stairs",
			"count": 4
		}
	},
	"polished_blackstone_stairs_from_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "blackstone"
		},
		"result": "polished_blackstone_stairs",
		"count": 1
	},
	"polished_blackstone_stairs_from_polished_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_blackstone"
		},
		"result": "polished_blackstone_stairs",
		"count": 1
	},
	"polished_blackstone_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "polished_blackstone"
			}
		},
		"result": {
			"item": "polished_blackstone_wall",
			"count": 6
		}
	},
	"polished_blackstone_wall_from_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "blackstone"
		},
		"result": "polished_blackstone_wall",
		"count": 1
	},
	"polished_blackstone_wall_from_polished_blackstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_blackstone"
		},
		"result": "polished_blackstone_wall",
		"count": 1
	},
	"polished_diorite": {
		"type": "crafting_shaped",
		"pattern": [
			"SS",
			"SS"
		],
		"key": {
			"S": {
				"item": "diorite"
			}
		},
		"result": {
			"item": "polished_diorite",
			"count": 4
		}
	},
	"polished_diorite_from_diorite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "diorite"
		},
		"result": "polished_diorite",
		"count": 1
	},
	"polished_diorite_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "polished_diorite"
			}
		},
		"result": {
			"item": "polished_diorite_slab",
			"count": 6
		}
	},
	"polished_diorite_slab_from_diorite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "diorite"
		},
		"result": "polished_diorite_slab",
		"count": 2
	},
	"polished_diorite_slab_from_polished_diorite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_diorite"
		},
		"result": "polished_diorite_slab",
		"count": 2
	},
	"polished_diorite_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "polished_diorite"
			}
		},
		"result": {
			"item": "polished_diorite_stairs",
			"count": 4
		}
	},
	"polished_diorite_stairs_from_diorite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "diorite"
		},
		"result": "polished_diorite_stairs",
		"count": 1
	},
	"polished_diorite_stairs_from_polished_diorite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_diorite"
		},
		"result": "polished_diorite_stairs",
		"count": 1
	},
	"polished_granite": {
		"type": "crafting_shaped",
		"pattern": [
			"SS",
			"SS"
		],
		"key": {
			"S": {
				"item": "granite"
			}
		},
		"result": {
			"item": "polished_granite",
			"count": 4
		}
	},
	"polished_granite_from_granite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "granite"
		},
		"result": "polished_granite",
		"count": 1
	},
	"polished_granite_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "polished_granite"
			}
		},
		"result": {
			"item": "polished_granite_slab",
			"count": 6
		}
	},
	"polished_granite_slab_from_granite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "granite"
		},
		"result": "polished_granite_slab",
		"count": 2
	},
	"polished_granite_slab_from_polished_granite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_granite"
		},
		"result": "polished_granite_slab",
		"count": 2
	},
	"polished_granite_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "polished_granite"
			}
		},
		"result": {
			"item": "polished_granite_stairs",
			"count": 4
		}
	},
	"polished_granite_stairs_from_granite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "granite"
		},
		"result": "polished_granite_stairs",
		"count": 1
	},
	"polished_granite_stairs_from_polished_granite_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "polished_granite"
		},
		"result": "polished_granite_stairs",
		"count": 1
	},
	"popped_chorus_fruit": {
		"type": "smelting",
		"ingredient": {
			"item": "chorus_fruit"
		},
		"result": "popped_chorus_fruit",
		"experience": 0.1,
		"cookingtime": 200
	},
	"powered_rail": {
		"type": "crafting_shaped",
		"pattern": [
			"X X",
			"X#X",
			"XRX"
		],
		"key": {
			"R": {
				"item": "redstone"
			},
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "gold_ingot"
			}
		},
		"result": {
			"item": "powered_rail",
			"count": 6
		}
	},
	"prismarine": {
		"type": "crafting_shaped",
		"pattern": [
			"SS",
			"SS"
		],
		"key": {
			"S": {
				"item": "prismarine_shard"
			}
		},
		"result": {
			"item": "prismarine"
		}
	},
	"prismarine_bricks": {
		"type": "crafting_shaped",
		"pattern": [
			"SSS",
			"SSS",
			"SSS"
		],
		"key": {
			"S": {
				"item": "prismarine_shard"
			}
		},
		"result": {
			"item": "prismarine_bricks"
		}
	},
	"prismarine_brick_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "prismarine_bricks"
			}
		},
		"result": {
			"item": "prismarine_brick_slab",
			"count": 6
		}
	},
	"prismarine_brick_slab_from_prismarine_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "prismarine_bricks"
		},
		"result": "prismarine_brick_slab",
		"count": 2
	},
	"prismarine_brick_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "prismarine_bricks"
			}
		},
		"result": {
			"item": "prismarine_brick_stairs",
			"count": 4
		}
	},
	"prismarine_brick_stairs_from_prismarine_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "prismarine_bricks"
		},
		"result": "prismarine_brick_stairs",
		"count": 1
	},
	"prismarine_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "prismarine"
			}
		},
		"result": {
			"item": "prismarine_slab",
			"count": 6
		}
	},
	"prismarine_slab_from_prismarine_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "prismarine"
		},
		"result": "prismarine_slab",
		"count": 2
	},
	"prismarine_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "prismarine"
			}
		},
		"result": {
			"item": "prismarine_stairs",
			"count": 4
		}
	},
	"prismarine_stairs_from_prismarine_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "prismarine"
		},
		"result": "prismarine_stairs",
		"count": 1
	},
	"prismarine_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "prismarine"
			}
		},
		"result": {
			"item": "prismarine_wall",
			"count": 6
		}
	},
	"prismarine_wall_from_prismarine_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "prismarine"
		},
		"result": "prismarine_wall",
		"count": 1
	},
	"pumpkin_pie": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "pumpkin"
		}, {
			"item": "sugar"
		}, {
			"item": "egg"
		}],
		"result": {
			"item": "pumpkin_pie"
		}
	},
	"pumpkin_seeds": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "pumpkin"
		}],
		"result": {
			"item": "pumpkin_seeds",
			"count": 4
		}
	},
	"purple_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "purple_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "purple_banner"
		}
	},
	"purple_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "purple_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "purple_bed"
		}
	},
	"purple_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "purple_dye"
		}],
		"result": {
			"item": "purple_bed"
		}
	},
	"purple_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "purple_wool"
			}
		},
		"result": {
			"item": "purple_carpet",
			"count": 3
		}
	},
	"purple_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "purple_dye"
			}
		},
		"result": {
			"item": "purple_carpet",
			"count": 8
		}
	},
	"purple_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "purple_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "purple_concrete_powder",
			"count": 8
		}
	},
	"purple_dye": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "blue_dye"
		}, {
			"item": "red_dye"
		}],
		"result": {
			"item": "purple_dye",
			"count": 2
		}
	},
	"purple_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "purple_terracotta"
		},
		"result": "purple_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"purple_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "purple_dye"
			}
		},
		"result": {
			"item": "purple_stained_glass",
			"count": 8
		}
	},
	"purple_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "purple_stained_glass"
			}
		},
		"result": {
			"item": "purple_stained_glass_pane",
			"count": 16
		}
	},
	"purple_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "purple_dye"
			}
		},
		"result": {
			"item": "purple_stained_glass_pane",
			"count": 8
		}
	},
	"purple_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "purple_dye"
			}
		},
		"result": {
			"item": "purple_terracotta",
			"count": 8
		}
	},
	"purple_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "purple_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "purple_wool"
		}
	},
	"purpur_block": {
		"type": "crafting_shaped",
		"pattern": [
			"FF",
			"FF"
		],
		"key": {
			"F": {
				"item": "popped_chorus_fruit"
			}
		},
		"result": {
			"item": "purpur_block",
			"count": 4
		}
	},
	"purpur_pillar": {
		"type": "crafting_shaped",
		"pattern": [
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "purpur_slab"
			}
		},
		"result": {
			"item": "purpur_pillar"
		}
	},
	"purpur_pillar_from_purpur_block_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "purpur_block"
		},
		"result": "purpur_pillar",
		"count": 1
	},
	"purpur_slab": {
		"type": "crafting_shaped",
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
		"result": {
			"item": "purpur_slab",
			"count": 6
		}
	},
	"purpur_slab_from_purpur_block_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "purpur_block"
		},
		"result": "purpur_slab",
		"count": 2
	},
	"purpur_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": [{
				"item": "purpur_block"
			}, {
				"item": "purpur_pillar"
			}]
		},
		"result": {
			"item": "purpur_stairs",
			"count": 4
		}
	},
	"purpur_stairs_from_purpur_block_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "purpur_block"
		},
		"result": "purpur_stairs",
		"count": 1
	},
	"quartz": {
		"type": "smelting",
		"ingredient": {
			"item": "nether_quartz_ore"
		},
		"result": "quartz",
		"experience": 0.2,
		"cookingtime": 200
	},
	"quartz_block": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "quartz"
			}
		},
		"result": {
			"item": "quartz_block"
		}
	},
	"quartz_bricks": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "quartz_block"
			}
		},
		"result": {
			"item": "quartz_bricks",
			"count": 4
		}
	},
	"quartz_bricks_from_quartz_block_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "quartz_block"
		},
		"result": "quartz_bricks",
		"count": 1
	},
	"quartz_from_blasting": {
		"type": "blasting",
		"ingredient": {
			"item": "nether_quartz_ore"
		},
		"result": "quartz",
		"experience": 0.2,
		"cookingtime": 100
	},
	"quartz_pillar": {
		"type": "crafting_shaped",
		"pattern": [
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "quartz_block"
			}
		},
		"result": {
			"item": "quartz_pillar",
			"count": 2
		}
	},
	"quartz_pillar_from_quartz_block_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "quartz_block"
		},
		"result": "quartz_pillar",
		"count": 1
	},
	"quartz_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": [{
				"item": "chiseled_quartz_block"
			}, {
				"item": "quartz_block"
			}, {
				"item": "quartz_pillar"
			}]
		},
		"result": {
			"item": "quartz_slab",
			"count": 6
		}
	},
	"quartz_slab_from_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "quartz_block"
		},
		"result": "quartz_slab",
		"count": 2
	},
	"quartz_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": [{
				"item": "chiseled_quartz_block"
			}, {
				"item": "quartz_block"
			}, {
				"item": "quartz_pillar"
			}]
		},
		"result": {
			"item": "quartz_stairs",
			"count": 4
		}
	},
	"quartz_stairs_from_quartz_block_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "quartz_block"
		},
		"result": "quartz_stairs",
		"count": 1
	},
	"rabbit_stew_from_brown_mushroom": {
		"type": "crafting_shapeless",
		"group": "rabbit_stew",
		"ingredients": [{
			"item": "baked_potato"
		}, {
			"item": "cooked_rabbit"
		}, {
			"item": "bowl"
		}, {
			"item": "carrot"
		}, {
			"item": "brown_mushroom"
		}],
		"result": {
			"item": "rabbit_stew"
		}
	},
	"rabbit_stew_from_red_mushroom": {
		"type": "crafting_shapeless",
		"group": "rabbit_stew",
		"ingredients": [{
			"item": "baked_potato"
		}, {
			"item": "cooked_rabbit"
		}, {
			"item": "bowl"
		}, {
			"item": "carrot"
		}, {
			"item": "red_mushroom"
		}],
		"result": {
			"item": "rabbit_stew"
		}
	},
	"rail": {
		"type": "crafting_shaped",
		"pattern": [
			"X X",
			"X#X",
			"X X"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "rail",
			"count": 16
		}
	},
	"redstone": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "redstone_block"
		}],
		"result": {
			"item": "redstone",
			"count": 9
		}
	},
	"redstone_block": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "redstone"
			}
		},
		"result": {
			"item": "redstone_block"
		}
	},
	"redstone_from_blasting": {
		"type": "blasting",
		"ingredient": {
			"item": "redstone_ore"
		},
		"result": "redstone",
		"experience": 0.7,
		"cookingtime": 100
	},
	"redstone_from_smelting": {
		"type": "smelting",
		"ingredient": {
			"item": "redstone_ore"
		},
		"result": "redstone",
		"experience": 0.7,
		"cookingtime": 200
	},
	"redstone_lamp": {
		"type": "crafting_shaped",
		"pattern": [
			" R ",
			"RGR",
			" R "
		],
		"key": {
			"R": {
				"item": "redstone"
			},
			"G": {
				"item": "glowstone"
			}
		},
		"result": {
			"item": "redstone_lamp"
		}
	},
	"redstone_torch": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"item": "redstone"
			}
		},
		"result": {
			"item": "redstone_torch"
		}
	},
	"red_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "red_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "red_banner"
		}
	},
	"red_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "red_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "red_bed"
		}
	},
	"red_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "red_dye"
		}],
		"result": {
			"item": "red_bed"
		}
	},
	"red_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "red_wool"
			}
		},
		"result": {
			"item": "red_carpet",
			"count": 3
		}
	},
	"red_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "red_dye"
			}
		},
		"result": {
			"item": "red_carpet",
			"count": 8
		}
	},
	"red_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "red_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "red_concrete_powder",
			"count": 8
		}
	},
	"red_dye_from_beetroot": {
		"type": "crafting_shapeless",
		"group": "red_dye",
		"ingredients": [{
			"item": "beetroot"
		}],
		"result": {
			"item": "red_dye"
		}
	},
	"red_dye_from_poppy": {
		"type": "crafting_shapeless",
		"group": "red_dye",
		"ingredients": [{
			"item": "poppy"
		}],
		"result": {
			"item": "red_dye"
		}
	},
	"red_dye_from_rose_bush": {
		"type": "crafting_shapeless",
		"group": "red_dye",
		"ingredients": [{
			"item": "rose_bush"
		}],
		"result": {
			"item": "red_dye",
			"count": 2
		}
	},
	"red_dye_from_tulip": {
		"type": "crafting_shapeless",
		"group": "red_dye",
		"ingredients": [{
			"item": "red_tulip"
		}],
		"result": {
			"item": "red_dye"
		}
	},
	"red_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "red_terracotta"
		},
		"result": "red_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"red_nether_bricks": {
		"type": "crafting_shaped",
		"pattern": [
			"NW",
			"WN"
		],
		"key": {
			"W": {
				"item": "nether_wart"
			},
			"N": {
				"item": "nether_brick"
			}
		},
		"result": {
			"item": "red_nether_bricks"
		}
	},
	"red_nether_brick_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "red_nether_bricks"
			}
		},
		"result": {
			"item": "red_nether_brick_slab",
			"count": 6
		}
	},
	"red_nether_brick_slab_from_red_nether_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "red_nether_bricks"
		},
		"result": "red_nether_brick_slab",
		"count": 2
	},
	"red_nether_brick_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "red_nether_bricks"
			}
		},
		"result": {
			"item": "red_nether_brick_stairs",
			"count": 4
		}
	},
	"red_nether_brick_stairs_from_red_nether_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "red_nether_bricks"
		},
		"result": "red_nether_brick_stairs",
		"count": 1
	},
	"red_nether_brick_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "red_nether_bricks"
			}
		},
		"result": {
			"item": "red_nether_brick_wall",
			"count": 6
		}
	},
	"red_nether_brick_wall_from_red_nether_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "red_nether_bricks"
		},
		"result": "red_nether_brick_wall",
		"count": 1
	},
	"red_sandstone": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "red_sand"
			}
		},
		"result": {
			"item": "red_sandstone"
		}
	},
	"red_sandstone_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": [{
				"item": "red_sandstone"
			}, {
				"item": "chiseled_red_sandstone"
			}]
		},
		"result": {
			"item": "red_sandstone_slab",
			"count": 6
		}
	},
	"red_sandstone_slab_from_red_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "red_sandstone"
		},
		"result": "red_sandstone_slab",
		"count": 2
	},
	"red_sandstone_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": [{
				"item": "red_sandstone"
			}, {
				"item": "chiseled_red_sandstone"
			}, {
				"item": "cut_red_sandstone"
			}]
		},
		"result": {
			"item": "red_sandstone_stairs",
			"count": 4
		}
	},
	"red_sandstone_stairs_from_red_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "red_sandstone"
		},
		"result": "red_sandstone_stairs",
		"count": 1
	},
	"red_sandstone_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "red_sandstone"
			}
		},
		"result": {
			"item": "red_sandstone_wall",
			"count": 6
		}
	},
	"red_sandstone_wall_from_red_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "red_sandstone"
		},
		"result": "red_sandstone_wall",
		"count": 1
	},
	"red_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "red_dye"
			}
		},
		"result": {
			"item": "red_stained_glass",
			"count": 8
		}
	},
	"red_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "red_stained_glass"
			}
		},
		"result": {
			"item": "red_stained_glass_pane",
			"count": 16
		}
	},
	"red_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "red_dye"
			}
		},
		"result": {
			"item": "red_stained_glass_pane",
			"count": 8
		}
	},
	"red_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "red_dye"
			}
		},
		"result": {
			"item": "red_terracotta",
			"count": 8
		}
	},
	"red_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "red_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "red_wool"
		}
	},
	"repair_item": {
		"type": "crafting_special_repairitem"
	},
	"repeater": {
		"type": "crafting_shaped",
		"pattern": [
			"#X#",
			"III"
		],
		"key": {
			"#": {
				"item": "redstone_torch"
			},
			"X": {
				"item": "redstone"
			},
			"I": {
				"item": "stone"
			}
		},
		"result": {
			"item": "repeater"
		}
	},
	"respawn_anchor": {
		"type": "crafting_shaped",
		"pattern": [
			"OOO",
			"GGG",
			"OOO"
		],
		"key": {
			"O": {
				"item": "crying_obsidian"
			},
			"G": {
				"item": "glowstone"
			}
		},
		"result": {
			"item": "respawn_anchor"
		}
	},
	"sandstone": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "sand"
			}
		},
		"result": {
			"item": "sandstone"
		}
	},
	"sandstone_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": [{
				"item": "sandstone"
			}, {
				"item": "chiseled_sandstone"
			}]
		},
		"result": {
			"item": "sandstone_slab",
			"count": 6
		}
	},
	"sandstone_slab_from_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "sandstone"
		},
		"result": "sandstone_slab",
		"count": 2
	},
	"sandstone_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": [{
				"item": "sandstone"
			}, {
				"item": "chiseled_sandstone"
			}, {
				"item": "cut_sandstone"
			}]
		},
		"result": {
			"item": "sandstone_stairs",
			"count": 4
		}
	},
	"sandstone_stairs_from_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "sandstone"
		},
		"result": "sandstone_stairs",
		"count": 1
	},
	"sandstone_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "sandstone"
			}
		},
		"result": {
			"item": "sandstone_wall",
			"count": 6
		}
	},
	"sandstone_wall_from_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "sandstone"
		},
		"result": "sandstone_wall",
		"count": 1
	},
	"scaffolding": {
		"type": "crafting_shaped",
		"pattern": [
			"I~I",
			"I I",
			"I I"
		],
		"key": {
			"~": {
				"item": "string"
			},
			"I": {
				"item": "bamboo"
			}
		},
		"result": {
			"item": "scaffolding",
			"count": 6
		}
	},
	"sea_lantern": {
		"type": "crafting_shaped",
		"pattern": [
			"SCS",
			"CCC",
			"SCS"
		],
		"key": {
			"S": {
				"item": "prismarine_shard"
			},
			"C": {
				"item": "prismarine_crystals"
			}
		},
		"result": {
			"item": "sea_lantern"
		}
	},
	"shears": {
		"type": "crafting_shaped",
		"pattern": [
			" #",
			"# "
		],
		"key": {
			"#": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "shears"
		}
	},
	"shield": {
		"type": "crafting_shaped",
		"pattern": [
			"WoW",
			"WWW",
			" W "
		],
		"key": {
			"W": {
				"tag": "planks"
			},
			"o": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "shield"
		}
	},
	"shield_decoration": {
		"type": "crafting_special_shielddecoration"
	},
	"shulker_box": {
		"type": "crafting_shaped",
		"pattern": [
			"-",
			"#",
			"-"
		],
		"key": {
			"#": {
				"item": "chest"
			},
			"-": {
				"item": "shulker_shell"
			}
		},
		"result": {
			"item": "shulker_box"
		}
	},
	"shulker_box_coloring": {
		"type": "crafting_special_shulkerboxcoloring"
	},
	"skull_banner_pattern": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "paper"
		}, {
			"item": "wither_skeleton_skull"
		}],
		"result": {
			"item": "skull_banner_pattern"
		}
	},
	"slime_ball": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "slime_block"
		}],
		"result": {
			"item": "slime_ball",
			"count": 9
		}
	},
	"slime_block": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "slime_ball"
			}
		},
		"result": {
			"item": "slime_block"
		}
	},
	"smithing_table": {
		"type": "crafting_shaped",
		"pattern": [
			"@@",
			"##",
			"##"
		],
		"key": {
			"#": {
				"tag": "planks"
			},
			"@": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "smithing_table"
		}
	},
	"smoker": {
		"type": "crafting_shaped",
		"pattern": [
			" # ",
			"#X#",
			" # "
		],
		"key": {
			"#": {
				"tag": "logs"
			},
			"X": {
				"item": "furnace"
			}
		},
		"result": {
			"item": "smoker"
		}
	},
	"smooth_quartz": {
		"type": "smelting",
		"ingredient": {
			"item": "quartz_block"
		},
		"result": "smooth_quartz",
		"experience": 0.1,
		"cookingtime": 200
	},
	"smooth_quartz_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "smooth_quartz"
			}
		},
		"result": {
			"item": "smooth_quartz_slab",
			"count": 6
		}
	},
	"smooth_quartz_slab_from_smooth_quartz_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "smooth_quartz"
		},
		"result": "smooth_quartz_slab",
		"count": 2
	},
	"smooth_quartz_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "smooth_quartz"
			}
		},
		"result": {
			"item": "smooth_quartz_stairs",
			"count": 4
		}
	},
	"smooth_quartz_stairs_from_smooth_quartz_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "smooth_quartz"
		},
		"result": "smooth_quartz_stairs",
		"count": 1
	},
	"smooth_red_sandstone": {
		"type": "smelting",
		"ingredient": {
			"item": "red_sandstone"
		},
		"result": "smooth_red_sandstone",
		"experience": 0.1,
		"cookingtime": 200
	},
	"smooth_red_sandstone_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "smooth_red_sandstone"
			}
		},
		"result": {
			"item": "smooth_red_sandstone_slab",
			"count": 6
		}
	},
	"smooth_red_sandstone_slab_from_smooth_red_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "smooth_red_sandstone"
		},
		"result": "smooth_red_sandstone_slab",
		"count": 2
	},
	"smooth_red_sandstone_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "smooth_red_sandstone"
			}
		},
		"result": {
			"item": "smooth_red_sandstone_stairs",
			"count": 4
		}
	},
	"smooth_red_sandstone_stairs_from_smooth_red_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "smooth_red_sandstone"
		},
		"result": "smooth_red_sandstone_stairs",
		"count": 1
	},
	"smooth_sandstone": {
		"type": "smelting",
		"ingredient": {
			"item": "sandstone"
		},
		"result": "smooth_sandstone",
		"experience": 0.1,
		"cookingtime": 200
	},
	"smooth_sandstone_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "smooth_sandstone"
			}
		},
		"result": {
			"item": "smooth_sandstone_slab",
			"count": 6
		}
	},
	"smooth_sandstone_slab_from_smooth_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "smooth_sandstone"
		},
		"result": "smooth_sandstone_slab",
		"count": 2
	},
	"smooth_sandstone_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "smooth_sandstone"
			}
		},
		"result": {
			"item": "smooth_sandstone_stairs",
			"count": 4
		}
	},
	"smooth_sandstone_stairs_from_smooth_sandstone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "smooth_sandstone"
		},
		"result": "smooth_sandstone_stairs",
		"count": 1
	},
	"smooth_stone": {
		"type": "smelting",
		"ingredient": {
			"item": "stone"
		},
		"result": "smooth_stone",
		"experience": 0.1,
		"cookingtime": 200
	},
	"smooth_stone_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "smooth_stone"
			}
		},
		"result": {
			"item": "smooth_stone_slab",
			"count": 6
		}
	},
	"smooth_stone_slab_from_smooth_stone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "smooth_stone"
		},
		"result": "smooth_stone_slab",
		"count": 2
	},
	"snow": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "snow_block"
			}
		},
		"result": {
			"item": "snow",
			"count": 6
		}
	},
	"snow_block": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "snowball"
			}
		},
		"result": {
			"item": "snow_block"
		}
	},
	"soul_campfire": {
		"type": "crafting_shaped",
		"pattern": [
			" S ",
			"S#S",
			"LLL"
		],
		"key": {
			"L": {
				"tag": "logs"
			},
			"S": {
				"item": "stick"
			},
			"#": {
				"tag": "soul_fire_base_blocks"
			}
		},
		"result": {
			"item": "soul_campfire"
		}
	},
	"soul_lantern": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			"X#X",
			"XXX"
		],
		"key": {
			"#": {
				"item": "soul_torch"
			},
			"X": {
				"item": "iron_nugget"
			}
		},
		"result": {
			"item": "soul_lantern"
		}
	},
	"soul_torch": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"#",
			"S"
		],
		"key": {
			"X": [{
				"item": "coal"
			}, {
				"item": "charcoal"
			}],
			"#": {
				"item": "stick"
			},
			"S": {
				"tag": "soul_fire_base_blocks"
			}
		},
		"result": {
			"item": "soul_torch",
			"count": 4
		}
	},
	"spectral_arrow": {
		"type": "crafting_shaped",
		"pattern": [
			" # ",
			"#X#",
			" # "
		],
		"key": {
			"#": {
				"item": "glowstone_dust"
			},
			"X": {
				"item": "arrow"
			}
		},
		"result": {
			"item": "spectral_arrow",
			"count": 2
		}
	},
	"sponge": {
		"type": "smelting",
		"ingredient": {
			"item": "wet_sponge"
		},
		"result": "sponge",
		"experience": 0.15,
		"cookingtime": 200
	},
	"spruce_boat": {
		"type": "crafting_shaped",
		"group": "boat",
		"pattern": [
			"# #",
			"###"
		],
		"key": {
			"#": {
				"item": "spruce_planks"
			}
		},
		"result": {
			"item": "spruce_boat"
		}
	},
	"spruce_button": {
		"type": "crafting_shapeless",
		"group": "wooden_button",
		"ingredients": [{
			"item": "spruce_planks"
		}],
		"result": {
			"item": "spruce_button"
		}
	},
	"spruce_door": {
		"type": "crafting_shaped",
		"group": "wooden_door",
		"pattern": [
			"##",
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "spruce_planks"
			}
		},
		"result": {
			"item": "spruce_door",
			"count": 3
		}
	},
	"spruce_fence": {
		"type": "crafting_shaped",
		"group": "wooden_fence",
		"pattern": [
			"W#W",
			"W#W"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "spruce_planks"
			}
		},
		"result": {
			"item": "spruce_fence",
			"count": 3
		}
	},
	"spruce_fence_gate": {
		"type": "crafting_shaped",
		"group": "wooden_fence_gate",
		"pattern": [
			"#W#",
			"#W#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "spruce_planks"
			}
		},
		"result": {
			"item": "spruce_fence_gate"
		}
	},
	"spruce_planks": {
		"type": "crafting_shapeless",
		"group": "planks",
		"ingredients": [{
			"tag": "spruce_logs"
		}],
		"result": {
			"item": "spruce_planks",
			"count": 4
		}
	},
	"spruce_pressure_plate": {
		"type": "crafting_shaped",
		"group": "wooden_pressure_plate",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "spruce_planks"
			}
		},
		"result": {
			"item": "spruce_pressure_plate"
		}
	},
	"spruce_sign": {
		"type": "crafting_shaped",
		"group": "sign",
		"pattern": [
			"###",
			"###",
			" X "
		],
		"key": {
			"#": {
				"item": "spruce_planks"
			},
			"X": {
				"item": "stick"
			}
		},
		"result": {
			"item": "spruce_sign",
			"count": 3
		}
	},
	"spruce_slab": {
		"type": "crafting_shaped",
		"group": "wooden_slab",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "spruce_planks"
			}
		},
		"result": {
			"item": "spruce_slab",
			"count": 6
		}
	},
	"spruce_stairs": {
		"type": "crafting_shaped",
		"group": "wooden_stairs",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "spruce_planks"
			}
		},
		"result": {
			"item": "spruce_stairs",
			"count": 4
		}
	},
	"spruce_trapdoor": {
		"type": "crafting_shaped",
		"group": "wooden_trapdoor",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "spruce_planks"
			}
		},
		"result": {
			"item": "spruce_trapdoor",
			"count": 2
		}
	},
	"spruce_wood": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "spruce_log"
			}
		},
		"result": {
			"item": "spruce_wood",
			"count": 3
		}
	},
	"stick": {
		"type": "crafting_shaped",
		"group": "sticks",
		"pattern": [
			"#",
			"#"
		],
		"key": {
			"#": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "stick",
			"count": 4
		}
	},
	"sticky_piston": {
		"type": "crafting_shaped",
		"pattern": [
			"S",
			"P"
		],
		"key": {
			"P": {
				"item": "piston"
			},
			"S": {
				"item": "slime_ball"
			}
		},
		"result": {
			"item": "sticky_piston"
		}
	},
	"stick_from_bamboo_item": {
		"type": "crafting_shaped",
		"group": "sticks",
		"pattern": [
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "bamboo"
			}
		},
		"result": {
			"item": "stick"
		}
	},
	"stone": {
		"type": "smelting",
		"ingredient": {
			"item": "cobblestone"
		},
		"result": "stone",
		"experience": 0.1,
		"cookingtime": 200
	},
	"stonecutter": {
		"type": "crafting_shaped",
		"pattern": [
			" I ",
			"###"
		],
		"key": {
			"I": {
				"item": "iron_ingot"
			},
			"#": {
				"item": "stone"
			}
		},
		"result": {
			"item": "stonecutter"
		}
	},
	"stone_axe": {
		"type": "crafting_shaped",
		"pattern": [
			"XX",
			"X#",
			" #"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"tag": "stone_tool_materials"
			}
		},
		"result": {
			"item": "stone_axe"
		}
	},
	"stone_bricks": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "stone"
			}
		},
		"result": {
			"item": "stone_bricks",
			"count": 4
		}
	},
	"stone_bricks_from_stone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "stone"
		},
		"result": "stone_bricks",
		"count": 1
	},
	"stone_brick_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "stone_bricks"
			}
		},
		"result": {
			"item": "stone_brick_slab",
			"count": 6
		}
	},
	"stone_brick_slab_from_stone_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "stone_bricks"
		},
		"result": "stone_brick_slab",
		"count": 2
	},
	"stone_brick_slab_from_stone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "stone"
		},
		"result": "stone_brick_slab",
		"count": 2
	},
	"stone_brick_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "stone_bricks"
			}
		},
		"result": {
			"item": "stone_brick_stairs",
			"count": 4
		}
	},
	"stone_brick_stairs_from_stone_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "stone_bricks"
		},
		"result": "stone_brick_stairs",
		"count": 1
	},
	"stone_brick_stairs_from_stone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "stone"
		},
		"result": "stone_brick_stairs",
		"count": 1
	},
	"stone_brick_wall": {
		"type": "crafting_shaped",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "stone_bricks"
			}
		},
		"result": {
			"item": "stone_brick_wall",
			"count": 6
		}
	},
	"stone_brick_walls_from_stone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "stone"
		},
		"result": "stone_brick_wall",
		"count": 1
	},
	"stone_brick_wall_from_stone_bricks_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "stone_bricks"
		},
		"result": "stone_brick_wall",
		"count": 1
	},
	"stone_button": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "stone"
		}],
		"result": {
			"item": "stone_button"
		}
	},
	"stone_hoe": {
		"type": "crafting_shaped",
		"pattern": [
			"XX",
			" #",
			" #"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"tag": "stone_tool_materials"
			}
		},
		"result": {
			"item": "stone_hoe"
		}
	},
	"stone_pickaxe": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			" # ",
			" # "
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"tag": "stone_tool_materials"
			}
		},
		"result": {
			"item": "stone_pickaxe"
		}
	},
	"stone_pressure_plate": {
		"type": "crafting_shaped",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "stone"
			}
		},
		"result": {
			"item": "stone_pressure_plate"
		}
	},
	"stone_shovel": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"tag": "stone_tool_materials"
			}
		},
		"result": {
			"item": "stone_shovel"
		}
	},
	"stone_slab": {
		"type": "crafting_shaped",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "stone"
			}
		},
		"result": {
			"item": "stone_slab",
			"count": 6
		}
	},
	"stone_slab_from_stone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "stone"
		},
		"result": "stone_slab",
		"count": 2
	},
	"stone_stairs": {
		"type": "crafting_shaped",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "stone"
			}
		},
		"result": {
			"item": "stone_stairs",
			"count": 4
		}
	},
	"stone_stairs_from_stone_stonecutting": {
		"type": "stonecutting",
		"ingredient": {
			"item": "stone"
		},
		"result": "stone_stairs",
		"count": 1
	},
	"stone_sword": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"X",
			"#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"tag": "stone_tool_materials"
			}
		},
		"result": {
			"item": "stone_sword"
		}
	},
	"stripped_acacia_wood": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "stripped_acacia_log"
			}
		},
		"result": {
			"item": "stripped_acacia_wood",
			"count": 3
		}
	},
	"stripped_birch_wood": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "stripped_birch_log"
			}
		},
		"result": {
			"item": "stripped_birch_wood",
			"count": 3
		}
	},
	"stripped_crimson_hyphae": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "stripped_crimson_stem"
			}
		},
		"result": {
			"item": "stripped_crimson_hyphae",
			"count": 3
		}
	},
	"stripped_dark_oak_wood": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "stripped_dark_oak_log"
			}
		},
		"result": {
			"item": "stripped_dark_oak_wood",
			"count": 3
		}
	},
	"stripped_jungle_wood": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "stripped_jungle_log"
			}
		},
		"result": {
			"item": "stripped_jungle_wood",
			"count": 3
		}
	},
	"stripped_oak_wood": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "stripped_oak_log"
			}
		},
		"result": {
			"item": "stripped_oak_wood",
			"count": 3
		}
	},
	"stripped_spruce_wood": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "stripped_spruce_log"
			}
		},
		"result": {
			"item": "stripped_spruce_wood",
			"count": 3
		}
	},
	"stripped_warped_hyphae": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "stripped_warped_stem"
			}
		},
		"result": {
			"item": "stripped_warped_hyphae",
			"count": 3
		}
	},
	"sugar_from_honey_bottle": {
		"type": "crafting_shapeless",
		"group": "sugar",
		"ingredients": [{
			"item": "honey_bottle"
		}],
		"result": {
			"item": "sugar",
			"count": 3
		}
	},
	"sugar_from_sugar_cane": {
		"type": "crafting_shapeless",
		"group": "sugar",
		"ingredients": [{
			"item": "sugar_cane"
		}],
		"result": {
			"item": "sugar"
		}
	},
	"suspicious_stew": {
		"type": "crafting_special_suspiciousstew"
	},
	"target": {
		"type": "crafting_shaped",
		"pattern": [
			" R ",
			"RHR",
			" R "
		],
		"key": {
			"H": {
				"item": "hay_block"
			},
			"R": {
				"item": "redstone"
			}
		},
		"result": {
			"item": "target"
		}
	},
	"terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "clay"
		},
		"result": "terracotta",
		"experience": 0.35,
		"cookingtime": 200
	},
	"tipped_arrow": {
		"type": "crafting_special_tippedarrow"
	},
	"tnt": {
		"type": "crafting_shaped",
		"pattern": [
			"X#X",
			"#X#",
			"X#X"
		],
		"key": {
			"#": [{
				"item": "sand"
			}, {
				"item": "red_sand"
			}],
			"X": {
				"item": "gunpowder"
			}
		},
		"result": {
			"item": "tnt"
		}
	},
	"tnt_minecart": {
		"type": "crafting_shaped",
		"pattern": [
			"A",
			"B"
		],
		"key": {
			"A": {
				"item": "tnt"
			},
			"B": {
				"item": "minecart"
			}
		},
		"result": {
			"item": "tnt_minecart"
		}
	},
	"torch": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": [{
				"item": "coal"
			}, {
				"item": "charcoal"
			}]
		},
		"result": {
			"item": "torch",
			"count": 4
		}
	},
	"trapped_chest": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "chest"
		}, {
			"item": "tripwire_hook"
		}],
		"result": {
			"item": "trapped_chest"
		}
	},
	"tripwire_hook": {
		"type": "crafting_shaped",
		"pattern": [
			"I",
			"S",
			"#"
		],
		"key": {
			"#": {
				"tag": "planks"
			},
			"S": {
				"item": "stick"
			},
			"I": {
				"item": "iron_ingot"
			}
		},
		"result": {
			"item": "tripwire_hook",
			"count": 2
		}
	},
	"turtle_helmet": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			"X X"
		],
		"key": {
			"X": {
				"item": "scute"
			}
		},
		"result": {
			"item": "turtle_helmet"
		}
	},
	"warped_button": {
		"type": "crafting_shapeless",
		"group": "wooden_button",
		"ingredients": [{
			"item": "warped_planks"
		}],
		"result": {
			"item": "warped_button"
		}
	},
	"warped_door": {
		"type": "crafting_shaped",
		"group": "wooden_door",
		"pattern": [
			"##",
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "warped_planks"
			}
		},
		"result": {
			"item": "warped_door",
			"count": 3
		}
	},
	"warped_fence": {
		"type": "crafting_shaped",
		"group": "wooden_fence",
		"pattern": [
			"W#W",
			"W#W"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "warped_planks"
			}
		},
		"result": {
			"item": "warped_fence",
			"count": 3
		}
	},
	"warped_fence_gate": {
		"type": "crafting_shaped",
		"group": "wooden_fence_gate",
		"pattern": [
			"#W#",
			"#W#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"W": {
				"item": "warped_planks"
			}
		},
		"result": {
			"item": "warped_fence_gate"
		}
	},
	"warped_fungus_on_a_stick": {
		"type": "crafting_shaped",
		"pattern": [
			"# ",
			" X"
		],
		"key": {
			"#": {
				"item": "fishing_rod"
			},
			"X": {
				"item": "warped_fungus"
			}
		},
		"result": {
			"item": "warped_fungus_on_a_stick"
		}
	},
	"warped_hyphae": {
		"type": "crafting_shaped",
		"group": "bark",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "warped_stem"
			}
		},
		"result": {
			"item": "warped_hyphae",
			"count": 3
		}
	},
	"warped_planks": {
		"type": "crafting_shapeless",
		"group": "planks",
		"ingredients": [{
			"tag": "warped_stems"
		}],
		"result": {
			"item": "warped_planks",
			"count": 4
		}
	},
	"warped_pressure_plate": {
		"type": "crafting_shaped",
		"group": "wooden_pressure_plate",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "warped_planks"
			}
		},
		"result": {
			"item": "warped_pressure_plate"
		}
	},
	"warped_sign": {
		"type": "crafting_shaped",
		"group": "sign",
		"pattern": [
			"###",
			"###",
			" X "
		],
		"key": {
			"#": {
				"item": "warped_planks"
			},
			"X": {
				"item": "stick"
			}
		},
		"result": {
			"item": "warped_sign",
			"count": 3
		}
	},
	"warped_slab": {
		"type": "crafting_shaped",
		"group": "wooden_slab",
		"pattern": [
			"###"
		],
		"key": {
			"#": {
				"item": "warped_planks"
			}
		},
		"result": {
			"item": "warped_slab",
			"count": 6
		}
	},
	"warped_stairs": {
		"type": "crafting_shaped",
		"group": "wooden_stairs",
		"pattern": [
			"#  ",
			"## ",
			"###"
		],
		"key": {
			"#": {
				"item": "warped_planks"
			}
		},
		"result": {
			"item": "warped_stairs",
			"count": 4
		}
	},
	"warped_trapdoor": {
		"type": "crafting_shaped",
		"group": "wooden_trapdoor",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "warped_planks"
			}
		},
		"result": {
			"item": "warped_trapdoor",
			"count": 2
		}
	},
	"wheat": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "hay_block"
		}],
		"result": {
			"item": "wheat",
			"count": 9
		}
	},
	"white_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "white_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "white_banner"
		}
	},
	"white_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "white_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "white_bed"
		}
	},
	"white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "white_wool"
			}
		},
		"result": {
			"item": "white_carpet",
			"count": 3
		}
	},
	"white_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "white_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "white_concrete_powder",
			"count": 8
		}
	},
	"white_dye": {
		"type": "crafting_shapeless",
		"group": "white_dye",
		"ingredients": [{
			"item": "bone_meal"
		}],
		"result": {
			"item": "white_dye"
		}
	},
	"white_dye_from_lily_of_the_valley": {
		"type": "crafting_shapeless",
		"group": "white_dye",
		"ingredients": [{
			"item": "lily_of_the_valley"
		}],
		"result": {
			"item": "white_dye"
		}
	},
	"white_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "white_terracotta"
		},
		"result": "white_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"white_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "white_dye"
			}
		},
		"result": {
			"item": "white_stained_glass",
			"count": 8
		}
	},
	"white_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "white_stained_glass"
			}
		},
		"result": {
			"item": "white_stained_glass_pane",
			"count": 16
		}
	},
	"white_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "white_dye"
			}
		},
		"result": {
			"item": "white_stained_glass_pane",
			"count": 8
		}
	},
	"white_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "white_dye"
			}
		},
		"result": {
			"item": "white_terracotta",
			"count": 8
		}
	},
	"white_wool_from_string": {
		"type": "crafting_shaped",
		"pattern": [
			"##",
			"##"
		],
		"key": {
			"#": {
				"item": "string"
			}
		},
		"result": {
			"item": "white_wool"
		}
	},
	"wooden_axe": {
		"type": "crafting_shaped",
		"pattern": [
			"XX",
			"X#",
			" #"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "wooden_axe"
		}
	},
	"wooden_hoe": {
		"type": "crafting_shaped",
		"pattern": [
			"XX",
			" #",
			" #"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "wooden_hoe"
		}
	},
	"wooden_pickaxe": {
		"type": "crafting_shaped",
		"pattern": [
			"XXX",
			" # ",
			" # "
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "wooden_pickaxe"
		}
	},
	"wooden_shovel": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"#",
			"#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "wooden_shovel"
		}
	},
	"wooden_sword": {
		"type": "crafting_shaped",
		"pattern": [
			"X",
			"X",
			"#"
		],
		"key": {
			"#": {
				"item": "stick"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "wooden_sword"
		}
	},
	"writable_book": {
		"type": "crafting_shapeless",
		"ingredients": [{
			"item": "book"
		}, {
			"item": "ink_sac"
		}, {
			"item": "feather"
		}],
		"result": {
			"item": "writable_book"
		}
	},
	"yellow_banner": {
		"type": "crafting_shaped",
		"group": "banner",
		"pattern": [
			"###",
			"###",
			" | "
		],
		"key": {
			"#": {
				"item": "yellow_wool"
			},
			"|": {
				"item": "stick"
			}
		},
		"result": {
			"item": "yellow_banner"
		}
	},
	"yellow_bed": {
		"type": "crafting_shaped",
		"group": "bed",
		"pattern": [
			"###",
			"XXX"
		],
		"key": {
			"#": {
				"item": "yellow_wool"
			},
			"X": {
				"tag": "planks"
			}
		},
		"result": {
			"item": "yellow_bed"
		}
	},
	"yellow_bed_from_white_bed": {
		"type": "crafting_shapeless",
		"group": "dyed_bed",
		"ingredients": [{
			"item": "white_bed"
		}, {
			"item": "yellow_dye"
		}],
		"result": {
			"item": "yellow_bed"
		}
	},
	"yellow_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"##"
		],
		"key": {
			"#": {
				"item": "yellow_wool"
			}
		},
		"result": {
			"item": "yellow_carpet",
			"count": 3
		}
	},
	"yellow_carpet_from_white_carpet": {
		"type": "crafting_shaped",
		"group": "carpet",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "white_carpet"
			},
			"$": {
				"item": "yellow_dye"
			}
		},
		"result": {
			"item": "yellow_carpet",
			"count": 8
		}
	},
	"yellow_concrete_powder": {
		"type": "crafting_shapeless",
		"group": "concrete_powder",
		"ingredients": [{
			"item": "yellow_dye"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "sand"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}, {
			"item": "gravel"
		}],
		"result": {
			"item": "yellow_concrete_powder",
			"count": 8
		}
	},
	"yellow_dye_from_dandelion": {
		"type": "crafting_shapeless",
		"group": "yellow_dye",
		"ingredients": [{
			"item": "dandelion"
		}],
		"result": {
			"item": "yellow_dye"
		}
	},
	"yellow_dye_from_sunflower": {
		"type": "crafting_shapeless",
		"group": "yellow_dye",
		"ingredients": [{
			"item": "sunflower"
		}],
		"result": {
			"item": "yellow_dye",
			"count": 2
		}
	},
	"yellow_glazed_terracotta": {
		"type": "smelting",
		"ingredient": {
			"item": "yellow_terracotta"
		},
		"result": "yellow_glazed_terracotta",
		"experience": 0.1,
		"cookingtime": 200
	},
	"yellow_stained_glass": {
		"type": "crafting_shaped",
		"group": "stained_glass",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass"
			},
			"X": {
				"item": "yellow_dye"
			}
		},
		"result": {
			"item": "yellow_stained_glass",
			"count": 8
		}
	},
	"yellow_stained_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"###"
		],
		"key": {
			"#": {
				"item": "yellow_stained_glass"
			}
		},
		"result": {
			"item": "yellow_stained_glass_pane",
			"count": 16
		}
	},
	"yellow_stained_glass_pane_from_glass_pane": {
		"type": "crafting_shaped",
		"group": "stained_glass_pane",
		"pattern": [
			"###",
			"#$#",
			"###"
		],
		"key": {
			"#": {
				"item": "glass_pane"
			},
			"$": {
				"item": "yellow_dye"
			}
		},
		"result": {
			"item": "yellow_stained_glass_pane",
			"count": 8
		}
	},
	"yellow_terracotta": {
		"type": "crafting_shaped",
		"group": "stained_terracotta",
		"pattern": [
			"###",
			"#X#",
			"###"
		],
		"key": {
			"#": {
				"item": "terracotta"
			},
			"X": {
				"item": "yellow_dye"
			}
		},
		"result": {
			"item": "yellow_terracotta",
			"count": 8
		}
	},
	"yellow_wool": {
		"type": "crafting_shapeless",
		"group": "wool",
		"ingredients": [{
			"item": "yellow_dye"
		}, {
			"item": "white_wool"
		}],
		"result": {
			"item": "yellow_wool"
		}
	}
};