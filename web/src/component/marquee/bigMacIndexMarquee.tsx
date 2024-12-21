'use client';

import useDataStore from '@/store/data';
import Marquee from 'react-fast-marquee';
import { Flex } from '@radix-ui/themes';
import IndexCard from './indexCard';

const shuffleArray = (array: BigMacData[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const splitData = (data: BigMacData[]) => {
    const shuffledData = shuffleArray(data);
    const chunkSize = Math.ceil(shuffledData.length / 3); // 3으로 나누기
    const data1 = shuffledData.slice(0, chunkSize);
    const data2 = shuffledData.slice(chunkSize, chunkSize * 2);
    const data3 = shuffledData.slice(chunkSize * 2);
    return [data1, data2, data3];
};

const BigMacIndexMarquee = () => {
    const { data } = useDataStore();

    const [shuffledData1, shuffledData2, shuffledData3] = splitData(data);

    return (
        <Flex direction="column" gap="4">
            <Marquee speed={20}>
                <Flex direction="row" gap="2">
                    {shuffledData1.map((item: BigMacData) => (
                        <IndexCard key={item.Country} item={item} />
                    ))}
                    {/* 원형 marquee 에 gap유지를 위한 빈공간*/}
                    <div />
                </Flex>
            </Marquee>
            <Marquee direction="right" speed={20}>
                <Flex direction="row" gap="2">
                    {shuffledData2.map((item: BigMacData) => (
                        <IndexCard key={item.Country} item={item} />
                    ))}
                    <div />
                </Flex>
            </Marquee>
            <Marquee speed={20}>
                <Flex direction="row" gap="2">
                    {shuffledData3.map((item: BigMacData) => (
                        <IndexCard key={item.Country} item={item} />
                    ))}
                    <div />
                </Flex>
            </Marquee>
        </Flex>
    );
};

export default BigMacIndexMarquee;
