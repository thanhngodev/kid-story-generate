const dataImgList = [
  "/hero.png",
  "/educational.png",
  "/bed-story.png",
  "/3D.png",
  "/paper-cut.png",
];

export function getRandomImage(): string {
  const randomIndex = Math.floor(Math.random() * dataImgList.length);
  return dataImgList[randomIndex];
}
