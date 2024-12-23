import { Country } from './country/de';

console.log('Loaded DE');
export default {
    MainTitle: 'Big Mac Exchange',
    MainDescription:
        'Überprüfen Sie den Wert von Währungen anhand des Big Macs!',
    Convert: 'Umrechnen',
    Amount: 'Betrag',
    from: 'Von',
    to: 'Zu',
    BigMacIndexTitle: 'Was ist der Big Mac Index?',
    BigMacIndexDescription:
        'Der Big Mac Index ist ein lustiger Indikator, der die Kaufkraft von Währungen anhand des Preises eines Big Macs in jedem Land vergleicht. Bereiten Sie Ihre Reise vor und vergleichen Sie die „realen Werte“ von Währungen auf einen Blick!',
    BigMacIndexDescription2:
        'Die Preise für den Big Mac können je nach den institutionellen Bedingungen in jedem Land variieren. Daher sollten die Big Mac-Preise nur als Referenz verwendet werden.',
    BigMacIndexDescription3:
        'Der Big Mac Index verwendet Daten, die von The Economist bereitgestellt werden. Stand der Daten: „2024-07-01“.',
    SelectCountry: 'Wählen Sie ein Land',
    SelectLocale: 'Wählen Sie eine Sprache',
    ConvertBoxPlaceholder:
        'Überprüfen Sie den Währungswert anhand des Big Macs!',
    ...Country,
} as const;
