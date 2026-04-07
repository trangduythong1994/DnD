function resetDesc() {
    desc_content.style.display = "none";
    desc_class_core.style.display = "none";
    desc_item_list_name.style.display = "none";
    desc_item.style.display = "none";
    desc_item_list.style.display = "none";
}

function showInfo(id) {
    resetDesc();
    desc_content.style.display = "";
    desc_class_core.style.display = "";
    const selected = document.getElementById(id).value;
    if (!selected) return;
    let item = data.find(obj => obj.id == selected);
    if (!item) return;
    desc_name.innerHTML = item.name;
    desc_from.innerHTML = item.type;

    let content = '';
    for (const [key, value] of Object.entries(item.description)) {
        let displayValue = Array.isArray(value) ? value.join(', ') : value;
        if (key.indexOf("Level") < 0 || key.replace("Level ", "") <= max_level) {
            content += '<label class="desc_content_header">' + key + '</label>';
            content += '<span class="desc_content_body">' + displayValue + '</span>';
        }
    }
    desc_content.innerHTML = item.description_text;
    desc_class_core.innerHTML = content;
    desc_image.innerHTML = `<img src="img/${item.type.toLowerCase()}/${item.id}.jpg" onerror="this.src='img/Failed Image.png'">`;
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
    updateAttack();
    updateAction();
}

function loadSpellSlots() {
    const section = document.getElementById('spell-slots-section');
    const level = document.getElementById('character_level').value;
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
    document.querySelectorAll(".spellcasting-area").forEach(e => e.style.display = "none");
    const feature = data.find(e => e.id == $id("character_class").value);
    for (let i = 0; i <= character_level.value; i++) {
        if (feature?.level?.[i]) {
            const f = feature?.level?.[i];
            if (f.spellcasting_ability) {
                document.querySelectorAll(".spellcasting-area").forEach(e => { e.style.display = ""; });
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
    [6, 8, 10, 12].forEach(e => $id("hd_ttl_" + e).value = "");
    const feature = data.find(e => e.id == $id("character_class").value);
    if (feature?.level?.[0]) {
        $id("character_hd").value = feature.level[0].hit_dice;
        const hd_ttl = $id("hd_ttl_" + $id("character_hd").value);
        const character_level = $id("character_level");
        hd_ttl.value = character_level.value;
    }
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
    data.filter(e => e.type == type && !e.locked).sort((a, b) => a.id.localeCompare(b.id)).forEach(obj => {
        if (obj.type != "Spell") {
            content += `
                <span name="item" class="item-list-interaction" data-item-id="${obj.id}">
                    <img class="icon-img" src="img/${obj.type.toLowerCase()}/${obj.id}.jpg" onerror="this.src='img/Failed Image.png'">
                </span>`;
        } else {
            if (obj.classes.indexOf($id("character_class").value) > -1 && obj.level <= maxSpellLevelPerLevel[$id("character_level").value]) {
                content += `
                    <span name="item" class="item-list-interaction" data-item-id="${obj.id}">
                        <img class="icon-img" src="img/${obj.type.toLowerCase()}/${obj.id}.jpg" onerror="this.src='img/Failed Image.png'">
                        <span class="lvl spell-lv${obj.level}">${obj.level}</span>
                    </span>`;
            }
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
    if (item.type == "Tool" || item.type == "Gear") {
        for (const [key, value] of Object.entries(item.description)) {
            let displayValue = Array.isArray(value) ? value.join(', ') : value;
            if (key.indexOf("Level") < 0 || key.replace("Level ", "") <= max_level) {
                content += '<label class="desc_content_header">' + key + '</label>';
                content += '<span class="desc_content_body">' + displayValue + '</span>';
            }
        }
    } else {
        table_attr.forEach(attr => {
            content += '<label class="desc_content_header">' + attr + '</label>';
            if (Array.isArray(item[attr])) {
                content += '<span class="desc_content_body">' + item[attr.toLowerCase().replace(' ', '_')].join(", ") + '</span>';
            } else {
                content += '<span class="desc_content_body">' + item[attr.toLowerCase().replace(' ', '_')] + '</span>';
            }
        });
    }


    desc_item.innerHTML = content;
    desc_image.innerHTML = `<img src="img/${item.type.toLowerCase()}/${item.id}.jpg" onerror="this.src='img/Failed Image.png'">`;
    updateContentByLevel();
    showItemList(target);
}

function addItem(target) {
    const id = target.getAttribute("data-item-id");
    const type = data.find(e => e.id == id).type;
    let items = JSON.parse(localStorage.getItem(`inventory_${type}`)) || [];
    let existing = items.find(item => item.id == id);
    if (existing) {
        if (type != 'Spell') {
            existing.qty += 1;
        }
    } else {
        items.push({ id: id, qty: 1 });
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
    ["Weapon", "Armor", "Tool", "Gear", "Spell"].forEach(type => {
        const savedInventory = JSON.parse(localStorage.getItem(`inventory_${type}`)) || [];
        const inventoryMap = savedInventory.reduce((acc, curr) => { acc[curr.id] = curr; return acc; }, {});
        const content = data.filter(x => x.type === type && inventoryMap[x.id])
            .map(e => {
                const item = inventoryMap[e.id];
                let attr = ``;
                if (type == "Spell") {
                    attr += `<span class="lvl spell-lv${e.level}">${e.level}</span>`;
                } else {
                    attr += `<span class="qty">${item.qty}</span>`;
                }
                return `
                <span class="inventory-item" name="item" data-item-id="${e.id}" data-item-type="${e.type}" style="cursor: pointer;">
                    <img class="icon-img" src="img/${e.type.toLowerCase()}/${e.id}.jpg" onerror="this.src='img/Failed Image.png'">
                    ${attr}${attr}
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
    desc_image.innerHTML = `<img src="img/${item.type.toLowerCase()}/${item.id}.jpg" onerror="this.src='img/Failed Image.png'">`;
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
    let content = "", content_action = "", content_bonus_action = "", content_reaction = "", features_species = "", features_general = "", features_class = "";
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

    if ($id("character_class").value == "class_cleric") {
        features_general += `
            <div class="section" style="grid-template-columns: auto 1fr 1fr;">
                <label>Channel Divinity</label>
                <input type="text" id="channel_divinity" disabled>
                <input type="text" id="channel_divinity_used">
            </div>`;
    }
    if ($id("character_class").value == "class_rogue") {
        features_general += `
            <div class="section" style="grid-template-columns: auto 1fr">
                <label>Sneak Attack</label>
                <input type="text" id="sneak_attack" disabled>
            </div>`;
    }
    if ($id("character_class").value == "class_fighter") {
        features_general += `
            <div class="section" style="grid-template-columns: auto 1fr 1fr">
                <label>Second Wind</label>
                <input type="text" id="second_wind" disabled>
                <input type="text" id="second_wind_used">
                <label>Action Surge</label>
                <input type="text" id="action_surge" disabled>
                <input type="text" id="action_surge_used">
            </div>
            <div class="section" style="grid-template-columns: auto 1fr">
                <label>Weapon Mastery</label>
                <input type="text" id="weapon_mastery" disabled >
            </div>`;
    }
    data.filter(e => e.type == "Feature").sort((a, b) => (a.conditions.level - b.conditions.level)).forEach(e => {
        if ($id("character_species").value == e.conditions.species && parseInt($id("character_level").value) >= parseInt(e.conditions.level ? e.conditions.level : 0)) {
            content = `<img name="action" class="icon-img" data-id="${e.id}" src="img/${e.type.toLowerCase()}/${e.id}.jpg" onerror="this.src='img/Failed Image.png'">`;
            features_species += content;
        }
    });
    data.filter(e => e.type == "Feature").sort((a, b) => (a.conditions.level - b.conditions.level)).forEach(e => {
        if ($id("character_class").value == e.conditions.class && parseInt($id("character_level").value) >= parseInt(e.conditions.level ? e.conditions.level : 0)) {
            content = `<img name="action" class="icon-img" data-id="${e.id}" src="img/${e.type.toLowerCase()}/${e.id}.jpg" onerror="this.src='img/Failed Image.png'">`;
            features_class += content;
        }
    });
    $id('features_species').innerHTML = features_species;
    $id('features_general').innerHTML = features_general;
    $id('features_class').innerHTML = features_class;
    const feature = data.find(e => e.id == $id("character_class").value);
    for (let i = 0; i <= character_level.value; i++) {
        if (feature?.level?.[i]) {
            const f = feature?.level?.[i];
            if (f.channel_divinity) {
                $id("channel_divinity").value = f.channel_divinity;
            }
            if (f.sneak_attack) {
                $id("sneak_attack").value = f.sneak_attack;
            }
            if (f.second_wind) {
                $id("second_wind").value = f.second_wind;
            }
            if (f.action_surge) {
                $id("action_surge").value = f.action_surge;
            }
            if (f.weapon_mastery) {
                $id("weapon_mastery").value = f.weapon_mastery;
            }
        }
    }
}