import { getDictionary } from '@/utils/getLocales';

export default async function Home({ params: { locale } }: { params: { locale: Locale } }) {
    const dict = await getDictionary(locale); // en
  
    return (
        <div>
            <h1>{dict['welcome']}</h1>
        </div>
    );
}
