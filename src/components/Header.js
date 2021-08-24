import '../styles/App.css';
import '../styles/Header.css';
import icon from '../images/logo_teamwork.png';

function Header(props) {

    function SearchRecord(e){
    props.setSearchQry(e.target.value.trim())
    }

    return (
        <div className="header">
            <div className="header-contain">
                <div className="icon-img"><img src={icon} alt="icon" /></div>
                <div className='header-txt'>Employee Data</div>
            
                    {/* <input type="text" placeholder="Search" onChange={props.SearchApt} /> */}
                <input type="text" placeholder="Search" onChange={SearchRecord}/>
            </div>
        </div>
    );
}



export default Header;