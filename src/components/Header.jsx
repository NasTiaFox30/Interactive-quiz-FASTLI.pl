import logo from '../assets/logo-vector.svg';

function Header() {
  return (
<header>
    <div className="logo"><a href="https://fastli.pl/"><img src={logo} /></a><b>  ~ Znajdź dla siebie fachowca ~ </b></div>
        </header>
    );
}

export default Header;