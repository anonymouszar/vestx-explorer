import Component from 'core/Component';
import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'react-router-dom';

import Icon from '../Icon';
import SearchBar from '../SearchBar';
import getPageName from './getPageName';

export default class MenuMobile extends Component {
  static propTypes = {
    links: PropTypes.array
  };

  static defaultProps = {
    links: []
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  getLinks = () => {
    const { props } = this;

    return props.links.map((i, idx) => {
      return (
        <li key={ idx }>
          <Link to={ i.href } onClick={ this.handleToggle }>
            { i.label }
          </Link>
        </li>
      )
    })
  };

  handleToggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <div className={ `menu-mobile ${ this.state.isOpen ? 'menu-mobile--open' : 'menu-mobile--close' }` }>
        <div className="menu-mobile__heading">
          <div className="page-title">
            <div className="page-title-text__mobile">{getPageName(this.props.location)}</div>
          </div>
        </div>      
        <div className="menu-mobile__hamburger">
          <a onClick={ this.handleToggle } >
            <Icon name="bars" className="menu-mobile__toggle" onClick={ this.handleToggle } />
          </a>
        </div>
        <div className="menu-mobile__menu">
          <a className="sidenav-close" onClick={ this.handleToggle } >
            <Icon name="times" className="menu-mobile__toggle" onClick={ this.handleToggle } />
          </a>
          <div className="menu-mobile__menu--content">
            <div className="menu-mobile__search">
              <i className="fa fa-search"></i>
              <input type="text" placeholder="Search blockchain" />
            </div>
            <ul>
              { this.getLinks() }
            </ul>
            <div className="menu-mobile__footer">
              <div>
                <img src="/img/vestxlogo.png" className="menu-mobile__logo" />
              </div>
              <div className="menu-mobile__footer--social">
                <a href="https://github.com/vestx" target="_blank">
                  <Icon name="github" className="fab footer__social-media-icon" />
                </a>
                <a href="https://t.me/vestxcoin" target="_blank">
                  <Icon name="telegram" className="fab footer__social-media-icon" />
                </a>
                <a href="https://discord.gg/HxX8Aqs" target="_blank">
                  <Icon name="discord" className="fab footer__social-media-icon" />
                </a>
                <a href="https://twitter.com/vestxcoin" target="_blank">
                  <Icon name="twitter" className="fab footer__social-media-icon" />
                </a>
              </div>
              <div>
                <a className="vestx-link--mobile" href="https://www.vestxcoin.com">www.vestxcoin.com</a>
              </div>
              <div className="menu-mobile__footer--copyright">&copy; Copyright 2019 Vestx Developers. All Rights Reserved</div>
            </div>
          </div>
          {/* <div className="menu-mobile__search-wrapper">
            <SearchBar
              className="search--mobile"
              onSearch={ this.props.onSearch }
              placeholder="Search Blockchain" />
          </div>
          { this.getLinks() } */}
        </div>
      </div>
    )
  }
}