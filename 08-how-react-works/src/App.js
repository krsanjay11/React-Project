import { useState } from "react";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

// console.log(<DifferentContent test={23} />); // returned react element - {$$typeof: Symbol(react.element), key: null, ref: null, props: {…}, type: ƒ, …}
// console.log(DifferentContent()); // {$$typeof: Symbol(react.element), type: 'div', key: null, ref: null, props: {…}, …}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="tabs">
        {content.map((_, i) => (
          <Tab num={i} activeTab={activeTab} key={i} onClick={setActiveTab} />
        ))}
        <Tab
          num={content.length}
          activeTab={activeTab}
          onClick={setActiveTab}
        />
      </div>

      {activeTab <= content.length - 1 ? (
        <TabContent
          item={content.at(activeTab)}
          key={content.at(activeTab).summary}
        />
      ) : (
        <DifferentContent />
      )}

      {/* {TabContent({ item: content.at(0) })} // react see this as a react element not a component instance*/}
    </div>
  );
}

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  console.log("Render");

  function handleInc() {
    setLikes((likes) => likes + 1);
  }

  function handletripleInc() {
    // setLikes(likes + 1);
    // console.log(likes); // 0 access to stale state
    // setLikes(likes + 1);
    // setLikes(likes + 1);

    // setLikes((likes) => likes + 1); // we have access to current/latest state in callback function
    // setLikes((likes) => likes + 1);
    // setLikes((likes) => likes + 1);

    handleInc();
    handleInc();
    handleInc();
  }

  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
    console.log(likes); // 3 - stale state
  }

  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handletripleInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
}

function DifferentContent() {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}
