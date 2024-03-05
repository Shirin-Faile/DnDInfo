function role(imageUrl, name, about, armor, weapons, tools, throws, skills, equipment) {
    this.image = imageUrl,
    this.name = name,
    this.about = about,
    this.armor = armor,
    this.weapons = weapons,
    this.tools = tools,
    this.throws = throws,
    this.skills = skills,
    this.equipment = equipment
}

let barbarian = new role(
    "./img/barbarian.png",
    "Barbarian",
    "For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.",
    "Light armor, medium armor, shields",
    "Simple weapons, martial weapons",
    "None",
    "Strength, Constitution",
    "Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
    "A greataxe or any martial melee weapon"
)

let bard = new role(
    "./img/bard.png",
    "Bard",
    "Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds. The bard is a master of song, speech, and the magic they contain.",
    "Light armor",
    "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
    "Three musical instruments of your choice",
    "Dexterity, Charisma",
    "Choose any three",
    "A rapier, a longsword or any simple weapon"
)

let cleric = new role(
    "./img/cleric.png",
    "Cleric",
    "Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.",
    "Light armor, medium armor, shields",
    "All simple weapons",
    "None",
    "Wisdom, Charisma",
    "Choose two from History, Insight, Medicine, Persuasion, and Religion",
    "A mace or a warhammer (if proficient)"
)

let druid = new role(
    "./img/druid.png",
    "Druid",
    "Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature, but see themselves as extensions of nature's indomitable will.",
    "Light armor, medium armor, shields (druids will not wear armor or use shields made of metal)",
    "Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
    "Herbalism kit",
    "Intelligence, Wisdom",
    "Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival",
    "A wooden shield or any simple weapon"
)

let fighter = new role(
    "./img/fighter.png",
    "Fighter",
    "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. They are well acquainted with death, both meting it out and staring it defiantly in the face.",
    "All armor, shields",
    "Simple weapons, martial weapons",
    "None",
    "Strength, Constitution",
    "Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival",
    "Chain mail or leather. longbow and 20 arrows"
)

let monk = new role(
    "./img/monk.png",
    "Monk",
    "Monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.",
    "None",
    "Simple weapons, shortswords",
    "Choose one type of artisan's tools or one musical instrument",
    "Strength, Dexterity",
    "Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth",
    "A shortsword or any simple weapon"

)

let paladin = new role(
    "./img/paladin.png",
    "Paladin",
    "Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond.",
    "All armor, shields",
    "Simple weapons, martial weapons",
    "None",
    "Wisdom, Charisma",
    "Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion",
    "A martial weapon and a shield or two marial weapons"
)
let ranger = new role(
    "./img/ranger.png",
    "Ranger",
    "Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
    "Light armor, medium armor, shields",
    "Simple weapons, martial weapons",
    "None",
    "Strength, Dexterity",
    "Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival",
    "A scale mail or leather armor"
)
let rogue = new role(
    "./img/rogue.png",
    "Rogue",
    "Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
    "Light armor",
    "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
    "Thieves' tools",
    "Dexterity, Intelligence",
    "Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth",
    "A rapier or a shortsword"
)
let sorcerer = new role(
    "./img/sorcerer.png",
    "Sorcerer",
    "Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. No one chooses sorcery; the power chooses the sorcerer.",
    "None",
    "Daggers, darts, slings, quarterstaffs, light crossbows",
    "None",
    "Constitution, Charisma",
    "Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion",
    "A light crossbow and 20 bolts or any simple weapon"
)
let warlock = new role(
    "./img/warlock.png",
    "Warlock",
    "Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular.",
    "Light armor",
    "Simple weapons",
    "None",
    "Wisdom, Charisma",
    "Choose two from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion",
    "A light crossbow and 20 bolts or any simple weapon"
)
let wizard = new role(
    "./img/wizard.png",
    "Wizard",
    "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, brute-force mind control, and much more.",
    "None",
    "Daggers, darts, slings, quarterstaffs, light crossbows",
    "None",
    "Intelligence, Wisdom",
    "Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion",
    "A quarterstaff or a dagger"
)

export const roles =  [barbarian, bard, cleric, druid, fighter, monk, paladin, ranger, rogue, sorcerer, warlock, wizard]