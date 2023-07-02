import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <p>{t('home.title')}</p>
    </Fragment>
  );
};

export default Home;
