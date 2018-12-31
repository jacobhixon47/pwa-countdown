import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';

moragaTheme.overrideThemeStyles = (options) => ({
  'h1, h2': {
    color: '#ddd',
  }
});

const typography = new Typography(moragaTheme);

export default typography;
