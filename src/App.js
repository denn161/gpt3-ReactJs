
import {Blog,Feature,Header,Gpt3,Footer,Passibility} from './containers'
import {Cta,Navbar,Brand} from './components'

function App() {
  return (
    <div className="App">
    <div className='header__inner gradient-bg'>
      <Navbar/>
      <Header/>
      </div>
      <Brand/>
      <Gpt3/>
      <Feature/>
      <Passibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
