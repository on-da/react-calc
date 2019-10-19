アプリの構成

├── index.js
|
├── App.js
├── components
│   ├── NumBtn.js
│   ├── PlusBtn.js
│   └── Result.js
├── actions.js
├── actionTypes.js
└── reducers
　   ├── calculator.js
　   └── index.js


 ・components
  ReduxnにおいてはContainerから呼び出される

  ・actions.js
  電卓アプリで必要となるデータを書き換える機能を格納する場所
  あくまでオブジェクト、どう変化するかというコードはReducerに書く

  ・avtionTypes.js
    アクションの種類を列挙・

　・reducers
　　アクションのロジック部分であるReducerを格納
　　