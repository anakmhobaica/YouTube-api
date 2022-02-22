// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Footer from './components/Footer';
import Home from './components/Home';
import YouTube from './components/YouTube';

function App() {
  const [homeView, setHomeView] = useState(true)
  const switchView = (value) => {
    setHomeView(value);
  }
  return (
    <>
      <TransitionGroup component={null}>
        {(homeView) ?
        <CSSTransition in={true} appear={true} key={1} timeout={500} classNames="view-left" unmountOnExit><Home/></CSSTransition> :
        <CSSTransition in={true} appear={true} key={2} timeout={500} classNames="view-right" unmountOnExit><YouTube/></CSSTransition>}
      </TransitionGroup>
      <Footer switchView={switchView} />
    </>
  );
}
export default App;
