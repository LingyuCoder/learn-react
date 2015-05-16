import React from 'react';
import {
	AsImageAccordion, 
	AsImageAccordionItem
} from './components/AsImageAccordion/index';

React.render(
  <AsImageAccordion width={1080} height={250}>
  	<AsImageAccordionItem url="#" image="http://michaelferry.com/assets/accordion1.jpg">
  		<h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  	</AsImageAccordionItem>
  	<AsImageAccordionItem url="#" image="http://michaelferry.com/assets/accordion2.jpg">
  		<h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  	</AsImageAccordionItem>
  	<AsImageAccordionItem url="#" image="http://michaelferry.com/assets/accordion3.jpg">
  		<h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  	</AsImageAccordionItem>
  	<AsImageAccordionItem url="#" image="http://michaelferry.com/assets/accordion4.jpg">
  		<h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  	</AsImageAccordionItem>
  	<AsImageAccordionItem url="#" image="http://michaelferry.com/assets/accordion5.jpg">
  		<h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  	</AsImageAccordionItem>
  	<AsImageAccordionItem url="#" image="http://michaelferry.com/assets/accordion6.jpg">
  		<h2>Lorem Ipsum</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  	</AsImageAccordionItem>
  </AsImageAccordion>,
  document.querySelector('#accordion')
);