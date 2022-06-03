import logo from './logo.svg';
import styles from './App.module.scss'; // import as variables
import {Link,Route,Routes,useLocation} from 'react-router-dom';
import HomePage from './HomePage'
import WorkPage from './WorkPage'
import WorkPageDetail from './WorkPageDetail'

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <div className={styles.box}>
          <Link to="/">
            <div className={styles.boxleft}>A Good Lake</div>
          </Link>
          
          <div className={styles.boxright}>
            <Link to="/" className={location.pathname === "/" ? styles.selected : null}><p>HOME</p></Link>
            <Link to="/works" className={location.pathname === "/works" ? styles.selected : null}><p>WORKS</p></Link>
          </div>
        </div>
      </header>

      <section className={styles.content}>
          <Routes>
          <Route path="/" exact element={ <HomePage/>} />
          <Route path="/works" exact element={<WorkPage/>} />
          <Route path="/works/:id" exact element={ <WorkPageDetail/> } />
        </Routes>

      </section> 

      <footer className={styles.footer}>

        <p><b>© 2022 Tianchi YU</b></p>
        <p>Handmade with</p>
      </footer>
    </div>
  );
}

export default App;
