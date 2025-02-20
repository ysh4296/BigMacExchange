import { Country } from './country/ja';

console.log('Loaded JP');

export default {
    MainTitle: 'ビッグマックエクスチェンジ',
    MainDescription: 'ビッグマックを通じて各通貨の価値を確認しましょう！',
    MetaTitle:
        'ビッグマックエクスチェンジ - ビッグマック指数計算機を使用して通貨の実際の価値を確認',
    MetaDescription:
        'ビッグマック指数計算機を使用して、世界各国の通貨の実際の価値を計算し、比較しましょう！',
    Convert: '換算',
    Amount: '金額',
    from: 'から',
    to: 'へ',
    BigMacIndexTitle: 'ビッグマック指数とは？',
    BigMacIndexDescription:
        'ビッグマック指数は、各国のビッグマック価格を用いて通貨の購買力を比較する面白い指標です。旅行の準備に役立て、二つの通貨の「実際の価値」を一目で確認しましょう！',
    BigMacIndexDescription2:
        'ビッグマックの価格は各国の制度状況により異なる場合があります。そのため、ビッグマックの価格はあくまで参考用としてご利用ください。',
    BigMacIndexDescription3:
        'ビッグマック指数はエコノミストが提供するデータを使用しています。「2024-07-01」基準のデータを使用しています。',
    SelectCountry: '国を選択してください',
    SelectLocale: '言語を選択してください',
    ConvertBoxPlaceholder: 'ビッグマックで通貨価値を確認しましょう！',
    fromPrefix: '{country}で',
    fromPostfix: 'です',
    MacPrefix: 'で購入できます',
    MacPostfix: 'マクドナルドで',
    toPrefix: '{country}への同じ',
    toPostfix: 'です',
    ...Country,
} as const;
