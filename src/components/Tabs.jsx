export function Tabs(props) {
  const { todos, selectedTab, setSelectedTab } = props;

  const tabs = ['All', 'Open', 'Completed'];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        
        // numOfTasks() calculates the number of tasks in each tab 
        const numOfTasks = function() {
          if (tab === 'All') return todos.length;
          if (tab === 'Open') return todos.filter(val => !val.complete).length;
          return todos.filter(val => val.complete).length;
        }

        return (
          <button key={tabIndex} 
            className={'tab-button ' + (tab === selectedTab ? 'tab-selected' : '')}
            onClick={() => {
              setSelectedTab(tab);
            }}
          >
            <h4>{tab} <span>({numOfTasks()})</span></h4>
          </button>
        )
      })}
      <hr />
    </nav>
  )
}