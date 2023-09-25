/* eslint eqeqeq: "off", curly: "error", @typescript-eslint/no-unused-vars: "off", react-hooks/exhaustive-deps: "off", array-callback-return: "off", no-eval: "off", jsx-a11y/alt-text: "off", jsx-a11y/anchor-is-valid: "off" */
import axios from 'axios';

export const httpGet = async (url, query, headers) => {
    let data = await axios({
        url: url,
        method: 'GET',
        params: query,
        headers: headers
    }).then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
        return err;
    });
    
    return data;
}