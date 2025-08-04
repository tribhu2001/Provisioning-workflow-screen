import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.s};
  border: 1px solid ${({ theme }) => theme.colors.surface['300']};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.text.primary};
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.surface['600']};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary['400']};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary['400']}40; /* Add transparency */
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.surface['100']};
    color: ${({ theme }) => theme.colors.text.disabled};
    border-color: ${({ theme }) => theme.colors.surface['200']};
    cursor: not-allowed;
  }

  &.error {
    border-color: ${({ theme }) => theme.colors.danger['400']};
    background-color: ${({ theme }) => theme.colors.danger['300']};
  }
`;

export const TextArea = styled.textarea`
  display: flex;
  height: 5.75rem;
  padding: ${({ theme }) => theme.spacing.s} 0.75rem;
  align-items: flex-start;
  align-self: stretch;
  width: -webkit-fill-available;
  border: 1px solid ${({ theme }) => theme.colors.surface['300']};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.surface['600']};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary['400']};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary['400']}40; /* Add transparency */
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.s};
  border: 1px solid ${({ theme }) => theme.colors.surface['300']};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.text.primary};
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.surface['600']};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary['400']};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary['400']}40; /* Add transparency */
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.surface['100']};
    color: ${({ theme }) => theme.colors.text.disabled};
    border-color: ${({ theme }) => theme.colors.surface['200']};
    cursor: not-allowed;
  }
    
  &.error {
    border-color: ${({ theme }) => theme.colors.danger['400']};
    background-color: ${({ theme }) => theme.colors.danger['300']};
  }
`;

export const CheckBox = styled.input`
  height: 16px;
  width: 16px;
  margin-right: ${({ theme }) => theme.spacing.s};
`;