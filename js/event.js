document.addEventListener('click', function (e) {
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
        case "spell_prepare":
            prepareSpell(targetNode);
            break;
        case "spell_unprepare":
            unprepareSpell(targetNode);
            break;
        case "expand":
            expand(targetNode);
            break;
        case "toggle_lock":
            toggleLock(targetNode);
            break;
        case "reset":
            reset(targetNode);
            break;
        case "add_item_by_code":
            addItemByCode();
            break;
    }

    const customTagNode = e.target.closest('c-1');
    if (customTagNode) {
        showDescription(customTagNode);
    } else if (e.target.tagName.toUpperCase() === "C-1") {
        showDescription(e.target);
    }
});

document.addEventListener('input', function (e) {
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
        case "item_filter_input":
            filterItemList(e.target.value);
            break;
    }
});

document.addEventListener('change', function (e) {
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

document.addEventListener('keydown', function (e) {
    if (e.target && e.target.id === "add_item_input" && e.key === "Enter") {
        e.preventDefault(); 
        addItemByCode();
    }
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');

        const targetId = button.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

document.addEventListener('contextmenu', function (e) {
    const target = e.target.closest('.inventory-item, .item-list-interaction, .body-slot');
    if (!target) {
        contextMenu.style.display = 'none';
        return;
    }
    e.preventDefault();
    let menuItems = '';
    const id = target.getAttribute('data-item-id');
    const item = id ? data.find(i => i.id == id) : null;
    if (target.classList.contains('inventory-item')) {
        if (!item) return;

        if (item.type === 'Weapon') {
            menuItems += `<li name="item_equip" data-item-id="${id}" data-body-slot="body_slots_main_hand">Equip to Main Hand</li>
                          <li name="item_equip" data-item-id="${id}" data-body-slot="body_slots_off_hand">Equip to Off Hand</li>`;
        } else if (item.type === 'Armor') {
            const isShield = item.category === "Shield";
            const slot = isShield ? "body_slots_off_hand" : "body_slots_chest";
            const text = isShield ? "Equip to Off Hand" : "Equip to Chest";
            menuItems += `<li name="item_equip" data-item-id="${id}" data-body-slot="${slot}">${text}</li>`;
        } else if (item.type === 'Spell') {
            if (target.closest('#spellbooks-section')) {
                menuItems += `<li name="spell_prepare" data-item-id="${id}" style="color: #ffdc6b;">Prepare this spell</li>`;
                menuItems += `<li name="item_delete" data-inv-type="Spellbook" data-item-id="${id}" style="color: #ff6b6b;">Remove from Spellbook</li>`;
            }
            else if (target.closest('#spells-section')) {
                menuItems += `<li name="spell_unprepare" data-item-id="${id}" style="color: #ffdc6b;">Unprepare this spell</li>`;
            }
        } else if (item.type === 'Feat') {
            if (id == "feat_magic_initiate_cleric" || id == "feat_magic_initiate_druid" || id == "feat_magic_initiate_wizard") {
                menuItems += `<li name="show_more" data-item-id="${id}" data-item-type="Spell" style="color:rgb(238, 107, 255);">Spell List</li>`;
            }
        } else if (item.type === 'Gear') {
            menuItems += `<li name="item_equip" data-item-id="${id}" data-body-slot="body_slots_main_hand">Equip to Main Hand</li>
                          <li name="item_equip" data-item-id="${id}" data-body-slot="body_slots_off_hand">Equip to Off Hand</li>`;
        } else if (item.type === 'Wondrous') {
            menuItems += `<li name="item_equip" data-item-id="${id}" data-body-slot="body_slots_wonderous_1">Equip to Wondrous Slot 1</li>
                          <li name="item_equip" data-item-id="${id}" data-body-slot="body_slots_wonderous_2">Equip to Wondrous Slot 2</li>
                          <li name="item_equip" data-item-id="${id}" data-body-slot="body_slots_wonderous_3">Equip to Wondrous Slot 3</li>`;
        }
        if (item.type !== 'Spell') {
            menuItems += `<li name="item_delete" data-item-id="${id}" style="color: #ff6b6b;">Remove</li>`;
        }
    } else if (target.classList.contains('item-list-interaction')) {
        const charClass = $id("character_class").value;
        if (item?.type !== "Spell") {
            menuItems += `<li name="item_add" data-item-id="${id}" style="color: #ffdc6b;">Add this item</li>`;
        } else {
            const spellText = (charClass === "class_wizard") ? "Add to spellbook" : "Prepare this spell";
            menuItems += `<li name="item_add" data-item-id="${id}" style="color: #ffdc6b;">${spellText}</li>`;
        }
    } else if (target.classList.contains('body-slot')) {
        const slotId = target.getAttribute('id');
        menuItems += `<li name="item_unequip" data-body-slot="${slotId}" style="color: #ff6b6b;">Unequip</li>`;
    }
    if (menuItems) {
        contextMenu.innerHTML = menuItems;
        Object.assign(contextMenu.style, {
            top: `${e.pageY}px`,
            left: `${e.pageX}px`,
            display: 'block'
        });
    }
});