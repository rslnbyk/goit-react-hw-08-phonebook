import styled from 'styled-components';

export const ContactsListItem = styled.li`
  font-weight: 500;
  color: #2a363b;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactsListUl = styled.ul`
  list-style: none;
  margin-top: 0;
  padding-left: 10px;
`;
