import { useGlobalContext } from "./pages/_app";

const LanguageModal = () => {
  const { closeLanguageModal, setLanguageSelected, isLanguageModalOpen } =
    useGlobalContext();
  const languages = ["english", "español"];
  return (
    <section
      className={`${
        isLanguageModalOpen ? "languageModal show" : "languageModal"
      }`}
    >
      <h2>Select the language of your preference</h2>
      {languages.map((language) => (
        <button
          key={language}
          onClick={() => {
            setLanguageSelected(language);
            closeLanguageModal();
            localStorage.setItem("language", language);
          }}
        >
          {language}
        </button>
      ))}
    </section>
  );
};

export default LanguageModal;
