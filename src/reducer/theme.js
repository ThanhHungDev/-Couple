

var themes = [
  {
    img: 'image/theme/homeshop.png',
    name: 'ホームショップ',
    author: 'by チュン　タン　フン'
  },
  {
    img: 'image/theme/myservice.png',
    name: 'Ebudezain',
    author: 'by チュン　タン　フン'
  },
  {
    img: 'image/theme/kandc.png',
    name: 'kandc',
    author: 'by チュン　タン　フン'
  },
  {
    img: 'image/theme/doctor-recruit.png',
    name: 'trust-growth',
    author: 'by チュン　タン　フン'
  },
  {
    img: '/image/intro-layout/page-5-465x357.jpg',
    name: 'Home Shop',
    author: 'by Trương Thanh Hùng'
  },
  {
    img: '/image/intro-layout/page-6-465x357.jpg',
    name: '建設',
    author: 'by Trương Thanh Hùng'
  },
  {
    img: '/image/intro-layout/page-7-465x357.jpg',
    name: 'フローリング',
    author: 'by Trương Thanh Hùng'
  },
  {
    img: '/image/intro-layout/page-8-465x357.jpg',
    name: 'ホテル',
    author: 'by Trương Thanh Hùng'
  },
  {
    img: '/image/intro-layout/page-9-465x357.jpg',
    name: '構造2',
    author: 'by Trương Thanh Hùng'
  }
];
import TYPE from "../action/type.js";
export default function (state = themes, action) {
  switch (action.type) {
    case TYPE.HOME.CHNAGE_THEME:
      return action.payload;
    default:
      return state;
  }
}