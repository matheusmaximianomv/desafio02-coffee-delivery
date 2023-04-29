import { ReactNode, ButtonHTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';

interface IGroupColors {
  background: keyof DefaultTheme;
  backgroundHover: keyof DefaultTheme;
  color: keyof DefaultTheme;
}

interface IGroupSize {
  height: string;
  minWidth: string;
}

export type TypeButtonVariant = 'primary' | 'secondary' | 'default' | 'simple';

export type TypeButtonSize = 'sm' | 'md' | 'lg';

export type TypeSizeOptionsButton = Record<TypeButtonSize, IGroupSize>;

export type TypePaddingOptionsButton = Record<TypeButtonSize, string>;

export type TypeColorsOptionsButton = Record<TypeButtonVariant, IGroupColors>;

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: TypeButtonSize;
  variant: TypeButtonVariant;
  badge?: number;
  children: ReactNode;
}
