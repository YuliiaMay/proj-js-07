import axios from 'axios';

export default class SearchNewsApi {
  baseUrl = 'https://api.nytimes.com/svc/search/v2';
  apiKey = '1CftshpIbKCwUhOxVLAbMSPcGc2N2XMQ';

  constructor(query) {
    this.query = query;
    this.page = 0;
  }

  async searchNews() {
    const requestUrl = `${this.baseUrl}/articlesearch.json?q=${this.query}&api-key=${this.apiKey}`;
    return await axios.get(requestUrl).then(response => {
      if (response.status !== 200 || response.data.response.docs.length === 0) {
        throw new Error(response.status);
      }

      return response.data;
    });
  }
}


