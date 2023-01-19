import React, {useState, useEffect} from 'react';
import useSWR from 'swr';
import {Container} from '@material-ui/core';
import FilterJob from '../components/FilterJob';
import JobCard from '../components/JobCard';

const Home = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [checked, setChecked] = useState(false);
  const [dataJob, setDataJob] = useState();

  const {data} = useSWR(
    'http://dev3.dansmultipro.co.id/api/recruitment/positions.json',
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      console.log('data from home', data);
      setDataJob(data);
    }
  }, [data]);

  const handleClickFilter = () => {
    console.log('filter');
  };

  const handleClickDetail = (id) => {
    console.log('id', id);
  };

  return (
    <div>
      <Container maxWidth="lg">
        <FilterJob
          description={description}
          location={location}
          checkedBox={checked}
          onChangeDesc={(e) => setDescription(e.target.value)}
          onChangeLocation={(e) => setLocation(e.target.value)}
          onChangeCheck={() => setChecked(!checked)}
          onClickFilter={handleClickFilter}
        />
        <JobCard data={dataJob} onClickDetail={handleClickDetail} />
      </Container>
    </div>
  );
};

export default Home;
