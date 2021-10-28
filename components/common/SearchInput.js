import {Input} from "antd";
import constant, {PREFIX_FRONT_URL} from "../../utils/constant";
import qs from "qs";
import {BiSearchAlt} from "react-icons/all";
import {useState} from "react";
import {useRouter} from "next/router";

function SearchInput({searchMobile}) {
  const [searchText, setSearchText] = useState('')
  const router = useRouter()

  return (
    <Input
      className={`${searchMobile ? 'inline-flex' : 'hidden'} 
            md:inline-flex flex-1 w-auto border-none h-9 active:h-12 bg-neutral-3 w-auto
            outline-none shadow-none mx-4 rounded-full hover:shadow-lg active:shadow-lg hover:border`}
      placeholder={'Search'}
      value={searchText}
      onChange={(e) => {
        setSearchText(e.target.value)
        if (e.target.value == '') {
          router.push(`${PREFIX_FRONT_URL}/${constant.routes.NFT_ASSET}?${qs.stringify({keyword: ''})}`)
        }
      }}
      onPressEnter={(e) => {
        if (e.key === 'Enter')
          router.push(`${PREFIX_FRONT_URL}/${constant.routes.NFT_ASSET}?${qs.stringify({keyword: searchText})}`)
      }}

      allowClear={true}
      prefix={<BiSearchAlt/>}/>
  )
}

export default SearchInput
