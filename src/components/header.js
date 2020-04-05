import React from "react"
import PropTypes from "prop-types"

// const Header = ({ siteTitle }) => (
//   <header>
//     <span>{siteTitle}</span>
//     <span>65 Park Row, EH1 4PE</span>
//   </header>
// )

class Header extends React.Component {
  render () {
    const {navItems} = this.props.headerProps;
    // const {siteTitle} = this.props.siteTitle;
    return (
      <header>
        <div className="lilbitbam">
          <h1>Lily Olsakovsky</h1>
          <h1>&</h1>
          <h1>Benjamin Bamberger</h1>
          
        </div>
        <h4>ARE GETTING MARRIED</h4>
        <ul className="headerMenu">
          {navItems.map(item => (
            <li>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
