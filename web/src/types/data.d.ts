type BigMacData = {
    Country: string; // 국가 이름
    iso_a3: string; // ISO 3자리 국가 코드
    currency_code: string; // 통화 코드
    local_price: number; // 빅맥가격
    dollar_ex: number; // 달러 환율
    dollar_price: number; // 달러 기준 가격
    dollar_ppp: number; // 구매력 평가 기준 환율
    GDP_bigmac: number; // 빅맥 기준 GDP
    dollar_valuation: number; // 달러 환율 기준 평가
    euro_valuation: number; // 유로 환율 기준 평가
    sterling_valuation: number; // 파운드 환율 기준 평가
    yen_valuation: number; // 엔 환율 기준 평가
    yuan_valuation: number; // 위안 환율 기준 평가
    dollar_adj_valuation: number; // 달러 환율 조정 평가
    euro_adj_valuation: number; // 유로 환율 조정 평가
    sterling_adj_valuation: number; // 파운드 환율 조정 평가
    yen_adj_valuation: number; // 엔 환율 조정 평가
    yuan_adj_valuation: number; // 위안 환율 조정 평가
};

type Country = string;
