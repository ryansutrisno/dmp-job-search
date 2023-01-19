import React from 'react';
import styled from 'styled-components';
import {Button} from '@material-ui/core';

const JobCard = ({data, onClickDetail}) => {
  return (
    <>
      {data &&
        data.map((item) => (
          <Main>
            <JobTitle>
              <p>{item?.title}</p>
            </JobTitle>
            <Company>
              <p>{item?.company}</p>
            </Company>
            <Type>
              <p>{item?.type}</p>
            </Type>
            <DetailButton text onClick={() => onClickDetail(item.id)}>
              Detail
            </DetailButton>
          </Main>
        ))}
    </>
  );
};

export default JobCard;

const Main = styled.div`
  display: grid;
  grid-template-columns:
    minmax(250px, 1fr) minmax(200px, 1fr) minmax(160px, 1fr)
    min-content minmax(200px, 1fr);
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  gap: 20px;
  margin-top: 30px;
`;

const JobTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  > p {
    font-weight: 600;
    font-size: 15px;
    color: #000000;
  }
`;

const Company = styled.div`
  display: flex;
  > p {
    font-weight: 400;
    font-size: 15px;
    color: #2b2f3c;
  }
`;

const Type = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  > p {
    text-align: right;
    min-width: max-content;
    font-weight: 500;
    font-size: 15px;
  }
`;

const DetailButton = styled(Button)`
  position: relative;
  transform: translateX(10px);
  min-width: auto;
  min-height: auto;
  height: fit-content;
  margin-left: 30px;
  padding: 0 10px;
  color: #bc0000;
  font-weight: 500;
  font-size: 15px;
`;
