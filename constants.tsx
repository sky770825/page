import React from 'react';
import { HonorMember, ResourceItem, FaqItem, MeetingInfo } from './types';

export const HONOR_MEMBERS: HonorMember[] = [
  {
    id: '1',
    name: '何青馨',
    title: '一金質獎章',
    imageUrl: 'https://i.postimg.cc/x8XRPBM4/image.jpg',
  },
  {
    id: '2',
    name: '洪怡芳',
    title: '十二金質獎',
    imageUrl: 'https://i.postimg.cc/kXtsR3nV/image.jpg',
  },
  {
    id: '3',
    name: '邱碩鈺',
    title: '一金質獎章',
    imageUrl: 'https://i.postimg.cc/8kYwCPVQ/image.jpg',
  },
];

export const MEETING_LINKS: MeetingInfo[] = [
  {
    label: '公用牌Zoom會議室',
    zoomUrl: 'https://us06web.zoom.us/j/88384176239',
    meetingId: '883 8417 6239',
    isPriority: false,
  },
  {
    label: '華地產Zoom會議室',
    zoomUrl: 'https://us06web.zoom.us/j/86358537640',
    meetingId: '863 5853 7640',
    isPriority: true,
  },
];

export const RESOURCES: ResourceItem[] = [
  {
    id: 'r1',
    title: '權限申請表單',
    subtitle: '申請簡報編輯權限',
    link: 'https://forms.gle/t5A5MLXbg5y9RwQC6',
    iconClass: 'fas fa-external-link-alt',
  },
  {
    id: 'r2',
    title: '25秒個人簡報',
    subtitle: '會員個人頁面編輯',
    link: 'https://docs.google.com/presentation/d/1TQHyB8uyrFvDbZo5pTWXEz8ytos-eSm3PPHzNNLHjx8/edit?usp=sharing',
    iconClass: 'fas fa-edit',
  },
  {
    id: 'r3',
    title: '資訊組輔助機器人',
    subtitle: 'LINE 機器人協助服務',
    link: 'https://lin.ee/2qt2XZI',
    iconClass: 'fab fa-line',
  },
  {
    id: 'r4',
    title: 'BNI線上報名培訓',
    subtitle: '各種培訓課程報名',
    link: 'https://bntw.niiice-design.com/news-category/training/',
    iconClass: 'fas fa-graduation-cap',
  },
  {
    id: 'r5',
    title: '華地產會員線上匹配系統',
    subtitle: '會員資源匹配與合作',
    link: 'https://notebooklm.google.com/notebook/8273ddf2-0ae8-4e49-b98a-969cfd5ea40b',
    iconClass: 'fas fa-handshake',
  },
  {
    id: 'r6',
    title: '資源引薦平台',
    subtitle: '分享及查詢跨區資源',
    link: 'https://hua-real-estate.pages.dev/Referral_Platform',
    iconClass: 'fas fa-share-alt',
  },
  {
    id: 'r7',
    title: 'BNI Connect 快搜名字',
    subtitle: '輸入編號快速查詢會員姓名',
    link: 'https://hua-real-estate.pages.dev/serachname',
    iconClass: 'fas fa-search',
  },
];

export const INVITE_TEXT = `哈囉，我真的很想約你來我們華地產看看！
這裡聚集了全台灣最專注在 包租代管、房地產產業的一群高手：
▋買房導客超強的 KOL
▋實戰經驗滿滿的買房老師
▋每月新增百案的包租代管龍頭
▋還有各種和建商、危老改建、房產行銷合作的夥伴

我們是【線上分會】，不需要五點起床、不用大老遠奔波，你只要在家、打開電腦，就能一起參與這個強者雲集的圈子。

如果你對房地產有興趣，或正在經營這條路，真的推薦你來感受一下這裡的氛圍。

📌 想參加的話，可以幫我填寫這份連結
🔗https://hua-real-estate.pages.dev/invite
我會幫你完成報名，並在線上等你一起來！`;

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq1',
    question: '如何改名？',
    answer: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-primary-600 mb-1">〔電腦版〕</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>將滑鼠停留在您的名稱上，按右上「...」</li>
            <li>選擇「改名」</li>
            <li>輸入編號/姓名/專業別</li>
            <li>輸入後按「改名」</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary-600 mb-1">〔手機版〕</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>點選下方「與會者」</li>
            <li>點選您的名稱，然後點選「改名」</li>
            <li>輸入編號/姓名/專業別</li>
            <li>輸入後按「完成」</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 'faq2',
    question: '如何開啟（關閉）音訊/視訊？',
    answer: (
      <div>
        <h4 className="font-bold text-primary-600 mb-1">〔電腦版/手機版〕</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>點按左下方「音訊」可切換開啟/關閉</li>
          <li>點按左下方「視訊」可切換開啟/關閉</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'faq3',
    question: '如何變更背景？',
    answer: (
      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-primary-600 mb-1">〔電腦版〕</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>將滑鼠停留在您的名稱上，按右上「...」</li>
            <li>選擇「調整背景與效果」</li>
            <li>選擇虛擬背景「＋」</li>
            <li>選擇「新增影像」</li>
            <li>選擇BNI背景電腦版圖片檔</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-primary-600 mb-1">〔手機版〕</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li>點按下方最右方更多「...」</li>
            <li>選擇「背景與效果」</li>
            <li>選擇「＋」</li>
            <li>選擇BNI背景手機版圖片檔</li>
          </ul>
        </div>
      </div>
    ),
  },
];