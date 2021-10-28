import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Link from 'next/link'
import Image from "next/image";
import MenuCustom from "../components/menu";
import CardProduct from "../components/product/CardProduct";
import {Col, Row} from "antd";
import ButtonCustom from "../components/common/ButtonCustom";

const Home = () => {
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen flex justify-center mb-40">
      <div className="max-w-screen-xl w-full h-full flex flex-col">
        <MenuCustom/>
        <Image src={'/images/banner.jpg'} width={1280} height={361} className="mt-3"/>
        <div className="flex flex-col mt-4 px-4">
          <div className="flex w-full justify-between mt-3">
            <div className="text-xl font-semibold">New Arrival</div>
            <ButtonCustom>View all</ButtonCustom>
          </div>
          <Row className="my-4">
            <Col {...dfCol}>
              <CardProduct/>
            </Col>
            <Col {...dfCol}>
              <CardProduct/>
            </Col>
            <Col {...dfCol}>
              <CardProduct/>
            </Col>
            <Col {...dfCol}>
              <CardProduct/>
            </Col>
          </Row>
          <div className="flex w-full justify-between mt-3">
            <div className="text-xl font-semibold">Featured Campaign</div>
            <ButtonCustom>View all</ButtonCustom>
          </div>
          <Row className="my-4">
            <Col {...dfCol}>
              <CardProduct/>
            </Col>
            <Col {...dfCol}>
              <CardProduct/>
            </Col>
            <Col {...dfCol}>
              <CardProduct/>
            </Col>
            <Col {...dfCol}>
              <CardProduct/>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Home

const dfCol = {
  sm: 12,
  md: 12,
  lg: 8,
  xl: 6
}
