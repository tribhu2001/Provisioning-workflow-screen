import styled from 'styled-components';

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none; /* In case it's used as a link */

  &:disabled {
    background-color: ${({ theme }) => theme.colors.surface['300']};
    border-color: ${({ theme }) => theme.colors.surface['300']};
    color: ${({ theme }) => theme.colors.text.disabled};
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary['200']};
  color: ${({ theme }) => theme.colors.surface['0']};
  border: 1px solid ${({ theme }) => theme.colors.primary['200']};
  &:hover:not(:disabled) {
    background-color: #0069D9;
    border-color: #0069D9;
  }
`;
