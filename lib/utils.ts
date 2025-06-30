import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MARKETS } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateObject(o: object): boolean {
  const values = Object.values(o);
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (value === undefined || value === null) {
      return false;
    }
  }
  return true;
}

export function formatNumber(num?: number | string): string {
  if (num === null || num === undefined) {
    return '';
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function notNumber(value: string): boolean {
  return isNaN(Number(value));
}

export function removeNonAlphanumeric(input: string): string {
  return input.replace(/[^a-zA-Z0-9]/g, '');
}

export function validateMarketName(marketName: string) {
  return MARKETS.includes(marketName?.toUpperCase?.() as any);
}

export const validateUid = (uid?: string) => {
  if (uid) {
    return removeNonAlphanumeric(uid).length > 0;
  }
  return null;
};

export const emailValidator = (value: string) => /^\S+@\S+\.\S+$/.test(value);

export const emailCodeValidator = (value: string) => /^\d{6}$/.test(value);

export const passwordValidator = (value: string) => value.length >= 1;

export const strictPasswordValidator = (value: string) => {
  const isValidLength = value.length >= 8 && value.length <= 16;
  const hasOnlyValidChars =
    /^[A-Za-z0-9!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;'\/]+$/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasUppercase = /[A-Z]/.test(value);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;'\/]/.test(value);

  return (
    isValidLength &&
    hasOnlyValidChars &&
    hasLowerCase &&
    hasUppercase &&
    hasSpecial
  );
};

function formatNumberKR(
  value: number,
  options?: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    useGrouping?: boolean;
    style?: 'decimal' | 'currency';
    currency?: 'KRW';
  }
): string {
  const {
    minimumFractionDigits = 0,
    maximumFractionDigits = 0,
    useGrouping = true,
    style = 'decimal',
    currency = 'KRW',
  } = options || {};
  
  return new Intl.NumberFormat('ko-KR', {
    style,
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
    useGrouping,
  }).format(value);
}
