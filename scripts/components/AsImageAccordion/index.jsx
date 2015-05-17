import React from 'react';

require('./index.less');

class AsImageAccordion extends React.Component {
  static propTypes = {
    width: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ]),
    height: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
    ])
  };
  static defaultProps = {
    width: 1080,
    height: 250
  };
  constructor() {
    super();
    this.state = {
      hover: null
    };
  }
  componentDidMount = () => {
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
  render = () => {
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

class AsImageAccordionItem extends React.Component {
  static propTypes = {
    url: React.PropTypes.string,
    onClick: React.PropTypes.func
  };
  static defaultProps = {
    url: 'javascript: void(0)',
    onClick: () => {}
  };
  constructor() {
    super();
  }
  render = () => {
    var styles = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div style={styles} className="as-img-acd-item">
        <span className="as-img-acd-item-content" onClick={this.props.onClick}>
          {this.props.children}
        </span>
      </div>
    );
  }
}

export default {
  AsImageAccordion: AsImageAccordion,
  AsImageAccordionItem: AsImageAccordionItem
};