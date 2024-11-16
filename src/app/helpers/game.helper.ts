import { Person } from "../models/people";
import { Player } from "../models/player";
import { Starship } from "../models/starship";

export function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
}

export function peopleBattle(leftSide: Person, rightCard: Person): Player | null {
    const leftSideMass = parseFloat(leftSide.mass);
    const rightSideMass = parseFloat(rightCard.mass);
    return battle(leftSideMass, rightSideMass);
}

export function starshipsBattle(leftSide: Starship, rightCard: Starship): Player | null {
    const leftSideCrew = parseFloat(leftSide.crew);
    const rightSideCrew = parseFloat(rightCard.crew);
    return battle(leftSideCrew, rightSideCrew);
}

function battle(leftSideAttr: number, rightSideAttr: number): Player | null {
    if(leftSideAttr === rightSideAttr || isNaN(leftSideAttr) || isNaN(rightSideAttr)) {
        return null;
    }
    else if(leftSideAttr > rightSideAttr) {
        return Player.LEFT_SIDE
    }
    else {
        return Player.RIGHT_SIDE
    }
}