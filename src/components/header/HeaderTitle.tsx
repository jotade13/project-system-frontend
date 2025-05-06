import { useTranslation } from "react-i18next"

const HeaderTitle = () => {
    const {t} = useTranslation()

    return <p className="text-3xl mr-4 ">{t('header.title')}</p>
}

export default HeaderTitle