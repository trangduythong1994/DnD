document.body.addEventListener('click', function (e) {
    if (!e.target) return;
    contextMenu.style.display = 'none';
    const targetNode = e.target.closest('[name]');
    const targetName = targetNode ? targetNode.getAttribute("name") : null;
    switch (targetName) {
        case "character_background":
        case "character_species":
        case "character_class":
            showInfo(targetName);
            break;
        case "action":
            clickAction(targetNode);
            break;
        case "show_more":
            showItemList(targetNode);
            break;
        case "item":
            showItem(targetNode);
            break;
        case "item_add":
            addItem(targetNode);
            break;
        case "item_delete":
            deleteItem(targetNode);
            break;
        case "item_equip":
            equipItem(targetNode);
            break;
        case "item_unequip":
            unequipItem(targetNode);
            break;
    }

    const customTagNode = e.target.closest('c-1');
    if (customTagNode) {
        showDescription(customTagNode);
    } else if (e.target.tagName.toUpperCase() === "C-1") {
        showDescription(e.target);
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
            updateAttack();
            break;
        case "character_xp":
            updateLevel();
            break;
    }
});

document.body.addEventListener('change', function (e) {
    if (!e.target) return;
    const id = e.target.getAttribute("id");
    switch (id) {
        case "character_background":
        case "character_species":
        case "character_class":
            updateSpellcastingArea();
            showInfo(id);
            updateHitDice();
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

document.addEventListener('contextmenu', function (e) {
    if (e.target.closest('.inventory-item')) {
        e.preventDefault();
        const itemTarget = e.target.closest('.inventory-item');
        const itemId = itemTarget.getAttribute('data-item-id');
        const itemType = itemTarget.getAttribute('data-item-type');
        let menuItems = '';
        if (itemType === 'Weapon') {
            menuItems += `<li name="item_equip" data-item-id="${itemId}" data-item-type="${itemType}" data-body-slot="body_slots_main_hand">Equip to Main Hand</li>`;
            menuItems += `<li name="item_equip" data-item-id="${itemId}" data-item-type="${itemType}" data-body-slot="body_slots_off_hand">Equip to Off Hand</li>`;
        } else if (itemType === 'Armor') {
            const itemCategory = data.find(e => e.id == itemId).category;
            if (itemCategory == "Shield") {
                menuItems += `<li name="item_equip" data-item-id="${itemId}" data-item-type="${itemType}" data-body-slot="body_slots_off_hand">Equip to Off Hand</li>`;
            } else {
                menuItems += `<li name="item_equip" data-item-id="${itemId}" data-item-type="${itemType}" data-body-slot="body_slots_chest">Equip to Chest</li>`;
            }
        }
        menuItems += `<li name="item_delete" data-item-id="${itemId}" data-item-type="${itemType}" style="color: #ff6b6b;">Remove this item</li>`;
        contextMenu.innerHTML = menuItems;
        contextMenu.style.top = `${e.pageY}px`;
        contextMenu.style.left = `${e.pageX}px`;
        contextMenu.style.display = 'block';
    } else if (e.target.closest('.item-list-interaction')) {
        e.preventDefault();
        const itemTarget = e.target.closest('.item-list-interaction');
        const itemId = itemTarget.getAttribute('data-item-id');
        let menuItems = '';
        menuItems += `<li name="item_add" data-item-id="${itemId}" style="color: #ffdc6b;">Add this item</li>`;
        contextMenu.innerHTML = menuItems;
        contextMenu.style.top = `${e.pageY}px`;
        contextMenu.style.left = `${e.pageX}px`;
        contextMenu.style.display = 'block';
    } else if (e.target.closest('.body-slot')) {
        e.preventDefault();
        const itemTarget = e.target.closest('.body-slot');
        const id = itemTarget.getAttribute('id');
        let menuItems = '';
        menuItems += `<li name="item_unequip" data-body-slot="${id}" style="color: #ff6b6b;">Unequip</li>`;
        contextMenu.innerHTML = menuItems;
        contextMenu.style.top = `${e.pageY}px`;
        contextMenu.style.left = `${e.pageX}px`;
        contextMenu.style.display = 'block';
    } else {
        contextMenu.style.display = 'none';
    }
});