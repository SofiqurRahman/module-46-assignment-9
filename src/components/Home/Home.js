import React from 'react';
import Room from '../Room/Room';

const Home = () => {
    const style = {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'absolute',
        top: '180px',
        right: '10px',
        width: '50%',
        height: '75%',
        margin: '30px'
    }
    const rooms = [
        {
            title: <b>Light bright airy stylish apt & safe peaceful stay</b>,
            description: '4 guests   2 bedrooms   2 beds   2 baths',
            imgUrl: 'https://pix10.agoda.net/hotelImages/338/338318/338318_17030309360051349290.jpg?s=1024x768',
            other: 'Wif Air conditioning Kitchen',
            extra: 'Cancellation flexibility available',
            price: <b>$35/night $167total</b>
        },
        {
            title: <b>Apartment in Lost Panorama very cool area here</b>,
            description: '4 guests   2 bedrooms   2 beds   2 baths',
            imgUrl: 'https://pix10.agoda.net/hotelImages/149053/-1/670d267938df2a6d9c59fc8434f966f4.jpg',
            other: 'Wif Air conditioning Kitchen',
            extra: 'Cancellation flexibility available',
            price: <b>$55/night $167total</b>
        },
        {
            title: <b>AR Lounge & Pool (r&r + b&b) Natural place like</b>,
            description: '4 guests   2 bedrooms   2 beds   2 baths',
            imgUrl: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/19/82/1982523_v10.jpeg',
            other: 'Wif Air conditioning Kitchen',
            extra: 'Cancellation flexibility available',
            price: <b>$45/night $167total</b>
        }
    ]
    return (
        <div style={style}>
            {
                rooms.map(room => <Room key={room.bedType} room={room}></Room>)
            }
        </div>
    );
};

export default Home;