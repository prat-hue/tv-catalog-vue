import { describe, it, expect } from "vitest";
import { uniqueBy } from 'src/utils/uniqueBy'

describe('#Unique by', () => {
    it('should give unique values in array', () => {
        const testData = [
            {
                id: 0,
                genres: ['GenreA', 'GenreB', 'GenreA']
            },
            {
                id: 1,
                genres: ['GenreB', 'GenreB', 'GenreC']
            }
        ]
        const result = uniqueBy(testData, 'genres')
        expect(result).toEqual(['GenreA', 'GenreB', 'GenreC'])
    });
    it('should return empty array if no element exists', () => {
        const testData = [
            {
                id: 0,
                genres: ['GenreA', 'GenreB', 'GenreA']
            },
            {
                id: 1,
                genres: ['GenreB', 'GenreB', 'GenreC']
            }
        ]
        const result = uniqueBy(testData, 'NOGenres')
        expect(result).toEqual([])
    })
})
