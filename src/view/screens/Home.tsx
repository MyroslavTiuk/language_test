import { useTransition } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text } from 'react-native'


interface Props {

}

export const Home: React.FC<Props> = ({ }) => {
    const { t } = useTranslation();
    return (
        <View style={{ flex: 1, backgroundColor: 'lightgray', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <Text>{t('greeting')}</Text>
        </View>
    )
}