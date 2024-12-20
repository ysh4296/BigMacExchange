'use client';

import useCountryStore from '@/store/country';
import useDataStore from '@/store/data';
import { useEffect } from 'react';
import * as XLSX from 'xlsx';

export default function XlsData() {
    const { data, setData } = useDataStore();
    const { setCountry } = useCountryStore();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // public 폴더의 xlsx 파일 가져오기
                const response = await fetch('/data/big-mac-2024-07-01.xls');
                const blob = await response.arrayBuffer(); // ArrayBuffer 형식으로 변환

                // XLSX 파일 파싱
                const workbook = XLSX.read(blob, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0]; // 첫 번째 시트 가져오기
                const worksheet = workbook.Sheets[firstSheetName];

                // 시트를 JSON 형식으로 변환
                const jsonData = XLSX.utils.sheet_to_json(
                    worksheet
                ) as unknown[]; // 타입 단언 추가
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setData(jsonData as BigMacData[]); // 타입 단언 추가
            } catch (error) {
                console.error('Error reading XLSX file:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // 국가 데이터 설정
        setCountry(data.map((item) => item.Country));
    }, [data]);

    return (
        <div style={{ padding: '1rem' }}>
            <h1>XLSX 데이터 불러오기</h1>

            {data.length > 0 ? (
                <div style={{ overflowX: 'auto' }}>
                    <table
                        style={{
                            borderCollapse: 'collapse',
                            width: '100%',
                            textAlign: 'left',
                            marginTop: '1rem',
                        }}
                    >
                        {/* 테이블 헤더 */}
                        <thead>
                            <tr>
                                {Object.keys(data[0]).map((key) => (
                                    <th
                                        key={key}
                                        style={{
                                            backgroundColor: '#f4f4f4',
                                            padding: '0.75rem',
                                            border: '1px solid #ddd',
                                        }}
                                    >
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        {/* 테이블 바디 */}
                        <tbody>
                            {data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Object.values(row).map(
                                        (value, colIndex) => (
                                            <td
                                                key={colIndex}
                                                style={{
                                                    padding: '0.75rem',
                                                    border: '1px solid #ddd',
                                                }}
                                            >
                                                {value as string}
                                            </td>
                                        )
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}
