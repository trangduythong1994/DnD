function resetDesc() {
    desc_content.style.display = "none";
    desc_class_core.style.display = "none";
    desc_class_feature.style.display = "none";
    desc_item_list_name.style.display = "none";
    desc_item.style.display = "none";
    desc_item_list.style.display = "none";
}

function showClassInfo() {
    resetDesc();
    desc_class_core.style.display = "";
    desc_class_feature.style.display = "";
    const class_selected = document.getElementById('character_class').value;
    let item = data.find(obj => obj.id == class_selected);
    desc_name.innerHTML = item?.name;
    desc_from.innerHTML = 'Class';

    let class_content = '';
    // let desc_class_core_content = '';
    let table_attr = ["Primary Ability", "Hit Point Die", "Saving Throw Proficiencies", "Skill Proficiencies", "Weapon Proficiencies", "Armor Training", "Starting Equipment"];
    table_attr.forEach(attr => {
        class_content += '<label class="desc_content_header">' + attr + '</label>';
        if (Array.isArray(item[attr])) {
            class_content += '<span class="desc_content_body"">' + item.description[attr].join(", ") + '</span>';
        } else {
            class_content += '<span class="desc_content_body">' + item.description[attr] + '</span>';
        }
    });
    let feature_content = '<label style="text-align: left; font-weight: bold; margin-top: 4px; border-bottom: 1px solid #aaa; grid-column: 1/span 2;">Feature Table</label>';
    table_attr = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6", "Level 7", "Level 8", "Level 9", "Level 10", "Level 11", "Level 12", "Level 13", "Level 14", "Level 15", "Level 16", "Level 17", "Level 18", "Level 19", "Level 20"];
    table_attr.forEach(attr => {
        if (attr.replace("Level ", "") <= max_level) {
            feature_content += '<label class="desc_content_header">' + attr + '</label>';
            if (Array.isArray(item.description[attr])) {
                feature_content += '<span class="desc_content_body"">' + item.description[attr].join(", ") + '</span>';
            } else {
                feature_content += '<span class="desc_content_body">' + item.description[attr] + '</span>';
            }
        }
    });
    desc_class_core.innerHTML = class_content;
    desc_class_feature.innerHTML = feature_content;
    desc_image.innerHTML = `<img src="img/class/${item.id}.jpg" onerror="this.src='img/Failed Image.png'">`;
}

function updateLevel() {
    let level = 1;
    for (let lvl = 1; lvl <= max_level; lvl++) {
        if (character_xp.value >= data_xp[lvl]) level = lvl;
    }
    character_level.value = level;
    if (level == max_level) {
        character_next_xp_level.value = "MAX";
    } else {
        character_next_xp_level.value = "/" + data_xp[level + 1];
    }
    character_prof_bonus.value = formatModifier(Math.floor((level - 1) / 4) + 2);
    updateSaveMod();
    updateSkill();
    loadSpellSlots();
    updateSpellcastingArea();
    updateHitDice();
    updateMaxHP();
    updateAttack();
    updateAction();
}

function loadSpellSlots() {
    const section = document.getElementById('spell-slots-section');
    const level = document.getElementById('character_level').value;
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
    let content = '';
    for (let ss = 1; ss <= max_spelllevel; ss++) {
        if (slotPerLevel[level][ss] > 0) {
            content += '<label>Level ' + ss + '</label>';
            for (let ssl = 1; ssl <= 6; ssl++) { //6 - grid container
                if (ssl <= slotPerLevel[level][ss]) {
                    content += '<input type="checkbox">';
                } else {
                    content += '<span></span>';
                }
            }
            content += '<span></span>';
        }

    }
    section.innerHTML = content;
}

function updateMod(e) {
    document.getElementById(e.getAttribute("id") + "_mod").value = formatModifier(mod(e.value));
}

function updateSave(e) {
    const as = e.getAttribute("id").replace("save_", "");
    if (e.checked) {
        document.getElementById(e.getAttribute("id") + "_mod").value = formatModifier(mod(document.getElementById("as_" + as).value) + parseInt(character_prof_bonus.value));
    } else {
        document.getElementById(e.getAttribute("id") + "_mod").value = formatModifier(mod(document.getElementById("as_" + as).value));
    }
}

function updateSaveMod(e) {
    if (!e) {
        document.querySelectorAll("#save_str, #save_dex, #save_con, #save_int, #save_wis, #save_cha").forEach(e1 => {
            e1.dispatchEvent(new Event("change", { bubbles: true }));
        });
    } else {
        const as = e.getAttribute("id").replace("as_", "");
        if (document.getElementById("save_" + as).checked)
            document.getElementById("save_" + as + "_mod").value = formatModifier((mod(e.value)) + parseInt(character_prof_bonus.value));
        else
            document.getElementById("save_" + as + "_mod").value = formatModifier(mod(e.value));
    }
}

function updateSkill() {
    let skill_id_arr = [];
    data_skills.forEach(e1 => {
        skill_id_arr.push('#' + e1.id + '_prof');
        skill_id_arr.push('#' + e1.id + '_expert');
    });
    document.querySelectorAll(skill_id_arr.join(',')).forEach(e1 => {
        e1.dispatchEvent(new Event("change", { bubbles: true }));
    });
}

function updateInitiative() {
    initiative_mod.value = formatModifier(mod(as_dex.value));
}

// function updateSpeed() {
//     const character_speed = document.getElementById("character_speed");
//     character_speed.value = "30ft";
// }
document.getElementById("character_speed").value = "30ft";

function updateArmorClass() {
    let ac = 10 + parseInt(mod(as_dex.value));
    if (body_slots_chest.value != "") {
        const item = data.find(w => w.id == body_slots_chest.getAttribute("data-item-id"));
        const item_ac = item.ac.split("+")[0].trim();
        switch (item.category) {
            case "Light":
                ac = parseInt(item_ac) + parseInt(mod(as_dex.value));
                break;
            case "Medium":
                ac = parseInt(item_ac) + (parseInt(mod(as_dex.value)) >= 2 ? 2 : parseInt(mod(as_dex.value)));
                break;
            case "Heavy":
                ac = parseInt(item_ac)
                break;
            default:
                break;
        }
    }
    if (body_slots_off_hand.value == "Shield") {
        ac += 2;
    }
    armor_class.value = ac;
}

function updateSpellcastingArea() {
    spellcasting_area.style.display = "none";
    const feature = data.find(e => e.id == $id("character_class").value);
    for (let i = 0; i <= character_level.value; i++) {
        if (feature?.level?.[i]) {
            const f = feature?.level?.[i];
            if (f.spellcasting_ability) {
                spellcasting_area.style.display = "";
                spellcasting_ability.value = feature.spellcasting_ability;
                spell_attack_roll_mod.value = formatModifier(parseInt(character_prof_bonus.value) + parseInt($id("as_" + f.spellcasting_ability + "_mod").value));
                spell_save_dc.value = 8 + parseInt(character_prof_bonus.value) + parseInt($id("as_" + f.spellcasting_ability + "_mod").value);
            }
            if (f.cantrip_qty) {
                $id("cantrip_qty").value = f.cantrip_qty;
            }
            if (f.prepared_spell) {
                $id("prepared_spell").value = f.prepared_spell;
            }
        }
    }
}

function updateHitDice() {
    const feature = data.find(e => e.id == $id("character_class").value);
    if (feature?.level?.[0]) {
        $id("character_hd").value = feature?.level?.[0].hit_dice;
        const hd_ttl = $id("hd_ttl_" + $id("character_hd").value);
        const character_level = $id("character_level");
        hd_ttl.value = character_level.value;
    }
}

function updateMaxHP() {
    let hp = 0;
    hp = parseInt($id("character_hd").value) + parseInt($id("as_con_mod").value); //level 1
    if (character_level.value > 1) {
        hp += (character_level.value - 1) * (1 + parseInt($id("character_hd").value) / 2 + parseInt($id("as_con_mod").value));
    }
    $id("hp_max").value = hp;
}

function showItemList(target) {
    resetDesc();
    desc_item.style.display = "";
    desc_item_list_name.style.display = "";
    desc_item_list.style.display = "";
    let type = target.getAttribute("data-item-type");
    let id = target.getAttribute("data-item-id");
    if (!type) type = data.find(e => e.id == id)?.type;
    if (!type) return;
    desc_item_list_name.innerHTML = `${type} List`;
    let content = ``;
    data.filter(e => e.type == type).forEach(obj => {
        if (obj.type != "Spell" || (obj.classes.indexOf($id("character_class").value) > -1 && obj.level <= $id("character_level").value)) {
        content += `
                <span name="item" class="item-list-interaction" data-item-id="${obj.id}">
                    <img class="icon-img" src="img/${obj.type}/${obj.id}.jpg" onerror="this.src='img/Failed Image.png'">
                </span>`;
        }
    });
    desc_item_list.innerHTML = content;
}

function showItem(target) {
    resetDesc();
    desc_item.style.display = "";
    desc_item_list_name.style.display = "";
    desc_item_list.style.display = "";
    const item_id = target.getAttribute('data-item-id');
    let content = "", table_attr;
    let item = data.find(o => o.id == item_id);
    switch (item.type) {
        case "Weapon":
            table_attr = ["Category", "Damage", "Properties", "Mastery", "Weight", "Rarity", "Cost"];
            break;
        case "Armor":
            table_attr = ["Category", "AC", "Strength", "Stealth", "Weight", "Rarity", "Cost"];
            break;
        case "Spell":
            table_attr = ["Level", "School", "Casting Time", "Range", "Components", "Duration", "Description"];
            break;
    }
    desc_name.innerHTML = `${item.name}`;
    desc_from.innerHTML = `${item.type}`;
    table_attr.forEach(attr => {
        content += '<label class="desc_content_header">' + attr + '</label>';
        if (Array.isArray(item[attr])) {
            content += '<span class="desc_content_body">' + item[attr.toLowerCase().replace(' ', '_')].join(", ") + '</span>';
        } else {
            content += '<span class="desc_content_body">' + item[attr.toLowerCase().replace(' ', '_')] + '</span>';
        }
    });
    desc_item.innerHTML = content;
    desc_image.innerHTML = `<img src="img/${item.type}/${item.id}.jpg" onerror="this.src='img/Failed Image.png'">`;
    updateContentByLevel();
    showItemList(target);
}

function addItem(target) {
    const id = target.getAttribute("data-item-id");
    const type = data.find(e => e.id == id).type;
    let items = JSON.parse(localStorage.getItem(`inventory_${type}`)) || [];
    let existing = items.find(item => item.id == id);
    if (existing) {
        existing.qty += 1;
    } else {
        switch (type) {
            case "Weapon": case "Armor": case "Shield": case "Spell":
                items.push({ id: id, qty: 1 });
                break;
            default:
                items.push({ id: id, qty: 1 });
                break;
        }
    }
    localStorage.setItem(`inventory_${type}`, JSON.stringify(items));
    updateInventory();
}

function deleteItem(target) {
    const item_type = target.getAttribute("data-item-type");
    const item_id = target.getAttribute("data-item-id");
    let items = JSON.parse(localStorage.getItem(`inventory_${item_type}`)) || [];
    let existing = items.find(item => item.id == item_id);
    if (existing && existing.qty > 1) {
        existing.qty -= 1;
    } else {
        items = items.filter(item => item.id != item_id);
    }
    localStorage.setItem(`inventory_${item_type}`, JSON.stringify(items));
    updateInventory();
}

function equipItem(target) {
    const id = target.getAttribute("data-item-id");
    const body_slot = target.getAttribute("data-body-slot");
    localStorage.setItem(body_slot, id);
    updateBodySlots();
    updateAttack();
    updateArmorClass();
}

function unequipItem(target) {
    const body_slot = target.getAttribute("data-body-slot");
    localStorage.setItem(body_slot, "");
    updateBodySlots();
    updateAttack();
    updateArmorClass();
}

function updateBodySlots() {
    ["body_slots_main_hand", "body_slots_off_hand", "body_slots_chest"].forEach(body_slot => {
        const id = localStorage.getItem(body_slot);
        const item = data.find(e => e.id == id);
        if (item) {
            $id(body_slot).value = item.name;
            $id(body_slot).setAttribute("data-item-id", item.id);
        } else {
            $id(body_slot).value = "";
            $id(body_slot).setAttribute("data-item-id", "");
        }
    });
}

function updateInventory() {
    ["Weapon", "Armor", "Spell"].forEach(type => {
        const savedInventory = JSON.parse(localStorage.getItem(`inventory_${type}`)) || [];
        const inventoryMap = savedInventory.reduce((acc, curr) => { acc[curr.id] = curr; return acc; }, {});
        const content = data.filter(x => x.type === type && inventoryMap[x.id])
            .map(e => {
                const item = inventoryMap[e.id];
                return `
                <span class="inventory-item" name="item" data-item-id="${e.id}" data-item-type="${e.type}" style="cursor: pointer;">
                    <img class="icon-img" src="img/${e.type}/${e.id}.jpg" onerror="this.src='img/Failed Image.png'">
                    <span class="qty">${item.qty}</span>
                </span>`;
            }).join('');
        const section = $id(`${type?.toLowerCase()}s-section`);
        if (section) section.innerHTML = content;
    });
}

function updateContentByLevel() {
    const levelElements = document.querySelectorAll('[data-level]');
    levelElements.forEach(el => {
        const requiredLevel = parseInt(el.getAttribute('data-level'));
        if (requiredLevel > max_level) {
            el.style.display = 'none';
        }
    });
}

function clickAction(e) {
    resetDesc();
    desc_content.style.display = "";
    let item = data.find(obj => obj.id == e.getAttribute("data-id"))
    desc_name.innerHTML = `${item.name}`;
    desc_from.innerHTML = `${item.type}`;
    let description = item.description;
    desc_content.innerHTML = `${description}`;
    desc_image.innerHTML = `<img src="img/${item.type}/${item.id}.jpg" onerror="this.src='img/Failed Image.png'">`;
    updateContentByLevel();
}

function updateAttack() {
    if (weapon_prof.checked || body_slots_main_hand.value == "") {
        melee_attack_roll_mod.value = formatModifier(mod(as_str.value) + parseInt(character_prof_bonus.value));
        ranged_attack_roll_mod.value = formatModifier(mod(as_dex.value) + parseInt(character_prof_bonus.value));
    } else {
        melee_attack_roll_mod.value = formatModifier(mod(as_str.value));
        ranged_attack_roll_mod.value = formatModifier(mod(as_dex.value));
    }
    if (body_slots_main_hand.value == "") {
        melee_attack_damage_mod.value = 1 + mod(as_str.value);
    } else {
        melee_attack_damage_mod.value = formatModifier(mod(as_str.value));
        ranged_attack_damage_mod.value = formatModifier(mod(as_dex.value));
    }
}

function updateAction() {
    let content = "", content_action = "", content_bonus_action = "", content_reaction = "", features_general = "", features_class = "";
    data.filter(e => e.type == "Action").forEach(e => {
        content = `<img name="action" class="icon-img" data-id="${e.id}" src="img/action/${e.id}.jpg" onerror="this.src='img/Failed Image.png'">`;
        content_action += content;
    });
    actions_section.innerHTML = content_action;

    data.filter(e => e.type == "Bonus Action").forEach(e => {
        content = `<img name="action" class="icon-img" data-id="${e.id}" src="img/action/${e.id}.jpg" onerror="this.src='img/Failed Image.png'">`;
        content_bonus_action += content;
    });
    bonus_actions_section.innerHTML = content_bonus_action;

    data.filter(e => e.type == "Reaction").forEach(e => {
        content = `<img name="action" class="icon-img" data-id="${e.id}" src="img/action/${e.id}.jpg" onerror="this.src='img/Failed Image.png'">`;
        content_reaction += content;
    });
    reactions_section.innerHTML = content_reaction;

    if ($id("character_class").value == "class_cleric" && parseInt($id("character_level").value) >= 2) {
        features_general += `
            <div class="section" style="grid-template-columns: auto 1fr 1fr;">
                <label>Channel Divinity</label>
                <input type="text" id="channel_divinity" disabled>
                <input type="text" id="channel_divinity_used">
            </div>`;
    }
    data.filter(e => e.type == "Feature").sort((a, b) => (a.conditions.level - b.conditions.level)).forEach(e => {
        if ($id("character_class").value == e.conditions.class && parseInt($id("character_level").value) >= parseInt(e.conditions.level)) {
            content = `<img name="action" class="icon-img" data-id="${e.id}" src="img/feature/${e.id}.jpg" onerror="this.src='img/Failed Image.png'">`;
            features_class += content;
        }
    });
    $id('features_general').innerHTML = features_general;
    $id('features_class').innerHTML = features_class;
    const feature = data.find(e => e.id == $id("character_class").value);
    for (let i = 0; i <= character_level.value; i++) {
        if (feature?.level?.[i]) {
            const f = feature?.level?.[i];
            if (f.channel_divinity) {
                $id("channel_divinity").value = f.channel_divinity;
            }
        }
    }
}