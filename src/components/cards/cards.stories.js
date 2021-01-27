import "./cards.css";
import cardOffers from "./card-offers.html";
import cardItalian from "./card-italian.html";
import cardMexican from "./card-mexican.html";
import cardArabic from "./card-arabic.html";
import cardGreek from "./card-greek.html";
import cardIndian from "./card-indian.html";
import cardContainer from "./card-container.html";



export default {
  title: "Components/Cards",
  parameters: { layout: "centered" },
};

export const offersCard = () => cardOffers;
export const italianCard = () => cardItalian;
export const mexicanCard = () => cardMexican;
export const arabicCard = () => cardArabic;
export const greekCard = () => cardGreek;
export const indianCard = () => cardIndian;
export const container = () => cardContainer;
container.parameters = {layout:"fullscreen"};