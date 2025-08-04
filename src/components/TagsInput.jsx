import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const StyledTagsInput = styled.div`
  display: flex;
  flex-direction: column;
  input {
    flex: 1 0 0;
    border: none;
  }  
  input:focus {
      outline: none;
  }
`;

const StyledInput = styled.div`
    display: flex;
    height: 2.25rem;
    padding: 0 0.75rem;
    align-items: center;
    align-self: stretch;
    width: fit-content;
    border-radius: 0.25rem;
    border: 1px solid ${({ theme }) => theme.colors.surface['200']};
    background: ${({ theme }) => theme.colors.surface['0']};
`;

const StyledTags = styled.div`
    display: flex;
    margin-top: 1%;
    .tag{
      display: flex;
      margin-right: ${({ theme }) => theme.spacing['s']};
      padding: 0.25rem ${({ theme }) => theme.spacing['s']};
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      align-self: stretch;
      border-radius: ${({ theme }) => theme.spacing['s']};
      background: ${({ theme }) => theme.colors.surface['100']};
    }

    .remove-tag{
      width: 1.125rem;
      height: 1.125rem;
      border: none;
      background: inherit;
      cursor: pointer;
    }
`;

const TagsInput = ({ tags, onAddTag, onRemoveTag }) => {
  const [inputKey, setInputKey] = useState('');
  const [inputValue, setInputValue] = useState('');
  const keyRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() && inputKey.trim()) {
      e.preventDefault();
      onAddTag(inputKey.trim(), inputValue.trim());
      setInputKey('');
      setInputValue('');
      keyRef.current.focus();
    }
  };

  return (
    <>
      <StyledTagsInput>

        <StyledInput>
          <input
            type="text"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={"Key"}
            ref={keyRef}
          />
          :
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={"Value"}
          />
        </StyledInput>

        <StyledTags>
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
              <button type="button" className="remove-tag" onClick={() => onRemoveTag(tag)}>
                X
              </button>
            </span>
          ))}
        </StyledTags>
      </StyledTagsInput>

    </>
  );
};

export default TagsInput;