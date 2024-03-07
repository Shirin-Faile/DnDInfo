function subClass(name, subclass, description) {
    this.name = name,
    this.subclass = subclass,
    this.description = description
}

let pathOfEnragedBrawler = new subClass(
    "Path of the Enraged Brawler",
    "Barbarian subclass",
    "An adventurer who has chosen to walk the Path of the Enraged Brawler relies on sheer brute force and will to take out their foes. They train themselves to turn their fists into as deadly a weapon as any club or hammer. After all, what more does a true brawler need than their own two fists?"
)

let artisteDeCirque = new subClass(
    "Artiste de Cirque",
    "Bard college",
    "The artiste de ciruqe - the circus performer, also known to many as the ringmaster or ringmistress - are usually found in the employ of traveling caravans and circuses. They are often one of the main performances of their associated events and many times direct the attention of the audience to other performances as the night goes on. When the show is over, however, these types of bards can be just as bewitching in the heat of combat. Their unusual mastery of uncommon weapons often leave their enemies mistakenly underestimating their ability."
)

let agonyDomain = new subClass(
    "Agony Domain",
    "Cleric subclass",
    "There are things in this world that are not happy or pretty or desirable. These things, too, need the attention of a deity, and those deities require worshipers, acolytes, and devotees. Agony is one such oft-overlooked domain. In the Forgotten Realms, this is the prevue of Loviatar, Mistress of Pain, though Bane (god of tyranny), Bhaal (god of murder), and other evil gods have clergy of this domain, as might some lighter gods and goddesses, such as Torm (god of self-sacrifice) or Ilmater (god of endurance). Deities of war and death are also likely to boast followers of this domain."
)

let circleofrainbows = new subClass(
    "Circle of Rainbows",
    "Druid subclass",
    "Druids who follow the circle of rainbows embrace the beauty and power held in the myriad of colors formed by rainbows, and can use their connection with the light to manifest amazing natural powers. They dress themselves with vibrant colors and seek to share the love they feel for the bright beauty of nature with all creatures."
)

let abyssalKnight = new subClass(
    "Abyssal Knight",
    "Fighter archetype",
    "Warriors corrupted by the lower planes, touched by the primordial chaos of the abyss, the abyssal knights are the traitors of the material plane, acting as agents of destruction to their demon overlords. These fighters are often power-hungry individuals, who have forfeit their souls in exchange for demonic abilities. Some do so to accomplish some mundane goal, believing that these profane powers will allow them to conquer glory or gold; others, however, do it for a more nefarious reason, expecting to fight in the blood war as generals, reincarnated as a balor after their deaths."
)

let moonspeaker = new subClass(
    "Moonspeaker",
    "Monk subclass",
    "Monks who adhere to the Moonspeaker tradition are enigmatic wanderers of the Underdark, bearing the radiant grace of their Silverhair Lady even in the shadowy realm where the Spider Queen weaves her treacherous webs. While they are not averse to combat, they often seek avenues of persuasion and diplomacy when circumstances permit. In lieu of conventional weaponry, they sculpt their very bodies into instruments of their goddess's will. Moon Speakers hold fast to a straightforward moral code that proclaims Yet, should a being spurn this opportunity, they stand ready to expunge its presence with their formidable fists."
)

let oathOfTime = new subClass(
    "Oath of Time",
    "Paladin subclass",
    "The Oath of Time is an oath as old as existence. Paladins of this oath are protectors of the timeline, weeding out and punishing those that go against the natural flow. Paladins that take this oath usually pledge themselves to the gods of time, granting them temporal privileges. At first, these paladins are not yet full agents, but will be practicing the arts of chronomancy. The gods grant them forgiveness for minor disturbances in the temporal continuum. When sufficiently trained, they become a Chronokeeper. From this point onwards, the gods will send them after the enemies of time themselves."
)

let chromaticConclave = new subClass(
    "Chromatic Conclave",
    "Ranger subclass",
    "Dragons are some of the most dangerous and incredible creatures in all the multiverse. Chromatic dragons are often destructive and greedy, while metallic dragons are more virtuous and kinder. Rangers of the Chromatic Conclave are known to worship dragons like gods. They will do anything to appease these would be gods.Some rangers only observe this conclave's teachings in the hopes of hunting dragons easier. These rangers may despise dragons or simply desire to kill these large creatures for sport. Whatever the case, the Chromatic Conclave is feared by many due to their ties with dragons."
)

let ghost = new subClass(
    "Ghost",
    "Rogue subclass",
    "Some rogues enhance their fine-honed skills of stealth and agility with the magic of the Ethereal Plane. These rogues include highly specialized assassins, spies, and thieves for hire and those already in the service of a government or large organization. Undectable, untouchable and notoriously difficult to prepare against, ghosts are exactly what they claim to be."
)

let bloodSorcerer = new subClass(
    "Blood Sorcerer",
    "Sorcerer subclass",
    "Your innate magic comes directly from the power enclosed deep within your blood. This is one of the most powerful and most dangerous sorcerous origins. The use of this magic generates an evil aura. Because of that, most don’t live long or, if they do, they succumb to the temptation. Blood magic has been banned everywhere and is even hunted down in some places. Magic users of this kind are quite rare and often considered threats."
)

let theHag = new subClass(
    "The Hag",
    "Warlock subclass",
    "Hags are strange and powerful entities, always looking to make a deal. Hags never work for free, demanding quite a heavy payment for their services, even if they favor another creature. However, they are never unfair with their dealings. They deliver what they are paid for and will seek terrifying vengeance if they are swindled. Hags love risks and experimentation, taking pleasure in the wild nature of magical brewing and alchemy. While they may seem random at times, hags never act without reason, though it could sound like a bad reason."
)

let mesmerist = new subClass(
    "Mesmerist",
    "Wizard subclass",
    "As a Mesmerist, you have learnt to channel your magical abilities into the art of the mind. Your studies have lead you towards methods of bolstering your voice with raw magic, allowing your words to strike directly into the mind of a target, twisting their judgement and corrupting their ideas to bend them to your will."
)

export const subClasses = [pathOfEnragedBrawler, artisteDeCirque, agonyDomain, circleofrainbows, abyssalKnight, moonspeaker, oathOfTime, chromaticConclave, ghost, bloodSorcerer, theHag, mesmerist]

