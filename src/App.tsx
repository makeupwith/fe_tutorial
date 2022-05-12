import React from 'react';
import MessageList from './components/MessageList';

// TODO: ユーザーの入力によってmessageList が可変になるようになる
const messageList = ['こんにちは', 'テスト', 'ですです', 'hogehoge'];

function App() {
  return (
    <div>
      <MessageList messageList={messageList} />
    </div>
  );
}

export default App;
