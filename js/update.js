function resetDesc() {
    desc_name.style.display = "none";
    desc_from.style.display = "none";
    desc_image.style.display = "none"
    desc_content.style.display = "none";
    desc_class_core.style.display = "none";
    desc_class_feature.style.display = "none";
    desc_item.style.display = "none";
    desc_item_list.style.display = "none";
}

function showClassInfo() {
    resetDesc();
    desc_name.style.display = "";
    desc_from.style.display = "";
    desc_image.style.display = "";
    desc_class_core.style.display = "";
    desc_class_feature.style.display = "";
    const class_selected = document.getElementById('character_class').value;
    let item = data_classes.find(obj => obj.id == class_selected);
    desc_name.innerHTML = item?.name;
    desc_from.innerHTML = 'Class';

    let class_content = '<label style="text-align: left; font-weight: bold; margin-top: 4px; border-bottom: 1px solid #aaa; grid-column: 1/span 2;">Core Table</label>';
    // let desc_class_core_content = '';
    let table_attr = ["Primary Ability", "Spellcasting Ability", "Hit Point Die", "Saving Throw Proficiencies", "Skill Proficiencies", "Weapon Proficiencies", "Armor Training", "Starting Equipment"];
    table_attr.forEach(attr => {
        class_content += '<label class="desc_content_header">' + attr + '</label>';
        if (Array.isArray(item[attr])) {
            class_content += '<span class="desc_content_body"">' + item[attr].join(", ") + '</span>';
        } else {
            class_content += '<span class="desc_content_body">' + item[attr] + '</span>';
        }
    });
    let feature_content = '<label style="text-align: left; font-weight: bold; margin-top: 4px; border-bottom: 1px solid #aaa; grid-column: 1/span 2;">Feature Table</label>';
    table_attr = ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6", "Level 7", "Level 8", "Level 9", "Level 10", "Level 11", "Level 12"];
    table_attr.forEach(attr => {
        if (attr.replace("Level ", "") <= max_level) {
            feature_content += '<label class="desc_content_header">' + attr + '</label>';
            if (Array.isArray(item[attr])) {
                feature_content += '<span class="desc_content_body"">' + item[attr].join(", ") + '</span>';
            } else {
                feature_content += '<span class="desc_content_body">' + item[attr] + '</span>';
            }
        }
    });
    desc_class_core.innerHTML = class_content;
    desc_class_feature.innerHTML = feature_content;
    desc_image.innerHTML = `<img src="img/class/${item.name}.png" onerror="this.src='img/Failed Image.png'">`;
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
            for (let ssl = 1; ssl <= max_spelllevel; ssl++) {
                if (ssl <= slotPerLevel[level][ss]) {
                    // content += '<input type="checkbox" id="ss' + ss + '_ssl' + ssl + '">';
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
        skill_id_arr.push('#' + e1.name + '_prof');
        skill_id_arr.push('#' + e1.name + '_expert');
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
        const item = data_armors.find(w => w.Name == body_slots_chest.value);
        const item_ac = item.AC.split(" ")[0];
        switch (item.Category) {
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
    const class_feature = data_classes.find(e => e.id === document.getElementById("character_class").value);
    if (class_feature.spellcasting_ability != undefined) {
        spellcasting_area.style.display = "";
        spellcasting_ability.value = class_feature["Spellcasting Ability"];
    } else {
        spellcasting_area.style.display = "none";
        spellcasting_ability.value = "";
        return;
    }
    const spell_attack_roll_mod = document.getElementById("spell_attack_roll_mod");
    const spell_save_dc = document.getElementById("spell_save_dc");
    if (class_feature.spellcasting_ability !== undefined) {
        spell_attack_roll_mod.value = formatModifier(parseInt(character_prof_bonus.value) + parseInt(document.getElementById("as_" + class_feature.spellcasting_ability + "_mod").value));
        spell_save_dc.value = 8 + parseInt(character_prof_bonus.value) + parseInt(document.getElementById("as_" + class_feature.spellcasting_ability + "_mod").value);
    }
}

function updateHitDice() {
    [6, 8, 10, 12].forEach(e => {
        const hd_ttl = document.getElementById("hd_ttl_" + e);
        const character_class = document.getElementById("character_class");
        const character_level = document.getElementById("character_level");
        const class_hd = data_classes.find(e1 => e1.id == character_class.value).hp_dice;
        if (class_hd == e) {
            hd_ttl.value = character_level.value;
        } else {
            hd_ttl.value = 0;
        }
    });
}

function updateMaxHP() {
    const hp_max = document.getElementById("hp_max");
    [6, 8, 10, 12].forEach(e => {
        const character_class = document.getElementById("character_class");
        const character_level = document.getElementById("character_level");
        const as_con_mod = document.getElementById("as_con_mod");
        const class_hd = data_classes.find(e1 => e1.id == character_class.value).hp_dice;
        let hp = 0;
        if (class_hd == e) {
            hp = e + parseInt(as_con_mod.value); //level 1
            if (character_level.value > 1) {
                hp += (character_level.value - 1) * (1 + e / 2 + parseInt(as_con_mod.value));
            }
            hp_max.value = hp;
        }
    });
}

function showItemList(target) {
    resetDesc();
    desc_name.style.display = "";
    desc_from.style.display = "";
    desc_image.style.display = "";
    desc_content.style.display = "";
    desc_item_list.style.display = "";
    const item_type = target.getAttribute("data-item-type");
    const item_filter = target.getAttribute("data-item-filter");
    desc_name.innerHTML = '???';
    desc_from.innerHTML = `${item_type}`;
    desc_content.innerHTML = "Click an item to display..."
    let content = `<div class="title">Danh Sách ${item_type}</div>`;
    switch (item_type) {
        case "Vũ Khí":
            var filtered = data.filter(obj => obj["Phân Loại"] == item_type);
            var filter_condition = ["Đơn Giản", "Chuyên Dụng", "Cận Chiến", "Tầm Xa"];
            if (item_filter == null) {
                content += `<div class="flex-container" id="item_filter">`;
                filter_condition.forEach(f => {
                    content += `<label><input class="flex-item" type="checkbox" data-item-type="${item_type}" data-item-filter="${f}" checked>${f}</label>`
                })
                content += `</div>`;
            } else {
                content += `<div class="flex-container" id="item_filter">`;
                document.querySelectorAll('#item_filter input[type="checkbox"]').forEach(cb => {
                    const item_filter_1 = cb.getAttribute("data-item-filter");
                    const checked = cb.checked ? "checked" : "";
                    content += `<label><input class="flex-item" type="checkbox" data-item-type="${item_type}" data-item-filter="${item_filter_1}" ${checked}>${item_filter_1}</label>`;
                });
                content += `</div>`;
                filtered = data.filter(obj => {
                    const selected = [...document.querySelectorAll('#item_filter input[type="checkbox"]:checked')].map(cb => cb.getAttribute("data-item-filter"));
                    return selected.includes(obj["Thể Loại"]) && selected.includes(obj["Hình Thức"]);
                });
            }
            filtered.forEach(obj => {
                content += `<div class="section" style="grid-template-columns:auto 1fr auto;">
                    <img class="icon" src="img/${item_type}/${obj.Tên}.png" onerror="this.src='img/Failed Image.png'">
                    <span class="item">
                        <span class="item_name" name="item" data-item-id="${obj._id}" data-item-type="${item_type}">${obj.Tên}</span>
                        <span class="item"> <i>${obj["Hình Thức"]} ${obj["Thể Loại"]}</i></span>
                    </span>
                <span class="item"><button name="item_add" data-item-id="${obj._id}" data-item-type="${item_type}">➕</button></span>
                </div>`;
            });
            break;
        case "Armor":
            filtered = data_armors;
            if (item_filter == null) {
                content += `<div class="flex-container" id="item_filter">
                    <label><input class="flex-item" type="checkbox" data-item-type="${item_type}" data-item-filter="Light" checked>Light</label>
                    <label><input class="flex-item" type="checkbox" data-item-type="${item_type}" data-item-filter="Medium" checked>Medium</label>
                    <label><input class="flex-item" type="checkbox" data-item-type="${item_type}" data-item-filter="Heavy" checked>Heavy</label>
                </div>`;
            } else {
                content += `<div class="flex-container" id="item_filter">`;
                document.querySelectorAll('#item_filter input[type="checkbox"]').forEach(cb => {
                    const item_filter_1 = cb.getAttribute("data-item-filter");
                    const checked = cb.checked ? "checked" : "";
                    content += `<label><input class="flex-item" type="checkbox" data-item-type="${item_type}" data-item-filter="${item_filter_1}" ${checked}>${item_filter_1}</label>`;
                });
                content += `</div>`;
                filtered = data_armors.filter(obj => {
                    const selected = [...document.querySelectorAll('#item_filter input[type="checkbox"]:checked')].map(cb => cb.getAttribute("data-item-filter"));
                    return selected.includes(obj.Category);
                });
            }
            filtered.forEach(obj => {
                content += `<div class="section" style="grid-template-columns:auto 1fr auto;">
                    <img class="icon" src="img/${item_type}/${obj.Name}.png" onerror="this.src='img/Failed Image.png'">
                    <span class="item">
                        <span class="item_name tooltip" name="item" data-tooltip="${obj.VN_Name}" data-item-id="${obj.id}" data-item-type="${item_type}">${obj.Name}</span>
                        <span class="item"> <i>${obj.Category}</i></span>
                    </span>
                    <span class="item"><button name="item_add" data-item-id="${obj.id}" data-item-type="${item_type}" data-key-order="${obj.Category}">➕</button></span>
                </div>`;
            });
            break;
        case "Shield":
            data_shields.forEach(obj => {
                content += `<div class="section" style="grid-template-columns:auto 1fr auto;">
                    <img class="icon" src="img/${item_type}/${obj.Name}.png" onerror="this.src='img/Failed Image.png'">
                    <span class="item">
                        <span class="item_name tooltip" name="item" data-tooltip="${obj.VN_Name}" data-item-id="${obj.id}" data-item-type="${item_type}">${obj.Name}</span>
                        <span class="item"></span>
                    </span>
                    <span class="item"><button name="item_add" data-item-id="${obj.id}" data-item-type="${item_type}">➕</button></span>
                </div>`;
            });
            break;
        case "Spell":
            filtered = data_spells;
            if (item_filter == null) {
                content += `<div class="flex-container" id="item_filter">
                    <label><input class="flex-item" type="checkbox" data-item-type="${item_type}" data-item-filter="0" checked>C</label>
                    <label><input class="flex-item" type="checkbox" data-item-type="${item_type}" data-item-filter="1" checked>1</label>
                    <label><input class="flex-item" type="checkbox" data-item-type="${item_type}" data-item-filter="2" checked>2</label>
                </div>`;
            } else {
                content += `<div class="flex-container" id="item_filter">`;
                document.querySelectorAll('#item_filter input[type="checkbox"]').forEach(cb => {
                    const item_filter_1 = cb.getAttribute("data-item-filter");
                    const checked = cb.checked ? "checked" : "";
                    content += `<label><input class="flex-item" type="checkbox" data-item-type="${item_type}" data-item-filter="${item_filter_1}" ${checked}>${item_filter_1 == 0 ? "C" : item_filter_1}</label>`;
                });
                content += `</div>`;
                filtered = data_spells.filter(obj => {
                    const selected = [...document.querySelectorAll('#item_filter input[type="checkbox"]:checked')].map(cb => cb.getAttribute("data-item-filter"));
                    return selected.includes(obj.Level);
                });
            }
            filtered.filter(obj => obj.BR == "Y").forEach(obj => {
                content += `<div class="section" style="grid-template-columns:auto 1fr auto;">
                    <img class="icon" src="img/${item_type}/${obj.Name}.png" onerror="this.src='img/Failed Image.png'">
                    <span class="item">
                        <span class="item_name tooltip" name="item" data-tooltip="${obj.VN_Name}" data-item-id="${obj.id}" data-item-type="${item_type}">${obj.Name}</span>
                        <span class="item"> <i>Level ${obj.Level} ${obj.School}</i></span>
                    </span>
                    <span class="item"><button name="item_add" data-item-id="${obj.id}" data-item-type="${item_type}">➕</button></span>
                </div>`;
            });
            break;
    }
    desc_item_list.innerHTML = content;
    document.querySelectorAll('#item_filter input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', e => showItemList(e.target))
    });
}

function showItem(target) {
    resetDesc();
    desc_name.style.display = "";
    desc_from.style.display = "";
    desc_image.style.display = "";
    desc_item.style.display = "";
    desc_item_list.style.display = "";
    const item_type = target.getAttribute('data-item-type');
    const item_id = target.getAttribute('data-item-id');
    let item, content = "", table_attr;
    switch (item_type) {
        case "Vũ Khí":
            table_attr = ["Sát Thương", "Thể Loại", "Hình Thức", "Tính Chất", "Thành Thạo", "Khối Lượng", "Giá", "Độ Hiếm"];
            item = data.find(o => o._id == item_id);
            break;
        case "Armor":
            table_attr = ["Category", "AC", "Strength", "Stealth", "Rarity", "Cost"];
            item = data_armors.find(o => o.id == item_id);
            break;
        case "Shield":
            table_attr = ["AC", "Strength", "Stealth", "Rarity", "Cost"];
            item = data_shields.find(o => o.id == item_id);
            break;
        case "Spell":
            table_attr = ["Level", "School", "Casting Time", "Range", "Components", "Duration", "Description"];
            item = data_spells.find(o => o.id == item_id);
            break;
        default:
            break;
    }
    desc_name.innerHTML = `${item["Tên"]}`;
    desc_from.innerHTML = `${item["Phân Loại"]}`;
    table_attr.forEach(attr => {
        content += '<label class="desc_content_header">' + attr + '</label>';
        if (Array.isArray(item[attr])) {
            content += '<span class="desc_content_body">' + item[attr].join(", ") + '</span>';
        } else {
            content += '<span class="desc_content_body">' + item[attr] + '</span>';
        }
    });
    desc_item.innerHTML = content;
    desc_image.innerHTML = `<img src="img/${item._id}.png" onerror="this.src='img/Failed Image.png'">`;
}

function addItem(target) {
    const item_type = target.getAttribute("data-item-type");
    const item_id = target.getAttribute("data-item-id");
    let items = JSON.parse(localStorage.getItem(`inventory_${item_type}`)) || [];
    let existing = items.find(item => item.id == item_id);
    if (existing) {
        existing.qty += 1;
    } else {
        switch (item_type) {
            case "Weapon": case "Armor": case "Shield": case "Spell":
                items.push({ id: item_id, qty: 1 });
                break;
            default:
                items.push({ id: item_id, qty: 1 });
                break;
        }
    }
    localStorage.setItem(`inventory_${item_type}`, JSON.stringify(items));
    updateInventory(item_type);
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
    updateInventory(item_type);
}

function equipItem(target) {
    const body_slot = target.getAttribute("data-body-slot");
    const item_type = target.getAttribute("data-item-type");
    const item_id = target.getAttribute("data-item-id");
    let item = "";
    switch (item_type) {
        case "Weapon":
            item = data_weapons.find(o => o.id == item_id);
            break;
        case "Armor":
            item = data_armors.find(o => o.id == item_id);
            break;
        case "Shield":
            item = data_shields.find(o => o.id == item_id);
            break;
    }
    switch (body_slot) {
        case "body_slots_main_hand":
            body_slots_main_hand.value = item.Name;
            localStorage.setItem("body_slots_main_hand", body_slots_main_hand.value);
            break;
        case "body_slots_off_hand":
            body_slots_off_hand.value = item.Name;
            localStorage.setItem("body_slots_off_hand", body_slots_off_hand.value);
            break;
        case "body_slots_chest":
            body_slots_chest.value = item.Name;
            localStorage.setItem("body_slots_chest", body_slots_chest.value);
            break;
        default:
            break;
    }
    updateAttack();
    updateArmorClass();
}

function unequipItem(target) {
    const body_slot = target.getAttribute("data-body-slot");
    switch (body_slot) {
        case "body_slots_main_hand":
            body_slots_main_hand.value = "";
            localStorage.setItem("body_slots_main_hand", "");
            break;
        case "body_slots_off_hand":
            body_slots_off_hand.value = "";
            localStorage.setItem("body_slots_off_hand", "");
            break;
        case "body_slots_chest":
            body_slots_chest.value = "";
            localStorage.setItem("body_slots_chest", "");
            break;
        default:
            break;
    }
    updateAttack();
    updateArmorClass();
}

function updateInventory(item_type) {
    let items, section, item;
    let content = "";
    switch (item_type) {
        case "Weapon":
            section = weapons_section;
            items = data_weapons.filter(x => (JSON.parse(localStorage.getItem(`inventory_${item_type}`)) || []).map(y => y.id).includes(x.id));
            break;
        case "Armor":
            section = armors_section;
            items = data_armors.filter(x => (JSON.parse(localStorage.getItem(`inventory_${item_type}`)) || []).map(y => y.id).includes(x.id));
            break;
        case "Shield":
            section = shields_section;
            items = data_shields.filter(x => (JSON.parse(localStorage.getItem(`inventory_${item_type}`)) || []).map(y => y.id).includes(x.id));
            break;
        case "Spell":
            section = spells_section;
            items = data_spells.filter(x => (JSON.parse(localStorage.getItem(`inventory_${item_type}`)) || []).map(y => y.id).includes(x.id));
            break;
    }
    items.forEach(e => {
        item = (JSON.parse(localStorage.getItem(`inventory_${item_type}`)) || []).find(x => x.id == e.id);
        switch (item_type) {
            case "Weapon":
                content += `<img class="icon" src="img/${item_type}/${e.Name}.png" onerror="this.src='img/Failed Image.png'">
                    <span class="item">
                        <span class="item">${item.qty}x </span>
                        <span class="item_name tooltip" name="item" data-tooltip="${["Tên"]}" data-item-id="${e["_id"]}" data-item-type="${item_type}">${e.Name}</span>
                        <span class="item"> <i>${e.Category.substring(0, 1)} ${e.Type.substring(0, 1)}</i></span>
                    </span>
                    <span class="item">
                            <button name="item_equip" data-item-id="${e.id}" data-item-type="${item_type}" data-body-slot="body_slots_main_hand">M</button>
                            <button name="item_equip" data-item-id="${e.id}" data-item-type="${item_type}" data-body-slot="body_slots_off_hand">O</button>
                        <button name="item_delete" data-item-id="${e.id}" data-item-type="${item_type}">➖</button>
                    </span>`;
                break;
            case "Armor":
                content += `<img class="icon" src="img/${item_type}/${e.Name}.png" onerror="this.src='img/Failed Image.png'" >
                    <span class="item">
                        <span class="item">${item.qty}x </span>
                        <span class="item_name tooltip" name="item" data-tooltip="${e.VN_Name}" data-item-id="${e.id}" data-item-type="${item_type}">${e.Name}</span>
                        <span class="item"> <i>${e.Category.substring(0, 1)}</i></span>
                    </span>
                    <span class="item">
                        <button name="item_equip" data-item-id="${e.id}" data-item-type="${item_type}" data-body-slot="body_slots_chest">C</button>
                        <button name="item_delete" data-item-id="${e.id}" data-item-type="${item_type}">➖</button>
                    </span>`;
                break;
            case "Shield":
                content += `<img class="icon" src="img/${item_type}/${e.Name}.png" onerror = "this.src='img/Failed Image.png'">
                    <span class="item">
                        <span class="item">${item.qty}x </span>
                        <span class="item_name tooltip" name="item" data-tooltip="${e.VN_Name}" data-item-id="${e.id}" data-item-type="${item_type}">${e.Name}</span>
                    </span>
                    <span class="item">
                        <button name="item_equip" data-item-id="${e.id}" data-item-type="${item_type}" data-body-slot="body_slots_off_hand">O</button>
                        <button name="item_delete" data-item-id="${e.id}" data-item-type="${item_type}">➖</button>
                    </span>`;
                break;
            case "Spell":
                content += `<img class="icon" src="img/${item_type}/${e.Name}.png" onerror="this.src='img/Failed Image.png'">
                    <span class="item">
                        <span class="item_name tooltip" name="item" data-tooltip="${e.VN_Name}" data-item-id="${e.id}" data-item-type="${item_type}">${e.Name}</span>
                        <span class="item"> <i>${(e.Level == 0) ? "C" : "LV." + e.Level}</i></span>
                    </span>
                    <span class="item">
                        <button name="item_delete" data-item-id="${e.id}" data-item-type="${item_type}">➖</button>
                    </span>`;
                break;
        }
    });
    section.innerHTML = content;
}

function clickAction(e) {
    resetDesc();
    desc_name.style.display = "";
    desc_from.style.display = "";
    desc_image.style.display = ""
    desc_content.style.display = "";
    let item = data_actions.find(obj => obj.id == e.getAttribute("data-id"))
    desc_name.innerHTML = `${item.name}`;
    desc_from.innerHTML = `${item.category} (${item.type})`;
    let description = item.description;
    data_description.forEach(e => {
        description = description.replaceAll(e.key, `<c-1>${e.key}</c-1>`);
    });
    desc_content.innerHTML = `${description}`;
    desc_image.innerHTML = `<img src="img/action/${item.id}.png" onerror="this.src='img/Failed Image.png'">`;
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
    let content_action = "", content_bonus_action = "", content_reaction = "", content_trait = "", content_sense = "";
    data_actions.forEach(e => {
        // content = `<button class="flex-item" name="action" data-id="${e.id}">${e.name}</button>`;
        content = `<img name="action" class="action_img" title="${e.name}" data-id="${e.id}" src="img/action/${e.id}.png" onerror="this.src='img/Failed Image.png'">`;
        switch (e.category) {
            case "Hành Động":
                content_action += content;
                break;
            case "Hành Động Phụ":
                content_bonus_action += content;
                break;
            case "Phản Ứng":
                content_reaction += content;
                break;
            case "Đặc Trưng":
                if (e.type == "Class") {
                    if (e.subtype == character_class.value && e.required_class_level <= character_level.value) {
                        content_trait += content;
                    }
                } else if (e.type == "Species") {
                } else {
                    content_trait += content;
                }
                break;
            case "Giác Quan":
                content_sense += content;
                break;
        }
    });
    actions_section.innerHTML = content_action;
    bonus_actions_section.innerHTML = content_bonus_action;
    reactions_section.innerHTML = content_reaction;
    traits_section.innerHTML = content_trait;
    senses_section.innerHTML = content_sense;
}

function showDescription(target) {
    let content = `<div class="toast-title">${target.innerText}</div>`;
    let category = data_description.find(e => e.key == target.innerText).category;
    let description = data_description.find(e => e.key == target.innerText).value;
    content += `<div class="toast-subtitle">${category}</div>`;
    lengthSort(data_description).forEach(e => {
        description = description.replaceAll(e.key, `<c-1>${e.key}</c-1>`);
    });
    content += `${description}`;
    showToast(content);
}