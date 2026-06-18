const messages = [
    "Wsp?",
    "Modding is cool.",
    "Cheating is mean.",
    "My cat is a dog.",
    "You're genuinly valued.",
]

const titles = [
    "Extendable Menu",
    "Amanda Extensions"
]
const description = [
    "Extendable Menu is a menu that other mods add on to externally.<p>I will maybe make documentations on how to add your own mods later, however I don't use obfuscation so you may be able to decompile it and find out.<p>The default hotkey is [`] but it is configurable inside of the menu's config file.<p>This mod's only dependancy is BepInEx.<p><a href='files/ExtendableMenu/1.1.1/Extendable.Menu.Net35.dll'>Download 1.1.1 Net35</a> | <a href='files/ExtendableMenu/1.1.1/Extendable.Menu.Net48.dll'>Download 1.1.1 Net48</a><p><a href='files/ExtendableMenu/1.1.0/Extendable.Menu.dll'>Download 1.1.0</a><p><a href='files/ExtendableMenu/1.0.0/Extendable.Menu.dll'>Download 1.0.0</a>",
    "Amanda Extensions are some mods for Amanda the Adventurer (the first one) for Extendable Menu.<p>Currently, the mods are: Object Minigun, Grab Random Object, Load Random Tape, Force Eject Tape, Unlock All Stickers, Piano Spam, Enable All Tapes, Summon All Tapes and Spawn Wooly Secret Tape<p>This mod depends on BepInEx and Extendable Menu<p><a href='files/AmandaExtensions/1.0.0/Amanda.Extensions.dll'>Download 1.0.0</a>"
]

document.getElementsByClassName("shortdescription")[0].textContent = messages[Math.floor(Math.random() * messages.length)];

const id = location.href.substr(location.href.lastIndexOf("?")+1);
document.getElementsByClassName("title")[1].textContent = titles[id];
document.getElementsByClassName("shortdescription")[1].innerHTML = description[id];
