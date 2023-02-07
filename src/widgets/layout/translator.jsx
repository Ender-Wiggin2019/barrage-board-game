import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  zh: { nativeName: '中文' }
};

function translator() {
  const { t, i18n } = useTranslation();
  return (
    <div >
        <select onChange={(evt) => {
          i18n.changeLanguage(evt.target.value)
        }}>
          {Object.keys(lngs).map((lng) => (
            <option key={lng} value={lng} label={lngs[lng].nativeName}
                    style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} />
          ))}
        </select>
    </div >
  );
}

export default translator;
