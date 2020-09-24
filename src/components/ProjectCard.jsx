import React from 'react'
import PropTypes from 'prop-types'

const card = `bg-gray-700 text-gray-100 p-5`

const ProjectCard = ({ title, link, children, bg }) => (
    <div className={card}>
        <a href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
            <h4>{title}</h4>
            <p>{children}</p>
        </a>
    </div>
)

export default ProjectCard

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
    bg: PropTypes.string.isRequired,
}
