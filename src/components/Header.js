import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {
                location.pathname === '/' && (
                <Button onClick={onAdd} text={showAdd? 'Close' : 'Add'} color={showAdd? 'red': 'green'}/>
                )}
                </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header
