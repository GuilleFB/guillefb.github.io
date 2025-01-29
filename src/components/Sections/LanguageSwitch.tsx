import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  
  const baseClass =
      '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100';
  return (
    <div className="flex gap-x-8">
      <button className={baseClass} onClick={() => changeLanguage('en')}>🇬🇧 English</button>
      <button className={baseClass} onClick={() => changeLanguage('es')}>🇪🇸 Español</button>
    </div>
  );
};

export default LanguageSwitcher;
