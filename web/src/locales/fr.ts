import { Country } from './country/fr';
import { Language } from './language/fr';
console.log('Loaded FR');

export default {
    MainTitle: 'Big Mac Exchange',
    MainDescription: 'Découvrez la valeur des devises grâce au Big Mac !',
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
    ...Country,
    ...Language,
} as const;
