import React from 'react';
import AsCheckbox from './components/AsCheckbox/checkbox';
import AsRadio from './components/AsCheckbox/radio';

React.render(
  <div>
    <div>
      <AsCheckbox checked>Checkbox</AsCheckbox>
      <AsCheckbox>Checkbox</AsCheckbox>
      <AsCheckbox>Checkbox</AsCheckbox>
    </div>
    <div>
      <AsRadio checked name="radio">RadioBox</AsRadio>
      <AsRadio name="radio">RadioBox</AsRadio>
      <AsRadio name="radio">RadioBox</AsRadio>
    </div>  
  </div>,
  document.getElementById('checkbox')
);