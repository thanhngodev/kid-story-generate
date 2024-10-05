/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut style: story of boy and Magic School , give me 5 chapter, With detailed image text prompt for each of chapter and image prompt for story cover book with story name , all in JSON field format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "story_name": "The Boy Who Found Magic School",\n  "cover_image": {\n    "description": "A paper-cut illustration of a young boy, with bright eyes and a curious smile, standing in front of a magical school. The school is a whimsical building with a swirling, colorful roof, a giant keyhole entrance, and a sign that reads \'Magic School\' in sparkling letters.",\n    "style": "Paper cut, whimsical, colorful"\n  },\n  "chapters": [\n    {\n      "chapter_title": "The Lost Button",\n      "text": "Once upon a time, there lived a boy named Leo. He loved exploring the woods behind his house, searching for treasures. One day, while playing hide-and-seek with his dog, Sparky, he stumbled upon a shiny, golden button hidden under a bush. It was unlike any button he\'d ever seen. It shimmered with an otherworldly glow.",\n      "image": {\n        "description": "A paper-cut scene of Leo, a young boy with brown hair and curious eyes, kneeling in the woods. He\'s holding a golden button that\'s glowing softly. Sparky, a playful dog with floppy ears, is sniffing around nearby.",\n        "style": "Paper cut, realistic, with a touch of whimsy"\n      }\n    },\n    {\n      "chapter_title": "A Door to Wonder",\n      "text": "As Leo held the button, a warm light spread through his hands. He felt a pull, an invisible force urging him forward. Following his instincts, he walked deeper into the woods. Suddenly, a clearing appeared, bathed in golden light. In the center stood a magnificent school, unlike any he\'d seen before. It had a swirling, colorful roof, a giant keyhole entrance, and a sign that read \'Magic School\' in sparkling letters.",\n      "image": {\n        "description": "A paper-cut scene of Leo standing in awe, staring at the magical school. The school is a whimsical building with a swirling, colorful roof, a giant keyhole entrance, and a sign that reads \'Magic School\' in sparkling letters. The clearing is bathed in golden light, and a few magical creatures, such as fairies and a talking squirrel, can be seen peeking from behind trees.",\n        "style": "Paper cut, whimsical, vibrant colors"\n      }\n    },\n    {\n      "chapter_title": "Lessons in Magic",\n      "text": "The golden button unlocked the giant keyhole, and Leo found himself inside the Magic School. Inside, he met a wise old owl named Professor Hoot, who welcomed him with a warm smile.  Leo learned about magic spells, potions, and how to talk to animals. He even made new friends, a mischievous gnome named Pip and a friendly dragon named Sparky (no relation to his dog!).",\n      "image": {\n        "description": "A paper-cut scene inside the Magic School. Professor Hoot, a wise old owl with spectacles, is teaching Leo and his new friends, Pip the gnome and Sparky the dragon, about magic spells. The classroom is filled with books, bubbling potions, and magical objects.",\n        "style": "Paper cut, whimsical, vibrant colors"\n      }\n    },\n    {\n      "chapter_title": "The Challenge of the Whispering Woods",\n      "text": "One day, the Whispering Woods, a dark and mysterious part of the forest, began to whisper strange, unsettling things. Professor Hoot explained that a powerful shadow had taken control of the woods. Leo, along with his friends, decided to venture into the woods and use their newly learned magic to fight the shadow.",\n      "image": {\n        "description": "A paper-cut scene of Leo, Pip, and Sparky standing bravely in the dark Whispering Woods. The trees are twisted and gnarled, and shadows dance ominously around them. The woods whisper strange and unsettling things, and a shadowy figure can be seen lurking in the distance.",\n        "style": "Paper cut, dark and mysterious, with hints of magic"\n      }\n    },\n    {\n      "chapter_title": "A Bright Future",\n      "text": "With their combined magical powers, Leo and his friends defeated the shadow and restored peace to the Whispering Woods. They returned to the Magic School, heroes in their own right. Leo learned that even the smallest, most ordinary things, like a golden button, could hold extraordinary magic. From that day on, Leo continued to learn and grow at Magic School, always embracing the wonder and magic that surrounded him.",\n      "image": {\n        "description": "A paper-cut scene of Leo, Pip, and Sparky celebrating their victory in the Whispering Woods. The sun shines brightly, and the trees have regained their normal colors. They are surrounded by happy magical creatures, and Professor Hoot is beaming proudly.",\n        "style": "Paper cut, whimsical, with bright and positive colors"\n      }\n    }\n  ]\n}\n``` \n',
        },
      ],
    },
  ],
});
