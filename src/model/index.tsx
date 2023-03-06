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
