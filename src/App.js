import { NewTodo } from './components/NewTodo';
import { View } from './components/View';
import { Sidebar } from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      title: 'テスト勉強',
      content: '勉強',
    },
    {
      id: 2,
      title: 'aaa',
      content: 'ccc',
    },
  ])
  const [selectedId, setSelectedId] = useState(1)
  const [mode, setMode] = useState('view') // ['view', 'new']
  return (
    <div>
      <Sidebar selectedId={selectedId} list={list} setList={setList} setSelectedMode={setSelectedId} setSelectedId={setSelectedId} callback={() => {
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
