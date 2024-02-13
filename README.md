# 資料夾架構 
## 1. app => 首頁及 API 路由的存放
### 1.1 page.jsx => 顯示首頁的內容
### 1.1.1 layout.jsx => 網頁的 layout 樣式設定，包住頁首以及頁尾
#### 1.2 app=>api=>auth=>[...nextauth]=>route.js，用來定義使用 Google 登入、登出與 MongoDb 資料庫間的關係函式
#### 1.3 app=> create-prompt 資料夾 => page.jsx 建立貼文的頁面，裡面包含 Form Component ( components 資料夾 => Form.jsx)，表格的樣式主要建立在 Form Component 內，其中在 page.jsx 內中所 fetch 的 api 路由 '/api/prompt/new' 的內容是建立在 api 資料夾 => prompt 子資料夾 => new 子資料夾 => route.js 內

#### 1.4 在 app 資料夾 => api 子資料夾 => prompt 子資料夾 => route.js ，是用來將存放在 MongoDb 所有使用者所發表的意見撈取出來的後端路由設定

#### 1.5 在 app 資料夾 => profile 子資料夾 => page.jsx 建立登入後顯示該使用者所有發表過的意見樣式表，其中樣式表的樣式設定是寫在 components 資料夾下的 Profile.jsx 內

#### 1.6 在 app 資料夾 => users 子資料夾 => [id] 子資料夾 => posts 子資料夾 => route.js ，裡面設定回傳登入後特定使用者所發表過的意見資料


#### 1.7 在 app 資料夾 => api 子資料夾 => prompt 子資料夾 => [id] 子資料夾 => route.js ，裡面設定登入後特定使用者可以讀取、編輯、刪除其所發表過的意見內容，這個路由會使用在 app 資料夾 => update-prompt 子資料夾 => page.jsx 內裡面

## 2. public => 存放靜態圖檔

## 3. models => 定義資料庫的 Schema
### 3.1 user.js => 在 MongoDb 資料庫中建立使用者模型，以存放登入的使用者資料
### 3.2 prompt.js => 在 MongoDb 資料庫內中建立讓使用者發表意見的模型，將使用者所輸入的意見放入 MongoDb 資料庫中。

## 4.components => 存放會重複使用的 JSX Components
### 4.1 Nav.jsx => 是所有頁面的樣式 ( 頁首 & 頁尾 )
### 4.2 Provider.jsx => 將各狀態傳遞給各頁面的傳遞 Component 
### 4.3 Form.jsx => 當進入創造意見頁面時的 輸入表單的樣式 Component
### 4.4 Feed.jsx => 將使用者所有輸入的意見從 MongoDb 中撈取出來並顯示在首頁中，其中使用了 /api/prompt 路由，也在裡面建立了 PromptCardList 函式用來顯示所有的意見卡片
### 4.5 PrmoptCard.jsx => 建立並顯示每一位使用者發表意見的樣式表格

## 5. styles => 所有的 CSS 樣式設定

## 6. utils => 存放功能函式
### 6.1 database.js => 用 Mongoose 設定連接 MongoDb 的設定

## 7. 開發流程 
### 7.1 建立 app 資料夾下的 page.jsx & layout.jsx 
#### 7.2 layout.jsx 中夾住了 Nav component，代表頁首的樣式，Provider      component   代表給全部頁面傳遞 Session 的設定
#### 7.2.1 Nav.jsx 中設定了桌上及行動版的樣式，並分別用 Google 來判斷是否登入

### 7.3  app 資料夾 => api 子資料夾 => auth 子資料夾 => [...nextauth] 子資料夾內建立 route.js ，已建立使用 Google 來驗證登入的後端設定，其中包含 signIn ( 將 Google 使用者的資料放進 MongoDb 資料庫內)

### 7.4 在 utils 資料夾中建立 database.js ，用來連線到 MongoDb 資料庫

### 7.5 在 models 資料夾內建立 user.js 以建立使用者的資料庫模型，其中 User 模型是用在 [...nextauth] => route.js 內

### 7.6 在 app 資料夾 => create-prompt 子資料夾內 => page.jsx ，裡面是進入創造意見頁面的設定，其中裡面包含了從 Componet 資料夾 => Form.jsx Componet ，用 Form.jsx Componet 來顯示所有輸入表單的樣式。

### 7.7 在 models 資料夾內建立 prompt.js 以建立使用者輸入意見的資料庫模型，其中 Prompt  模型用在 app 資料夾 => api 子資料夾 => prompt 子資料夾 => new 子資料夾 => route.js 內，用來設定將使用者所輸入的內容放進 MongoDb 資料庫內。

### 7.8 在 app 資料夾 => api 子資料夾 => prompt 子資料夾 => route.js ，是用來將存放在 MongoDb 所有使用者所發表的意見撈取出來的後端路由設定

### 7.9 在 app 資料夾 => profile 子資料夾 => page.jsx 建立登入後顯示該使用者所有發表過的意見樣式表，其中樣式表的樣式設定是寫在 components 資料夾下的 Profile.jsx 內

### 7.10 在 app 資料夾 => api 子資料夾 => prompt 子資料夾 => [id] 子資料夾 => route.js ，裡面設定登入後特定使用者可以讀取、編輯、刪除其所發表過的意見內容，這個路由會使用在 app 資料夾 => update-prompt 子資料夾 => page.jsx 內裡面




