import React, {Component} from 'react';
import './style.less';

import Logo from './../components/logo'
import Contact from '../components/contact';
import More from '../components/more';
import LeftMenu from '../components/sidebar-menu';
import AsideBarFooter from '../components/sidebar-footer';
import MainOffer from '../components/main-offer';
import MainContentBlock from '../components/main-content-block';
import MainFooterLeft from '../components/main-footer-left';
import MainFooterRight from '../components/main-footer-right';
import FooterLeft from '../components/footer-left';
import FooterCenter from '../components/footer-center';
import FooterRightTop from '../components/footer-right-top';
import FooterRightBottom from '../components/footer-reght-bottom';

export default class App extends Component{
  render() {
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="head">
              <Logo/>
              <Contact/>
              <More/>
            </div>
          </div>
        </header>
        <section className="main">
          <div className="container">
            <div className="content">
              <aside className="side-bar">
                <LeftMenu />
                <AsideBarFooter />
              </aside>
              <main className="main">
                <MainOffer />
                <div className="main__content">
                  <MainContentBlock />
                  <MainContentBlock />
                  <MainContentBlock />
                  <MainContentBlock />
                  <MainContentBlock />
                  <MainContentBlock />
                  <MainContentBlock />
                </div>
                <div className="main__footer">
                  <MainFooterLeft />
                  <MainFooterRight />
                </div>
              </main>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="foot">
              <FooterLeft />
              <FooterCenter />
              <div className="foot__right">
                <FooterRightTop />
                <FooterRightBottom />
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

