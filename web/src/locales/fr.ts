import { Country } from './country/fr';

console.log('Loaded FR');

export default {
    MainTitle: 'Big Mac Exchange',
    MainDescription: 'Découvrez la valeur des devises grâce au Big Mac !',
    MetaTitle:
        "Big Mac Exchange - Découvrez la valeur réelle des devises grâce à l'indice Big Mac",
    MetaDescription:
        "Découvrez la valeur réelle des devises grâce à l'indice Big Mac, en utilisant le pouvoir d'achat (PPP). Commencez votre comparaison maintenant !",
    Convert: 'Convertir',
    Amount: 'Montant',
    from: 'De',
    to: 'À',
    BigMacIndexTitle: "Qu'est-ce que l'indice Big Mac ?",
    BigMacIndexDescription:
        "L'indice Big Mac est un indicateur amusant qui compare le pouvoir d'achat des devises en utilisant le prix d'un Big Mac dans chaque pays. Préparez votre voyage et comparez facilement la \"valeur réelle\" des devises !",
    BigMacIndexDescription2:
        'Les prix du Big Mac peuvent varier en fonction des conditions institutionnelles de chaque pays. Par conséquent, les prix du Big Mac doivent être utilisés uniquement à titre de référence.',
    BigMacIndexDescription3:
        'L’indice Big Mac utilise des données fournies par The Economist. Données en date du « 2024-07-01 ».',
    SelectCountry: 'Sélectionnez un pays',
    SelectLocale: 'Sélectionnez une langue',
    ConvertBoxPlaceholder: 'Découvrez la valeur des devises grâce au Big Mac !',
    fromPrefix: 'en {country}',
    fromPostfix: 'est',
    MacPrefix: 'peut être acheté pour',
    MacPostfix: 'à Macdonalds',
    toPrefix: 'équivalent à {country} à',
    toPostfix: ' ',
    ...Country,
} as const;
