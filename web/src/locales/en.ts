import { Country } from './country/en';

console.log('Loaded EN');

export default {
    MainTitle: 'Big Mac Exchange',
    MainDescription: 'Check the value of currencies through the Big Mac!',
    MetaTitle:
        'Big Mac Exchange - Discover Real Currency Value with the Big Mac Index Calculator',
    MetaDescription:
        'Calculate the real value of currencies worldwide with the Big Mac Index Calculator, using purchasing power parity (PPP). Start your comparison now!',
    Convert: 'Convert',
    Amount: 'Amount',
    from: 'From',
    to: 'To',
    BigMacIndexTitle: 'What is the Big Mac Index?',
    BigMacIndexDescription:
        'The Big Mac Index is a fun indicator that compares the purchasing power of currencies using the price of a Big Mac in each country. Easily compare the "real value" of currencies when preparing for your trip!',
    BigMacIndexDescription2:
        'Big Mac prices may vary depending on the institutional conditions of each country. Therefore, Big Mac prices should only be used as a reference.',
    BigMacIndexDescription3:
        'The Big Mac Index uses data provided by The Economist as of "2024-07-01."',
    SelectCountry: 'Select a country',
    SelectLocale: 'Select a language',
    ConvertBoxPlaceholder: 'Check currency values through the Big Mac!',
    fromPrefix: 'at {country}',
    fromPostfix: 'is',
    MacPrefix: 'can be bought for',
    MacPostfix: 'at Macdonalds',
    toPrefix: 'same as {country} to',
    toPostfix: ' ',
    ...Country,
} as const;
