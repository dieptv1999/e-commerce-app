import "nprogress/nprogress.css";
import '/index.scss';
import "../antd.scss";
import 'tailwindcss/tailwind.css';
import SplashScreen from "../components/common/SplashScreen";
import {DefaultSeo} from "next-seo";
import Layout from "../components/layout";
import Head from "next/head";
import _ from "lodash";
import {useEffect, useState} from "react";
import Router, {useRouter} from "next/router";
import NProgress from 'nprogress';
import utils from "/utils"
import {wrapper} from '../redux/store'
import seo from '../next-seo.config';
import constant from "../utils/constant";
import qs from "qs";

NProgress.configure({showSpinner: false});

const privateRoutes = [
  '/asset/create',
  '/account',
  '/user-collection'
]

function App({Component, pageProps}) {
  const isLogin = utils.getToken();
  const router = useRouter()
  const [loading, setLoading] = useState()

  useEffect(() => {
    Router.onRouteChangeStart = () => {
      // console.log('onRouteChangeStart triggered');
      NProgress.start();
      setLoading(true)
    };

    Router.onRouteChangeComplete = () => {
      // console.log('onRouteChangeComplete triggered');
      NProgress.done();
      setLoading(false)
    };

    Router.onRouteChangeError = () => {
      // console.log('onRouteChangeError triggered');
      NProgress.done();
      setLoading(false)
    };
    if (!isLogin && _.find(privateRoutes, e => router.pathname.startsWith(e))) {
      router.replace(`${constant.routes.LOCKED}?${qs.stringify({referrer: router.pathname})}`)
    }
  }, [router.pathname])

  return (
    <Layout>
      <Head>
        <link rel="icon" type="image/png" href="/playstore-icon.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans" rel="stylesheet"/>
        <title>Nft Market</title>
      </Head>
      <DefaultSeo {...seo} />
      {loading ? <SplashScreen/> : <Component {...pageProps} />}
    </Layout>
  )
}

export default wrapper.withRedux(App)
