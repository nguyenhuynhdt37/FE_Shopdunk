import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi', // Ngôn ngữ mặc định nếu không tìm thấy
    debug: true, // Bật chế độ debug (tắt khi production)
    interpolation: {
      escapeValue: false, // Không escape các giá trị
    },
    resources: {
      vi: {
        translation: {
          // Các bản dịch tiếng Việt
          welcome: 'Xin chào!',
          description: 'Đây là mô tả trang web.',
          // ...
        },
      },
      en: {
        translation: {
          // Các bản dịch tiếng Anh
          welcome: 'Welcome!',
          description: 'This is the website description.',
          // ...
        },
      },
    },
  })

export default i18n
