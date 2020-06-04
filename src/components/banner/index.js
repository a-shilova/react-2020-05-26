import React from 'react';

import styles from './banner.module.css';
import PropTypes from 'prop-types';

import DefaultBanner from './banner.jpg';

const Banner = ({ img = DefaultBanner, heading, description, children }) => (
  <div className={styles.banner}>
    <img src={img} className={styles.img} alt="banner" />
    <div className={styles.caption}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>{description}</p>
      <div>{children}</div>
    </div>
  </div>
);

Banner.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element,
};

export default Banner;
