import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.surface['0']};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius.default};
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.surface['0']};
  border-right: 1px solid ${({ theme }) => theme.colors.surface['100']};
  padding: ${({ theme }) => theme.spacing.m} 0;
  flex-direction: column;
  justify-content: space-between;
  height: 823px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.surface['200']};
    padding: ${({ theme }) => theme.spacing.m} 0;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s};
  padding: 0 ${({ theme }) => theme.spacing.l} ${({ theme }) => theme.spacing.l};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.text.bolder};
  font-size: ${({ theme }) => theme.fontSizes.headingSm};
`;

export const SidebarNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    @media (max-width: 768px) {
      display: flex;
      overflow-x: auto;
      padding: 0 ${({ theme }) => theme.spacing.m};
    }
  }

  li {
    display: flex;
    align-items: center;
    align-self: stretch;
    gap: ${({ theme }) => theme.spacing.s};
    padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.l};
    color: ${({ theme }) => theme.colors.text.primary};
    cursor: pointer; /* Add this to indicate clickable */
    transition: background-color 0.2s ease; /* Smooth transition for background */
    @media (max-width: 768px) {
      flex-shrink: 0;
      margin-right: ${({ theme }) => theme.spacing.s};
    }
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: ${({ theme }) => theme.spacing.s};
    flex-grow: 1;
    color: inherit;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary['300']};
  }

  li.active a {
    color: ${({ theme }) => theme.colors.primary['200']};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-grow: 1;
  padding: ${({ theme }) => theme.spacing.l} ${({ theme }) => theme.spacing.xl};
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.surface['50']};
  gap: ${({ theme }) => theme.spacing.l};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.m};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px ${({ theme }) => theme.spacing.l};
  border-bottom: 1px solid ${({ theme }) => theme.colors.surface['100']};

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.headingMd};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    color: ${({ theme }) => theme.colors.text.primary};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    flex-shrink: 0;
  }
  
  div {
    align-items: flex-end;
    justify-content: center;
    display: flex;
    gap: ${({ theme }) => theme.spacing.s};
    img {
      cursor: pointer;
    }
  }
  
  div span {
    color: ${({ theme }) => theme.colors.primary['50']};
    margin-right: ${({ theme }) => theme.spacing.m};
    cursor: pointer;
  }
`;

export const FormSection = styled.section`
  background-color: ${({ theme }) => theme.colors.surface['0']};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: ${({ theme }) => theme.spacing.l};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.headingSm};
  color: ${({ theme }) => theme.colors.text.bolder};
  margin-top: 0px;
  margin-bottom: ${({ theme }) => theme.spacing.s};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.l};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FormField = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.m};

  label {
    display: flex;
    margin-bottom: ${({ theme }) => theme.spacing.s};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  span.error-message {
    color: ${({ theme }) => theme.colors.danger['400']};
    font-size: ${({ theme }) => theme.fontSizes.small};
`;

// Top Bar Components
export const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.l};
  background-color: ${({ theme }) => theme.colors.surface['0']};
  border-bottom: 1px solid ${({ theme }) => theme.colors.surface['100']};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  flex-shrink: 0; /* Prevents shrinking in flex container */

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  }
`;

export const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.colors.text.subtlest};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.l};
  color: ${({ theme }) => theme.colors.text.primary['200']};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.body};
  .icon-button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.xs};
    border-radius: ${({ theme }) => theme.borderRadius.default};

    &:hover {
      background-color: ${({ theme }) => theme.colors.surface['50']};
    }
  }
`;

export const LeftSummaryPane = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    padding: ${({ theme }) => theme.spacing.s} 0;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    background-color: ${({ theme }) => theme.colors.surface['0']};
    gap: 0.125rem;
    margin-right: 2px;
    height: min-content;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 250px; /* Smaller on medium screens */
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }
`;

export const SummarySection = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    padding: 0.5rem 1.25rem;
    gap: 0.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.s};

    .Header2 {
        font-size: ${({ theme }) => theme.fontSizes.headingSm};
        color: ${({ theme }) => theme.colors.text.primary};
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
    }
    
    .Header1 {
        font-size: ${({ theme }) => theme.fontSizes.headingSm};
        color: ${({ theme }) => theme.colors.primary['200']};
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
    }
    
    div{
        font-size: ${({ theme }) => theme.fontSizes.small};
        display: flex;
        color: ${({ theme }) => theme.colors.text.subtlest};
        align-items: center;
        gap: ${({ theme }) => theme.spacing.s};
    }
`;

export const PriceBox = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.surface[200]};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: ${({ theme }) => theme.spacing.m};
    text-align: center;
    width: auto;
    margin-top: ${({ theme }) => theme.spacing.m};

    .price-label {
        font-size: ${({ theme }) => theme.fontSizes.small};
        color: ${({ theme }) => theme.colors.text.subtlest};
        margin-bottom: ${({ theme }) => theme.spacing.xs};
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
    }

    .price-labeled{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }

    .price-value {
        font-size: ${({ theme }) => theme.fontSizes.headingSm};
        color: ${({ theme }) => theme.colors.text.primary};
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
        margin-bottom: ${({ theme }) => theme.spacing.s};
    }

    a {
        display: block;
        color: ${({ theme }) => theme.colors.primary['200']};
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSizes.small};
        margin-bottom: ${({ theme }) => theme.spacing.m};

        &:hover {
            color: ${({ theme }) => theme.colors.primary['300']};
        }
    }
`;

export const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid ${({ theme }) => theme.colors.surface['200']};
    border-radius: 10px;
    margin-top: ${({ theme }) => theme.spacing.m};
    font-size: ${({ theme }) => theme.fontSizes.small};

    th, td {
        text-align: left;
        padding: ${({ theme }) => theme.spacing.s};
        border-bottom: 1px solid ${({ theme }) => theme.colors.surface['200']};
    }

    th {
        background-color: ${({ theme }) => theme.colors.surface['200']};
        color: ${({ theme }) => theme.colors.primary['100']};
        font-weight: ${({ theme }) => theme.fontWeights.semibold};

        &:last-child {
            text-align: right;
        }
    }

    td {
        color: ${({ theme }) => theme.colors.text.primary};
        a {
            color: ${({ theme }) => theme.colors.primary['100']};
          }
    }

    .delete-button {
        background: none;
        border: none;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.text.subtlest};
        display: flex;
        align-items: center;
    }
`;

export const TextLabel = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const TextHint = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text.subtlest};
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;
