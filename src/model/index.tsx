import React from 'react';
export const SIGN_UP = 'Kayıt Ol';
export const SIGN_UP_PANEL = 'Kullanıcı Girişi';
export const SIGN_UP_DESCRIPTION =
  'Ad soyad ve şifren ile Fups hesabına giriş yapabilirsin.';
export const LOADING_TEXT = 'GİRİŞ YAPILIYOR';
export const HOW_TO_USE = 'Nasıl giriş yaparım ?';
export const OPEN_APP = 'Telefonunuzdan Fups uygulamasını açın.';
export const CLICK_PROFILE = 'Profil fotoğrafınızdaki QR ikonuna basın.';
export const SCAN_QR = 'QR Kodu okutarak internet şubeye giriş yapabilirsiniz.';
export const FORGOT_PASSWORD = 'Şifremi Unuttum';
export const LOGIN = 'GİRİŞ YAP';
export const ACTIVITIES = 'HESAP HAREKETLERİ';
export const SPEND_ANALYSIS = 'Harcama Analizi';
export const MOCK_AMOUNT = '₺ 200';
export const CAROUSEL_TITLE = 'SİZE ÖZEL KAMPANYALAR';
export const CAMPAIGN_1_TITLE = 'TURKCELL KAMPANYASI';
export const CAMPAIGN_1_DESCRIPTION =
  'Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.';
export const CAMPAIGN_2_TITLE = 'OYUN & E-PIN FIRSATI';
export const CAMPAIGN_2_DESCRIPTION =
  'Tüm alışverişlerinizde %20 bonus kazanma fırsatını kaçırma.';
export const CAMPAIGN_3_TITLE = 'ÜCRETSİZ İŞLEM';
export const CAMPAIGN_3_DESCRIPTION =
  "Fups App'i hemen indir! Ücretsiz işlem fırsatından sende yararlan.";
export const DOLAR = 'DOLAR';
export const EURO = 'EURO';
export const STERLIN = 'STERLIN';
export const GRAM_ALTIN = 'GRAM ALTIN';
export const CURRENCY_STATUS = '% 1.06';
export const ACCOUNTS = 'Hesaplar';
export const CARDS = 'Kartlar';
export const PROCESSES = 'İşlemler';
export const CAMPAIGNS = 'Kampanyalar';

export const CarouselResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 700, min: 430 },
    items: 2,
  },
  superMobile: {
    breakpoint: { max: 430, min: 320 },
    items: 1,
  },
};

export interface IButtonProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => any;
  children: any;
}

export interface IFormProps {
  onLoading: () => void;
}

export interface ISelectProps {
  label: string;
  value: string;
  options: Array<string>;
  error?: boolean;
  onChange: (value: string) => void;
}

export interface IInputProps {
  label: string;
  value: string;
  type: string;
  name?: string;
  error?: boolean;
  onChange: (value: string) => void;
}
