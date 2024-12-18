'server-only';

import { getI18n } from '@/locales/server';
import { Text } from '@radix-ui/themes';

export default async function Footer() {
    const t = await getI18n();
    return <Text>{t('hello')}</Text>;
}
