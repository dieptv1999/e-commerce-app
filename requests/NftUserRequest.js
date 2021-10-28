import BaseRequest from './BaseRequest';

const schema = 'user';
/**
 * key base on host:port
 */
export default class NftUserRequest extends BaseRequest {
  /** *
     *
     * @param params
     * @param {string} params.address
     * @param {string} params.sig
     * @param {string} params.message
     * @returns {Promise<*|undefined>}
     */
  login(params) {
    const url = `${schema}/login`;
    return this.post(url, params);
  }

  fetchUserCollection(params) {
    const url = `${schema}/${params.uid}/collections`;
    delete params.uid;
    return this.get(url, params);
  }

  fetchUserInfo(params) {
    const url = `${schema}`;
    return this.get(url, params);
  }

  fetchUserItems(params) {
    const url = `${schema}/items`;
    return this.get(url, params);
  }

  updateUserInfo(params) {
    const url = `${schema}/${params.uid}`;
    return this.get(url, params);
  }
}
