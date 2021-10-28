import Image from "next/image"
import {Avatar, Button, Divider, Drawer, Dropdown, Input, Menu, Space} from "antd";
import {AiOutlineClockCircle, BiSearchAlt, BsList} from "react-icons/all";
import {PREFIX_FRONT_URL} from "../../utils/constant";
import constant from "/utils/constant"
import {useRouter} from "next/router";
import {useState} from "react";
import Link from "next/link";
import SearchInput from "./SearchInput";
import qs from 'qs'


function Navbar({}) {
  const router = useRouter()
  const [searchMobile, setSearchMobile] = useState(false)
  const [visibleDrawer, setVisibleDrawer] = useState(false)

  function IconMenu({src}) {
    return (
      <Image src={src} width={30} height={30}/>
    )
  }


  // const menuStats = () => [
  //   <Menu.Item key="ranking" onClick={() => router.push(`${PREFIX_FRONT_URL}/${constant.routes.NFT_RANKING}`)}
  //     className="font-black text-base px-4">
  //     {t('nft-sidebar-ranking')}
  //   </Menu.Item>,
  //   <Divider className="my-1"/>,
  //   <Menu.Item key="activity"
  //     onClick={() => router.push(`${PREFIX_FRONT_URL}/${constant.routes.NFT_ACTIVITY}`)}
  //     className="font-black text-base px-4">
  //     {t('nft-sidebar-activity')}
  //   </Menu.Item>
  // ]

  const menuUser = (
    <Menu>
      <Menu.Item key="profile" className="font-black text-base px-4">
        <Link href={`${PREFIX_FRONT_URL}/${constant.routes.NFT_ACCOUNT}`}>
          Profile
        </Link>
      </Menu.Item>
      <Divider className="my-1"/>
    </Menu>
  )

  function logout() {
    if (process.browser) {
      localStorage.clear()
    }
    router.reload()
  }

  return (
    <div className="flex justify-center z-50 bg-white w-full shadow-md px-6 h-navbar">
      <div className="w-full flex items-center justify-between navbar absolute max-w-screen-xl h-navbar">
        <Link href={"/"}>
          <Image src="/images/logo.svg" width={125} height={70} className="cursor-pointer"></Image>
        </Link>
        <SearchInput searchMobile={searchMobile}/>
        <Space size={process.browser && window.innerWidth > 768 ? 'large' : 'small'} className="h-full">
          {/*<Dropdown overlay={<Menu className="min-w-menu">*/}
          {/*  {menuStats()}</Menu>}>*/}
          {/*  <span className="font-black text-base text-gray-400 hover:text-black cursor-pointer hidden md:block"*/}
          {/*    onClick={e => e.preventDefault()}>{t('nft-sidebar-stats')}</span>*/}
          {/*</Dropdown>*/}
          {/*<Link*/}
          {/*  href={`${PREFIX_FRONT_URL}/${constant.routes.NFT_ASSET}/create`}>*/}
          {/*  <Button*/}
          {/*    className="py-2 px-6 font-black text-sm h-auto transition-all duration-500 bg-gradient-to-r from-bright-turquoise via-summer-sky to-slate-blue hover:from-pink-500 hover:to-yellow-500 border-none rounded-full text-white active:text-white hover:text-white hidden sm:block text-gray-100">*/}
          {/*    {t('nft.landing.title.create')}*/}
          {/*  </Button>*/}
          {/*</Link>*/}
          {/*{process.browser && window.innerWidth < 768 && <Button shape="circle" icon={<SearchOutlined/>} className="block md:hidden"*/}
          {/*  onClick={() => setSearchMobile(true)}/>}*/}
          {/*{utils.getToken() && utils.getPubKey() ? <Dropdown overlay={menuUser}>*/}
          {/*  <div onClick={e => e.preventDefault()} className="">*/}
          {/*    <Avatar icon={<UserOutlined/>} className="flex items-center justify-center"/>*/}
          {/*  </div>*/}
          {/*</Dropdown> :*/}
          {/*  <Button className="py-2 px-6 font-black text-sm rounded-full h-auto hidden md:block"*/}
          {/*    onClick={connectWallet}>{t('nft.navbar.connect-wallet')}</Button>}*/}
          {/*<Button shape="circle" icon={<BsList/>} className="block md:hidden flex justify-center items-center"*/}
          {/*  onClick={() => setVisibleDrawer(true)}/>*/}
          <Button shape={'circle'} className="border-none hover:shadow-lg p-2 h-auto flex items-center" onClick={() => router.push(constant.routes.CART)}>
            <Image src={'/lotties/shopping-cart.gif'} width={30} height={30}/>
          </Button>
        </Space>
        <div
          className={`${searchMobile ? 'flex' : 'hidden'} items-center absolute h-navbar w-full bg-white left-0 top-0 px-4`}>
          <Button shape="circle" icon={<AiOutlineClockCircle/>} onClick={() => setSearchMobile(false)}/>
          <SearchInput searchMobile={searchMobile}/>
        </div>
        <Drawer
          title={<Link href={"/"}>
            <Image src="/images/logo.svg" width={125} height={40} className="cursor-pointer"></Image>
          </Link>}
          placement={'right'}
          width={'100%'}
          onClose={() => setVisibleDrawer(false)}
          visible={process.browser && window.innerWidth <= 768 && visibleDrawer}
          bodyStyle={{
            padding: 0,
          }}
        >
          <div className="flex flex-col h-full relative">
            {/*{!utils.getToken() &&*/}
            {/*          <Button className="py-2 px-6 font-black text-sm rounded-full h-auto m-3"*/}
            {/*            onClick={connectWallet}>{t('nft.navbar.connect-wallet')}</Button>}*/}
            {/*<Menu*/}
            {/*  mode="inline"*/}
            {/*  className="flex-1"*/}
            {/*  onSelect={() => setVisibleDrawer(false)}*/}
            {/*>*/}
            {/*  /!*<Menu.SubMenu key="stats" title={t('nft-sidebar-stats')}*!/*/}
            {/*  /!*  className="font-semibold text-base pl-0">*!/*/}
            {/*  /!*  {menuStats()}*!/*/}
            {/*  /!*</Menu.SubMenu>*!/*/}
            {/*</Menu>*/}
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default Navbar
