import styled from 'styled-components';

export const CatalogCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  background: ${(props) => props.theme['gray-100']};
  border-radius: 0.375rem 2.25rem;
`;

export const CatalogImage = styled.img`
  margin-top: -1.25rem;
  height: 7.5rem;
  width: 7.5rem;
`;

export const CatalogTagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  flex-wrap: wrap;

  margin-top: 0.75rem;
`;

export const CatalogTag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.5rem;

  width: 5.063rem;
  height: 1.313rem;

  background: ${(props) => props.theme['yellow-300']};
  border-radius: 100px;

  color: ${(props) => props.theme['yellow-700']};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.813rem;
`;

export const CatalogInfo = styled.div`
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CatalogName = styled.strong`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.625rem;
  text-align: center;
  color: ${(props) => props.theme['gray-700']};
`;

export const CatalogDescription = styled.span`
  width: 13.5rem;
  margin: 0 auto;

  text-align: center;
  font-size: 0.875rem;
  line-height: 1.138rem;
  color: ${(props) => props.theme['gray-500']};
`;

export const CatalogBuy = styled.div`
  margin-top: 2.063rem;

  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.438rem;
`;

export const CatalogPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.313rem;

  span {
    font-size: 0.875rem;
    line-height: 1.138rem;
  }

  strong {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.95rem;
    text-align: center;
    color: ${(props) => props.theme['gray-600']};
  }
`;

export const CatalogAction = styled.div`
  display: flex;
  align-items: center;
  gap: 0.313rem;

  > div {
    height: 2.375rem;
  }
`;
