import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';
const theme = {
  title: 'Midnight Coder',
  baseFontSize: '20px',
  baseLineHeight: 1.75,
  scaleRatio: 5 / 2,
  googleFonts: [{
    name: 'Source Code Pro',
    styles: ['700', '900']
  }, {
    name: 'Source Sans Pro',
    styles: ['300', '400', '700']
  }],
  headerFontFamily: ['Source Code Pro', 'serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  bodyColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 900,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({
    scale,
    rhythm
  }) => ({
    html: {
      '-webkit-font-smoothing': 'antialiased'
    },
    body: {
      letterSpacing: '.03em'
    },
    a: {
      color: '#aa04dc'
    },
    'a:hover': {
      color: '#000'
    },
    blockquote: { ...scale(1 / 5),
      color: 'gray',
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${'hsla(0, 0%, 87%, 1)'}`
    },
    'blockquote > :last-child': {
      marginBottom: 0
    },
    'blockquote cite': {},
    'blockquote cite:before': {
      content: '"— "'
    },
    ul: {
      listStyle: 'disc'
    },
    'ul,ol': {
      marginLeft: 0
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginLeft: rhythm(1)
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16)
      }
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2)
    },
    h4: {
      letterSpacing: '0.140625em',
      textTransform: 'uppercase'
    },
    h6: {
      fontStyle: 'italic'
    },
    a: {
      boxShadow: '0 1px 0 0 currentColor',
      color: '#66D9EF',
      textDecoration: 'none'
    },
    'a:hover,a:active': {
      boxShadow: 'none'
    },
    'mark,ins': {
      background: '#66D9EF',
      color: 'white',
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none'
    }
  })
};
export default theme;