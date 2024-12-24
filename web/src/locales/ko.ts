import { Country } from './country/ko';

console.log('Loaded KO');

export default {
    MainTitle: '빅맥 환산기',
    MainDescription: '빅맥을 통해 각 화폐의 가치를 확인하세요!',
    MetaTitle: '빅맥 교환 - 빅맥 지수 계산기를 통해 실제 화폐 가치 확인하기',
    MetaDescription:
        '빅맥 지수 계산기를 사용하여 세계 각 나라의 화폐 실제 가치를 계산하고 비교하세요.',
    Convert: '환전',
    Amount: '금액',
    from: '~에서',
    to: '~으로',
    BigMacIndexTitle: '빅맥 지수란?',
    BigMacIndexDescription:
        '빅맥 지수는 각 나라의 빅맥 가격으로 화폐의 구매력을 비교하는 재미있는 지표입니다. 여행을 준비하며 두 나라의 화폐 "실제 가치"를 한눈에 알아보세요!',
    BigMacIndexDescription2:
        '빅맥 가격은 각나의 제도 상황에 따라 다르게 표시될 수 있습니다. 따라서 빅맥 가격은 오직 참고용으로 사용해주세요.',
    BigMacIndexDescription3:
        '빅맥 지수는 이코노믹스에서 제공하는 데이터를 사용하고 있습니다. "2024-07-01" 기준으로 데이터를 사용하고 있습니다.',
    SelectCountry: '국가를 선택하세요',
    SelectLocale: '언어를 선택하세요',
    ConvertBoxPlaceholder: '빅맥을 통해 화폐가치를 확인하세요!',
    fromPrefix: '{country}에서',
    fromPostfix: '는',
    MacPrefix: '맥도날드에서',
    MacPostfix: '를 살수 있고',
    toPrefix: '{country}의',
    toPostfix: '와 동일합니다.',
    ...Country,
} as const;
