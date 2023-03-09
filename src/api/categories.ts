import axios from 'axios';
import Config from 'react-native-config';

export async function GetCategories() {
  try {
    let url = `${Config.API_URL}/getCategories`;
    console.log('url', Config.API_URL);
    let options = {
      url,
      headers: {'Content-Type': 'application/json'},
      method: 'get',
    };

    const res = await axios(options);
    console.log('res', res);
    if (res.status == 200) {
      return {
        success: true,
        data: res.data,
      };
    } else {
      return {
        eor: true,
        errorMessage: 'error.unknown_error',
        errorMessageTechnical:
          'Unknown response status. status: ' + res.data.status,
      };
    }
  } catch (err) {
    console.log('Error', err);
    // throw new Error(err);
  }
}
