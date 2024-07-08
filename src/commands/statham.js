const axios = require('axios');

module.exports = {
    name: 'statham',
    description: 'returns random Jason Statham phrase',
    async execute(message, args) {
        try {
            const response = await axios.get('https://wzhxycl.fun/random');
            const text = response.data.text;
            message.channel.send(text);
        } catch (error) {
            console.error(`nasral v ${error}`);
        }
    }
};
