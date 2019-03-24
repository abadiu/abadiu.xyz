/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.a`
  ${tw`shadow-lg relative no-underline px-4 py-4 md:py-6 justify-center items-center flex w-64 max-w-xs rounded-lg text-white`};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`
const Label = styled.div`
  ${tw`text-white uppercase text-l md:text-2xl xl:text-l tracking-wide font-sans`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`

const Button = ({ link, label, bg }) => (
  <Wrapper href={link} bg={bg}>
    <Label>{label}</Label>
  </Wrapper>
)

export default Button

Button.PropTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
}
