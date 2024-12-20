'use client';

import useDataStore from '@/store/data';
import Marquee from 'react-fast-marquee';
import { Card, Flex, Text } from '@radix-ui/themes';

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
                        <Card key={item.Country}>
                            <Text>{item.Country}</Text>
                            <Text>
                                {item.local_price} {item.currency_code}
                            </Text>
                        </Card>
                    ))}
                    {/* 원형 marquee 에 gap유지를 위한 빈공간*/}
                    <div />
                </Flex>
            </Marquee>
            <div
            //5초동안 블러 후 나타남
            >
                <Marquee direction="right" speed={20}>
                    <Flex direction="row" gap="2">
                        {shuffledData2.map((item: BigMacData) => (
                            <Card key={item.Country}>
                                <Text>{item.Country}</Text>
                                <Text>
                                    {item.local_price} {item.currency_code}
                                </Text>
                            </Card>
                        ))}
                        <div />
                    </Flex>
                </Marquee>
            </div>
            <div
            //10초동안 블러 후 나타남
            >
                <Marquee speed={20}>
                    <Flex direction="row" gap="2">
                        {shuffledData3.map((item: BigMacData) => (
                            <Card key={item.Country}>
                                <Text>{item.Country}</Text>
                                <Text>
                                    {item.local_price} {item.currency_code}
                                </Text>
                            </Card>
                        ))}
                        <div />
                    </Flex>
                </Marquee>
            </div>
        </Flex>
    );
};

export default BigMacIndexMarquee;
