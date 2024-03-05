function background(imageUrl, background, description, skills, tools, languages,equipment) {
    this.image = imageUrl,
    this.background = background, 
    this.description = description, 
    this.skills = skills, 
    this.tools = tools,
    this.languages = languages,
    this.equipment = equipment
}

let acolyte = new background(
    "./img/acolyte.png",
    "Acolyte", 
    "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric – performing sacred rites is not the same thing as channeling divine power.",
    "Insight, Religion",
    "None",
    "Two of your choice",
    "A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15gp"
)

let criminal = new background(
    "./img/criminal.png",
    "Criminal",
    "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You're far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.",
    "Deception, Stealth",
    "One type of gaming set, thieves tools",
    "None",
    "A crowbar, a set of dark common clothes including a hood, and a pouch containing 15gp"
)

let entertainer = new background(
    "./img/entertainer.png",
    "Entertainer",
    "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.",
    "Acrobatics, Performance",
    "Disguise kit, one type of musical instrument",
    "None",
    "A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), a costume, and a pouch containing 15gp"
)

let pirate = new background(
    "./img/pirate.png",
    "Pirate",
    "You spent your youth under the sway of a dread pirate, a ruthless cutthroat who taught you how to survive in a world of sharks and savages. You've indulged in larceny on the high seas and sent more than one deserving soul to a briny grave. Fear and bloodshed are no strangers to you, and you've garnered a somewhat unsavory reputation in many a port town.",
    "Athletics, Perception",
    "Navigator's tools, vehicles (water)",
    "None",
    "A belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5), a set of common clothes, and a pouch containing 10gp"
)

let noble = new background(
    "./img/noble.png",
    "Noble",
    "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them.",
    "History, Persuasion",
    "One type of gaming set",
    "One of your choice",
    "A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25gp" 
)

let soldier = new background(
    "./img/soldier.png",
    "Soldier",
    "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.",
    "Athletics, Intimidation",
    "One type of gaming set, vehicles (land)",
    "None",
    "An insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner), a set of bone dice or a deck of cards, a set of common clothes, and a pouch containing 10gp"
)

export const backgrounds = [acolyte, criminal, entertainer, pirate, noble, soldier]