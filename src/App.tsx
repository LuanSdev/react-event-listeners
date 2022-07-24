import './app.css';

import { TodoList } from './components/todo-list';
import { ListenerProvider } from './contexts/listener-context';
import { TodoProvider } from './contexts/todo-context';

function App() {
  return (
    <div className="App">
      <ListenerProvider>
        <TodoProvider>
          <TodoList />
        </TodoProvider>
      </ListenerProvider>
    </div>
  );
}

export default App;
