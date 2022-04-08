import { Button } from './Button/Button';
import { Output } from './Output/Output';
import { GlobalProvider } from '../context/GlobalState';
import { buttons } from '../constants/constants';
import '../index.css';

const App = () => {
  return (
    <GlobalProvider>
      <header>
        <div className="logo-container">
          <div className="logo"></div>
        </div>
      </header>
      <div
        className="calculator"
        data-testid="calculator"
      >
        <Output />
        {buttons.length > 0 && buttons.map((button: { symbol: string, dispatch: any }, index: number) => 
          button.symbol !== '' ? (
            <div key={`button-${index+1}`}>
              <Button symbol={button.symbol} dispatch={button.dispatch} />
            </div>
          ) : (<div key={`button-${index+1}`}></div>)
        )}
      </div>
    </GlobalProvider>
  )
}

export default App;