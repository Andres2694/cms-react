// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Assets
import './Footer.css';
import { SocialIcon } from 'react-social-icons';

class Footer extends Component {
	static propTypes = {
    copyright: PropTypes.string
  };

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <ul className="list-inline text-center">
            <li className="list-inline-item">
                    <SocialIcon url="https://www.instagram.com/andres26_94/?hl=es-la"/>
              </li>
              <li className="list-inline-item">
                    <SocialIcon url="https://www.facebook.com/andres.lara.794"/>
              </li>
              <li className="list-inline-item">
                    <SocialIcon url="https://github.com/Andres2694/cms-react"/>
              </li>
            </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;