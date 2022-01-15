import styled, { css } from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity`
  border: 1px solid #f0001a;
  border-radius: 5px;
  padding: 10px 40px;
  max-width: 190px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) =>
    theme == 'primary' &&
    css`
      background-color: #f0001a;
    `}
`;

export const Text = styled.Text`
  color: #f0001a;

  ${({ theme }) =>
    theme == 'primary' &&
    css`
      color: #ffffff;
    `}
`;
