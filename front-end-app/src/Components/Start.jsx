import { Link } from "react-router-dom";

const Start = () => {
    return (
        <div class="container text-center">
            <div class="col align-self-center mt-5">
                <Link to="home" className="btn btn-outline-primary"> Get Started </Link>
            </div>
        </div>
    );
}

export default Start;