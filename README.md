# 資料夾架構 
## app => 首頁及 API 路由的存放
### page.jsx => 顯示首頁的內容
### layout.jsx => 網頁的 layout 樣式設定，包住頁首以及頁尾
#### app=>api=>auth=>[...nextauth]=>route.js，用來定義使用 Google 登入、登出與 MongoDb 資料庫間的關係函式
## public => 存放靜態圖檔

## models => 定義資料庫的 Schema
### user.js => 在 MongoDb 資料庫中建立使用者模型，以存放登入的使用者資料

## components => 存放會重複使用的 JSX Components

## styles => 所有的 CSS 樣式設定

## utils => 存放功能函式
### database.js => 用 Mongoose 設定連接 MongoDb 的設定

## 開發流程 
### 建立 app 資料夾下的 page.jex & layout.jsx 
#### layout.jsx 中夾住了 Nav component，代表頁首的樣式，Provider      component   代表給全部頁面傳遞 Session 的設定
#### Nav.jsx 中設定了桌上及行動版的樣式，並分別用 Google 來判斷是否登入
