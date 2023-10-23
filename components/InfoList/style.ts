import styled from '@emotion/styled';

export const Wrapper = styled.div`
  .user-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;

    .user-icon {
      width: 4.5rem;
      height: 4.5rem;
      line-height: 4.5rem;
      text-align: center;
      color: #000;
      font-size: 1.6rem;
      font-weight: 800;
      border-radius: 100%;
      background: #d9d9d9;
      cursor: pointer;

      :hover {
        outline: 2px solid #00ff7f;
      }
    }
  }
`;