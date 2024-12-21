'server-only';

import * as XLSX from 'xlsx';

const fetchData = async (): Promise<{
    data: BigMacData[];
    country: Country[];
}> => {
    try {
        // public 폴더의 xlsx 파일 가져오기
        const response = await fetch('/data/big-mac-2024-07-01.xls');
        const blob = await response.arrayBuffer(); // ArrayBuffer 형식으로 변환

        // XLSX 파일 파싱
        const workbook = XLSX.read(blob, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0]; // 첫 번째 시트 가져오기
        const worksheet = workbook.Sheets[firstSheetName];

        // 시트를 JSON 형식으로 변환
        const jsonData = XLSX.utils.sheet_to_json(worksheet) as BigMacData[]; // 타입 단언 추가

        return {
            data: jsonData,
            country: jsonData.map((item) => item.Country),
        };
    } catch (error) {
        console.error('Error reading XLSX file:', error);
    }
    return { data: [], country: [] };
};

export default fetchData;
