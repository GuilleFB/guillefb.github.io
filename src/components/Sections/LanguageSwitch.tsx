import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { memo, FC } from 'react';

const LanguageSwitcher: FC<{ onClick?: () => void }> = memo(({ onClick }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    // Si onClick está definido, ejecútalo
    if (onClick) {
      onClick();
    }
  };

  const baseClass =
    '-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500';

  return (
    <div className="flex gap-x-8">
      <button
        className={classNames(baseClass, i18n.language === 'en' ? 'text-orange-500' : 'text-neutral-100')}
        onClick={() => changeLanguage('en')}
      >
        🇬🇧 English
      </button>
      <button
        className={classNames(baseClass, i18n.language === 'es' ? 'text-orange-500' : 'text-neutral-100')}
        onClick={() => changeLanguage('es')}
      >
        🇪🇸 Español
      </button>
    </div>
  );
});

LanguageSwitcher.displayName = 'LanguageSwitcher';
export default LanguageSwitcher;