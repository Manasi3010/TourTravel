import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent implements OnInit {
  images: Array<object> = [
    {
      image:
        'https://www.regent-holidays.co.uk/upload-files/product-hotels-gallery/hotel-narutis-lithuania_1_narutis-hotel.jpg',
      thumbImage:
        'https://www.regent-holidays.co.uk/upload-files/product-hotels-gallery/hotel-narutis-lithuania_1_narutis-hotel.jpg',
      title: 'Hotel 1',
    },
    {
      image:
        'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?cs=srgb&dl=pexels-donald-tong-189296.jpg&fm=jpg',
      thumbImage:
        'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?cs=srgb&dl=pexels-donald-tong-189296.jpg&fm=jpg',
      title: 'Hotel 2',
    },
    {
      image:
        'https://www.regent-holidays.co.uk/upload-files/product-hotels-gallery/nordic-hotel-forum-estonia_2_pool-of-nordic-hotel-forum.jpg',
      thumbImage:
        'https://www.regent-holidays.co.uk/upload-files/product-hotels-gallery/nordic-hotel-forum-estonia_2_pool-of-nordic-hotel-forum.jpg',
      title: 'Hotel 3',
    },
    {
      image:
        'https://tse2.mm.bing.net/th?id=OIP.9IlLsFg_I8wtX7zRHAzaqQHaEo&pid=Api&P=0',
      thumbImage:
        'https://tse2.mm.bing.net/th?id=OIP.9IlLsFg_I8wtX7zRHAzaqQHaEo&pid=Api&P=0',
      title: 'Hotel 4',
    },
    {
      image:
        'http://www.e-architect.co.uk/images/jpgs/london/riva_hotel_london_fp230409_2.jpg',
      thumbImage:
        'http://www.e-architect.co.uk/images/jpgs/london/riva_hotel_london_fp230409_2.jpg',
      title: 'Hotel 5',
    },
    {
      image:
        'http://yesofcorsa.com/wp-content/uploads/2019/02/Phuket-Hotels-Desktop-Wallpaper-Free-1024x683.jpg',
      thumbImage:
        'http://yesofcorsa.com/wp-content/uploads/2019/02/Phuket-Hotels-Desktop-Wallpaper-Free-1024x683.jpg',
      title: 'Hotel 6',
    },
    {
      image:
        'https://tse3.mm.bing.net/th?id=OIP.T29JxH6zxY9z9rqLsME0kwHaE8&pid=Api&P=0',
      thumbImage:
        'https://tse3.mm.bing.net/th?id=OIP.T29JxH6zxY9z9rqLsME0kwHaE8&pid=Api&P=0',
      title: 'Hotel 7',
    },
    {
      image:
        'http://media-cdn.tripadvisor.com/media/photo-s/02/be/09/d3/diamond-hotel-philippines.jpg',
      thumbImage:
        'http://media-cdn.tripadvisor.com/media/photo-s/02/be/09/d3/diamond-hotel-philippines.jpg',
      title: 'Hotel 8',
    },

    {
      image:
        'https://www.hotellosgatos.com/photogallery/large/hotel/common-areas-23.jpg',
      thumbImage:
        'https://www.hotellosgatos.com/photogallery/large/hotel/common-areas-23.jpg',
      title: 'Hotel 9',
    },
    {
      image:
        'https://tse2.mm.bing.net/th?id=OIP.tht0BFEI4eA_cE2uN7366QHaEZ&pid=Api&P=0',
      thumbImage:
        'https://tse2.mm.bing.net/th?id=OIP.tht0BFEI4eA_cE2uN7366QHaEZ&pid=Api&P=0',
      title: 'Hotel 10',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
