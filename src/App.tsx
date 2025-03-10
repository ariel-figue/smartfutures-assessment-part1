import "./App.css";
import CollapsibleSection from "./components/CollapsibleSections";
import UserList from "./components/Part 1/UserList/UserList";
import Counter from "./components/Part 2/Counter";

function App() {
  return (
    <div className="App">
      <header
        className="flex items-center justify-center px-4 py-2 h-[75px] bg-[#000000B3] shadow-md text-center text-white text-4xl w-full"
        role="banner"
      >
        <div className="flex items-center justify-center space-x-4 px-4">
          <img
            src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='White'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20256%20256'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20.cls-2%20{%20fill:%20%23ffc313;%20}%20%3c/style%3e%3c/defs%3e%3cg%20id='Logo'%3e%3cpolygon%20id='F1'%20class='cls-2'%20points='142%20246.25%20142.15%2010.25%20253%2010.25%20253%2044.27%20181.69%2044.27%20181.69%20109.76%20215.65%20109.76%20215.65%20100.57%20244.23%20128.84%20215.65%20153.66%20215.65%20145.68%20181.64%20145.91%20181.76%20246.25%20142%20246.25'/%3e%3cg%20id='S1'%3e%3cpath%20class='cls-1'%20d='M134.71,70.34h-40.57s-3.08-12.8-5.42-16.95c-3.42-6.07-8.84-10.26-17.19-10.42-8.5-.16-13.62,3.85-16.96,10.28-7.65,14.74-3.44,28.23,7.62,39.66,9.52,9.84,21.14,18.14,31.91,27.05,19.99,16.54,37.06,34.42,41.04,59.54,3.23,20.35-2.69,37.97-18.48,52.97-7.55,7.17-17.71,10.37-28.47,12.07-38.57,6.09-70.18-8.43-80.66-42.58-2.15-7.01-4.54-25.09-4.54-25.09H42.83l1.27,6.26c2.04,9.09,5.03,18.13,14.27,24.52,8.1,5.6,18.70,5.82,26.1-.5,12.86-10.98,14.05-28.38,.9-40.89-16.61-15.8-34.88-30.27-51.93-45.73C13.83,102.74,4.21,82.13,8.99,56.68,13.12,34.66,24.94,19.17,49.89,12.43c25.13-6.79,55.38-.7,72.39,18.66,8.46,9.63,12.09,32.85,12.43,39.25Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
            alt="Smart Futures Logo"
            className="h-[50px] left-0 absolute ml-4"
          />
          <span className="inline-block">
            SmartFutures Assessment - Ariel Figueroa
          </span>
        </div>
      </header>
      <main className="flex-grow flex p-8 h-100vh">
        <div className="w-full text-center">
          <CollapsibleSection title="Part 1: User List" defaultOpen={true}>
            <UserList />
          </CollapsibleSection>
          <CollapsibleSection title="Part 2: Counter">
            <Counter />
          </CollapsibleSection>
        </div>
      </main>
    </div>
  );
}

export default App;
