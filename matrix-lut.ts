/* ------------------------------------------------------------------
 * --  _____       ______  _____                                    -
 * -- |_   _|     |  ____|/ ____|                                   -
 * --   | |  _ __ | |__  | (___    Institute of Embedded Systems    -
 * --   | | | '_ \|  __|  \___ \   Zurich University of             -
 * --  _| |_| | | | |____ ____) |  Applied Sciences                 -
 * -- |_____|_| |_|______|_____/   8401 Winterthur, Switzerland     -
 * ------------------------------------------------------------------
 * --
 * -- File:	    matrix-lut.ts
 * -- Project:  micro:bit InES Matrix
 * -- Date:	    16.12.2024
 * -- Author:   vore, hesu, ebep
 * --
 * ------------------------------------------------------------------
 */

namespace Lumatrix {
    /* Simple 8x8 font */
    /* TODO: Text Font need to be reworked. */
    export let textFont: { [char: string]: number[] } = {
        /* Uppercase letters map */
        'A': [0b00000000, 0b00011000, 0b00100100, 0b01000010, 0b01111110, 0b01000010, 0b01000010, 0b00000000],
        'B': [0b00000000, 0b01111000, 0b01000100, 0b01111000, 0b01000100, 0b01000100, 0b01111000, 0b00000000],
        'C': [0b00000000, 0b00111100, 0b01000010, 0b01000000, 0b01000000, 0b01000010, 0b00111100, 0b00000000],
        'D': [0b00000000, 0b01111000, 0b01000100, 0b01000010, 0b01000010, 0b01000100, 0b01111000, 0b00000000],
        'E': [0b00000000, 0b01111110, 0b01000000, 0b01111000, 0b01000000, 0b01000000, 0b01111110, 0b00000000],
        'F': [0b00000000, 0b01111110, 0b01000000, 0b01111000, 0b01000000, 0b01000000, 0b01000000, 0b00000000],
        'G': [0b00000000, 0b00111100, 0b01000010, 0b01000000, 0b01001110, 0b01000010, 0b00111100, 0b00000000],
        'H': [0b00000000, 0b01000010, 0b01000010, 0b01111110, 0b01000010, 0b01000010, 0b01000010, 0b00000000],
        'I': [0b00000000, 0b00111100, 0b00011000, 0b00011000, 0b00011000, 0b00011000, 0b00111100, 0b00000000],
        'J': [0b00000000, 0b00011110, 0b00000100, 0b00000100, 0b00000100, 0b01000100, 0b00111000, 0b00000000],
        'K': [0b00000000, 0b01000010, 0b01000100, 0b01001000, 0b01110000, 0b01001000, 0b01000100, 0b00000000],
        'L': [0b00000000, 0b01000000, 0b01000000, 0b01000000, 0b01000000, 0b01000000, 0b01111110, 0b00000000],
        'M': [0b00000000, 0b01000010, 0b01100110, 0b01011010, 0b01000010, 0b01000010, 0b01000010, 0b00000000],
        'N': [0b00000000, 0b01000010, 0b01100010, 0b01010010, 0b01001010, 0b01000110, 0b01000010, 0b00000000],
        'O': [0b00000000, 0b00111100, 0b01000010, 0b01000010, 0b01000010, 0b01000010, 0b00111100, 0b00000000],
        'P': [0b00000000, 0b01111000, 0b01000100, 0b01000100, 0b01111000, 0b01000000, 0b01000000, 0b00000000],
        'Q': [0b00000000, 0b00111100, 0b01000010, 0b01000010, 0b01001010, 0b01000100, 0b00111010, 0b00000000],
        'R': [0b00000000, 0b01111000, 0b01000100, 0b01000100, 0b01111000, 0b01001000, 0b01000100, 0b00000000],
        'S': [0b00000000, 0b00111100, 0b01000010, 0b00110000, 0b00001100, 0b01000010, 0b00111100, 0b00000000],
        'T': [0b00000000, 0b01111110, 0b00011000, 0b00011000, 0b00011000, 0b00011000, 0b00011000, 0b00000000],
        'U': [0b00000000, 0b01000010, 0b01000010, 0b01000010, 0b01000010, 0b01000010, 0b00111100, 0b00000000],
        'V': [0b00000000, 0b01000010, 0b01000010, 0b01000010, 0b00100100, 0b00100100, 0b00011000, 0b00000000],
        'W': [0b00000000, 0b01000010, 0b01000010, 0b01000010, 0b01011010, 0b01100110, 0b01000010, 0b00000000],
        'X': [0b00000000, 0b01000010, 0b00100100, 0b00011000, 0b00011000, 0b00100100, 0b01000010, 0b00000000],
        'Y': [0b00000000, 0b01000010, 0b00100100, 0b00011000, 0b00011000, 0b00011000, 0b00011000, 0b00000000],
        'Z': [0b00000000, 0b01111110, 0b00000100, 0b00001000, 0b00010000, 0b00100000, 0b01111110, 0b00000000],
        ' ': [0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000],
        /* Lowercase letters map */
        'a': [0b00000000, 0b00000000, 0b00111100, 0b00000010, 0b00111110, 0b01000010, 0b00111110, 0b00000000],
        'b': [0b00000000, 0b01000000, 0b01000000, 0b01111100, 0b01000010, 0b01000010, 0b01111100, 0b00000000],
        'c': [0b00000000, 0b00000000, 0b00111100, 0b01000000, 0b01000000, 0b01000010, 0b00111100, 0b00000000],
        'd': [0b00000000, 0b00000010, 0b00000010, 0b00111110, 0b01000010, 0b01000010, 0b00111110, 0b00000000],
        'e': [0b00000000, 0b00000000, 0b00111100, 0b01000010, 0b01111110, 0b01000000, 0b00111100, 0b00000000],
        'f': [0b00000000, 0b00001100, 0b00010010, 0b00010000, 0b01111100, 0b00010000, 0b00010000, 0b00000000],
        'g': [0b00000000, 0b00000000, 0b00111110, 0b01000010, 0b00111110, 0b00000010, 0b01111100, 0b00000000],
        'h': [0b00000000, 0b01000000, 0b01000000, 0b01111100, 0b01000010, 0b01000010, 0b01000010, 0b00000000],
        'i': [0b00000000, 0b00000000, 0b00011000, 0b00000000, 0b00111000, 0b00001000, 0b00111100, 0b00000000],
        'j': [0b00000000, 0b00000000, 0b00001100, 0b00000000, 0b00011100, 0b00000100, 0b00111100, 0b00000000],
        'k': [0b00000000, 0b01000000, 0b01000010, 0b01000100, 0b01111000, 0b01000100, 0b01000010, 0b00000000],
        'l': [0b00000000, 0b00110000, 0b00001000, 0b00001000, 0b00001000, 0b00001000, 0b00111100, 0b00000000],
        'm': [0b00000000, 0b00000000, 0b01100100, 0b01011010, 0b01000010, 0b01000010, 0b01000010, 0b00000000],
        'n': [0b00000000, 0b00000000, 0b01111000, 0b01000100, 0b01000100, 0b01000100, 0b01000100, 0b00000000],
        'o': [0b00000000, 0b00000000, 0b00111100, 0b01000010, 0b01000010, 0b01000010, 0b00111100, 0b00000000],
        'p': [0b00000000, 0b00000000, 0b01111100, 0b01000010, 0b01111100, 0b01000000, 0b01000000, 0b00000000],
        'q': [0b00000000, 0b00000000, 0b00111110, 0b01000010, 0b00111110, 0b00000010, 0b00000010, 0b00000000],
        'r': [0b00000000, 0b00000000, 0b01011100, 0b01100010, 0b01000000, 0b01000000, 0b01000000, 0b00000000],
        's': [0b00000000, 0b00000000, 0b00111110, 0b01000000, 0b00111100, 0b00000010, 0b01111100, 0b00000000],
        't': [0b00000000, 0b00000000, 0b00010000, 0b01111100, 0b00010000, 0b00010010, 0b00001100, 0b00000000],
        'u': [0b00000000, 0b00000000, 0b01000010, 0b01000010, 0b01000010, 0b01000110, 0b00111010, 0b00000000],
        'v': [0b00000000, 0b00000000, 0b01000010, 0b01000010, 0b00100100, 0b00100100, 0b00011000, 0b00000000],
        'w': [0b00000000, 0b00000000, 0b01000010, 0b01000010, 0b01011010, 0b01100110, 0b01000010, 0b00000000],
        'x': [0b00000000, 0b00000000, 0b01000010, 0b00100100, 0b00011000, 0b00100100, 0b01000010, 0b00000000],
        'y': [0b00000000, 0b00000000, 0b01000010, 0b01000010, 0b00111110, 0b00000010, 0b00111100, 0b00000000],
        'z': [0b00000000, 0b00000000, 0b01111110, 0b00000100, 0b00001000, 0b00100000, 0b01111110, 0b00000000],
        /* Number map */
        '0': [0b00000000, 0b00111100, 0b01000010, 0b01000110, 0b01001010, 0b01010010, 0b00111100, 0b00000000],
        '1': [0b00000000, 0b00011000, 0b00101000, 0b00001000, 0b00001000, 0b00001000, 0b01111110, 0b00000000],
        '2': [0b00000000, 0b00111100, 0b01000010, 0b00000010, 0b00011100, 0b00100000, 0b01111110, 0b00000000],
        '3': [0b00000000, 0b00111100, 0b01000010, 0b00001100, 0b00000010, 0b01000010, 0b00111100, 0b00000000],
        '4': [0b00000000, 0b00000100, 0b00001100, 0b00010100, 0b00100100, 0b01111110, 0b00000100, 0b00000000],
        '5': [0b00000000, 0b01111110, 0b01000000, 0b01111100, 0b00000010, 0b01000010, 0b00111100, 0b00000000],
        '6': [0b00000000, 0b00111100, 0b01000000, 0b01111100, 0b01000010, 0b01000010, 0b00111100, 0b00000000],
        '7': [0b00000000, 0b01111110, 0b00000010, 0b00000100, 0b00001000, 0b00010000, 0b00100000, 0b00000000],
        '8': [0b00000000, 0b00111100, 0b01000010, 0b00111100, 0b01000010, 0b01000010, 0b00111100, 0b00000000],
        '9': [0b00000000, 0b00111100, 0b01000010, 0b00111110, 0b00000010, 0b01000010, 0b00111100, 0b00000000],
        /* Symbols map */
        '(': [0b00000000, 0b00001100, 0b00010000, 0b00100000, 0b00100000, 0b00010000, 0b00001100, 0b00000000],
        ')': [0b00000000, 0b00110000, 0b00001000, 0b00000100, 0b00000100, 0b00001000, 0b00110000, 0b00000000],
        ':': [0b00000000, 0b00000000, 0b00011000, 0b00011000, 0b00000000, 0b00011000, 0b00011000, 0b00000000],
        ';': [0b00000000, 0b00000000, 0b00011000, 0b00011000, 0b00000000, 0b00011000, 0b00001000, 0b00010000],
        '.': [0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00011000, 0b00011000, 0b00000000],
        ',': [0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00000000, 0b00011000, 0b00001000, 0b00010000],
        '!': [0b00000000, 0b00011000, 0b00011000, 0b00011000, 0b00011000, 0b00000000, 0b00011000, 0b00000000],
        '?': [0b00000000, 0b00111100, 0b01000010, 0b00000100, 0b00001000, 0b00000000, 0b00001000, 0b00000000],
    };


    /* WORD CLOCK */
    export let wordClockMappings: { [key: string]: number[][] } = {
        'ONE': [
            [1, 7],
            [4, 7],
            [7, 7]
        ],
        'TWO': [
            [0, 6],
            [1, 6],
            [1, 7]
        ],
        'THREE': [
            [3, 5],
            [4, 5],
            [5, 5],
            [6, 5],
            [7, 5]
        ],
        'FOUR': [
            [0, 7],
            [1, 7],
            [2, 7],
            [3, 7]
        ],
        'HOUR_FIVE': [
            [0, 4],
            [1, 4],
            [2, 4],
            [3, 4]
        ],
        'MIN_FIVE': [
            [4, 2],
            [5, 2],
            [6, 2],
            [7, 2]
        ],
        'SIX': [
            [0, 5],
            [1, 5],
            [2, 5]
        ],
        'SEVEN': [
            [0, 5],
            [4, 6],
            [5, 6],
            [6, 6],
            [7, 6]
        ],
        'EIGHT': [
            [3, 4],
            [4, 4],
            [5, 4],
            [6, 4],
            [7, 4]
        ],
        'NINE': [
            [4, 7],
            [5, 7],
            [6, 7],
            [7, 7]
        ],
        'HOUR_TEN': [
            [7, 4],
            [7, 5],
            [7, 6]
        ],
        'MIN_TEN': [
            [2, 0],
            [4, 0],
            [5, 0]
        ],
        'ELEVEN': [
            [2, 6],
            [3, 6],
            [4, 6],
            [5, 6],
            [6, 6],
            [7, 6]
        ],
        'TWELVE': [
            [0, 6],
            [1, 6],
            [2, 6],
            [3, 6],
            [5, 6],
            [6, 6]
        ],
        'QUARTER': [
            [1, 1],
            [2, 1],
            [3, 1],
            [4, 1],
            [5, 1],
            [6, 1],
            [7, 1]
        ],
        'TWENTY': [
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0]
        ],
        'TWENTY_FIVE': [ // currently not used
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0],
            [4, 2],
            [5, 2]
            // [6, 2], // Not enough memory to display this word
            // [7, 2]
        ],
        'HALF': [
            [1, 2],
            [2, 2],
            [3, 2],
            [4, 2]
        ],
        'PAST': [
            [2, 3],
            [3, 3],
            [4, 3],
            [5, 3]
        ],
        'TO': [
            [5, 3],
            [6, 3]
        ],
        'ZHAW': [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3]
        ]
    };
}
