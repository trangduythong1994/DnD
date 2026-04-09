function initElements() {
    initSkills();
    initBackground();
    initSpecies();
    initClasses();
    resetDesc();
}

function initBackground() {
    data.filter(e => e.type == "Background").sort((a, b) => a.id.localeCompare(b.id)).forEach(e => {
        const opt = document.createElement("option");
        opt.value = e.id;
        opt.textContent = e.name;
        document.getElementById("character_background").appendChild(opt);
    });
}

function initSpecies() {
    data.filter(e => e.type == "Species").sort((a, b) => a.id.localeCompare(b.id)).forEach(e => {
        const opt = document.createElement("option");
        opt.value = e.id;
        opt.textContent = e.name;
        document.getElementById("character_species").appendChild(opt);
    });
}

function initClasses() {
    data.filter(e => e.type == "Class").sort((a, b) => a.id.localeCompare(b.id)).forEach(e => {
        const opt = document.createElement("option");
        opt.value = e.id;
        opt.textContent = e.name;
        document.getElementById("character_class").appendChild(opt);
    });
}

function initSkills() {
    const section = document.getElementById('skills-section');
    let skill_id_arr = [];
    multiSort(data_skills, ["as_skill", "name"], { "as_skill": ["str", "dex", "int", "wis", "cha"] }).forEach(e => {
        let content = `<span data-tippy-content="${e.description}">${e.name}</span>`
            + '<span>' + e.d_as_skill + '</span>'
            + '<input type="checkbox" id="' + e.id + '_prof">'
            + '<input type="checkbox" id="' + e.id + '_expert">'
            + '<input type="text" id="' + e.id + '_mod" data-computed="true" disabled>';

        section.innerHTML += content;
        skill_id_arr.push('#' + e.id + '_prof');
        skill_id_arr.push('#' + e.id + '_expert');
    });
    document.querySelectorAll(skill_id_arr.join(',')).forEach(e => {
        e.addEventListener("change", () => {
            const prof_bonus = document.getElementById("character_prof_bonus").value;
            const skill = e.id.replace('#', '').replace('_prof', '').replace('_expert', '');
            const as = data_skills.find(e1 => e1.id == skill).as_skill;
            let as_skill_mod = mod(document.getElementById("as_" + as).value);
            if (document.getElementById(skill + "_prof").checked && document.getElementById(skill + "_expert").checked) {
                as_skill_mod += parseInt(prof_bonus) * 2;
            } else if (document.getElementById(skill + "_prof").checked || document.getElementById(skill + "_expert").checked) {
                as_skill_mod += parseInt(prof_bonus);
            }
            document.getElementById(skill + "_mod").value = formatModifier(as_skill_mod);
        });
    });
    tippy('[data-tippy-content]', {
        placement: 'top-start',
        animation: 'text',
        theme: 'retro',
        delay: [100],
    });
}