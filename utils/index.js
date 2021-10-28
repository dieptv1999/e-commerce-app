import {BASE_URL, BASE_URL_PROD, BASE_URL_STAGGING} from "./constant";
import axios from "axios";
import {notification} from "antd";
import moment, {unix} from "moment";
import constant from "./constant"
import _ from "lodash";

const getBaseURL = () => {
  switch (process.env.REACT_APP_STAGE) {
  case 'stagging':
    return BASE_URL_STAGGING;
  case 'prod':
    return BASE_URL_PROD;
  default:
    return BASE_URL;
  }
};

const getRandomColor = () => {
  const colors = ['rgb(255, 158, 18)', 'rgb(109, 188, 0)', 'rgb(247, 109, 192)', 'rgb(70, 99, 226)', 'rgb(177, 89, 220)', 'rgb(235, 88, 73)', 'rgb(255, 199, 90)', 'rgb(0, 147, 255)',]
  return colors[Math.floor(Math.random() * colors.length)]
}

const dumpRequestImage = ({
  file,
  onSuccess,
}, callback = void (0)) => {
  const formData = new FormData();
  formData.append('files', file);
  const customAxios = axios.create({
    baseURL: 'https://upload.photocloud.mobilelab.vn',
    headers: {
      'Content-Type': 'multipart/form-data',
      // Origin: 'https://admin.crypto.mobilelab.vn',
    },
    paramsSerializer(params) {
      return qs.stringify(params);
    },
  });

  customAxios.post('upload', formData)
    .then((resp) => {
      if (resp.data.uploaded_files.length > 0) {
        if (_.isFunction(callback)) {
          callback(resp.data.uploaded_files[0]);
        }
      }
    });
  onSuccess('ok');
};

const dumpRequestVideo = ({
  file,
  onSuccess,
}, callback = void (0)) => {
  const formData = new FormData();
  formData.append('files', file);
  const customAxios = axios.create({
    baseURL: 'https://upload.mediacloud.mobilelab.vn',
    headers: {
      'Content-Type': 'multipart/form-data',
      // Origin: 'https://admin.crypto.mobilelab.vn',
    },
    paramsSerializer(params) {
      return qs.stringify(params);
    },
  });

  customAxios.post('upload', formData)
    .then((resp) => {
      if (resp.data.uploaded_files.length > 0) {
        if (_.isFunction(callback)) {
          callback(resp.data.uploaded_files[0]);
        }
      }
    });
  onSuccess('ok');
};

const showNotification = (message = 'title', description = 'description', type = 'success') => {
  notification[type]({
    message,
    description,
  });
};

function getToken() {
  if (process.browser) {
    let sessionKey = localStorage.getItem(constant.NFT_SESSION);
    if (!_.isEmpty(sessionKey)) {
      let timeExpired = sessionKey.substr(sessionKey.length - 10, 10);
      if (moment().unix() > (parseInt(timeExpired, 10) + 86400)) {
        return undefined;
      } else {
        return sessionKey;
      }
    } else {
      return undefined;
    }
  } else return undefined
}

function getPubKey() {
  if (process.browser)
    return localStorage.getItem(constant.NFT_PUBKEY)
  return undefined
}

function getAddress() {
  if (process.browser)
    return localStorage.getItem(constant.NFT_ADDRESS)
}

function checkImageUrl(url) {
  let regExp = new RegExp("^http:\\/\\/.*$|^https:\\/\\/.*$|^\\/.*$");
  if (url && url !== '' && regExp.test(url)) return true
  else return false
}

function randomString(length = 6) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = '';
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

function getExtension(filename) {
  const parts = filename.split('.');
  return parts[parts.length - 1];
}

function isImage(filename) {
  const ext = getExtension(filename);
  switch (ext.toLowerCase()) {
  case 'jpg':
  case 'gif':
  case 'bmp':
  case 'png':
  case 'jpeg':
    // etc
    return true;
  }
  return false;
}

function isVideo(filename) {
  const ext = getExtension(filename);
  switch (ext.toLowerCase()) {
  case 'm4v':
  case 'avi':
  case 'mpg':
  case 'mp4':
  case 'mkv':
    // etc
    return true;
  }
  return false;
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function formatTimeFromUnix(unixTime, format = 'DD/MM/YYYY') {
  return unix(parseInt(`${unixTime}`.substr(0, 10))).format(format);
}

function getUid(){
  if (process.browser)
    return localStorage.getItem(constant.NFT_USER_UID)
  return undefined
}

export default {
  getBaseURL,
  getRandomColor,
  dumpRequestImage,
  dumpRequestVideo,
  showNotification,
  getToken,
  getPubKey,
  checkImageUrl,
  getAddress,
  randomString,
  isImage,
  isVideo,
  getBase64,
  formatTimeFromUnix,
  getUid,
}
