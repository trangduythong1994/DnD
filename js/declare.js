const max_level = 2;
const max_spelllevel = 1;
const AS = ["str", "dex", "con", "int", "wis", "cha"];
const data_xp = [0, 0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000];

const as_str = $id("as_str");
const as_dex = $id("as_dex");
const as_con = $id("as_con");
const as_int = $id("as_int");
const as_wis = $id("as_wis");
const as_cha = $id("as_cha");

const desc_name = $id('desc_name');
const desc_from = $id('desc_from');
const desc_content = $id('desc_content');
const desc_image = $id('desc_image');
const desc_class_core = $id('desc_class_core');
const desc_class_feature = $id('desc_class_feature');
const desc_item = $id('desc_item');
const desc_item_list = $id('desc_item_list');
const desc_item_list_name = $id('desc_item_list_name');

const weapons_section = $id('weapons-section');
const armors_section = $id('armors-section');
const shields_section = $id('shields-section');
const spells_section = $id('spells-section');

const character_prof_bonus = $id("character_prof_bonus");
const character_level = $id('character_level');
const character_xp = $id('character_xp');
const character_next_xp_level = $id('character_next_xp_level');
const character_class = $id("character_class");

const initiative_mod = $id("initiative_mod");
const armor_class = $id("armor_class");

const weapon_prof = $id("weapon_prof");
const melee_attack_roll_mod = $id("melee_attack_roll_mod");
const ranged_attack_roll_mod = $id("ranged_attack_roll_mod");
const melee_attack_damage_mod = $id("melee_attack_damage_mod");
const ranged_attack_damage_mod = $id("ranged_attack_damage_mod");

const body_slots_main_hand = $id("body_slots_main_hand");
const body_slots_off_hand = $id("body_slots_off_hand");
const body_slots_chest = $id("body_slots_chest");

const spellcasting_ability = $id("spellcasting_ability");
const spell_attack_roll_mod = $id("spell_attack_roll_mod");
const spell_save_dc = $id("spell_save_dc");

const actions_section = $id("actions-section");
const bonus_actions_section = $id("bonus-actions-section");
const reactions_section = $id("reactions-section");

const contextMenu = $id('custom-context-menu');

const data_equipments = [...data_weapons, ...data_armors, ...data_tools, ...data_gears, ...data_feats];
const data = [ 
    ...data_equipments
    , ...data_spells
    , ...data_backgrounds
    , ...data_classes
    , ...data_species
    , ...data_actions];

const slotPerLevel = [
    [0, 0, 0, 0, 0, 0, 0]
    , [1, 2, 0, 0, 0, 0, 0]
    , [2, 3, 0, 0, 0, 0, 0]
    , [3, 4, 2, 0, 0, 0, 0]
    , [4, 4, 3, 0, 0, 0, 0]
    , [5, 4, 3, 2, 0, 0, 0]
    , [6, 4, 3, 3, 0, 0, 0]
    , [7, 4, 3, 3, 1, 0, 0]
    , [8, 4, 3, 3, 2, 0, 0]
    , [9, 4, 3, 3, 3, 1, 0]
    , [10, 4, 3, 3, 3, 2, 0]
    , [11, 4, 3, 3, 3, 2, 1]
    , [12, 4, 3, 3, 3, 2, 1]
];
const maxSpellLevelPerLevel = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]