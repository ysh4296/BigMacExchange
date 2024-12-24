import { Country } from './country/zh';

console.log('Loaded ZH-CN');

export default {
    MainTitle: '巨无霸汇率',
    MainDescription: '通过巨无霸了解各货币的价值！',
    MetaTitle: '巨无霸汇率 - 通过巨无霸指数计算器了解各货币的实际价值',
    MetaDescription:
        '通过巨无霸指数计算器，计算世界各国货币的实际价值，并进行比较！',
    Convert: '兑换',
    Amount: '金额',
    from: '从',
    to: '到',
    BigMacIndexTitle: '什么是巨无霸指数？',
    BigMacIndexDescription:
        '巨无霸指数是一个有趣的指标，通过各国巨无霸的价格来比较货币的购买力。在准备旅行时，轻松了解两国货币的“实际价值”！',
    BigMacIndexDescription2:
        '巨无霸价格可能因各国的制度状况而有所不同。因此，巨无霸价格仅供参考使用。',
    BigMacIndexDescription3:
        '巨无霸指数使用经济学人提供的数据，以“2024-07-01”为基准。',
    SelectCountry: '请选择国家',
    ConvertBoxPlaceholder: '通过巨无霸了解货币价值！',
    fromPrefix: '在 {country}',
    fromPostfix: '是',
    MacPrefix: '可以在麦当劳购买',
    MacPostfix: '麦当劳',
    toPrefix: '等于 {country} 的',
    toPostfix: ' ',
    ...Country,
} as const;
