import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import i18n from '../../../i18n'
import { useTranslation } from 'react-i18next'
import { store } from '../../store'
import { setLanguage } from '../../modules/user/actions'


interface Props {

}

interface LanguageModel {
    title: string,
    code: string
}

const langList: LanguageModel[] = [
    {
        title: 'English',
        code: 'en'
    },
    {
        title: 'France',
        code: 'fr'
    },
    {
        title: 'Italian',
        code: 'it'
    },
    {
        title: 'Ukraine',
        code: 'uk'
    },
]

export const Setting: React.FC<Props> = ({ }) => {
    const { t } = useTranslation();

    const renderItem = (item: LanguageModel) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    i18n.changeLanguage(item.code)
                    store.dispatch(setLanguage({ lang: item.title, code: item.code, isAuto: false }));
                }}
                style={styles.listElement}>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Text> {t('greeting')}, Select language</Text>
            <FlatList
                style={{ width: '100%' }}
                data={langList}
                renderItem={({ item }) => renderItem(item)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        width: '100%',
        alignItems: 'center'
    },
    listElement: {
        height: 60,
        width: '92%',
        marginHorizontal: '4%',
        marginTop: 10,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6261F1'
    }
})