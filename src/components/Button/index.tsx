import { IButtonProps } from './interfaces';
import { ButtonContainer, ButtonBadge } from './styles';

export function Button({ children, badge, ...props }: IButtonProps) {
  return (
    <ButtonContainer {...props}>
      {children}
      {typeof badge === 'number' && <ButtonBadge>{badge}</ButtonBadge>}
    </ButtonContainer>
  );
}
