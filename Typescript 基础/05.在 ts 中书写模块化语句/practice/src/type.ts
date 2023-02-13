import { Color, Figure } from "./enum";
export type NormalCard = {
    color: Color;
    figure: Figure;
};
export type Card = NormalCard[];