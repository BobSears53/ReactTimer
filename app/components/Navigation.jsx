var React = require('react');
var {Link, IndexLink} = require('react-router')

var Navigation = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        React Timer App
                    </li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="Menu">
                    <li className="menu-text">
                        My Favorite Timekeepers <a href="http://www.tama.com/usa/" target="_blank">Tama</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Navigation;