import {message, Upload} from "antd";
import {useState} from "react";
import {LoadingOutlined} from "@ant-design/icons";
import {MdImage} from "react-icons/all";
import utils from "/utils"

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function UploadImage({_avatarUrl, setAvatarUrl}) {
  const [_loadingUploadImage, setLoadingUploadImage] = useState(false);

  const uploadButton = (
    <div>
      {_loadingUploadImage ? <LoadingOutlined className="w-16 h-16"/> :
        <MdImage style={{opacity: 0.5}} className="w-16 h-16 text-card-gray"/>}
    </div>
  );

  const handleAvatarChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoadingUploadImage(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      // getBase64(info.file.originFileObj, (imageUrl) => {
      //     setAvatarUrl(imageUrl);
      setLoadingUploadImage(false);
      // });
    }
  };

  return (
    <div>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        customRequest={(params) => utils.dumpRequestImage(params, setAvatarUrl)}
        beforeUpload={beforeUpload}
        onChange={handleAvatarChange}
      >
        {_avatarUrl ?
          <div className="w-full h-full p-1">
            <img src={_avatarUrl} alt="avatar" className="w-full h-full object-cover hover:opacity-70"/>
          </div>
          : uploadButton}
      </Upload>
    </div>
  )
}

export default UploadImage