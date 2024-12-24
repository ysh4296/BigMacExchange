'use client';

import { Text } from '@radix-ui/themes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CurrencyTextProps {
    prefix?: string;
    postfix?: string;
    currency: string;
    amount: number;
    delay?: number;
}

const CurrencyText = ({
    prefix,
    postfix,
    currency,
    amount,
    delay = 300,
}: CurrencyTextProps) => {
    const [currentText, setCurrentText] = useState(`${amount} ${currency}`);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // 애니메이션 재실행을 위해 visibility 상태 업데이트
        setIsVisible(false);
        const timeout = setTimeout(() => {
            setCurrentText(
                `${new Intl.NumberFormat('en-US').format(amount)} ${currency}`
            );
            setIsVisible(true);
        }, delay); // fade-out 후 변경된 텍스트로 업데이트

        return () => clearTimeout(timeout);
    }, [currency, amount]);

    return (
        <motion.div
            key={currentText} // key를 텍스트로 설정하여 재렌더링 트리거
            initial={{ opacity: 0, y: 20 }} // fade-out 효과
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} // fade-in/out 제어
            transition={{ duration: 0.3, ease: 'easeOut' }} // 트랜지션 설정
            style={{
                textAlign: 'center',
            }}
        >
            <Text
                size="2" // 텍스트 크기
                truncate // 길이가 길 경우 말줄임표 처리
                wrap="wrap"
                style={{
                    letterSpacing: '0.05em', // 글자 간격
                    textTransform: 'uppercase', // 대문자 변환
                }}
            >
                {prefix}
            </Text>
            <Text
                size="4" // 텍스트 크기
                color="indigo" // 텍스트 색상
                weight="bold" // 글꼴 굵기
                wrap="wrap"
                style={{
                    letterSpacing: '0.05em', // 글자 간격
                    textTransform: 'uppercase', // 대문자 변환
                }}
            >
                {currentText}
            </Text>
            <Text
                size="2" // 텍스트 크기
                truncate // 길이가 길 경우 말줄임표 처리
                wrap="wrap"
                style={{
                    letterSpacing: '0.05em', // 글자 간격
                    textTransform: 'uppercase', // 대문자 변환
                }}
            >
                {postfix}
            </Text>
        </motion.div>
    );
};

export default CurrencyText;
