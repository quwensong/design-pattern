let redis = require('redis');
let client1 = redis.createClient(6379, '127.0.0.1');
let client2 = redis.createClient(6379, '127.0.0.1');

client1.subscribe('channel_a');
client1.subscribe('channel_b');
client1.on('message', (channel, message) => {
    console.log('client1', channel, message);
    client1.unsubscribe('channel_a');
});
client2.publish('channel_a', 'a_hello');
client2.publish('channel_b', 'b_hello');

setTimeout(() => {
    client2.publish('channel_a', 'a_world');
    client2.publish('channel_b', 'b_world');
}, 3000);