import { getRandomNumber, peopleBattle, starshipsBattle } from './game.helper';
import { Person } from '../models/people';
import { Starship } from '../models/starship';
import { Player } from '../models/player';

describe('Helper Functions', () => {
  describe('getRandomNumber', () => {
    it('should return a number between 0 and max', () => {
      const max = 10;
      for (let i = 0; i < 100; i++) {
        const result = getRandomNumber(max);
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThan(max);
      }
    });
  });

  describe('peopleBattle', () => {
    it('should return LEFT_SIDE when left side mass is greater', () => {
      const leftPerson: Person = { name: 'Luke', mass: '80' } as Person;
      const rightPerson: Person = { name: 'Leia', mass: '60' } as Person;

      const result = peopleBattle(leftPerson, rightPerson);
      expect(result).toBe(Player.LEFT_SIDE);
    });

    it('should return RIGHT_SIDE when right side mass is greater', () => {
      const leftPerson: Person = { name: 'Luke', mass: '60' } as Person;
      const rightPerson: Person = { name: 'Leia', mass: '80' } as Person;

      const result = peopleBattle(leftPerson, rightPerson);
      expect(result).toBe(Player.RIGHT_SIDE);
    });

    it('should return null for equal masses', () => {
      const leftPerson: Person = { name: 'Luke', mass: '70' } as Person;
      const rightPerson: Person = { name: 'Leia', mass: '70' } as Person;

      const result = peopleBattle(leftPerson, rightPerson);
      expect(result).toBeNull();
    });

    it('should return null for invalid masses', () => {
      const leftPerson: Person = { name: 'Luke', mass: 'unknown' } as Person;
      const rightPerson: Person = { name: 'Leia', mass: '60' } as Person;

      const result = peopleBattle(leftPerson, rightPerson);
      expect(result).toBeNull();
    });
  });

  describe('starshipsBattle', () => {
    it('should return LEFT_SIDE when left side crew is greater', () => {
      const leftStarship: Starship = { name: 'Death Star', crew: '10' } as Starship;
      const rightStarship: Starship = { name: 'TIE Fighter', crew: '5' } as Starship;

      const result = starshipsBattle(leftStarship, rightStarship);
      expect(result).toBe(Player.LEFT_SIDE);
    });

    it('should return RIGHT_SIDE when right side crew is greater', () => {
      const leftStarship: Starship = { name: 'Death Star', crew: '5' } as Starship;
      const rightStarship: Starship = { name: 'TIE Fighter', crew: '10' } as Starship;

      const result = starshipsBattle(leftStarship, rightStarship);
      expect(result).toBe(Player.RIGHT_SIDE);
    });

    it('should return null for equal crew counts', () => {
      const leftStarship: Starship = { name: 'Death Star', crew: '10' } as Starship;
      const rightStarship: Starship = { name: 'TIE Fighter', crew: '10' } as Starship;

      const result = starshipsBattle(leftStarship, rightStarship);
      expect(result).toBeNull();
    });

    it('should return null for invalid crew values', () => {
      const leftStarship: Starship = { name: 'Death Star', crew: 'unknown' } as Starship;
      const rightStarship: Starship = { name: 'TIE Fighter', crew: '10' } as Starship;

      const result = starshipsBattle(leftStarship, rightStarship);
      expect(result).toBeNull();
    });
  });
});
