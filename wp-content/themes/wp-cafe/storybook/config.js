import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import 'prismjs/themes/prism.css'

// -- assets/stylesheets
import 'styles/main.scss'

setOptions({
  name: 'Resuta UI',
  url: 'https://github.com/resuta',
  addonPanelInRight: false,
  showAddonPanel: false
})

const req = require.context('../components', true, /\.story\.js$/)

function loadStories () {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
