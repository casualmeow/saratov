const axios = require('axios');

module.exports = {
    name: 'statham',
    description: 'returns random Jason Statham phrase',
    async execute(message, args) {
        try {
            const response = await axios.get('https://wzhxycl.fun/random');
            message.channel.send(JSON.stringify(response.data));
        } catch (error) {
            console.error(error);
        }
    }
};
