import { NewTodo } from './components/NewTodo';
import { View } from './components/View';
import { Sidebar } from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      title: 'テスト勉強',
      content: '数学：32時間物理：13時間英語：12時間',
    }
  ])
  const [selectedId, setSelectedId] = useState(1)
  const [mode, setMode] = useState('view') // ['view', 'new']
  return (
    <div>
      <Sidebar selectedId={selectedId} list={list} setList={setList} setMode={setMode} setSelectedId={setSelectedId} callback={() => {
        setMode('new')
      }} />
      <div style={{
        position: 'absolute',
        top: 30,
        left: 400,
      }}>
        {
          mode === 'view' ? <View list={list} selectedId={selectedId} setList={setList} /> : <NewTodo list={list} setList={setList} />
        }
      </div>
    </div>
  );
}

export default App;
