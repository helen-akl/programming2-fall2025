function makeStory() {
    const noun = document.getElementById("nounInput").value;
    const verb = document.getElementById("verbInput").value;
    const adjective = document.getElementById("adjectiveInput").value;
    const verb2 = document.getElementById("verb2Input").value;
    const noun2 = document.getElementById("noun2Input").value;
    const adjective2 = document.getElementById("adjective2Input").value;
    const verb3 = document.getElementById("verb3Input").value;
    const noun3 = document.getElementById("noun3Input").value;
    const emotion = document.getElementById("emotionInput").value;
    const animal = document.getElementById("animalInput").value;
    // simple story using the noun
    const story = "Once upon a time, there was a " + noun + " who loved to code JavaScript. This " + noun + " loved to " + verb + ". Unfortunatley, that didn't make him much money, so he painted a " + adjective + " painting for the King. The King loved the painting so much he " + verb2 + "himself. Weird guy. In reward, he knighted the " + noun + " and gave him a brand new " + noun2 + ". With shiny armour and the gracious gift in tow, the " + noun + " set off to find the most " + adjective2 + "princess in all of the land. The " + noun + " finally found her, but she was trapped in a " + noun3 + " with no way to escape! Wisely, the " + noun + " quickly ate the " + noun3 + " and let the princess free. Disgusted by the " + noun + "'s gluttony, the princess ran away crying. With a great amount of " + emotion + ", the" + noun + "ran back to the King and" + verb3 + " begged to return his armour. The King was emotionally unavailable, so he panicked and turned the " + noun + " into a " + animal + ". THE END." ;

    document.getElementById("storyOutput").innerText = story;
}