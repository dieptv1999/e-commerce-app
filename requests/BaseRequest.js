import consts, { API_VERSION } from "../utils/constant";
import React from "react";
import utils from "../utils";
import _ from 'lodash';
import client from "./Client";
import {LOGOUT} from "../store/actions/auth/action_types";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";

const str = {
  "Blockchain address invalid": "BLOCK_CHAIN_ADDRESS_NOT_EXIST_ERROR",
  "Blockchain address not exist": "BLOCK_CHAIN_ADDRESS_NOT_EXIST_ERROR",
}

export default class BaseRequest {
  version = "v1/nft-marketplace";

  prefix () {
    return '';
  }

  async get(url, params = {}, showNoti = true) {
    try {
      const response = await client.get(`${this.version}/${url}`, { params });
      return this._responseHandler(response, showNoti);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async getWithTimeout(url, params = {}, timeout, showNoti = true) {
    try {
      const response = await client.get(`${this.version}/${url}`, { params, timeout });
      return this._responseHandler(response, showNoti);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async put (url, data = {}, showNoti = true) {
    try {
      const response = await client.put(`${this.version}/${url}`, data);
      return this._responseHandler(response, showNoti);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async post(url, data = {}, showNoti = true) {
    try {
      const response = await client.post(`${this.version}/${url}`, data);
      return this._responseHandler(response, showNoti);
    } catch (error) {
      this._errorHandler(error);
    }
  }

  async del(url, params = {}, showNoti = true) {
    try {
      const response = await client.delete(`${this.version}/${url}`, params);
      return this._responseHandler(response, showNoti);
    } catch (error) {
      this._errorHandler(error);
    }
  }


  async _responseHandler (response, showNoti) {
    const {data} = response;
    let errorCode = _.get(data, 'error.code', 200);

    if (errorCode >= 400) {
      if (!showNoti) {
        throw 'Request failed';
      }


      let message = data.error.message;
      let errorsNode = undefined;

      if (typeof(data.error.message) === 'string') {
        errorsNode = <div style={{ fontWeight: 'bold', color: 'red' }}>
          {_.upperFirst(_.get(str, message) || message)}
        </div>
      } else {
        console.log("xnxx", data.error.message)
        errorsNode = _.map(data.error.message, (message, field) => {
          return (
            <>
              {data.error.message.quantity==="must be greater than 0"?<div style={{ fontWeight: 'bold', color: 'red' }} id={field}>
                {_.upperFirst('error.must_be_greater_than')}
              </div>:<div style={{ fontWeight: 'bold', color: 'red' }} id={field}>
                {utils.upperCaseFirst(message)}
              </div>}
            
            </>
          )
        })
      }
  
      console.log(data.error.message, ': data.error.message src/requests/BaseRequest.js:82');
      
      utils.showNotification(<span style={{ color: 'red', fontWeight: 'bold' }}>{'Error'}</span>, errorsNode, consts.TYPE_ERROR);
  
      if (errorCode === 405 && process.browser) {
        const dispatch = useDispatch()
        const router = useRouter()
        dispatch({
          type: LOGOUT
        });
        await router.push(`/wallet/locked/${response.config.url}`);
        localStorage.clear();
      }

      throw 'Request failed';
    }

    return data;
  }

  _errorHandler(err) {
    if (err.response && err.response.status === 401) { // Unauthorized (session timeout)
      window.location.href = '/';
    }
    throw err;
  }

  getFile(url) {
    window.location.href = `${utils.getBaseURL()}/${API_VERSION}/${url}`;
  }
}
