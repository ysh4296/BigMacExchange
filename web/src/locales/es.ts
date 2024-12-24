import { Country } from './country/es';

console.log('Loaded ES');

export default {
    MainTitle: 'Big Mac Exchange',
    MainDescription: '¡Verifica el valor de las monedas a través del Big Mac!',
    MetaTitle:
        'Big Mac Exchange - Descubre el valor real de las monedas a través del Índice Big Mac',
    MetaDescription:
        'Descubre el valor real de las monedas a través del Índice Big Mac, usando el poder adquisitivo (PPP). ¡Comienza tu comparación ahora!',
    Convert: 'Convertir',
    Amount: 'Cantidad',
    from: 'De',
    to: 'A',
    BigMacIndexTitle: '¿Qué es el Índice Big Mac?',
    BigMacIndexDescription:
        'El Índice Big Mac es un indicador divertido que compara el poder adquisitivo de las monedas usando el precio de un Big Mac en cada país. ¡Prepárate para tu viaje y compara de un vistazo los “valores reales” de las monedas!',
    BigMacIndexDescription2:
        'Los precios del Big Mac pueden variar según las condiciones institucionales de cada país. Por lo tanto, los precios del Big Mac deben usarse solo como referencia.',
    BigMacIndexDescription3:
        'El Índice Big Mac utiliza datos proporcionados por The Economist. Datos vigentes al "2024-07-01".',
    SelectCountry: 'Selecciona un país',
    SelectLocale: 'Selecciona un idioma',
    ConvertBoxPlaceholder:
        '¡Verifica el valor de la moneda a través del Big Mac!',
    fromPrefix: 'en {country}',
    fromPostfix: 'es',
    MacPrefix: 'se puede comprar por',
    MacPostfix: 'en Macdonalds',
    toPrefix: 'igual a {country} a',
    toPostfix: ' ',
    ...Country,
} as const;
