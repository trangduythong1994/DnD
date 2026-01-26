document.body.addEventListener('click', function (e) {
    if (!e.target) return;
    switch (e.target.getAttribute("name")) {
        case "class_info":
            showClassInfo();
            break;
        case "action":
            clickAction(e.target);
            break;
        case "show_more":
            showItemList(e.target);
            break;
        case "item":
            showItem(e.target);
            break;
        case "item_add":
            addItem(e.target);
            break;
        case "item_delete":
            deleteItem(e.target);
            break;
        case "item_equip":
            equipItem(e.target);
            break;
        case "item_unequip":
            unequipItem(e.target);
            break;
    }
    switch (e.target.tagName) {
        case "C-1":
            showDescription(e.target);
            break;
    }
});

document.body.addEventListener('input', function (e) {
    if (!e.target) return;
    const id = e.target.getAttribute("id");
    switch (id) {
        case "as_str": case "as_dex": case "as_con": case "as_int": case "as_wis": case "as_cha":
            updateMod(e.target);
            updateSaveMod(e.target);
            updateSkill();
            updateInitiative();
            updateArmorClass();
            updateSpellcastingArea();
            updateMaxHP();
            updateAttack();
            break;
        case "character_xp":
            updateLevel();
            updateSaveMod();
            updateSkill();
            loadSpellSlots();
            updateSpellcastingArea();
            updateHitDice();
            updateMaxHP();
            updateAttack();
            updateAction();
            break;
    }
});

document.body.addEventListener('change', function (e) {
    if (!e.target) return;
    const id = e.target.getAttribute("id");
    switch (id) {
        case "character_class":
            updateSpellcastingArea();
            showClassInfo();
            updateHitDice();
            updateMaxHP();
            updateAction();
            break;
        case "save_str": case "save_dex": case "save_con": case "save_int": case "save_wis": case "save_cha":
            updateSave(e.target);
            break;
        case "weapon_prof":
            updateAttack();
            break;
    }
});