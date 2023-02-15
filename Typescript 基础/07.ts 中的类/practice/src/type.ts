import { Color, Figure } from "./enum";

export interface FuncCard {
    getString(): string;
}

export interface NormalCard extends FuncCard {
    color: Color;
    figure: Figure;
};

export interface Joker extends FuncCard {
    type: "big" | "small";
}

export type Card = FuncCard[];