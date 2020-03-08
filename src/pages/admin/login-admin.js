import React,{useState, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import logo from "../../img/tix-biglogo.png";
import * as action from "../../redux/actions/index";
import { connect } from "react-redux";

function LoginAdmin(props) {
    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: ""
    })
    const handleOnChange = e => {
        let { value, name } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }
    // const memorized = useMemo(()=>{handleOnChange(),[]})
    const handleSubmit = e => {
        e.preventDefault();
        console.log(props.history);
        props.adminLogin(state, props.history)
    }
    
    
    useEffect(() => {
        console.log(props.history);

    }, [props]);


    return (
        <div className="signin">
            <div className="signin__wrapper">
                <NavLink to="/">
                    <img className="signin__img" alt="logo-brand" src={logo} />
                </NavLink>
                <p>Truy Cập Tài Khoản Quản Trị Viên</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Tài Khoản</label>
                        <input type="text" className="form-control" name="taiKhoan" onChange={handleOnChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Mật Khẩu</label>
                        <input type="text" className="form-control" name="matKhau" onChange={handleOnChange} />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Đăng Nhập
                    </button>
                </form>


            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        adminLogin: (user, history) => {
            dispatch(action.actLoginAdmin(user, history))
        }
    }
}

export default connect(null, mapDispatchToProps)(LoginAdmin);

