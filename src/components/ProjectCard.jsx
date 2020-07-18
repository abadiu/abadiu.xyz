import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, link, children, bg }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    <p>{children}</p>
    <h4>{title}</h4>
  </a>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  bg: PropTypes.string.isRequired,
};
