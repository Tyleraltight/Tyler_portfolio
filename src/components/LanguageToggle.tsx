import { useLanguage } from '../contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="language-toggle-container">
      <button 
        className="seamless-text-switcher" 
        onClick={toggleLanguage}
        aria-label="Switch language"
        title={language === 'en' ? '切换为中文' : 'Switch to English'}
      >
        <span className={`seamless-tab ${language === 'en' ? 'active' : ''}`}>
          EN
        </span>
        <span className="seamless-divider">/</span>
        <span className={`seamless-tab ${language === 'zh' ? 'active' : ''}`}>
          中文
        </span>
      </button>
    </div>
  );
}







