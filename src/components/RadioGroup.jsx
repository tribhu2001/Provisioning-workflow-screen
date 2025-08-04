import styled from 'styled-components';

const StyledRadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.m};
  label {
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.s};
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.body};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  input[type="radio"] {
    margin-right: ${({ theme }) => theme.spacing.s};
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${({ theme }) => theme.colors.surface['400']};
    border-radius: 50%;
    display: grid;
    place-content: center;
    transition: border-color 0.2s ease, background-color 0.2s ease;

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.2s ease;
      box-shadow: inset 1em 1em ${({ theme }) => theme.colors.primary['400']};
    }

    &:checked {
      border-color: ${({ theme }) => theme.colors.primary['200']};
      &::before {
        transform: scale(1);
      }
    }
  }
`;

const RadioGroup = ({ name, options, selectedValue, onChange }) => {
  return (
    <StyledRadioGroup>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={onChange}
            disabled={option.disabled}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </StyledRadioGroup>
  );
};

export default RadioGroup;