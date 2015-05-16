import React from 'react';
import BaseComponent from '../BaseComponent';

require('./index.less');

class AsImageAccordion extends BaseComponent {
  constructor() {
    super();
    this.state = {
      hover: null
    };
    this._bind('render', 'componentDidMount');
  }
  componentDidMount() {
    let $dom = React.findDOMNode(this);
    let $wrap = $dom.querySelectorAll('.as-img-acd-wrap');
    $wrap = Array.prototype.slice.call($wrap);
    let setWidth = (percent, num) => {
      $wrap.forEach(($li) => {
        $li.style.width = percent / num + '%';
      });
    };
    
    $wrap.forEach(($li) => {
      $li.addEventListener('mouseover', (e) => {
        $li.classList.add('hover');
        setWidth(40, $wrap.length - 1);
        $li.style.width = '60%';
      }, true);
      $li.addEventListener('mouseleave', (e) => {
        $li.classList.remove('hover');
        setWidth(100, $wrap.length);
      }, true);
    });

  }
  render() {
    let children = this.props.children;
    let liStyles = {
      height: this.props.height,
      width: 100 / children.length + '%'
    };
    let styles = {
      width: this.props.width,
      height: this.props.height
    };
    let $lis = this.props.children.map((child) => {
      return (<li style={liStyles} className="as-img-acd-wrap">{child}</li>);
    });
    return (
      <div style={styles} className="as-img-acd">
        <ul className="as-img-acd-list">
          {$lis}
        </ul>
      </div>
    );
  }
}

class AsImageAccordionItem extends BaseComponent {
  constructor() {
    super();
    this._bind('render');
  }
  render() {
    var styles = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div style={styles} className="as-img-acd-item">
        <a className="as-img-acd-item-a" href={this.props.url}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default {
  AsImageAccordion: AsImageAccordion,
  AsImageAccordionItem: AsImageAccordionItem
};