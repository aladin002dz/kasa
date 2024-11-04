import logo from '@assets/kasa-logo.svg'
import Navigation from '@components/Navigation/Navigation.jsx';
import './Header.css'
 
const Header = () => {


  return (
    <header id="header" className='banner-header'>
      <h1><img src={logo} alt="Logo du site Kasa" /></h1>
      <Navigation />
    </header>
  );

}

export default Header