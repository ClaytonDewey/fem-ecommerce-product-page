import { Button } from './components';
import { Icon } from './svg';

const App = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>E-Commerce Product Page</h1>
      <Button className='btn btn-primary' type='button'>
        <Icon name='cart' /> Add to cart
      </Button>
    </div>
  );
};
export default App;
