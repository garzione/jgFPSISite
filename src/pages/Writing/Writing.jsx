import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Writing = () => {

    const footerSty = {
        position: 'fixed',
        bottom: 5,
        fontSize:'20px',
        marginLeft: '10px'
    }
    return (
        <div style={{alignContent:'center',alignItems:'center',justifyContent:'center',width:'100vw', height:'100vh'}}>
        <div>
            <h1 style={{marginLeft:'45%'}}> Writing </h1>
            <h2 style={{marginLeft:'43%'}}> Not a writer (yet)</h2>

        </div>
        
        <footer style={footerSty}>
                <Link to='/'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
        
            </footer>
        </div>
    )
}

export default Writing