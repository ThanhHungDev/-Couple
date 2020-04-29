var CRAFT_LAYOUTS = [
  {
    img: '/image/intro-layout/page-1-465x357.jpg',
    des: 'ソフト開発'
  },
  {
    img: '/image/intro-layout/page-2-465x357.jpg',
    des: 'インテリアデザイン'
  },
  {
    img: '/image/intro-layout/page-3-465x357.jpg',
    des: 'ビジネススクール'
  },
  {
    img: '/image/intro-layout/page-4-465x357.jpg',
    des: 'レンタカー'
  },
  {
    img: '/image/intro-layout/page-5-465x357.jpg',
    des: '旅行代理店'
  },
  {
    img: '/image/intro-layout/page-6-465x357.jpg',
    des: '建設'
  },
  {
    img: '/image/intro-layout/page-7-465x357.jpg',
    des: 'フローリング'
  },
  {
    img: '/image/intro-layout/page-8-465x357.jpg',
    des: 'ホテル'
  },
  {
    img: '/image/intro-layout/page-9-465x357.jpg',
    des: '構造2'
  }
];
import TYPE from "../action/type.js";
export default function (state = CRAFT_LAYOUTS, action) {
  switch (action.type) {
    case TYPE.HOME.CHANGE_LAYOUTS:
      return action.payload;
    default:
      return state;
  }
}