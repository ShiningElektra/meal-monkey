import "./cards.css";
import cardOffers from "./card-offers.html";
import cardItalian from "./card-italian.html";
import cardMexican from "./card-mexican.html";


export default {
  title: "Components/Cards",
  parameters: { layout: "centered" },
};

export const offersCard = () => cardOffers;
export const italianCard = () => cardItalian;
export const mexicanCard = () => cardMexican;
