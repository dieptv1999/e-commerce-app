import {
  Col, Row,
} from 'antd';
import {
  FaFacebookF, FaTwitter, FaYoutube, FaTelegramPlane,
} from 'react-icons/fa';
import Image from "next/image"

function FooterComponent({}) {
  return (
    <>
      <img className="absolute top-0 left-0 z-0 opacity-10" alt="shape" src={'/images/shape-lines.svg'}/>
      <div className="footer-home" id="trustkeys">
        <div className="footer-contain max-w-screen-xl">
          <div className="footer-top" style={{marginBottom: 58}}>
            <Row className="footer-top-row">
              <Col xl={4} xs={24}>
                <div className="item_links">
                  <h4><a href="https://tkblockchain.net/" target="_blank" rel="noreferrer">Musillier</a></h4>
                  <a className="nav-link" target="_blank" href="https://trustkeys.network/" rel="noreferrer">About
                    us</a>
                  <a className="nav-link" target="_blank" href="https://trustkeys.network/" rel="noreferrer">Privacy
                    Policy</a>
                  <a className="nav-link" target="_blank" href="https://trustkeys.network/" rel="noreferrer">Terms of
                    service</a>
                </div>
              </Col>
              <Col xl={5} xs={12} lg={12}>
                <div className="item_links">
                  <div className="bg-white rounded">
                    <Image src={'/images/stripe-badge.png'} height={98} width={300}/>
                  </div>
                  {/*<a className="nav-link" target="_blank" href="https://trustkeys.network/" rel="noreferrer">{t('footer.trustkey.about.us')}</a>*/}
                  {/*<a className="nav-link" target="_blank" href="https://blog.trustkeys.network/" rel="noreferrer">{t('footer.trustkey.blogs')}</a>*/}
                  {/*<a className="nav-link" target="_blank" href="https://sonek.vn" rel="noreferrer">{t('footer.partner')}</a>*/}
                  {/*<a className="nav-link" href="#">{t('footer.trustkey.community')}</a>*/}
                  {/*<a className="nav-link" href="#">{t('footer.trustkey.terms')}</a>*/}
                  {/*<a className="nav-link" href="#">{t('footer.trustkey.privacy')}</a>*/}
                  {/*<a className="nav-link" href="#">{t('footer.trustkey.new.and.annoucements')}</a>*/}
                  {/*<a className="nav-link" href="#">{t('footer.trustkey.contact')}</a>*/}
                </div>
              </Col>
              <Col xl={11} xs={12} lg={12}>
                <div className="item_links flex flex-col items-center">
                  <span className="nav-link text-center">201 East 5th St. STE 1200, Sheridan, Wyoming 82801, United States</span>
                  <span className="nav-link text-center">24/7 Support: support@litalitee.com</span>
                  <div className="font-semibold text-lg text-white">Disclaimer</div>
                  <span className="nav-link text-center">Litalitee is a Fan-Based Design Contribution & Distribution Company.</span>
                  <span className="nav-link text-center">All apparels/props seen on this site is produced by Fans.</span>
                  <span className="nav-link text-center">ALL DESIGN is intended as a fan representation only and is not intended to infringe upon any copyright.</span>
                  {/*<h4>{t('footer.title.product')}</h4>*/}
                  {/*<a className="nav-link" href="#">{t('footer.trustkey.exchange')}</a>*/}
                  {/*<a className="nav-link" target="blank" href="https://trustkeys.network/">{t('footer.trustkey.trustkey.network')}</a>*/}
                  {/*<a className="nav-link" target="blank" href="https://butta.vn/">{t('footer.trustkey.butta.social.network')}</a>*/}
                  {/*<a className="nav-link" target="blank" href="https://123xe.vn/">{t('footer.trustkey.123xe')}</a>*/}
                  {/*<a className="nav-link" href="#">{t('footer.trustkey.launchpad')}</a>*/}
                  {/*<a className="nav-link" href="#">{t('footer.trustkey.trustkeys.wallet')}</a>*/}
                  {/*<a className="nav-link" href="#">{t('footer.trustkey.incubator')}</a>*/}
                </div>
              </Col>
              {/*<Col xl={4} xs={10} lg={12}>*/}
              {/*  <div className="item_links">*/}
              {/*    /!*<h4>{t('footer.title.service')}</h4>*!/*/}
              {/*    /!*<a className="nav-link" href="#Downloads">{t('footer.trustkey.download')}</a>*!/*/}
              {/*    /!*<a className="nav-link" href="#">{t('footer.trustkey.buy.assets')}</a>*!/*/}
              {/*    /!*<a className="nav-link pointer" target="_blank" href={`https://trustkeys.exchange/tradingfree`} rel="noreferrer">{t('footer.trustkey.fees')}</a>*!/*/}
              {/*    /!*<a className="nav-link pointer" target="_blank" href={`https://trustkeys.exchange/referral`} rel="noreferrer">{t('footer.trustkey.referral')}</a>*!/*/}
              {/*    /!*<a className="nav-link" href="#">{t('footer.trustkey.referral')}</a>*!/*/}
              {/*    /!*<a className="nav-link" href="#">{t('footer.trustkey.trustk')}</a>*!/*/}
              {/*    /!*<a className="nav-link" href="#">{t('footer.trustkey.otc.trading')}</a>*!/*/}
              {/*    /!*<a className="nav-link" href="#">{t('footer.trustkey.listing.application')}</a>*!/*/}
              {/*    /!*<a className="nav-link" href="#">{t('footer.trustkey.historical.market.data')}</a>*!/*/}
              {/*  </div>*/}
              {/*</Col>*/}
              {/*<Col span={4}>*/}
              {/*  <div className="item_links">*/}
              {/*    <h4>{t('footer.title.support')}</h4>*/}
              {/*    <a className="nav-link" href="#">{t('footer.trustkey.give.us.feedback')}</a>*/}
              {/*    <a className="nav-link" href="#">{t('footer.trustkey.support.desk')}</a>*/}
              {/*    <a className="nav-link" href="#">{t('footer.trustkey.submit.a.ticket')}</a>*/}
              {/*    <a className="nav-link" href="#">{t('footer.trustkey.api.documentation')}</a>*/}
              {/*    <a className="nav-link" href="#">{t('footer.trustkey.trustkeys.verifi')}</a>*/}
              {/*  </div>*/}
              {/*</Col>*/}
              {/*<Col span={4}>*/}
              {/*  <div className="item_links">*/}
              {/*    <h4>{t('footer.title.learn')}</h4>*/}
              {/*    <a className="nav-link" href="#">{t('footer.trustkey.buy.trustk')}</a>*/}
              {/*    <a className="nav-link" href="#">*/}
              {/*      {t('footer.trustkey.buy.btc')}*/}
              {/*      {' '}*/}
              {/*    </a>*/}
              {/*    <a className="nav-link" href="#">{t('footer.trustkey.buy.eth')}</a>*/}
              {/*    <a className="nav-link" href="#">{t('footer.trustkey.buy.dot')}</a>*/}
              {/*  </div>*/}
              {/*</Col>*/}
              <Col xl={4} xs={12} lg={12}>
                <div className="item_links">
                  <h4>Community</h4>
                  <a href="https://www.facebook.com/trustkeys.network" target="blank"
                     className="btn-social fill-dark facebook-item rounded-16 mb-3 mr-2">
                    <FaFacebookF/>
                  </a>
                  <a href="https://twitter.com/TrustKeysGlobal" target="blank"
                     className="btn-social fill-dark twitter-item rounded-16 mb-3 mr-2">
                    <FaTwitter/>
                  </a>
                  <br/>
                  <a href="https://www.youtube.com/channel/UCOc5zYsve_1TOvxRqnk7gmg" target="blank"
                     className="btn-social fill-dark youtube-item rounded-16 mb-3 mr-2">
                    <FaYoutube/>
                  </a>
                  <a href="https://t.me/trustkeys/" target="blank"
                     className="btn-social fill-dark skype-item rounded-16 mb-3 mr-2">
                    <FaTelegramPlane/>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
          <div className="footer-bot flex justify-center">
            <div className="copyright">
              <span>
                        © 2021
                <a href="https://trustkeys.network/" target="_blank" rel="noreferrer">Musillier.</a>
                        All Right Reseved
              </span>
            </div>
          </div>

        </div>
        <div className="footer-img">
          <img src={'/images/blue.svg'}/>
        </div>
      </div>
    </>
  );
}


export default FooterComponent;
